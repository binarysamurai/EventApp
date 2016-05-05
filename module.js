var app = angular.module("EventCalendar",[]);
app.controller("EventController", function ($scope, $filter) {

    $scope.States = [{Name:"Alabama",Abbreviation:"AL"},{Name:"Alaska",Abbreviation:"AK"},{Name:"AmericanSamoa",Abbreviation:"AS"},{Name:"Arizona",Abbreviation:"AZ"},{Name:"Arkansas",Abbreviation:"AR"},{Name:"California",Abbreviation:"CA"},{Name:"Colorado",Abbreviation:"CO"},{Name:"Connecticut",Abbreviation:"CT"},{Name:"Delaware",Abbreviation:"DE"},{Name:"District Of Columbia",Abbreviation:"DC"},{Name:"Federated States Of Micronesia",Abbreviation:"FM"},{Name:"Florida",Abbreviation:"FL"},{Name:"Georgia",Abbreviation:"GA"},{Name:"Guam",Abbreviation:"GU"},{Name:"Hawaii",Abbreviation:"HI"},{Name:"Idaho",Abbreviation:"ID"},{Name:"Illinois",Abbreviation:"IL"},{Name:"Indiana",Abbreviation:"IN"},{Name:"Iowa",Abbreviation:"IA"},{Name:"Kansas",Abbreviation:"KS"},{Name:"Kentucky",Abbreviation:"KY"},{Name:"Louisiana",Abbreviation:"LA"},{Name:"Maine",Abbreviation:"ME"},{Name:"Marshall Islands",Abbreviation:"MH"},{Name:"Maryland",Abbreviation:"MD"},{Name:"Massachusetts",Abbreviation:"MA"},{Name:"Michigan",Abbreviation:"MI"},{Name:"Minnesota",Abbreviation:"MN"},{Name:"Mississippi",Abbreviation:"MS"},{Name:"Missouri",Abbreviation:"MO"},{Name:"Montana",Abbreviation:"MT"},{Name:"Nebraska",Abbreviation:"NE"},{Name:"Nevada",Abbreviation:"NV"},{Name:"New Hampshire",Abbreviation:"NH"},{Name:"New Jersey",Abbreviation:"NJ"},{Name:"New Mexico",Abbreviation:"NM"},{Name:"New York",Abbreviation:"NY"},{Name:"North Carolina",Abbreviation:"NC"},{Name:"North Dakota",Abbreviation:"ND"},{Name:"Northern Mariana Islands",Abbreviation:"MP"},{Name:"Ohio",Abbreviation:"OH"},{Name:"Oklahoma",Abbreviation:"OK"},{Name:"Oregon",Abbreviation:"OR"},{Name:"Palau",Abbreviation:"PW"},{Name:"Pennsylvania",Abbreviation:"PA"},{Name:"Puerto Rico",Abbreviation:"PR"},{Name:"Rhode Island",Abbreviation:"RI"},{Name:"South Carolina",Abbreviation:"SC"},{Name:"South Dakota",Abbreviation:"SD"},{Name:"Tennessee",Abbreviation:"TN"},{Name:"Texas",Abbreviation:"TX"},{Name:"Utah",Abbreviation:"UT"},{Name:"Vermont",Abbreviation:"VT"},{Name:"Virgin Islands",Abbreviation:"VI"},{Name:"Virginia",Abbreviation:"VA"},{Name:"Washington",Abbreviation:"WA"},{Name:"West Virginia",Abbreviation:"WV"},{Name:"Wisconsin",Abbreviation:"WI"},{Name:"Wyoming",Abbreviation:"WY"}];

    $scope.newEvent = function () {
        $scope.Event = {
            firstName: "",
            lastName: "",
            Name: "",
            Date: new Date($filter('date')(new Date(), 'MM/dd/yyyy HH:mm')),
            Address: "",
            City: "",
            State: "AL",
            Zip: 0,
            PIN: 0,
            VoteUp: 0,
            VoteDown: 0
        };

    };

    

    $scope.MinDate = new Date();
    $scope.MaxDate = $scope.MinDate + 365;
    $scope.Events = [];
    $scope.EventShow = false;
    $scope.ViewEvents = false;
    $scope.Edit = false;

    $scope.saveEvent = function () {
        if ($scope.Edit)
        {
            $scope.Events[$scope.Events.map(function (e) { return e.Name }).indexOf($scope.Event.Name)] = $scope.Event;
            $scope.Edit = false;
        }
        else {
            $scope.Events.push($scope.Event);
        }
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