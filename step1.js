const fs = require('fs')
const process = require('process')

function cat(path){
    fs.readFile(path, 'utf8', function(error,data){
        if (error){
            console.log(`Error: ${path}, ${error}`)
            process.exit(1)
        }
        else{
            console.log(data)
        }
    })
}

cat(process.argv[2])