import { mount, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import routes from "@/router/index";
import store from "@/store/index";

import Login from "@/views/Login.vue";

xdescribe("METHOD: Login should", () => {
  it("set apiKey", () => {
    const router = new VueRouter(routes)
    const setApiKey = jest.fn();
    const wrapper = mount(Login, { 
      router,
      store,
      methods: {
        setApiKey,
      },
      data: {
        apiKey: "123"
      }
    })

    wrapper.find("button").trigger("click");

    expect(setApiKey).toBeCalledWith("123");
  });

  it("redirect to Weather", () => {
    const router = new VueRouter(routes)
    const wrapper = mount(Login, { 
      router,
      store
    })
    wrapper.setProps({ apiKey: "123" });
    spyOn(wrapper.vm.$router, 'push');
    
    wrapper.find("button").trigger("click");

    expect(wrapper.vm.$router.push).toBeCalledWith({ name: "Weather" });
  });
});
