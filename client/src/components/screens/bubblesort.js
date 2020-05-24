import React, {useState} from 'react';
import './bubblesort.scss';
import Card from '../cards/card';
import Tab from '../tabs/tab';
import InputArray from '../forms/inputArray';


const BubbleSort = () => {
    const [isSorted, setIsSorted] = useState(false);
    const [arr, setArray] = useState([]);
    const [index, setIndex] = useState(-1);

    const data = [
        {
            name: 'Penggunaan',
            text: 'Untuk penggunaan aplikasi ini, silahkan input array yang akan di sort menggunakan algoritma Bubble Sort ini dengan setiap elemen pada array dipisahkan dengan tanda koma seperti pada contoh sebagai berikut : \n 1,2,3,4,5'
        },
        {
            name: 'Algoritma',
            text: 'Bubble Sort adalah algoritma pengurutan yang cukup sederhana karena algoritma ini akan melakukan penukaran dua buah elemen pada array yang saling bersebelahan apabila elemen tersebut berada pada urutan yang tidak sesuai.'
        },
    ];

    const handleSort = async (array) => {
        const response = await fetch('/api/bubblesort', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({array})
        });
        
        const body = await response.json();
    
        setArray(body);
        setIndex(0);
        setIsSorted(true);
    }

    const handleSubmit = (values, actions) => {
        actions.resetForm();
        var arr = values.array.split(',');
        var parsedArr = arr.map(num => parseInt(num, 10));
        handleSort(parsedArr);
    }
    
    return ( 
        <div>
            <h1>Bubble Sort</h1>
            <Tab data={data}>
                <p>Kompleksitas algoritma Bubble Sort adalah O(n<sup>2</sup>)</p>
            </Tab>
            <InputArray onSubmit={handleSubmit}/>
            {isSorted ? 
                <Card arr={arr} index={index} setIndex={setIndex}
                />
                :
                ""
            }
            
            
        </div>
    );
}


export default BubbleSort;