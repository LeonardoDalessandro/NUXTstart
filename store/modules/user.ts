import {
  getModule,
  Module,
  Mutation,
  Action,
  VuexModule,
} from 'vuex-module-decorators';
import store from '@/store';
import { UserInterface } from '@/models/userModels';

import { UsersService } from '@/services/userService'


@Module({
  namespaced: true,
  name: 'user',
  store,
  dynamic: true,
})

class UserModule extends VuexModule {
  currentUser: UserInterface = {
    id: 0,
    role: 0,
    name: '',
    email: ''
  }

  @Mutation
  SET_ITEM (data:UserInterface) {
    this.currentUser = data
  }

  @Action
  getCurrent () {
    /*
    return UsersService.getCurrent()
      .then(user => this.context.commit('SET_ITEM', user.data))
      .catch(error => this.context.commit('feedback/SET_ITEM', { status: 2, body: error.message }, { root: true }))
    */

    return null
  }
}

export default getModule(UserModule);