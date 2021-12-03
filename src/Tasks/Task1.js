import React from 'react';

const Task1 = array => {
    for (let i = 0; i < array.length; i += 1) {
        const el = array[i];
        const nextel = array[i + 1];
        if (el < nextel) {
            console.log('vot ono');
        }
    }
    return (
        <div className="App">
            Task1
            {array && <p>array is ok</p>}
        </div>
    );
};

export default Task1;
