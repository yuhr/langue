import langue from '../src'

describe('Langue', () => {
  it('link without error', async () => {
    expect(await langue.link).toBeUndefined()
  })
  describe('query', () => {
    it('{ root }', async () => {
      expect(await langue.query('{ root }')).toHaveProperty('root', 'A')
    })
  })
})
