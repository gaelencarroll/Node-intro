const fs = require('fs')
const process = require('process')

function cat(url,out){
    fs.readFile(url, 'utf8', function(error,data){
        if (error){
            console.log(`Error: ${url}, ${error}`)
            process.exit(1)
        }
        else{
            console.log(data,out)
        }
    })
}

function handleOutput(text,out){
    if(out){
        fs.writeFile(out, text, 'utf8', function(error){
            if(error){
                console.log(`Error: ${out}, ${error}`)
                process.exit(1)
            }
        })
    }
    else{
        console.log(text)
    }
}

const axios = require('axios')

async function webCat(url,out){
    try{
        let res = await axios.get(url)
        handleOutput(res.data,out)
    }
    catch(error){
        console.log(`Error: ${url}, ${error}`)
        process.exit(1)
    }
}

let out = null
let path = null

if(process.argv[2] === '--out'){
    out = process.argv[3]
    path = process.argv[4]
}
else{
    path = process.argv[2]
}

if([path].slice[0,4] === 'http'){
    webCat(path,out)
}
else{
    cat(path,out)
}