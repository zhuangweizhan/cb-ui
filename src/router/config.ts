export const routesConfig = [
  {
    path: "/",
    redirect: "/basic/introduce",
    component: () => import("../views/common/layout.vue"),
    children: [
      {
        path: "/basic/introduce",
        component: () => import("@/views/doc/basic/introduce.vue")
      },
      {
        path: "/basic/update",
        component: () => import("@/views/doc/basic/update.vue")
      }
    ]
  },
  {
    path: "/mobile",
    component: () => import("../views/common/mobile.vue"),
    children: [
      {
        path: "/basic/mobile",
        component: () => import("@/views/doc/basic/mobile.vue")
      }
    ]
  },
  {
    path: "/doc",
    name: "index",
    component: () => import("../views/common/layout.vue"),
    children: [
      {
        path: "/doc/button",
        component: () => import("@/views/doc/components/button/index.vue")
      },
      {
        path: "/doc/input",
        component: () => import("@/views/doc/components/input/index.vue")
      },
      {
        path: "/doc/tag",
        component: () => import("@/views/doc/components/tag/index.vue")
      },
      {
        path: "/doc/checkBox",
        component: () => import("@/views/doc/components/check-box/index.vue")
      },
      {
        path: "/doc/radio",
        component: () => import("@/views/doc/components/radio/index.vue")
      },
      {
        path: "/doc/text",
        component: () => import("@/views/doc/components/text/index.vue")
      }
    ]
  },
  {
    path: "/mobile",
    component: () => import("../views/common/mobile.vue"),
    children: [
      {
        path: "/mobile/button",
        component: () => import("@/views/doc/components/button/mobile.vue")
      },
      {
        path: "/mobile/input",
        component: () => import("@/views/doc/components/input/mobile.vue")
      },
      {
        path: "/mobile/tag",
        component: () => import("@/views/doc/components/tag/mobile.vue")
      },
      {
        path: "/mobile/checkBox",
        component: () => import("@/views/doc/components/check-box/mobile.vue")
      },
      {
        path: "/mobile/radio",
        component: () => import("@/views/doc/components/radio/mobile.vue")
      },
      {
        path: "/mobile/text",
        component: () => import("@/views/doc/components/text/mobile.vue")
      }
    ]
  },
  {
    path: "/404",
    component: () => import("../views/common/404.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("../views/common/404.vue")
  }
]
