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
           return L.marker(latlng,{icon: AIcon});
       }   
      })
      },
      {
        name: "Precinct Offices",
        icon: iconByName('Azorius'),
        active: true,
        layer: L.geoJson(AzoriusPrecinctOffice, {
         style: function (feature) {
             return feature.properties.style;
         },
         onEachFeature: function (feature, layer) {
             layer.bindPopup(feature.properties.Title);
         },
         pointToLayer: function(feature,latlng){
           return L.marker(latlng,{icon: AIcon});
       }   
      })
      },
      {
        name: "District Offices",
        icon: iconByName('Azorius'),
        active: true,
        layer: L.geoJson(AzoriusDistrictOffice, {
         style: function (feature) {
             return feature.properties.style;
         },
         onEachFeature: function (feature, layer) {
             layer.bindPopup(feature.properties.Title);
         },
         pointToLayer: function(feature,latlng){
           return L.marker(latlng,{icon: AIcon});
       }   
      })
      },
         {
          name: "Test Marker",
          layer: L.marker([40.57541, -74.21777])
        }
         ]
    },
    {
      group: "Boros Legion",
      collapsed: true,
      layers: [{
        name: "Boros Garrisons",
        icon: iconByName('Boros'),
        active: true,
        layer: L.geoJson(BorosGarrison, {
         style: function (feature) {
             return feature.properties.style;
         },
         onEachFeature: function (feature, layer) {
             layer.bindPopup(feature.properties.Title);
         },
         pointToLayer: function(feature,latlng){
           return L.marker(latlng,{icon: BIcon});
       }   
      })
           },
           {
             name: "Test Marker",
             layer: L.marker([40.57541, -74.21777])
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
      layers: [{
             name: "Test Marker",
             layer: L.marker([40.63903, -74.26952])
           },
           {
             name: "Test Marker",
             layer: L.marker([40.62241, -74.28258])
           }
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