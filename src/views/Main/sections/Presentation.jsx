import React from 'react';
import PropTypes from 'prop-types';

import Anime from 'react-anime';
import classNames from 'classnames';
import injectSheet from 'react-jss';

import {
    Row,
    Col,
    Grid
} from 'react-flexbox-grid';

import P from '../../../components/P';

import highlights from '../../../variables/highlights';

import presentationStyle from '../../../assets/jss/views/main/sections/presentationStyle';

class Presentation extends React.Component {

    sliderInterval = null;

    state = {
        selected: 0
    };

    componentDidMount() {
        this.setSliderInterval();
    }

    setSliderInterval = () => {
        if (this.sliderInterval) {
            clearInterval(this.sliderInterval);
        }

        this.sliderInterval = setInterval(() => {
            this.setState(prevState => ({
                selected: prevState.selected === highlights.length - 1 ? 0 : prevState.selected + 1
            }));
        }, 10000);
    };

    render() {
        const {
            classes
        } = this.props;

        const {
            selected
        } = this.state;

        return (
            <div className={classes.container}>
                <Grid fluid className={classes.grid}>
                    <Row className={classes.row}>
                        <Col lg={5} className={classes.col}>
                            <Row className={classes.descriptionContainer}>
                                <Col lg={3} className={classes.descriptionIconContainer}>
                                    <Anime opacity={[0, 1]} translateX={['-10', '0']} delay={100} duration={500} easing="easeInOutQuart" key={Date.now()}>
                                        <img {...highlights[selected].icon} className={classes.descriptionIcon} />
                                    </Anime>
                                </Col>
                                <Col lg={9}>
                                    <div className={classes.descriptionText}>
                                        <Anime opacity={[0, 1]} translateX={['-10', '0']} delay={(e, i) => (i + 1) * 200} duration={500} easing="easeInOutQuart" key={Date.now()}>
                                            <div><P className={classes.descriptionTitle}>{highlights[selected].title}</P></div>
                                            <div><P className={classes.descriptionSubtitle}>{highlights[selected].subtitle}</P></div>
                                        </Anime>
                                    </div>
                                </Col>
                                <Anime scaleX={[0, 1]} delay={600} duration={700} easing="easeInOutQuart" key={Date.now()}>
                                    <div className={classes.descriptionUnderline} />
                                </Anime>
                            </Row>
                        </Col>
                        <Col lg={7} className={classNames(classes.col, classes.sliderCol)}>
                            <div className={classes.sliderContainer}>
                                <div className={classNames(classes.sliderImage, classes[`slide${selected}`])} />
                                <div className={classes.sliderBulletsContainer}>
                                    {highlights.map((any, key) =>
                                        <div className={classes.sliderBulletContainer} onClick={e => this.changeSlide(key)} key={key}>
                                            <div className={classNames(classes.sliderBullet, selected === key ? classes.activeSliderBullet : null)} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

    changeSlide = index => {
        this.setState({
            selected: index
        }, () => {
            this.setSliderInterval();
        });
    };
}

Presentation.propTypes = {
    classes: PropTypes.object.isRequired
};

export default injectSheet(presentationStyle)(Presentation);
