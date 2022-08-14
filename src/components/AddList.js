import React, { useState } from 'react'

export const AddList = (props) => {
  const [title, setTitle] = useState("");
  const [breed, setBreed] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !breed || !desc) {
      alert("Cat Name or Breed or Description is empty")
    }

    else {
      props.addList(title, breed, desc);
      setTitle("");
      setBreed("");
      setDesc("");
    }

  }

  return (
    <div className='container my-3'>
      <h2>Add Your Cats !!</h2>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Cat Name:</label>
          <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="breed" className="form-label">Breed:</label>
          <input type="text" value={breed} onChange={(e) => { setBreed(e.target.value) }} className="form-control" id="breed" />
        </div>

        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Description:</label>
          <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
        </div>


        <button type="submit" className="btn btn-sm btn-success">Submit</button>
      </form>
    </div>
  )
}
