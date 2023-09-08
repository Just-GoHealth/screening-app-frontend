const Modal = ({ children }) => {
  return <div
    className="md:p-0 bg-white w-full md:w-9/12 lg:w-10/12 md:min-h-[60%] border-8 border-primary rounded-2xl flex flex-col justify-between">
    {children}
  </div>
}

Modal.displayName = 'Modal'

export default Modal