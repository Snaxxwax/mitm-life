---
title: "WiFi Security Assessment Checklist"
description: "A comprehensive checklist for conducting professional wireless security assessments and red team operations"
pubDate: 2025-08-28
category: "resources"
tags: ["checklist", "wifi-security", "assessment", "methodology"]
author: "MITM.life"
difficulty: "intermediate"
readTime: "10 min"
---

# WiFi Security Assessment Checklist

A comprehensive checklist for conducting professional wireless security assessments and red team operations.

## Pre-Assessment Phase

### Legal and Authorization
- [ ] **Written Authorization**: Obtain signed statement of work/authorization letter
- [ ] **Scope Definition**: Clearly define testing boundaries and limitations
- [ ] **Emergency Contacts**: Identify key contacts for technical issues
- [ ] **Incident Response**: Establish procedures if critical vulnerabilities found
- [ ] **Data Handling**: Define data retention and destruction policies
- [ ] **Legal Compliance**: Ensure compliance with local wireless regulations

### Equipment Preparation
- [ ] **WiFi Adapters**: 
  - [ ] Primary adapter with monitor mode support (Alfa AWUS036ACS recommended)
  - [ ] Backup adapter for dual-band operations
  - [ ] USB extension cable for optimal positioning
- [ ] **Antennas**:
  - [ ] High-gain directional antenna (15+ dBi)
  - [ ] Omnidirectional antenna for 360° coverage
  - [ ] Magnetic mount for vehicle operations
- [ ] **Power Solutions**:
  - [ ] Portable battery pack (20,000+ mAh)
  - [ ] Car power adapter for extended operations
  - [ ] Power cables and adapters
- [ ] **Computing Platform**:
  - [ ] Laptop with Kali Linux or similar
  - [ ] Raspberry Pi for covert operations
  - [ ] Smartphone with WiFi analysis apps

### Software Verification
- [ ] **Core Tools**:
  - [ ] aircrack-ng suite (latest version)
  - [ ] hashcat with GPU support
  - [ ] hcxtools for PMKID attacks
  - [ ] Wifite for automation
  - [ ] hostapd for evil twin attacks
- [ ] **Specialized Tools**:
  - [ ] WiFi Pineapple firmware/modules
  - [ ] Kismet for advanced monitoring
  - [ ] Wireshark for packet analysis
  - [ ] Reaver for WPS attacks
- [ ] **Custom Scripts**: Verify all custom automation scripts

## Reconnaissance Phase

### Passive Information Gathering
- [ ] **Physical Reconnaissance**:
  - [ ] Map building layout and access points
  - [ ] Identify external antennas and equipment
  - [ ] Note security cameras and personnel patterns
  - [ ] Document parking areas and optimal testing positions
- [ ] **OSINT Collection**:
  - [ ] Research target organization's IT policies
  - [ ] Search for published network information
  - [ ] Check social media for network names/passwords
  - [ ] Review job postings for technology stack details

### Wireless Survey
- [ ] **Network Discovery**:
  - [ ] Conduct comprehensive channel scan (2.4GHz and 5GHz)
  - [ ] Document all discovered SSIDs and BSSIDs
  - [ ] Record signal strength and channel information
  - [ ] Identify hidden networks through probe requests
  - [ ] Map client devices to access points
- [ ] **Signal Analysis**:
  - [ ] Create heatmaps of network coverage
  - [ ] Identify optimal attack positions
  - [ ] Document interference and noise levels
  - [ ] Note coverage gaps and dead zones

### Target Prioritization
- [ ] **Vulnerability Assessment**:
  - [ ] Identify WEP networks (highest priority)
  - [ ] List WPS-enabled access points
  - [ ] Document open/unencrypted networks
  - [ ] Note guest networks and captive portals
- [ ] **Risk Analysis**:
  - [ ] Prioritize by signal strength (accessibility)
  - [ ] Consider network naming conventions
  - [ ] Identify high-value target networks
  - [ ] Document enterprise vs. personal networks

## Active Assessment Phase

### WEP Network Testing
- [ ] **Attack Execution**:
  - [ ] Capture sufficient IV packets (>10,000)
  - [ ] Perform ARP replay attacks if needed
  - [ ] Execute statistical attacks (Korek, PTW)
  - [ ] Document time to compromise
- [ ] **Key Recovery**:
  - [ ] Successfully recover WEP key
  - [ ] Test network access with recovered key
  - [ ] Document internal network access level

### WPS Assessment
- [ ] **Discovery and Enumeration**:
  - [ ] Identify WPS-enabled access points
  - [ ] Check WPS lock status
  - [ ] Document WPS version and implementation
