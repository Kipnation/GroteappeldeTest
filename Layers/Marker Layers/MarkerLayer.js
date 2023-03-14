var overLayers = [

    {		 
    group: "Azorius Senate",
    collapsed: true,
    layers: [
      {
        name: "Guildhall",
        icon: iconByName('Azorius'),
        active: true,
        layer: L.geoJson(AzoriusGuildhall, {
         style: function (feature) {
             return feature.properties.style;
         },
         onEachFeature: function (feature, layer) {
             layer.bindPopup(feature.properties.Title);
         },
         pointToLayer: function(feature,latlng){
           return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'landmark-dome', prefix: 'fa', markerColor: 'lightblue'}) });
       }   
      })
      },
      {
        name: "Precinct Offices",
        icon: iconByName('Azorius'),
        active: true,
        layer: L.geoJson(AzoriusPrecinctOffices, {
         style: function (feature) {
             return feature.properties.style;
         },
         onEachFeature: function (feature, layer) {
             layer.bindPopup(feature.properties.Title);
         },
         pointToLayer: function(feature,latlng){
           return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'city', prefix: 'fa', markerColor: 'lightblue'}) });
       }   
      })
      },
      {
        name: "District Offices",
        icon: iconByName('Azorius'),
        active: true,
        layer: L.geoJson(AzoriusDistrictOffices, {
         style: function (feature) {
             return feature.properties.style;
         },
         onEachFeature: function (feature, layer) {
             layer.bindPopup(feature.properties.Title);
         },
         pointToLayer: function(feature,latlng){
           return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'building-flag', prefix: 'fa', markerColor: 'lightblue'}) });
       }   
      })
      },
      {
        name: "Jeleen Buildings",
        icon: iconByName('Azorius'),
        active: true,
        layer: L.geoJson(AzoriusJeleenBuildings, {
         style: function (feature) {
             return feature.properties.style;
         },
         onEachFeature: function (feature, layer) {
             layer.bindPopup(feature.properties.Title);
         },
         pointToLayer: function(feature,latlng){
           return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'building-flag', prefix: 'fa', markerColor: 'lightblue'}) });
       }   
      })
      },
      {
        name: "Lyev Buildings",
        icon: iconByName('Azorius'),
        active: true,
        layer: L.geoJson(AzoriusLyevBuildings, {
         style: function (feature) {
             return feature.properties.style;
         },
         onEachFeature: function (feature, layer) {
             layer.bindPopup(feature.properties.Title);
         },
         pointToLayer: function(feature,latlng){
           return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'building-shield', prefix: 'fa', markerColor: 'lightblue'}) });
       }   
      })
      },
      {
        name: "Sova Buildings",
        icon: iconByName('Azorius'),
        active: true,
        layer: L.geoJson(AzoriusSovaBuildings, {
         style: function (feature) {
             return feature.properties.style;
         },
         onEachFeature: function (feature, layer) {
             layer.bindPopup(feature.properties.Title);
         },
         pointToLayer: function(feature,latlng){
           return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'building-columns', prefix: 'fa', markerColor: 'lightblue'}) });
       }   
      })
      },
      {
        name: "Azorius Prisons",
        icon: iconByName('Azorius'),
        active: true,
        layer: L.geoJson(AzoriusPrisons, {
         style: function (feature) {
             return feature.properties.style;
         },
         onEachFeature: function (feature, layer) {
             layer.bindPopup(feature.properties.Title);
         },
         pointToLayer: function(feature,latlng){
           return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'dungeon', prefix: 'fa', markerColor: 'lightblue'}) });
       }   
      })
      },
      {
        name: "POI's",
        icon: iconByName('Azorius'),
        active: true,
        layer: L.geoJson(AzoriusPOIs, {
         style: function (feature) {
             return feature.properties.style;
         },
         onEachFeature: function (feature, layer) {
             layer.bindPopup(feature.properties.Title);
         },
         pointToLayer: function(feature,latlng){
           return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'location-pin', prefix: 'fa', markerColor: 'lightblue'}) });
       }   
      })
      },
         ]
    },
    {
      group: "Boros Legion",
      collapsed: true,
      layers: [
        {
          name: "Boros Guildhall",
          icon: iconByName('Boros'),
          active: true,
          layer: L.geoJson(BorosGuildhall, {
           style: function (feature) {
               return feature.properties.style;
           },
           onEachFeature: function (feature, layer) {
               layer.bindPopup(feature.properties.Title);
           },
           pointToLayer: function(feature,latlng){
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'landmark-dome', prefix: 'fa', markerColor: 'red'}) });
         }   
        }) 
        },
        {
          name: "Boros Citadels",
          icon: iconByName('Boros'),
          active: true,
          layer: L.geoJson(BorosCitadels, {
           style: function (feature) {
               return feature.properties.style;
           },
           onEachFeature: function (feature, layer) {
               layer.bindPopup(feature.properties.Title);
           },
           pointToLayer: function(feature,latlng){
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'fort-awesome', prefix: 'fa', markerColor: 'red'}) });
         }   
        }) 
        },
        {
          name: "Boros Garrisons",
          icon: iconByName('Boros'),
          active: true,
          layer: L.geoJson(BorosGarrisons, {
           style: function (feature) {
               return feature.properties.style;
           },
           onEachFeature: function (feature, layer) {
               layer.bindPopup(feature.properties.Title);
           },
           pointToLayer: function(feature,latlng){
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'shield-halved', prefix: 'fa', markerColor: 'red'}) });
         }   
        }) 
        },
        {
          name: "POI's",
          icon: iconByName('Boros'),
          active: true,
          layer: L.geoJson(BorosPOIs, {
           style: function (feature) {
               return feature.properties.style;
           },
           onEachFeature: function (feature, layer) {
               layer.bindPopup(feature.properties.Title);
           },
           pointToLayer: function(feature,latlng){
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'location-pin', prefix: 'fa', markerColor: 'red'}) });
         }   
        }) 
        }
          ]
      },
      {
      group: "Cult of Rakdos",
      collapsed: true,
      layers: [{
             name: "Test Marker",
             layer: L.marker([40.61056, -74.27659])
           },
           {
             name: "Test Marker",
             layer: L.marker([40.59193, -74.29033])
           }
          ]
      },
      {
      group: "Golgari Swarm",
      collapsed: true,
      layers: [{
             name: "Test Marker",
             layer: L.marker([40.60471, -74.27431])
           },
           {
             name: "Test Marker",
             layer: L.marker([40.57541, -74.21777])
           }
          ]
      },	 
      {
      group: "Gruul Clans",
      collapsed: true,
      layers: [{
             name: "Test Marker",
             layer: L.marker([40.60471, -74.27431])
           },
           {
             name: "Test Marker",
             layer: L.marker([40.57541, -74.21777])
           }
          ]
      },
      {
      group: "House Dimir",
      collapsed: true,
      layers: [{
             name: "Test Marker",
             layer: L.marker([40.60495, -74.27524])
           },
           {
             name: "Test Marker",
             layer: L.marker([40.63277, -74.25576])
           }
          ]
      },
      {
      group: "Izzet League",
      collapsed: true,
      layers: [{
             name: "Test Marker",
             layer: L.marker([40.59997, -74.25834])
           }
          ]
      },
      {
      group: "Orzhov Syndicate",
      collapsed: true,
      layers: [{
             name: "Test Marker",
             layer: L.marker([40.60471, -74.27431])
           },
           {
             name: "Test Marker",
             layer: L.marker([40.57541, -74.21777])
           }
          ]
      },
      {
      group: "Selesnya Conclave",
      collapsed: true,
      layers: [
        {
          name: "Guildhall",
          icon: iconByName('Selesnya'),
          active: true,
          layer: L.geoJson(SelesnyaGuildhall, {
           style: function (feature) {
               return feature.properties.style;
           },
           onEachFeature: function (feature, layer) {
               layer.bindPopup(feature.properties.Title);
           },
           pointToLayer: function(feature,latlng){
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'landmark-dome', prefix: 'fa', markerColor: 'lightgreen'}) });
         }   
        })
        },
        {
          name: "Vernadi",
          icon: iconByName('Selesnya'),
          active: true,
          layer: L.geoJson(SelesnyaVernadi, {
           style: function (feature) {
               return feature.properties.style;
           },
           onEachFeature: function (feature, layer) {
               layer.bindPopup(feature.properties.Title);
           },
           pointToLayer: function(feature,latlng){
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'tree', prefix: 'fa', markerColor: 'lightgreen'}) });
         }   
        })
        },
        {
          name: "Food Pantries",
          icon: iconByName('Selesnya'),
          active: true,
          layer: L.geoJson(SelesnyaFoodPantries, {
           style: function (feature) {
               return feature.properties.style;
           },
           onEachFeature: function (feature, layer) {
               layer.bindPopup(feature.properties.Title);
           },
           pointToLayer: function(feature,latlng){
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'plate-wheat', prefix: 'fa', markerColor: 'lightgreen'}) });
         }   
        })
        },
        {
          name: "Community Centers",
          icon: iconByName('Selesnya'),
          active: true,
          layer: L.geoJson(SelesnyaCommunityCenters, {
           style: function (feature) {
               return feature.properties.style;
           },
           onEachFeature: function (feature, layer) {
               layer.bindPopup(feature.properties.Title);
           },
           pointToLayer: function(feature,latlng){
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'tree-city', prefix: 'fa', markerColor: 'lightgreen'}) });
         }   
        })
        },       {
          name: "Gardens",
          icon: iconByName('Selesnya'),
          active: true,
          layer: L.geoJson(SelesnyaGardens, {
           style: function (feature) {
               return feature.properties.style;
           },
           onEachFeature: function (feature, layer) {
               layer.bindPopup(feature.properties.Title);
           },
           pointToLayer: function(feature,latlng){
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'seedling', prefix: 'fa', markerColor: 'lightgreen'}) });
         }   
        })
        },
          ]
      },
      {
      group: "Simic Combine",
      collapsed: true,
      layers: [{
             name: "Test Marker",
             layer: L.marker([40.61296, -74.29110])
           },
           {
             name: "Test Marker",
             layer: L.marker([40.59095, -74.22953])
           }
          ]
      }
    ];
 
var panelLayers = new L.Control.PanelLayers(baseLayers, overLayers, {
selectorGroup: true,
collapsibleGroups: true,
});

map.addControl(panelLayers);