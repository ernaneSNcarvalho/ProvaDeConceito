const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1j3FR8pvcyMaZUNfXPLq2bszdNr9dPGoXu9jjbSEaUmg')

const run = async() => {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    await sheet.addRow({
        Nome: 'Francis Dhiene',
        Email: 'francisdhene@yahoo.com.br',
        Whatsapp: '3499999999',
        Cupom: 'aaaa11111',
        Promo: 'afadadafadfa'
    })
}

run()