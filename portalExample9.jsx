import {useState} from 'react';
import ReactDOM  from 'react-dom/client';
import { createPortal } from 'react-dom';

export function CheckTheState(){

    const[componentState, setComponentState] = useState("State of component");
    const[btnState, setState] = useState(false);

	function checkBtnState(){
        setState(true);
        
        <RenderOutsideComponent />
    }

    function ComponentToTeleport(){

        return(
            <p>{componentState}</p>
            
        )
    }

    function RenderOutsideComponent(){
//ZROBIĆ NOTATEK 
        if(btnState)
        {
            return(
                <div>
                    
                    {btnState && createPortal(
                    <ComponentToTeleport />, document.body)
                    }
                    
                </div>
            )
        }
    }

    return(
        <div>
            <button onClick={checkBtnState}>Action</button>
            <RenderOutsideComponent />
        </div>
        
    )
}

const execute = ReactDOM.createRoot(document.getElementById('root'));
execute.render(<CheckTheState />);
