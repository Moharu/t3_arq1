"use strict"
// The ship consumes 1g of fuel for 1 parsec
// for each asteroid field, add +5g of fuel consumption

const readline = require('readline')
const rl = readline.createInterface({input: process.stdin, output: process.stdout})
const fs = require('fs')

const INTRO_TEXT = "João Vítor Bianchi Teló \n Cartão 00261602 \n"
const FILENAME_INPUT_MESSAGE = "Qual o arquivo de entrada? \n"
const READFILE_MESSAGE = "Lendo o arquivo..."
const FILE_NOT_FOUND_MESSAGE = "Arquivo não encontrado!"

const INPUT_EXTENSION = '.PLA'
const OUTPUT_EXTENSION = '.RES'
const ENCODING = 'utf-8'

rl.question(FILENAME_INPUT_MESSAGE, (answer) => {
    answer = answer.trim()
    answer += answer.endsWith(INPUT_EXTENSION) ? '' : INPUT_EXTENSION
    let filename = answer
    console.log(READFILE_MESSAGE)
    fs.readFile(filename, ENCODING, (error, fileContent) => {
        if(error){
            return console.log(filename, FILE_NOT_FOUND_MESSAGE)
        }
        fileContent = fileContent.trim()
            .split('\n')
            .map(e => e.split(' '))
        console.log(fileContent)
    })
    rl.close()
})
