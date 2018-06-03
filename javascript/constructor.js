'use strict';

const portfolioView = {};

function Portfolio(rawDataObj) {
    this.cubeObjectId1 = rawDataObj.cubeObjectId1;
    this.title = rawDataObj.title;
    this.author = rawDataObj.author;
    this.websiteUrl = rawDataObj.websiteUrl;
    this.wentLiveOn = rawDataObj.wentLiveOn;
    this.projectDescription = rawDataObj.projectDescription;
}

Portfolio.all = [];

Portfolio.prototype.toHtml = function() {
    const template = $('#projects-template').html();
    const compile = Handlebars.compile(template);
    return compile(this);
};

Portfolio.initProjects = function() {
    Portfolio.all.forEach(function(cubesProjects) {
      $('#projects').append(cubesProjects.toHtml())
    });
};

Portfolio.loadAll = function(portfolioData) {
    portfolioData.forEach(function(giveDataforPortfolio) {
        Portfolio.all.push(new Portfolio(giveDataforPortfolio));
    });
};

portfolioView.fetchAll = function() {
    if (localStorage.portfolioData) {
      Portfolio.loadAll(JSON.parse(localStorage.portfolioData)); 
        Portfolio.initProjects();
    
    }  else {
  
      $.ajax({
        type: 'GET',
        url: '../json/rawdata.json',
        success: function(portfolioData) {
            localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
            Portfolio.loadAll(portfolioData);
            Portfolio.initProjects();
            }
        });
    }
};