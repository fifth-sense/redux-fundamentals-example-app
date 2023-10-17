import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Header = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const handleKeydown = (e) => {
        const trimText = e.target.value.trim();
        if(e.key == "Enter" && trimText){
            dispatch({type: 'todos/todoAdded', payload: trimText});
            setText("")
        }

    }
    return(
        <input
        type="text"
        value={text}
        placeholder='eneter todo'
        autoFocus
        onChange={e=> setText(e.target.value)}
        onKeyDown={handleKeydown}
        />
    )
}
export default Header;