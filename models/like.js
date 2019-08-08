import {
  http
} from '../util/http.js'

class likeModel extends http {
  like(behavior, artID, category) {
    let url = behavior == 'like' ? 'like' : 'like/cancel'
    this.request({
      url: url,
      method: 'POST',
      data: {
        art_id: artID,
        type: category
      }
    });
  }

  getClassicLikeStatus(artID,category,sCallback){
    this.request({
        url:'classic/' + category + '/' + artID + '/favor',
        success:sCallback
    })
}
}

export {
  likeModel
}