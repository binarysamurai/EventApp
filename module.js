var app = angular.module("EventCalendar",[]);
app.controller("EventController", function ($scope, $filter) {

    $scope.newEvent = function () {
        $scope.Event = {
            firstName: "",
            lastName: "",
            Name: "",
            Date: new Date($filter('date')(new Date(), 'MM/dd/yyyy HH:mm')),
            Address: "",
            City: "",
            State: "",
            Zip: "",
            PIN: "",
            VoteUp: 0,
            VoteDown: 0
       
        };

    };

    $scope.Events = [];
    $scope.EventShow = false;
    $scope.ViewEvents = false;
    $scope.Edit = false;

    $scope.saveEvent = function () {
        
        $scope.Events.push($scope.Event);
        $scope.newEvent();
    };

    $scope.likeEvent = function (Event) {
        Event.VoteUp = Event.VoteUp + 1;
    };

    $scope.dislikeEvent = function (Event) {
        Event.VoteDown = Event.VoteDown + 1;
    };

    $scope.editEvent = function (Event) {
        $scope.Event = Event;
        $scope.Edit = true;
    };

    $scope.Delete = function (Index) {
        $scope.Events.splice(Index, 1);
    };
});