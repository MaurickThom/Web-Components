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

    disconnectedCallback(){

    }

    attributeChangedCallback(valueChange,oldValue,newValue){
        console.log(`${valueChange} = ${oldValue} -> ${newValue}`)
    } 

    // Algo interesante es cuando el componente se esta construyendo en el DOM
    // primero se ejecutará esta función y luego el constructor
<<<<<<< HEAD
    // es diferente al ngOnInit de Angular ya que en angular primero se ejecuta el contructor
    // y luego el ngOnInit 
=======
>>>>>>> e68f2aa4a50fde364a19063920a20d16d27aa3ec
    static get observedAttributes(){
        return ['name']
    }
}


window.customElements.define('greeting-tag',GreetingTagElement)
