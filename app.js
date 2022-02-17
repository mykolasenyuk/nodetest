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
    const rexpr = /["]+[n]+[a]+[m]+[e]+["]+[:]+["]+[a-z]+["]/

    // let regexp = /\w+/g
    // console.log(regexp)
    // regexp.lastIndex = 9
    // const word = regexp.exec(string)
    // console.log(word)

    const result = string.match(rexpr)
    console.log(result)
    console.log(string.replace(rexpr, "'name': 'Mykola'"))
  })
}

giveMeFiles(__dirname)
