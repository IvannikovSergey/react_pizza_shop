import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock(props) {
    return ( <ContentLoader
        className='pizza-block'
        speed={1}
        width={280}
        height={456}
        viewBox="0 0 280 456"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="132" cy="130" r="130" />
        <rect x="0" y="269" rx="3" ry="3" width="280" height="24" />
        <rect x="0" y="308" rx="3" ry="3" width="279" height="86" />
        <rect x="257" y="390" rx="0" ry="0" width="1" height="0" />
        <rect x="0" y="406" rx="3" ry="3" width="90" height="44" />
        <rect x="130" y="406" rx="20" ry="20" width="150" height="44" />
    </ContentLoader> )


}

export default LoadingBlock