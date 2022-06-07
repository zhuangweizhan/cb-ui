import { button } from "@/components/button"
import { input } from "@/components/input"
import { App } from "vue"

export function setupComponents(app: App<Element>) {
  app.component("CbButton", button)
  app.component("CbInput", input)
}
