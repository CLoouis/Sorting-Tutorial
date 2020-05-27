import React from "react"
import {mergeSort, bubbleSort, create, reset, doStop, shuffle, setContent} from './Sorting'

function FormComponent(props) {
    return (
        <main>
            <form>
                Number of Elements: <br></br>
                <input 
                    name="number" 
                    value={props.data.number} 
                    onChange={props.handleChange} 
                    placeholder="Number"
                    type='Number' 
                />
                <br />
                Elements: <br></br>
                <input 
                    name="elements" 
                    value={props.data.elements}
                    onChange={props.handleChange} 
                    placeholder="Elements in CSV" 
                />
                <br />
                <br />
                <button onClick={(e) => {
                    e.preventDefault();
                    create(props);
                }} className="button" >Create</button>
                <br />
            </form>
            <div id="buttons">
                <button onClick={mergeSort} className="button" >Merge Sort</button>
                <button onClick={bubbleSort}  className="button">Bubble Sort</button>
                <br /><br />
                <button onClick={doStop}  className="button">Stop</button>
                <button onClick={reset}  className="button">Reset</button>
                <button onClick={shuffle}  className="button">Shuffle</button>
            </div>
        </main>
    )
}

export default FormComponent