import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
    const [animationFadeOut, setAnimationFadeOut] = useState(
        {
            animationName: "fade-in",
            animationDuration: "700ms"
        });

    function handleClick() {
        setAnimationFadeOut({
            animationName: "fade-out",
            animationDuration: "1000ms"
        });
        setTimeout(() => setAnimationFadeOut({
            animationName: "fade-in",
            animationDuration: "700ms"
        }), 900);
        return setTimeout(() => props.deleteNote(props.id), 900);
    }

    return (<div className="note" style={animationFadeOut}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
            <DeleteIcon />
        </button>
    </div>)
}

export default Note;