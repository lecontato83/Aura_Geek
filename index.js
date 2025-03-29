function somar(){
    var n = document.getElementById('txt')
    var n1 = Number(n.value)
    n1.toFixed(2)
    var res = document.getElementById('res')
    var m = 0
  
    if(n.value.length == 0){
        window.alert(`[erro] Favor verificar os dados`)
    }
    res.innerHTML = ``
   
    for(c=n1;m<11;m++){
    let item = document.createElement('p')
    item.innerHTML = `${c} + ${m} = ${c+m}`
    res.appendChild(item)  
    }
}

function subtrair(){
    var n = document.getElementById('txt')
    var n1 = Number(n.value)
    var res = document.getElementById('res')
    var m = 0
  
    if(n.value.length == 0){
        window.alert(`[erro] Favor verificar os dados`)
    }
    res.innerHTML = ``
   
    for(c=n1;m<11;m++){
    let item = document.createElement('p')
    item.innerHTML = `${c} - ${m} = ${c-m}`
    res.appendChild(item)  
    }
}

function multiplicar(){
    var n = document.getElementById('txt')
    var n1 = Number(n.value)
    var res = document.getElementById('res')
    var m = 0
  
    if(n.value.length == 0){
        window.alert(`[erro] Favor verificar os dados`)
    }
    res.innerHTML = ``
   
    for(c=n1;m<11;m++){
    let item = document.createElement('p')
    item.innerHTML = `${c} x ${m} = ${c*m}`
    res.appendChild(item)  
    }
}

function dividir(){
    var n = document.getElementById('txt')
    var n1 = Number(n.value)
    var res = document.getElementById('res')
    var m = 0
     
    if(n.value.length == 0){
        window.alert(`[erro] Favor verificar os dados`)
    }
    res.innerHTML = ``
   
    for(c=n1;m<11;m++){
    let n2 = (c/m).toPrecision(2)
    let item = document.createElement('p')
    item.innerHTML = `${c} / ${m} = ${n2}`
    res.appendChild(item)  
    }
}
   