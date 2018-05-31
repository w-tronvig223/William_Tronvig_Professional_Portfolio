'use strict';

// var projects = [];

function Portfolio(rawDataObj) {
    this.cubeObjectId1 = rawDataObj.cubeObjectId1;
    this.title = rawDataObj.title;
    this.author = rawDataObj.author;
    this.websiteUrl = rawDataObj.websiteUrl;
    this.wentLiveOn = rawDataObj.wentLiveOn;
    this.projectDescription = rawDataObj.projectDescription;
}

Portfolio.all [];

Portfolio.prototype.toHtml = function() {
    let template = Handlebars.compile($('#projects').text());
    
    // var template = $('#projects').html(); took out 19 and 20 first
    // var compile = Handlebars.compile(template);

    // var $newProject = $('.template').clone();
    // $newProject.removeClass('template');    

    // if (!this.wentLiveOn) $newProject.addClass('draft');
    // $newProject.data('category', this.category);
    // $('main').append(compile(this)); took out 27 next
    // $newProject.find('h1').text(this.title);
    // return $newProject;
};

projectData.forEach(function(projectObject) {
    projects.push(new Portfolio(projectObject));
});

projects.forEach(function(appendProjects){
    $('#projects').append(appendProjects.toHtml());
});