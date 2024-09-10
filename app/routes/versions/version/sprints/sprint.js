import Route from '@ember/routing/route';

export default class VersionsVersionSprintsSprintRoute extends Route {
  model() {
    return [
      { title: 'Ember Roadmap', disable: false },
      { title: 'Accessibility in Ember', disable: true },
      { title: 'EmberConf Recap', disable: true },
      { title: 'EmberConf Recap', disable: true },
      { title: 'EmberConf Recap', disable: true },
    ];
  }
}
