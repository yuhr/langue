import fs from 'fs'
import { buildSchema, graphql } from 'graphql'
import { Static, match } from 'runtypes'

import { DefaultAdapter, Adapter } from './adapter'
import { CallablePromise } from './promise'

const schema = {
  gql: fs.readFileSync(`${__dirname}/../assets/schema/schema.gql`, 'utf8'),
  json: fs.readFileSync(`${__dirname}/../assets/schema/schema.json`, 'utf8')
}

export type LinkOptions = {
  key: string
}

class Langue {
  private static graph: Adapter
  private static readonly schema = buildSchema(schema.gql)
  private static readonly root = {
    root: () => {
      return 'A'
    }
  }
  private constructor() {}
  static async query(query: string) {
    const res = await graphql(this.schema, query, this.root)
    if (res.errors) throw res.errors
    if (res.data) return res.data
    else throw Error('No result data.')
  }
  static get link() {
    return new CallablePromise<void, LinkOptions | undefined>((args, resolve, reject) => {
      console.log('link options:', args[0])
      DefaultAdapter.connect().then(() => {
        Langue.graph = new DefaultAdapter('langue')
        resolve()
      }).catch(reject)
    })
  }
}

export default Langue
