import React, { useState } from "react";
import Input from "../components/input";
import { postMethod } from "../utils/fetchMethods";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = ({ target }) => {
    switch (target.id) {
      case "email":
        setEmail(target.value);
        break;
      case "password":
        setPassword(target.value);
        break;
      default:
        console.log();
    }
  };
  const handleClick = () => {
    console.log(email, password);
    postMethod({ type: "signIn", email, password });
  };
  return (
    <React.Fragment>
      <div className='signUp'>
        <Input
          type='email'
          name='email'
          handleChange={handleChange}
          value={email}
        />
        <Input
          type='password'
          name='password'
          handleChange={handleChange}
          value={password}
        />
        <Input type='submit' name='submit' handleClick={handleClick} />
      </div>
    </React.Fragment>
  );
};

export default SignIn;
