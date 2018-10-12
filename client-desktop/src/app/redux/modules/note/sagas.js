import { call, put, takeEvery } from 'redux-saga/effects';
import graphqlClient from '../../../api/graphqlClient';
import { FETCH_NOTES, CREATE_NOTE, UPDATE_NOTE } from './types';
import { ALL_NOTES_QUERY, CREATE_NOTE_MUTATION, UPDATE_NOTE_MUTATION } from './graphqlMock';
import * as actions from './actions';

function* fetchNotes() {
  try {
    const response = yield call([graphqlClient, 'request'], ALL_NOTES_QUERY);
    yield put(actions.fetchNotesSuccess(response.notes));
  } catch (error) {
    console.error(error);
    yield put(actions.fetchNotesError(error));
  }
}

function* createNote(action) {
  try {
    const newNoteInfo = action.payload;
    const response = yield call([graphqlClient, 'request'], CREATE_NOTE_MUTATION, newNoteInfo);
    yield put(actions.createNoteSuccess(response.createNote));
  } catch (error) {
    console.error(error);
    yield put(actions.createNoteError(error));
  }
}

function* updateNote(action) {
  try {
    const noteUpdate = action.payload;
    const response = yield call([graphqlClient, 'request'], UPDATE_NOTE_MUTATION, noteUpdate);
    yield put(actions.updateNoteSuccess(response.updateNote));
  } catch (error) {
    console.error(error);
    yield put(actions.updateNoteError(error));
  }
}

function* noteSaga() {
  yield takeEvery(FETCH_NOTES.START, fetchNotes);
  yield takeEvery(CREATE_NOTE.START, createNote);
  yield takeEvery(UPDATE_NOTE.START, updateNote);
}

export default noteSaga;
