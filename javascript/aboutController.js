'use strict';

(function(module) {
  const aboutController = {};
  aboutController.initProjects = () =>  {
      $('#home').hide();
      $('#aboutme').fadeIn();
  }
  module.aboutController = aboutController;
})(window);
