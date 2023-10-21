# Eminence Wallet Developer Guide

Welcome to the Eminence Wallet Developers Guide! This guide provides essential information for developers who want to contribute to the project or work on the codebase. It covers the project's architecture, setup instructions, coding conventions, and more.

<br>

<h2 id='table-of-contents'>📑 Table of Contents</h2>
<ul>
  <li><a href="#project-overview">Project Overview</a></li>
  <li><a href="#architecture">Architecture</a></li>
  <li><a href="#prerequisites">Prerequisites</a></li>
  <li><a href="#running-project-in-local">Running Project in Local</a></li>
  <li><a href="#development-workflow">Development Workflow</a></li>
  <li><a href="#coding-style-and-guidelines">Coding Convention, Style and Guidelines</a></li>
  <li><a href="#deployment">Deployment</a></li>
  <li><a href="#contributing">Contribution</a></li>
</ul>

<br>

<h2 id='project-overview'>📦 Project Overview</h2>

Eminence Wallet is a cutting-edge, non-custodial crypto wallet designed to empower users with full control over their digital assets. Our platform provides a seamless and secure way to buy, sell, transfer, and swap various cryptocurrencies and coins, all while prioritizing user security and ease of use.. It leverages technologies like Next.js React, Node.js, MongoDB, and Tailwind CSS to provide a user-friendly and feature-rich experience for users.

<br>

<h2 id='architecture'>🔨 Architecture</h2>

Eminence Wallet follows a client-server architecture. The frontend is built using Next.js(App Router), React and Tailwind CSS, providing a responsive and interactive user interface. The backend is developed with Node.js and Express.js, which handles API requests and interacts with the MongoDB database.

For more detailed Architecture to the project, refer to the [Architecture Guide](ARCHITECTURE.md) document.

<br>

<h2 id='prerequisites'>💁‍♂️ Prerequisites</h2>

Before setting up the project, ensure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org) (version >= 14.x)
- Npm or Yarn package manager
- [MongoDB](https://www.mongodb.com/) (running locally or a remote instance)

<br>

<h2 id='running-project-in-local'>🏃‍♀️ Running Project in Local</h2>

To set up the Eminence Wallet project locally, follow these steps:

- **Fork** both [Eminence](https://github.com/RuntimeTerror-Labs/eminence) and [Eminence Backend](https://github.com/RuntimeTerror-Labs/eminence-backend) repos

  - For more information **How to fork a repo** refer: [Fork Guide](https://docs.github.com/en/get-started/quickstart/fork-a-repo)

- **Clone** the forked repo

  - For more information **How to clone a repo** refer: [Clone Guide](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

    - Eminence Frontend

    ```
    $ git clone https://github.com/RuntimeTerror-Labs/eminence
    ```

    - Eminence Backend

    ```
    $ git clone https://github.com/RuntimeTerror-Labs/eminence-backend
    ```

- Navigate into the project's directory & Install the dependencies in both Repos.

  ```
  $ npm install
  ```

- Setup **Environment Variable**:

  - Create a .env file in both folder front-end and back-end of the project and set the necessary environment variables. Refer to the [Environment Variable](ENVIRONMENT.md) for the required environment variables.

- Start the development server & Run the following command to run the project in your local computer.

  - Front-End

    ```
    $ npm run dev
    ```

  - Back-End

    ```
    $ npm start
    ```

  This command will start the development server, and you should see output indicating that the server is running.

- Open your web browser and navigate to [localhost:3000](http://localhost:3000) to run Front-End and Back-End on [localhost:8000](http://localhost:8080).

You have now successfully set up and run the Eminence Wallet project on your local machine.

<br>

**Note: The above instructions assume that the project uses `npm` as the package manager. If you're using `yarn`, replace `npm` with `yarn` in the commands.**

<br>

<h2 id='development-workflow'>⚒ Development Workflow</h2>

- Create a new branch and check out a new branch from the main branch, if you want to and name it to what you intend to do:

  ```
  $ git branch "BRANCH_NAME"
  $ git checkout "BRANCH_NAME"
  ```

- Make your changes and write clean, well-documented code.

- **Commit** your changes

  - Please provide a git message that explains what you've done
  - Commit to the forked repository
    ```
    $ git commit -m "Add new feature: My Feature"
    ```

- **Push** to the branch

  ```
  $ git push origin "BRANCH_NAME"
  ```

- Make a pull request

  - **Please do apply labels to pull request.**

- Collaborate with maintainers and reviewers to address feedback and make necessary improvements.

Once done, the changes will be merged to <code>main</code> branch.

<br>

<h2 id='coding-style-and-guidelines'>👨‍💻 Coding Conventions, Style and Guidelines</h2>

To maintain consistency and readability across the codebase, we follow the following coding style and guidelines for Eminence Wallet:

- Use meaningful and descriptive variable, function, and class names that are descriptive and self-explanatory.
- Write code that is easy to understand and maintain.
- Modularize the code and follow separation of concerns.
- Keep lines of code reasonably short (preferably less than 80 characters) to enhance readability.
- Comment your code when necessary to provide clarity and context.
- Maintain good code structure and organization.
- Use Prettier for better and easy Formatting

For more detailed coding conventions specific to the project, refer to the [Coding Conventions](CODING_CONVENTION.md) document.

<br>

<h2 id='deployment'>🔒 Deployment</h2>

Eminence Wallet can be deployed to various environments. Ensure you have the necessary configuration files and deployment scripts in place. The deployment process may vary based on your chosen hosting platform or infrastructure.

<br>

<h2 id='contributing'>😇 Contributing</h2>

Contributions to Eminence Wallet are welcome! If you would like to contribute to the project, please read the [CONTRIBUTING GUIDE](CONTRIBUTING.md) file for guidelines on how to contribute, submit bug reports, and request new features.

<br>

---

These guidelines are meant to ensure consistent and maintainable code throughout the project. When contributing to Eminence Wallet, please follow these coding style and guidelines to help maintain a clean and cohesive codebase.

Thank you for choosing to contribute to Eminence Wallet! We appreciate your time and effort in improving the project. If you have any questions or need assistance, feel free to reach out to us at [Gautam](mailto:ashragautam25@gmail.com) or [Anoy](mailto:anoyroyc3545@gmail.com).

**Happy coding! Happy contributing! 💖**
