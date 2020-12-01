var calc = 2 + destiny * 0.20 + origin * 1.11 + 0.75
        document.getElementById("price-visor").classList.remove("hidden")

function start() {
    const location = Number(document.getElementById("inputlocation").value)
    const travel = Number(document.getElementById("inputtravel").value)
    if (location <= 0 || travel <= 0) {
        window.alert("[ERRO] Verifique se todos os campos foram prenchidos!")
    } else {
        var calc = 2 + travel * 0.20 + location * 1.11 + 0.75
        document.getElementById("price-visor").classList.remove("hidden")
    }if (calc <= 5.75) {
             calc = 5.75
        }
        
        const Price = document.getElementById("price-trip-info")
        Price.innerHTML = (`${calc.toFixed(2).replace(".", ",")}`)
    }

function reset(){
    document.getElementById("price-visor").classList.add("hidden") 
}

///    document.getElementById("map-visor").style.display="none"
    document.getElementById("map").style.width="100%"
    document.getElementById("map").style.height="100%"


    mapboxgl.accessToken = 'pk.eyJ1IjoibWlndWVsaHAzNzMiLCJhIjoiY2tnNzE1MnptMDJ2NzJwanh4MGUxcHllMyJ9.G05-Q0BxD75MOCFG5uk9yw';
    var map = new mapboxgl.Map({
        container: 'map', // Container ID
        style: 'mapbox://styles/mapbox/streets-v11', // Map style to use
        center: [-46.8838,-23.1882], // Starting position [lng, lat]
        zoom: 12, // Starting zoom level
    });

    var marker = new mapboxgl.Marker() // Initialize a new marker
        .setLngLat([-122.25948, 37.87221]) // Marker [lng, lat] coordinates
        .addTo(map); // Add the marker to the map

    var geocoder = new MapboxGeocoder({ // Initialize the geocoder
        accessToken: mapboxgl.accessToken, // Set the access token
        mapboxgl: mapboxgl, // Set the mapbox-gl instance
        marker: true, // Do not use the default marker style
        placeholder: 'Informe o Local de Partida', // Placeholder text for the search bar
        bbox: [-47.0288906,
            -23.3268333986867,
            -46.786431995,
            -23.076376732681], // Boundary for jundiai
        proximity: {
            longitude: -46.8838,
            latitude: -23.1882
        } // Coordinates of Jundiai
    });

    // Add the geocoder to the map
    map.addControl(geocoder);

    // After the map style has loaded on the page,
    // add a source layer and default styling for a single point
    map.on('load', function () {
        map.addSource('single-point', {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: []
            }
        });

        map.addLayer({
            id: 'point',
            source: 'single-point',
            type: 'circle',
            paint: {
                'circle-radius': 10,
                'circle-color': '#000'
            }
        });

        // Listen for the `result` event from the Geocoder
        // `result` event is triggered when a user makes a selection
        // Add a marker at the result's coordinates
        geocoder.on('result', function (ev) {
            map.getSource('single-point').setData(ev.result.geometry);
        });
    });