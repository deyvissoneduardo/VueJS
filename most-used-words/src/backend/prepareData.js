module.exports = rows => {
    return new Promise( (resolver, reject) => {
        try{
            const words = rows
                .filter(filterValidRow) // filtra linhas validas
                .map(removePunctuation) // remove caracteres
                .map(removeTags) // remove tags
                .reduce(mergeRows) // junta todas as linhas 
                .split(' ') // trasnforma em array 
                .map(word => word.toLowerCase()) 
                .map(word => word.replace('"', ''))
            resolver(words)
        }catch(e){
            reject(e)
        }
    })
}
/***filtra linhas nao validas  */
function filterValidRow(row){
    const notNumber = !parseInt(row.trim())
    const notEmpity = !!row.trim()
    const notInterval = !row.includes('-->')
    return notNumber && notEmpity && notInterval
}

/***remova caracteres de forma global */
const removePunctuation = row => row.replace(/[,?!.-]/g, '')
const removeTags = row => row.replace(/(<[^>]+)>/ig, '').trim()
const mergeRows = (fullText, row) => `${fullText} ${row}`
