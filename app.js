"use strict"

let disponible
let idGasto
let idMonto 
let idLista = document.getElementById('idLista') //asignacion de la lista
let montoIngresos = document.getElementById('montoIngresos') 
let montoGastos = document.getElementById('montoGastos')
let montoDisponible = document.getElementById('montoDisponible')



let diaNoche = document.getElementById('diaNoche')

diaNoche.addEventListener('click', () => {   //funcion que escucha el click y cambia la clase al body
    document.body.classList.toggle('dark')
    diaNoche.classList.toggle('active')
})




let inputDispo = document.getElementById('inputDispo')

const agregar = () => { 
    disponible = parseFloat(inputDispo.value)
    montoIngresos.innerText = `$${disponible}`
    montoDisponible.innerText = `$${disponible-sumaGastos}`
    disponible-sumaGastos >= 0 ? montoDisponible.style.color=`#008000` : montoDisponible.style.color=`#D23D03`
}

inputDispo.addEventListener('focusout',agregar)



let agregarGasto = document.getElementById('agregarGasto')
let sumaGastos = 0

const gasto = () => { 
    idGasto = document.getElementById('idGasto').value
    idMonto = parseFloat(document.getElementById('idMonto').value)
    if(!disponible){
        alert('Primero ingrese su dinero disponible')
    }else{
        if(idMonto > 0 && idGasto != ""){
        sumaGastos += idMonto
        idLista.innerHTML += `<li>
                                <div>
                                    <i class="bi bi-cash-coin iconBillete"></i>
                                    <span>${idGasto}</span>
                                </div>
                                <div>
                                    <span>$${idMonto}</span>
                                    <abbr title='Eliminar Gasto'><i id="eliminarGasto" class="bi bi-trash3 iconTacho"></i></abbr>
                                </div>
                            </li>`
        montoGastos.innerText = `$${sumaGastos}`
        montoDisponible.innerText = `$${disponible-sumaGastos}`
        document.getElementById('idGasto').value = ''
        document.getElementById('idMonto').value = ''
        }else{
            alert('Detalle el gasto correctamente')
        }    
    }
    if((disponible-sumaGastos) < 0){
        montoDisponible.style.color=`#D23D03`
    }
    
}

agregarGasto.addEventListener('click',gasto)



let eliminarGasto = document.getElementById('eliminarGasto')

const eliminar = () => {
    idLista.innerHTML -= `<li>
                            <div>
                                <i class="bi bi-cash-coin iconBillete"></i>
                                <span>${idGasto}</span>
                            </div>
                            <div>
                                <span>$${idMonto}</span>
                                <abbr title='Eliminar Gasto'><i id="eliminarGasto" class="bi bi-trash3 iconTacho"></i></abbr>
                            </div>
                          </li>`
}


eliminarGasto.addEventListener('click',eliminar)
