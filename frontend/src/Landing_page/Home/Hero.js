import React from 'react';
function Hero() {
    return (
        // p-5 padding
        <div className='container p-5 mb-5'>
            {/* here we work on single row so we use only row */}
            <div className='row text-center'>
                <img src='media/images/HomeHero.png' alt='Home Img' className='mb-5' />

                <h1 className='mt-2'> Invest in everything</h1>
                <p> Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                {/* <button>Sign Up For Free</button> */}
                {/* style is given for button to algin in centre */}
                <button style={{width:"20%",margin:"0 auto"}}  type="button" class=" mt-3 p-2 btn btn-primary fs-5 mb-5">Sign Up For Free</button>

            </div>

        </div>
    );
}

export default Hero;