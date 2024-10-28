document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    calcularGorjeta();
});

function calcularGorjeta() {
    const conta = parseFloat(document.getElementById('conta').value);
    const gorjetaSelect = parseFloat(document.getElementById('gorjeta').value);
    const gorjetaPersonalizada = parseFloat(document.getElementById('gorjeta-personalizada').value);

    let gorjetaPercentual = gorjetaSelect;
    if (!isNaN(gorjetaPersonalizada) && gorjetaPersonalizada > 0) {
        gorjetaPercentual = gorjetaPersonalizada;
    }

    const valorGorjeta = conta * (gorjetaPercentual / 100);
    const total = conta + valorGorjeta;

    document.getElementById('valor-gorjeta').textContent = valorGorjeta.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
}

function limparCampos() {
    document.getElementById('conta').value = '';
    document.getElementById('gorjeta').value = '5';
    document.getElementById('gorjeta-personalizada').value = '';
    document.getElementById('valor-gorjeta').textContent = '0,00';
    document.getElementById('total').textContent = '0,00';
}