import React from "react";
import {useModalStore} from "../../stores/useModalStore";
import ModalWrapper from "./ModalWrapper.jsx";

export default function ModalRoot() {
  const stack = useModalStore((s) => s.stack);
  if (!stack.length) return null;

  const top = stack[stack.length - 1];
  const ModalComponent = top.modal; // 🔑 ВАЖНО

  return (
    <ModalWrapper>
      <ModalComponent {...top.props} />
    </ModalWrapper>
  );
}