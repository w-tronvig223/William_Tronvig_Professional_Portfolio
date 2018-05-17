'use strict';

var projects = [];

function Portfolio(rawDataObj) {
    this.cubeObjectId1 = rawDataObj.cubeObjectId1,
    this.title = rawDataObj.title,
    this.author = rawDataObj.author,
    this.websiteUrl = rawDataObj.websiteUrl,
    this.wentLiveOn = rawDataObj.wentLiveOn,
    this.projectDescription = rawDataObj.projectDescription
};
