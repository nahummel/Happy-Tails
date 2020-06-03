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
        yield put({
            type: 'FETCH_DOGS',
            payload: action.payload.rescue_id
        });
    } catch (error) {
        console.log(error);
        alert('Error posting dog')
    }
}

function* deleteDog(action) {
    try {
        const id = action.payload[0]
        const rescue_id = action.payload[1]
        const response = yield axios.delete(`/api/dog/${id}`);
        yield put({
            type: 'FETCH_DOGS',
            payload: rescue_id
        });
    } catch (error) {
        console.log(error);
        alert('Error removing dog')
    }
}

function* updateDogInfo(action) {
    try{
        const id = action.payload.dog_id
        const response = yield axios.put(`/api/dog/info/${id}`, action.payload);
        yield put({
            type: 'STORE_DOG',
            payload: action.payload
        });
    } catch (error) {
        console.log(error);
        alert('Error updating dog info')
    }
}

function* updateDogQuest(action) {
    try {
        console.log()
        const id = action.payload.id
        const response = yield axios.put(`/api/dog/quest/${id}`, action.payload);
        yield put({
            type: 'STORE_DOG',
            payload: action.payload
        });
    } catch (error) {
        console.log(error);
        alert('Error updating dog quest')
    }
}

function* dogSaga() {
    yield takeLatest('FETCH_DOGS', fetchDogs);
    yield takeLatest('POST_DOG', postDog);
    yield takeLatest('DELETE_DOG', deleteDog);
    yield takeLatest('UPDATE_DOG_INFO', updateDogInfo);
    yield takeLatest('UPDATE_DOG_QUEST', updateDogQuest);
}

export default dogSaga;