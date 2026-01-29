import React from 'react';
function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' alt='broker' />
                </div>
                <div className='col-6 p-5 mt-4'>
                    <h1>Largest stock broker in india</h1>
                    <p className='mb-5'>2 + million Zerodha clients contributes to over 15% of all retail order volumes in india daily by trading and investing in :</p>
                    <div className='row'>
                        {/* cols for left side list */}
                        <div className='col-6'>
                    <ul>
                        <li>
                            <p>Future and Options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        <li>
                            <p>Currency derivatives</p>
                        </li>
                    </ul>

                    </div>

                    {/* another col for right side list */}
                <div className='col-6'>
                     <ul>
                        <li>
                            <p>stocks & iPOs</p>
                        </li>
                        <li>
                            <p>Direct mutual funds</p>
                        </li>
                        <li>
                            <p>bonds and Govt. Securities</p>
                        </li>
                    </ul>
                </div>

            </div>

            {/* img must be there bcz it is present in second col-6 */}
            <img src='media/images/pressLogos.png' alt='pressLogo' style={{width:"80%"}}/>
                    
         </div>

    </div>

 </div>
    );
}

export default Awards;