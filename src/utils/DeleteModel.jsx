/* eslint-disable react/prop-types */
import React from 'react';

// interface DeleteModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onConfirm: () => void;
//   title?: string;
//   message?: string;
// }

const DeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Delete Item',
  message = 'Are you sure you want to delete this item? This action cannot be undone.',
}) => {
  const [Loading, setLoading] = React.useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      onConfirm();
    } finally {
      onClose();
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-dark bg-opacity-50 z-50'>
      <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md'>
        <h2 className='text-lg font-semibold mb-4'>{title}</h2>
        <p className='mb-6'>{message}</p>
        <div className='flex justify-end gap-3'>
          <button onClick={onClose} className='px-4 py-2 text-dark rounded'>
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700'>
            {Loading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
