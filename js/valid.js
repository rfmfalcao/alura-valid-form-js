export function valid(input) {
    const inputType = input.dataset.type

    if(validators[inputType]) {
        validators[inputType](input)
    }
}   

const validators = {
    birthDate:input => validBirthDate(input)
}

function validBirthDate(input) {
    const dataInput = new Date(input.value)
    let mensagem = ''

    if (!canDrink(dataInput)) {
    mensagem = "voce deve ser maior que 18 anos para se cadastrar"
}

    input.setCustomValidity(mensagem)
}

function canDrink(data) {
    const actualData = new Date()
    const dataCanDrink = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataCanDrink <= actualData
}