import React, { useEffect } from "react";

function Message({ msg, show, success, setShow }) {
    const style = success ? "w-full text-green-500 bg-green-100 border-2 border-green-500 px-2 py-3 my-2 rounded" : "w-full text-red-500 bg-red-100 border-2 border-red-500 px-2 py-3 my-2 rounded";

    useEffect(() => {
        let timer;
        if (show) {
            timer = setTimeout(() => {
                setShow(false);
            }, 10000); 
        }
        return () => clearTimeout(timer);
    }, [show, setShow]);

    return <div className={show ? style : "hidden"}>
        {msg}
    </div>;
}

export default Message;
