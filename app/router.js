import EmberRouter from '@ember/routing/router';
import config from 'usprint/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('versions', function () {
    this.route('version', { path: '/:version' }, function () {
      this.route('sprints', function () {
        this.route('sprint', { path: '/:sprint' });
      });
    });
  });
});
