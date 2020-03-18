const TEMPLATE_HTML = /*html*/`
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/js/all.min.js" ></script>

    <link type="text/css" rel="stylesheet" href="notification.css">
    <div class="notification">
        <p>
            <strong class="notification__icon">
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
        this.template.innerHTML = TEMPLATE_HTML
        this.shadowRoot.appendChild(this.template.content.cloneNode(true))
        this.options = {
            error : {
                linkCss : 'error.css',
                arrClasses : ['fas','fa-times'],
                contentButtons : 'Inetentalo otra vez'
            },
            warning : {
                linkCss : 'warning.css',
                arrClasses : ['fas','fa-exclamation-triangle'],
                contentButtons : 'peligro'
            },
            success : {
                linkCss : 'success.css',
                arrClasses : ['fas','fa-check-double'],
                contentButtons : 'hecho'
            }
        }
        console.log(this.shadowRoot)
    }
    createLinkCss(type){
        const link = document.createElement('link')
        link.type = 'text/css'
        link.rel="stylesheet"
        link.href = this.options[type].linkCss
        return link
    }
    createIcon(type){
        const icon = document.createElement('i')
        icon.classList.add(...this.options[type].arrClasses)
        this.shadowRoot.querySelector('.notification__icon').appendChild(icon)
    }
    attributeChangedCallback(attr,oldValue,newValue){
        if( attr === 'title' ){
            this.shadowRoot.querySelector('.notification__title').textContent = newValue
        }
        if( attr === 'type' ){
            this.shadowRoot.querySelector('.notification').prepend(this.createLinkCss(newValue))
            this.shadowRoot.querySelector('.notification').classList.add(`${newValue}`)
            this.shadowRoot.querySelector('.notification__icon').classList.add(`${newValue}__icon`)
            this.shadowRoot.querySelector('.notification__title').classList.add(`${newValue}__title`)
            this.shadowRoot.querySelector('.notification__body').classList.add(`${newValue}__body`)
            this.renderButtons(newValue)
            this.createIcon(newValue)
        }
    }
    renderButtons(type){
        this.shadowRoot.querySelector('.notification__action').textContent = this.options[type].contentButtons
    }

    connectedCallback(){
    }
    disconnectedCallback() {
    }
}


window.customElements.define('x-notification',NotificationElement)