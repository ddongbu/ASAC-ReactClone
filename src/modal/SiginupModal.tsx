import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import React from 'react';

interface ModalProps {
  openModal: {
    open: boolean;
    message?: string;
  };
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ openModal, closeModal }) => {
  if (!openModal.open) return null;

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 text-center">
      <div className="bg-white rounded w-10/12 h-64 md:w-1/3 p-10 flex justify-center items-center">
        <div>
          <div className="modal-content mb-10 font-semibold text-xl">
            <p>
              이메일 혹은 비밀번호 양식이 맞지 않습니다 <br></br>
              <br></br> 다시 시도해주세요.
            </p>
            <p className="text-red-500">{openModal.message}</p>
          </div>
          <button
            onClick={closeModal}
            className="w-full flex text-gray-500 justify-center text-center"
          >
            <CloseRoundedIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
