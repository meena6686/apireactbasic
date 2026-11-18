import React from 'react'

export default function PassFailElse() {
    const marks=20;
    if(marks>=35){
        return(
            <>
                <h2>Student Result</h2>
                <p>Marks:{marks}</p>
                <h3>Result:Pass</h3>
            </>
        );
    }else{
        return(
            <div>
                <h2>Student Result</h2>
                <p>Marks:{marks}</p>
                <h3>Result:Fail</h3>
            </div>
        )
    }
    return (
    <div>
        <h2>Student Result</h2>
    </div>
  )
}