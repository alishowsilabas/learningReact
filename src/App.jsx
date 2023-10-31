import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      setUsers(response.data)
    })
  })

  return (
    <div>
      {
        users.map(item =>{
          return <h3 key={item.id}>{item.name}</h3>
        })
      }
    </div>
  )
}

export default App