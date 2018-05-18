declare module 'gun' {
  export type Options = {
    peers?: string[] | { [peer: string]: {} },
    radisk?: boolean,
    localStorage?: boolean,
    uuid?: any,
    [moduleName: string]: any
  }
  export type Document = { [key: string]: Document } | string | number | boolean | null
  export type Ack = {
    err?: any,
    ok?: string
  }
  export default class Gun {
    constructor()
    constructor(peer: string)
    constructor(peers: string[])
    constructor(options?: Options)
    put(data: Document, callback?: (ack: {
      err?: any,
      ok?: string
    }) => void): Gun
    get(key: string, callback?: (ack: {
      err?: any,
      put?: Document,
      get: string
    }) => void): Gun
    opt(options: Options): void
    back(amount: number): Gun
    on(callback: (data: Document | undefined, key: string) => void, option?: boolean | {
      change: boolean
    }): Gun
    once(callback: (data: Document | undefined, key: string) => void, option?: {
      wait: number
    }): Gun
    val(callback: (data: Document | undefined, key: string) => void, option?: {
      wait: number
    }): Gun
    set(data: Gun | object, callback?: (ack: {
      err?: any,
      ok?: string
    }) => void): Gun
    map(callback: (value: Document | undefined, key: string) => (Document | undefined)): Gun
    path(key: string): Gun
    not(callback: (key: string) => void): Gun
    open(callback: (data: Document | undefined) => void, option?: { wait: number }): Gun
    load(callback: (data: Document | undefined) => void, option?: { wait: number }): Gun
    then(callback?: (resolved: Document | undefined) => void): Promise<Document | undefined>
    promise(callback?: (resolved: {
      put: Document,
      get: string,
      gun: Gun
    }) => void): Promise<{
      put: Document,
      get: string,
      gun: Gun
    }>
  }
}
