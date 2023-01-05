let idDispo = null
let idGasto = null
let idMonto = null
let idLista = document.getElementById('idLista')
let montoDisponible = document.getElementById('montoDisponible')

function disponible(e){
    if(e.keyCode === 13){
        e.preventDefault()
        idDispo = document.getElementById('idDispo').value
        montoDisponible.innerText = `$${idDispo}`
    }
}

function agregarGasto(){
    idGasto = document.getElementById('idGasto').value
    idMonto = document.getElementById('idMonto').value
    idLista.innerHTML += `<li>
                            <div>
                                <i class="bi bi-cash-coin iconBillete"></i>
                                <span>${idGasto}</span>
                            </div>
                            <div>
                                <span>$${idMonto}</span>
                                <i class="bi bi-trash3 iconTacho"></i>
                            </div>
                          </li>`
}

