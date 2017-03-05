angular.module('app', ['ngMaterial'])
.controller("weatherController",function($scope){
    
    $scope.weatherInfo={};
     $scope.weatherInfo.city="kanpur";
    $scope.weatherInfo.temp="30";
    $scope.date=new Date();
    $scope.weatherinfo=true;
$scope.days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    
//    if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/seviceWorker.js', { scope: '/' })
//          .then(function(registration) {
//                console.log('Service Worker Registered');
//       
//    navigator.serviceWorker.ready.then(function(registration) {
//           console.log('Service Worker Ready');
//        });
//                                    });
//  }

    if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/seviceWorker.js').then(function(registration) {
    console.log('ServiceWorker registration successful with scope:',  registration.scope);
  }).catch(function(error) {
    console.log('ServiceWorker registration failed:', error);
  });
}
    
$scope.getinfo=function(){    
    navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); 
      });
}

    
   function loadWeather(location, woeid) {  
       $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'c',
        success: function(weather) {
            $scope.weatherInfo=weather;
            $scope.weatherinfo=false;
        $scope.weatherInfo.forecast.forEach(function(item){
            item.low=parseInt(item.low);
            item.high=parseInt(item.high);
        });   
            console.log($scope.weatherInfo);
        },
        error: function(error) {
          console.log(error);
        }
      });
   }
    
//   $scope.getDaysName=function(int n){
////        var temp;
////        switch(n){
////            case: 0
////                temp="SunDay";break;
////            case: 1
////                temp="Monday";break;
////            case: 2:
////                temp="ThirsDay";break;
////            case: 3:
////                temp="WednessDay";break;
////            case: 4
////                temp="ThursDay";break;
////            case: 5
////                temp="FriDay";break;
////            case: 6
////                temp="SautarDay";break;
////            default:
////                break;
////        }
//        
//        return "SunDay";
//    }
});