import React from "react";

const Modal = (props) => {
  const showModal = () => {
    const modal = document.getElementById(`my_modal_${props.id}`);
    modal.showModal();
  };

  return (
    <div>
      {/* Open the modal using ID.showModal() method */}
      <button className=" p-3 font-semibold badge badge-success text-white" onClick={showModal}>
      Moreinfo
      </button>
      <dialog id={`my_modal_${props.id}`} className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg text-center underline">Technologies and usage</h3>
          <p className="py-3 text-left mx-1">{props.more}</p>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
