import React, { useContext, useEffect } from 'react'
import noteContext from '../context/noteContext'
import NoteItem from './NoteItem'
import { useNavigate } from 'react-router-dom'

const Notes = (props) => {


    const context = useContext(noteContext)
    const { notes, getNotes } = context;

    let navigate = useNavigate();
    // eslint-disable-next-line
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes()
        }
        else {
            navigate("/");
        }
        // eslint-disable-next-line
    }, [])



    return (
        <>

            <div className="" style={{ backgroundImage: `url(${'https://images.pexels.com/photos/688830/pexels-photo-688830.jpeg?auto=compress&cs=tinysrgb&w=1280'})` }}>
                <div className='m-8 mb-0 pb-40 relative'>
                    <div className='text-4xl lg:text-5xl lg:pl-10 pt-10 font-bold font-serif text-white '>
                        Personalised Skincare Routine
                    </div>

                    <div className="text-4xl text-[#c78b8b] mt-16 font-bold text-center">
                        {notes.length === 0 && 'No Skin routines are available to display'}
                    </div>

                    <div className="">
                        {notes.map((note) => {
                            return <NoteItem key={note._id} note={note} />
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Notes
