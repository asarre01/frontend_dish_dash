import React from "react";

function Message({ msg, show, success}) {
    const style = success ? " w-full text-vert-500 bg-vert-100 border-2 border-vert-500 px-2 py-3 my-2 rounded " : " w-full text-red-500 bg-red-100 border-2 border-red-500 px-2 py-3 my-2 rounded " 
    return <div className={ show ? style : "hidden"}>
        {msg}
    </div>;
}

export default Message;
