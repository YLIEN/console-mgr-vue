const urlMaps = {
  login: '/api/v1/user/login/',
  logout: '/api/v1/user/logout',
  register: '/api/v1/user/register',
  getUserInfo: '/api/v1/info/detail'
}

// export const baseUrl = 'http://share.axingxing.com/proxy'
export const baseUrl = ''

export const loginWhiteList = [urlMaps.getUserInfo, urlMaps.getBannerList]

export default urlMaps