const jwt = require('jsonwebtoken')

function execute(operation) {
    var start = new Date()
    var hrstart = process.hrtime()

    
    console.info(`Result: ${operation()}`)
    
    var end = new Date() - start,
        hrend = process.hrtime(hrstart)

    console.info('Execution time: %dms', end)
    console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
}

const secret = 'P1rul0!'
const vencimiento = 120;

const token = jwt.sign({ id: 4, nombre: 'Federico Aloi'}, secret, { expiresIn: vencimiento })
jwt.verify(token, secret) //=
