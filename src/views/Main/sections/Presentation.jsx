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

import image_1 from '../../../assets/img/main/sections/presentation/image_1.jpg';
import image_2 from '../../../assets/img/main/sections/presentation/image_2.jpg';
import image_3 from '../../../assets/img/main/sections/presentation/image_3.jpg';
import best_western_logo from '../../../assets/img/main/sections/presentation/best_western_logo.png';

import presentationStyle from '../../../assets/jss/views/main/sections/presentationStyle';

class Presentation extends React.Component {

	state = {
		selected: 0
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
				<Grid fluid>
					<Row>
						<Col lg={5} className={classes.col}>
							<Row className={classes.descriptionContainer}>
								<Col lg={3} className={classes.descriptionIconContainer}>
									<Anime opacity={[0, 1]} translateX={['-10', '0']} duration={300} easing="easeInOutQuart">
										<img src={best_western_logo} className={classes.descriptionIcon} alt="Best Western" />
									</Anime>
								</Col>
								<Col lg={9}>
									<div className={classes.descriptionText}>
										<Anime opacity={[0, 1]} translateX={['-10', '0']} delay={(e, i) => (i + 1) * 120} duration={300} easing="easeInOutQuart">
											<div><P className={classes.descriptionTitle}>Vivá Porto de Galinhas</P></div>
											<div><P className={classes.descriptionSubtitle}>Construção do hotel</P></div>
										</Anime>
									</div>
								</Col>
								<Anime scaleX={[0, 1]} delay={300} duration={500} easing="easeInOutQuart">
									<div className={classes.descriptionUnderline} />
								</Anime>
							</Row>
						</Col>
						<Col lg={7} className={classes.col}>
							<div className={classes.sliderContainer}>
								<div className={classes.sliderImagesContainer}>
									<img src={image_1} className={classNames(classes.sliderImage, selected === 0 ? classes.activeSliderImage : null)} alt="Slide" />
									<img src={image_2} className={classNames(classes.sliderImage, selected === 1 ? classes.activeSliderImage : null)} alt="Slide" />
									<img src={image_3} className={classNames(classes.sliderImage, selected === 2 ? classes.activeSliderImage : null)} alt="Slide" />
									<div className={classes.sliderImageOverlay} />
								</div>
								<div className={classes.sliderBulletsContainer}>
									<div className={classes.sliderBulletContainer} onClick={e => this.changeSlide(0)}>
										<div className={classNames(classes.sliderBullet, selected === 0 ? classes.activeSliderBullet : null)} />
									</div>
									<div className={classes.sliderBulletContainer} onClick={e => this.changeSlide(1)}>
										<div className={classNames(classes.sliderBullet, selected === 1 ? classes.activeSliderBullet : null)} />
									</div>
									<div className={classes.sliderBulletContainer} onClick={e => this.changeSlide(2)}>
										<div className={classNames(classes.sliderBullet, selected === 2 ? classes.activeSliderBullet : null)} />
									</div>
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
		});
	};
}

Presentation.propTypes = {
	classes: PropTypes.object.isRequired
};

export default injectSheet(presentationStyle)(Presentation);
