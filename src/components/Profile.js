import React from 'react'
import ProfileNavbar from './ProfileNavbar'
import Notes from './Notes'
import Addnotes from './AddNote'

const Profile = () => {
  return (
    <>
      <ProfileNavbar />

      <div className="text-xl lg:p-10 lg:text-3xl ml-10 lg:ml-0 mt-4 font-semibold italic font-serif text-center">
        <span className=''>Hello! Dear User 😊</span>
      </div>

      <Addnotes />

      <Notes />
    </>
  )
}

export default Profile
