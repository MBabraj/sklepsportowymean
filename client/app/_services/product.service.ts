import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductService {

    products: any[] = []
    visibleProducts: any[] = [];
    currentPage: number;
    allPages: number;
    pageSize = 3;
    filterBy: string;

    constructor(private http: Http) {
        this.http.get('/products').subscribe((a: any) => {
            this.products = a.json();
            this.currentPage = 0;
            this.prepareProducts();
        });
    }   

    setFilterBy(filterBy: string) {
        this.filterBy = filterBy;
        this.prepareProducts();
    }

    nextPage() {
        if (this.currentPage === this.allPages) { return; }
        this.currentPage += 1;
        this.prepareProducts();
    }
    
    previousPage() {
        if (this.currentPage === 0) { return; }
        this.currentPage -= 1;
        this.prepareProducts();
    }

    private prepareProducts() {
        const filtered: any = this.filterBy ? this.products.filter(a => a.title.toLowerCase().indexOf(this.filterBy.toLowerCase()) > -1) : this.products;
        this.allPages = Math.floor(filtered.length / this.pageSize);
        this.visibleProducts = filtered.slice(this.currentPage * this.pageSize, (this.currentPage + 1) * this.pageSize);
    }

    

}
