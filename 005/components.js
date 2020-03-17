
/**
 * ownerDocument = representa el documento html
 * el nodo principal
 * 
 * cuando se usa document fragment estos no hacen refenecia a aquel node
 * sino a si mismo ya que estos no forman parte del dom principal
 * 
 * ejm:
 * 
<body>
    // todas la etiquetes como son elementos haran referencia a 
    // al documento html completo
    <div id="target">
        <p>hola</p>
    </div>


    <template>
        // todos los elemnetos dentro del template haran referencia a ellos mismos
        // y no saldran
        <div id="target">
            <p>hola</p>
        </div>
    </template>
</body>

 */

const owner = document.getElementById('target').ownerDocument
console.log("owner", owner)
const arrTarget = document.querySelectorAll('#target')
console.log("arrTarget", arrTarget) // esto solo mostrará 
// los elementos que cumplan con el id que esten en el mismo ownerdocument

///////////////////////////////////////////////////////////////////////////////////


const template = document.getElementById('template')
console.log("template", template)

const ownerTemplate = template.content.children[0].ownerDocument
console.log("ownerTemplate", ownerTemplate)