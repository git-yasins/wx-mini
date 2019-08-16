// pages/classic/index.js
import {
  likeModel
} from "../../models/like.js";
import {
  classicModel
} from "../../models/classic.js";
let _likeModel = new likeModel();
let _classicModel = new classicModel();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    first: true,
    latest: true,
    title: "",
    classicData: null,
    like_status: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    _classicModel.getLatest(res => {
      console.log(res);
      this.setData({
        classicData: res,
        likeCount: res.fav_nums,
        likeStatus: res.like_status,
        index: res.index
      });
    });
  },

  onlike: function(behavior) {
    _likeModel.like(
      behavior.detail.behavior,
      this.data.classicData.id,
      this.data.classicData.type
    );
  },

  getClassicLikeStatus: function() {
    _likeModel.getClassicLikeStatus(
      this.data.classicData.id,
      this.data.classicData.type,
      res => {
        this.setData({
          likeCount: res.fav_nums,
          likeStatus: res.like_status
        });
      }
    );
  },

  onPrevious: function() {
    let _index = this.data.classicData.index;
    if (_index == 2) {
      this.setData({
        latest: true,
        first: true
      });
    }
    _classicModel.getPrevious(_index, (data) => {
      this.setData({
        classicData: data
      });
      console.log(data);
    })
  },

  onNext: function() {
    let _index = parseInt(this.data.classicData.index)+2;
    _classicModel.getPrevious(_index, (data) => {
      this.setData({
        classicData:data,
        latest: true,
        first:true
      });
      console.log(data,_index);
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});