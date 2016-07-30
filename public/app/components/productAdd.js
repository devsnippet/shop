angular.module('app')
    .component('productAdd', {
        templateUrl: '/app/templates/addProductForm.html',
        controller: function(ProductService) {
            ProductService.getCategory().then(data => { // categorySelected.id
                this.categories = data.data;
            });

            this.submitForm = function() {
                this.product.category = this.categorySelected.id;

                this.product.attribute = this.attributeSelected.title;
                this.product.type = this.attributeTypeSelected.title;
                this.product.attrvalue = this.attrvalue;

                ProductService.addProduct(this.categorySelected.id, convertToTransferObj(this.product)).then(data => {
                    this.product = {};
                    this.categorySelected = null;
                    this.attributeSelected = null;
                    this.attributeTypeSelected = null;
                    this.attrvalue = null;
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