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

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('MapCtrl', function($scope, $ionicLoading) {
      //google.maps.event.addDomListener(window, "load",function() {
        var myLat = 43.544805;
        var myLng = -80.248167;
          var myLatlng = new google.maps.LatLng(myLat,myLng);

          var mapOptions = {
              center: myLatlng,
              zoom: 16,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          var map;
          map = new google.maps.Map(document.getElementById("map"), mapOptions);

          $scope.map = map;
      //});
      //  google.maps.event.addDomListener(map,"load",$scope.initialize());
        $scope.centerOnMe = function() {
            if(!$scope.map) {
                return;
            }

            $scope.loading = $ionicLoading.show({
                content: 'Getting current location...',
                showBackdrop: false
            });

            navigator.geolocation.getCurrentPosition(function(pos) {
                $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                //$scope.loading.hide();
            }, function(error) {
                alert('Unable to get location: ' + error.message);
            });
        };
    });