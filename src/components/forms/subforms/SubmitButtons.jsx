import React from 'react';

function SubmitButtons({ withDelete, onDelete, onCancel }) {
  return (
    <div className="submitButtons">
      {withDelete && (
        <button
          className="btn btn-outline-danger"
          type="button"
          onClick={onDelete}
        >
          Delete card
        </button>
      )}
      <button
        className="btn btn-outline-primary"
        type="button"
        onClick={onCancel}
      >
        Cancel
      </button>
      <button className="btn btn-primary" type="submit">Save card</button>
    </div>
  );
}

export default SubmitButtons;
