"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        var _this = this;
        this.http = http;
        this.products = [];
        this.visibleProducts = [];
        this.pageSize = 3;
        this.http.get('/products').subscribe(function (a) {
            _this.products = a.json();
            _this.currentPage = 0;
            _this.prepareProducts();
        });
    }
    ProductService.prototype.setFilterBy = function (filterBy) {
        this.filterBy = filterBy;
        this.prepareProducts();
    };
    ProductService.prototype.nextPage = function () {
        if (this.currentPage === this.allPages) {
            return;
        }
        this.currentPage += 1;
        this.prepareProducts();
    };
    ProductService.prototype.previousPage = function () {
        if (this.currentPage === 0) {
            return;
        }
        this.currentPage -= 1;
        this.prepareProducts();
    };
    ProductService.prototype.prepareProducts = function () {
        var _this = this;
        var filtered = this.filterBy ? this.products.filter(function (a) { return a.title.toLowerCase().indexOf(_this.filterBy.toLowerCase()) > -1; }) : this.products;
        this.allPages = Math.floor(filtered.length / this.pageSize);
        this.visibleProducts = filtered.slice(this.currentPage * this.pageSize, (this.currentPage + 1) * this.pageSize);
    };
    ProductService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map