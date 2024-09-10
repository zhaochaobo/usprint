import JSONSerializer from '@ember-data/serializer/json';

export default class ApplicationSerializer extends JSONSerializer {
  serialize(snapshot, options) {
    console.log(arguments);
    let json = super.serialize(...arguments);
    console.log(json);
    json.id = Number(json.id);
    return json;
  }
}
