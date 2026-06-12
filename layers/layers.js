var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_bankkotalama_1 = new ol.format.GeoJSON();
var features_bankkotalama_1 = format_bankkotalama_1.readFeatures(json_bankkotalama_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bankkotalama_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bankkotalama_1.addFeatures(features_bankkotalama_1);
var lyr_bankkotalama_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bankkotalama_1, 
                style: style_bankkotalama_1,
                popuplayertitle: 'bank kota lama',
                interactive: true,
    title: 'bank kota lama<br />\
    <img src="styles/legend/bankkotalama_1_0.png" /> Bank Central Asia<br />\
    <img src="styles/legend/bankkotalama_1_1.png" /> Bank Danamon<br />\
    <img src="styles/legend/bankkotalama_1_2.png" /> Bank Mandiri<br />\
    <img src="styles/legend/bankkotalama_1_3.png" /> Bank Permata<br />\
    <img src="styles/legend/bankkotalama_1_4.png" /> CIMB Niaga<br />\
    <img src="styles/legend/bankkotalama_1_5.png" /> Panin Bank<br />\
    <img src="styles/legend/bankkotalama_1_6.png" /> <br />\
    <img src="styles/legend/bankkotalama_1_7.png" /> Bank Maspion<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_bankkotalama_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_bankkotalama_1];
lyr_bankkotalama_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'amenity': 'amenity', 'name': 'name', 'capacity_p': 'capacity_p', 'building_m': 'building_m', 'building_l': 'building_l', 'building': 'building', 'brand': 'brand', 'addr_full': 'addr_full', 'addr_city': 'addr_city', 'FotoTempat': 'FotoTempat', });
lyr_bankkotalama_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'capacity_p': 'TextEdit', 'building_m': 'TextEdit', 'building_l': 'TextEdit', 'building': 'TextEdit', 'brand': 'TextEdit', 'addr_full': 'TextEdit', 'addr_city': 'TextEdit', 'FotoTempat': 'ExternalResource', });
lyr_bankkotalama_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'amenity': 'inline label - visible with data', 'name': 'inline label - visible with data', 'capacity_p': 'inline label - visible with data', 'building_m': 'no label', 'building_l': 'inline label - visible with data', 'building': 'inline label - visible with data', 'brand': 'inline label - visible with data', 'addr_full': 'inline label - visible with data', 'addr_city': 'inline label - visible with data', 'FotoTempat': 'inline label - visible with data', });
lyr_bankkotalama_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});