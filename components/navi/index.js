// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    first: Boolean,
    latest: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    left: "images/triangle@left.png",
    right: "images/triangle@right.png",
    disLeft: "images/triangle.dis@left.png",
    disRight: "images/triangle.dis@right.png",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onNext: function(event) {
      if (this.properties.latest) {
        this.triggerEvent("next", {}, {});
      }
    },
    onPrevious: function(event) {
      if (this.properties.first) {
        this.triggerEvent("previous", {}, {});
      }
    }
  }
})