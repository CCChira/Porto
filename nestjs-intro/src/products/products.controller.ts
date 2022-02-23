import {Controller, Post, Body, Get, Param, Patch} from "@nestjs/common";
import {ProductsService} from "./products.service";

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {
    };

    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
    ): any {
        const generatedId = this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);
        return {id: generatedId};
    }

    @Get()
    getAllProducts() {
        return this.productsService.getProducts();
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string) {
        return this.productsService.getSingleProduct(prodId);
    }

    @Patch(':id')
    updateProduct(@Param('id') prodId: string,
                  @Body('title') prodTitle: string,
                  @Body('description') prodDesc: string,
                  @Body('price') prodPrice: number
    ): void {
        this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
        return null;
    }

}