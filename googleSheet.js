const { GoogleSpreadsheet } = require('google-spreadsheet');
const doc = new GoogleSpreadsheet('1zDsWZ84qFbj_-haLdlHBwTmqoo80RITnfdUFdfaBFQw');

async function readFromSpreadsheet() {
    await doc.useServiceAccountAuth({ client_email: "domino@domino-362615.iam.gserviceaccount.com", private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDAIwm6IB6QpzbD\n+h4rYML9IBkozXuoowSUMRr9Zt9FTE/V+3YSj5SxzCV+/d9ZOCui6aKOhKpPqrWC\nOjNT3JfpKbZrnaQJCpu1sgroA5yLYZXUAPx3aVLqpXpWmDv0txPychMndn+Gp0zD\nY+cfqxfLq1FtbZ7KgLZmdRdsf9k/1/6hzllUMj05i2vUcy61F+aXq3/orxu2tNgd\nLCdCY9ZMCxC5nxJY0AjvlAzuk1kaD2B/HG4Rr4/Rdc0Dgq3Ew4fQKuMsqJseUh1L\nHm69SWeJ4+03M6TF8CbZ0GzLrCA9Qz7e9uedXdysSdJdRpyqOTuuTutYjcfpOJnV\nqTujiRQ/AgMBAAECggEANk5Q9AIbEYCpqoe52kHdqwTVB6LYlkgJRceBXOkkJyaU\nFCOgckuR2BUe7f9cjw+gycmmcAjQSHc0GUxQ8J2TdEwdatpiIEoWy6q4iW5n4z9g\nRU1IDoo+7OJ7qxkZLShH44lZn5hPICSOPlWw4FMQBTl1aOwIay0pINlslval1XS9\nnQO37MWhUSC7zWt9pWzcsBg1XumNZHi9YUicPCj7p+r3RY/AY7kkTq7XkjcP0kyQ\nOuqO1QzWkwKdYUx7QbeB/KDyyFGm4MHnnENtBiMgqhClO4r2oSfhRz761mT/YMPB\nTVktUL2g4ruYANotTymLIpayL7nd+jEn22GJNyEv7QKBgQD5lwrkEPEQJZ+B8h7+\n/aKmuQkwGc9MgrGArPxk+pqT9gdNTS4TY8fi1qaD6Hm7Y2BMb6Hm4v/twUZ5pGpK\nmzfrFWLYwfqCBT3OzeIihcLgeO0lhg4psHugLkNspCfXY/XiIVheOX2oFQWESShC\na1LvN6GcU1Vi+QJ5otqSCRTjIwKBgQDFEkNp+oSHKy4tCOPqmkFxTi+VSbP865tV\nCH48tCJY4pmPDR9hhFAsPGqSHCC0kwPtdfAvACTXVemY0c/7bKx5Ws6uvHZmStsn\nlvYkWfarCa0phe18TGB5RspaxpOfDl7IJMKllavKTtP9v7q703Z3vzOFQli+qKXu\nYfv6VtGaNQKBgC2QQVC5Nwi3lZLnXHk4XEULan35eDqDcVwIOFtG1IlGVLbr7Alm\nIctrXCKggfiPf7j0eB3qOsZwjikOtsi/5UlpMg5X+x9ZTZs/QpUCzjykVsaO3m8F\n5MutJmni3dMYUH7jj3pEDIhurf8kS9E0PoOlKD+dhuz2gFksPbKDLej5AoGBAKZa\nxmF9wcXAY5hMeuidEkUtNOmWb8M+t77ODpH7lUrm7a1d7HGLGYpd7bAs4kbMG3Km\nLfve6TqFIU2JP0ID+IvwZawHFwM+iUUgH+OLtben0W7NyS014/I8GbELE64emU/m\nCBFzCLMcW8NFx8GpvcVTt4/z86nt/zP9rpEiHIlJAoGAYXUYLpr7itQDx8uasnlg\nyZxeSHuWxQHI9GXkGDSMxpgkshiraBmxOTTff43RD0t5E7ZJZ6jwaIHwFUrSIUFR\nOhLOoBKaC0ERsr1CcGxVjqL4zUrY4wXfJXMqh3kdhMOIJj2w79Dl2C0YQbmINnSP\n0V6j3Xbm2q20F56j0hv0prw=\n-----END PRIVATE KEY-----\n", });
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
