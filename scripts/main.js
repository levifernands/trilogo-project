const popup = document.querySelector(".popup-wrapper")
function abrir(){
    popup.style.display = "flex"
}

function fechar(){
    popup.style.display = "none"
}


const formularioDescricao = document.querySelector('#description')
const formularioTipo = document.querySelector('#Type')
const formularioResponsavel = document.querySelector('#Name')
const formularioBotao = document.querySelector('#botaoTicket')
const colunaTicket = document.querySelector('.conteudoDentroDaColuna')

const Tickets = []

function mostrarTicket(){

    colunaTicket.innerHTML = ''
    for (Ticket of Tickets){
        const elementoTicket = document.createElement('div')
        elementoTicket.classList.add('Ticket')

        const elementoTipoDoTicket = document.createElement('div')
        elementoTipoDoTicket.classList.add('tipodoticket')
        
        const elementoDescricao = document.createElement('div')
        elementoDescricao.classList.add('descrição')
        
        const elementoResponsavel = document.createElement('div')
        elementoResponsavel.classList.add('nome')
        
        
        const TextoTicket = document.createTextNode(formularioDescricao.value)
        const tipoTicket = document.createTextNode(formularioTipo.options[formularioTipo.selectedIndex].text)
        const ResponsavelTicket = document.createTextNode(formularioResponsavel.options[formularioResponsavel.selectedIndex].text)


        colunaTicket.appendChild(elementoTicket)

             elementoTicket.appendChild(elementoDescricao) 
             elementoTicket.appendChild(elementoTipoDoTicket)
             elementoTicket.appendChild(elementoResponsavel)

                  elementoDescricao.appendChild(TextoTicket)
                  elementoTipoDoTicket.appendChild(tipoTicket)
                  elementoResponsavel.appendChild(ResponsavelTicket)
    }
}

mostrarTicket()

function addTicket(){
    const textoTicket = formularioDescricao.value
    Tickets.push(textoTicket)
    formularioDescricao.value = ''
    mostrarTicket()
}



