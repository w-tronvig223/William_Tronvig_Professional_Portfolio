'use strict';

(function(module) {
  const homeController = {};
  homeController.initProjects = () =>  {
      $('#aboutme').hide();
      $('#cube-projects').hide();
      $('#home').fadeIn();
  }
  module.homeController = homeController;
})(window);