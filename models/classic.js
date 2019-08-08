import {http} from '../util/http.js'

class classicModel extends http{
    getLatest(callback){
      this.request({
         url:'classic/latest',
         success:(res)=>{
            callback(res)
           // this._setlastestindex(res.index)
           // let key = this._getKey(res.index)
           // wx.setStorageSync(key, res)
         }
      });
    }
}

export{classicModel}