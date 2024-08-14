ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-1020258.263173, 4797509.833918, -864745.313046, 4909519.161341]);
var wms_layers = [];

var format_CeiraSerradaLous_0 = new ol.format.GeoJSON();
var features_CeiraSerradaLous_0 = format_CeiraSerradaLous_0.readFeatures(json_CeiraSerradaLous_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CeiraSerradaLous_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CeiraSerradaLous_0.addFeatures(features_CeiraSerradaLous_0);
var lyr_CeiraSerradaLous_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CeiraSerradaLous_0, 
                style: style_CeiraSerradaLous_0,
                popuplayertitle: "Ceira  - Serra da Lousã",
                interactive: true,
                title: '<img src="styles/legend/CeiraSerradaLous_0.png" /> Ceira  - Serra da Lousã'
            });
var format_AntanholRabaal_1 = new ol.format.GeoJSON();
var features_AntanholRabaal_1 = format_AntanholRabaal_1.readFeatures(json_AntanholRabaal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntanholRabaal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntanholRabaal_1.addFeatures(features_AntanholRabaal_1);
var lyr_AntanholRabaal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntanholRabaal_1, 
                style: style_AntanholRabaal_1,
                popuplayertitle: "Antanhol - Rabaçal",
                interactive: true,
                title: '<img src="styles/legend/AntanholRabaal_1.png" /> Antanhol - Rabaçal'
            });
var format_FigdaFozSerradaEstrela_2 = new ol.format.GeoJSON();
var features_FigdaFozSerradaEstrela_2 = format_FigdaFozSerradaEstrela_2.readFeatures(json_FigdaFozSerradaEstrela_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FigdaFozSerradaEstrela_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FigdaFozSerradaEstrela_2.addFeatures(features_FigdaFozSerradaEstrela_2);
var lyr_FigdaFozSerradaEstrela_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FigdaFozSerradaEstrela_2, 
                style: style_FigdaFozSerradaEstrela_2,
                popuplayertitle: "Fig da Foz - Serra da Estrela",
                interactive: true,
                title: '<img src="styles/legend/FigdaFozSerradaEstrela_2.png" /> Fig da Foz - Serra da Estrela'
            });
var format_POIFigueiradafozSerradaEstrela_3 = new ol.format.GeoJSON();
var features_POIFigueiradafozSerradaEstrela_3 = format_POIFigueiradafozSerradaEstrela_3.readFeatures(json_POIFigueiradafozSerradaEstrela_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POIFigueiradafozSerradaEstrela_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POIFigueiradafozSerradaEstrela_3.addFeatures(features_POIFigueiradafozSerradaEstrela_3);
var lyr_POIFigueiradafozSerradaEstrela_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POIFigueiradafozSerradaEstrela_3, 
                style: style_POIFigueiradafozSerradaEstrela_3,
                popuplayertitle: "POI - Figueira da foz - Serra da Estrela",
                interactive: true,
    title: 'POI - Figueira da foz - Serra da Estrela<br />\
    <img src="styles/legend/POIFigueiradafozSerradaEstrela_3_0.png" /> Aldeia<br />\
    <img src="styles/legend/POIFigueiradafozSerradaEstrela_3_1.png" /> Café<br />\
    <img src="styles/legend/POIFigueiradafozSerradaEstrela_3_2.png" /> Combustivel<br />\
    <img src="styles/legend/POIFigueiradafozSerradaEstrela_3_3.png" /> Hotel<br />\
    <img src="styles/legend/POIFigueiradafozSerradaEstrela_3_4.png" /> Jardim<br />\
    <img src="styles/legend/POIFigueiradafozSerradaEstrela_3_5.png" /> Local<br />\
    <img src="styles/legend/POIFigueiradafozSerradaEstrela_3_6.png" /> Local de Visista<br />\
    <img src="styles/legend/POIFigueiradafozSerradaEstrela_3_7.png" /> Parque de Campismo<br />\
    <img src="styles/legend/POIFigueiradafozSerradaEstrela_3_8.png" /> Parque de Merendas<br />\
    <img src="styles/legend/POIFigueiradafozSerradaEstrela_3_9.png" /> Praia Fluvial<br />\
    <img src="styles/legend/POIFigueiradafozSerradaEstrela_3_10.png" /> Restaurante<br />\
    <img src="styles/legend/POIFigueiradafozSerradaEstrela_3_11.png" /> WC<br />'
        });
var format_FigdaFozNazar_4 = new ol.format.GeoJSON();
var features_FigdaFozNazar_4 = format_FigdaFozNazar_4.readFeatures(json_FigdaFozNazar_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FigdaFozNazar_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FigdaFozNazar_4.addFeatures(features_FigdaFozNazar_4);
var lyr_FigdaFozNazar_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FigdaFozNazar_4, 
                style: style_FigdaFozNazar_4,
                popuplayertitle: "Fig da Foz - Nazaré",
                interactive: true,
                title: '<img src="styles/legend/FigdaFozNazar_4.png" /> Fig da Foz - Nazaré'
            });
