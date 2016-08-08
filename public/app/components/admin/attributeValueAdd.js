angular.module('app')
    .component('attributeValueAdd', {
        bindings: {
            attributeSelected:"=",
            attributeTypeSelected:"=",
            attrvalue:"=",
            attribute:"=",
            index:"="
        },
        templateUrl: '/app/templates/admin/addAttributeValueForm.html',
        controller: function(ProductService) {
            ProductService.getAllCategoryAttribute('1').then(data => {  // most be getAllCategoryAttribute
                this.attributes = data.data;
            });

            ProductService.getAllAttributeType().then(data => {
                this.attrtypes = data.data;
            });
        }
    })