'use strict';

(function(module) {
  const aboutController = {};
  aboutController.initProjects = () =>  {
      $('#home').hide();
      $('#aboutme').fadeIn();
  }
  module.aboutController = aboutController;
})(window);


'use strict';

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide(); // REVIEW: We have a slight refactor in selectors here, which has reduced the amount of code from the last lab.

    // TODOne(*2): Call a function to load all the repo data.
    // Pass a view function as a callback, so the view will render after the data is loaded.
    repos.requestRepos(repoView.index);

  };

  module.aboutController = aboutController;
})(window);
