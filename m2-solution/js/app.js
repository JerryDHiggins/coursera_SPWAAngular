(function() {
    'use strict';
    angular.module('app', [])
        .controller('ToBuyCtrl', ToBuyCtrl)
        .controller('BoughtCtrl', BoughtCtrl)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);



    ToBuyCtrl.$inject = ['ShoppingListCheckOffService'];
    function ToBuyCtrl(ShoppingListCheckOffService) {
        var buyCtrl = this;
        buyCtrl.buyList = ShoppingListCheckOffService.buyList;
        buyCtrl.boughtList = ShoppingListCheckOffService.boughtList;

        buyCtrl.boughtIt= function(ix) {
            buyCtrl.buyList[ix].bought=true;
            buyCtrl.boughtList.push(buyCtrl.buyList[ix]);
            buyCtrl.buyList.splice(ix,1);
        }
    }

    BoughtCtrl.$inject = ['ShoppingListCheckOffService'];
    function BoughtCtrl(ShoppingListCheckOffService) {
        var boughtCtrl = this;
        boughtCtrl.boughtList = ShoppingListCheckOffService.boughtList;
        boughtCtrl.isEmpty=true;
    }


    function ShoppingListCheckOffService() {
        var service = this;

        // list
        var buyList = [{
                name: "Electric Ladyland",
                quantity: "3",
                bought: false
            },
            {
                name: "Europe Live '72",
                quantity: "5",
                bought: false
            },
            {
                name: "Abbey Road",
                quantity: "4",
                bought: false
            },
            {
                name: "Texas Cannonball",
                quantity: "5",
                bought: false
            },
            {
                name: "Atom Heart Mother",
                quantity: "3",
                bought: false
            }
        ];
        var boughtList = [];
        service.buyList = buyList;
        service.boughtList = boughtList;
    }


})();