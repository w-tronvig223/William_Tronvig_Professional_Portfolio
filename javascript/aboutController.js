'use strict';

(function(module) {
  const aboutController = {};
  aboutController.initProjects = () =>  {
      $('#home').hide();
      $('#cube-projects').hide();
      $('#aboutme').fadeIn();
  }
  module.aboutController = aboutController;
})(window);

