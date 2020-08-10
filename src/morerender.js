import { h, init } from 'snabbdom'
// var snabbdom = require('snabbdom')
let patch = init([])
let vnode = h('div#container.cls', 'Hello world')
let app = document.querySelector("#app")
let oldVnode = patch(app, vnode)
vnode = h('div', [h('h1', 'Hello snabbdom'), h('p', 'niubi')])
oldVnode = patch(oldVnode, vnode)
setTimeout(() => {
  patch(oldVnode, h('!'))
}, 2000)
