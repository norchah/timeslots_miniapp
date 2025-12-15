// components/modal/ModalRoot.jsx
import React from "react";
import {useModalStore} from "../../stores/useModalStore";
import ModalShell from "./ModalShell";

export default function ModalRoot() {
  const stack = useModalStore((s) => s.stack);

  if (!stack.length) return null;

  return (
    <>
      {stack.map((item, index) => {
        const isTop = index === stack.length - 1;
        const ModalComponent = item.component; // безопаснее
        const props = item.props || {};

        return (
          <ModalShell key={item.id} isTop={isTop}>
            {ModalComponent && <ModalComponent {...props} />}
          </ModalShell>
        );
      })}
    </>
  );
}