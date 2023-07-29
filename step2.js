const fs = require('fs')
const process = require('process')

function cat(url){
    fs.readFile(url, 'utf8', function(error,data){
        if (error){
            console.log(`Error: ${url}, ${error}`)
            process.exit(1)
        }
        else{
            console.log(data)
        }
    })
}




const axios = require('axios')

async function webCat(url){
    try{
        let res = await axios.get(url)
        console.log(res.data)
    }
    catch(error){
        console.log(`Error: ${url}, ${error}`)
        process.exit(1)
    }
}

let url2 = process.argv[2]
if(url2.slice[0,4] === 'http'){
    webCat(url2)
}
else{
    cat(url2)
}