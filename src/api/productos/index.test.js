import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Productos } from '.'

const app = () => express(apiRoot, routes)

let productos

beforeEach(async () => {
  productos = await Productos.create({})
})

test('POST /productos 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ descripcion: 'test', precio: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.descripcion).toEqual('test')
  expect(body.precio).toEqual('test')
})

test('GET /productos 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /productos/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${productos.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(productos.id)
})

test('GET /productos/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /productos/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${productos.id}`)
    .send({ descripcion: 'test', precio: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(productos.id)
  expect(body.descripcion).toEqual('test')
  expect(body.precio).toEqual('test')
})

test('PUT /productos/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ descripcion: 'test', precio: 'test' })
  expect(status).toBe(404)
})

test('DELETE /productos/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${productos.id}`)
  expect(status).toBe(204)
})

test('DELETE /productos/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
