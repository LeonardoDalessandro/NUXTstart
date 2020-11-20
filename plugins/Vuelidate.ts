// https://typescript.nuxtjs.org/cookbook/plugins.html#i-inject-into-vue-instances
import Vue from 'vue'
import Vuelidate from 'vuelidate'

declare module 'vue/types/vue' {
  interface Vue {
    $myInjectedFunction(message: string): void
  }
}

Vue.prototype.$myInjectedFunction = (message: string) => console.log(message)