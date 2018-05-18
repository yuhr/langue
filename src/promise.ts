export interface CallablePromise<T, U> {
  (...args: U[]): Promise<T>
}

export class ExtensibleFunction {
  constructor(f: (...args: any[]) => any) {
    return Object.setPrototypeOf(f, new.target.prototype)
  }
}

export class CallablePromise<T, U> extends ExtensibleFunction {
  private res: (value?: T | PromiseLike<T>) => void = undefined as any
  private rej: (reason?: any) => void = undefined as any
  private promise: Promise<T> = undefined as any
  private args: U[] = []
  private executor: (
    args: U[],
    resolve: (value?: T | PromiseLike<T>) => void,
    reject: (reason?: any) => void
  ) => void
  private isExecuted = false
  constructor(
    executor: (
      args: U[],
      resolve: (value?: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void
    ) => void
  ) {
    super((...args: U[]) => {
      this.args = args
      return this
    })
    this.executor = executor
  }
  execute() {
    this.isExecuted = true
    this.promise = new Promise((resolve, reject) => {
      this.res = resolve
      this.rej = reject
      this.executor(this.args, resolve, reject)
    })
  }
  then(
    onfulfilled?: (value: T) => T | PromiseLike<T>,
    onrejected?: (reason: any) => PromiseLike<never>
  ): Promise<T> {
    if (!this.isExecuted) this.execute()
    return this.promise.then(onfulfilled, onrejected)
  }
  catch(onRejected?: (reason: any) => PromiseLike<never>): Promise<T> {
    if (!this.isExecuted) this.execute()
    return this.promise.catch(onRejected)
  }
  /*
  resolve(value?: T | PromiseLike<T>): void {
    return this.res(value)
  }
  reject(reason?: any): void {
    return this.rej(reason)
  }
  */
}
