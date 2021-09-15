import axios from 'axios'

let constants = {
  METHOD_GET: 'get',
  METHOD_POST: 'post',
  METHOD_DELETE: 'delete',
  METHOD_PUT: 'put',
  TIMEOUT: 20000
}

export async function getRequest(url, reqHeader, reqBody, callback) {
  return networkRequest(constants.METHOD_GET, url, reqHeader, reqBody)
}

export async function postRequest(url, reqHeader, reqBody, callback) {
  return networkRequest(constants.METHOD_POST, url, reqHeader, reqBody)
}

export async function deleteRequest(url, reqHeader, reqBody, callback) {
  return networkRequest(constants.METHOD_DELETE, url, reqHeader, reqBody)
}

export async function putRequest(url, reqHeader, reqBody, callback) {
  return networkRequest(constants.METHOD_PUT, url, reqHeader, reqBody)
}

function networkRequest(method, url, reqHeader, reqBody) {
  var config = {
    method: method,
    url: url,
    data: reqBody,
    timeout: constants.TIMEOUT
  }
  if (reqHeader) {
    config.headers = reqHeader
  }
  var response = axios(config)
  return response
}
