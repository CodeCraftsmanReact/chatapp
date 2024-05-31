import React from 'react'
import githubIcon from '../assets/github-mark-white.png'
const GithubIcon = () => {
  return (
    <div className='fixed top-4 right-4' onClick={() => window.location.href = 'https://github.com/CodeCraftsmanReact' }>
        <img src={githubIcon} height={32} width={32}/>
    </div>
  )
}

export default GithubIcon