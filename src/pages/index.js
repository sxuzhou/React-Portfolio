import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Carousel from 'react-bootstrap/Carousel'

import gatsby from '../assets/images/Logos/gatsby.jpg'
import spring from '../assets/images/Logos/spring-by-pivotal.png'
import jsonApi from '../assets/images/Logos/jsonapi.png'
import angular from '../assets/images/Logos/angular.png'




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
        const siteTitle = "Sam's Portfolio";
        const siteDescription = "showcasing the goods";

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Who the heck is <b className="rhymes1">Sam Zhou </b>?</h2>
                            Well he's someone I'd like you to <b className="rhymes1">Know</b> <br />
                            Although you wouldn't take him out to <b className="rhymes2">Dinner</b><br />
                            Here's hoping you will still find him a <b className="rhymes2">Winner</b><br />
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
                            <h2>Here are some of the frameworks I've worked with</h2>
                        </header>
                    <div className="carousel_holder">
                        <Carousel>

                                <Carousel.Item>
                                    <a href="https://spring.io/" target="_blank" rel="noopener noreferrer">
                                    <img className="d-block w-100 " src={spring} alt="Java Spring Click for link"/>
                                    </a>
                                    <Carousel.Caption>
                                        <h2>A Java MVC Framework</h2>
                                    </Carousel.Caption>

                                </Carousel.Item>
                                <Carousel.Item>
                                    <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
                                    <img className="d-block w-100" src={gatsby} alt="GatsbyJs"/>
                                    </a>
                                    <Carousel.Caption>
                                        <h2>A React framework that built this site!</h2>
                                    </Carousel.Caption>

                                </Carousel.Item>
                                <Carousel.Item>
                                <a href="https://jsonapi.org/" target="_blank" rel="noopener noreferrer">
                                    <img className="d-block w-100" src={jsonApi} alt="jsonApi"/>
                                </a>
                                <Carousel.Caption>
                                    <h2>A standard for building API services</h2>
                                </Carousel.Caption>
                                </Carousel.Item>
                            <Carousel.Item>
                                <a href="https://angular.io/" target="_blank" rel="noopener noreferrer">
                                    <img className="d-block w-100" src={angular} alt="angular"/>
                                </a>
                                <Carousel.Caption>
                                    <h2>A Javascript front end framework</h2>
                                </Carousel.Caption>

                            </Carousel.Item>




                        </Carousel>
                    </div>



                        <ul className="actions">
                            <li><a href="#three" className="button">Full Portfolio</a></li>
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
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"/></div>
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