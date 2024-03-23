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
      setCount(final)
      setLoading(false)
    }())
  }, [])
  return (
    <div>
      <h1>List of Random People</h1>
      <a href="https://github.com/jcomrade/API" target="_blank" className='bg-white font-bold text-black px-3 rounded-md'>GITHUB PROJECT LINK</a>
      <table className='border border-1 mt-5'>
        <tr className='border border-1'>
          <th className='border border-1'>Profile</th>
          <th className='border border-1'>ID Number</th>
          <th className='border border-1'>First Name</th>
          <th className='border border-1'>Last Name</th>
          <th className='border border-1'>Email</th>
        </tr>
        {
          count
            ? count.map((items) => {
              return <tr key={items.id} className='border border-1'>
                <td>
                  <img src={`${items.avatar}`} />
                </td>
                <td className='border border-1'>
                  {items.id}
                </td>
                <td className='border border-1'>
                  {items.first_name}
                </td>
                <td className='border border-1'>
                  {items.last_name}
                </td>
                <td className='border border-1'>
                  {items.email}
                </td>
              </tr>
            })
            : isLoading
              ? <div>
                Loading...
              </div>
              : <div>
                API Fetching error...
              </div>
        }
      </table>
    </div>
  )
}

export default App
