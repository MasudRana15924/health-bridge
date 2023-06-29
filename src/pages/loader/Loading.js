import React from 'react';
import { LineWave } from 'react-loader-spinner'
const Loading = () => {
    return (
        <div className="w-1/4 mx-auto mt-48">
            <LineWave
                height="200"
                width="200"
                color="#4fa94d"
                ariaLabel="line-wave"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                firstLineColor=""
                middleLineColor=""
                lastLineColor=""
            />
        </div>
    );
};

export default Loading;