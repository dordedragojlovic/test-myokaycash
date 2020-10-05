function clearAlert(timer) {
  clearTimeout(timer);
}

function onError( errorObj, setError, setLoading){
  const err = String(errorObj);
  const message = err.split(':');
  const error = {
    warning: true,
    errorMsg: message[2]
  }

  setError(error)

  const timer = setTimeout( () =>{
    setError({warning: false});
    setLoading(false)
    clearAlert( timer);
  }, 2700);
}

export default onError;