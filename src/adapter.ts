const log = console.log
console.log = () => {}
import { default as Gun, Document, Ack } from 'gun'
console.log = log
import 'gun/lib/load'
import 'gun/lib/not'
import nanoid from 'nanoid' // /^[A-Za-z0-9_~]{21}$/
import { gunzip } from 'mz/zlib'

export type Data = { [key: string]: Data } | string | number | boolean | null

export interface Adapter {
  get(key: string): Promise<Data | undefined>
  set(key: string, document: Data): Promise<void>
}

export class DefaultAdapter implements Adapter {
  private static gun: Gun
  private name: string
  private node: Gun
  constructor(name: string) {
    this.name = name
    this.node = DefaultAdapter.gun.get(this.name)
  }
  async get(key: string) {
    return await new Promise<Document | undefined>(resolve => {
      this.node.get(key).not(() => { resolve(undefined) }).load(resolve)
    })
  }
  async set(key: string, document: Document) {
    const resolve = await new Promise<Ack>(resolve => {
      this.node.get(key).put(document, resolve)
    })
    if (resolve.err) {
      throw Error(resolve.err.toString())
    }
  }
  static async connect() {
    DefaultAdapter.gun = new Gun({
      radisk: false,
      localStorage: false,
      uuid: nanoid
    })
  }
}
