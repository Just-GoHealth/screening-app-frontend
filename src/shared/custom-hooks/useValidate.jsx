const useValidate = (error, errorMessage) => {
  return error ? (<span className="text-xs text-red-500">{errorMessage || error}</span>) : null
}

export default useValidate;