var format_FigNazarPoi_5 = new ol.format.GeoJSON();
var features_FigNazarPoi_5 = format_FigNazarPoi_5.readFeatures(json_FigNazarPoi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FigNazarPoi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FigNazarPoi_5.addFeatures(features_FigNazarPoi_5);
var lyr_FigNazarPoi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FigNazarPoi_5, 
                style: style_FigNazarPoi_5,
                popuplayertitle: "Fig - Nazaré — Poi",
                interactive: true,
                title: '<img src="styles/legend/FigNazarPoi_5.png" /> Fig - Nazaré — Poi'
            });
var group_FigueiradaFozSerradaEstrela = new ol.layer.Group({
                                layers: [lyr_FigdaFozSerradaEstrela_2,lyr_POIFigueiradafozSerradaEstrela_3,lyr_FigdaFozNazar_4,lyr_FigNazarPoi_5,],
                                fold: "open",
                                title: "Figueira da Foz - Serra da Estrela"});

lyr_CeiraSerradaLous_0.setVisible(true);lyr_AntanholRabaal_1.setVisible(true);lyr_FigdaFozSerradaEstrela_2.setVisible(true);lyr_POIFigueiradafozSerradaEstrela_3.setVisible(true);lyr_FigdaFozNazar_4.setVisible(true);lyr_FigNazarPoi_5.setVisible(true);
var layersList = [lyr_CeiraSerradaLous_0,lyr_AntanholRabaal_1,group_FigueiradaFozSerradaEstrela];
lyr_CeiraSerradaLous_0.set('fieldAliases', {'Nome': 'Nome', 'Descriçã': 'Descriçã', 'Dificuldad': 'Dificuldad', 'Tipo': 'Tipo', '+ Info': '+ Info', });
lyr_AntanholRabaal_1.set('fieldAliases', {'Nome': 'Nome', 'Descriçã': 'Descriçã', 'Dificuldad': 'Dificuldad', 'Tipo': 'Tipo', '+ Info': '+ Info', });
lyr_FigdaFozSerradaEstrela_2.set('fieldAliases', {'Nome': 'Nome', 'Descriçã': 'Descrição', 'Dificuldad': 'Dificuldade', 'Tipo': 'Tipo', '+ Info': '+ Info', });
lyr_POIFigueiradafozSerradaEstrela_3.set('fieldAliases', {'Nome': 'Nome', 'Descriocao': 'Descrição', 'Nome_1': 'Nome_1', 'Tipo': 'Tipo', });
lyr_FigdaFozNazar_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_FigNazarPoi_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CeiraSerradaLous_0.set('fieldImages', {'Nome': 'TextEdit', 'Descriçã': 'TextEdit', 'Dificuldad': 'TextEdit', 'Tipo': 'TextEdit', '+ Info': 'TextEdit', });
lyr_AntanholRabaal_1.set('fieldImages', {'Nome': '', 'Descriçã': 'TextEdit', 'Dificuldad': 'TextEdit', 'Tipo': '', '+ Info': '', });
lyr_FigdaFozSerradaEstrela_2.set('fieldImages', {'Nome': 'TextEdit', 'Descriçã': 'TextEdit', 'Dificuldad': 'TextEdit', 'Tipo': 'TextEdit', '+ Info': 'TextEdit', });
lyr_POIFigueiradafozSerradaEstrela_3.set('fieldImages', {'Nome': 'TextEdit', 'Descriocao': 'TextEdit', 'Nome_1': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_FigdaFozNazar_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_FigNazarPoi_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_CeiraSerradaLous_0.set('fieldLabels', {'Nome': 'inline label - always visible', 'Descriçã': 'inline label - always visible', 'Dificuldad': 'inline label - always visible', 'Tipo': 'inline label - always visible', '+ Info': 'inline label - always visible', });
lyr_AntanholRabaal_1.set('fieldLabels', {'Nome': 'inline label - always visible', 'Descriçã': 'inline label - always visible', 'Dificuldad': 'inline label - always visible', 'Tipo': 'inline label - always visible', '+ Info': 'inline label - always visible', });
lyr_FigdaFozSerradaEstrela_2.set('fieldLabels', {'Nome': 'inline label - always visible', 'Descriçã': 'inline label - always visible', 'Dificuldad': 'inline label - always visible', 'Tipo': 'inline label - always visible', '+ Info': 'inline label - always visible', });
lyr_POIFigueiradafozSerradaEstrela_3.set('fieldLabels', {'Nome': 'no label', 'Descriocao': 'no label', 'Nome_1': 'no label', 'Tipo': 'no label', });
lyr_FigdaFozNazar_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_FigNazarPoi_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_FigNazarPoi_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});