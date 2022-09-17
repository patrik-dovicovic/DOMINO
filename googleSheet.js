const { GoogleSpreadsheet } = require('google-spreadsheet');
const doc = new GoogleSpreadsheet('1zDsWZ84qFbj_-haLdlHBwTmqoo80RITnfdUFdfaBFQw');

async function readFromSpreadsheet() {
    await doc.useServiceAccountAuth({ client_email: "domino@domino-362615.iam.gserviceaccount.com", private_key: '', });
    await doc.loadInfo();

    const measuresSheet = doc.sheetsByTitle['Measures']
    const configurationSheet = doc.sheetsByTitle['Configuration']
    var measureRows = await measuresSheet.getRows()
    var measureHeaderValues = measuresSheet.headerValues
    var configurationRows = await configurationSheet.getRows()
    var configurationHeaderValues = configurationSheet.headerValues

    var conf_discipliny = []
    conf_discipliny = getConfig(conf_discipliny, [0, 1], configurationRows, configurationHeaderValues)
    var conf_sezony = []
    conf_sezony = getConfig(conf_sezony, [2, 3, 4], configurationRows, configurationHeaderValues)
    var conf_meranie = []
    conf_meranie = getConfig(conf_meranie, [5, 6, 7], configurationRows, configurationHeaderValues)
    var conf_rozdelenie = []
    conf_rozdelenie = getConfig(conf_rozdelenie, [8, 9], configurationRows, configurationHeaderValues)
    var conf_SFZ_Kategoria = []
    conf_SFZ_Kategoria = getConfig(conf_SFZ_Kategoria, [10], configurationRows, configurationHeaderValues)
    var conf_dominoKategoria = []
    conf_dominoKategoria = getConfig(conf_dominoKategoria, [11], configurationRows, configurationHeaderValues)
    var conf_timy = []
    conf_timy = getConfig(conf_timy, [12, 13, 14, 15], configurationRows, configurationHeaderValues)

    console.log(conf_discipliny,conf_sezony,conf_meranie,conf_rozdelenie,conf_SFZ_Kategoria,conf_dominoKategoria,conf_timy)


    // measures = []
    // for (i = 0; i < measureRows.length; i++) {
    //     measures.push({})
    //     for (j = 0; j < measuresSheet.headerValues.length; j++) {
    //         measures[i][measuresSheet.headerValues[j]] = measureRows[i]._rawData[j]
    //     }
    // }
    // measures = measures.filter(player => (player.HracId !== '' && player.NazovMerania !== ''))


}
function getConfig(array, headerValuesArray, rows, columns) {
    for (var i = 0; i < rows.length; i++) {
        array.push({})
        for (var j = 0; j < headerValuesArray.length; j++) {
            array[array.length - 1][columns[headerValuesArray[j]]] = rows[i]._rawData[columns.indexOf(columns[headerValuesArray[j]])]
        }
    }
    return array
}
readFromSpreadsheet()
