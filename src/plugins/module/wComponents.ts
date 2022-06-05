import card from "@/wComponents/card.vue"
import mobile from "@/wComponents/mobile.vue"
import mobileCard from "@/wComponents/mobileCard.vue"
import mobileHeader from "@/wComponents/mobileHeader.vue"
import page from "@/wComponents/page.vue"
import preview from "@/wComponents/preview.vue"
import table from "@/wComponents/table.vue"
import title from "@/wComponents/title.vue"
import { App } from "vue"

export function setupWComponents(app: App<Element>) {
  app.component("WPage", page)
  app.component("WTitle", title)
  app.component("WCard", card)
  app.component("WTable", table)
  app.component("WPreview", preview)

  app.component("WMobile", mobile)
  app.component("MHeader", mobileHeader)
  app.component("MCard", mobileCard)
}
