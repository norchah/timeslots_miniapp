import React from "react";
import {useModalStore} from "../../stores/useModalStore";
import ModalWrapper from "./ModalWrapper.jsx";

export function ModalRoot() {
  const stack = useModalStore((s) => s.stack)
  if (!stack.length) return null

  return stack.map((item, index) => (
    <ModalWrapper key={index} isTop={index === stack.length - 1}>
      <item.modal {...item.props} />
    </ModalWrapper>
  ))
}