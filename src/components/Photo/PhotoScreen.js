import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import { connect } from 'react-redux';
import { getListThunk } from '../../thunks/photo';

class MainScreen extends Component {
	state = {
		albumId: null,
		id: null,
		title: null,
		url: null
	};

	constructor(props) {
		super(props);
		this.getPhotoDetails = this.getPhotoDetails.bind(this);
		this.getPhotoList = this.getPhotoList.bind(this);
	}

	getPhotoDetails(id) {
		if (this.props.photos.length > 0) {
			const item = this.props.photos.find((item) => item.id === parseInt(id, 10));
			this.setState({ ...item });
		} else {
			this.getPhotoList();
		}
	}

	getPhotoList() {
		this.props.dispatch(getListThunk());
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.photos) {
			this.getPhotoDetails(this.state.id);
		}
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		this.setState({ id });
		this.getPhotoDetails(id);
	}

	render() {
		const { albumId, id, title, url } = this.state;
		return (
			<Container>
				<Row>
					<Col xs={{ size: 6, offset: 3 }}>
						{albumId ? (
							<Card className="photo">
								<CardImg top width="100%" src={url} alt={title} />
								<CardBody>
									<CardTitle>{title}</CardTitle>
									<CardSubtitle>Id: {id}</CardSubtitle>
									<CardSubtitle>Album id: {albumId}</CardSubtitle>
								</CardBody>
							</Card>
						) : (
							'Not found'
						)}
					</Col>
				</Row>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return {
		photos: state.photos
	};
}

export default connect(mapStateToProps)(MainScreen);
