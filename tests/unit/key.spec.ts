import { mount, createLocalVue } from "@vue/test-utils"
import App from "@/App.vue"
import VueRouter from "vue-router"
import routes from '@/router/index'
import store from '@/store/index'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('On app loaded should', () => {
  // TODO: Find out why the router does not redirect if using store values
  xit('redirect to Login page', async () => {
    const router = new VueRouter(routes)
    const wrapper = mount(App, { 
      localVue,
      router,
      store
    })
    store.state.apiKey = '';

    router.push('/')
    await wrapper.vm.$nextTick()

    expect(router.currentRoute.path).toBe('/Login')
  })

  it('allow to access if authorized', async () => {
    const router = new VueRouter(routes)
    const wrapper = mount(App, { 
      localVue,
      router
    })
    store.state.apiKey = '123';

    router.push('/')
    await wrapper.vm.$nextTick()

    expect(router.currentRoute.path).toBe('/')
  })
})