import React from 'react'
import {Link} from "react-router-dom";


function Contact() {
  return (
    <form className="flex h-screen items-center justify-center" action="">
    <div >
        <h1 className="font-bold text-3xl" >Contact Us</h1> <br />

        <label className="input input-bordered flex items-center gap-2">
  Name
  <input type="text" className="grow" placeholder="Enter your Name" />
  </label>
<br />
<label className="input input-bordered flex items-center gap-2">
  Email
  <input type="text" className="grow" placeholder="Enter your Email" />
</label>
<br />
<label className="input input-bordered flex items-center gap-2">
  Message
  <input type="text" className="grow" placeholder="Type your message Here" />
</label> <br />
<button className="btn btn-primary">Submit</button>
    </div>
    </form>
  )
}

export default Contact