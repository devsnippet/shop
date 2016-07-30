angular
    .module('app')
    .service('ProductService', function($http) {
        return {
            getCategory: function(){
                return $http.get('/category');
            },
            getAttributeType: function(){
                return $http.get('/category/1/attribute-type');
            },
            getAttribute: function(){
                return $http.get('/category/1/attribute');
            },
            addProduct: function(categoryId, newProduct){
                return $http.post('/category/'+ categoryId +'/product', newProduct);
            }
        }

    })