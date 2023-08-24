import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
    const s1 ={
        "Name":"Ticket Book",
        "SInce":"2013"
    }
    const [state, setState] = useState(s1);
    const update = () =>{
        setTimeout(()=>{
            setState({
                "Name":"Ticket Details",

            })
        },5000);
    }
    return (

        <NoteContext.Provider value={{state:state, update:update}}>
        {props.children}
        </NoteContext.Provider>
        )
}

export default NoteState