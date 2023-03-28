import React, { Children } from 'react'

const Props = (props) => {

    console.log(props.name)
    if (props.name === 'Rafi') {
        console.log('Hello Rafi');
    }
    return (
        <div>
            <p>Hello {props.name}</p>
            {props.Children}
        </div>
    )
}

export default Props
