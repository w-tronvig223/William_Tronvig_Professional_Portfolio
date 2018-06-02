'use strict';

(function(module) {
  const homeController = {};

//   portfolioView.initProjects();
  homeController.initProjects = () =>  {
      $('#aboutme').hide();
      $('#home').fadeIn();
  }
  module.homeController = homeController;
})(window);