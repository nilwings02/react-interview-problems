import { useState, useEffect } from 'react';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
// import SkipNext from '@mui/icons-material/SkipNext';
// import SkipPrevious from '@mui/icons-material/SkipPrevious';
// import PlayArrow from '@mui/icons-material/PlayArrow';
// import Pause from '@mui/icons-material/Pause';

export default function Images() {
    const [currentImage, setCurrentImage] = useState(0)
    const image_list = [
        "https://images.theconversation.com/files/287209/original/file-20190807-144847-5o9df4.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
        "https://media.npr.org/assets/img/2015/09/23/ap_836720500193-13f1674f764e5180cf9f3349cfef258d181f2b32-s900-c85.webp"
    ]
    const handleClickNext = (val) => {
        if (currentImage < image_list.leangth) {
            setCurrentImage(currentImage + 1)
        } else {
            setCurrentImage(currentImage)
        }
    }

    const handleClickPrev = (val) => {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1)
        } else {
            setCurrentImage(0)
        }
    }

    const handleClickPlay = (val) => {
        if (currentImage < image_list.leangth) {
            setCurrentImage(currentImage + 1)
        } else {
            setCurrentImage(currentImage)
        }
    }

    const handleClickPause = (val) => {
        if (currentImage < image_list.leangth) {
            setCurrentImage(currentImage + 1)
        } else {
            setCurrentImage(currentImage)
        }
    }

    useEffect(()=>{
        console.log(currentImage)
    },[currentImage])

    return (
        <div>
            <div>
                <img className="Images" src={image_list[currentImage]} alt="Animal" />
            </div>
           {/* <Stack> */}
            <button key="1" onClick={()=>{handleClickPrev()}}>Previous</button>
            <button key="2">Pause</button>
            <button key="3">Play</button>
            <button key="4" onClick={()=>{handleClickNext()}}>Next</button>
            {/* </Stack> */}
        </div>
    )
}