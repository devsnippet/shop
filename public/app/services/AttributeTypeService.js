angular
    .module('app')
    .service('AttributeTypeService', function($http) {
        return {
            getAllAttributeType: function(){
                return $http.get('/api/attribute-type');
            },
            addAttributeType: function(newAttributeType){
                return $http.post('/api/attribute-type', newAttributeType);
            }
        }

    })