class NotificationElement extends HTMLElement{
    constructor(){
        super()
        this.template = document.getElementById('notification')
    }
    connectedCallback(){
        let cloneDOM = document.importNode(this.template.content,true)
        this.appendChild(cloneDOM)
    }
    attributeChangedCallback(attr,oldValue,newValue){

    }
    static get observedAttributes(){
        return ['']
    }
}

window.customElements.define('x-notification',NotificationElement)