import React, { useState, useEffect } from 'react'
import EditUser from './EditUser'

const ListUser = () => {

    const [users, setUsers] = useState([]);

    const deleteUser = async (id) => {
        try {

            const deleteUser = await fetch(`http://localhost:5000/users/${id}`, {
                method: "DELETE"
            })

            setUsers(users.filter((user) => user.user_id !== id))
            
        } catch (error) {
            console.error(error.message)
        }
    }

    const getUsers = async () => {
        try {
            const response = await fetch('http://localhost:5000/users')
            const jsonData = await response.json()
            setUsers(jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

  return (
      <div className='container'>
          <table class="table mt-5 text-center">
              <thead>
                  <tr>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Edit</th>
                      <th>Delete</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      users.map(user => (
                          <tr key={user.user_id}>
                              <td>{user.username}</td>
                              <td>{user.email}</td>
                              <td>
                                  <EditUser user={user} />
                              </td>
                              <td>
                                  <button onClick={() => deleteUser(user.user_id)}>
                                      Delete
                                  </button>
                              </td>
                          </tr>
                      ))
                  }
                  
              </tbody>
          </table>
    </div>
  )
}

export default ListUser