import fs from 'fs'
import readline from 'readline'

export function readFile() {
  let data = ''
  const readStream = fs.createReadStream('business-data.csv', 'utf-8')
  readStream.on('error', (error) => console.log(error.message))

  readStream.on('data', (chunk) => (data += chunk))
  readStream.on('end', () => {
    console.log('data is', data)
    console.log('Reading complete')
  })
}

export function readAndParse() {
  let counter = 0
  const readStream = fs.createReadStream('business-data.csv', 'utf-8')
  const rl = readline.createInterface({ input: readStream })
  rl.on('line', (line) => {
    const foundReact = line.toLowerCase().includes('react')
    if (foundReact) {
      counter++
    }
  })

  rl.on('error', (error) => console.log(error.message))
  rl.on('close', () => {
    console.log('counter', counter)
    console.log('Reading complete')
  })
}