- [ ] **Attack Methods**:
  - [ ] Pixie Dust attack (offline)
  - [ ] PIN brute force with rate limiting bypass
  - [ ] MAC address rotation for persistent attacks
  - [ ] Document successful PIN recovery

### WPA/WPA2/WPA3 Testing
- [ ] **Handshake Capture**:
  - [ ] Successfully capture 4-way handshake
  - [ ] Verify handshake integrity
  - [ ] Document capture time and method
- [ ] **PMKID Attacks** (WPA2):
  - [ ] Capture PMKID without client interaction
  - [ ] Convert to hashcat format
  - [ ] Execute offline dictionary attacks
- [ ] **Password Attacks**:
  - [ ] Dictionary attacks with common wordlists
  - [ ] Rule-based attacks with password patterns
  - [ ] Brute force attacks (if time permits)
  - [ ] Document cracking success rate and time

### Enterprise Network Assessment
- [ ] **802.1X/EAP Testing**:
  - [ ] Identify EAP methods in use
  - [ ] Test for certificate validation issues
  - [ ] Attempt credential harvesting attacks
  - [ ] Document authentication bypasses
- [ ] **Certificate Analysis**:
  - [ ] Examine server certificates
  - [ ] Test certificate pinning
  - [ ] Look for weak certificate validation

## Evil Twin and Social Engineering

### Rogue Access Point Deployment
- [ ] **Infrastructure Setup**:
  - [ ] Deploy convincing evil twin AP
  - [ ] Configure identical SSID and settings
  - [ ] Position for optimal client attraction
  - [ ] Implement captive portal
- [ ] **Client Attraction**:
  - [ ] De-authenticate clients from legitimate AP
  - [ ] Monitor client connection attempts
  - [ ] Document connection success rate
- [ ] **Credential Harvesting**:
  - [ ] Deploy realistic credential portal
  - [ ] Capture submitted credentials
  - [ ] Test credential validity
  - [ ] Document user interaction patterns

### Advanced Attack Scenarios
- [ ] **Karma Attacks**:
  - [ ] Respond to client probe requests
  - [ ] Create fake networks based on client history
  - [ ] Document automatic connection behavior
- [ ] **Captive Portal Bypass**:
  - [ ] Test MAC address spoofing
  - [ ] Attempt DNS tunneling
  - [ ] Try HTTP header manipulation
  - [ ] Document bypass methods

## Post-Exploitation Assessment

### Network Access Verification
- [ ] **Connectivity Testing**:
  - [ ] Verify internet access through compromised network
  - [ ] Test internal network accessibility
  - [ ] Document network segmentation effectiveness
- [ ] **Internal Reconnaissance**:
  - [ ] Scan internal network ranges
  - [ ] Identify active hosts and services
  - [ ] Document accessible resources
  - [ ] Test for lateral movement opportunities

### Data Collection
- [ ] **Network Traffic Analysis**:
  - [ ] Capture and analyze network traffic
  - [ ] Identify sensitive data transmission
  - [ ] Document encryption usage
  - [ ] Look for credential transmission
- [ ] **Service Enumeration**:
  - [ ] Identify internal services and applications
  - [ ] Test for default credentials
  - [ ] Document security misconfigurations

## Defense Evasion and Operational Security

### Stealth Operations
- [ ] **MAC Address Management**:
  - [ ] Randomize MAC addresses regularly
  - [ ] Use OUI from common manufacturers
  - [ ] Document MAC rotation schedule
- [ ] **Power Management**:
  - [ ] Minimize transmission power when possible
  - [ ] Use directional antennas to reduce detection
  - [ ] Monitor for defensive responses
- [ ] **Timing and Patterns**:
  - [ ] Vary attack timing to avoid pattern recognition
  - [ ] Implement random delays between operations
  - [ ] Monitor for security team responses

### Detection Avoidance
- [ ] **Monitoring for Countermeasures**:
  - [ ] Watch for new access points (honeypots)
  - [ ] Monitor for unusual network behavior
  - [ ] Look for security personnel activity
  - [ ] Document any defensive responses
- [ ] **Operational Adjustments**:
  - [ ] Modify tactics if detection suspected
  - [ ] Change physical locations regularly
  - [ ] Adjust attack intensity based on environment

## Documentation and Reporting

### Technical Documentation
- [ ] **Network Inventory**:
  - [ ] Complete list of discovered networks
  - [ ] Security configurations for each network
  - [ ] Vulnerability assessment results
  - [ ] Client device observations
- [ ] **Attack Documentation**:
  - [ ] Step-by-step attack procedures used
  - [ ] Time required for each successful attack
  - [ ] Tools and techniques employed
  - [ ] Screenshots and evidence collection

