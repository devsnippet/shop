angular.module('app')
    .component('attributeValueAdd', {
        bindings: {
            attributeSelected:"=attributeSelected",
            attributeTypeSelected:"=attributeTypeSelected",
            attrvalue:"=attrvalue"
        },
        templateUrl: '/app/templates/addAttributeValueForm.html',
        controller: function(ProductService) {
            ProductService.getAttribute().then(data => { // attributeSelected.id
                this.attributes = data.data;
            });

            ProductService.getAttributeType().then(data => { // attributeTypeSelected.id
                this.attrtypes = data.data;
            });
        }
    })