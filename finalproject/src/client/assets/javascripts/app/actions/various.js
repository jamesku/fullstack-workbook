
export const SHOW_ERROR_BOX = 'SHOW_ERROR_BOX';
export const HIDE_ERROR_BOX = 'HIDE_ERROR_BOX';

export  function showErrorBox(message){
  return {
    type: SHOW_ERROR_BOX,
    message
  };
}

export  function hideErrorBox(){
  return {
    type: HIDE_ERROR_BOX
  };
}
