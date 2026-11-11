import React from 'react'

function buttonInfo(event) {
    console.log(event.target.textContent)
}


function Button(props) {
    function disableButton(){
        return props.contentButton === "pre-orders"
    }
    return (
        <button type="button" onClick={buttonInfo} disabled={disableButton()}>
            {props.contentButton}
        </button>)
}

export default Button