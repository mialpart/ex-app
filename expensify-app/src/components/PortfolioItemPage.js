import React from 'react';


const PortfolioItemPage = (props) => (

    <div>
    
    <h1>This is item </h1>
    <p>Dump id  {props.match.params.id}</p>
    </div>

)

export default PortfolioItemPage;