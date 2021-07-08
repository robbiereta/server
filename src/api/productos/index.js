import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
import Productos, { schema } from './model'

const router = new Router()
const { descripcion, precio } = schema.tree

/**
 * @api {post} /productos Create productos
 * @apiName CreateProductos
 * @apiGroup Productos
 * @apiParam descripcion Productos's descripcion.
 * @apiParam precio Productos's precio.
 * @apiSuccess {Object} productos Productos's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Productos not found.
 */
router.post('/',
  body({ descripcion, precio }),
  create)

/**
 * @api {get} /productos Retrieve productos
 * @apiName RetrieveProductos
 * @apiGroup Productos
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of productos.
 * @apiSuccess {Object[]} rows List of productos.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /productos/:id Retrieve productos
 * @apiName RetrieveProductos
 * @apiGroup Productos
 * @apiSuccess {Object} productos Productos's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Productos not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /productos/:id Update productos
 * @apiName UpdateProductos
 * @apiGroup Productos
 * @apiParam descripcion Productos's descripcion.
 * @apiParam precio Productos's precio.
 * @apiSuccess {Object} productos Productos's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Productos not found.
 */
router.put('/:id',
  body({ descripcion, precio }),
  update)

/**
 * @api {delete} /productos/:id Delete productos
 * @apiName DeleteProductos
 * @apiGroup Productos
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Productos not found.
 */
router.delete('/:id',
  destroy)

export default router
