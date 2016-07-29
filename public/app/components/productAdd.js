(function(){
    'use strict';

    angular.module('app')
        .component('productAdd', {
            templateUrl: '/app/templates/addProductForm.html',
            controller: function(ProductService) {
                ProductService.getCategory().then(data => { // categorySelected.id
                    this.categories = data.data;
                });

                ProductService.getAttribute().then(data => { // attributeSelected.id
                    this.attributes = data.data;
                });

                ProductService.getAttributeType().then(data => { // attributeTypeSelected.id
                    this.attrtypes = data.data;
                });

                this.submitForm = function() {
                    this.product.category = this.categorySelected.id;
                    this.product.attribute = this.attributeSelected.title;
                    this.product.type = this.attributeTypeSelected.title;

                    ProductService.addProduct(this.categorySelected.id, convertToTransferObj(this.product)).then(data => {
                        this.product = {};
                        this.categorySelected = null;
                        this.attributeSelected = null;
                        this.attributeTypeSelected = null;
                        this.form.$setPristine();
                    });
                };

                function convertToTransferObj(product){
                    return  {
                        title:      product.title,
                        desc:       product.desc,
                        categoryId: product.category,
                        attribute:  product.attribute,
                        type:       product.type,
                        attrvalue:  product.attrvalue
                    }
                }
            }
        })

})();