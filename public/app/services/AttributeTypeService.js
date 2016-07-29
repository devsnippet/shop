(function(){
    'use strict';

    angular
        .module('app')
        .service('AttributeTypeService', function($http) {
            return {
                getAttributeType: function(){
                    return $http.get('/category/1/attribute-type');
                },
                addAttributeType: function(newAttributeType){
                    return $http.post('/category/attribute-type', newAttributeType);
                }
            }

        })
})();