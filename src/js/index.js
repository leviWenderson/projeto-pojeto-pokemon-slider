const btnAvancar = document.getElementById('btn-avancar')
const btnVoltar = document.getElementById('btn-voltar')
const cartoes = document.querySelectorAll('.cartao')
let cartaoAtua = 0 

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado') 
    cartaoSelecionado.classList.remove('selecionado')
}

function mostrarCartao(indiceCartao){
    cartoes[cartaoAtua].classList.add('selecionado')
}

btnAvancar.addEventListener('click',()=>{
   if(cartaoAtua === cartoes.length -1) return
   esconderCartaoSelecionado()
    cartaoAtua++
    mostrarCartao(cartaoAtua)
})  

btnVoltar.addEventListener('click',()=>{
    if(cartaoAtua === 0) return
    esconderCartaoSelecionado()
    cartaoAtua--
    mostrarCartao(cartaoAtua)
}) 