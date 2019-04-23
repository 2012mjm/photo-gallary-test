import axios from 'axios';

import { getPhotoList } from '../actions';
import { API_URL } from '../lib/constants';

export const getListThunk = () => (dispatch, getState) => axios
	.get(`${API_URL}photos`)
	.then((res) => {
		dispatch(getPhotoList(res.data.slice(0, 99)));
		return res.data.slice(0, 99);
	})
	.catch((e) => {
		throw e;
	});