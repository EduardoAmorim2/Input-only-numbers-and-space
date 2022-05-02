function compararNumeros(a, b) {
    return a - b;
}

function ordenar(){

    var input = document.getElementById('numero');
    var array = input.value.split(" ");

    console.log(array);

    if(/[A-z]/.test(input.value) || input.value == ''){
        alert("Dados não não númericos!");
    }
    else{
        document.getElementById("retorno").innerHTML = array.sort(compararNumeros);
    }
}