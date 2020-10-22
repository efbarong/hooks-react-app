import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;

  useEffect(() => {
  }, [])

  useEffect(() => {
  }, [formState])

  useEffect(() => {
  }, [email])

  useEffect(() => {
  }, [name])

  const inputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    });
  };

  return (
    <>
      <h1>useEffect</h1>

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="username"
          autoComplete="off"
          value={name}
          onChange={inputChange} />
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="email@email.com"
          autoComplete="off"
          value={email}
          onChange={inputChange} />
      </div>

      { (name === '123') && <Message />} 
    </>
  )
}
