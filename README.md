# **Web Components**

Es la agrupación de la vista (html + css) y la lógica (js) en forma modularizada.
Son agnosticas a los frameworks

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

```js
    // npm i live-server -D
    // npx live-server
```
