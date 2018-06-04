'use strict';

(function(module) {
  const cubeController = {};
  cubeController.initProjects = () =>  {
      $('#home').hide();
      $('#aboutme').hide();
      $('#cube-projects').fadeIn(500);
      repos.requestRepos(repoView.index);
  }
  module.cubeController = cubeController;
})(window);