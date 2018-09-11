import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{

    pageTitle: string = "Product List";
    errorMessage: string;
    imageWidth: number = 50;
    showImage: boolean = false;
    _filterBy: string;

    get filterBy(): string{
        return this._filterBy;
    }
    set filterBy(value: string){
        this._filterBy = value;
        this.filteredProduct = this.filterBy ? this.performFilter(this.filterBy): this.products;
        //this.performFilter(this._filterBy);
    }

    filteredProduct: IProduct[];

    products: IProduct[];

    constructor(private productService: ProductService){
        
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    performFilter(filterValue: string): IProduct[]{
        filterValue = filterValue.toLocaleLowerCase();
        return this.products.filter((product:IProduct) => product.productName.toLocaleLowerCase().indexOf(filterValue)!==-1);
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProduct = this.products;
            },
            error => this.errorMessage = <any>error);
    }

    OnNotify(message: string): void{
        this.pageTitle = 'Product List: ' + message;
    }

}