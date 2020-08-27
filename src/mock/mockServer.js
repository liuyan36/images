/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'

// 返回图片接口
Mock.mock('/acg', {code: 0, data: data.acg})

// export default ??? 不需要暴露任何东西，只需要能保证执行一次就可

