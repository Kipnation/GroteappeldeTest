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
        name: "Prisons",
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
          name: "Guildhall",
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
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'landmark-dome', prefix: 'fa', markerColor: 'lightred'}) });
         }   
        }) 
        },
        {
          name: "Citadels",
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
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'fort-awesome', prefix: 'fa', markerColor: 'lightred'}) });
         }   
        }) 
        },
        {
          name: "Garrisons",
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
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'shield-halved', prefix: 'fa', markerColor: 'lightred'}) });
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
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'location-pin', prefix: 'fa', markerColor: 'lightred'}) });
         }   
        }) 
        }
          ]
      },
      {
      group: "Cult of Rakdos",
      collapsed: true,
      layers: [
        {
          name: "Guildhall",
          icon: iconByName('Rakdos'),
          active: true,
          layer: L.geoJson(RakdosGuildhall, {
           style: function (feature) {
               return feature.properties.style;
           },
           onEachFeature: function (feature, layer) {
               layer.bindPopup(feature.properties.Title);
           },
           pointToLayer: function(feature,latlng){
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'landmark-dome', prefix: 'fa', markerColor: 'darkred'}) });
         }   
        }) 
        },
        {
          name: "Entertainment Venue",
          icon: iconByName('Rakdos'),
          active: true,
          layer: L.geoJson(RakdosEntertainment, {
           style: function (feature) {
               return feature.properties.style;
           },
           onEachFeature: function (feature, layer) {
               layer.bindPopup(feature.properties.Title);
           },
           pointToLayer: function(feature,latlng){
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'masks-theater', prefix: 'fa', markerColor: 'darkred'}) });
         }   
        }) 
        },
        {
          name: "Factories",
          icon: iconByName('Rakdos'),
          active: true,
          layer: L.geoJson(RakdosFactories, {
           style: function (feature) {
               return feature.properties.style;
           },
           onEachFeature: function (feature, layer) {
               layer.bindPopup(feature.properties.Title);
           },
           pointToLayer: function(feature,latlng){
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'industry', prefix: 'fa', markerColor: 'darkred'}) });
         }   
        }) 
        },
        {
          name: "Mines",
          icon: iconByName('Rakdos'),
          active: true,
          layer: L.geoJson(RakdosMines, {
           style: function (feature) {
               return feature.properties.style;
           },
           onEachFeature: function (feature, layer) {
               layer.bindPopup(feature.properties.Title);
           },
           pointToLayer: function(feature,latlng){
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'person-digging', prefix: 'fa', markerColor: 'darkred'}) });
         }   
        }) 
        },
        {
          name: "POI's",
          icon: iconByName('Rakdos'),
          active: true,
          layer: L.geoJson(RakdosPOIs, {
           style: function (feature) {
               return feature.properties.style;
           },
           onEachFeature: function (feature, layer) {
               layer.bindPopup(feature.properties.Title);
           },
           pointToLayer: function(feature,latlng){
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'location-pin', prefix: 'fa', markerColor: 'darkred'}) });
         }   
        }) 
        },
          ]
      },
      {
      group: "Golgari Swarm",
      collapsed: true,
      layers: [
        {
             name: "Test Marker",
             layer: L.marker([40.60471, -74.27431], {
              pointToLayer: function(feature,latlng){
              return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'location-pin', prefix: 'fa', markerColor: 'darkgreen'}) });
          }   
         })
           },
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
      layers: [
        {
          name: "Guildhall",
          icon: iconByName('Izzet'),
          active: true,
          layer: L.geoJson(IzzetGuildhall, {
           style: function (feature) {
               return feature.properties.style;
           },
           onEachFeature: function (feature, layer) {
               layer.bindPopup(feature.properties.Title);
           },
           pointToLayer: function(feature,latlng){
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'landmark-dome', prefix: 'fa', markerColor: 'darkpurple'}) });
         }   
        }) 
        },
        {
          name: "Laboratories",
          icon: iconByName('Izzet'),
          active: true,
          layer: L.geoJson(IzzetLaboratories, {
           style: function (feature) {
               return feature.properties.style;
           },
           onEachFeature: function (feature, layer) {
               layer.bindPopup(feature.properties.Title);
           },
           pointToLayer: function(feature,latlng){
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'vihara', prefix: 'fa', markerColor: 'darkpurple'}) });
         }   
        }) 
        },
        {
          name: "Workshops",
          icon: iconByName('Izzet'),
          active: true,
          layer: L.geoJson(IzzetWorkshops, {
           style: function (feature) {
               return feature.properties.style;
           },
           onEachFeature: function (feature, layer) {
               layer.bindPopup(feature.properties.Title);
           },
           pointToLayer: function(feature,latlng){
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'microscope', prefix: 'fa', markerColor: 'darkpurple'}) });
         }   
        }) 
        },
        {
          name: "Boilerworks",
          icon: iconByName('Izzet'),
          active: true,
          layer: L.geoJson(IzzetBoilerworks, {
           style: function (feature) {
               return feature.properties.style;
           },
           onEachFeature: function (feature, layer) {
               layer.bindPopup(feature.properties.Title);
           },
           pointToLayer: function(feature,latlng){
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'plug', prefix: 'fa', markerColor: 'darkpurple'}) });
         }   
        }) 
        },
        {
          name: "Sewerageworks",
          icon: iconByName('Izzet'),
          active: true,
          layer: L.geoJson(IzzetSewerageworks, {
           style: function (feature) {
               return feature.properties.style;
           },
           onEachFeature: function (feature, layer) {
               layer.bindPopup(feature.properties.Title);
           },
           pointToLayer: function(feature,latlng){
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'faucet', prefix: 'fa', markerColor: 'darkpurple'}) });
         }   
        }) 
        },
        {
          name: "Test & Training Ranges",
          icon: iconByName('Izzet'),
          active: true,
          layer: L.geoJson(IzzetTTR, {
           style: function (feature) {
               return feature.properties.style;
           },
           onEachFeature: function (feature, layer) {
               layer.bindPopup(feature.properties.Title);
           },
           pointToLayer: function(feature,latlng){
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'explosion', prefix: 'fa', markerColor: 'darkpurple'}) });
         }   
        }) 
        },
        {
          name: "Universities",
          icon: iconByName('Izzet'),
          active: true,
          layer: L.geoJson(IzzetUniversities, {
           style: function (feature) {
               return feature.properties.style;
           },
           onEachFeature: function (feature, layer) {
               layer.bindPopup(feature.properties.Title);
           },
           pointToLayer: function(feature,latlng){
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'school', prefix: 'fa', markerColor: 'darkpurple'}) });
         }   
        }) 
        },
        {
          name: "POI's",
          icon: iconByName('Izzet'),
          active: true,
          layer: L.geoJson(IzzetPOIs, {
           style: function (feature) {
               return feature.properties.style;
           },
           onEachFeature: function (feature, layer) {
               layer.bindPopup(feature.properties.Title);
           },
           pointToLayer: function(feature,latlng){
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'location-pin', prefix: 'fa', markerColor: 'darkpurple'}) });
         }   
        }) 
        },
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
      layers: [
        {
          name: "Guildhall",
          icon: iconByName('Simic'),
          active: true,
          layer: L.geoJson(SimicGuildhall, {
           style: function (feature) {
               return feature.properties.style;
           },
           onEachFeature: function (feature, layer) {
               layer.bindPopup(feature.properties.Title);
           },
           pointToLayer: function(feature,latlng){
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'landmark-dome', prefix: 'fa', markerColor: 'darkblue'}) });
         }   
        }) 
        },
        {
          name: "Zonots",
          icon: iconByName('Simic'),
          active: true,
          layer: L.geoJson(SimicZonots, {
           style: function (feature) {
               return feature.properties.style;
           },
           onEachFeature: function (feature, layer) {
               layer.bindPopup(feature.properties.Title);
           },
           pointToLayer: function(feature,latlng){
             return L.marker(latlng,{icon: L.AwesomeMarkers.icon({icon: 'bridge-water', prefix: 'fa', markerColor: 'darkblue'}) });
         }   
        }) 
        },
          ]
      }
    ];
 
var panelLayers = new L.Control.PanelLayers(baseLayers, overLayers, {
selectorGroup: true,
collapsibleGroups: true,
});

map.addControl(panelLayers);