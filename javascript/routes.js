'use strict';

// TODOne: Configure routes for this app with page.js, by registering each URL your app can handle,
// linked to a a single controller function to handle it:
page('/', homeController.initProjects);
page('/aboutme', aboutController.initProjects);
// TODOne: What function do you call to activate page.js? Fire it off now, to execute
page();