// const html = document.documentElement
// const firstNode = document.firstChild
// const firstElementChildNode = document.firstElementChild
// const lastNode = document.lastChild
// const lastElementChildNode = document.lastElementChild

// // console.log(document);
// // console.log(html);
// // console.log(firstNode);
// // console.log(firstElementChildNode)
// // console.log(lastNode);
// // console.log(lastElementChildNode);

// if(document.body.nodetype === Node.ELEMENT_NODE){
//     alert("Node is an element")
// }

const p = document.getElementById("#subject")
const create = document.createElement("p")

/**create id attribute */
// const id = document.createAttribute('id')
// id.value = 'int141'
// create.setAttributeNode(id)
create.setAttribute("id" , "int141")

create.textContent = "INT141"

document.body.appendChild(create)