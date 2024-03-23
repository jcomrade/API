import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(null)
  const [isLoading, setLoading] = useState(false);
  const api1 = "https://reqres.in/api/users?page=1"
  const api2 = "https://reqres.in/api/users?page=2"

  useEffect(() => {
    (async function () {
      setLoading(true)
      const firstSet = await fetch(api1)
      const temp = await firstSet.json()
      const secondSet = await fetch(api2)
      const temp2 = await secondSet.json()
      const final = [...temp.data, ...temp2.data]
      console.log(final)
      setCount(final)
      setLoading(false)
    }())
  }, [])
  return (
    <div>
      <h1>List of Random People</h1>
      {
        count 
        ? count.map((items) => {
          { console.log("a") }
          return <div key={items.id} className='flex p-2 border border-1'>
            <div>
              <img src={`${items.avatar}`} />
            </div>  
            <div className='p-2'>
              <div className='border border-1'>
                ID: {items.id}
              </div>
              <div className='border border-1'>
                First Name: {items.first_name}
              </div>
              <div className='border border-1'>
                Last Name: {items.last_name}
              </div>
              <div className='border border-1'>
                Email: {items.email}
              </div>
            </div>
          </div>
        })
        : isLoading
        ? <div>
        Loading...
        </div>
        : <div>
        API Fetching error...
        </div>
      }
    </div>
  )
}

export default App
