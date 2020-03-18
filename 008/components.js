const TEMPLATE_HTML = /*html*/`
    <link rel="stylesheet" href="usercard.css">
    <div class="user-card">
    <img class="user-card__image" />
    <div>
        <h3></h3>
        <div class="info">
            <p><slot name="email" /></p>
            <p><slot name="phone" /></p>
        </div>
        <button id="toggle-info" class="user-card__action">Hide Info</button>
        </div>
    </div>
`

// const templateElement = document.createElement('template')
// templateElement.innerHTML = TEMPLATE_HTML

class UserCard extends HTMLElement{
    static get observedAttributes(){
        return ['name','avatar']
    }
    constructor(){
        super()
        this.templateElement = document.createElement('template')
        this.templateElement.innerHTML = TEMPLATE_HTML
        this.showInfo = true
        this.attachShadow({
            mode:'open'
        })
        this.shadowRoot.appendChild(this.templateElement.content,true)
    }

    attributeChangedCallback(attr,oldValue,newValue){
        if( attr === 'name' ){
            this.shadowRoot.querySelector('h3').innerText = newValue
        }
        if( attr === 'avatar' ){
            this.shadowRoot.querySelector('img').src = newValue
        }
    }

    
    toggleInfo(){
        this.showInfo = !this.showInfo
        const info = this.shadowRoot.querySelector('.info');
        const toggleBtn = this.shadowRoot.getElementById('toggle-info');

        if(this.showInfo) {
            info.style.display = 'block';
            toggleBtn.innerText = 'Hide Info';
        } else {
            info.style.display = 'none';
            toggleBtn.innerText = 'Show Info';
        }
    }
    connectedCallback(){
        this.shadowRoot.getElementById('toggle-info').addEventListener('click', () => this.toggleInfo());
    }
    disconnectedCallback() {
        this.shadowRoot.getElementById('toggle-info').removeEventListener();
    }
}
window.customElements.define('user-card', UserCard);