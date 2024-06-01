"use client";
import Link from "next/link";
import "./register.scss";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const data = await axios.post("http://localhost:3000/api/auth", {
        name: userInput.name,
        email: userInput.email,
        password: userInput.password,
      });
      setUserInput({
        name: "",
        email: "",
        password: "",
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register-wrapper">
      <h1 className="register-title">Register</h1>
      <p className="register-subtitle">
        Already have an account, <Link href="/login">sign in</Link>
      </p>
      <form className="register-form" onSubmit={handleOnSubmit}>
        <div className="field">
          <input
            className="register-form-input"
            placeholder="Enter your name"
            value={userInput.name}
            type="text"
            required
            onChange={(e) =>
              setUserInput({
                name: e.target.value,
                email: userInput.email,
                password: userInput.password,
              })
            }
          />
        </div>
        <div className="field">
          <input
            className="register-form-input"
            placeholder="Enter your email"
            value={userInput.email}
            type="email"
            required
            onChange={(e) =>
              setUserInput({
                name: userInput.name,
                email: e.target.value,
                password: userInput.password,
              })
            }
          />
        </div>
        <div className="field">
          <input
            className="register-form-input"
            placeholder="Enter your password"
            value={userInput.password}
            type="password"
            required
            onChange={(e) =>
              setUserInput({
                name: userInput.name,
                email: userInput.email,
                password: e.target.value,
              })
            }
          />
        </div>
        <button type="submit" className="register-submit">
          Register
        </button>
      </form>
    </div>
  );
}
