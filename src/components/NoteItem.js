import React, { useContext } from 'react'
import noteContext from '../context/noteContext'
import Swal from 'sweetalert2'

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context
    // const { note, updatenote } = props;
    const { note } = props;

    const handleDelete = () => {
      
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            confirmButtonText: "OK"
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
          })
          deleteNote(note._id);
        }
      });
    }




  return (
    <>
        <div className='grid-flow-row'>
          <div className='lg:m-16'>
            {/* <div className={"card-body lg:w-[80%] border-2 border-black p-8 rounded-xl shadow-md shadow-black space-y-4 bg-gray-300 overflow-x-scroll"}> */}
            <div className="card-body lg:w-[80%] border-2 border-black p-8 rounded-xl shadow-md shadow-black space-y-4 bg-gray-300 container mx-auto">
              <div className="float-right">
                <i className="fa-solid fa-trash-can mx-2 cursor-pointer" onClick={handleDelete}>   <span className='ml-1 text-red-600 hover:text-red-700 text-xl font-bold'>Delete</span> </i>
              </div>

                <div className="">
                    <h2 className='text-2xl font-bold'>Title: <span className='text-2xl font-extralight lg:font-medium lg:ml-5 font-serif'>{note.title}</span></h2>
                </div>

                <div className="">
                    <h2 className='text-2xl font-bold'>Skincare Routine: </h2>
                    <span className='text-2xl font-extralight lg:font-medium font-serif text-clip'>{note.description} </span>
                </div>
              
            </div>
          </div>
        </div>
    </>
  )
}

export default NoteItem
