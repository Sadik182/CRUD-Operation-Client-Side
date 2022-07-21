import React, { useRef } from "react";

const AddUser = () => {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    const newUser = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then(res => res.json())
    .then(data => {
        if(data.insertedId) {
         alert('Successfully Added The User');
         e.target.reset();   
        }
    })
    e.preventDefault();

  };

  return (
    <div>
      <h2>Please Add an User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" ref={nameRef} />
        <input type="email" name="" id="" ref={emailRef} />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default AddUser;
