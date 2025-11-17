export interface SEQuestion {
  id: string;
  question: string;
  answer: string;
  marks: number;
  category: 'short' | 'medium' | 'long';
  year: '2022' | '2023' | '2024';
}

// SE2022 Questions
export const seQuestions2022: SEQuestion[] = [
  // Short Answer Questions (2 marks each)
  {
    id: 'se2022-short-a',
    question: 'Distinguish between a program and a software product.',
    answer: 'Program:\n• A small piece of code solving a specific problem.\n• Focus only on coding.\n\nSoftware Product:\n• A complete, engineered software system delivered to users.\n• Includes documentation, testing, maintenance, quality, UI.',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: 'se2022-short-b',
    question: 'What are the basic attributes for estimating a project?',
    answer: '• Size of software (LOC / Function Points)\n• Complexity of the system\n• Manpower and team capability\n• Development environment and technology\n• Cost and schedule constraints\n• Risk factors\n• Required quality and reliability',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: 'se2022-short-c',
    question: 'Why SRS document is known as black box specification of a system?',
    answer: 'SRS document is called black box specification because it defines system functionalities without detailing internal implementations or workings, focusing only on inputs and expected outputs.',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: 'se2022-short-d',
    question: 'Define Fan-in and Fan-out in Module Designing.',
    answer: 'Fan-in is the count of modules that call a particular module; high fan-in implies reusability.\n\nFan-out is the count of modules called directly by a module; excessive fan-out increases complexity.',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: 'se2022-short-e',
    question: 'Why GANT chart is used?',
    answer: 'GANTT chart is used to schedule and track tasks over time visually, showing task durations, dependencies, and progress, assisting in project management.',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: 'se2022-short-f',
    question: 'Write a advantage and disadvantages of a command language Interface.',
    answer: 'Advantage: Fast, efficient for experts, low memory use.\n\nDisadvantage: Hard to learn, requires memorizing commands, less user-friendly.',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: 'se2022-short-g',
    question: 'Name different types of System Testing.',
    answer: 'i. Functional testing\nii. Performance testing\niii. Stress testing\niv. Load testing\nv. Recovery testing\nvi. Security testing\nvii. Usability testing\nviii. Compatibility testing',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: 'se2022-short-h',
    question: 'What is context diagram?',
    answer: 'Context diagram is a high-level DFD representing the entire system as a single process and showing data flows between the system and external entities.',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: 'se2022-short-i',
    question: 'Define Software reliability.',
    answer: 'Software reliability is the probability that software operates without failure under specified conditions for a given period.',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  {
    id: 'se2022-short-j',
    question: 'Define test suit.',
    answer: 'Test suite is a collection of test cases designed to test software functionality thoroughly.',
    marks: 2,
    category: 'short',
    year: '2022',
  },
  
  // Medium Answer Questions (5 marks each)
  {
    id: 'se2022-medium-a',
    question: 'Discuss about Spiral Model.',
    answer: 'The spiral model is a risk-driven software development process that combines the iterative nature of the incremental model with the systematic, controlled aspects of the waterfall model. It is a highly adaptable framework, often used for large, complex, and high-risk projects, where each cycle, or "spiral," includes four phases: planning, risk analysis, engineering (product development), and evaluation.',
    marks: 5,
    category: 'medium',
    year: '2022',
  },
  {
    id: 'se2022-medium-b',
    question: 'Describe empirical estimation techniques.',
    answer: 'Empirical estimation techniques are methods that use past project data, educated guesses, and experience to estimate future project parameters. They rely on data from previous projects to create formulas or models for predicting variables like cost or effort, and can be formalized through structured approaches like the Expert Judgement technique or the Delphi method.',
    marks: 5,
    category: 'medium',
    year: '2022',
  },
  {
    id: 'se2022-medium-c',
    question: 'Explain different Integration testing.',
    answer: '1. Big-Bang Integration Testing:\nIt is the simplest integration testing approach, where all the modules are combined and the functionality is verified after the completion of individual module testing. This approach is practicable only for very small systems. If an error is found during the integration testing, it is very difficult to localize the error as the error may potentially belong to any of the modules being integrated.\n\n2. Bottom-Up Integration Testing:\nIn bottom-up testing, each module at lower levels are tested with higher modules until all modules are tested. The primary purpose of this integration testing is that each subsystem tests the interfaces among various modules making up the subsystem.\n\n3. Top-Down Integration Testing:\nTop-down integration testing technique is used in order to simulate the behaviour of the lower-level modules that are not yet integrated. In this integration testing, testing takes place from top to bottom. First, high-level modules are tested and then low-level modules and finally integrating the low-level modules to a high level to ensure the system is working as intended.',
    marks: 5,
    category: 'medium',
    year: '2022',
  },
  {
    id: 'se2022-medium-d',
    question: 'Define coupling? Explain classification of coupling.',
    answer: 'A coupling is a mechanical device used to connect two shafts to transmit power and torque. They are broadly classified into two main types: rigid and flexible. Rigid couplings are used for perfectly aligned shafts, while flexible couplings connect shafts that may have some degree of misalignment.\n\nClassification of couplings:\n\n1. Rigid couplings:\n• These connect two shafts that are perfectly aligned.\n• They are suitable for applications where shafts are precisely aligned and do not require misalignment compensation.\n• Examples:\n  o Sleeve coupling: A single sleeve fits over the two shafts, which are joined by keys or pins.\n\n2. Flexible couplings:\n• These are used to connect shafts that are not perfectly aligned.\n• They provide flexibility to accommodate angular, parallel, or axial misalignment, reducing wear and vibration.\n• Examples:\n  o Universal coupling: Uses a cross-shaped piece to connect two shafts at an angle.',
    marks: 5,
    category: 'medium',
    year: '2022',
  },
  {
    id: 'se2022-medium-e',
    question: 'Differentiate between Hardware reliability and Software reliability.',
    answer: 'Hardware Reliability:\n• Physical components can wear out over time\n• Failures are often due to physical degradation\n• Can be improved through redundancy and maintenance\n• Predictable failure patterns\n\nSoftware Reliability:\n• Software does not wear out physically\n• Failures are due to design flaws or bugs\n• Improved through testing and debugging\n• Less predictable failure patterns',
    marks: 5,
    category: 'medium',
    year: '2022',
  },
  {
    id: 'se2022-medium-f',
    question: 'Discuss different types of menu used in menu based user interface.',
    answer: 'Types of menus:\n\nHierarchical Menus:\n• Description: Used when menu options have a parent-child relationship, such as from categories to subcategories.\n• Advantages: Organizes a large number of options in a structured way and is ideal for complex applications.\n\nDrop-down/Pull-down Menus:\n• Description: A list of options appears below a selectable item, often in a horizontal menu bar at the top of the screen.\n• Advantages: Saves screen space by hiding options until they are needed.\n\nPop-up/Context Menus:\n• Description: Appears when the user performs a specific action, most commonly by right-clicking on an object.\n• Advantages: Provides relevant actions for the specific item being interacted with.\n\nSequential/Linear Menus:\n• Description: Guides the user through a series of screens or steps to complete a task.\n• Advantages: Useful for simple, step-by-step processes where users don\'t need to see all options at once.',
    marks: 5,
    category: 'medium',
    year: '2022',
  },
  {
    id: 'se2022-medium-g',
    question: 'Define SRS. Discuss the characteristics of a Good SRS Document.',
    answer: 'An SRS, or Software Requirements Specification, is a document that details a software system\'s functional and non-functional requirements, outlining what the system should do and how it should perform.\n\nCharacteristics of a good SRS document:\n\n• Correctness: All requirements are accurate and reflect the user\'s needs and expectations.\n• Completeness: The document includes all necessary functional and non-functional requirements, including performance and design constraints.\n• Consistency: Requirements do not contradict each other and align with higher-level business or system requirements.\n• Unambiguous: Each requirement has only one possible interpretation to avoid confusion between the client and developers.\n• Verifiability: Each requirement can be tested to ensure the final product meets the specification.\n• Modifiability: The document is structured so that requirements can be easily changed and updated as needed.',
    marks: 5,
    category: 'medium',
    year: '2022',
  },
  
  // Long Answer Questions (10 marks)
  {
    id: 'se2022-long-3',
    question: 'What is a prototype? Discuss about Prototype model? Under what circumstances it is beneficial to construct a prototype?',
    answer: 'Definition:\nA prototype in software development is a simulation of how a real software product will look, work, and feel. Typically built early in the software development process, prototypes are primarily for design feedback and user testing.\n\nPrototype Model:\nThe prototyping model is an iterative software development approach that builds a preliminary, working model (a prototype) to test concepts and gather user feedback early in the process. This is particularly useful for projects with vague or changing requirements, as it allows developers to refine the design and functionality through multiple cycles of building, testing, and improving the prototype based on user input. The final product is then developed based on the final, refined prototype.\n\nWhen to Use Prototyping:\nIt is beneficial to construct a prototype model when:\n• Requirements are unclear\n• User needs are complex\n• The project involves a high degree of user interaction\n• Testing the feasibility of a product\n• Gathering funding\n• Incorporating changes as needed\n\nPrototyping allows stakeholders to provide feedback on a working version before full development begins.',
    marks: 10,
    category: 'long',
    year: '2022',
  },
  {
    id: 'se2022-long-4',
    question: 'Define DFD? Explain different level of DFD. Draw DFD for Root Mean Square calculating Software.',
    answer: 'Definition:\nA Data Flow Diagram (DFD) is a graphical representation that illustrates how data moves through a system, showing the flow of information from inputs to outputs through various processes, transformations, and storage.\n\nLevels in Data Flow Diagram:\n\n0-Level Data Flow Diagram (DFD):\n• Level 0 is the highest-level Data Flow Diagram (DFD), which provides an overview of the entire system.\n• It shows the major processes, data flows, and data stores in the system, without providing any details about the internal workings of these processes.\n\n1-Level Data Flow Diagram (DFD):\n• 1-Level provides a more detailed view of the system by breaking down the major processes identified in the level 0 Data Flow Diagram (DFD) into sub-processes.\n• Each sub-process is depicted as a separate process on the level 1 Data Flow Diagram (DFD).\n• The data flows and data stores associated with each sub-process are also shown.\n\n2-Level Data Flow Diagram (DFD):\n• 2-Level provides an even more detailed view of the system by breaking down the sub-processes identified in the level 1 Data Flow Diagram (DFD) into further sub-processes.\n• Each sub-process is depicted as a separate process on the level 2 DFD.\n• The data flows and data stores associated with each sub-process are also shown.\n\n3-Level Data Flow Diagram (DFD):\n• 3-Level is the most detailed level of Data Flow Diagram (DFDs), which provides a detailed view of the processes, data flows, and data stores in the system.\n• This level is typically used for complex systems, where a high level of detail is required to understand the system.\n\nDFD for Root Mean Square Calculating Software:\n[Level 0: User → Calculate RMS → Result]\n[Level 1: User → Input Numbers → Calculate Sum of Squares → Calculate Mean → Calculate Square Root → Result]',
    marks: 10,
    category: 'long',
    year: '2022',
  },
  {
    id: 'se2022-long-5',
    question: 'What is testing? Discuss about various black box testing with example.',
    answer: 'Definition:\nTesting is the process of evaluating a software system to identify defects and verify whether it meets specified requirements. Black box testing examines system functionality without knowledge of internal code structure. Test cases are based on input-output specifications.\n\nTypes of Black Box Testing:\n\n1. Functional Testing:\nThis type verifies that each function of the software operates according to its specifications.\n\nExample: Testing a login screen by entering valid credentials to ensure successful login, and invalid credentials to ensure proper error messages or denied access. Another example is verifying that a "save" button in a word processor correctly saves the document.\n\n2. Non-Functional Testing:\nThis evaluates the system\'s non-functional attributes, such as performance, usability, and security.\n\n• Performance Testing: Assessing the system\'s speed, responsiveness, and stability under various loads.\n  Example: Measuring the time it takes for a web page to load with 100 concurrent users, or checking how many transactions a system can handle per second.\n\n• Usability Testing: Evaluating how easy and intuitive the system is for users to interact with.\n  Example: Observing users as they navigate through an application to identify any confusing elements or workflows.\n\n• Security Testing: Identifying vulnerabilities and weaknesses in the system\'s security.\n  Example: Attempting to access unauthorized data or functions using various attack techniques like SQL injection or cross-site scripting (XSS).',
    marks: 10,
    category: 'long',
    year: '2022',
  },
  {
    id: 'se2022-long-6',
    question: 'Define UID? Explain different types of User interface.',
    answer: 'Definition:\nA Unique Identifier (UID) is a unique string of numbers or letters that serves to distinguish and identify a specific entity, such as a user, file, or device, within a system. This allows the system to access, track, and interact with that specific entity without confusion.\n\nTypes of User Interfaces (UI):\n\n• Graphical User Interface (GUI): This is the most common type of UI, which uses visual elements like icons, windows, and menus to allow users to interact with a device.\n\n• Command-Line Interface (CLI): This interface requires users to type commands to interact with the system. It is often used by developers and system administrators.\n\n• Voice User Interface (VUI): This interface allows users to interact with a system by speaking commands and receiving spoken responses, like those found in smart assistants.\n\n• Menu-Driven Interface: In this type, the user is presented with a list of options (a menu) to choose from. This is common in older systems and in some modern applications, like ATMs.\n\n• Touchscreen Interface: A UI that uses a touch-sensitive display to allow for interaction through direct manipulation with a finger or stylus.\n\n• Form-Based Interface: This interface uses forms that a user can fill out, with fields for various types of information, common in data entry and web forms.',
    marks: 10,
    category: 'long',
    year: '2022',
  },
  {
    id: 'se2022-long-7',
    question: 'What is COCOMO model of estimation? Discuss features of different COCOMO model.',
    answer: 'Definition:\nThe Constructive Cost Model (COCOMO) is a software cost estimation model that predicts project effort, cost, and time based on the size of the software in lines of code. It is used to provide a structured and quantitative method for estimating the effort, time, and cost required for software development projects.\n\nFeatures of different COCOMO models:\n\n1. Basic COCOMO Model:\nThe Basic COCOMO model is a straightforward way to estimate the effort needed for a software development project. It uses a simple mathematical formula to predict how many person-months of work are required based on the size of the project, measured in thousands of lines of code (KLOC).\n\n2. Intermediate COCOMO Model:\nThe basic COCOMO model assumes that the effort is only a function of the number of lines of code and some constants evaluated according to the different software systems. However, in reality, no system\'s effort and schedule can be solely calculated based on Lines of Code. For that, various other factors such as reliability, experience, and Capability are considered.\n\n3. Detailed COCOMO Model:\nDetailed COCOMO goes beyond Basic and Intermediate COCOMO by diving deeper into project-specific factors. It considers a wider range of parameters, like team experience, development practices, and software complexity. By analyzing these factors in more detail, Detailed COCOMO provides a highly accurate estimation of effort, time, and cost for software projects. It\'s like zooming in on a project\'s unique characteristics to get a clearer picture of what it will take to complete it successfully.',
    marks: 10,
    category: 'long',
    year: '2022',
  },
];

// SE2023 Questions
export const seQuestions2023: SEQuestion[] = [
  // Short Answer Questions (2 marks each)
  {
    id: 'se2023-short-a',
    question: 'Define phase containment error.',
    answer: 'A phase containment error means an error is detected and corrected in the same phase of the software development lifecycle in which it was introduced. Detecting errors early reduces cost and effort.',
    marks: 2,
    category: 'short',
    year: '2023',
  },
  {
    id: 'se2023-short-b',
    question: 'What do you mean by the "99% complete" syndrome in software development?',
    answer: 'The "99% complete syndrome" refers to a situation where developers repeatedly report that a task is almost done, but the final completion keeps delaying due to underestimated remaining work or hidden complexities.',
    marks: 2,
    category: 'short',
    year: '2023',
  },
  {
    id: 'se2023-short-c',
    question: 'What are the different activities of project manager?',
    answer: 'A project manager performs:\n\n• Project planning\n• Effort and cost estimation\n• Scheduling and resource allocation\n• Risk management\n• Team leadership and communication',
    marks: 2,
    category: 'short',
    year: '2023',
  },
  {
    id: 'se2023-short-d',
    question: 'Why Gantt chart is used?',
    answer: 'A Gantt chart is used to represent the project schedule visually. It shows tasks, their durations, start and end dates, progress, and dependencies, helping track project execution.',
    marks: 2,
    category: 'short',
    year: '2023',
  },
  {
    id: 'se2023-short-e',
    question: 'Define fan-in and fan-out.',
    answer: 'Fan-in: Number of modules that call a given module.\n\nFan-out: Number of modules that are called by a given module.',
    marks: 2,
    category: 'short',
    year: '2023',
  },
  {
    id: 'se2023-short-f',
    question: 'Why SRS is called as black-box specification of the system.',
    answer: 'SRS describes what the system should do, not how it will be implemented. It treats the system as a black box, specifying inputs, outputs, and behavior without revealing internal design.',
    marks: 2,
    category: 'short',
    year: '2023',
  },
  {
    id: 'se2023-short-g',
    question: 'Define structure analysis.',
    answer: 'Structured analysis is a top-down, process-oriented technique used to understand system requirements using diagrams like DFDs, ER diagrams, and data dictionaries.',
    marks: 2,
    category: 'short',
    year: '2023',
  },
  {
    id: 'se2023-short-h',
    question: 'Define debugging.',
    answer: 'Debugging is the process of identifying, isolating, and correcting errors or faults in software.',
    marks: 2,
    category: 'short',
    year: '2023',
  },
  {
    id: 'se2023-short-i',
    question: 'List different menu used in menu based interface',
    answer: 'Common menus in a menu-based interface include:\n\n• Main menu\n• Submenu\n• Context menu\n• Dropdown menu\n• Toolbar menu',
    marks: 2,
    category: 'short',
    year: '2023',
  },
  {
    id: 'se2023-short-j',
    question: 'Define software reliability',
    answer: 'Software reliability is the probability that software operates without failure for a specified time in a specified environment.',
    marks: 2,
    category: 'short',
    year: '2023',
  },
  
  // Medium Answer Questions (5 marks each)
  {
    id: 'se2023-medium-a',
    question: 'Discuss about function point metric.',
    answer: 'Function Point Analysis (FPA) is a software measurement technique that quantifies the size and complexity of a software system based on its functionality from the user\'s perspective. It counts inputs, outputs, user inquiries, files, and interfaces, then adjusts these counts for complexity factors.',
    marks: 5,
    category: 'medium',
    year: '2023',
  },
  {
    id: 'se2023-medium-b',
    question: 'Briefly discuss the spiral model of software development. Why spiral model is known as a meta model.',
    answer: 'The spiral model is an iterative software development process focusing on risk management. It divides development into multiple cycles (spirals), each with phases: planning, risk analysis, engineering, and evaluation.\n\nIt is called a meta-model because it includes features of other models (waterfall, incremental, prototyping) and can generate them depending on the risk and project type.',
    marks: 5,
    category: 'medium',
    year: '2023',
  },
  {
    id: 'se2023-medium-c',
    question: 'Write characteristics of Good software Engineer.',
    answer: '• Strong problem-solving skills\n• Good communication and teamwork\n• Sound knowledge of algorithms, design, and architecture\n• Attention to detail\n• Ability to learn new technologies\n• Strong ethics and professionalism\n• Good time management and planning',
    marks: 5,
    category: 'medium',
    year: '2023',
  },
  {
    id: 'se2023-medium-d',
    question: 'What is code inspection? How it is different from code walk through?',
    answer: 'Code inspection is a formal, systematic review led by a moderator with participants from several departments to find defects. It uses checklists and documented processes.\n\nA code walkthrough is informal, led by the code author, with peers asking questions and providing feedback without a formal process or checklist.',
    marks: 5,
    category: 'medium',
    year: '2023',
  },
  {
    id: 'se2023-medium-e',
    question: 'Define DFD. Explain different symbol used in DFD.',
    answer: 'A Data Flow Diagram (DFD) is a graphical representation that illustrates how data moves through a system. It shows the flow of information from its origin to its destination, detailing how data is transformed, stored, and processed by different components like processes, data stores, and external entities.\n\nSymbols:\n\n• Process: Circle or rounded rectangle\n• Data Flow: Arrow\n• Data Store: Open-ended rectangle\n• External Entity: Square/rectangle',
    marks: 5,
    category: 'medium',
    year: '2023',
  },
  {
    id: 'se2023-medium-f',
    question: 'Define SRS. Write about different category of user of SRS document.',
    answer: 'SRS can stand for Software Requirements Specification, a detailed document outlining the functional and non-functional requirements for a software system.\n\nUsers of SRS:\n\n• Customers/clients\n• Project managers\n• Designers and developers\n• Testers\n• Maintenance engineers\n• Documentation team',
    marks: 5,
    category: 'medium',
    year: '2023',
  },
  {
    id: 'se2023-medium-g',
    question: 'Explain team structure with diagram.',
    answer: 'Team structure is how tasks, roles, and responsibilities are assigned, controlled, and coordinated among team members to achieve common goals. Team structure defines the team size, decides the reporting hierarchy, and clarifies workflows. Well-designed team structures align team members\' skills and areas of expertise to tasks and objectives.\n\nSoftware teams vary by project size and methodology. Typical roles:\n\n• Project Manager\n• Business Analyst\n• UI/UX Designer\n• Software Developers\n• QA Engineers',
    marks: 5,
    category: 'medium',
    year: '2023',
  },
  
  // Long Answer Questions (10 marks)
  {
    id: 'se2023-long-3',
    question: 'Discuss about different Empirical Estimation Techniques.',
    answer: 'i. Analogy-Based Estimation:\nCompares the current project with similar past projects to predict outcomes.\n\nii. Regression Models:\nUtilize statistical techniques to establish relationships between variables like effort and size.\n\niii. COCOMO (Constructive Cost Model):\nThe Constructive Cost Model estimates effort and expenses according to project size and other factors.\n\niv. Expert Judgment Technique:\nIn order to estimate project parameters, the Expert Judgment Technique depends on the expertise and experience of seasoned individuals. These professionals use their knowledge of related previous projects to assess the project\'s goals, limitations, and scope.\n\nv. Delphi Cost Technique:\nThe Delphi Cost Technique is a systematic process that improves estimates by soliciting anonymous input from a group of experts in several rounds. Individual biases are removed by this repeated process, which culminates in a consensus-driven estimate.',
    marks: 10,
    category: 'long',
    year: '2023',
  },
  {
    id: 'se2023-long-4',
    question: 'Define cohesion and coupling. Explain their classification.',
    answer: 'Cohesion:\nCohesion refers to how closely related the functions within a single module are; high cohesion means a module performs a single, well-defined task.\n\nTypes (Low → High):\n\ni. Coincidental\nii. Logical\niii. Temporal\niv. Procedural\nv. Communicational\nvi. Sequential\nvii. Functional (best)\n\nCoupling:\nCoupling indicates the degree of interdependence between different modules; low coupling means modules operate independently, which is preferable for maintainability.\n\nClassification examples:\n\nTypes (High → Low):\n\ni. Content coupling (worst)\nii. Common coupling\niii. External coupling\niv. Control coupling\nv. Stamp coupling\nvi. Data coupling (best)',
    marks: 10,
    category: 'long',
    year: '2023',
  },
  {
    id: 'se2023-long-5',
    question: 'What is testing? Discuss about black box testing with example.',
    answer: 'Definition:\nTesting is the process of evaluating a software system to identify defects and verify whether it meets specified requirements. Black box testing examines system functionality without knowledge of internal code structure. Test cases are based on input-output specifications.\n\nTypes of Black Box Testing:\n\n1. Functional Testing:\nThis type verifies that each function of the software operates according to its specifications.\n\nExample: Testing a login screen by entering valid credentials to ensure successful login, and invalid credentials to ensure proper error messages or denied access. Another example is verifying that a "save" button in a word processor correctly saves the document.\n\n2. Non-Functional Testing:\nThis evaluates the system\'s non-functional attributes, such as performance, usability, and security.\n\n• Performance Testing: Assessing the system\'s speed, responsiveness, and stability under various loads.\n  Example: Measuring the time it takes for a web page to load with 100 concurrent users, or checking how many transactions a system can handle per second.\n\n• Usability Testing: Evaluating how easy and intuitive the system is for users to interact with.\n  Example: Observing users as they navigate through an application to identify any confusing elements or workflows.\n\n• Security Testing: Identifying vulnerabilities and weaknesses in the system\'s security.\n  Example: Attempting to access unauthorized data or functions using various attack techniques like SQL injection or cross-site scripting (XSS).',
    marks: 10,
    category: 'long',
    year: '2023',
  },
  {
    id: 'se2023-long-6',
    question: 'Discuss about different types of user interface.',
    answer: 'Common types of user interfaces:\n\n• Graphical User Interface (GUI):\nThe most common type, which uses visual elements like windows, icons, and buttons for interaction through devices like a mouse and keyboard.\n\n• Command-Line Interface (CLI):\nUsers interact by typing commands into a text-based prompt, often used by developers and system administrators for precise control.\n\n• Menu-Driven Interface:\nUsers navigate a system by selecting options from a series of on-screen menus, which is common in ATMs and many apps.\n\n• Voice User Interface (VUI):\nAllows users to interact with a system by speaking commands, as seen in virtual assistants like Siri and Alexa.\n\n• Touch User Interface:\nSpecifically designed for touchscreens, where users interact by using their fingers or a stylus to tap, swipe, and pinch.\n\n• Form-based Interface:\nUsers fill out electronic forms with fields for data entry, such as on a website\'s contact or sign-up page.',
    marks: 10,
    category: 'long',
    year: '2023',
  },
  {
    id: 'se2023-long-7',
    question: 'What is prototyping? Under what circumstances it is beneficial to construct a prototype model. Discuss the prototyping model of software development.',
    answer: 'Definition:\nA prototype in software development is a simulation of how a real software product will look, work, and feel. Typically built early in the software development process, prototypes are primarily for design feedback and user testing.\n\nWhen to Use Prototyping:\nIt is beneficial to construct a prototype model when:\n• Requirements are unclear\n• User needs are complex\n• The project involves a high degree of user interaction\n• Testing the feasibility of a product\n• Gathering funding\n• Incorporating changes as needed\n\nPrototyping allows stakeholders to provide feedback on a working version before full development begins.\n\nPrototyping Model:\nThe prototyping model is an iterative software development approach that builds a preliminary, working model (a prototype) to test concepts and gather user feedback early in the process. This is particularly useful for projects with vague or changing requirements, as it allows developers to refine the design and functionality through multiple cycles of building, testing, and improving the prototype based on user input. The final product is then developed based on the final, refined prototype.',
    marks: 10,
    category: 'long',
    year: '2023',
  },
];

// SE2024 Questions
export const seQuestions2024: SEQuestion[] = [
  // Short Answer Questions (2 marks each)
  {
    id: 'se2024-short-a',
    question: 'Differentiate program and software.',
    answer: 'A program is a set of instructions written in a programming language to accomplish a specific task, while software is a collection of programs and related data, designed to perform a set of operations and provide functionality to users.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: 'se2024-short-b',
    question: 'Write down any 2 advantages of prototype model.',
    answer: '• Helps users understand requirements clearly through visual feedback.\n• Reduces risk of system failure by detecting problems early.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: 'se2024-short-c',
    question: 'Define critical path.',
    answer: 'The critical path is the longest sequence of dependent tasks in a project schedule that determines the shortest possible project duration.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: 'se2024-short-d',
    question: 'Define fan-in and fan-out.',
    answer: '• Fan-in: Number of modules that call a given module.\n• Fan-out: Number of modules that are called by a given module.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: 'se2024-short-e',
    question: 'Define program slicing.',
    answer: 'Program slicing is a technique to identify and extract relevant portions of code that affect a particular computation or variable at a specific point.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: 'se2024-short-f',
    question: 'Define risk. Mention 3 types of risks that can affect a software project.',
    answer: 'Risk refers to the possibility of loss or failure due to uncertain events or conditions in software project development.\n\nTypes:\n\n1. Project risks – affect schedule or resources.\n2. Technical risks – affect design, implementation, or technology.\n3. Business risks – affect customer satisfaction or market success.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: 'se2024-short-g',
    question: 'Define staffing.',
    answer: 'Staffing refers to the process of assigning the right people with appropriate skills to the right roles in a software project.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: 'se2024-short-h',
    question: 'Define verification and validation.',
    answer: 'Verification: The process of ensuring that the software product meets the specified design requirements.\n\nValidation: The process of checking if the product fulfills the intended use and meets user requirements.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: 'se2024-short-i',
    question: 'Define code walkthrough.',
    answer: 'A code walkthrough is a peer review process where developers manually read source code to detect errors, improve quality, and ensure adherence to standards.',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  {
    id: 'se2024-short-j',
    question: 'Define software quality and mention 2 quality factors.',
    answer: 'Software quality: The degree to which software satisfies stated and implied requirements.\n\nQuality factors:\n\n1. Reliability\n2. Maintainability',
    marks: 2,
    category: 'short',
    year: '2024',
  },
  
  // Medium Answer Questions (5 marks each)
  {
    id: 'se2024-medium-a',
    question: 'Briefly explain classical waterfall model.',
    answer: 'The classical waterfall model is a linear and sequential approach to software development, where each phase—Requirements, Design, Implementation, Testing, Deployment, and Maintenance—must be completed before the next begins.',
    marks: 5,
    category: 'medium',
    year: '2024',
  },
  {
    id: 'se2024-medium-b',
    question: 'Define PERT. Explain why PERT charts are used.',
    answer: 'PERT (Program Evaluation and Review Technique) is a project management tool that graphically represents a project\'s timeline using nodes and arrows for tasks and dependencies. PERT charts help schedule, organize, and coordinate tasks, identify the critical path, and anticipate bottlenecks for better resource management inside software projects.',
    marks: 5,
    category: 'medium',
    year: '2024',
  },
  {
    id: 'se2024-medium-c',
    question: 'Define coupling. Discuss different types of coupling briefly.',
    answer: 'Coupling is the degree of interdependence between software modules. Lower coupling is ideal for easier maintenance.\n\nTypes:\n\n• Content coupling: One module modifies the content of another.\n• Common coupling: Modules share global data.\n• Control coupling: One module controls another\'s logic via control flags.\n• Data coupling: Only necessary data is shared between modules.\n• Stamp coupling: Modules share composite data structures.\n• External coupling: Modules interact through external devices.',
    marks: 5,
    category: 'medium',
    year: '2024',
  },
  {
    id: 'se2024-medium-d',
    question: 'Explain integration testing.',
    answer: 'Integration testing focuses on testing the interaction and data flow between interconnected modules to ensure they work together as intended. It validates proper communication, detects interface errors, and enhances system reliability by finding issues early in integration.',
    marks: 5,
    category: 'medium',
    year: '2024',
  },
  {
    id: 'se2024-medium-e',
    question: 'Compare various characteristics of a GUI and text based user interface.',
    answer: 'A GUI uses visual elements like icons and menus for interaction, while a text-based interface relies on typing commands. GUIs are more intuitive for beginners and are easier to learn, but are resource-intensive and can be slower for experienced users. Text-based interfaces, also called command-line interfaces (CLI), require more technical knowledge but are faster for experts, consume fewer resources, and are better for automation.',
    marks: 5,
    category: 'medium',
    year: '2024',
  },
  {
    id: 'se2024-medium-f',
    question: 'Explain different matrices used for project size estimation.',
    answer: 'Common metrics include:\n\n• Expert Judgment: Based on expert experience.\n• Analogous Estimation: Comparing with similar past projects.\n• Bottom-up Estimation: Summing estimates of sub-tasks.\n• Three-point Estimation: Uses optimistic, pessimistic, and most likely values.\n• Function Points and Use Case Points: Based on functional requirements.\n• Parametric Estimation: Uses mathematical models.\n• COCOMO: Algorithmic cost estimation model.',
    marks: 5,
    category: 'medium',
    year: '2024',
  },
  {
    id: 'se2024-medium-g',
    question: 'Define debugging. Explain standard approaches and guidelines used in debugging process.',
    answer: 'Debugging is the systematic process of identifying, isolating, and resolving errors in software.\n\nStandard steps:\n\n• Identification: Recognize the bug or issue.\n• Isolation/Replication: Consistently reproduce the problem.\n• Resolution/Diagnosis: Find and fix the root cause.\n• Verification/Testing: Confirm the fix via new and original test cases to prevent recurrence.',
    marks: 5,
    category: 'medium',
    year: '2024',
  },
  
  // Long Answer Questions (10 marks)
  {
    id: 'se2024-long-3',
    question: 'Discuss the spiral model of software development. Explain why spiral model is known as meta model.',
    answer: 'The spiral model is a risk-driven software development process that combines iterative development (like prototyping) with structured, phase-based approaches (like waterfall). Each cycle (or "loop" of the spiral) involves four main phases: planning, risk analysis, engineering (development), and evaluation. As the project progresses, the spiral repeats these cycles, enabling developers to gradually build and refine the product.\n\nThe spiral model is called a "meta model" because it incorporates elements and phases from other software development models (waterfall, prototyping, incremental, etc.), adapting to the needs and risks of a specific project.',
    marks: 10,
    category: 'long',
    year: '2024',
  },
  {
    id: 'se2024-long-4',
    question: 'Define SRS. Explain contents of SRS and characteristics of a good SRS document.',
    answer: 'SRS (Software Requirements Specification) is a comprehensive document that describes the intended features, functions, behavior, and environment of a software system.\n\nContents of SRS:\n\n• Functional requirements: What the software should do (features, data processing, interactions).\n• Non-functional requirements: Constraints like performance, reliability, security.\n• Interface requirements: Interactions with hardware, other systems, user interfaces.\n• System requirements: Operating environment, resources.\n• Acceptance criteria: How satisfaction of requirements will be validated.\n\nCharacteristics of a good SRS:\n\n• Correctness: Accurately describes requirements.\n• Completeness: Covers all necessary requirements, including edge cases.\n• Consistency: No conflicting or contradictory requirements.\n• Unambiguousness: Only one interpretation for each requirement.\n• Traceability: Clear origin and tracking of requirements.\n• Verifiability: Requirements can be tested.\n• Modifiability: Easy to update and change as development progresses.\n• Prioritized/Testable: Allows ranking and testing of each requirement.',
    marks: 10,
    category: 'long',
    year: '2024',
  },
  {
    id: 'se2024-long-5',
    question: 'Define DFD. Explain different symbols used in DFD. Discuss the steps for developing DFD model of a system with example.',
    answer: 'A Data Flow Diagram (DFD) is a graphical representation that shows how data moves through a system, illustrating input, output, processes, and data stores.\n\nDFD Symbols:\n\n• Process: Shown as a circle or rounded rectangle; transforms inputs to outputs.\n• Data Flow: Arrowed lines that represent data movement between processes, data stores, or external entities.\n• Data Store: Open-ended rectangles indicate locations where data is held for later use.\n• External Entity (Terminator): Squares or rectangles on diagram\'s edge symbolize sources or destinations outside the system, like users or external applications.\n\nSteps for developing DFD:\n\n1. Define system boundaries and scope – Identify external entities and decide what is inside or outside the system.\n2. Identify core processes – List main functions or activities transforming inputs into outputs.\n3. Identify data stores – Determine where data is held and how it is managed.\n4. Identify data flows – Map input, output, and movement of data between all entities, processes, and stores.\n5. Build context diagram (Level 0 DFD) – Depict the whole system as a single process and show key external entities.\n6. Expand detailed levels – Separate the main process into sub-processes as Level 1 or Level 2 diagrams, showing more details at each level.\n7. Review and validate – Share with stakeholders, check for completeness, and update with feedback.',
    marks: 10,
    category: 'long',
    year: '2024',
  },
  {
    id: 'se2024-long-6',
    question: 'Explain black-box testing and white box testing approach.',
    answer: 'Black Box Testing:\nBlack Box Testing is the method that does not consider the internal structure, design, and product implementation to be tested. In other words, the tester does not know its internal functioning. The Black Box only evaluates the external behavior of the system. The inputs received by the system and the outputs or responses it produces are tested.\n\nWhite Box Testing:\nThe White Box Test method is the one that looks at the code and structure of the product to be tested and uses that knowledge to perform the tests. This method is used in the Unit Testing phase, although it can also occur in other stages such as Integration Tests. For the execution of this method, the tester or the person who will use this method must have extensive knowledge of the technology used to develop the program.\n\nKey Differences:\n\n• Black Box Test only considers the system\'s external behavior, while White Box Test considers its internal functioning.\n• Implementation knowledge is not required when applying Black Box Testing, unlike White Box Test.\n• It takes less time to perform Black Box Testing than White Box Testing.',
    marks: 10,
    category: 'long',
    year: '2024',
  },
  {
    id: 'se2024-long-7',
    question: 'Write short notes on\n\ni. COCOMO\nii. Software reliability',
    answer: 'i. COCOMO:\nThe Constructive Cost Model (COCOMO) is a software cost estimation model that predicts project effort, cost, and time based on the size of the software in lines of code. It is used to provide a structured and quantitative method for estimating the effort, time, and cost required for software development projects.\n\nTypes of Projects in COCOMO Model:\n\n1. Organic:\nA software project is said to be an organic type if the team size required is adequately small, the problem is well understood and has been solved in the past and also the team members have a nominal experience regarding the problem.\n\n2. Semi-detached:\nA software project is said to be a Semi-detached type if the vital characteristics such as team size, experience, and knowledge of the various programming environments lie in between organic and embedded.\n\n3. Embedded:\nA software project requiring the highest level of complexity, creativity, and experience requirement falls under this category. Such software requires a larger team size than the other two models and also the developers need to be sufficiently experienced and creative to develop such complex models.\n\nii. Software reliability:\nSoftware reliability is defined as the probability that a software system will operate without failure under specified conditions for a specified period of time. It is a critical measure of software quality affecting user satisfaction, trust, and safety, especially in mission-critical systems. Factors influencing reliability include the number of faults, the operational environment, development process quality, and the skills of the development team.',
    marks: 10,
    category: 'long',
    year: '2024',
  },
];

// Combined questions array
export const allSEQuestions: SEQuestion[] = [...seQuestions2022, ...seQuestions2023, ...seQuestions2024];

// Helper functions
export const getSEQuestionsByCategory = (
  category: 'short' | 'medium' | 'long' | 'all',
  year: '2022' | '2023' | '2024'
): SEQuestion[] => {
  let questions;
  if (year === '2022') {
    questions = seQuestions2022;
  } else if (year === '2023') {
    questions = seQuestions2023;
  } else {
    questions = seQuestions2024;
  }
  if (category === 'all') return questions;
  return questions.filter(q => q.category === category);
};

export const getSEQuestionById = (id: string): SEQuestion | undefined => {
  return allSEQuestions.find(q => q.id === id);
};

