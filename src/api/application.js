import { getRequest, deleteRequest, postRequest, putRequest } from './networkRequest'
import apiConstants from '@/common/apiConstants'

// request for retrieve quotes
export async function retrieveQuotes(path) {
  return getRequest(apiConstants.retrieveQuotes + path)
}
