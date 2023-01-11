import { ModalContainer } from "./styles";
import { X } from "phosphor-react";

interface ModalProps {
  onToggleModal: (stateOpenModal: boolean) => void;
  stateOpenModal: boolean;
}

export function Modal({ onToggleModal, stateOpenModal }: ModalProps) {
  return (
    <ModalContainer>
      <X size={32} onClick={() => onToggleModal(stateOpenModal)} />
    </ModalContainer>
  );
}
