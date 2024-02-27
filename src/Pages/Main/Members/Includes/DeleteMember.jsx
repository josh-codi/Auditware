import React from 'react'

function DeleteMember() {
  return (
    <div>
        <p>Are you sure you want to remove this member?</p>
        <br />
        <button style={{height: '50px', width: '250px', color: 'white', background: 'red', borderRadius: '10px'}}>
            Confirm
        </button>
    </div>
  )
}

export default DeleteMember