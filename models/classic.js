import {http} from '../util/http.js'

class classicModel extends http{
  getLatest(callBack){
      this.request({
         url:'classic/latest',
         success:(res)=>{
           callBack(res)
           // this._setlastestindex(res.index)
           // let key = this._getKey(res.index)
           // wx.setStorageSync(key, res)
         }
      });
    }

  getPrevious(index, callBack) {
    this.request({
      url: 'classic/' + index + "/previous",
      success: (res) => {
        callBack(res);
      }
    });
  }
}

export{classicModel}