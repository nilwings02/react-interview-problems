import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { stepButtonClasses } from '@mui/material';

const shuffleArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[j], array[i]] = [array[i], array[j]]
    }

    return array;
}

const Buttons = (props) => {
    // const [color, setColor] = useState('primary');
    const [clickCount, setClickCount] = useState(0)
    const [clickState, setClickState] = useState(new Array(Object.keys(props.buttonData).length * 2).fill(0))
    const [clickedButton, setClickedButton] = useState('')

    const keys = Object.keys(props.buttonData).map(key => key)
    const values = Object.keys(props.buttonData).map(key => props.buttonData[key])
    const allbuttons = shuffleArray([...keys, ...values])
    const [buttons, setButtons] = useState(allbuttons)
    // setButtons(allbuttons)

    const handleClick = (val, idx) => {
        // setColor('secondary')
        const count = clickCount + 1;
        if (count > 2) {
            setClickCount(1)
            const array = new Array(buttons.length).fill(0)
            array[idx] = 1
            setClickState(array)
            setClickedButton(val)
        }
        else {
            if (count === 2) {
                if (props.buttonData[val] === clickedButton || props.buttonData[clickedButton] === val) {
                    console.log("match")
                    const index0 = buttons.indexOf(clickedButton)
                    buttons.splice(index0, 1)
                    const index1 = buttons.indexOf(val)
                    buttons.splice(index1, 1)
                    console.log(index0, index1)
                    setButtons(shuffleArray(buttons))
                    setClickState(new Array(buttons.length).fill(0))
                    setClickCount(0)

                } else {
                    const index0 = buttons.indexOf(clickedButton)
                    const index1 = buttons.indexOf(val)

                    clickState[index0] = 2
                    clickState[index1] = 2
                    setClickState(clickState)
                    setClickCount(count)

                }
            } else {
                setClickCount(count)
                clickState[idx] = 1
                setClickState(clickState)
                setClickedButton(val)
            }

        }
        console.info("Clicked : ", count, val)
    }

    // useEffect(() => {
    //     console.info("Count: ", clickCount)
    // }, [clickCount, clickState, clickedButton, buttons])

    return (
        <div style={{
            width: "420px",
            height: "420px",
            display:"flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            backgroundColor: 'gray'
        }}>
            {/* <Stack direction="row" spacing={2}> */}
            {buttons.map((val, index) => (
                // <Button
                //     key={index}
                //     color={color}
                //     value={val}
                //     variant="contained"
                //     onClick={() => {
                //         // alert('clicked-'+val);
                //         handleClick(val);
                //       }}>
                //     {val}
                // </Button>
                <button
                    onClick={() => {
                        // alert('clicked-'+val);
                        handleClick(val, index);
                    }}
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: clickState[index] === 2 ? 'blue' : clickState[index] === 1 ? 'green' : 'white'
                    }}
                >{val}</button>
            ))}
            {/* </Stack> */}

            {/* <button>Bad1</button>
            <button>Bad2</button> */}
        </div>
    )
}

export default Buttons