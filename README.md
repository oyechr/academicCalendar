# Quidditch Calendar SPFx Web Part

## Overview

The Quidditch Calendar is a SharePoint Framework (SPFx) web part that displays the Hogwarts Academic Calendar using a calendar view.
This web part is built using React and integrates with the `react-big-calendar` library to provide a rich calendar experience.
Construct, insert custom events or connect to your own data. 
## Features

- fast serve :  custom webpack build, which produces the same output files as SharePoint Framework build pipeline, but does it a lot faster, because of a number of improvements
- Display events in calendar views 
- Click on events to see more details
- Responsive design
- Bootstrap css 

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or v18)
- [Gulp](https://gulpjs.com/)

## Key features of the SharePoint Framework

The following are some of the key features included as part of the SPFx:

    It runs in the context of the current user and connection in the browser. There are no iFrames for the customization (JavaScript is embedded directly to the page).
    The controls are rendered in the normal page DOM.
    The controls are responsive and accessible by nature.
    It enables the developer to access the lifecycle in addition to render, load, serialize and deserialize, configuration changes, and more.
    It's framework-agnostic. You can use any JavaScript framework that you like including, but not limited to, React, Handlebars, Knockout, Angular, and Vue.js.
    The developer toolchain is based on popular open-source client development tools such as NPM, TypeScript, Yeoman, webpack, and gulp.
    Performance is reliable.
    End users can use SPFx client-side solutions that are approved by the tenant administrators (or their delegates) on all sites, including self-service team, group, or personal sites.
    SPFx web parts can be added to both classic and modern pages.
    SPFx solutions can be used to extend Microsoft Teams.
    SPFx can be used to extend Microsoft Viva Connections.
    SPFx can be use to extend Outlook and Office 365 app (Office)

The runtime model improves on the Script Editor web part. It includes a robust client API, an HttpClient object that handles authentication to SharePoint and Microsoft 365, contextual information, easy property definition and configuration, and more.

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/your_username/your_new_repo.git
cd your_new_repo

npm install
gulp build
gulp bundle --ship
gulp package-solution --ship
```
Deploy the solution
Upload the generated .sppkg file from the solution folder to your SharePoint App Catalog.

Add the web part to a SharePoint page
Go to a SharePoint page
Edit the page
Add the Quidditch Calendar web part
Usage
Once the web part is added to a SharePoint page, it will display the Hogwarts Academic Calendar. Users can click on events to see more details, including the start time, end time, and location.


Trusting the developer certificate is required. 
This is a one-time process and is only required when you run your first SharePoint Framework project on a new workstation. 
You don't need to do this for every SharePoint Framework project.

Development
To run the web part locally 

npm run serve 
append the query string at the end of your sharepoint site url 

Code Structure
QuidditchCalendarWebPart.ts: The main web part file.
QuidditchCalendar.tsx: The React component for the calendar.
QuidditchCalendar.module.scss: The styles for the calendar component.







