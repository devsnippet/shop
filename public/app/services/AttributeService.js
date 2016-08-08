angular
    .module('app')
    .service('AttributeService', function($http) {
        return {
            getAllCategoryAttribute: function(categoryId){
                return $http.get('/api/category/'+ categoryId +'/attribute');
            },
            addAttribute: function(categoryId,newAttribute){
                return $http.post('/api/category/'+ categoryId +'/attribute', newAttribute);
            }
        }

    })