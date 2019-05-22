import request from '@/utils/request'

export function fetchList(query) {
  return request({
    // url: 'http://medicine.local.com/index/article/index',
    url: '/article/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    // url: '/article/update',
    url: 'http://medicine.local.com/index/article/update',
    method: 'post',
    data
  })
}
