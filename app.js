const fs = require('fs')
const path = require('path')

function giveMeFiles(dir) {
  const allFiles = fs.readdirSync(dir)
  for (let i = 0; i < allFiles.length; i++) {
    let name = dir + '/' + allFiles[i]
    if (fs.statSync(name).isDirectory()) {
      giveMeFiles(name)
    }
  }

  //   console.log(allFiles.filter((file) => path.extname(file) === '.json'))

  const jsons = allFiles.filter((file) => path.extname(file) === '.json')
  console.log(jsons)

  jsons.forEach((file) => {
    const fileData = fs.readFileSync(path.join(__dirname, file))

    const json = JSON.parse(fileData)
    const string = JSON.stringify(json)
    const rexpr = 'nodetest'

    console.log(string.match(rexpr))
    console.log(string.replace(/nodetest/gi, 'nodetest Mykola'))
  })
}

giveMeFiles(__dirname)
