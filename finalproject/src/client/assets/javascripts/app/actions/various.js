
export const SHOW_ERROR_BOX = 'SHOW_ERROR_BOX';

export default function showErrorBox(message){
  return {
    type: SHOW_ERROR_BOX,
    message,
    shown:true
  };
}
