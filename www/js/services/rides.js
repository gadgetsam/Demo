// console.log("Rides service file loaded"); // Feedback
angular.module('ridesService', ['ionic'])
  .factory('testVariable', function() {
    return "Rides Service Works"
  })

  .factory('testFunction', function() {
      return function(num) {
        return num * 2
      }

  })

  .factory('retrieveSchedule', function($http) {
    // Pull from server
	var userID = "sam";
	var email = "menlohacks@gmail.com"
//	var time = '9:45 AM';
//  var date = [2016, 20, 4],
//	date = JSON.stringify(date);
//  var repeating = false;
//  var repeatedDays = [false, true, false, true, false, true, false];
//  var repeatedDays = JSON.stringify(repeatedDays)
//  var image = 'img/Golden.jpg';
//  var dropoff = 'Golden Gate Bridge, San Francisco, CA';
//  var pickup = 'Menlo School, Aherton, CA 94027'



  var url = "https://uberschedulerp.appspot.com/_ah/api/uberApi/v1/ride/return";
  $http.post(url, {
    "userID":userID
  }).then(function (resps) {
    console.log(resps)
  })



    var playlists = [
      {
        time: 'Harvard Israel Review',
        id: 1,
        date: new Date(2016, 20, 4),
        repeating: false,
        repeatedDays: [false, true, false, true, false, true, false],
        image: 'img/Golden.jpg',
        face: 'img/xio.jpg',
        dropoff: 'The close relationship between Israel and the United States was born out of Cold War tensions projected onto the regional conflict in the Middle East. The U.S., implementing its policy of containment at the time, was competing with the Soviet Union for influence in regions around the world.',
        pickup: '01/06/2016',
        race: ['Congress approved the most recent special aid package in 1998', 'In 1985, Congress approved a $1.5 billion emergency package to help Israel', 'U.S. provided Israel with a military loan of $545 million'], 

				key: 'ABCDEFG'
      },
      {
        time: 'America in the 1960s',
        id: 2,
        date: new Date(2016, 20, 4),
        repeating: false,
        repeatedDays: [false, false, false, false, false, false, false],
        image: 'img/Art.jpg',
        face: 'img/oliver.jpg',
        dropoff: 'The Contennial Commission preferred to present the Civil War as, in essence, a kind of colorful and good-natured regional athletic rivalry between two groups of freedom-loving white Americans. Americans of all regions and political persuasions invoked imagery of the Civil War - to illustrate what divided rather than united the nation. ',
        pickup: '01/09/2016',
        race: ["In 1959 Contennial Commission director Betts said 'We're not emphasizing Emancipation'", 'There were messy political issues in 1960.', 'Musketry and artillery caused the death and dismemberment of hundreds of thousands of Americans between 1861 and 1865.'],
				key: 'ABCDEFG'
      },
      {
        time: 'The New Feminism',
        id: 3,
        date: new Date(2016, 20, 4),
        repeating: false,
        repeatedDays: [false, true, false, true, false, true, false],
        image: 'img/Land.jpg',
        face: 'img/maiyio.JPG',
        dropoff: '680 Point Lobos Ave, San Francisco, CA 94121',
        pickup: 'Menlo School, Atherton, CA 94027',
        race: ['Black', 'African American', 'San Francisco', 'Straight', 'He/Him', 'Cis-Gender', 'Takis'],
				key: 'ABCDEFG'
      }
    ];


    return playlists
  })

  .factory('pushSchedule', function() {
    return function(playlist) {
      console.log("Pushing playlist:", playlist);
      // Push to server
    }
  })

  .factory('timeEstimate', function($http) {
    return function(long, lat, end_lat, end_long) {
      baseurl = "https://sandbox-api.uber.com/v1/estimates/price"

      parameters = {
        'server_token': 'ikGvlAJSejPSY6bUp7APhxkwyu5ermguZnreUaCd',
        'start_latitude': lat,
        'start_longitude': long,
        'end_latitude': end_lat,
        'end_longitude': end_long,
      }

      url = baseurl + "?" + "server_token=" + parameters['server_token'] + "&start_latitude=" + parameters[
          'start_latitude'] + "&start_longitude=" + parameters['start_longitude']+"&end_latitude=" + parameters[
        'end_latitude'] + "&end_longitude=" + parameters['end_longitude']
      $http.get(url).success(function(data){
        return data
      })

    }

  })

.directive('googleplace', function(){
	return {
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {}
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                    model.$setViewValue(element.val());
                });
            });
        }
    };
});