import {Injectable, NotFoundException} from "@nestjs/common";
import {Product} from "./product.model";

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    insertProduct(title: string, desc: string, price: number) {
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, desc, price);
        this.products.push(newProduct);
        return prodId;
    }

    getProducts() {
        return [...this.products];
    }

    getSingleProduct(productId: string) {
        const product = this.findProduct(productId)[0];
        return {...product};
    }

    updateProduct(prodId: string,
                  prodTitle: string,
                  prodDesc: string,
                  prodPrice: number) {
        const [product, index] = this.findProduct(prodId);
        const updatedProduct = {...product};
        if(prodTitle) {
            updatedProduct.title = prodTitle;
        }
        if(prodDesc) {
            updatedProduct.description = prodDesc;
        }
        if(prodPrice) {
            updatedProduct.price = prodPrice;
        }
        this.products[index] = updatedProduct;
    }

    private findProduct(productId: string): [Product, number] {
        const productIndex = this.products.findIndex((prod) => prod.id === productId);
        const product = this.products[productIndex];
        if (!product) {
            throw new NotFoundException('Could not find product.');
        } else
            return [product, productIndex];
    }
}