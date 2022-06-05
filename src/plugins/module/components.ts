import { button } from "@/components/button"
import { App } from "vue"

export function setupComponents(app: App<Element>) {
  app.component("CbButton", button)
}
