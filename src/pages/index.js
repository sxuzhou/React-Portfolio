import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'
import leftarrow from '../assets/images/buttons/left.png'
import rightarrow from '../assets/images/buttons/right.png'
import liquibase from '../assets/images/Logos/liquibase.png'
import spring from '../assets/images/Logos/spring-by-pivotal.png'
import jsonApi from '../assets/images/Logos/jsonapi.png'
import mean from '../assets/images/Logos/mean.png'



import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', thumbnail: thumb01, caption: 'Photo 1', description: ' ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '4', thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '5', thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Sam's Portfolio"
        const siteDescription = "showcasing the goods"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <intro>
                            <h2>Who the heck is <rhymes1>Sam Zhou </rhymes1>?</h2>
                            Well he's someone I'd like you to <rhymes1>Know</rhymes1> <br />
                            Although you wouldn't take him out to <rhymes2>Dinner</rhymes2><br />
                            Here's hoping you will still find him a <rhymes2>Winner</rhymes2><br />
                            </intro>
                        </header>


                        <p>
                            Where would you like to start?
                        </p>
                        <ul className="actions">
                            <li><a href="#two" className="button">Learn More</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <header className="major">
                            <h2>Co-op as Java Developer (taking the red pill)</h2>
                            Things I've Learnt:
                        </header>

                        <div class = "carousel">
                            <button class="carousel__button carousel__button--left">
                                <img src={leftarrow} alt=""/>
                            </button>
                            <div class="carousel__track-container">
                            <ul class="carousel__track">
                                <li class="carousel__slide">
                                    <img src={liquibase} alt =""/>
                                    <p class = "carousel__textblock">cool thinks</p>
                                </li>
                                <li className="carousel__slide">
                                    <img src={spring} alt=""/>
                                </li>
                                <li className="carousel__slide">
                                    <img src={jsonApi} alt=""/>
                                </li>
                                <li className="carousel__slide">
                                    <img src={mean} alt=""/>
                                </li>
                            </ul>

                            </div>
                            <button className="carousel__button carousel__button--right">
                                <img src={rightarrow} alt=""/>
                            </button>

                            <div class="carousel__nav">
                                <button class="carousel__indicator current-slide"></button>
                                <button className="carousel__indicator"></button>
                                <button className="carousel__indicator"></button>

                            </div>

                        </div>


                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1234 Somewhere Rd.<br />
                                        Nashville, TN 00000<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        000-000-0000
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">hello@untitled.tld</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex