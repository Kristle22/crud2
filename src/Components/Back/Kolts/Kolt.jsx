import { useContext } from 'react';
import BackContext from '../BackContext';

function Kolt({ kolt }) {
  const { setDeleteData, setModalData } = useContext(BackContext);
  const handleDelete = () => {
    setDeleteData(kolt);
  };
  const handleModal = () => {
    setModalData(kolt);
  };

  // const dateFormat = new Intl.DateTimeFormat('en', {
  //   year: 'numeric',
  //   month: '2-digit',
  //   day: '2-digit',
  //   hour: '2-digit',
  //   minute: '2-digit',
  //   second: '2-digit',
  // });
  // console.log('DATE', kolt.lastUsed);
  return (
    <>
      <div className='comment'>
        <div className='flex-row'>
          <span
            style={{
              backgroundColor: kolt.koltColor ? kolt.koltColor : null,
              padding: '3px 10px',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              position: 'absolute',
              marginLeft: '-5px',
              marginTop: '-5px',
            }}
          ></span>
          <div
            style={{
              width: '16%',
              color: kolt.koltColor === 'white' ? 'black' : 'white',
            }}
          >
            {kolt.img ? (
              <img
                style={{ width: '100%', borderRadius: '5px' }}
                src={require(`../../../img/${kolt.koltColor}.png`)}
                alt='scoter_image'
              />
            ) : (
              <img
                style={{ width: '100%', borderRadius: '5px' }}
                src={require('../../../img/Envy-Colt2.png')}
                alt='scooters'
              />
            )}
          </div>
          <p>{kolt.regCode}</p>
          {kolt.isBusy === 1 ? (
            <p className='isAvailable'>available</p>
          ) : (
            <p className='isBusy'>busy</p>
          )}
          <p>
            {new Date(kolt.lastUsed).toISOString().slice(0, 10)}{' '}
            {new Date(kolt.lastUsed).toLocaleTimeString()}
          </p>
          <p>{Number(kolt.totalRide).toFixed(2)} km.</p>
          <div className='btns'>
            <button type='button' className='edt' onClick={handleModal}>
              <svg className='edt'>
                <use href='#Edit' />
              </svg>
            </button>
            <button type='button' className='dlt' onClick={handleDelete}>
              <svg>
                <use href='#Delete' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Kolt;
