/*
 * Service settings
 */
var world_places_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "5708bbaee4b0c3b227f0e480"
}

/*
 * Services
 */
var GeolocationService = new Apperyio.GeolocationService({
    'defaultRequest': {
        "data": {
            "options": {
                "maximumAge": 3000,
                "timeout": 5000,
                "enableHighAccuracy": true,
                "watchPosition": false
            }
        }
    }
});

var ConvertAddress = new Apperyio.RestService({
    'url': 'https://maps.googleapis.com/maps/api/geocode/json',
    'dataType': 'json',
    'type': 'get',

    'defaultRequest': {
        "headers": {},
        "parameters": {
            "key": "AIzaSyBD8WIE1ibQWSi0jzIG-G2AgCEMs1Skaow"
        },
        "body": null
    }
});

var world_places_Location_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Location',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': world_places_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {},
        "body": null
    }
});