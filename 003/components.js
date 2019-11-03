class GreetingTagElement extends HTMLElement{
    constructor(){
        super()
        this._render = false
        this._value = 'unknown'
        this._title = document.createElement('h1')
    }
    connectedCallback(){
        this._render = true
        this._title.innerHTML = `hello ${this._value}`
        this.appendChild(this._title)
    }
    attributeChangedCallback(tagName,oldValue,newValue){
        if(tagName==='name')
            this._value = newValue
        if(this._render)
            this._title.innerHTML = `hello ${this._value}`
    }
    disconnectedCallback(){
        this._render = false
    }
    static get observedAttributes(){
        return ['name']
    }
}

window.customElements.define('greeting-tag',GreetingTagElement)