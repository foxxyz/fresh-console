const stdout = process.stdout

const DEFAULT = "\033[m"
const BLUE = "\033[1;36m"
const GREEN = "\033[1;92m"
const GREY = "\033[1;90m"
const YELLOW = "\033[1;33m"
const RED = "\033[1;91m"

function colored(augment, color) {
    stdout.write(color)
    augment.apply(this, Array.prototype.slice.call(arguments, 2))
    stdout.write(DEFAULT)
}

console.debug = colored.bind(this, console.debug, GREY)
console.info = colored.bind(this, console.info, BLUE)
console.success = colored.bind(this, console.log, GREEN)
console.warn = colored.bind(this, console.warn, YELLOW)
console.error = colored.bind(this, console.error, RED)

console.part = {
    debug() { stdout.write(`${GRAY}${[...arguments].join(' ')}${DEFAULT}`) },
    error() { stdout.write(`${RED}${[...arguments].join(' ')}${DEFAULT}`) },
    log() { stdout.write([...arguments].join(' ')) },
    info() { stdout.write(`${BLUE}${[...arguments].join(' ')}${DEFAULT}`) },
    success() { stdout.write(`${GREEN}${[...arguments].join(' ')}${DEFAULT}`) },
    warn() { stdout.write(`${YELLOW}${[...arguments].join(' ')}${DEFAULT}`) }
}

module.exports = console
