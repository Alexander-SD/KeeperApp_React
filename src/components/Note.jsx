import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
    const [animationFadeOut, setAnimationFadeOut] = useState("fade-in");
    
    function handleClick() {
        setAnimationFadeOut("fade-out");
        return setTimeout(() => props.deleteNote(props.id), 600);
    }

    return (<div className="note" style={{animationName: animationFadeOut}}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
            <DeleteIcon />
        </button>
    </div>)
}

export default Note;