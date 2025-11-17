export interface IWTQuestion {
  id: string;
  question: string;
  answer: string;
  marks: number;
  category: 'short' | 'medium' | 'long';
  year: '2022' | '2023' | '2024';
}

// IWT2022 Questions
export const iwtQuestions2022: IWTQuestion[] = [
  // Short Answer Questions (2 marks each)
  {
    id: 'iwt2022-short-a',
    question: 'What are the different data types used in PHP?',
    answer: 'Integer, Float (Double), String, Boolean, Array, Object, NULL, Resource',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: 'iwt2022-short-b',
    question: 'What is the responsibility of Internet Layer in TCP/IP?',
    answer: '• The Internet Layer is responsible for logical addressing, routing, and packet forwarding.\n\n• It ensures that data packets move across networks and reach the correct destination using IP (Internet Protocol).',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: 'iwt2022-short-c',
    question: 'Define Proxy Server.',
    answer: 'A proxy server acts as an intermediary between a client and the internet.\n\n• It hides the client\'s IP address.\n• Provides caching and filtering of web requests.\n• Enhances security and controls internet usage.',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: 'iwt2022-short-d',
    question: 'What is the difference between Authentication and Authorization?',
    answer: 'Aspect Comparison:\n\nAuthentication:\n• Meaning: Verifies user identity\n• Process: Login using credentials\n• Example: Login with username/password\n\nAuthorization:\n• Meaning: Grants permission to resources\n• Process: Decides access level\n• Example: Access to admin dashboard',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: 'iwt2022-short-e',
    question: 'Define FTP.',
    answer: 'FTP (File Transfer Protocol) is a standard network protocol used to transfer files between a client and server on a TCP/IP network.',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: 'iwt2022-short-f',
    question: 'What does RSS stand for?',
    answer: 'RSS – Really Simple Syndication\n\nUsed to publish frequently updated information such as blogs or news feeds.',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: 'iwt2022-short-g',
    question: 'Name the protocols used in the application layer of TCP/IP.',
    answer: 'HTTP / HTTPS, FTP (File Transfer Protocol), SMTP (Simple Mail Transfer Protocol), POP3 (Post Office Protocol version 3), IMAP (Internet Message Access Protocol), DNS (Domain Name System), TELNET (Teletype Network)',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: 'iwt2022-short-h',
    question: 'Write any four tags required to create a table in HTML. Give example.',
    answer: '<table> – defines a table\n<tr> – defines a table row\n<th> – defines a header cell\n<td> – defines a data cell\n\nExample:\n<table border="1">\n  <tr><th>Name</th><th>Age</th></tr>\n  <tr><td>John</td><td>25</td></tr>\n</table>',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: 'iwt2022-short-i',
    question: 'Which keyword is used to declare a variable in JavaScript?',
    answer: 'Var, let, const',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: 'iwt2022-short-j',
    question: 'Name four popular server-side scripting languages.',
    answer: 'PHP, Python, Node.js (JavaScript), ASP.NET, Ruby (Ruby on Rails)',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  
  // Medium Answer Questions (5 marks each)
  {
    id: 'iwt2022-medium-a',
    question: 'Differentiate between client-side and server-side scripting.',
    answer: 'Feature Comparison:\n\nClient-Side:\n• Execution: Runs on user\'s browser\n• Language: JavaScript\n• Output: HTML before sending to server\n• Security: Less secure\n• Example: Form validation\n\nServer-Side:\n• Execution: Runs on web server\n• Language: PHP, Python, ASP.NET\n• Output: Dynamic content sent to client\n• Security: More secure\n• Example: Database connection',
    marks: 5,
    category: 'medium',
    year: '2022',
  },
  {
    id: 'iwt2022-medium-b',
    question: 'Different tags used in HTML document with purpose.',
    answer: 'Tag Purpose:\n\n<html> - Defines HTML document\n<head> - Contains metadata, title\n<title> - Defines title of webpage\n<body> - Contains page content\n<p> - Defines paragraph\n<a> - Hyperlink\n<img> - Image insertion',
    marks: 5,
    category: 'medium',
    year: '2022',
  },
  {
    id: 'iwt2022-medium-c',
    question: 'Classify different types of firewall.',
    answer: '1. Packet Filtering Firewall: A network security device that examines incoming and outgoing data packets and filters them based on a set of predefined rules.\n\n2. Stateful Inspection Firewall: A type of network security device that monitors active connections and uses the context of the entire conversation to make decisions about which packets to allow or deny.\n\n3. Proxy Firewall: Acts as an intermediary between a user\'s internal network and an external network like the internet, filtering and screening traffic at the application layer to enhance security.\n\n4. Next-Generation Firewall (NGFW): A network security device that provides advanced threat protection beyond the capabilities of traditional firewalls.\n\n5. Software / Hardware Firewall: A physical device that acts as a barrier between your network and the internet, protecting all connected devices.',
    marks: 5,
    category: 'medium',
    year: '2022',
  },
  {
    id: 'iwt2022-medium-d',
    question: 'What do you mean by search engines? Explain searching techniques.',
    answer: 'A search engine is a web-based tool that indexes and retrieves information from the web.\n\nExamples: Google, Bing, Yahoo.\n\nTechniques:\n\n• Keyword-based search: A method where a search engine or database finds documents by matching specific keywords from a user\'s query with words in its indexed content.\n\n• Boolean search (AND, OR, NOT): Boolean search uses operators like AND, OR, and NOT to combine keywords and refine search results. AND narrows a search by requiring all terms to be present, OR broadens it by including any of the terms, and NOT narrows it by excluding specific terms.\n\n• Phrase search (" "): Denoted by enclosing a specific search term in double quotation marks (" "), tells a search engine or database to find that exact sequence of words, in that exact order, with no other words in between.\n\n• Field-specific search (site:, filetype:): Telling the database to search in one specific area for a word or words.',
    marks: 5,
    category: 'medium',
    year: '2022',
  },
  {
    id: 'iwt2022-medium-e',
    question: 'What is IP Address? Explain original classful addressing scheme.',
    answer: 'IP Address: Unique 32-bit number identifying a device on a network.\n\nClassful Addressing:\n\nClass A:\n• Range: 1.0.0.0 – 126.255.255.255\n• Default Mask: 255.0.0.0\n• Use: Large networks\n\nClass B:\n• Range: 128.0.0.0 – 191.255.255.255\n• Default Mask: 255.255.0.0\n• Use: Medium networks\n\nClass C:\n• Range: 192.0.0.0 – 223.255.255.255\n• Default Mask: 255.255.255.0\n• Use: Small networks\n\nClass D:\n• Range: 224.0.0.0 – 239.255.255.255\n• Use: Multicasting\n\nClass E:\n• Range: 240.0.0.0 – 255.255.255.255\n• Use: Research',
    marks: 5,
    category: 'medium',
    year: '2022',
  },
  {
    id: 'iwt2022-medium-f',
    question: 'What is DOM? What is use of document object? Example.',
    answer: '• DOM (Document Object Model) represents the structure of HTML/XML as a tree.\n\n• document object allows JavaScript to access and modify HTML elements.\n\nExample:\n<p id="demo">Hello</p>\n\n<script>\n  document.getElementById("demo").innerHTML = "Welcome!";\n</script>',
    marks: 5,
    category: 'medium',
    year: '2022',
  },
  {
    id: 'iwt2022-medium-g',
    question: 'i) Role of ISP: (Internet Service Provider) Provides Internet access and services to users.\n\nii) Types of connectivity: Dial-up, Broadband, Fiber, Wireless, Satellite.\n\niii) Bits in IP address: IPv4 – 32 bits, IPv6 – 128 bits.',
    answer: 'i) Role of ISP:\nInternet Service Provider (ISP) provides Internet access and services to users.\n\nii) Types of connectivity:\n• Dial-up\n• Broadband\n• Fiber\n• Wireless\n• Satellite\n\niii) Bits in IP address:\n• IPv4 – 32 bits\n• IPv6 – 128 bits',
    marks: 5,
    category: 'medium',
    year: '2022',
  },
  
  // Long Answer Questions (10 marks)
  {
    id: 'iwt2022-long-3',
    question: 'Describe the function of TCP/IP internet layering model by a suitable diagram. (10 Marks)',
    answer: 'Layers of TCP/IP model:\n\n1. Application Layer:\nThe Application Layer is the top layer of the TCP/IP model and the one closest to the user. This is where all the apps you use like web browsers, email clients, or file sharing tools connect to the network. Protocols like HTTP, FTP, SMTP.\n\n2. Transport Layer:\nThe Transport Layer is responsible for making sure that data is sent reliably and in the correct order between devices. It checks that the data you send like a message, file, or video arrives safely and completely. Ensures reliable data transfer (TCP/UDP).\n\n3. Internet Layer:\nThe Internet Layer is used for finding the best path for data to travel across different networks so it can reach the right destination. It works like a traffic controller, helping data packets move from one network to another until they reach the correct device. Routing and addressing (IP).\n\n4. Network Access Layer:\nThe Network Access Layer is the bottom layer of the TCP/IP model. It deals with the actual physical connection between devices on the same local network. Physical transmission of data like Ethernet, Wi-Fi',
    marks: 10,
    category: 'long',
    year: '2022',
  },
  {
    id: 'iwt2022-long-4',
    question: 'What do you mean by web portals? Differentiate between webpage and website. (10 Marks)',
    answer: 'Web Portal:\nA web-based platform that provides multiple services (email, news, search, etc.) from one location.\n\nExample: Yahoo!, MSN.\n\nDifference:\n\nWebsite:\n• Website is a collection of webpages displayed on the web with a client-like browser.\n• It contains more than one web webpages that contain information.\n• It is a combination of webpages created using HTML and CSS.\n• It is a place used to display content.\n• It requires more time to develop the website as compared to webpages.\n• It includes content about several entities.\n• It can be accessed using HTTP, DNS (Domain Name System) Protocols.\n• Example: www.college.edu\n\nWebpage:\n• It is part of website that includes information and content and is displayed on the browser to user or visitor.\n• It is a single document display on the browser.\n• Information is usually written in HTML language.\n• It is content displayed on the website.\n• It requires less time to develop a webpage as compared to the website.\n• It includes content or information about a single entity.\n• It can be accessed through web browser.\n• Example: index.html',
    marks: 10,
    category: 'long',
    year: '2022',
  },
  {
    id: 'iwt2022-long-5',
    question: 'Why E-mail is used? Identify E-mail protocol. Explain working principle and format. (10 Marks)',
    answer: 'Purpose:\nWe use email for fast, cost-effective, and convenient communication to send messages, share files, and maintain a written record of conversations.\n\nProtocols:\n• SMTP (Send)\n• POP3 / IMAP (Receive)\n\nWorking:\n1. User composes message.\n2. SMTP sends mail to mail server.\n3. Recipient\'s mail server receives it.\n4. POP3/IMAP downloads mail to recipient.\n\nFormat:\n\nHeader:\n• From\n• To\n• Subject\n• Date\n\nBody:\n• Message content\n\nAttachment:\n• Files, images',
    marks: 10,
    category: 'long',
    year: '2022',
  },
  {
    id: 'iwt2022-long-6',
    question: 'Write short notes (any two): (10 Marks)\n\n(i) Encryption & Decryption\n(ii) CGI (Common Gateway Interface)\n(iii) E-Commerce',
    answer: '(i) Encryption & Decryption:\nEncryption is the process by which a readable message is converted to an unreadable form to prevent unauthorized parties from reading it. Decryption is the process of converting an encrypted message back to its original (readable) format. The original message is called the plaintext message.\n\n(ii) CGI (Common Gateway Interface):\nCommon Gateway Interface (CGI) is a standard for how web servers can interact with external programs, known as CGI scripts, to process user requests and generate dynamic web content.\n\n(iii) E-Commerce:\nE-commerce is the buying and selling of goods and services over the internet.\n\nTypes:\n• Business-to-Consumer (B2C): Businesses sell directly to individual customers. This is the most common form of e-commerce, as seen with online retailers like Amazon and Flipkart.\n• Business-to-Business (B2B): Businesses transact with other businesses, often involving large volumes of goods and complex transactions. This can include manufacturers selling to wholesalers or retailers.\n• Consumer-to-Consumer (C2C): Consumers sell goods or services directly to other consumers, typically through a third-party platform that facilitates the transaction. Examples include eBay and OLX.\n• Consumer-to-Business (C2B): Individuals sell their products or services to businesses. This includes freelancers offering their skills on platforms like Upwork or photographers licensing their images to businesses.',
    marks: 10,
    category: 'long',
    year: '2022',
  },
  {
    id: 'iwt2022-long-7',
    question: 'Explain the GET and POST method used in PHP with suitable example. (10 Marks)',
    answer: 'GET Method:\n• Sends data via URL.\n• Limited length.\n• Visible to users.\n\nExample:\n<form method="GET" action="welcome.php">\n  Name: <input type="text" name="uname">\n  <input type="submit">\n</form>\n\nwelcome.php:\n<?php\n  echo "Welcome " . $_GET[\'uname\'];\n?>\n\nPOST Method:\n• Sends data via HTTP body (hidden).\n• Used for secure data (like passwords).\n\nExample:\n<form method="POST" action="welcome.php">\n  Name: <input type="text" name="uname">\n  <input type="submit">\n</form>\n\nwelcome.php:\n<?php\n  echo "Welcome " . $_POST[\'uname\'];\n?>',
    marks: 10,
    category: 'long',
    year: '2022',
  },
];

// IWT2023 Questions
export const iwtQuestions2023: IWTQuestion[] = [
  // Short Answer Questions (2 marks each)
  {
    id: 'iwt2023-short-a',
    question: 'Write the two uses of computer network.',
    answer: 'Resource Sharing: Enables sharing of files, printers, and hardware among users.\n\nCommunication: Allows users to exchange data via email, chat, or video conferencing.',
    marks: 2,
    category: 'short',
    year: '2023',
  },
  {
    id: 'iwt2023-short-b',
    question: 'Name the protocols used in metropolitan area network (MAN).',
    answer: 'Common MAN protocols include: DQDB (Distributed Queue Dual Bus), FDDI (Fiber Distributed Data Interface), Ethernet (IEEE 802.3), ATM (Asynchronous Transfer Mode)',
    marks: 2,
    category: 'short',
    year: '2023',
  },
  {
    id: 'iwt2023-short-c',
    question: 'Define MTU.',
    answer: 'MTU (Maximum Transmission Unit) defines the maximum size (in bytes) of a packet that can be sent over a network without fragmentation. Example: Ethernet MTU = 1500 bytes.',
    marks: 2,
    category: 'short',
    year: '2023',
  },
  {
    id: 'iwt2023-short-d',
    question: 'What do you mean by Namespace?',
    answer: 'A namespace is a way to organize code elements (variables, functions, classes) to prevent naming collisions.\n\nExample in PHP: namespace MyProject;',
    marks: 2,
    category: 'short',
    year: '2023',
  },
  {
    id: 'iwt2023-short-e',
    question: 'Write the address range of Class B IP address.',
    answer: '• Class B networks are for medium-sized organizations.\n• Default Subnet Mask: 255.255.0.0\n• Range: 128.0.0.0 – 191.255.255.255',
    marks: 2,
    category: 'short',
    year: '2023',
  },
  {
    id: 'iwt2023-short-f',
    question: 'State the difference between HTTP & HTTPS.',
    answer: 'HTTP:\n• Data not encrypted\n• Uses port 80\n• Less secure\n• Used for normal browsing\n\nHTTPS:\n• Data encrypted via SSL/TLS\n• Uses port 443\n• Secure communication\n• Used for secure transactions',
    marks: 2,
    category: 'short',
    year: '2023',
  },
  {
    id: 'iwt2023-short-g',
    question: 'What is RSS Feed?',
    answer: 'RSS Feed allows users to automatically receive updates from websites. It uses XML format to deliver regularly updated content like news, blogs, etc.',
    marks: 2,
    category: 'short',
    year: '2023',
  },
  {
    id: 'iwt2023-short-h',
    question: 'Name the different non-primitive data types used in JavaScript.',
    answer: '• Object: Collection of key–value pairs.\n• Array: Ordered list of elements.\n• Function: Reusable block of code.',
    marks: 2,
    category: 'short',
    year: '2023',
  },
  {
    id: 'iwt2023-short-i',
    question: 'Write syntax & purpose of HTML <fieldset> element.',
    answer: 'Syntax:\n<form>\n  <fieldset>\n    <legend>Personal Info</legend>\n    Name: <input type="text">\n  </fieldset>\n</form>\n\nPurpose: Groups related form elements together.',
    marks: 2,
    category: 'short',
    year: '2023',
  },
  {
    id: 'iwt2023-short-j',
    question: 'Write syntax & purpose of PHP string function with example – explode() and strpos()',
    answer: 'explode(): Splits a string into array.\nstrpos(): Finds position of substring.\n\n// explode()\n$str = "HTML,CSS,PHP";\nprint_r(explode(",", $str)); // Output: [HTML, CSS, PHP]\n\n// strpos()\necho strpos("Hello World", "World"); // Output: 6',
    marks: 2,
    category: 'short',
    year: '2023',
  },
  
  // Medium Answer Questions (5 marks each)
  {
    id: 'iwt2023-medium-a',
    question: 'Distinguish between server-side & client-side scripting.',
    answer: 'Server-side:\n• Runs on web server\n• Examples: PHP, ASP\n• Generates dynamic HTML before sending to client\n• More secure\n• Slower (depends on server)\n\nClient-side:\n• Runs in browser\n• Examples: JavaScript\n• Manipulates HTML after loading\n• Less secure\n• Faster (runs locally)',
    marks: 5,
    category: 'medium',
    year: '2023',
  },
  {
    id: 'iwt2023-medium-b',
    question: 'State & explain PHP session.',
    answer: 'A session is a way to preserve data between web pages.\n\nExample:\nsession_start();\n$_SESSION[\'user\'] = "Neha";\necho $_SESSION[\'user\'];\n\nSession data is stored on the server, identified by a session ID.',
    marks: 5,
    category: 'medium',
    year: '2023',
  },
  {
    id: 'iwt2023-medium-c',
    question: 'Write a program in JavaScript to check if a string is palindrome.',
    answer: '<script>\nfunction isPalindrome(str){\n  str = str.toLowerCase();\n  return str === str.split(\'\').reverse().join(\'\');\n}\ndocument.write(isPalindrome("madam")); // true\n</script>',
    marks: 5,
    category: 'medium',
    year: '2023',
  },
  {
    id: 'iwt2023-medium-d',
    question: 'How does a search engine work?',
    answer: '1. Crawling: Bots scan web pages.\n\n2. Indexing: Pages are stored and analyzed.\n\n3. Ranking: Algorithm decides order of results for a query.',
    marks: 5,
    category: 'medium',
    year: '2023',
  },
  {
    id: 'iwt2023-medium-e',
    question: 'Differentiate between classful & classless IP addressing.',
    answer: 'Classful:\n• Fixed classes (A, B, C)\n• Wastes IPs\n• Example: 192.168.1.0\n\nClassless (CIDR):\n• Variable-length subnet mask\n• Efficient IP usage\n• Example: 192.168.1.0/24',
    marks: 5,
    category: 'medium',
    year: '2023',
  },
  {
    id: 'iwt2023-medium-f',
    question: 'Short Notes:\n\ni. NVT\nii. ISP\niii. E-Commerce\niv. IRC',
    answer: 'i. NVT (Network Virtual Terminal): Communication is established using the TCP/IP protocols and communication is based on a set of facilities.\n\nii. ISP (Internet Service Provider): An Internet Service Provider (ISP) is a company that provides access to the internet for individuals and businesses, typically for a monthly fee.\n\niii. E-Commerce: Buying & selling goods/services online.\n\niv. IRC (Internet Relay Chat): Real-time text messaging protocol.',
    marks: 5,
    category: 'medium',
    year: '2023',
  },
  {
    id: 'iwt2023-medium-g',
    question: 'Explain the various application-level protocols.',
    answer: 'Browsing and web access:\n• HTTP (Hypertext Transfer Protocol): The foundation for the World Wide Web, used to transfer web pages and other data between a web browser and a web server.\n• HTTPS (HTTP Secure): A secure version of HTTP that encrypts communication to protect data.\n\nEmail:\n• SMTP (Simple Mail Transfer Protocol): Used by email clients to send emails to a mail server.\n• POP3 (Post Office Protocol 3): Retrieves emails from a mail server to a client.\n• IMAP (Internet Message Access Protocol): Another protocol for retrieving emails from a server, but it allows users to manage messages on the server as well.\n\nFile transfer:\n• FTP (File Transfer Protocol): A standard protocol for transferring files between a client and a server.\n• TFTP (Trivial File Transfer Protocol): A simpler version of FTP that is used for transferring files but does not support authentication.\n\nNetwork management and administration:\n• DHCP (Dynamic Host Configuration Protocol): Automatically assigns IP addresses to devices on a network.\n• DNS (Domain Name System): Translates human-readable domain names (like example.com) into machine-readable IP addresses.\n• SNMP (Simple Network Management Protocol): Used to manage and monitor network devices like routers and switches.\n• Telnet: Provides a command-line interface for remote login to a server.\n• SSH (Secure Shell): Provides a secure, encrypted way to connect to and manage remote devices, unlike Telnet.',
    marks: 5,
    category: 'medium',
    year: '2023',
  },
  
  // Long Answer Questions (10 marks)
  {
    id: 'iwt2023-long-3',
    question: 'Define HTML form. Why we use HTML form? Explain syntax & purpose. (10 Marks)',
    answer: 'Definition:\nAn HTML form is a section within a web page that allows users to input data and submit it to a web server for processing.\n\nPurpose of HTML Forms:\n\n• Data Collection: Forms are primarily used to collect information from users, such as contact details, registration information, search queries, feedback, or order details.\n• User Interaction: They enable dynamic interaction between the user and the website, making web applications more functional and responsive.\n• Server-Side Processing: The data collected through forms is sent to a server-side script or application for storage, processing, or further actions like database updates or email sending.\n\nSyntax:\n<form action="process_form.php" method="POST">\n  <label for="username">Username:</label><br>\n  <input type="text" id="username" name="username"><br>\n  <label for="password">Password:</label><br>\n  <input type="password" id="password" name="password"><br><br>\n  <input type="submit" value="Submit">\n</form>\n\nKey Elements:\n• action: Specifies the URL where the form data will be sent for processing when submitted.\n• method: Defines the HTTP method used to send the form data.\n  - GET: Appends form data to the URL as query parameters. Suitable for non-sensitive data like search queries.\n  - POST: Sends form data in the body of the HTTP request. Preferred for sensitive data like passwords or larger amounts of data.\n• <input>: A versatile element for various input types (text, password, email, number, checkbox, radio, submit, etc.).\n• <textarea>: Used for multi-line text input.\n• <select>: Creates a dropdown list.\n• <option>: Defines an option within a <select> dropdown.\n• <label>: Provides a caption for a form control, improving accessibility.\n• <button>: Creates a clickable button, which can be used to submit the form.\n• <fieldset> and <legend>: Used to group related form elements and provide a caption for the group.',
    marks: 10,
    category: 'long',
    year: '2023',
  },
  {
    id: 'iwt2023-long-4',
    question: 'Define different HTML form tags with examples. (10 Marks)',
    answer: 'Tag Purpose Example\n\n<input> Input field <input type="text">\n\n<textarea> Multi-line input <textarea></textarea>\n\n<select> Dropdown list <select><option>One</option></select>\n\n<button> Submit/reset button <button>Click</button>\n\n<label> Label for input <label>Name</label>',
    marks: 10,
    category: 'long',
    year: '2023',
  },
  {
    id: 'iwt2023-long-5',
    question: 'Briefly explain the basic security principle concept. (10 Marks)',
    answer: 'Principles:\n\nConfidentiality:\n• Protecting information from unauthorized disclosure.\n• Using encryption and access controls to ensure only authorized individuals can view sensitive data.\n\nIntegrity:\n• Ensuring that data is accurate, consistent, and has not been tampered with.\n• Preventing unauthorized changes to data, whether accidental or malicious.\n\nAvailability:\n• Ensuring that systems and data are accessible to authorized users when they need them.\n• Implementing backup and disaster recovery plans to prevent downtime.\n\nAdditional Concepts:\n• Authentication: Verifying a user\'s identity to ensure they are who they claim to be.\n• Authorization: Determining what an authenticated user is allowed to do.\n• Least Privilege: Granting users only the minimum permissions necessary to perform their job functions.',
    marks: 10,
    category: 'long',
    year: '2023',
  },
  {
    id: 'iwt2023-long-6',
    question: 'Define firewall. Explain its types & working principle. (10 Marks)',
    answer: 'Definition:\nA firewall filters incoming/outgoing network traffic based on security rules.\n\nTypes:\n\n1. Packet Filtering Firewall: A network security device that examines incoming and outgoing data packets and filters them based on a set of predefined rules.\n\n2. Stateful Inspection Firewall: A type of network security device that monitors active connections and uses the context of the entire conversation to make decisions about which packets to allow or deny.\n\n3. Proxy Firewall: Acts as an intermediary between a user\'s internal network and an external network like the internet, filtering and screening traffic at the application layer to enhance security.\n\n4. Next-Generation Firewall (NGFW): A network security device that provides advanced threat protection beyond the capabilities of traditional firewalls.\n\n5. Software / Hardware Firewall: A physical device that acts as a barrier between your network and the internet, protecting all connected devices.\n\nWorking Principle:\nIt inspects packets\' source/destination IPs and ports to allow or block based on policy.',
    marks: 10,
    category: 'long',
    year: '2023',
  },
  {
    id: 'iwt2023-long-7',
    question: 'Define cookies. How cookies work in JavaScript? How to create a cookie? (10 Marks)',
    answer: 'Definition:\nA cookie is a small text file stored by the web browser on a user\'s computer. It contains data such as user preferences, login details, or session information that help websites remember users between visits.\n\nHow Cookies Work in JavaScript:\nCookies in JavaScript work as a key–value pair stored on the client-side. They are managed using the built-in document.cookie property.\n\nWorking Steps:\n\n1. Creation: The website or script sets a cookie using JavaScript.\n   document.cookie = "username=Neha";\n\n2. Storage: The browser saves the cookie locally (based on domain and path).\n\n3. Transmission: Each time the browser sends a request to the same server, the cookie is automatically included in the HTTP header.\n\n4. Access/Read: JavaScript can read existing cookies using:\n   console.log(document.cookie);\n\n5. Expiration: A cookie can have an expiry date. After the date, it is deleted automatically.\n\nSyntax for Creating a Cookie:\n\ndocument.cookie = "name=value; expires=date; path=path;";\n\n// Create a cookie\ndocument.cookie = "username=Neha; expires=Fri, 01 Dec 2025 12:00:00 UTC; path=/";\n\n// Read cookie\nconsole.log(document.cookie);\n\n// Delete cookie\ndocument.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";',
    marks: 10,
    category: 'long',
    year: '2023',
  },
  {
    id: 'iwt2023-long-8',
    question: 'Compare & contrast Internet, Intranet & Extranet. (10 Marks)',
    answer: 'Feature Comparison:\n\nInternet:\n• Access Type: Public access\n• Users: Anyone with Internet connection\n• Ownership: No single owner (public domain)\n• Security: Low (public network)\n• Purpose: Global communication and information sharing\n• Connectivity: Uses ISPs & global servers\n• Example: Google, YouTube, Wikipedia\n• Protocols Used: TCP/IP, HTTP, FTP, SMTP\n• Maintenance Cost: Shared by millions of users\n• Access Control: Open to all\n\nIntranet:\n• Access Type: Restricted to organization\n• Users: Employees of the organization\n• Ownership: Owned by a specific organization\n• Security: High (protected by firewalls)\n• Purpose: Internal communication and collaboration\n• Connectivity: Uses LAN or private servers\n• Example: Company HR portal\n• Protocols Used: TCP/IP, HTTP (within LAN)\n• Maintenance Cost: Paid by the organization\n• Access Control: Controlled by admin\n\nExtranet:\n• Access Type: Restricted to organization + external users\n• Users: Employees, vendors, partners, customers\n• Ownership: Shared ownership between organization & partners\n• Security: Moderate (secured access for outsiders)\n• Purpose: Business-to-business communication\n• Connectivity: Combination of LAN, VPN, and Internet\n• Example: Vendor or supplier portal\n• Protocols Used: TCP/IP, VPN, HTTPS\n• Maintenance Cost: Shared between organizations\n• Access Control: Controlled with authentication and permissions',
    marks: 10,
    category: 'long',
    year: '2023',
  },
];

// IWT2024 Questions
export const iwtQuestions2024: IWTQuestion[] = [
  // Short Answer Questions (2 marks each)
  {
    id: 'iwt2024-short-a',
    question: 'Define Modem.',
    answer: 'A modem (Modulator–Demodulator) converts digital signals into analog and vice versa for data transmission over telephone lines.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: 'iwt2024-short-b',
    question: 'Name the different types of connectivity used in networking.',
    answer: '• Dial-up: Uses phone lines (slow).\n• Broadband: Uses DSL or fiber optics.\n• Leased Line: Dedicated private line for high-speed data.\n• Wireless: Wi-Fi or mobile networks.\n• Satellite: Used in remote areas.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: 'iwt2024-short-c',
    question: 'Write the function of Internet layer of TCP/IP.',
    answer: '• The Internet Layer handles packet routing across networks using IP addresses.\n• Protocols: IP, ICMP, ARP.\n• Functions:\n  o Logical addressing (assign IP)\n  o Routing data packets\n  o Error handling and fragmentation',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: 'iwt2024-short-d',
    question: 'What is Spyware?',
    answer: 'Spyware is a type of malware that monitors user activities, steals personal information like passwords, and sends it to third parties without consent. Examples: Keyloggers, tracking cookies.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: 'iwt2024-short-e',
    question: 'What do you mean by NVT?',
    answer: 'NVT is a standard format used in Telnet for communication between different computer systems. It defines a universal interface for remote terminal access.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: 'iwt2024-short-f',
    question: 'What is Cyber Bullying?',
    answer: 'Cyberbullying is the act of threatening, insulting, or defaming someone using digital platforms like social media, email, or chat. Example: Spreading fake rumors or abusive messages online.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: 'iwt2024-short-g',
    question: 'Write syntax & purpose of HTML <frameset> tag with example.',
    answer: 'Syntax:\n<frameset cols="50%,50%">\n  <frame src="left.html">\n  <frame src="right.html">\n</frameset>\n\nPurpose: To display multiple web pages within one browser window.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: 'iwt2024-short-h',
    question: 'What is DOM?',
    answer: 'DOM represents a web page as an object hierarchy where each element (tag) can be accessed and modified using JavaScript.\n\nExample: document.getElementById("title").innerHTML = "Hello";',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: 'iwt2024-short-i',
    question: 'Name popular client-side scripting languages.',
    answer: '• JavaScript: Most widely used for interactive web pages.\n• VBScript: Used in older Microsoft environments.\n• TypeScript: Modern typed superset of JavaScript.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: 'iwt2024-short-j',
    question: 'What is Public Key Infrastructure (PKI)?',
    answer: 'PKI uses asymmetric cryptography (public/private keys) to secure data transmission.\n\n• Components: Certificate Authority (CA), Registration Authority (RA).\n• Purpose: Authentication, confidentiality, integrity, and non-repudiation.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  
  // Medium Answer Questions (5 marks each)
  {
    id: 'iwt2024-medium-a',
    question: 'Explain the computer network architecture.',
    answer: 'Network architecture defines the structure, design, and communication model of a network.\n\nTypes:\n\n1. Peer-to-Peer: All nodes share equal responsibility.\n\n2. Client-Server: Central server provides services to clients.\n\n3. Three-Tier Architecture: Presentation → Application → Database layers.\n\nExample: Web applications use a 3-tier model with browser, server, and database.',
    marks: 5,
    category: 'medium',
    year: '2024',
  },
  {
    id: 'iwt2024-medium-b',
    question: 'Differentiate between URL and URI.',
    answer: 'Parameter Comparison:\n\nURL (Uniform Resource Locator):\n• Meaning: Specifies resource location\n• Example: https://www.google.com/index.html\n• Subset: URL ⊂ URI\n\nURI (Uniform Resource Identifier):\n• Meaning: Identifies resource by name, location, or both\n• Example: mailto:info@gmail.com\n• Superset: URI ⊃ URL',
    marks: 5,
    category: 'medium',
    year: '2024',
  },
  {
    id: 'iwt2024-medium-c',
    question: 'Define scripting. Write advantages of scripting languages.',
    answer: 'Scripting is writing small programs (scripts) to automate tasks inside applications or web browsers.\n\nAdvantages:\n\n• Easy to learn and use.\n• Faster development time.\n• Runs directly without compilation.\n• Increases interactivity in web pages.\n• Platform independent (e.g., JavaScript).',
    marks: 5,
    category: 'medium',
    year: '2024',
  },
  {
    id: 'iwt2024-medium-d',
    question: 'Explain POST method in PHP with example.',
    answer: 'The POST method sends form data to the server securely in the message body.\n\nExample:\n<form method="POST" action="process.php">\n  <input type="text" name="username">\n  <input type="submit">\n</form>\n\nPHP Script (process.php):\n<?php\n  $name = $_POST[\'username\'];\n  echo "Welcome $name";\n?>\n\nPOST is preferred for sending sensitive data.',
    marks: 5,
    category: 'medium',
    year: '2024',
  },
  {
    id: 'iwt2024-medium-e',
    question: 'Classify the types of proxy server.',
    answer: '1. Forward Proxy: Forwards client requests to the Internet.\n\n2. Reverse Proxy: Forwards requests to backend servers.\n\n3. Transparent Proxy: Caches content without client awareness.\n\n4. Anonymous Proxy: Hides user\'s IP for privacy.\n\n5. High-Anonymity Proxy: Completely conceals user identity.',
    marks: 5,
    category: 'medium',
    year: '2024',
  },
  {
    id: 'iwt2024-medium-f',
    question: 'Define cryptography. Differentiate between encryption & decryption.',
    answer: 'Cryptography is the science of securing data using codes so that only authorized users can read it.\n\nProcess Comparison:\n\nEncryption:\n• Meaning: Converting plaintext → ciphertext\n• Key Used: Public or secret key\n• Performed By: Sender\n• Example: AES, RSA\n\nDecryption:\n• Meaning: Converting ciphertext → plaintext\n• Key Used: Same or corresponding key\n• Performed By: Receiver\n• Example: AES, RSA',
    marks: 5,
    category: 'medium',
    year: '2024',
  },
  {
    id: 'iwt2024-medium-g',
    question: 'Describe the basic security principle concept.',
    answer: 'Principles:\n\n1. Confidentiality: Protect data from unauthorized access.\n\n2. Integrity: Ensure data is not altered.\n\n3. Availability: Ensure resources are accessible.\n\n4. Authentication: Verify identity of users.\n\n5. Authorization: Grant permission levels.\n\n6. Non-Repudiation: Prevent denial of an action.',
    marks: 5,
    category: 'medium',
    year: '2024',
  },
  
  // Long Answer Questions (10 marks)
  {
    id: 'iwt2024-long-3',
    question: 'Define website. Explain the types of website. Differentiate between webpage & website. (10 Marks)',
    answer: 'Definition:\nA website is a collection of interlinked web pages hosted on a web server and accessed via the Internet using a domain name.\n\nTypes of Websites:\n\n1. Static Website: Fixed content, same for all users (HTML pages).\n\n2. Dynamic Website: Content changes dynamically (PHP, JavaScript).\n\n3. E-Commerce Website: Online shopping portals.\n\n4. Blog/Portfolio Website: For personal use.\n\nDifference between Webpage and Website:\n\nWebpage:\n• Definition: Single document on the web\n• Example: index.html\n• Creator: Part of a website\n• Storage: One file\n\nWebsite:\n• Definition: Collection of related web pages\n• Example: www.example.com\n• Creator: Whole project\n• Storage: Many files linked together',
    marks: 10,
    category: 'long',
    year: '2024',
  },
  {
    id: 'iwt2024-long-4',
    question: 'What are JavaScript events? Explain in detail. (10 Marks)',
    answer: 'Definition:\nJavaScript events are actions or occurrences that happen in the browser and can be handled using event handlers.\n\nExamples:\n\nEvent: onclick\n• Description: Triggered when user clicks\n• Handler: onclick="func()"\n\nEvent: onmouseover\n• Description: When cursor hovers\n• Handler: onmouseover="show()"\n\nEvent: onchange\n• Description: When form value changes\n• Handler: onchange="update()"\n\nEvent: onload\n• Description: When page loads\n• Handler: onload="init()"\n\nExample Code:\n<button onclick="alert(\'Button clicked!\')">Click Me</button>\n\nWorking:\nEvents make web pages interactive and dynamic by responding to user actions.',
    marks: 10,
    category: 'long',
    year: '2024',
  },
  {
    id: 'iwt2024-long-5',
    question: 'Write a program in PHP to calculate the factorial of a number. (10 Marks)',
    answer: '<?php\n$num = 5;\n$fact = 1;\nfor($i = 1; $i <= $num; $i++) {\n  $fact = $fact * $i;\n}\necho "Factorial of $num is: $fact";\n?>\n\nOutput: Factorial of 5 is: 120\n\nExplanation: The program multiplies numbers from 1 to n sequentially to get the factorial.',
    marks: 10,
    category: 'long',
    year: '2024',
  },
  {
    id: 'iwt2024-long-6',
    question: 'Define HTML. Write the different HTML tags with example. Explain disadvantages of HTML. (10 Marks)',
    answer: 'Definition:\nHTML (HyperText Markup Language) is the standard language for creating web pages.\n\nCommon Tags:\n\nTag: <html>\n• Purpose: Root element\n• Example: <html></html>\n\nTag: <head>\n• Purpose: Metadata\n• Example: <head><title>Page</title></head>\n\nTag: <body>\n• Purpose: Main content\n• Example: <body>Welcome</body>\n\nTag: <h1>\n• Purpose: Heading\n• Example: <h1>Hello</h1>\n\nTag: <p>\n• Purpose: Paragraph\n• Example: <p>This is text</p>\n\nTag: <a>\n• Purpose: Hyperlink\n• Example: <a href="#">Click</a>\n\nTag: <img>\n• Purpose: Image\n• Example: <img src="img.jpg">\n\nDisadvantages:\n\n• Static; cannot create dynamic content.\n• Limited styling (requires CSS).\n• No logic or computation (requires JavaScript).',
    marks: 10,
    category: 'long',
    year: '2024',
  },
  {
    id: 'iwt2024-long-7',
    question: 'Write short notes (any two).\n\ni. Firewall\nii. Telnet\niii. FTP (File Transfer Protocol)\niv. E-Commerce\nv. Search Engine',
    answer: 'i. Firewall:\nA firewall is a security system that monitors and filters network traffic.\n\nTypes:\n• Packet-filtering firewalls: The most basic type, these firewalls inspect individual packets based on simple criteria like source and destination IP addresses and port numbers.\n• Stateful inspection firewalls: These are more advanced and can monitor the state of active network connections.\n• Proxy firewalls (Application-Level Gateways): These act as an intermediary for network traffic.\n• Next-Generation Firewalls (NGFWs): Modern NGFWs combine traditional firewall features with advanced capabilities such as deep packet inspection, intrusion prevention systems (IPS), and application visibility and control.\n\nPurpose: Protects internal network from unauthorized access.\n\nii. Telnet:\nTelnet is an old network protocol that allows users to remotely control a computer through a command-line interface over a TCP/IP network. It works by establishing a client-server connection, enabling users to log into a remote system as if they were directly connected.\n\niii. FTP (File Transfer Protocol):\nFile Transfer Protocol (FTP) is a standard network protocol for transferring files between a client and server over a TCP/IP network, using a client-server model.\n\nCommands: GET, PUT.\nPorts: 20 (data), 21 (control).\n\niv. E-Commerce:\nE-commerce is the buying and selling of goods and services over the internet.\n\nTypes:\n• Business-to-Consumer (B2C): Businesses sell directly to individual customers. This is the most common form of e-commerce, as seen with online retailers like Amazon and Flipkart.\n• Business-to-Business (B2B): Businesses transact with other businesses, often involving large volumes of goods and complex transactions. This can include manufacturers selling to wholesalers or retailers.\n• Consumer-to-Consumer (C2C): Consumers sell goods or services directly to other consumers, typically through a third-party platform that facilitates the transaction. Examples include eBay and OLX.\n• Consumer-to-Business (C2B): Individuals sell their products or services to businesses. This includes freelancers offering their skills on platforms like Upwork or photographers licensing their images to businesses.\n\nExamples: Amazon, Flipkart.\n\nv. Search Engine:\nA search engine is a software system designed to search for information on the World Wide Web, and it is an indispensable tool for navigating the vast amount of data on the internet. Rather than manually browsing websites, users input keywords or queries to quickly retrieve a list of relevant results.\n\nExamples: Google, Bing.\n\nPhases: Crawling → Indexing → Ranking.',
    marks: 10,
    category: 'long',
    year: '2024',
  },
];

// Combined questions array
export const allIWTQuestions: IWTQuestion[] = [...iwtQuestions2022, ...iwtQuestions2023, ...iwtQuestions2024];

// Helper functions
export const getIWTQuestionsByCategory = (
  category: 'short' | 'medium' | 'long' | 'all',
  year: '2022' | '2023' | '2024'
): IWTQuestion[] => {
  let questions;
  if (year === '2022') {
    questions = iwtQuestions2022;
  } else if (year === '2023') {
    questions = iwtQuestions2023;
  } else {
    questions = iwtQuestions2024;
  }
  if (category === 'all') return questions;
  return questions.filter(q => q.category === category);
};

export const getIWTQuestionById = (id: string): IWTQuestion | undefined => {
  return allIWTQuestions.find(q => q.id === id);
};

