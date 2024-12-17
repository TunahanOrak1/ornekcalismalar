function ekle(){
    let metinKutusu = document.querySelector('input')
    let liste = document.querySelector('ul')
    let listeElementi = `<li>${metinKutusu.value} <button onclick="this.parentElement.remove()">Kaldır</button></li>`

    if(metinKutusu.value != ""){
    liste.insertAdjacentHTML('beforeend',listeElementi)
    metinKutusu.value = ''
    }else{
        alert('Metin kutusu boş olmamalı')
    }
}

// function ekle(){
//     let metinKutusu = document.querySelector('input');
//     let liste = document.querySelector('ul');
//     let listeElementi = `<li>${metinKutusu.value} <button onclick="this.parentElement.remove()">Kaldır</button></li>`
    
//     if(metinKutusu.value != ""){
//         liste.insertAdjacentHTML('beforeend',listeElementi)
//         metinKutusu.value = ''
//         }else {
//             alert('Metin kutusu boş olmamalı')
//         }
//     }

let metinKutusu =document.querySelector('input')
let liste = document.querySelector('ul')
let listeElementi = `<li>${metinKutusu.value} <button onclick=this.parentElement.remove()">Kaldır`
