
document.addEventListener("DOMContentLoaded", function() {
    const wordElement = document.getElementById('word');
    const meaningElement = document.getElementById('meaning');
    const examplesElement = document.getElementById('examples');

const words = [
    {
        word: "Serendipity",
        meaning: "The occurrence of events by chance in a happy or beneficial way.",
        examples: [
            "It was pure serendipity that they met each other in the same city.",
            "The discovery of the new medicine was a stroke of serendipity."
        ]
    },
    {
        word: "Ephemeral",
        meaning: "Lasting for a very short time.",
        examples: [
            "Fame is ephemeral in the world of showbiz.",
            "The beauty of the sunset was ephemeral, disappearing within minutes."
        ]
    },
    {
        word: "Ineffable",
        meaning: "Too great or extreme to be expressed or described in words.",
        examples: [
            "The ineffable beauty of the landscape left everyone speechless.",
            "The ineffable joy of becoming a parent is unmatched."
        ]
    },
    {
        word: "Scalability",
        meaning: "The capability of a system to handle growth or increased demand.",
        examples: [
            "The scalability of cloud infrastructure is one of its major advantages.",
            "We need to ensure the system can scale efficiently as our user base grows."
        ]
    },
    {
        word: "Latency",
        meaning: "The delay before a transfer of data begins following an instruction.",
        examples: [
            "Low latency is crucial for real-time communication in gaming.",
            "We need to reduce latency in the server response to improve user experience."
        ]
    },
    {
        word: "Concurrency",
        meaning: "The ability of a system to execute multiple tasks or operations simultaneously.",
        examples: [
            "Concurrency in programming can lead to performance improvements.",
            "Concurrency issues often arise when multiple threads access shared data."
        ]
    },
    {
        word: "Throughput",
        meaning: "The amount of data processed by a system in a given time.",
        examples: [
            "The network throughput increased after the system upgrade.",
            "We optimized the database to improve the throughput for large queries."
        ]
    },
    {
        word: "Asynchronous",
        meaning: "Operations that occur independently without blocking other operations.",
        examples: [
            "Asynchronous programming helps improve performance in web applications.",
            "The API calls are handled asynchronously to ensure the UI remains responsive."
        ]
    },
    {
        word: "Redundancy",
        meaning: "The inclusion of extra components that can be used if the primary one fails.",
        examples: [
            "Data redundancy is crucial to ensure system availability during failures.",
            "The server architecture includes redundancy to prevent downtime."
        ]
    },
    {
        word: "Algorithm",
        meaning: "A step-by-step procedure for solving a problem or completing a task.",
        examples: [
            "The sorting algorithm we implemented is highly efficient.",
            "Understanding algorithms is fundamental to becoming a skilled programmer."
        ]
    },
    {
        word: "Bandwidth",
        meaning: "The maximum rate of data transfer across a given path.",
        examples: [
            "The video streaming quality depends on the bandwidth available.",
            "We need to ensure there is sufficient bandwidth for multiple users."
        ]
    },
    {
        word: "Virtualization",
        meaning: "The process of creating virtual versions of physical devices or systems.",
        examples: [
            "Server virtualization allows us to run multiple operating systems on a single physical machine.",
            "Virtualization helps reduce hardware costs by consolidating servers."
        ]
    },
    {
        word: "Load Balancer",
        meaning: "A system that distributes network or application traffic across multiple servers.",
        examples: [
            "The load balancer ensures that no single server becomes overwhelmed by traffic.",
            "We need to configure the load balancer for better failover support."
        ]
    },
    {
        word: "Containerization",
        meaning: "A method of packaging an application and its dependencies into a container that can run on any computing environment.",
        examples: [
            "Docker has popularized containerization in modern software development.",
            "Containerization helps developers create applications that can run consistently across different environments."
        ]
    },
    {
        word: "Repository",
        meaning: "A central location where data or code is stored and managed.",
        examples: [
            "We pushed the latest code to the repository.",
            "Repositories help in maintaining version control in software development."
        ]
    },
    {
        word: "Encryption",
        meaning: "The process of converting data into a code to prevent unauthorized access.",
        examples: [
            "Data encryption ensures that sensitive information is protected during transmission.",
            "The encryption algorithm secures user credentials."
        ]
    },
    {
        word: "Firewall",
        meaning: "A security system that monitors and controls incoming and outgoing network traffic.",
        examples: [
            "The firewall blocked unauthorized access attempts to the network.",
            "Configuring the firewall correctly is crucial for network security."
        ]
    },
    {
        word: "Cloud Computing",
        meaning: "The delivery of computing services like storage, databases, and software over the internet.",
        examples: [
            "Cloud computing allows businesses to scale infrastructure quickly.",
            "We migrated our application to the cloud for better availability."
        ]
    },
    {
        word: "Latency",
        meaning: "The delay before a transfer of data begins following an instruction.",
        examples: [
            "Low latency is essential for real-time applications like gaming.",
            "We optimized our servers to reduce latency."
        ]
    },
    {
        word: "Database",
        meaning: "An organized collection of structured information, or data, typically stored electronically.",
        examples: [
            "We use a SQL database to store user information.",
            "The database was designed to handle millions of transactions."
        ]
    },
    {
        word: "DevOps",
        meaning: "A set of practices that combines software development and IT operations to shorten the development lifecycle.",
        examples: [
            "DevOps practices have significantly improved our deployment process.",
            "Adopting a DevOps culture helps in continuous integration and delivery."
        ]
    },
    {
        word: "Microservices",
        meaning: "An architectural style that structures an application as a collection of loosely coupled services.",
        examples: [
            "Microservices allow different teams to work on different parts of the system independently.",
            "The switch to microservices improved our system's scalability."
        ]
    },
    {
        word: "Latency",
        meaning: "The delay before a transfer of data begins following an instruction.",
        examples: [
            "We optimized our API to minimize latency.",
            "Low latency is crucial for live video streaming applications."
        ]
    },
    {
        word: "Automation",
        meaning: "The use of technology to perform tasks without human intervention.",
        examples: [
            "We automated the testing process to speed up releases.",
            "Automation tools like Jenkins streamline the deployment pipeline."
        ]
    },
    {
        word: "Load Testing",
        meaning: "Testing that examines a system’s behavior under both normal and peak load conditions.",
        examples: [
            "We performed load testing to ensure the application can handle heavy traffic.",
            "Load testing identified several bottlenecks in our application."
        ]
    },
    {
        word: "Patch",
        meaning: "A software update to fix bugs, improve functionality, or address security vulnerabilities.",
        examples: [
            "We applied a security patch to the server to fix the vulnerability.",
            "Make sure all patches are up to date before releasing the product."
        ]
    },
    {
        word: "Agile",
        meaning: "A methodology of software development that emphasizes iterative progress, collaboration, and adaptability.",
        examples: [
            "We adopted the Agile methodology to improve our development cycles.",
            "Agile encourages rapid feedback and continuous improvement."
        ]
    },
    {
        word: "Refactoring",
        meaning: "The process of restructuring existing computer code without changing its external behavior.",
        examples: [
            "We need to refactor the legacy code to improve its readability and performance.",
            "Refactoring helps keep the codebase maintainable and scalable."
        ]
    },
    {
        word: "API",
        meaning: "Application Programming Interface; a set of protocols for building and integrating application software.",
        examples: [
            "The frontend communicates with the backend using a REST API.",
            "We developed a public API for third-party integrations."
        ]
    },
    {
        word: "Scalability",
        meaning: "The capability of a system to handle a growing amount of work, or its potential to accommodate growth.",
        examples: [
            "We chose cloud computing for its scalability.",
            "The application’s scalability allows it to handle more users as needed."
        ]
    }
];


    let currentIndex = 0;

    function updateWord() {
        const currentWord = words[currentIndex];
        wordElement.innerText = currentWord.word;
        meaningElement.innerText = currentWord.meaning;
        examplesElement.innerHTML = '';
        currentWord.examples.forEach(example => {
            const li = document.createElement('li');
            li.innerText = example;
            examplesElement.appendChild(li);
        });
    }

    document.getElementById('nextWordButton').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % words.length;
        updateWord();
    });

    updateWord(); // Load the first word when the extension is opened
});
