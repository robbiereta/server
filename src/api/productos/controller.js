import { success, notFound } from '../../services/response/'
import { Productos } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Productos.create(body)
    .then((productos) => productos.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Productos.count(query)
    .then(count => Productos.find(query, select, cursor)
      .then((productos) => ({
        count,
        rows: productos.map((productos) => productos.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Productos.findById(params.id)
    .then(notFound(res))
    .then((productos) => productos ? productos.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Productos.findById(params.id)
    .then(notFound(res))
    .then((productos) => productos ? Object.assign(productos, body).save() : null)
    .then((productos) => productos ? productos.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Productos.findById(params.id)
    .then(notFound(res))
    .then((productos) => productos ? productos.remove() : null)
    .then(success(res, 204))
    .catch(next)
