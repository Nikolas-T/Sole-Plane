import React from 'react';
import { useMutation } from '@apollo/client';

import { REMOVE_SNEAKER } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const SneakersList = ({ sneakers, isLoggedInUser = false }) => {
  const [removeSneaker, { error }] = useMutation(REMOVE_SNEAKER, {
    update(cache, { data: { removeSneaker } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removeSneaker },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleRemoveSneaker = async (sneaker) => {
    try {
      const { data } = await removeSneaker({
        variables: { sneaker },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!sneakers.length) {
    return <h3>No Sneakers Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {sneakers &&
          sneakers.map((sneaker) => (
            <div key={sneaker} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                  <span>{sneaker}</span>
                  {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemoveSneaker(sneaker)}
                    >
                      X
                    </button>
                  )}
                </h4>
              </div>
            </div>
          ))}
      </div>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default SneakersList;
