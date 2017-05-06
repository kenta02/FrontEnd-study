import {groupBy}from 'lodash/collection'
import people from './people'

const managerGroups = groupBy(people, 'manager')

const root = document.querySelector("#root")
root.innerHTML =`<pre>${JSON.stringify(managerGroups,null,2)}</pre>`

// 注：相対パスを使わないで'lodash/collection'のようにすると/node_modulesにインストールしたnpmのモジュールを指すので、自分のモジュールを読み込むのと区別するには常に'./people'のような相対パスを使用してください。