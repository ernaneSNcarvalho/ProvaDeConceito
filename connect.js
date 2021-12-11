const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1j3FR8pvcyMaZUNfXPLq2bszdNr9dPGoXu9jjbSEaUmg')

const run = async() => {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    console.log(doc.title)
}

run()