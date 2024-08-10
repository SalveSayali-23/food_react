import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
const Modal = ({ children, open, className = "" ,onClose}) => {
  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    // Clean up function to handle the closing of cart,
    return () => modal.close();
  }, [open]);
  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};
export default Modal;
