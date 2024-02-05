import React from 'react';

const Button = ({buttonData}) =>{

    const values = Object.keys(buttonData).map(key=> [key,buttonData[key]])
    console.log(...values)
    return(
        <div>
            <button>Bad1</button>
            <button>Bad2</button>
        </div>
    )
}

export default Button