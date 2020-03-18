class NotificationElement extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({
            mode : "open"
        })
        this.template = document.getElementById('notification')
        this.notification = document.importNode(this.template.content,true)
    }
    connectedCallback(){
        this.shadowRoot.appendChild(this.notification)
        // console.log(this);
    }
    attributeChangedCallback(attr,oldValue,newValue){

        // if( attr === 'title' ){
        //     this.notification.querySelector('.error__title').innerText = newValue
        // }
    }
    static get observedAttributes(){
        return ['']
    }
}

window.customElements.define('x-notification',NotificationElement)