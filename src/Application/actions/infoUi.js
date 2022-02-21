export const SET_ISLOADING = '[set] is loading';
export const SER_ERROR = '[set] error';

export const setIsLoading = isLoading => ({
    type: SET_ISLOADING,
    payload: isLoading,
})

export const setError = message => ({
    type: SER_ERROR,
    payload: message,
})
