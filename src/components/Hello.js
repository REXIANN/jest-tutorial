import React from "react";

function Hello(props) {
  const { user } = props;

  return user.name ? <h1>Hello {user.name}</h1> : <button>Log In</button>;
}

export default Hello;
