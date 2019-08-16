// components/classic/music/index.js
import { classicBehavior} from '../classic-behavior.js'
Component({
  /**
   * 组件的属性列表
   */
  behaviors:[classicBehavior],
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
     play:'player@play.png',
     pause:'player@pause.png',
     music:'music@tag.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
