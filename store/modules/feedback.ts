import {
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from '@/store';
import { FeedbackInterface } from '@/models/feedbackModels';

@Module({
  namespaced: true,
  name: 'feedback',
  store,
  dynamic: true,
})

class FeedbackModule extends VuexModule {
  feedback: FeedbackInterface = {
    status: 0,
    title: 'Title',
    body: 'Body'
  }

  @Mutation
  SET_ITEM (data:FeedbackInterface) {
    this.feedback = data
  }
}

export default getModule(FeedbackModule);