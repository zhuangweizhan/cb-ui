import { setupComponents, setupWComponents } from "@/plugins"
import router, { setupRouter } from "@/router"
import { createApp } from "vue"
import App from "./App.vue"

const app = createApp(App)

setupRouter(app)
setupComponents(app)
setupWComponents(app)

router.isReady().then(() => {
  console.log(`router.isReady成功`)
  app.use(router).mount("#app")
})
