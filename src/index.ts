import * as fs from 'fs';
const Ajv = require('ajv');
import * as PouchDB from 'pouchdb';
import { graphql, buildSchema } from 'graphql';

import { Language } from './schema/schema';
import schema_gql from './schema/schema.gql';
import schema_json from './schema/language.json';

class ValidationError extends Error {
  constructor(errors: any) {
    super(JSON.stringify(errors, null, 2));
    this.name = 'ValidationError';
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

export default (path:string = './langue.json') => {
  const ajv = Ajv({ allErrors: true });
  ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));
  const validate = ajv.compile(schema_json);
  const data: Language = JSON.parse(fs.readFileSync(path, 'utf8'));
  if (!validate(data)) throw new ValidationError(validate.errors);

  const schema = buildSchema(schema_gql);
  const root = {
    language: (args: { name:string }) => {
      return [data];
    },
  };
  graphql(schema, 'query { language(name: "test") { name } }', root)
    .then(response => {
      console.log(JSON.stringify(response, null, 2));
    });

  return {

  };
}