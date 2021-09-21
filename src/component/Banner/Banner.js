import React from 'react';
import './Banner.css'

const Banner = () => {
    
    return (
        <section className="banner-area">
            <div className="container">
                <div className="banner-content">
                    <h1 className="banner-heading">A Picture Is Worth A Thousand Word</h1>
                    <p>It clearly and beautifully captures your emotions- the joy,the laughter,the tears,you name it. Our pride is in offering the best shoots as we help you tell your story in photos. </p>
                    <div className="banner-btn">
                        <a>View Gallery</a>
                    </div>                   
                </div>
            </div>
            <i class="fas fa-arrow-right arrow-right"></i>
            <i class="fas fa-arrow-left arrow-left"></i>
        </section>
    );
};

export default Banner;