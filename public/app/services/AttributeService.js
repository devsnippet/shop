angular
    .module('app')
    .service('AttributeService', function($http) {
        return {
            getAttribute: function(){
                return $http.get('/category/1/attribute');
            },
            addAttribute: function(categoryId,newAttribute){
                return $http.post('/category/'+ categoryId +'/attribute', newAttribute);
            }
        }

    })