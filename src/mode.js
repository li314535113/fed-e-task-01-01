import { init, h } from 'snabbdom'
//1.导入模块
import style from 'snabbdom/modules/style'
import eventlisteners from 'snabbdom/modules/eventlisteners'
//2.注册模块
let patch = init([style, eventlisteners])
let vnode = h('div', {
  style: { backgroundColor: 'yellow' },
  on: { click: evenHander }
}, [h('h1', 'Hello World'), h('p', '这是p标签')])
function evenHander() {
  console.log(this, '我是谁')
}
let app = document.querySelector("#app")
patch(app, vnode)