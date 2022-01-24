import * as actionTypes from './recipientActionTypes';

export function createRecipient(data) {
  return {
    type: actionTypes.Create,
    data,
  }
}

export function deleteRecipient(id) {
  return {
    type: actionTypes.Delete,
    id,
  }
}

export function editRecipient(data) {
  return {
    type: actionTypes.Edit,
    data,
  }
}