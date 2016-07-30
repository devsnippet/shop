angular.module('app')
    .component('attributeAdd', {
        templateUrl: '/app/templates/addAttributeForm.html',
        controller: function(CategoryService, AttributeService) {
            CategoryService.getCategory().then(data => {
                this.items = data.data;
            });

            this.submitForm = function(){
                AttributeService.addAttribute(this.categorySelected.id, convertToTransferObj(this.attribute)).then(data => {
                    this.attribute = {};
                    this.categorySelected = null;
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
