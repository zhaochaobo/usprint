import Model, { attr } from '@ember-data/model';

export default class VersionModel extends Model {
  @attr('string') code;
  @attr('string') platform;
  @attr('string') major;
  @attr('string') minor;
  @attr('number') sprint;
  @attr('number') patch;
  @attr('number') special;
  @attr('string') status;

  get isSpecial() {
    return this.status === 'special';
  }
  get isDevelopment() {
    return this.status === 'development';
  }
  get isArchived() {
    return this.status === 'archived';
  }
  get version() {
    return this.code;
  }
  checkStatus(s) {
    console.log(s);
    return this.status === s;
  }
}
