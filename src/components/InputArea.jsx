import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
//import { CSSTransition } from "react-transition-group";

function InputArea(props) {
    const [input, setInput] = useState({
        title: "",
        content: ""
    });

    const [isClicked, setIsClicked] = useState(false);
    const [expandArea, setExpandArea] = useState("expand-enter");


    function handleInput(event) {
        const { name, value } = event.target;

        setInput((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function handleClick() {
        setIsClicked(true);
        setExpandArea("expand-enter-active");
    }

    return (
        <div>
            <form className="create-note">
                {isClicked && <input
                    onChange={handleInput}
                    name="title"
                    type="text"
                    value={input.title}
                    placeholder="Title"
                />}
                {/* <CSSTransition
                    classNames="expand"
                    timeout={2000}
                > */}
                    <textarea
                        className={expandArea}
                        onClick={handleClick}
                        onChange={handleInput}
                        name="content"
                        type="text"
                        value={input.content}
                        placeholder="Take a note"
                        // rows={isClicked ? 3 : 1}
                    />
                {/* </CSSTransition> */}
                <Zoom in={isClicked ? true : false}>
                    <Fab onClick={(event) => {
                        props.addNewNote(input);
                        setInput({
                            title: "",
                            content: ""
                        });
                        event.preventDefault();
                    }}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default InputArea;