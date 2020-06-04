import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchRescue(action) {
    try {
        const id = action.payload
        const response = yield axios.get(`/api/rescue/${id}`);
        console.log('in fetchRescue', response.data);
        yield put({
            type: 'STORE_RESCUE',
            payload: response.data[0]
        });
    } catch (error) {
        console.log(error);
        alert('Error getting rescue info')
    }
}

function* rescueSaga() {
    yield takeLatest('FETCH_RESCUE', fetchRescue);
}

export default rescueSaga;