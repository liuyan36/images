/*
Action:通过操作mutation间接更新state的多个方法的对象
 */
import {
  RECEIVE_ACG
} from './mutation-types'

import {
  reqShopAcg
} from '../api'

export default {
  async getShopAcg ({commit}, callback) {
    const result = await reqShopAcg()
    if (result.code === 0) {
      const acg = result.data
      commit(RECEIVE_ACG, {acg})
      // 数据更新了，通知组件
      callback && callback()
    }
  }
}
