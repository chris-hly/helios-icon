const path = require('path')
const fs = require('fs')
const rootDir = path.join(__dirname, '..')

const reactPath = path.join(rootDir, 'packages/helios-react-icon', 'package.json');
const vuePath = path.join(rootDir, 'packages/helios-vue-icon', 'package.json');

const package = getObject(path.join(rootDir, 'package.json'))
const reactPac = getObject(reactPath)
const vuePac = getObject(vuePath)


reactPac.version = vuePac.version = package.version

function getObject(filePath) {
    const content = fs.readFileSync(filePath).toString()
    return JSON.parse(content)
}

function setFile() {
    fs.writeFileSync(reactPath, JSON.stringify(reactPac))
    fs.writeFileSync(vuePath, JSON.stringify(vuePac))
}

setFile()