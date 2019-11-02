class GreetingTagElement extends HTMLElement{
    constructor(){
        super()
        this.greet = 'hello'
    }
    // Esta funcion se ejecutara cuando se conecte el componente
    // es decir cuando el componente se agrege al DOM principal de la página
    connectedCallback(){
        const bold = document.createElement('strong')
        bold.innerHTML = this.greet
        this.appendChild(bold)
    }

    disconectedCallback(){

    }

    attributeChangedCallback(valueChange,oldValue,newValue){
        console.log(`${valueChange} = ${oldValue} -> ${newValue}`)
    }
}


window.customElements.define('greeting-tag',GreetingTagElement)