# YEOMAN Generator for SAP Fiori Application

## Description
Simplified (opinionated) UI5 Application generator based on the work of Marius Obert (easy-ui5) and SAP (sapui5-templates).

Scaffolds a UI5 app with the following structure for freestyle development

webapp
    controller
        App.controller.js
        Base.controller.js
        Initial.controller.js
    i18n
        i18n.properties
    model
        models.js
    view
        App.view.xml
        Initial.view.xml
    Components.js
    index.html
    manifest.json
package.json
ui5.yaml

# Installation

1. Clone the repo into a local directory.
2. Install dependencies by calling 
    ```
    npm install
    ```
2. Finally link to NPM using
    ```
    npm link
    ```

## Starting a new UI5 application

1. Create a directory for your UI5 Application
2. Execute the generator using Yeoman
    ```
    yo ui5-base-app
    ```
    or select from Yeoman by simply calling yo
3. Once the generator is complete, run the generated application with
    ```
    npm run start
    ```
