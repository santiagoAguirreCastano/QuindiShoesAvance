import db from '../config/config-db';
import User from '../Dto/UserDto';
import Auth from '../Dto/AuthDto';
import bcrypt from 'bcryptjs';
import Producto from '../Dto/ProductoDto';


class ProductRepository {

  static async addProducto(producto: Producto) {
    const sql = 'call Insertar_producto(?, ?, ?, ?, ?, ?, ?);';
    const values = [producto.tipoProducto, producto.nombreProducto, producto.generoProducto, producto.precioProducto, producto.stockProducto,producto.tallaProducto,producto.imagenProducto];
    return db.execute(sql, values);
  }
}


export default ProductRepository;