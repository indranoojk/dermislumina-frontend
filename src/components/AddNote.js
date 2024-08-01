import React, { useContext, useState } from 'react'
import '../index.css';
import noteContext from '../context/noteContext';
import Swal from 'sweetalert2'

const AddNote = (props) => {

    // const context = useContext(noteContext);
    // const { addNote } = context;

    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})

        Swal.fire({
            title: 'Success!',
            text: 'Form successfully submitted!',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
          })
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

  return (
    <>

        <div className="max-w-full" style={{ backgroundImage: `url(${'https://images.pexels.com/photos/1210276/pexels-photo-1210276.jpeg?auto=compress&cs=tinysrgb&w=1280'})` }}>
            <div className=" p-5 text-white pb-10">
                <h2 style={{fontFamily: "'Cinzel', serif"}} className='text-4xl font-bold font-serif p-5 text text-opacity-85 -tracking-tighter'>CREATE YOUR OWN SKIN CARE ROUTINE</h2>
                <div className="m-4 lg:m-10 lg:ml-20 lg:grid lg:grid-cols-2 gap-10">
                    <div className='pb-6 lg:m-2'>
                        <label htmlFor="title" className='text-xl font-bold text-white'>Title*</label> <br/>
                        <input type="text" className='mt-2 block w-full lg:w-96 px-0.5 bg-transparent border-0 border-b-2 border-[white focus:ring-0 focus:border-gray-400' id='title' name='title' onChange={onChange} minLength={5} required/>
                    </div>

                    <div className='pb-6 lg:m-2 lg:mr-20 row-span-2'>
                        <label htmlFor="description" className='text-xl font-bold text-white'>Describe your Skin routine*</label> <br/>
                        <textarea className='mt-2 block w-full px-0.5 p-1 bg-transparent border-0 border-b-2 border-[white focus:ring-0 focus:border-gray-400' name="description" id="description" onChange={onChange} minLength={10} cols="30" rows="5" ></textarea>
                    </div>

                    <div className='pb-6 lg:m-2'>
                        <label htmlFor="tag" className='text-xl font-bold text-white'>Tag</label> <br/>
                        <input type="tag" className='mt-2 block w-full lg:w-96 px-0.5 bg-transparent border-0 border-b-2 border-[white focus:ring-0 focus:border-gray-400' id='tag' name='tag' onChange={onChange} required/>
                    </div>
                    <br />
                    <div>
                        <button disabled={note.title.length<5 || note.description.length<10 } type='submit' className='bg-[#c67981] disabled:bg-[#634548] disabled:text-gray-400 ml-20 lg:ml-20 px-12 lg:px-16 py-3 border-2 border-[white shadow-sm hover:shadow-xl shadow-[#f5f2f2] focus:outline-none focus:shadow-outline-blue' onClick={handleClick}> SUBMIT </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddNote
