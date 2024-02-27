import React from 'react'
import Wrapper from '../Components/Wrapper'
import TextSpace from './TextSpace'

function OpenProject() {
    return (
        <Wrapper onlyIcons hideHeader content={<TextSpace/>}/>
    )
}

export default OpenProject