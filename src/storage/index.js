class Storage {
  static saveToLocal(key, value) {
    localStorage.setItem(key, value)
  }

  static getFromLocal(key) {
    return localStorage.getItem(key)
  }

  static removeFromLocal(key) {
    localStorage.removeItem(key)
  }

  static saveToSession(key, value) {
    sessionStorage.setItem(key, value)
  }

  static getFromSession(key) {
    return sessionStorage.getItem(key)
  }

  static removeFromSession(key) {
    sessionStorage.removeItem(key)
  }

  static removeAllFromSession() {
    sessionStorage.clear()
  }
}

export default Storage
