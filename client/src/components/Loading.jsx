import { useState } from "react";
import { useEffect } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


export function Loading(props) {

    const [show, setShow] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 1000)
    }, [])

    return (
        <div class='flex h-80 place-items-center justify-center'>
            {show &&
                <Loader
                    type="TailSpin"
                    color="#D97706"
                    height={80}
                    width={80}
                />
            }
        </div>
    )
}