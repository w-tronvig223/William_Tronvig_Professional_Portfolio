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

Portfolio.prototype.toHtml = function() {

    var template = $('#projects').html();
    var compile = Handlebars.compile(template);

    // var $newProject = $('.template').clone(); holding onto until end of portfolio assignments, in case I want to revert back to using this. 
    // $newProject.removeClass('template');    

    // if (!this.wentLiveOn) $newProject.addClass('draft');
    // $newProject.data('category', this.category);
    $('main').append(compile(this));
    // $newProject.find('h1').text(this.title);
    // return $newProject;
};

projectData.forEach(function(projectObject) {
    projects.push(new Portfolio(projectObject));
});

projects.forEach(function(appendProjects){
    $('#projects').append(appendProjects.toHtml());
});