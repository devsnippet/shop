(function(){
    'use strict';

    angular.module('app')
        .component('attributeTypeAdd', {
            templateUrl: '/app/templates/addAttributeTypeForm.html',
            controller: function(AttributeTypeService) {

                this.submitForm = function(){
                    AttributeTypeService.addAttributeType(convertToTransferObj(this.attributeType)).then(data => {
                        this.attributeType = {};
                        this.form.$setPristine();
                    });
                };

                function convertToTransferObj(attributeType){
                    return  {
                        title: attributeType.title,
                    }
                }
            }
        })

})();