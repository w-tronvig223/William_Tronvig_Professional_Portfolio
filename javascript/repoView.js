'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#projects'); 

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());
  repoView.index = function() {
    ui();

    $('#projects').append(
      repos.with('name').map(render) 
    );
  };
  module.repoView = repoView;
})(window);
