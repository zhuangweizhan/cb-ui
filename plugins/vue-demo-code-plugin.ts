import { baseParse } from "@vue/compiler-core"
import fs from "fs"
const vitePluginVue = {
  name: "webdoc",
  transform(code, id) {
    if (!/\/src\/components\/(.*)\/demo\/.*\.demo\.vue/.test(id) || !/vue&type=webdoc/.test(id)) {
      return
    }
    const path = `.${id.match(/\/src\/components\/(.*)\/demo\/.*\.demo\.vue/)[0]}`

    const file = fs.readFileSync(path).toString()

    const parsed = baseParse(file).children.find(n => n.tag === "webdoc")
    const titleObj = parsed.children.find(item => {
      return item.tag === "title"
    })

    const remarkObj = parsed.children.find(item => {
      return item.tag === "remark"
    })

    const title = titleObj ? titleObj.loc.source.replace("<title>", "").replace("</title>", "") : ""
    const remark = remarkObj ? remarkObj.loc.source.replace("<remark>", "").replace("</remark>", "") : ""

    const main = file
      .split(parsed.loc.source)
      .join("")
      .trim()

    return `export default function (Component) {
      Component.__sourceCode = ${JSON.stringify(main)}
      Component.__sourceTitle = ${JSON.stringify(title)}
      Component.__sourceRemark = ${JSON.stringify(remark)}
    }`.trim()
  }
}

export default vitePluginVue
