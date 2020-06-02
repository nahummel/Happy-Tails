import axios from 'axios';
import { put, takeLatest} from 'redux-saga/effects';

function* fetchDogs(action) {
    try {
        if (action.payload === undefined) {
            const response = yield axios.get('/api/dog');
            console.log('in fetchDogs', response.data);
            yield put({
                type: 'SET_DOGS',
                payload: response.data
            });
        } else {
            const id = action.payload
            const response = yield axios.get(`/api/dog/${id}`);
            console.log('in fetchDogs', response.data);
            yield put({
                type: 'SET_DOGS',
                payload: response.data
            });
        }
    } catch (error) {
        console.log(error);
        alert('Error getting Dogs')
    }
}

function* postDog(action) {
    try {
        const response = yield axios.post('/api/dog', action.payload);
    } catch (error) {
        console.log(error);
        alert('Error posting dog')
    }
}

function* dogSaga() {
    yield takeLatest('FETCH_DOGS', fetchDogs);
    yield takeLatest('POST_DOG', postDog);
}

export default dogSaga;