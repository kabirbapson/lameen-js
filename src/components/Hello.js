import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1> Lameen Am Here!</h1>
    //     </div>
    // )
    // created using JSX

    return React.createElement(
        'div', { id: 'h11', className: 'h22' },
        React.createElement('h1', null, 'Am Coming!!!'),
    )
}
export default Hello