import React from 'react'
import '../styles/PopupWindow.css'


export default function SearchedDocsList() {


  return (
    <div className="modal">
    <div className="modal_content">
      <span className="close">
        &times;
      </span>
      <form>
        <h3>Register!</h3>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  </div>
  )
}
