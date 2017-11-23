import fs from 'fs';

import Gun from 'gun';
import 'gun/lib/path';
import chain from 'chain-gun';
chain(Gun);

import nanoid from 'nanoid'; // /^[A-Za-z0-9_~]{21}$/

import { graphql, buildSchema } from 'graphql';
import gql from './schema/schema.gql';

if (fs.existsSync('./test/data.json')) fs.unlinkSync('./test/data.json');

export default module.exports = (options?:object) => {
  const graph = Gun({ file: './test/data.json', uuid: nanoid });
  const id = (node:any) => {
    return node._.soul
        || (node._.put ? node._.put['#']
                      || (node._.put['_'] ? node._.put['_']['#']
                                          : node._.get)
                       : node._.get);
  };

  /*
  const schema = buildSchema(gql);
  const root = {
    node: () => {
      return 'Hello world!';
    }
  };
  graphql(schema, '{ node }', root).then((response) => {
    console.log(response);
  });*/

  return {
    query: (query:string) => {
      console.log(query);
    }
  };
};