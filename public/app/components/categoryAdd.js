angular.module('app')
    .component('categoryAdd', {
        templateUrl: '/app/templates/addCategoryForm.html',
        controller: function(CategoryService) {
            CategoryService.getCategory().then(data => {
                this.items = data.data;
            });

            this.submitForm = function() {
                if( typeof (this.categorySelected) == "undefined" ) {
                    var categorySelected = null;
                }
                else {
                    categorySelected = this.categorySelected.id;
                }
                CategoryService.addCategory(convertToTransferObj(this.category, categorySelected)).then(data => {
                    this.category = {};
                    this.categorySelected = null;
                    this.form.$setPristine();
                });
            };

            function convertToTransferObj(category, categorySelected){
                return  {
                    title: category.title,
                    parentId: categorySelected
                }
            }
        }
    })