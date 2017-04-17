# Pizza Finder

Using the [PlatypusTS](https://github.com/Platypi/platypusts) application framework and the [Pizza API](https://github.com/newshipt/web-coding-challenge/blob/master/pizza_api.md), Pizza Finder displays the best pizzerias around the world and allows you to save your favorites!

### [Live Pizza Finder](http://pizza-finder.s3-website-us-east-1.amazonaws.com/)

## Technology
The Pizza Finder was built with [PlatypusTS](https://github.com/Platypi/platypusts), as it is the framework I have become most familiar with over the past year and was the most efficient use of my time implementing the project functionality.

## Functionality
- Displays a list of pizzerias around the world.
- Selecting a pizzeria takes you an individual pizzeria displaying: a map from the lat/long coordinates, name, address, an option to favorite, and a link to their website for more information.
- Pizzeria favorites will persist until removed by the user.
- Once favorited, the pizzeria list will indicate those that have been favorited.

### Links
- [LinkedIn](https://www.linkedin.com/in/ben-niven-19407721)
- [Bitbucket](https://bitbucket.org/benivster/)

---

## Installation

Use `npm i` to install the dependencies for this package.

## Typical Scenarios

### Development

When developing your app you want to do a couple of things:

0. Run a server to serve your app on `localhost`
0. Watch your TypeScript files and compile/bundle your TS/JS when a file changes.
0. Watch your Less files and compile your Less when a file changes.

Your `package.json` has a `start` script that will do these things for you. So when you are developing you can simply run:

```
$ npm start
```

The default server configuration is to serve assets on `http://localhost:3000` from the `app` directory.

> **NOTE**: `npm start` does not minify your javascript files in order to speed up your development builds


## Build Configuration

This app uses `npm run-script` or `npm run` scripts to manage all the building/deployment. You can see all
the scripts in the `package.json`. You can also print the scripts to the command line console by typing `npm run`.

### Useful Scripts

The following are descriptions for a few of the useful npm scripts. All of these scripts can be executed using the `npm run <script>` command.

- **build**
  - Builds/bundles/minifies your `less` and `ts`
  - copies the necessary files to `/cordova/www`
  - runs `cordova build`

- **clean**
  - Cleans your `app` directory, removing css/js/map files and your `dist` directory

- **lint**
  - Runs `tslint` on all of your `ts` files
  - You can specify your custom lint rules in your `tsconfig.json`
  - Default rules can be found at the [tsconfig-lint](https://github.com/wjohnsto/tsconfig-lint#user-content-default-rules) project

- **start**
  - Builds/bundles your src files and watches them for changes
  - Rebuilds/bundles when your src files change
  - Starts server that serves assets from the `app` directory on http://localhost:3000

## Project Structure

This project is setup to be as flat as possible while still providing a separation of concerns and allowing for extensibility.
The `app` directory contains all the public files used in the app. If you need to add a server/backend you can separate it out
as a `server` directory on the same level as `app`. Inside of `app` you have:

- **assets**
  - contains images/fonts/media files used in the app

- **lib**
  - contains any JS/CSS libraries not installed using node

- **src**
  - contains all the TS, HTML, and componentized LESS files

- **styles**
  - contains any global LESS styles used in the app
  - a `main.less` file exists in here as the entry point for all the styles in your app.
  - the `main.less` file is automatically managed by the CLI for components in the `src` directory

### The `src` Directory

Inside the `src` directory you will find all the TS, HTML, and componentized LESS files. The following subdirectories exist
inside `src` to help separate components in the app:

- **app**
  - contains the global plat.App object, used to configure your application and respond to global lifecycle events

- **attributecontrols**
  - contains any common AttributeControls

- **injectables**
  - contains the injectables used in the app (such as converters, helper classes, formatting classes)

- **models**
  - contains classes that help you convert server models into the frontend *view-models*
  - contains a `models.d.ts` file, in which you can declare the interfaces for each model

- **repositories**
  - contains all the repository classes
  - repositories are the hubs for communicating between ViewControls, Services, and Models
  - repositories can locally cache information obtained from a service
  - repositories are used to instantiate models to send to the server, and *view-models* to send to the ViewControl

- **services**
  - contains all the service classes
  - service classes are used to communicate with external APIs

- **templatecontrols**
  - contains any common TemplateControls

- **viewcontrols**
  - contains all the ViewControls for the app

There is also a `main.ts` file, which is used to pull all of your unreferenced TS sources together. You can reference any libraries
here. The CLI will automatically manage this file for you for the components in the directories listed above.