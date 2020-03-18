const TEMPLATE_HTML = /*html*/`
    <div class="notfication">
        <p>
            <strong class="notification__icon">
                <i id="icon" class="fas"></i>
            </strong>
        </p>
        <p>
            <strong class="notification__title">
            </strong>
        </p>
        <div class="notification__body">
            <p class="notification__content">
                <slot name="content"></slot>
            </p>
            <p>
                <button class="notification__action"></button>
            </p>
        </div>
    </div>
`
class NotificationElement extends HTMLElement{
    static get observedAttributes(){
        return ['title','type']
    }
    constructor(){
        super()
        this.attachShadow({
            mode:'open'
        })
        this.template = document.createElement('template')
        this.shadowRoot.appendChild(this.template.cloneNode(true))
    }
    createLinkCss(type){
        const link = document.createElement('link')
        link.type = 'text/css'
        link.rel="stylesheet"
        link.href = {
            'error' : 'error.css',
            'warning' : 'warning.css',
            'success' : 'success.css' ,
        }[type]

        return link
    }
    createIcon(type){
        let iconObj ={
            'success': ['fa-times'],
            'warning': ['fa-exclamation-triangle'],
            'error'  : ['fa-check-double']
        }
        this.shadowRoot.getElementById('icon').classList.add(...iconObj[type])
    }
    attributeChangedCallback(attr,oldValue,newValue){
        if( attr === 'title' ){
            this.shadowRoot.querySelector('notification__title').textContent = newValue
        }
        if( attr === 'type' ){
            this.createIcon(type)
            this.shadowRoot.querySelector('notification').prepend(this.createLinkCss(newValue))
            this.shadowRoot.querySelector('notification').classList.add(`${newValue}`)
            this.shadowRoot.querySelector('notification__icon').classList.add(`${newValue}__icon`)
            this.shadowRoot.querySelector('notification__title').classList.add(`${newValue}__title`)
            this.shadowRoot.querySelector('notification__body').classList.add(`${newValue}__body`)
        }
    }

    connectedCallback(){
    }
    disconnectedCallback() {
    }
}


window.customElements.define('x-notification',NotificationElement)