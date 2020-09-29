function onError( error, user, setWarning, setErrorMsg){
  const err = String(error);
  const message = err.split(':');

  setErrorMsg(message[2]);
  setWarning(true);

  const timer = setTimeout( () =>{
    setWarning(false);
    clearAlert( timer);
  }, 2700);
}

function clearAlert(timer) {
  clearTimeout(timer);
}


export default onError;