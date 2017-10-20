# ui5con17-components-performance

Initial project to explain the boostrap and component performance optimization options for UI5 Components step-by-step. 
The slides explaining the individual steps and providing some background information can be found here on 
[slideshare](https://de.slideshare.net/PeterMuessig1/ui5con-2017-ui5-components-more-performance)

## Getting Started

* Subscribe for a hanatrial account for usage of SAP Web IDE: https://hanatrial.ondemand.com or use your existing account for SAP Web IDE
* Initial project can be found on GitHub and should be synced into SAP Web IDE workspace: https://github.com/petermuessig/ui5con17-components-performance 
* In addition to the initial project a destination for the Northwind service has to be created. Details for that are explained in one of the next slides

## How to run the application?

For local execution outside the SAP Web IDE you can also use the standalone express server. Please run ```npm i``` once and then you can start
the express server on port 3000 with the command ```npm start```. The application can be run with ```http://localhost:3000```. If you want to disable the component preload temporary please add the URL parameter ```sap-ui-xx-componentPreload=off```.
