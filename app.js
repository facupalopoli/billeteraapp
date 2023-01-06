let idDispo = 0
let idGasto = null
let idMonto = 0
let idLista = document.getElementById('idLista')
let montoIngresos = document.getElementById('montoIngresos')
let montoGastos = document.getElementById('montoGastos')
let montoDisponible = document.getElementById('montoDisponible')

let diaNoche = document.getElementById('diaNoche')
diaNoche.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    diaNoche.classList.toggle('active')
})



function agregarDisponible(e){
    if(e.keyCode === 13){
        e.preventDefault()
        idDispo = parseFloat(document.getElementById('idDispo').value)
        montoIngresos.innerText = `$${idDispo}`
        montoDisponible.innerText = `$${idDispo}`
    }
}

let sumaGastos = 0
function agregarGasto(){
    idGasto = document.getElementById('idGasto').value
    idMonto = parseFloat(document.getElementById('idMonto').value)
    sumaGastos += idMonto
    idLista.innerHTML += `<li>
                            <div>
                                <i class="bi bi-cash-coin iconBillete"></i>
                                <span>${idGasto}</span>
                            </div>
                            <div>
                                <span>$${idMonto}</span>
                                <i onclick="eliminarGasto()" class="bi bi-trash3 iconTacho"></i>
                            </div>
                          </li>`
    montoGastos.innerText = `$${sumaGastos}`
    montoDisponible.innerText = `$${idDispo-sumaGastos}`
    if((idDispo-sumaGastos) < 0){
        montoDisponible.style.color=`#D23D03`
    }
}

function eliminarGasto(){
    idLista.innerHTML -= `<li>
                            <div>
                                <i class="bi bi-cash-coin iconBillete"></i>
                                <span>${idGasto}</span>
                            </div>
                            <div>
                                <span>$${idMonto}</span>
                                <i onclick="eliminarGasto()" class="bi bi-trash3 iconTacho"></i>
                            </div>
                          </li>`
}
