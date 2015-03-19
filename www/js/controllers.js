angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Dr. Bill', id: 1, note: 'This one time at band camp' },
    { title: 'Dr. Steve', id: 2, note: 'Amazing' },
    { title: 'Dr. Arnold', id: 3, note: 'Duh' }
    //{ title: 'Indie', id: 4 },
    //{ title: 'Rap', id: 5 },
    //{ title: 'Cowbell', id: 6 }
  ];
})
    .controller('ClaimCtrl', function($scope) {
        $scope.claims = [
            { title: 'Insurance', id: 1, note: 'Does the patient have the appropriate insurance', checked: true },
            { title: 'Vaccinations', id: 2, note: 'Are all of the mandatory vaccinations up to date',checked:false },
            { title: 'Medic Alert', id: 3, note: 'Are the wearing a medic alert bracelet', checked:false }
            //{ title: 'Indie', id: 4 },
            //{ title: 'Rap', id: 5 },
            //{ title: 'Cowbell', id: 6 }
        ];
    })

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('MapCtrl', function($scope, $ionicLoading) {
        //function initialize() {
            var myLat = 43.544805;
            var myLng = -80.248167;
            var myLatlng = new google.maps.LatLng(myLat, myLng);

            var mapOptions = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map;
            var mapDiv = document.getElementById("map");
            map = new google.maps.Map(mapDiv, mapOptions);

            $scope.map = map;
            //google.maps.event.addDomListener(mapDiv, 'click', showAlert);
        //}
        //google.maps.event.addDomListener(window, 'load', initialize);

        $scope.centerOnMe = function() {
            if(!$scope.map) {
                return;
            }

            $scope.loading = $ionicLoading.show({
                content: 'Getting current location...',
                showBackdrop: false
            });

            navigator.geolocation.getCurrentPosition(function(pos) {
                myLat=pos.coords.latitude;
                myLng=pos.coords.longitude;
                myLatlng=new google.maps.LatLng(myLat,myLng);

                $scope.map.setCenter(myLatlng);
                //$scope.loading.hide();
                alert(pos.coords.latitude);
                var marker = new google.maps.Marker({

                    map:  $scope.map,

                    position: myLatlng,
                    title: 'Hello World!'

                });
                $ionicLoading.hide();
            }, function(error) {
                alert('Unable to get location: ' + error.message);
            });
        };
    });