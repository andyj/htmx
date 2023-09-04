# Express.js and HTMX Example Projects

This repository contains example projects demonstrating the use of [Express.js](https://expressjs.com/) and [HTMX](https://htmx.org/). Each folder in this repository represents a unique, standalone app. All apps utilise Express.js and nodemon for server management.

## Requirements

- Node.js
- npm

## Getting Started

First, clone the repository to your local machine:

```bash
git clone https://github.com/andyj/htmx
```

After cloning, navigate to the specific project folder from your CLI and install the dependencies:

```
cd htmx/[ProjectFolder]
npm install
```

To start the app, run the following command:

```
npm start
```

This will start the Express server, and you should be able to access it at `http://localhost:3010`.

# Projects
## 01 hx-get and hx-target examples
This project demonstrates various ways to use `hx-get` and `hx-target` attributes provided by HTMX. The example shows how to use different target selectors to manipulate DOM elements upon AJAX requests.

How to Run
```
cd htmx/01\ hx-get\ and\ hx-target\ examples
npm install
npm start
```

## 02 stop HTMX partial being called directly
This project includes a middleware function to ensure that the /getpage route can only be called from an HTMX request. It sets a local variable `isHTMX` based on the presence of the `hx-request` header.

How to Run
```
cd YourRepository/02\ stop\ HTMX\ partial\ being\ called\ directly
npm install
npm start
```

# License
This project is open-source and available under the MIT License.

# Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.