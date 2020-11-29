function start() {
    const location = Number(document.getElementById("inputlocation").value)
    const travel = Number(document.getElementById("inputtravel").value)
    if (location <= 0 || travel <= 0) {
        window.alert("[ERRO] Verifique se todos os campos foram prenchidos!")
    } else {
        var calc = 2 + travel * 0.20 + location * 1.11 + 0.75
        document.getElementById("price-visor").classList.remove("hidden")
    }if (calc <= 5.75) {
             calc = 5.75
        }
        
        const Price = document.getElementById("price-trip-info")
        Price.innerHTML = (`${calc.toFixed(2).replace(".", ",")}`)
    }

function reset(){
    document.getElementById("price-visor").classList.add("hidden") 
}
