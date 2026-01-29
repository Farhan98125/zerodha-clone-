import React from 'react';
function OpenAccount() {
    return ( 
         // p-5 padding
        <div className='container p-5 mb-5'>
            {/* here we work on single row so we use only row */}
            <div className='row text-center'>
             

                <h1 className='mt-5 text-muted'> Open a Zerodha account</h1>
                <p className='mt-3 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                {/* <button>Sign Up For Free</button> */}
                {/* style is given for button to algin in centre */}
                <button style={{width:"20%",margin:"0 auto"}}  type="button" class=" mt-3 p-2 btn btn-primary fs-5 mb-5 ">Sign Up for Free</button>

            </div>

        </div>
     );
}

export default OpenAccount;