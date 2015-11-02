/**
 * Created by francisco on 11/1/15.
 */
(function () {
    'use strict';
    angular.module('projects').controller('GenericCtrl', ['$scope', '$state', '$stateParams', '$resource', '$filter',  '$mdToast', '$mdDialog', 'settings', GenericCtrl]);
    function GenericCtrl($scope, $state, $stateParams, $resource, $filter, $mdToast, $mdDialog, settings) {
        $scope.item = null;
        $scope.items = null;
        $scope.template = $state.current.data.template;

        var itemResource = createResource($state.current.data.resourceName);

        if ($stateParams.new){
            $scope.item = new itemResource();
        } else if($stateParams.id){
            $scope.item = itemResource.get({id: $stateParams.id}, function(){
            })
        } else {
            $scope.items = itemResource.query(function(){});
        }

        function createResource(name){
            return $resource(settings.apiUrl + name, { id : '@id' }, {
                update: {
                    method: 'PUT'
                }
            });
        }

        $scope.save = function(goTo){
            if($scope.item.id){
                $scope.item.$update(function(){
                    toast('Item updated');
                });
            }else{
                $scope.item.$save(function(){
                    $state.go(goTo, {id: $scope.item.id});
                    toast('Item created');

                });


            }

        };

        $scope.goToItem = function(name, id){
            $state.go(name, {id : id})
        };

        $scope.delete = function(id, content, ev){
            var confirm = $mdDialog.confirm()
                .title('Would you like to delete this item?')
                .content(content)
                .ariaLabel('Delete item')
                .targetEvent(ev)
                .ok('Delete')
                .cancel('Cancel');
            $mdDialog.show(confirm).then(function() {
                itemResource.delete({id : id}, function(){
                    $scope.items = $filter('filter')($scope.items,function(value, index){
                        return value.id != id;
                    }, true);
                    toast('Item deleted')



                })
            }, function() {

            });

        };

        $scope.new = function(){
            $state.go($scope.newStateName, { new : true})  ;
        };

        var toast = function(text){
            $mdToast.show(
                $mdToast.simple()
                    .content(text)
                    .position('top right')
                    .hideDelay(3000)
            );
        };




    }
})();
