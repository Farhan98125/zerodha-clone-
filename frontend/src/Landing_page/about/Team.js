import React from 'react';
function Team() {
    return ( 
       <div className='container'>
            <div className='row p-3 mt-5 border-top'>
                <h1 className='text-center '>  People</h1>
            </div>

          

            <div className='row p-3 mt-5  text-muted ' 
            style={{lineHeight:"1.8",fontSize:"1.3em"}}>

                {/* left half */}
                <div className='col-6 p-5 text-center'>
                   <img 
                        src='media/images/nithinKamath.jpg'
                         style={{borderRadius:"100%",width:"50%",marginTop:"-12%"}}
                   />
                   <h4 className='mt-4'>Nithin kamath</h4>
                   <h6 className='mt-3'>founder,CEO</h6>
                </div>
                {/* right half */}
                

                <div className='col-6 p-3 fs-6'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                         hurdles he faced during his decade long stint as a trader. Today,
                          Zerodha has changed the landscape of the Indian broking industry.
                    </p>

                    <p> He is a member of the SEBI Secondary Market Advisory Committee
                         (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>

                    <p> Playing basketball is his zen.</p>
                    <p>Connect on <a href='' style={{textDecoration:"none"}}>Homepage</a> / <a href=''style={{textDecoration:"none"}}>TradingQnA</a> / <a href=''style={{textDecoration:"none"}}>Twitter</a> </p>

                </div>
            </div>



        </div>
     );
}

export default Team;