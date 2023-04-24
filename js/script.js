

const button = document.getElementById('convert-button')


const valueDolar = 5.2

// converter valor do dolar do dia
const convertValues = () => {
    const input = document.getElementById('input-real').value
    inputValues = parseInt(input).toFixed(1)
    console.log(parseInt(inputValues) / valueDolar)
}

// ouvindo o click do buttton e chamando a function
button.addEventListener('click', convertValues)
