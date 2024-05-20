import React from 'react';

const Dispaly = ({title,items, moveHendler,Mode,}) => {
    return (
        <div className='col-6 border border-dark rounded-5'style={{minHeight:"600px"}}>
            <h1 className='text-center' style={{userSelect:'none'}}>{title}</h1>            {
                items.map(
                    (item , i)=>{
                        return <div key={i}  className={`fs-4 fw-bold  text-white my-2 ps-2 shadow position-relative ${Mode}`} style={{userSelect:'none'}}>
                            {item}
                            <span className='position-absolute' style={{right:10}}>
                            <i className="fa-solid fa-delete-left" onClick={()=> moveHendler(i)}></i>
                            </span>
                         </div>
                    }
                )
            }
        </div>
            
    );
}

export default Dispaly;
