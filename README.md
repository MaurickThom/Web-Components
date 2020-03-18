# **Web Components**

conjunto de APIs para crear etiquetas personalizables con la funcion de agurpar la vista (html + css) y la lógica (js) de
manera modularizada y/o encapsulada.
Son agnosticas a los frameworks.

Los Web Components utilizan 3 APIs definidas por W3C :

- **Shadow DOM** : aislar el DOM de nuestro componente con los otros componentes para no caer en conflictos, es decir los estilos , logica 
                    de nuestro componente no sean afectados o no afecten a otros.
- **HTML TEMPLATES** : Estas no permiten definir plantillas personalizadas HTML sin que estas se renderizen en el DOM hasta que no sea el momento oportuno
- **CUSTOM ELEMENTS** : Lo que permite es asociar una etiqueta(HTML Template) a la clase que se ha definido para nuestro componente

```js
    class HelloHorld extends HTMLElement{

    }
    window.customElement.define('hello',HelloWorld)

```

## **Ciclo de vida (LifeCycle Methods)**

- **observedAttributes**
- **constructor**
- **connectedCallback**
- **disconnectedCallback**
- **attributeChangedCallback**

```js
    // npm i live-server -D
    // npx live-server
```

## Referencia

- [https://www.webcomponents.org/](https://www.webcomponents.org/)
- [https://github.com/w3c/webcomponents](https://github.com/w3c/webcomponents)
- [https://custom-elements-everywhere.com/](https://custom-elements-everywhere.com/)
- [https://lit-element.polymer-project.org/](https://lit-element.polymer-project.org/)