const url = `${window.location.protocol}//${window.location.hostname}/api/gop`
export default {
  microUrl: "/gateway/main",
  // imageUrl: "/",
  homePage: "/work/index", //项目首页
  // imageUrl: process.env.VITE_APP_IMAGE_URL,
  imageUrl: import.meta.env.VITE_APP_IMAGE_URL
}
