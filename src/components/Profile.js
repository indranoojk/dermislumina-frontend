import React from 'react'
import ProfileNavbar from './ProfileNavbar'
import Notes from './Notes'
import Addnotes from './AddNote'

const Profile = () => {
  return (
    <>
      <ProfileNavbar />

      <div className="p-4 lg:p-10 text-3xl ml-5 lg:ml-0 mt-4 font-semibold italic font-serif text-center">
        <span className=''>Hello! Dear User 😊</span>
      </div>

      <Addnotes />

      <Notes />
    </>
  )
}

export default Profile
