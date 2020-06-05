const toArr = (body) => {
    return new Promise((resolve, reject) => {
        try {
            const keys = Object.keys(body)
            let values = []
            const obj = keys.map(value => {
                let newValue

                if (typeof body[value] === 'string' && value !== 'password')
                    newValue = body[value].trim().toLowerCase()
                else
                    newValue = body[value]
                return values.push(newValue)
            })
            console.log(values)
            resolve(values)
        } catch (e) {
            reject()
        }
    })
}

module.exports = toArr