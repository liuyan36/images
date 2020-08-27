/*
直接更新state的多个方法的对象
*/
import Vue from 'vue'

import {
  RECEIVE_ACG,
} from './mutation-types'

export default {
  [RECEIVE_ACG] (state, {acg}) {
    state.acg = acg
  }
}

