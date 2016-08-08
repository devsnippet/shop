angular
    .module('app')
    .service('AttributeValueService', function($http) {
        return {
            getAllAttributeValue: function() {
                return $http.get('/api/attribute-value');
            }
        }

    })