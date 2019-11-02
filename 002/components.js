class GreetingTagElement extends HTMLElement{
    constructor(){
        super()
        this.render = false
        this.greet = 'hello world'
    }
    connectedCallback(){
        this.render = true
        this.innerHTML = this.greet
    }

    disconnectedCallback(){
        this.render = false
    }
    attributeChangedCallback(tagValue,oldValue,newValue){
        if(tagValue==="name")
            this.greet = `hello ${newValue}`
        if(this.render)
            this.innerHTML = this.greet
    }
    static get observedAttributes(){
        return ['name']
    }
    
}

window.customElements.define('greeting-tag',GreetingTagElement)