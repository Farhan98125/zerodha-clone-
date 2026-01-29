import React from 'react';

import Hero from './Hero';
import CreateTicket from './CreateTicket';
function SupportPage() {
    return ( 
        <>
        {/* we remove navbar and footer from all the files bcz they are common now */}
        <Hero/>
        <CreateTicket/>
        </>
     );
}

export default SupportPage;