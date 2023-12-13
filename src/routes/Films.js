import React, { useEffect, useState } from 'react'
import request from '../utils/request'

export default function Films(props) {
  const [list, setList] = useState([])
  useEffect(() => {
    request('https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4463793', {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1701141714777230166786049","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      // console.log(res.data.data.films)
      setList(res.data.data.films)
    })
  }, [])
  
  return (
    <div>
      {
        list.map(item => <li key={item.filmId} onClick={() => {
          // console.log(props)
          props.history.push(`/detail/${item.filmId}`)
        }}>
          <img src={item.poster} alt={item.name} style={{
            width: '100px'
          }} />
          <p>{item.name}</p>
        </li>)
      }
    </div>
  )
}
