import * as types from '../redux_constants'; 

// Increase Counter
export function funMessage(message) {
  return {
    type: types.MESSAGE,
    message: message
  }
}
