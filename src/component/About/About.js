import React from 'react';
import './About.css'
import img1 from '../../images/offset_comp_772626-opt 3 (1).png'
import img2 from '../../images/offset_comp_772626-opt 2.png'
import img3 from '../../images/offset_comp_772626-opt 3.png'

const About = () => {
    return (
        <section class="about-section">
		<div class="container">
			
			<div class="image-section">
				<img  src={img1} alt="" />
                <img className="about-img-2" src={img2} alt="" />
                <img className="about-img-3" src={img3} alt="" />
			</div>
            <div class="content-section">
				<div class="title">
					<h1>About Us</h1>
				</div>
				<div class="content">
					<p>Our Creative Agency Has Years Of Experience In Custom Photography For Marketing, Including Technology Product Shots, Executive Portraits, In-House Food Styling And Photo Shoots For Special Events. Our Creative Agency Has Years Of Experience In Custom Photography For Marketing, Including Technology Product Shots, Executive Portraits, In-House Food Styling And Photo Shoots For Special Events</p>					
				</div>
			</div>
		</div>
	</section>
    );
};

export default About;