import { button } from "@/components/button"
import { checkBox } from "@/components/check-box"
import { input } from "@/components/input"
import { radio, radioGroup } from "@/components/radio"
import { tag } from "@/components/tag"
import { text } from "@/components/text"
import { App } from "vue"

export function setupComponents(app: App<Element>) {
  app.component("CbButton", button)
  app.component("CbInput", input)
  app.component("CbTag", tag)
  app.component("CbCheckBox", checkBox)
  app.component("CbRadio", radio)
  app.component("CbRadioGroup", radioGroup)
  app.component("CbText", text)
}
