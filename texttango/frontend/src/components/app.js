import ReactDom from 'react-dom';
import React, {useState, useEffect} from 'react';

function App(){
    const[data,setData] = useState(null);
    const[print,setPrint] = useState(false);

    useEffect(() => {
        if (print) {
            console.log(data);
        }
    }, [print, data]);

    function getData(val)
    {
        setData(val.target.value);
        setPrint(false);
        console.warn(val.target.value);
    }
    return(
        <div className="App">
            {
                print?
                <h1>{data}</h1>
                :null
            }
            <h1>Get Input Box value</h1>
            <input type="text" onChange={getData}/>
            <button onClick={()=>setPrint(true)}>Print Value</button>
        </div>
    )

}
window.onload = function()
{
    const root = document.getElementById('root')
    if(root){
        ReactDom.createRoot(root).render(<App />);

    }


}

