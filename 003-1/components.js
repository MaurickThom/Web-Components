class RandomImage extends HTMLElement{

    constructor(){
        super()
    }
    connectedCallback(){
        const img = document.createElement('img')
        img.setAttribute('src','https://loremflickr.com/320/240')
        this.appendChild(img)
    }
}

window.customElements.define('random-image',RandomImage)