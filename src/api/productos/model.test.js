import { Productos } from '.'

let productos

beforeEach(async () => {
  productos = await Productos.create({ descripcion: 'test', precio: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = productos.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(productos.id)
    expect(view.descripcion).toBe(productos.descripcion)
    expect(view.precio).toBe(productos.precio)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = productos.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(productos.id)
    expect(view.descripcion).toBe(productos.descripcion)
    expect(view.precio).toBe(productos.precio)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
