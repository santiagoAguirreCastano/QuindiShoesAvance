
import ProductRepository from '../repositories/ProductrRepository';
import Producto from '../Dto/ProductoDto';

class ProductServices{
    static async addProducto(producto: Producto) {
        return await ProductRepository.addProducto(producto);
    }
}