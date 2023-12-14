import request from "../utils/request";

export function getCinemaListService() {
  return request('https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=9218418', {
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1701141714777230166786049","bc":"110100"}',
      'X-Host': 'mall.film-ticket.cinema.list'
    }
  })
}