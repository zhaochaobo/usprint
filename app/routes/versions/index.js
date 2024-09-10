import Route from '@ember/routing/route';
import VersionModel from '../../models/version';
import { service } from '@ember/service';

export default class VersionsIndexRoute extends Route {
  @service store;

  model() {
    return this.store.findAll('version');
  }

  ifSpecial(item) {
    console.log(item);
    return item.status === 'special';
  }
}
