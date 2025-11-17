export interface Question {
  id: string;
  question: string;
  answer: string;
  marks: number;
  category: 'short' | 'medium' | 'long';
  year: '2020' | '2022' | '2024';
}

// MC2022 Questions
export const questions2022: Question[] = [
  // Short Answer Questions (2 marks each)
  {
    id: '2022-short-1',
    question: 'Define GPRS.',
    answer: 'GPRS (General Packet Radio Service) is a packet-switched data service for GSM networks that enables mobile devices to transmit IP packets over the cellular network. It provides "always-on" data connectivity, charging by volume, and supports services such as email and web browsing.',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: '2022-short-2',
    question: 'What is the purpose of HLR?',
    answer: 'HLR (Home Location Register) is a central database in a mobile network that stores permanent subscriber information (profile, services), the subscriber\'s current status and location information (which VLR/GMSC they are registered with). It is used for call routing, authentication, and mobility management.',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: '2022-short-3',
    question: 'What is Ad-Hoc Network?',
    answer: 'An ad-hoc network is a decentralized wireless network where nodes communicate directly without fixed infrastructure or centralized administration. Nodes join/leave dynamically and typically handle routing cooperatively (e.g., MANETs).',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: '2022-short-4',
    question: 'Define DHCP.',
    answer: 'DHCP (Dynamic Host Configuration Protocol) is a protocol that automatically assigns IP addresses and other network configuration parameters (gateway, DNS) to hosts on a network to allow them to communicate.',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: '2022-short-5',
    question: 'What do you mean by SGSN?',
    answer: 'SGSN (Serving GPRS Support Node) is a GPRS core network element that handles packet data session management, mobility management, authentication, and routing for mobile subscribers in its service area. It delivers data packets between mobile devices and the GGSN.',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: '2022-short-6',
    question: 'What is Tunnelling Process?',
    answer: 'Tunnelling is encapsulating packets of one protocol inside another protocol to traverse an intermediate network; in mobile networks it\'s used (e.g., GTP, IPsec, L2TP) to carry subscriber data/control between nodes while preserving addressing and security contexts.',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: '2022-short-7',
    question: 'Define I-mode.',
    answer: 'i-mode is a mobile internet service and portal (originated by NTT DoCoMo) that provided lightweight web content (cHTML) and mobile services optimized for early mobile phones — a push toward mobile-optimized content and value-added services.',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: '2022-short-8',
    question: 'Write the difference between Client-Server & Peer-to-Peer Architecture.',
    answer: 'Client-Server: centralized servers provide services/resources; clients request services; central control, easier administration.\n\nPeer-to-Peer: nodes act as both clients and servers, decentralized resource sharing, better robustness to single point failure but more complex discovery/routing.',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: '2022-short-9',
    question: 'What is UMTS?',
    answer: 'UMTS (Universal Mobile Telecommunications System) is a 3G mobile cellular system based on WCDMA radio access, providing higher data rates, multimedia services, and improved spectral efficiency compared to GSM.',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: '2022-short-10',
    question: 'Define IEEE 802.11.',
    answer: 'IEEE 802.11 is the family of standards for Wireless Local Area Network (WLAN) technologies (Wi-Fi), defining PHY and MAC layers for wireless connectivity in the 2.4, 5, (and 6) GHz bands.',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  
  // Medium Answer Questions (5 marks each)
  {
    id: '2022-medium-1',
    question: 'Explain N-Tier architecture with suitable diagram.',
    answer: 'An N-Tier architecture splits an application into multiple logical layers (tiers) each with distinct responsibilities. Common tiers:\n\n• Presentation Tier (Client): UI, input validation; browsers/mobile apps.\n• Application/Business Logic Tier: Implements business rules, session management; often on app servers.\n• Data Tier: Database servers, persistent storage and data access.\n\nIn N-tier, the client communicates with the middle tier(s) which in turn communicate with the data tier. Benefits: separation of concerns, scalability (each tier can be scaled independently), maintainability, reusability and better security (data tier protected).\n\nDiagram suggestion: Client → Web/App Server → Business Logic → Database Server. For mobile computing, add a network layer between client and app server and caching/CDN for content delivery.',
    marks: 5,
    category: 'medium',
    year: '2022',
  },
  {
    id: '2022-medium-2',
    question: 'Write the difference between IPv4 & IPv6; mobile IP.',
    answer: 'IPv4 vs IPv6:\n\n• Address size: IPv4 = 32-bit (≈4.3 billion addresses); IPv6 = 128-bit (vast address space).\n• Header: IPv6 has simplified header for faster routing, mandatory IPsec support optional in IPv4.\n• Auto-configuration: IPv6 supports stateless address autoconfiguration (SLAAC).\n• Fragmentation: Done by source in IPv6; routers don\'t fragment.\n• Address representation: IPv4 dotted decimal; IPv6 hex colon notation.\n• Mobility: IPv6 includes improvements supporting mobile nodes more directly (e.g., route optimization in Mobile IPv6).\n\nMobile IP (concept): protocol allowing mobile nodes to move between networks while maintaining a permanent IP address. Key elements: Home Agent (HA), Foreign Agent (FA) and Care-of Address (CoA). Packets to mobile node are intercepted by HA and tunneled to CoA; reverse path uses routing or tunneling. Mobile IPv6 simplifies some roles and eliminates separate FA in many deployments.',
    marks: 5,
    category: 'medium',
    year: '2022',
  },
  {
    id: '2022-medium-3',
    question: 'What is WLAN? Write down the advantages and disadvantages of WLAN.',
    answer: 'WLAN (Wireless Local Area Network): allows devices to connect and communicate wirelessly within a local area using standards like IEEE 802.11.\n\nAdvantages:\n• Mobility and ease of installation (no cabling), flexibility.\n• Rapid deployment and scalability for adding devices.\n• Supports mobile applications and BYOD.\n\nDisadvantages:\n• Lower throughput/latency vs wired in some cases; interference and range limits.\n• Security concerns (need robust encryption/authentication).\n• Dependence on radio environment: obstacles, multipath, and noise can degrade performance.\n• Shared medium: throughput shared among users.',
    marks: 5,
    category: 'medium',
    year: '2022',
  },
  {
    id: '2022-medium-4',
    question: 'What do you mean by Near-far & Hidden-exposed terminal?',
    answer: 'Near–Far problem: In cellular or shared wireless channels, a strong nearby transmitter can drown out a weaker distant one at the receiver, making capture and fairness issues. Power control is used to mitigate it so all signals arrive at similar power.\n\nHidden Terminal Problem: Two nodes (A and C) both out of each other\'s range but both can talk to a common receiver B. A and C may transmit simultaneously causing collisions at B because they can\'t sense each other. Solutions: RTS/CTS handshake (802.11).\n\nExposed Terminal Problem: A node is prevented from transmitting because it senses another transmission nearby though its transmission would not interfere at intended receiver. This reduces spatial reuse. Protocols that use directional information or RTS/CTS can help mitigate.',
    marks: 5,
    category: 'medium',
    year: '2022',
  },
  {
    id: '2022-medium-5',
    question: 'Explain GPRS operations with its architecture.',
    answer: 'GPRS architecture (high-level):\n\n• Mobile Station (MS): User device + SIM.\n• Base Station Subsystem (BSS): BTS + BSC handling radio.\n• SGSN (Serving GPRS Support Node): Mobility management, authentication, packet routing in an area.\n• GGSN (Gateway GPRS Support Node): Interface to external packet data networks (e.g., Internet); maps mobile IP addresses and provides packet data gateway function.\n• Billing & HLR/AuC: HLR for subscriber profile; AuC for authentication.\n\nGPRS operation flow:\n\n• Attach: MS requests GPRS attach; SGSN authenticates and updates location (HLR) if needed.\n• PDP Context Activation: MS requests a PDP (Packet Data Protocol) context; SGSN and GGSN allocate an IP address and create a tunnel (GTP—GPRS Tunnelling Protocol) between SGSN and GGSN.\n• Data Transfer: User IP packets are encapsulated and forwarded via GTP tunnels through the GPRS backbone to the GGSN, which forwards to external networks and vice versa. SGSN tracks user\'s location for routing.\n• Detach: When user disconnects, PDP context is deactivated and resources freed.\n\nKey characteristics: packet switching, dynamic allocation of radio resources, billing by volume, support for multiple APNs and QoS profiles.',
    marks: 5,
    category: 'medium',
    year: '2022',
  },
  {
    id: '2022-medium-6',
    question: 'What is Mobile IP and how it works?',
    answer: 'Mobile IP enables a host to remain reachable at the same IP address while changing its point of attachment to the Internet.\n\nEntities:\n• Home Agent (HA): Located in home network; maintains binding of the mobile node\'s home address → care-of address.\n• Foreign Agent (FA): Provides care-of address in foreign network (Mobile IPv4); in Mobile IPv6 mobile node can use CoA directly.\n• Mobile Node (MN): The mobile device that moves.\n\nOperation:\n• Registration: When MN enters foreign network, it obtains a Care-of Address (CoA) from FA or via DHCP and registers this CoA with its HA.\n• Tunnelling: Packets addressed to MN\'s home address are intercepted by HA and tunneled to CoA (e.g., via IP-in-IP or GRE). At the CoA, packets are decapsulated and delivered. Reverse traffic may be routed directly or via HA depending on route optimization.\n• Route Optimization: Allows correspondent nodes to learn MN\'s CoA to avoid triangular routing, improving latency.\n\nChallenges: latency during handover, security (authenticating registrations), and ensuring minimal packet loss during mobility.',
    marks: 5,
    category: 'medium',
    year: '2022',
  },
  {
    id: '2022-medium-7',
    question: 'Write the difference between SMS & MMS.',
    answer: 'SMS (Short Message Service): Text messages up to 160 characters (GSM 7-bit) delivered via control channel / store-and-forward by SMSC. Primarily text.\n\nMMS (Multimedia Messaging Service): Allows multimedia content (images, audio, video), larger message sizes, delivered using packet data (WAP/HTTP) and MMS centers (MMSC). Requires data connection and device capability.\n\nKey differences: content type (text vs multimedia), size, delivery mechanism, and richer presentation in MMS.',
    marks: 5,
    category: 'medium',
    year: '2022',
  },
  
  // Long Answer Questions (10 marks)
  {
    id: '2022-long-1',
    question: 'Define GSM. Explain with schematic diagram the system architecture of GSM with brief description of different components.',
    answer: 'Definition (brief):\n\nGSM (Global System for Mobile communications) is a second-generation (2G) digital cellular standard for mobile voice and data communications using TDMA on frequencies typically 900/1800/1900 MHz. It provides subscriber mobility, secure voice, and basic data services (e.g., SMS, GPRS when extended).\n\nGSM system architecture (high level with components):\n\n• Mobile Station (MS): Consists of Mobile Equipment (ME; the handset) and Subscriber Identity Module (SIM) containing IMSI, authentication keys, and subscription info.\n\n• Base Station Subsystem (BSS):\n  – Base Transceiver Station (BTS): Radio transceivers communicating directly with MS over the air interface (Um). Each BTS handles multiple voice/data channels.\n  – Base Station Controller (BSC): Controls multiple BTSs; responsible for radio resource management, handover between BTSs in same BSC, frequency hopping, power control.\n\n• Network and Switching Subsystem (NSS): Core network elements\n  – Mobile Switching Center (MSC): Central switching node that handles circuit switched calls, mobility management, and interconnection with PSTN.\n  – Home Location Register (HLR): Central database of subscriber permanent data and current location pointer (which VLR/MSC).\n  – Visitor Location Register (VLR): Temporary database associated with an MSC storing transient subscriber data for visiting subscribers.\n  – Authentication Center (AuC): Holds secret keys for authentication and encryption (A3/A8 algorithms).\n  – Equipment Identity Register (EIR): Database of ME identifiers (IMEI) to blacklist stolen devices.\n  – Gateway MSC (GMSC): Interfaces with external networks and routes calls to subscriber\'s MSC/visited MSC.\n\nOperation & interfaces:\n\nUm: Air interface between MS and BTS (TDMA frames, logical channels).\nAbis: BTS ↔ BSC interface.\nA: BSC ↔ MSC interface.\nGn/Gp (with GPRS): For packet data when GPRS present.\n\nCall flow (simplified):\n\nWhen a call arrives for a subscriber, the GMSC queries the HLR to find the visitor location (VLR/MSC) and routes the call to serving MSC, which pages the MS via BSC/BTS. During mobility, MSC/BSC coordinate handovers and location updates with HLR/VLR.\n\nSecurity features: authentication, temporary identities (TMSI) to hide IMSI, and encryption on air link (A5 ciphering).\n\nAdvantages of GSM: standardized interoperable network, global roaming, strong signaling using SS7, and value-added services (SMS).\n\n(A labeled block diagram with MS ↔ BTS ↔ BSC ↔ MSC ↔ PSTN/IN and databases HLR/AuC/EIR/VLR around MSC would complete the answer.)',
    marks: 10,
    category: 'long',
    year: '2022',
  },
  {
    id: '2022-long-2',
    question: 'How does WAP work? Describe WAP protocol stack. Write the advantages of WAP.',
    answer: 'What is WAP?\n\nWAP (Wireless Application Protocol) is a suite of protocols designed to allow resource-constrained wireless devices (early mobile phones) to access internet content and services. It introduced WML (Wireless Markup Language) and lightweight protocols optimized for low bandwidth, high latency, and limited display.\n\nHow WAP works (concept):\n\nA mobile device with WAP client (microbrowser) requests a WML page using a URL. Request goes over a wireless bearer (GPRS, CSD) to the carrier\'s WAP Gateway/Proxy (also called WAP Gateway).\n\nWAP Gateway translates between WAP protocols and standard Internet protocols (HTTP/HTML) — it can fetch HTML, transcode or fetch WML content, and optimize/proxy content for the device.\n\nWAP Gateway also can handle security (WTLS) and convert to TLS/HTTPS for backend connections.\n\nWAP Protocol Stack (layers top→bottom):\n\n• WAE (Wireless Application Environment): Application layer — WML, WMLScript, UA (microbrowser).\n• WSP (Wireless Session Protocol): Session layer — provides session services like HTTP semantics optimized for wireless.\n• WTP (Wireless Transaction Protocol): Transaction layer — lightweight request/response (reliable and unreliable transactions).\n• WTLS (Wireless Transport Layer Security): Security layer — adapted TLS for wireless (data integrity, privacy, authentication).\n• WDP (Wireless Datagram Protocol): Transport adaptation layer — provides uniform interface to upper layers over different bearer networks (SMS, CSD, GPRS).\n• Bearers: Underlying transport mechanisms — SMS, CSD, GPRS, CDPD, etc.\n\nFlow summary: Microbrowser (WAE) → WSP → WTP → WTLS → WDP → bearer.\n\nThe WAP gateway converts WSP/WTP/WTLS to HTTP/TCP/TLS for the Internet.\n\nAdvantages of WAP:\n\n• Designed for low bandwidth and high-latency wireless links.\n• Small footprint protocols for resource-constrained devices.\n• Standardization enabling interoperable mobile content and services.\n• WTLS provides an added security layer appropriate for wireless.\n• Content adaptation (WAP gateway) enables existing web content to be served to mobiles.\n\nLimitations (brief): dependency on gateways (privacy concerns), initial devices limited in capability, and WML was less flexible than HTML — ultimately replaced by richer mobile web standards.',
    marks: 10,
    category: 'long',
    year: '2022',
  },
  {
    id: '2022-long-3',
    question: 'Explain the types of Multiplexing Techniques. Write the advantage of Multiplexing.',
    answer: 'Multiplexing: technique of combining multiple signals for transmission over a shared medium to utilize resources efficiently.\n\nMain types:\n\n• Frequency Division Multiplexing (FDM): Each signal is modulated onto a different carrier frequency; subchannels occupy distinct frequency bands simultaneously. Used in analog systems, cable TV, and radio.\n\n• Time Division Multiplexing (TDM): Time is divided into frames and slots assigned to different channels; each channel transmits in its time slot in a round-robin manner.\n  Synchronous TDM: fixed slot assignment.\n  Statistical (or asynchronous) TDM: slots allocated dynamically based on demand (also called STDM).\n\n• Wavelength Division Multiplexing (WDM): (optical analog of FDM) Multiple optical carrier wavelengths on a single fiber; used in fiber-optic communications (CWDM, DWDM).\n\n• Code Division Multiple Access (CDMA): Signals share same spectrum simultaneously but are distinguished by orthogonal or pseudo-random codes; receivers correlate with intended code to recover signal. Provides resistance to interference and multipath; used in cellular systems (IS-95, WCDMA).\n\n• Space Division Multiplexing (SDM): Separate physical paths (e.g., multiple fibers, spatially separated antennas) carry distinct channels. MIMO is a form of exploiting spatial channels.\n\n• Polarization Division Multiplexing (PDM): Two orthogonal polarizations carry separate streams over same frequency (used in optics and microwaves).\n\nAdvantages of Multiplexing:\n\n• Efficient utilization of physical medium (higher aggregate throughput).\n• Cost savings by sharing infrastructure among multiple channels.\n• Supports simultaneous data/voice streams on single link.\n• Facilitates scalable networks (add more logical channels without new physical line).\n• In wireless, CDMA provides soft capacity increase and inherent security through coding.\n\nExample application: TDM in T1/E1 links, FDM in analog telephony and broadcasting, WDM in optical backbone, CDMA in 3G cellular.',
    marks: 10,
    category: 'long',
    year: '2022',
  },
  {
    id: '2022-long-4',
    question: 'Write short notes on: (i) Bluetooth (ii) WML',
    answer: '(i) Bluetooth (short note — ∼5 marks):\n\nBluetooth is a short-range wireless technology for exchange of data between devices (phones, headsets, PCs) typically within 10 meters (Class 2) though ranges vary. It uses frequency hopping spread spectrum in 2.4 GHz ISM band and defines profiles for specific applications (e.g., HFP for headset, A2DP for audio).\n\nCore components:\n• Piconet: a network of one master and up to seven active slaves; scatternets can connect multiple piconets.\n• Protocol stack: LMP (Link Manager), L2CAP (Logical Link Control and Adaptation Protocol), RFCOMM (serial emulation), SDP (Service Discovery Protocol), and host profiles.\n• Security: pairing, link key, and optional encryption.\n• Applications: headset, file transfer (OBEX), tethering, IoT peripherals.\n\nAdvantages: low power, easy pairing, ubiquitous support; limitations: limited range and throughput compared to Wi-Fi, interference potential in crowded 2.4 GHz band.\n\n(ii) WML (Wireless Markup Language — short note — ∼5 marks):\n\nWML is an XML-based markup language optimized for WAP devices (small displays, limited input). It structures content into decks (documents) composed of cards (single user interaction screens). WML supports navigation, event handling (via WMLScript), and access to device parameters. WML was designed for low bandwidth and constrained displays, enabling efficient, small-sized pages and quick rendering by microbrowsers. WML has largely been superseded by XHTML Mobile Profile and modern mobile HTML, but historically it was key in early mobile web services.',
    marks: 10,
    category: 'long',
    year: '2022',
  },
];

// MC2024 Questions
export const questions2024: Question[] = [
  // Short Answer Questions (2 marks each)
  {
    id: '2024-short-1',
    question: 'Define Network Availability.',
    answer: 'Network availability is the fraction (often expressed as a percentage) of time a network or service is operational and able to provide the required functionality. It equals (uptime) / (total time) and is affected by failures, maintenance, and outages. High availability is critical for mobile services.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: '2024-short-2',
    question: 'Mention the name of the layers present in N-tier architecture.',
    answer: 'Typical N-tier (multitier) architecture layers:\n\nPresentation layer (UI / client),\nApplication / Business logic layer,\nData access layer (and sometimes a separate Database layer). In larger systems there may be service, integration, and persistence tiers as well.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: '2024-short-3',
    question: 'What is the role of the Base Transceiver Station (BTS) in a mobile communication system?',
    answer: 'BTS provides the radio interface to mobile stations: it transmits/receives radio signals, performs modulation/demodulation, handles channel coding, controls radio resources, and connects mobiles to the network via the Base Station Controller (BSC) or equivalent.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: '2024-short-4',
    question: 'Differentiate Ground Wave Propagation and Sky Wave Propagation (brief).',
    answer: 'Ground wave: Follows the Earth\'s surface, suitable for low frequencies (kHz–low MHz), relatively short-to-medium range, less affected by ionosphere.\n\nSky wave: Radio waves refracted/ reflected by the ionosphere back to Earth, used for long-distance HF communication (shortwave), depends on ionospheric conditions and time of day.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: '2024-short-5',
    question: 'Which technology is used in 4th Generation of Mobile Communication?',
    answer: 'LTE (Long Term Evolution) / IMS-based IP technologies and in later evolution LTE-Advanced. Core idea: all-IP packet-switched architecture, high data rates, low latency.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: '2024-short-6',
    question: 'What is the role of WAP PUSH process?',
    answer: 'WAP Push allows a server to send an HTTP-like message that triggers the mobile device to open a URL or install content (a "push" notification for WAP content). It\'s used to deliver service messages, links, or configuration info to mobile devices.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: '2024-short-7',
    question: 'Mention the names of the components of Mobile IP.',
    answer: 'Key Mobile IP components: Mobile Node (MN), Home Agent (HA), Foreign Agent (FA) (if used), and Correspondent Node (CN). Also includes care-of-addresses (CoA) and registration messages.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: '2024-short-8',
    question: 'Differentiate between Home Location Register (HLR) and Visitor (Foreign) Location Register (VLR/FLR).',
    answer: 'HLR: Central database in the home network containing subscriber permanent data (profiling, subscription, last known location area).\n\nVLR: Temporary database in visited network that stores subscriber information for currently roaming users to handle calls/messages while they are in the visited area.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: '2024-short-9',
    question: 'Define NFC and Far Terminal.',
    answer: 'NFC (Near Field Communication): Short-range (a few cm) wireless communication standard for secure, close-range interactions (payments, pairing, tag reading).\n\nFar Terminal: (Interpretation in mobile context) normally refers to a terminal/device that is geographically remote (outside local radio cell), often used in contrast with "near terminal." (If the paper meant some other specific term, that can be elaborated.)',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: '2024-short-10',
    question: 'What does W-CDMA stand for?',
    answer: 'W-CDMA = Wideband Code Division Multiple Access — a 3G air interface using wideband CDMA spreading to carry higher data rates.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  
  // Medium Answer Questions (5 marks each)
  {
    id: '2024-medium-1',
    question: 'Differentiate between Amplitude Modulation (AM) and Frequency Modulation (FM).',
    answer: 'Basic principle: AM varies the amplitude of the carrier proportional to the message signal; FM varies the carrier frequency proportional to the message.\n\nNoise immunity: FM has better resistance to amplitude noise and interference (noise primarily affects amplitude), so FM typically gives better signal quality.\n\nBandwidth: AM requires bandwidth equal to twice the message bandwidth (two sidebands); FM bandwidth depends on frequency deviation and modulation index (Carson\'s rule) and can be larger.\n\nPower efficiency: In AM, carrier power does not carry information (wasted); FM transmits power over the carrier and sidebands differently—FM can be more power efficient for high fidelity.\n\nApplications: AM used for broadcast (AM radio), simple telemetry; FM for higher-fidelity audio broadcasting (FM radio), mobile radio links. (Diagram: small sketch showing carrier amplitude change vs carrier frequency change.)',
    marks: 5,
    category: 'medium',
    year: '2024',
  },
  {
    id: '2024-medium-2',
    question: 'Briefly explain UMTS architecture with a neat diagram.',
    answer: 'UMTS (3G) architecture has three main domains: User Equipment (UE), UTRAN (UMTS Terrestrial Radio Access Network), and Core Network (CN).\n\nUE: Mobile device + USIM.\n\nUTRAN: Composed of Node Bs (base stations) and RNCs (Radio Network Controllers). Node B handles air interface; RNC manages radio resources and handover.\n\nCore Network: Splits into CS (Circuit Switched) and PS (Packet Switched) domains. MSC/VLR handles voice; SGSN/GGSN handle packet data and Internet connectivity.\n\nHLR/AuC provide subscriber information/authentication. Flow: UE ↔ Node B ↔ RNC ↔ CN (MSC/SGSN etc.). UMTS uses W-CDMA for air interface. (Describe typical diagram: UE → NodeB → RNC → CN blocks with HLR/GGSN/MSC shown.)',
    marks: 5,
    category: 'medium',
    year: '2024',
  },
  {
    id: '2024-medium-3',
    question: 'Define Bluetooth Technology. Differentiate between Piconet and Scatternet. (Any five points)',
    answer: 'Bluetooth: A short-range wireless technology standard for exchanging data over short distances (typically up to 10 m for Class 2 devices), using frequency-hopping spread spectrum in the 2.4 GHz ISM band. Used for PANs, audio, file transfer, device pairing.\n\nPiconet vs Scatternet:\n\nPiconet: Basic Bluetooth ad-hoc network formed by one master and up to 7 active slave devices. All devices share the master\'s clock and hopping sequence.\n\nScatternet: Formed when multiple piconets are interconnected by devices participating in more than one piconet (a device may act as slave in one and master in another), allowing larger networks. Other differences: piconet has single timing domain; scatternet requires time-sharing; piconet simple management, scatternet more complex routing/synchronization.',
    marks: 5,
    category: 'medium',
    year: '2024',
  },
  {
    id: '2024-medium-4',
    question: 'Illustrate WWW architecture for Mobile Computing with proper diagram.',
    answer: 'WWW architecture (mobile view): Mobile Client (browser/WAP client) ↔ Gateway/Proxy (WAP Gateway or HTTP Proxy) ↔ Origin Web Server.\n\nMobile Device: Runs light browser (WAP or XHTML Mobile Profile), requests content.\n\nWAP Gateway / Proxy: Translates between WAP/compact formats and regular HTTP/HTML; performs content encoding/decoding, protocol conversion, possibly WML/WTLS handling.\n\nWeb Server/Content Provider: Hosts standard web content and services. Explanation: Gateway adapts HTML to small screens, compresses, and manages session. Security may involve TLS/WTLS. Modern systems directly use HTTP(S) with responsive design, but gateway ideas remain in proxies/CDNs for mobile optimization. (Diagram: Mobile → Internet/WAP Gateway → Web Server with arrows and labeled protocol conversions.)',
    marks: 5,
    category: 'medium',
    year: '2024',
  },
  {
    id: '2024-medium-5',
    question: 'Describe the components of GSM with proper diagram.',
    answer: 'GSM major subsystems:\n\nMobile Station (MS): Mobile device + SIM.\n\nBase Station Subsystem (BSS): BTS (Base Transceiver Station) that handles radio, and BSC (Base Station Controller) that manages multiple BTS (resource allocation, handovers).\n\nNetwork Switching Subsystem (NSS): MSC (Mobile Switching Center) for call control, VLR for temporary subscriber data, HLR for permanent subscriber data, EIR (Equipment Identity Register) for device identity check, AuC for authentication.\n\nOperation and Support Subsystem (OSS): Network management, maintenance. Flow: MS ↔ BTS ↔ BSC ↔ MSC ↔ HLR/VLR etc. Air interface is called GSM using TDMA on 900/1800 MHz bands (plus GPRS for packet data). (Diagram: MS → BTS → BSC → MSC → HLR/VLR, with GPRS/SGSN/GGSN as data path.)',
    marks: 5,
    category: 'medium',
    year: '2024',
  },
  {
    id: '2024-medium-6',
    question: 'Explain the entities of Mobile IP.',
    answer: 'Mobile Node (MN): The mobile device that changes its point of attachment but maintains its IP address (home address).\n\nHome Agent (HA): Located in MN\'s home network; holds MN\'s permanent home address and forwards packets addressed to MN to its current location (care-of-address), typically via tunneling.\n\nForeign Agent (FA): In visited network; provides care-of-address (CoA) to MN, can de-encapsulate tunnels and deliver packets locally. (In some Mobile IP variants MN uses co-located CoA instead of FA.)\n\nCorrespondent Node (CN): Any node communicating with MN; usually unaware of mobility and sends packets to MN\'s home address.\n\nCare-of-Address (CoA): Temporary IP address assigned while MN roams; registration with HA allows tunneling to CoA.\n\nRegistration / Binding: MN registers its CoA with HA; HA updates routing/binding and tunnels packets to CoA. Mobile IP enables transparent mobility at the network layer without changing upper-layer sessions.',
    marks: 5,
    category: 'medium',
    year: '2024',
  },
  
  // Long Answer Questions (10 marks)
  {
    id: '2024-long-1',
    question: 'Explain the various standards of IEEE 802.11. (10 marks)',
    answer: 'IEEE 802.11 family defines wireless LAN (Wi-Fi) standards. Key ones:\n\n802.11 (1997): Original standard with 1–2 Mbps in 2.4 GHz (legacy).\n\n802.11b (1999): Up to 11 Mbps in 2.4 GHz using DSSS; popular early Wi-Fi.\n\n802.11a (1999): Up to 54 Mbps in 5 GHz using OFDM; less interference but shorter range.\n\n802.11g (2003): Up to 54 Mbps in 2.4 GHz using OFDM (backwards compatible with 802.11b).\n\n802.11n (2009): MIMO (multiple-input multiple-output), channel bonding (40 MHz), up to ∼600 Mbps theoretical, operates in 2.4/5 GHz.\n\n802.11ac (2013): "Wi-Fi 5" — wider channels (80/160 MHz), more MIMO streams, higher order modulation (256-QAM), primarily 5 GHz; gigabit-class throughput.\n\n802.11ax (2019): "Wi-Fi 6" — improved spectral efficiency, OFDMA, uplink scheduling, better multi-user performance, operation in 2.4/5 GHz and later 6 GHz (Wi-Fi 6E).\n\n802.11ad / 802.11ay: Millimeter-wave (60 GHz) high throughput short-range (e.g., multi-Gbps). Other relevant standards / enhancements: 802.11i (security/WPA2), 802.11e (QoS/WMM), 802.11r (fast roaming), 802.11s (mesh), 802.11k/v (radio resource management/fast transition). Summary: Each new standard improves throughput, efficiency, or latency, adding features like MIMO, wider channels, improved MAC techniques, and better QoS/security. Practical deployments choose standards based on required throughput, range, and device support.\n\n(You can sketch a timeline showing progressive throughput and key features: b→a/g→n→ac→ax.)',
    marks: 10,
    category: 'long',
    year: '2024',
  },
  {
    id: '2024-long-2',
    question: 'Define multiplexing. Elaborate different types of multiplexing techniques used in Mobile Computing. (10 marks)',
    answer: 'Multiplexing: Technique to combine multiple signals or data streams over a single shared medium so that several users can share the same physical resource efficiently.\n\nCommon multiplexing techniques in mobile systems:\n\nFrequency Division Multiple Access (FDMA):\nEach user gets a distinct frequency band (channel) separated by guard bands. Simple but not spectrum efficient for bursty traffic. Used in early analog systems.\n\nTime Division Multiple Access (TDMA):\nUsers share the same frequency but are given distinct time slots in a repeating frame. Efficient for bursty data and used in GSM (slot-based TDMA).\n\nCode Division Multiple Access (CDMA):\nAll users transmit simultaneously over same frequency using unique spreading codes; receiver separates signals by correlating with codes. Good capacity and soft capacity; used in IS-95, W-CDMA (wideband CDMA), CDMA2000.\n\nOrthogonal Frequency Division Multiple Access (OFDMA):\nDivides the channel into many orthogonal subcarriers; users are allocated subsets of subcarriers in frequency and time. Highly flexible, robust to multipath, used in LTE and 5G NR (as part of OFDM family).\n\nSpace Division Multiple Access (SDMA):\nMultiplexes users in spatial domain using directional antennas or MIMO beamforming; users separated by different spatial channels. Used in modern systems with antenna arrays to increase capacity.\n\nHybrid schemes:\ne.g., TDMA+FDMA (GSM: frequency channels each with TDMA slots), OFDMA + MIMO (LTE/5G).\n\nResource allocation can be dynamic (scheduling) for efficient use.\n\nComparison and choice: FDMA/TDMA simpler; CDMA offers better soft capacity and interference averaging; OFDMA scales well for broadband data and scheduling; SDMA adds capacity using spatial multiplexing. Modern mobile systems (4G/5G) use OFDMA with MIMO and scheduling to maximize spectral efficiency.',
    marks: 10,
    category: 'long',
    year: '2024',
  },
  {
    id: '2024-long-3',
    question: 'Briefly explain the generation of Mobile Communication. (10 marks)',
    answer: 'Mobile communication evolved through successive generations (G) each bringing new capabilities:\n\n0G (Pre-cellular): Early mobile radio telephone systems (car phones) with manual operation and limited capacity.\n\n1G (Analog Cellular, early 1980s):\nTechnology: Analog FDMA systems (e.g., AMPS).\nFeatures: Voice only, low capacity, poor security (eavesdropping possible), basic mobility and handover.\n\n2G (Digital Cellular, early 1990s):\nTechnology: Digital modulation; standards like GSM (TDMA), IS-95 (CDMA).\nFeatures: Voice with digital encoding, SMS, limited data (circuit-switched), better spectral efficiency and security.\n\n2.5G / GPRS / EDGE:\nGPRS: Packet-switched data overlay for GSM to support always-on IP connections at modest rates (∼tens of kbps).\nEDGE: Enhanced data rates using higher order modulation for ∼100 kbps class.\n\n3G (UMTS, CDMA2000) — early 2000s:\nTechnology: Wideband CDMA (W-CDMA), CDMA2000.\nFeatures: Multimedia, higher data rates (up to a few Mbps), packet switching, video calling, mobile internet.\n\n3.5G / HSPA: Significant improvements in data rates and latency (HSPA, HSPA+).\n\n4G (LTE, LTE-Advanced) — 2010s:\nTechnology: All-IP, OFDMA downlink, SC-FDMA uplink, MIMO, carrier aggregation in LTE-A.\nFeatures: High data rates (tens to hundreds of Mbps), low latency, support for mobile broadband, VoIP (VoLTE), video streaming, QoS.\n\n5G (New Radio) — late 2010s / 2020s:\nTechnology: Flexible numerology, OFDM extensions, massive MIMO, mmWave bands, network slicing, edge computing.\nFeatures: Ultra-low latency (1 ms class), very high peak rates (Gbps), massive device connectivity (IoT), URLLC and eMBB services.\n\nKey drivers across generations: more data, lower latency, better spectral efficiency, more features (multimedia, internet, IoT), enhanced security and QoS. Each generation also introduced new air interfaces, core network changes (circuit to packet to cloud-native all-IP), and richer services.',
    marks: 10,
    category: 'long',
    year: '2024',
  },
];

// MC2020 Questions
export const questions2020: Question[] = [
  // Short Answer Questions (2 marks each)
  {
    id: '2020-short-a',
    question: 'What is Mobile Computing and its applications?',
    answer: 'Mobile Computing is a technology that allows the transmission of data, voice, and video through a computer or any other wireless-enabled device without being connected by a physical link. It enables users to access information and perform tasks anytime, anywhere.\n\nApplications:\n• Mobile Banking: Transactions through smartphones.\n• Healthcare: Remote patient monitoring.\n• Education: Mobile e-learning platforms.\n• Business: Mobile offices and e-commerce.\n• Transportation: GPS-based vehicle tracking.',
    marks: 2,
    category: 'short',
    year: '2020',
  },
  {
    id: '2020-short-b',
    question: 'What is Communication?',
    answer: 'Communication is the exchange of data or information between two or more devices through a transmission medium using protocols.\n\nIt includes both wired (LAN, Ethernet) and wireless (Wi-Fi, Bluetooth, cellular) communication.\n\nTypes:\n• Simplex: One-way (e.g., TV broadcast)\n• Half-duplex: Two-way but not simultaneous (e.g., walkie-talkies)\n• Full-duplex: Two-way simultaneous (e.g., phone calls)',
    marks: 2,
    category: 'short',
    year: '2020',
  },
  {
    id: '2020-short-c',
    question: 'Define the term Wireless.',
    answer: 'Wireless refers to the transmission of signals without physical cables, using electromagnetic waves (radio, infrared, microwave, satellite).\n\nExamples: Wi-Fi, GSM, LTE, Bluetooth.\n\nWireless systems enable mobility, flexibility, and real-time access to networks.',
    marks: 2,
    category: 'short',
    year: '2020',
  },
  {
    id: '2020-short-d',
    question: 'What are two different kinds of mobility?',
    answer: '• User Mobility: Ability of users to move geographically while maintaining access to services (e.g., mobile phones during travel).\n\n• Device Mobility: Device itself moves while staying connected (e.g., connected cars, drones).',
    marks: 2,
    category: 'short',
    year: '2020',
  },
  {
    id: '2020-short-e',
    question: 'Define Client–Server Computing.',
    answer: 'A model where client devices request services and a server provides those services over a network.\n\nThe client is the interface for the user; the server stores data and performs processing.\n\nExample: A web browser (client) requests a webpage from a web server.',
    marks: 2,
    category: 'short',
    year: '2020',
  },
  {
    id: '2020-short-f',
    question: 'What do you mean by Digital Signature?',
    answer: 'A digital signature is an electronic authentication method ensuring:\n\n• Integrity: Data not altered.\n• Authenticity: Sender verified.\n• Non-repudiation: Sender cannot deny sending.\n\nUses public-key cryptography (private key signs, public key verifies).',
    marks: 2,
    category: 'short',
    year: '2020',
  },
  {
    id: '2020-short-g',
    question: 'What are the basic services provided by the MAC layer?',
    answer: 'MAC (Medium Access Control) layer provides:\n\n• Channel access coordination.\n• Frame addressing and error detection.\n• Flow control and retransmission.\n• Link establishment and release.\n• Access prioritization and fairness.',
    marks: 2,
    category: 'short',
    year: '2020',
  },
  {
    id: '2020-short-h',
    question: 'Define hidden terminal.',
    answer: 'A hidden terminal occurs when two devices (A and C) cannot detect each other but both send data to a common receiver (B), causing collisions.\n\nSolution: Use RTS/CTS (Request to Send / Clear to Send) mechanism in IEEE 802.11.',
    marks: 2,
    category: 'short',
    year: '2020',
  },
  {
    id: '2020-short-i',
    question: 'What are the obstacles in mobile communications?',
    answer: '• Path loss and fading due to distance.\n• Shadowing caused by obstacles like buildings.\n• Multipath interference.\n• Limited bandwidth and power.\n• Handover delays and network congestion.',
    marks: 2,
    category: 'short',
    year: '2020',
  },
  {
    id: '2020-short-j',
    question: 'Define signal and its types.',
    answer: 'A signal is a function that conveys information over time.\n\nTypes:\n\n• Analog Signal: Continuous waveform (e.g., sound).\n• Digital Signal: Discrete binary data (0s and 1s).\n\nDigital signals are more robust and less prone to noise.',
    marks: 2,
    category: 'short',
    year: '2020',
  },
  
  // Medium Answer Questions (5 marks each)
  {
    id: '2020-medium-1',
    question: 'Difference between Wired and Wireless Networks',
    answer: 'Feature Comparison:\n\nWired Network:\n• Medium: Physical cables (Copper/Fiber)\n• Mobility: Fixed devices\n• Setup: Complex installation\n• Security: Physically secure\n• Speed: High and consistent\n• Examples: LAN, Ethernet\n\nWireless Network:\n• Medium: Electromagnetic waves\n• Mobility: Highly mobile users\n• Setup: Easy and flexible\n• Security: Requires encryption\n• Speed: Variable\n• Examples: Wi-Fi, GSM, LTE\n\nConclusion:\nWireless networks offer flexibility and mobility, but need advanced encryption to ensure reliability and security.',
    marks: 5,
    category: 'medium',
    year: '2020',
  },
  {
    id: '2020-medium-2',
    question: 'Multiplexing Techniques (With Diagram)',
    answer: 'Multiplexing: Technique of combining multiple signals over a single communication channel.\n\nTypes:\n\nFrequency Division Multiplexing (FDM):\nEach signal gets a unique frequency band. Used in analog systems (radio broadcasting).\n\nTime Division Multiplexing (TDM):\nChannel divided into time slots. Used in digital systems (telephony).\n\nCode Division Multiplexing (CDMA):\nEach user assigned a unique code; signals overlap in time and frequency. Used in 3G/4G networks.\n\nWavelength Division Multiplexing (WDM):\nUsed in fiber optics with different light wavelengths.\n\nAdvantages:\nEfficient bandwidth use, cost saving, increased data throughput.',
    marks: 5,
    category: 'medium',
    year: '2020',
  },
  {
    id: '2020-medium-3',
    question: 'Circuit Switching vs Packet Switching',
    answer: 'Parameter Comparison:\n\nCircuit Switching:\n• Path: Dedicated path\n• Delay: Constant\n• Efficiency: Low\n• Data Transfer: Continuous stream\n• Example: PSTN\n\nPacket Switching:\n• Path: Dynamic path\n• Delay: Variable\n• Efficiency: High\n• Data Transfer: Packets with headers\n• Example: Internet\n\nConclusion:\nPacket switching is preferred for modern data networks due to flexibility and efficiency.',
    marks: 5,
    category: 'medium',
    year: '2020',
  },
  {
    id: '2020-medium-4',
    question: 'Ubiquitous Computing & Mobile Communication Generations',
    answer: 'Ubiquitous Computing:\nConcept where computing is available anytime, anywhere — embedded in everyday objects using IoT, sensors, and mobile systems.\n\nGenerations:\n\n• 1G: Analog voice, 1980s (AMPS).\n• 2G: Digital voice (GSM, CDMA).\n• 3G: Internet access, multimedia (UMTS).\n• 4G: High-speed broadband (LTE).\n• 5G: AI-enabled, ultra-fast, IoT support.',
    marks: 5,
    category: 'medium',
    year: '2020',
  },
  {
    id: '2020-medium-5',
    question: 'Cellular vs Ad-Hoc Networks',
    answer: 'Feature Comparison:\n\nCellular:\n• Infrastructure: Base stations required\n• Communication: Through BS\n• Mobility Handling: Centralized\n• Range: Large\n• Use: GSM, LTE\n\nAd-Hoc:\n• Infrastructure: No infrastructure\n• Communication: Direct peer-to-peer\n• Mobility Handling: Distributed\n• Range: Limited\n• Use: MANET, VANET\n\nConclusion:\nAd-hoc networks are suitable for temporary and emergency communication where infrastructure is unavailable.',
    marks: 5,
    category: 'medium',
    year: '2020',
  },
  {
    id: '2020-medium-6',
    question: 'N-Tier Architecture and WWW',
    answer: 'N-tier Architecture:\nDivides system into multiple logical layers to separate concerns and improve scalability.\n\nTiers:\n\n• Presentation Tier: UI (browser, mobile app).\n• Application Tier: Business logic.\n• Data Tier: Database or storage.\n\nRelation with WWW:\nWeb applications use N-tier structure — Browser (Client), Web Server (Logic), Database (Data).',
    marks: 5,
    category: 'medium',
    year: '2020',
  },
  {
    id: '2020-medium-7',
    question: 'WML and WMLScript',
    answer: 'WML (Wireless Markup Language):\n\n• XML-based markup for WAP devices.\n• Uses decks (documents) and cards (screens).\n• Lightweight for low-bandwidth mobile networks.\n\nWMLScript:\n\n• Scripting language similar to JavaScript.\n• Adds logic and validation to WML.\n• Executes on client-side → saves bandwidth.',
    marks: 5,
    category: 'medium',
    year: '2020',
  },
  
  // Long Answer Questions (10 marks)
  {
    id: '2020-long-8',
    question: 'DHCP – Working and Entities (10 Marks)',
    answer: 'Definition:\nDHCP (Dynamic Host Configuration Protocol) automates IP address assignment to network devices.\n\nEntities:\n\n• Client: Device requesting IP.\n• Server: Assigns IP dynamically.\n• Relay Agent: Forwards DHCP messages.\n\nDORA Process:\n\n1. Discover: Client broadcasts request.\n2. Offer: Server offers available IP.\n3. Request: Client requests offered IP.\n4. Acknowledge: Server confirms allocation.\n\nAdvantages:\n\n• Centralized management\n• Reduces manual configuration\n• Prevents IP conflicts',
    marks: 10,
    category: 'long',
    year: '2020',
  },
  {
    id: '2020-long-9',
    question: 'Signal Propagation (10 Marks)',
    answer: 'Definition:\nSignal propagation refers to how radio waves travel from sender to receiver.\n\nModels:\n\n• Free Space Model: Signal strength reduces with distance.\n• Two-ray Ground Model: Considers direct and reflected paths.\n• Shadowing Model: Random signal attenuation due to obstacles.\n\nFormula:\nPr = (PtGtGrλ²) / ((4πd)²L)\n\nWhere:\n• Pr = Received power\n• Pt = Transmitted power\n• Gt, Gr = Transmitter and receiver antenna gains\n• λ = Wavelength\n• d = Distance between antennas\n• L = System loss factor\n\nFactors Affecting Propagation:\n• Reflection, diffraction, scattering.\n• Environment (urban/rural).',
    marks: 10,
    category: 'long',
    year: '2020',
  },
  {
    id: '2020-long-10',
    question: 'Modulation and its Types (10 Marks)',
    answer: 'Definition:\nModulation modifies a carrier wave to carry information.\n\nTypes:\n\nAnalog Modulation:\n• AM: Varies amplitude.\n• FM: Varies frequency.\n• PM: Varies phase.\n\nDigital Modulation:\n• ASK: Amplitude Shift Keying.\n• FSK: Frequency Shift Keying.\n• PSK: Phase Shift Keying.\n• QAM: Combines amplitude and phase shifts.\n\nUsed in GSM, Wi-Fi, and satellite systems.',
    marks: 10,
    category: 'long',
    year: '2020',
  },
  {
    id: '2020-long-11',
    question: 'GSM Architecture (10 Marks)',
    answer: 'Components:\n\n• Mobile Station (MS): Handset + SIM.\n• Base Station Subsystem (BSS):\n  – BTS: Handles radio interface.\n  – BSC: Controls multiple BTS.\n• Network Subsystem (NSS):\n  – MSC: Call switching.\n  – HLR/VLR: User info.\n  – AUC/EIR: Authentication.\n• Operation Subsystem (OSS): Maintains network.\n\nWorking:\nMS ↔ BTS ↔ BSC ↔ MSC ↔ HLR/VLR ↔ PSTN/Internet.\n\nDiagram:\nMS -> BTS -> BSC -> MSC -> HLR/VLR -> PSTN',
    marks: 10,
    category: 'long',
    year: '2020',
  },
  {
    id: '2020-long-12',
    question: 'WAP Architecture (10 Marks)',
    answer: 'Layers:\n\n• Application Layer (WAE): WML apps.\n• Session Layer (WSP): Communication management.\n• Transaction Layer (WTP): Request/response.\n• Security Layer (WTLS): Encryption & authentication.\n• Transport Layer (UDP/IP): Data transfer.\n\nFlow:\nMobile Device -> WAP Gateway -> Internet -> Web Server\n\nPurpose:\nEarly mobile Internet access before smartphones, optimizing low bandwidth connections.',
    marks: 10,
    category: 'long',
    year: '2020',
  },
];

// Combined questions array
export const questions: Question[] = [...questions2020, ...questions2022, ...questions2024];

// Helper functions
export const getQuestionsByYear = (year: '2020' | '2022' | '2024'): Question[] => {
  return questions.filter(q => q.year === year);
};

export const getQuestionsByCategory = (
  category: 'short' | 'medium' | 'long' | 'all',
  year?: '2020' | '2022' | '2024'
): Question[] => {
  let filtered = questions;
  if (year) {
    filtered = filtered.filter(q => q.year === year);
  }
  if (category === 'all') return filtered;
  return filtered.filter(q => q.category === category);
};

export const getQuestionById = (id: string): Question | undefined => {
  return questions.find(q => q.id === id);
};

