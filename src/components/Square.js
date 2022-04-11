import React from "react";

function Square (props) {

    return (
        // If change from props.onClick() to props.onClick
        // https://stackoverflow.com/questions/48497358/reactjs-maximum-update-depth-exceeded-error
        // Fix error : Maximum update depth
        <button className='square' onClick={props.onClick} >
            {props.value}
        </button>
    );
}

export default Square;