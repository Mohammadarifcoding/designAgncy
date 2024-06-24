import React, {useEffect} from 'react';
import OurCreation from './OurCreation';

const Portfolio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return (
        <div>
            <OurCreation/>
        </div>
    );
};

export default Portfolio;