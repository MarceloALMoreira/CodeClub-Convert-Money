

const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')


const valueDolar = 5.3
const valueEuro = 5.5
const valueBitCoin = 0.00001

// converter valor do dolar do dia
const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')



    // formatando os valores BR
    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(inputReais)

    // formatando os valores US
    if (select.value === 'US$ Dólar Americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputReais / valueDolar)
    }

    // formatando os valores Euro
    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputReais / valueEuro)
    }
    // formatando os valores BitCoin
    if (select.value === 'BitCoin') {
        currencyValueText.innerHTML = new Intl.NumberFormat('', {
            style: 'currency',
            currency: '',
        }).format(inputReais / valueBitCoin)
    }
    // if (inputReais == '') {
    //     alert()
    // }
}



changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = '../assets/eua.svg'
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = '../assets/dolar.svg'
    }

    if (select.value === 'BitCoin') {
        currencyName.innerHTML = 'BitCoin'
        currencyImg.src = '../assets/bcoins.svg'
    }
    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
