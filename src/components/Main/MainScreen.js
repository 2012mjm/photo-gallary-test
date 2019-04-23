import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';

import { connect } from 'react-redux';
import { getListThunk } from '../../thunks/photo';

import './main.css';

class MainScreen extends Component {
	state = {
		loading: false,
		list: []
	};

	constructor(props) {
		super(props);
		this.getPhotoList = this.getPhotoList.bind(this);
	}

	getPhotoList() {
		this.setState({ loading: true });

		this.props
			.dispatch(getListThunk())
			.then((res) => {
				this.setState({ list: res, loading: false });
				return true;
			})
			.catch(() => {
				this.setState({ loading: false });
				return false;
			});
	}

	componentDidMount() {
		this.getPhotoList();
	}

	render() {
		const { list, loading } = this.state;
		return (
			<Container>
				<Row>
					{loading ? 'LOADING ...' : null}

					{list.map((item) => (
						<Col xs="2" className="photo" key={item.id}>
							<Card>
								<CardImg top width="100%" src={item.thumbnailUrl} alt={item.title} />
								<CardBody>
									<CardTitle className="title">{item.title}</CardTitle>
									<Button
										color="info"
										outline
										size="sm"
										block
										className="button-details"
										onClick={() => {
											this.props.history.push(`photo/${item.id}`);
										}}
									>
										Show details
									</Button>
								</CardBody>
							</Card>
						</Col>
					))}
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
