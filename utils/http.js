import {config} from '../config.js'

class http{
   request(param){
     if(!param.method){
       param.method='GET';
     }
      wx.request({
        url: config.baseUrl+param.url,
        method: param.method,
        header:{
          'content-type': "application/json",
          'appkey': config.appkey
        },
        success:(res)=>{
            let code = res.statusCode;
            if(code.toString().startsWith('2')){
              param.success(res);
            }else{
              
            }
          
        },fail:(err)=>{
           
        }
      });
   }
}

export {http}