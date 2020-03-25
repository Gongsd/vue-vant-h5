import qs from 'qs'
import request from '@/utils/request'
// api

// 
export function getNewsList(params) {
  return request({
    url: '/news',
    method: 'post',
    data: qs.stringify(params)
  })
}

export function getNewsInfo(params) {
  return request({
    url: '/news/'+params,
    method: 'get',
    //data: qs.stringify(params)
  })
}

// 
export function postNewsInfo(params) {
  return request({
    url: '/news/add',
    method: 'post',
    data: qs.stringify(params)
  })
}
