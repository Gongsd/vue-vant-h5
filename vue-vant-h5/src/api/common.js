import qs from 'qs'
import request from '@/utils/request'

//上传图片
export function uploadImg(params) {
    return request({
      url: '/upload',
      method: 'post',
      data: JSON.stringify(params)
    })
  }