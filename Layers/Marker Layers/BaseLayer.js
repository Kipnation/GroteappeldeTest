var baseLayers = [{name: "Groteappelde",
		   layer: osmLayer
		 }]

var panelLayers = new L.Control.PanelLayers(baseLayers, overLayers, {
selectorGroup: true,
collapsibleGroups: true,
});
            
map.addControl(panelLayers);