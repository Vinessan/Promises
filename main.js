//RESOLVE
new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Finalizado!"),5000)
}).then(result => {
    document.querySelector("main").innerHTML = "<h1>Carregamento Completo!</h1>"
}).catch(err => {
    alert("Erro no Carregamento da Página!")    
})

//REJECT!
// new Promise(functio(resolve, reject) {
//    setTimeout(() => reject("Finalizado!"), 5000)
//}).then(result => {
//    document.querySelector("main").innerHTML = "<h1>Carregamento Completo</h1>" 
//}). catch(err => {
//    alert("Erro no Carregamento da Página")
//})