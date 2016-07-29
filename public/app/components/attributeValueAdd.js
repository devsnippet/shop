(function(){
    'use strict';

    angular.module('app')
        .component('attributeValueAdd', {
            bindings: {
                attributeSelected: "<attributeSelected",
            },
            templateUrl: '/app/templates/addAttributeValueForm.html',
            controller: function(ProductService) {

                ProductService.getAttribute().then(data => { // attributeSelected.id
                    this.attributes = data.data;
                });

                ProductService.getAttributeType().then(data => { // attributeTypeSelected.id
                    this.attrtypes = data.data;
                });

                console.log(this.attributeTypeSelected);
            }
        })

})();