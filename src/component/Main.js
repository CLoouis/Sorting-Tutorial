import React from 'react';
import './Main.css';
import FormContainer from './FormContainer'
function Main(){
    const content = React.createRef();
    return(
        <div>
            <div className="split left">
                <div className="le">
                    <h2>Data</h2>
                    <p>
                        Please fill the section below with the number of elements you want to sort 
                        and the elements in comma separated value. The number of elements can't exceed 
                        10 and the elements should be positive integer.
                    </p>
                    <FormContainer content={content} />
                </div>

            </div>
            <div className="split right">
                <div>
                    <h2> Complexity</h2>
                    Bubble Sort: O(n<sup>2</sup>) <br />
                    Merge Sort: O(n Log<sub>n</sub>) <br />
                    Steps: <span id="counter">0</span></div>
                    <div ref={content} id="myContent"></div>
                </div>
        </div>
    );
}
export default Main;