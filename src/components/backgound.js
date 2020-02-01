import React from 'react';
import backgrounds from '../consts/backgrounds';

function Background({ children }) {
    return <React.Fragment>
        <div className="h-screen w-screen"
            style={{ 
                background: `url('${backgrounds[1]}') center no-repeat`,
                backgroundSize: 'cover' 
                }}>
            {children}
        </div>
    </React.Fragment>
}

export default Background;