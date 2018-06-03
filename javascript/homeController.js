'use strict';

(function(module) {
  const homeController = {};
  homeController.initProjects = () =>  {
      $('#aboutme').hide();
      $('#home').fadeIn();
  }
  module.homeController = homeController;
})(window);