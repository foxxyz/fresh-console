#!/usr/bin/env node

import './index.js'

console.debug('👀 For developers only')
console.log('🙈 Don\'t pay attention to me')
console.info('👍 Things are going fine')
console.warn('⚡ I hope you know what you\'re doing')
console.error('🔥 Something went very wrong')
console.success('✅ Successful completion!')

async function run() {
    console.part.info('⏳ For when you\'re waiting...')
    await new Promise(res => setTimeout(res, 1000))
    console.info('And then you\'re done ⌛')

    console.part.debug('Waiting for a debug...')
    await new Promise(res => setTimeout(res, 1000))
    console.debug('Debug completed')

    console.part.error('Waiting for an error...')
    await new Promise(res => setTimeout(res, 1000))
    console.error('Error reported')

    console.part.log('A general log...')
    await new Promise(res => setTimeout(res, 1000))
    console.part.log('Still waiting...')
    await new Promise(res => setTimeout(res, 1000))
    console.log('Logged')

    console.part.warn('About to warn you...')
    await new Promise(res => setTimeout(res, 1000))
    console.warn('You\'ve been warned')

    console.part.success('Running the last test...')
    await new Promise(res => setTimeout(res, 1000))
    console.success('All tests successful')
}
run()
