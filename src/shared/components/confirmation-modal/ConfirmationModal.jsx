import React from "react";

const ConfirmationModal = ({ text, onClose }) => {
  const handleConfirm = (value) => {
    onClose(value);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 z-40" />

      <div className="fixed inset-0 overflow-y-auto z-50">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <div className="flex flex-col gap-3 w-full max-w-md transform overflow-hidden rounded-2xl bg-white border-8 border-primary py-6 text-left align-middle shadow-xl transition-all">
            <h3 className="text-[30px] md:text-[45px] text-primaryBlue font-bold text-center">
              Confirmation
            </h3>
            <div className="text-center px-1">{text}</div>

            <div className="divide-y-2">
              <button
                className="w-full hover:bg-primary/10 py-3 text-primary"
                onClick={() => handleConfirm(true)}
              >
                Yes
              </button>
              <button
                className="w-full hover:bg-red-50 py-3 text-red-400"
                onClick={() => handleConfirm(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
