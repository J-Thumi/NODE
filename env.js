require("dotenv").config()

console.log(process.env.name)



// # # Environmental variables, also known as environment variables or simply env vars, are dynamic values that can affect the behavior of software or operating systems. They are used to pass information to programs and scripts, allowing them to adapt to different environments without modifying the code itself. Here are some key points about environmental variables:

// # Definition: Environmental variables are variables that are part of the operating system's environment in which a process runs. They are key-value pairs that contain information such as paths to important directories, default parameters, or settings specific to the user or system.

// # Usage:

// # Configuration: They are used extensively in configuration files and scripts to define parameters that may change between different environments (e.g., development, testing, production).
// # Security: They can store sensitive information such as API keys, database credentials, or system passwords securely without hardcoding them into scripts or programs.
// # Flexibility: They provide flexibility by allowing applications to run in different environments with minimal changes, as they can read different values from the environment variables.
// # Access:

// # In Unix/Linux systems, environmental variables are typically accessed using commands like export, env, or directly within scripts and configuration files.
// # In Windows, environmental variables can be managed through the Control Panel or via PowerShell commands ($env:VariableName).
// # Examples: Common examples of environmental variables include:

// # PATH: Specifies directories where executable programs are located.
// # HOME or USERPROFILE: Points to the user's home directory.
// # LANG or LC_ALL: Defines the language and localization settings.
// # DATABASE_URL: Contains the connection string to a database.
// # API_KEY: Stores an authentication key for accessing an API.
// # Benefits: Using environmental variables offers several benefits:

// # Enhances security by separating configuration details from code.
// # Simplifies deployment and maintenance of applications across different environments.
// # Facilitates collaboration among team members working in various development stages (e.g., local development, staging, production).








// name='Josphat'