### Risk Assessment
- [ ] **Vulnerability Classification**:
  - [ ] Critical: Immediate compromise possible
  - [ ] High: Compromise likely with moderate effort
  - [ ] Medium: Compromise possible with significant effort
  - [ ] Low: Theoretical vulnerabilities or hardened targets
- [ ] **Business Impact Analysis**:
  - [ ] Data confidentiality risks
  - [ ] Network availability impacts
  - [ ] Compliance and regulatory implications
  - [ ] Reputation and customer trust impacts

### Remediation Recommendations
- [ ] **Immediate Actions** (Critical/High Risk):
  - [ ] Disable WEP encryption immediately
  - [ ] Disable WPS on all access points
  - [ ] Change default/weak passwords
  - [ ] Update firmware on vulnerable devices
- [ ] **Short-term Improvements** (30-90 days):
  - [ ] Implement WPA3 where supported
  - [ ] Deploy wireless intrusion detection
  - [ ] Implement certificate-based authentication
  - [ ] Establish guest network segmentation
- [ ] **Long-term Strategy** (3-12 months):
  - [ ] Comprehensive wireless security policy
  - [ ] Regular security assessments
  - [ ] Employee security awareness training
  - [ ] Advanced monitoring and analytics

## Quality Assurance and Validation

### Results Verification
- [ ] **Double-check Critical Findings**:
  - [ ] Verify successful password cracks
  - [ ] Confirm network access achievements
  - [ ] Validate privilege escalation claims
  - [ ] Test remediation recommendations
- [ ] **Evidence Integrity**:
  - [ ] Secure storage of captured data
  - [ ] Hash verification of evidence files
  - [ ] Proper chain of custody documentation
  - [ ] Encrypt sensitive findings

### Peer Review
- [ ] **Technical Review**:
  - [ ] Have senior team member review findings
  - [ ] Verify attack methodology accuracy
  - [ ] Confirm risk ratings and recommendations
  - [ ] Review report for technical accuracy
- [ ] **Quality Check**:
  - [ ] Proofread all documentation
  - [ ] Verify client-specific information
  - [ ] Ensure professional presentation
  - [ ] Check for sensitive information disclosure

## Post-Assessment Activities

### Data Management
- [ ] **Cleanup Requirements**:
  - [ ] Remove any planted devices or software
  - [ ] Delete temporary files and logs
  - [ ] Clear browser history and credentials
  - [ ] Reset network configurations
- [ ] **Data Retention**:
  - [ ] Follow agreed-upon data retention policy
  - [ ] Securely store evidence per legal requirements
  - [ ] Schedule data destruction dates
  - [ ] Document data handling procedures

### Client Communication
- [ ] **Initial Briefing**:
  - [ ] Provide high-level findings summary
  - [ ] Highlight critical vulnerabilities
  - [ ] Discuss immediate remediation needs
  - [ ] Schedule detailed presentation
- [ ] **Final Reporting**:
  - [ ] Deliver comprehensive written report
  - [ ] Present findings to technical and executive teams
  - [ ] Provide remediation timeline recommendations
  - [ ] Offer ongoing support and retesting services

## Emergency Procedures

### Incident Response
- [ ] **If Critical Vulnerability Found**:
  - [ ] Immediately notify client emergency contact
  - [ ] Document the vulnerability thoroughly
  - [ ] Provide immediate mitigation steps
  - [ ] Assist with emergency remediation if requested
- [ ] **If Law Enforcement Interest**:
  - [ ] Stop all testing activities immediately
  - [ ] Contact client and legal counsel
  - [ ] Preserve all evidence and documentation
  - [ ] Cooperate fully with legal requirements

### Equipment Issues
- [ ] **Hardware Failure**:
  - [ ] Have backup equipment readily available
  - [ ] Document any testing interruptions
  - [ ] Adjust timeline and scope if necessary
  - [ ] Maintain communication with client
- [ ] **Detection by Security**:
  - [ ] Cease activities if confronted
  - [ ] Present authorization documentation
  - [ ] Contact client representative immediately
  - [ ] Document the encounter thoroughly

---

## Reporting Template Structure

### Executive Summary
- Assessment scope and objectives
- High-level findings summary
- Risk rating distribution
- Key recommendations

### Technical Findings
For each vulnerability:
- **Description**: Technical details of the vulnerability
- **Risk Rating**: Critical/High/Medium/Low
- **Impact**: Business impact if exploited
- **Evidence**: Screenshots, logs, proof of concept
- **Remediation**: Specific steps to fix the issue

### Methodology
- Tools and techniques used
- Assessment timeline
- Limitations and constraints
- Testing approach rationale

### Appendices
- Network inventory
- Detailed tool output
- Configuration examples
- Reference materials

---

*This checklist ensures comprehensive coverage of wireless security assessment activities while maintaining professional standards and legal compliance.*