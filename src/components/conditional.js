import React from 'react';

const Conditional = () => {

    const returnValue = () => {
        ////
        return false;
    }

    const showIt = () => {
        return ( returnValue() ?
            <div>
                Hello, It's true!
             </div> 
             : 
            <div>
                Hello, It's false!
            </div>
        )
    }

    return (
        <div>
            { showIt() }
        </div>
    );
}

export default Conditional;