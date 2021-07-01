import mongoose, { Schema } from 'mongoose'

const productosSchema = new Schema({
  descripcion: {
    type: String
  },
  precio: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

productosSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      descripcion: this.descripcion,
      precio: this.precio,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Productos', productosSchema)

export const schema = model.schema
export default model
