document.getElementById("map-visor").innerHTML = `
<img src="../Assets/images/map-ficticious.png" id="app-image" alt="app Image">`
///////////////////////////////////////////////////////////////////////////
function start() {
    const origin = document.getElementById("inputlocation").value
    const destiny = document.getElementById("inputtravel").value

    if ((document.getElementById("inputlocation").value.length < 1) || (document.getElementById("inputtravel").value.length < 1)) {
        alert("ERRO, Os Campos Não foram Prenchidos")
    } else {
        document.getElementById("map-visor").innerHTML = `<iframe width="750" scrolling="no" height="350" frameborder="0" id="map" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?saddr=${origin}&daddr=${destiny}&output=embed"></iframe>`

        document.getElementById("price-input").classList.remove("hidden-2")
        document.getElementById("price-input").innerHTML = `
        <input class="form-control input-distance" id="inputldistance" type="text"
        placeholder="Informe KM Mostrado no Mapa" autofocus>
    <br>
    <input class="form-control input-time" id="inputtime" type="text"
        placeholder="informe o Tempo Mostrado no Mapa">
        <br>
        <center><button type="button" onclick="enviar()" class="btn btn-dark bg-faded btn-calc" id="btn-calc">Calcular</button></center>`

        const Price = document.getElementById("price-trip-info")
        Price.innerHTML = (`${calc.toFixed(2).replace(".", ",")}`)
    }
}

function reset() {
    origin = document.getElementById("inputlocation").value = "";
    destiny = document.getElementById("inputtravel").value = "";
}

function enviar(){
    var distance = Number(document.getElementById("inputldistance").value)
    var time = Number(document.getElementById("inputtime").value)
    if (distance <= 0 || time <= 0) {
        window.alert("ERRO Dados Incorretos!")
    } else {
        var calc = 2 + time * 0.20 + distance * 1.11 + 0.75
        document.getElementById("price-visor").classList.remove("hidden")
    }if (calc <= 5.75) {
             calc = 5.75
        }
        
        const Price = document.getElementById("price-trip-info")
        Price.innerHTML = (`${calc.toFixed(2).replace(".", ",")}`)
}

