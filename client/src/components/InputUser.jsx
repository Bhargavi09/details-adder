import React, {useState} from 'react'

const InputUser = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { username, email }
            const response = await fetch("http://localhost:5000/users", {
                method: "POST",
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
            <form onSubmit={onSubmitForm}>
                Name: 
                <input type="text"
                    className='form-control'
                    value={username}
                    onChange = { e => setUsername(e.target.value)}
                />
                <br />
                Email: 
                <input type="text"
                    className='form-control'
                    value={email}
                    onChange = { e => setEmail(e.target.value)}
                />

                <br />
                <button>Add</button>
            </form>
    </div>
  )
}

export default InputUser