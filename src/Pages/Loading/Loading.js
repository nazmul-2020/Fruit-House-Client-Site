import React from 'react';
// import { Spinner } from 'react-bootstrap';
import loading from '../../Image/loading.gif'

const Loading = () => {
    return (
        <div style={{height: '100vh'}} className='d-flex justify-content-center align-items-center'>
            <div style={{height: '300px'}} className='d-flex justify-content-center align-items-center'>
            <img src={loading} alt="" />
        </div>
        </div>
    );
};

export default Loading;
