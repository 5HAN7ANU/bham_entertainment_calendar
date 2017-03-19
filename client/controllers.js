angular.module('BhamEntCal.controllers', ['ui.bootstrap'])
    .controller('HomeController', ['$scope', '$location', function($scope, $location){
        $(document).ready(function(){
            $('#calendar').fullCalendar({

            });
        });
    }]);