angular.module('app')
    .component('productAdd', {
        templateUrl: '/app/templates/admin/addProductForm.html',
        controller: function(ProductService) {
            ProductService.getAllCategory().then(data => { // categorySelected.id
                this.categories = data.data;
            });

            this.attribute = {
                count: [0],
                index: 0,
                get: function() {
                    return this.count;
                },
                add: function()  {
                    this.count.push(++this.index);
                },
                delete: function(index)  {
                    var result;
                    this.count.forEach(function(item, i) {
                        if(item == index) {
                            result = i;
                        }
                    });

                    this.count.splice(result, 1);
                }
            }

            this.submitForm = function() {
                this.product.category = this.categorySelected.id;

                this.product.attribute = this.attributeSelected;
                this.product.type = this.attributeTypeSelected;
                this.product.attrvalue = this.attrvalue;

                ProductService.addProduct(this.categorySelected.id, convertToTransferObj(this.product)).then(data => {
                    this.product = {};
                    this.categorySelected = undefined;
                    this.attributeSelected = undefined;
                    this.attributeTypeSelected = undefined;
                    this.attrvalue = undefined;
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