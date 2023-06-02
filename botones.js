
document.getElementById("btresumen").onclick = function calculoPrecioFinal() {
    
    var cantidad = parseInt(document.getElementById("Input4").value);
    var categoria = parseFloat(document.getElementById("select").value);
    const precio = 200;
    var x = (precio * cantidad) * categoria;
    document.getElementById("importe").textContent = `Su Importe sera de $${x}`
}

document.getElementById("btborrar").onclick = function borrarTodo() {

    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
      if (input.type !== 'submit' && input.type !== 'button' && input.type !== 'reset') {
        input.value = input.defaultValue;
      }
      document.getElementById("importe").textContent = `Su Importe sera de $200`
    });
    
  }
  