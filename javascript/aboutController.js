'use strict';

(function(module) {
  const aboutController = {};
  aboutController.initProjects = () =>  {
      $('#home').hide();
      $('#aboutme').fadeIn();
      repos.requestRepos(repoView.index);
  }
  module.aboutController = aboutController;
})(window);

