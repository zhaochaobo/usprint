import ApplicationSerializer from './application';

export default class VersionSerializer extends ApplicationSerializer {
  serialize() {
    let json = super.serialize(...arguments);
    console.log(json);
    return json;
  }
}
