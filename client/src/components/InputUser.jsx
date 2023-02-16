import React, {useState} from 'react'
// import ExperienceCounter from './ExperienceCounter';
const InputUser = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState(0)

    

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { username, email, experience }
            console.log(body)
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
      

        <div class="container"> 
            
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
                Experience: 

                <div>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setExperience(experience - 1)
                        
                    }} >-</button>
                     <input type="text"
                    className='form-control'
                    value={experience}
                    onChange = { e => setExperience(e.target.value)}
                />
                    <button onClick={(e) => {
                        e.preventDefault();
                        setExperience(experience + 1)
                    }}>+</button>
                </div>
                <br />
                
                <button>Add</button>
            </form>
        </div>
        
        
  )
}

export default InputUser