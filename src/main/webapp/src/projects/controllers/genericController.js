/**
 * Created by francisco on 11/1/15.
 */
(function () {
    'use strict';
    angular.module('projects').controller('GenericCtrl', ['$scope', '$state', '$stateParams', '$resource', 'settings', GenericCtrl]);
    function GenericCtrl($scope, $state, $stateParams, $resource, settings) {
        $scope.item = null;
        $scope.items = null;
        $scope.template = $state.current.data.template;

        var itemResource = createResource($state.current.data.resourceName);

        console.log($state.current);


        if ($stateParams.new){
            $scope.item = new itemResource();
            console.log('new')
        } else if($stateParams.id){
            $scope.item = itemResource.get({id: $stateParams.id}, function(){
                console.log( $scope.item );
                console.log( "Look user" );
            })
        } else {
            $scope.items = itemResource.query(function(){
                console.log($scope.items);
            });

            console.log('Logged items');
        }

        function createResource(name){
            return $resource(settings.apiUrl + name, { id : '@id' }, {
                update: {
                    method: 'PUT'
                }
            });
        }

        $scope.save = function(){
            if($scope.item.id){
                $scope.item.$update();
            }else{
                $scope.item.$save();
            }

        };

        $scope.goToItem = function(name, id){
            console.log('going');
            $state.go(name, {id : id})
        };

        $scope.delete = function(){

        };

        $scope.new = function(){
            console.log('newwww');
            $state.go($scope.newStateName, { new : true})  ;
        };



    }
})();
