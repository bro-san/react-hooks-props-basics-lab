import React from 'react';

function Links (props) {
    console.log(props.git)
    return (
        <h3>
            <a href={props.git}>{props.git}</a>
            <a href={props.linked}>{props.linked}</a>
        </h3>
    )
}
 

export default Links