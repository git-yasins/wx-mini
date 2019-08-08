import {
  config
} from '../config.js'
const tips = {
  1: '出错了',
  1005: 'appkey无效',
  3000: '期刊不存在'
}
class http {
  request(param) {
    if (!param.method) {
      param.method = 'GET';
    }
    wx.request({
      url: config.baseUrl + param.url,
      method: param.method,
      data:param.data,
      header: {
        'content-type': "application/json",
        'appkey': config.appkey
      },
      success: (res) => {
        let code = res.statusCode;
        if (code.toString().startsWith('2')) {
          param.success && param.success(res.data);
        } else {
          let erro_code = res.data.erro_code
          this._show_error(erro_code)
        }

      },
      fail: (err) => {
        this._show_error(1)
      }
    });
  }

  _show_error(err_code) {
    if (!err_code) {
      err_code = 1
    }
    const tip = tips[err_code]
    wx.showToast({
      title: tip ? tip : tip[1],
      icon: 'none',
      duration: 2000
    })
  }
}

export {
  http
}