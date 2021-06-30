import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {

    const addProductHandler = () =>{
        const product = {};
        fetch('http://localhost:4000/addProducts',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(product)
        })
        
    }
    return (
        <div>
           <form action="">
               <p><span>Name:</span><input type="text" /></p>
               <p><span>Price:</span><input type="text" /></p>
               <p><span>Quantity:</span><input type="text" /></p>
               <p><span>Image</span><input type="file" /></p>
               <button onClick={addProductHandler}>Add Product</button>
           </form>
        </div>
    );
};

export default Inventory;