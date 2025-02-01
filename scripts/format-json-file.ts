import fs from 'node:fs'
import { parseArgs } from 'node:util'

const { values: cliOptions, positionals: cliArgs } = parseArgs({
  options: {
    minify: {
      type: 'boolean',
      default: false,
    },
  },
  allowPositionals: true,
})

;(async () => {
  const [inputFile, outputFile] = cliArgs

  if (!fs.existsSync(inputFile)) {
    console.error(`File ${inputFile} does not exist`)
    process.exit(1)
  }

  const actualOutputFile =
    outputFile ||
    (cliOptions.minify
      ? inputFile.replace('.min.', '.').replace('.json', '.min.json')
      : inputFile.replace('.min.', '.'))

  const fileContent = fs.readFileSync(inputFile, 'utf8')
  const jsonContent = JSON.parse(fileContent)
  const formattedJson = cliOptions.minify ? JSON.stringify(jsonContent) : JSON.stringify(jsonContent, null, 2)
  fs.writeFileSync(actualOutputFile, formattedJson)
})()
