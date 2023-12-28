import { createRouter, createWebHistory } from 'vue-router'
import Welcome from "../views/Welcome"
import Channel from "../views/Channel"


const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome
  },
  {
    path: "/channel",
    name: "Channel",
    component: Channel
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
