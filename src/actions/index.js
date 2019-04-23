import { GET_PHOTO_LIST } from '../lib/constants';

export function getPhotoList(payload) {
	return { type: GET_PHOTO_LIST, payload };
}
