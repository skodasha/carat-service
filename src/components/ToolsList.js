import React, { useEffect, useState } from 'react';
import '../styles/tools.css';

function ToolsList({tools}) {
    return(
        <div className='list'>
                    {
                        (tools.length == 0) ? <p>Sorry, nothing was found...</p>: null
                    }
                    <table><tbody>
                    {tools.map(
                    (item, idx) =>
                    <tr key={idx}>
                    <td className="tool--item">
                        <img className="imgTool" src={item.image}/>
                        <div className="tool--item-info">
                            <h3>{item.title}</h3>
                            <h4>{item.brand}</h4>
                            <h5>{item.description}</h5>
                            <div className='toolPrice'>
                                <h1>{item.price}</h1>
                            </div>
                        </div>    
                    </td>
                    </tr>
                    )}
                    </tbody></table>

        </div>
    )
}

export default ToolsList