(function(){
    'use strict';

    angular
        .module('app')
        .service('CategoryService', function($http) {
            return {
                getCategory: function(){
                    return $http.get('/category');
                },
                addCategory: function(newCategory){
                    return $http.post('/category', newCategory);
                }
            }

        })
})();