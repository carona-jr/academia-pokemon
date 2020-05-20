const cpf = require('cpf')
const validator = require('validator')

const validateUser = (body) => {
    const formattedCpf = cpf.format(body.cpf)
    if (!validator.isEmail(body.e_mail))
        throw new Error({
            val: false,
            str: 'O email é inválido'
        })

    try {
        cpf.isValid(formattedCpf)
    } catch (e) {
        throw new Error({
            val: false,
            str: 'O cpf é inválido!'
        })
    }
}

module.exports = { validateUser }