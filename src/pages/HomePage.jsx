import React from 'react'
import Background from "../components/Background";
import GithubIcon from "../components/GithubIcon";
import LoginForm from "../components/LoginForm";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4 place-content-center items-center min-h-screen text-white">
        <h3 className="text-3xl ">CodeCraftsmanReact</h3>
        <p className="text-lg">Chat Application</p>
        <LoginForm/>
        <Background/>
        <GithubIcon/>
    </div>
  )
}

export default HomePage