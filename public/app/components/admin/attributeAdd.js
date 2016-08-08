angular.module('app')
    .component('attributeAdd', {
        templateUrl: '/app/templates/admin/addAttributeForm.html',
        controller: function(CategoryService, AttributeService) {
            CategoryService.getAllCategory().then(data => {
                this.items = data.data;
            });

            this.submitForm = function(){
                AttributeService.addAttribute(this.categorySelected.id, convertToTransferObj(this.attribute)).then(data => {
                    this.attribute = {};
                    this.categorySelected = undefined;
                    this.form.$setPristine();
                });
            };

            function convertToTransferObj(attribute){
                return  {
                    title: attribute.title,
                }
            }
        }
    })
