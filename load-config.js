const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1j3FR8pvcyMaZUNfXPLq2bszdNr9dPGoXu9jjbSEaUmg')

const run = async() => {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    console.log(doc.title)

    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A1:B3')
    console.log(sheet.title)

    const mostrarPromocaoCell = sheet.getCell(2, 0)
    console.log(mostrarPromocaoCell.value)

    const textoCell = sheet.getCell(2, 1)
    console.log(textoCell.value)

}

run()