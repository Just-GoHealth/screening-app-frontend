
const ModalOverlay = ({ setShowState, children }) => {
  return (
    <div
      id="modal-container"
      className="fixed w-full h-full grid grid-rows-[1fr] overflow-hidden transition-all inset-0 bg-gray-500 bg-opacity-30 z-[900] modal-container">
      <div className="w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default ModalOverlay;