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
        <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
        crossorigin="anonymous"
            />

                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Who the heck is <b className="rhymes1">Sam Zhou </b>?</h2>
                            Well he's someone I'd like you to <b className="rhymes1">Know</b> <br />
                            Although you wouldn't take him out to <b className="rhymes2">Dinner</b><br />
                            Here's hoping you will still find him a <b className="rhymes2">Winner</b><br />
                        </header>



                        <ul className="actions">
                            <li><a href="#two" className="button">Get Started!</a></li>
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
                            <li><a href="#about" className="button">Contact Me To Learn More!</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>How I Like My Code</h2>
                        <p>Here are some of the philosophies I try to implement when coding in a production environment</p>
                        <ul>
                            <li>
                                Keep the code D.R.Y(Don't Repeat Yourself).
                            </li>
                            <li>
                                Keep the code simple (KISS) and optimize at the end of development.
                            </li>
                            <li>
                                Break big issue into small but self contained and readable commits. (For code reviewer)
                            </li>
                        </ul>
                        <p>I'm super open to changing my practices based on feedback, culture and language and always looking for ways improve.</p>
                    </section>
                    <section id="about">
                        <h2>About</h2>
                        <p className="paragraph__margin"><i>For my Linkdin and Github, check out the side bar footer.</i></p>
                        <i>This site was created using the <a href="https://github.com/codebushi/gatsby-starter-strata" target="_blank" rel="noopener noreferrer">GatsbyJs starter pack: Strata by codebushi</a>
                        </i>


                        <div className="row">
                            <p>
                                For resume and inquires you can contact me @
                            </p>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a >samzhoucontact@gmail.com</a>
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