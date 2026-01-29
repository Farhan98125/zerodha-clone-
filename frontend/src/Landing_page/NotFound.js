import React from 'react';
function NotFound() {
    return (
        // p-5 padding
        <div className='container p-5 mb-5'>
            {/* here we work on single row so we use only row */}
            <div className='row text-center'>

                <h1 className='mt-5 text-muted'> 404 Not Found</h1>
                <p> Sorry,the page you are looking for does not exist.</p>
                
            </div>

        </div>
    );
}

export default NotFound;