import React from 'react'
import { useState } from 'react'

const EditUser = ({ user }) => {

    
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);


    const editUser = async e => {
        e.preventDefault();
        try {
            const body = { username, email }
            const response = await fetch(`http://localhost:5000/users/${user.user_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            window.location = "/";
        } catch (error) {
            console.error(error.message)
        }
       
   } 


  return (
      <div>
          <button
              type="button"
              class="btn btn-warning"
              data-toggle="modal"
              data-target={`#id${user.user_id}`}
              >
              Edit
          </button>
          <div
              class='modal'
              id={`id${user.user_id}`}
              onClick={() => {
                  setEmail(user.email)
                  setUsername(user.username)
              }}
          >
              <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit User</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => {
                  setEmail(user.email)
                  setUsername(user.username)
              }}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={e => setUsername(e.target.value)}
               />
                          
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => editUser(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {
                  setEmail(user.email)
                  setUsername(user.username)
              }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
    </div>
</div>
  )
}

export default EditUser