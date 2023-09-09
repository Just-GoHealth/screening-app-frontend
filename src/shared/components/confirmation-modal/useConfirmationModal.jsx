import React, { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

const useConfirmationModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [onConfirm, setOnConfirm] = useState(null);

  const openModal = (text, onConfirmCallback) => {
    setModalText(text);
    setConfirmationResult(null);
    setOnConfirm(() => onConfirmCallback);
    setIsModalOpen(true);
  };

  const closeModal = (result) => {
    setConfirmationResult(result);
    if (result) {
      onConfirm();
    }
    setIsModalOpen(false);
  };

  const ModalComponent = isModalOpen ? (
    <ConfirmationModal text={modalText} onClose={closeModal} />
  ) : null;

  return { openModal, ModalComponent, confirmationResult };
};

export default useConfirmationModal;
