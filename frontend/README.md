# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
Frontend

Getting Started
Prerequisites
Make sure you have Node.js and npm installed on your machine.

Installation
Clone the repository:


git clone 
Navigate to the project directory:
cd frontend
Install the dependencies:<br>


<code>npm install</code>
<h2>Development</h2><br>
To start the development server, run the following command:<br>


<code>npm run dev</code>
This will start the Vite development server and open the app in your default browser. The development server automatically reloads the app when you make changes to the source code.

Building for Production
To build the app for production, use the following command:


npm run build
This will generate a production-ready build in the dist directory. You can deploy the contents of this directory to a static file server or any hosting platform of your choice.

Additional Scripts
npm run lint: Runs the linter to check for code style and formatting issues.
npm run test: Runs the test suite.
