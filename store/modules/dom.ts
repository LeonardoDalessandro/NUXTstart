import {
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from '@/store';

@Module({
  namespaced: true,
  name: 'dom',
  store,
  dynamic: true,
})

class DomModule extends VuexModule {
  windowWidth: number = 0;
  bpLg: number = 1200;
  bpMdLg: number = 1024;
  bpMdSm: number = 768;
  bpSm: number = 480;

  get isBpLg() {
    return this.windowWidth >= this.bpLg;
  }

  get isBpMdLg() {
    return this.windowWidth <= this.bpMdLg;
  }

  get isBpMdSm() {
    return this.windowWidth <= this.bpMdSm;
  }

  get isBpSm() {
    return this.windowWidth <= this.bpSm;
  }

  @Mutation
  SET_ITEM (data: number) {
    this.windowWidth = data
  }  
}

export default getModule(DomModule);
