import core from '@actions/core'

const name = core.getInput('name')
console.log(`Hello ${name}!`)
