class GreetingTagElement extends HTMLElement{
    constructor(){
        super()
        this._render = false
        this._value = 'unknown'
        this._title = document.createElement('h1')
        console.log('constructor');
    }
    // despues del constructor
    connectedCallback(){
        console.log('se conecto con el dom principal');
        this._render = true
        this._title.innerHTML = `hello ${this._value}`
        this.appendChild(this._title)
    }
    // este funcion se ejecutará cuando los atributos cambien
    // reciviendo co,mo parametro el nombre del atributo que se este cambiando
    // el valor antiguo y el nuevo
    attributeChangedCallback(attrName,oldValue,newValue){
        console.log("GreetingTagElement -> attributeChangedCallback -> newValue", newValue)
        console.log("GreetingTagElement -> attributeChangedCallback -> oldValue", oldValue)
        console.log("GreetingTagElement -> attributeChangedCallback -> attrName", attrName)
        console.log('attributeChangedCallback');
        if(attrName==='name')
            this._value = newValue
        if(this._render)
            this._title.innerHTML = `hello ${this._value}`
    }
    disconnectedCallback(){
        console.log('disconnectedCallback');
        this._render = false
    }
    // primero en ejecutarse antes del contructor
    static get observedAttributes(){
        console.log('observedAttributes')
        return ['name']
    }
}

window.customElements.define('greeting-tag',GreetingTagElement)