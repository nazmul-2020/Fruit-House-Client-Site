import React from 'react';
import img1 from '../../../Image/1.jpeg'
import img2 from '../../../Image/2.jpg'
import img3 from '../../../Image/3.jpg'
import img4 from '../../../Image/4.jpg'
import img5 from '../../../Image/5.jpg'
import img6 from '../../../Image/6.jpg'
import "./Gallery.css"

const Gallery = () => {
    return (
        <div className='text-center mt-5'>
            <h1 className=''>Available in our Stock</h1>
            <div className='container mt-4'>
                <div className='row g-3'>
                    <div className='col-lg-6'>
                        <div className='row g-3'>
                            <div className='col-lg-6 g-'>
                                <img className='w-100 rounded' src={img1} alt="" />
                            </div>
                            <div className='col-lg-6 g-'>
                                <img className='w-100 h-100 rounded' src={img2} alt="" />
                            </div>
                            <div className='col-lg-12 g-'>
                                <img className='w-100 rounded' src={img3} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <div className='row g-3'>
                            <div className='col-lg-12'>
                                <img className='w-100 img rounded' src={img4} alt="" />
                            </div>
                            <div className='col-lg-6'>
                                <img className='w-100 img1 rounded' src={img5} alt="" />
                            </div>
                            <div className='col-lg-6'>
                                <img className='w-100 img1 rounded' src={img6} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;