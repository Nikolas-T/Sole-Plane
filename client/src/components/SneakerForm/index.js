import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_SNEAKER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const SneakerForm = ({ profileId }) => {
  const [sneaker, setSneaker] = useState('');

  const [addSneaker, { error }] = useMutation(ADD_SNEAKER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addSneaker({
        variables: { profileId, sneaker },
      });

      setSneaker('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Add in your favorite kicks below.</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Choose your shoes..."
              value={sneaker}
              className="form-input w-100"
              onChange={(event) => setSneaker(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Pick your kicks!
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to select shoes. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default SneakerForm;
