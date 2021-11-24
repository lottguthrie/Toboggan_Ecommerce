function MyForm() {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const user = event.target.user;
      const value = event.target.value;
      setInputs(values => ({...values, [user]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter your username:
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your password:
          <input 
            type="text" 
            name="password" 
            value={inputs.password || ""} 
            onChange={handleChange}
          />
          </label>
          <label>Enter your firstname:
          <input 
            type="text" 
            name="firstname" 
            value={inputs.firstname || ""} 
            onChange={handleChange}
          />
          </label>
          <label>Enter your lastname:
          <input 
            type="text" 
            name="lastname" 
            value={inputs.lastname || ""} 
            onChange={handleChange}
          />
          </label>
         
          <label>Enter your email:
          <input 
            type="text" 
            name="email" 
            value={inputs.email || ""} 
            onChange={handleChange}
          />
          </label>
          <label>Enter your phone number:
          <input 
            type="int" 
            name="phone number" 
            value={inputs.phonenumber || ""} 
            onChange={handleChange}
          />
          </label>
          <input type="submit" />
      </form>
    )
  }