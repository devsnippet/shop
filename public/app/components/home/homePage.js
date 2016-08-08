angular.module('app')
    .component('homePage', {
        templateUrl: '/app/templates/home/homePage.html',
        controller: function(ProductService, AttributeValueService) {
            ProductService.getAllProduct().then(data => {
                this.products = data.data;

                this.image = "motorola-xoom-with-wi-fi.0.jpg";
            });

            AttributeValueService.getAllAttributeValue().then(data => {
                this.attributes = data.data;
            });

            ProductService.getAllCategory().then(data => {
                this.categories = data.data;
            });

        }
    })