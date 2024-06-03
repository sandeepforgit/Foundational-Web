import React, { useContext } from 'react'
import UserContext from '../Context/UserContext/CreateContext'

function Profile() {
    const {User} = useContext(UserContext)
  return (
    <div class="mb-10 mt-20 mr-48 ml-48  bg-slate-500 rounded-sm shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
        <h1 className='text-center font-bold p-5'>Profile</h1>
        <div class="grid pb-16 text-center">
            <h1 class="">userName: {User.UserName}</h1>
            <h1>Password: {User.password}</h1>
        </div>
    </div>
  )
}

export default Profile