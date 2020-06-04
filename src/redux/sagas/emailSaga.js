import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* emailRescue(action) {
    try {
        const response = yield axios.post('/api/email', action.payload);
    } catch (error) {
        console.log(error);
        alert('Error sending email')
    }
}

function* emailSaga() {
    yield takeLatest('SEND_MAIL', emailRescue);
}

export default emailSaga;