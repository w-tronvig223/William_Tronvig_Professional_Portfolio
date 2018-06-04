'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/w-tronvig223/repos',
      type: 'GET',
      headers: {'Authorization': `token ${token}`}
    })
      .then(data => repos.all = data, err => console.error(err))
      .then(callback);
  };
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
