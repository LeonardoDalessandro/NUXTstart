import {
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from '@/store';
import { AuthInterface } from '@/models/authModels';

@Module({
  namespaced: true,
  name: 'auth',
  store,
  dynamic: true,
})

class AuthModule extends VuexModule {
  auth: AuthInterface = {
    token: ''
  }

  @Mutation
  SET_ITEM (data:AuthInterface) {
    this.auth = data
  }
}

export default getModule(AuthModule);
