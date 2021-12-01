var wms_layers = [];


        var lyr_OpenStreetMapfr_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap.fr',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors, under ODbL</a>',
                url: 'http://a.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
            })
        });
var format_liste_tablissements_erasmus_1 = new ol.format.GeoJSON();
var features_liste_tablissements_erasmus_1 = format_liste_tablissements_erasmus_1.readFeatures(json_liste_tablissements_erasmus_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_liste_tablissements_erasmus_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_liste_tablissements_erasmus_1.addFeatures(features_liste_tablissements_erasmus_1);
var lyr_liste_tablissements_erasmus_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_liste_tablissements_erasmus_1,
maxResolution:28004.466152261964,
 
                style: style_liste_tablissements_erasmus_1,
                interactive: true,
                title: '<img src="styles/legend/liste_tablissements_erasmus_1.png" /> liste_établissements_erasmus'
            });

lyr_OpenStreetMapfr_0.setVisible(true);lyr_liste_tablissements_erasmus_1.setVisible(true);
var layersList = [lyr_OpenStreetMapfr_0,lyr_liste_tablissements_erasmus_1];
lyr_liste_tablissements_erasmus_1.set('fieldAliases', {'Mobilité en Europe': 'Mobilité en Europe', 'Mobilité hors Europe': 'Mobilité hors Europe', 'Etablissement d\'enseignement supérieur': 'Etablissement', 'Code postal': 'Code postal', 'Ville': 'Ville', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'field_9': 'field_9', });
lyr_liste_tablissements_erasmus_1.set('fieldImages', {'Mobilité en Europe': 'CheckBox', 'Mobilité hors Europe': 'CheckBox', 'Etablissement d\'enseignement supérieur': 'TextEdit', 'Code postal': 'Hidden', 'Ville': 'Hidden', 'Adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'field_9': 'Hidden', });
lyr_liste_tablissements_erasmus_1.set('fieldLabels', {'Mobilité en Europe': 'inline label', 'Mobilité hors Europe': 'inline label', 'Etablissement d\'enseignement supérieur': 'inline label', 'Adresse': 'inline label', });
lyr_liste_tablissements_erasmus_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});