import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchDogs() {
    try {
        const response = yield axios.get('/api/dog');
        console.log('in fetchDogs', response.data);
        yield put({
            type: 'SET_DOGS',
            payload: response.data
        });
    } catch (error) {
        console.log(error);
        alert('Error getting Dogs')
    }
}

function* userSaga() {
    yield takeLatest('FETCH_DOGS', fetchDogs);
}

export default userSaga;