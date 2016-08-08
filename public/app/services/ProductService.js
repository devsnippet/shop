angular
    .module('app')
    .service('ProductService', function($http) {
        return {
            getAllCategory: function(){
                return $http.get('/api/category');
            },
            getAllAttributeType: function(){
                return $http.get('/api/attribute-type');
            },
            getAllCategoryAttribute: function(categoryId){
                return $http.get('/api/category/'+ categoryId +'/attribute');
            },
            getAllProduct: function(){
                return $http.get('/api/product');
            },
            addProduct: function(categoryId, newProduct){
                return $http.post('/api/category/'+ categoryId +'/product', newProduct);
            }
        }

    })