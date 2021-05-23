import React, { useState } from "react";
import Input from "../components/input";
import { postMethod } from "../utils/fetchMethods";
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = ({ target }) => {
    console.log(target.id);
    switch (target.id) {
      case "firstName":
        setFirstName(target.value);
        break;
      case "lastName":
        setLastName(target.value);
        break;
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
    console.log(firstName, lastName, email, password);
    postMethod({ type: "signUp", firstName, lastName, email, password });
  };
  return (
    <React.Fragment>
      <div className='signUp'>
        <Input
          type='text'
          name='firstName'
          handleChange={handleChange}
          value={firstName}
        />
        <Input type='text' name='lastName' handleChange={handleChange} />
        <Input
          value={lastName}
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

export default SignUp;
