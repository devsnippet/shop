angular
    .module('app')
    .service('CategoryService', function($http) {
        return {
            getAllCategory: function(){
                return $http.get('/api/category');
            },
            addCategory: function(newCategory){
                return $http.post('/api/category', newCategory);
            }
        }

    })