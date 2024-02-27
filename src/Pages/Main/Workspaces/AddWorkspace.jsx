import React from 'react'
import { InputContent } from '../StyledComponents'
import { colors } from '../../../Setup/colors'

function AddWorkspace() {
  return (
    <div>
        <InputContent>
            <p>Name</p>
            <input type="text" placeholder='Enter workspace name' />
        </InputContent>
        <br />
        <button className="w-full" style={{background: colors.active, color: 'white', height: '45px', borderRadius: '10px'}}>Done</button>
    </div>
  )
}

export default AddWorkspace 