const stdout = process.stdout

const DEFAULT = '\x1b[m'
const BLUE = '\x1b[1;36m'
const GREEN = '\x1b[1;92m'
const GREY = '\x1b[1;90m'
const YELLOW = '\x1b[1;33m'
const RED = '\x1b[1;91m'

function colored(augment, color, ...args) {
    stdout.write(color)
    augment.apply(this, args)
    stdout.write(DEFAULT)
}

console.debug = colored.bind(this, console.debug, GREY)
console.info = colored.bind(this, console.info, BLUE)
console.success = colored.bind(this, console.log, GREEN)
console.warn = colored.bind(this, console.warn, YELLOW)
console.error = colored.bind(this, console.error, RED)

console.part = {
    debug: colored.bind(stdout, stdout.write, GREY),
    error: colored.bind(stdout, stdout.write, RED),
    log: colored.bind(stdout, stdout.write, DEFAULT),
    info: colored.bind(stdout, stdout.write, BLUE),
    success: colored.bind(stdout, stdout.write, GREEN),
    warn: colored.bind(stdout, stdout.write, YELLOW),
}

export default console
