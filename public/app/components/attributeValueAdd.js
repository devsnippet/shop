(function(){
    'use strict';

    angular.module('app')
        .component('attributeValueAdd', {
            templateUrl: '/app/templates/addAttributeValueForm.html',
            controller: function(ProductService) {

                ProductService.getAttribute().then(data => { // attributeSelected.id
                    this.attributes = data.data;
                });

                ProductService.getAttributeType().then(data => { // attributeTypeSelected.id
                    this.attrtypes = data.data;
                });

                this.submitForm = function() {
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
                        attribute:  product.attribute,
                        type:       product.type,
                        attrvalue:  product.attrvalue
                    }
                }
            }
        })

})();