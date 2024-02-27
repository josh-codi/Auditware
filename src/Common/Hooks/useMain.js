import { useState } from 'react'

function useMain() {
    const [isLoading, setLoading] = useState(false)
    const [state, setState] = useState({
        dropDown:{
            status: false,
            name: ''
        },
        modal:{
            status: false,
            page:'',
            content: <></>,
            title: ''
        }
    })

    return {
        setLoading: (val)=>setLoading(val),
        isLoading,
        dropStatus: state.dropDown.status,
        dropName: state.dropDown.name,
        offDrop: ()=>setState(prev=>{
            return {...prev, dropDown: {status: false, name: ''}}
        }),
        setDrop: (name)=>setState(prev=>{
            return {...prev, dropDown: {status: true, name}}
        }),

        modalStatus: state.modal.status,
        modalTitle: state.modal.title,
        modalPage: state.modal.page,
        modalContent: state.modal.content,
        openModal: (title, page, content)=>setState(prev=>{
            return {...prev, modal: {status: true, page: page, content, title}}
        }),

        closeModal: ()=>setState(prev=>{
            return {...prev, modal: {status: false, page: '', content: <></>, title: ''}}
        })
    }
}

export default useMain