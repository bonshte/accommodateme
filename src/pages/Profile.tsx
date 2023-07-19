import React from 'react'

const Profile = () => {
  const username = localStorage.getItem("username");
  return (
    <div>{username}</div>
  )
}

export default Profile