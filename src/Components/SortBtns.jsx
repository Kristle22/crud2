import { useContext } from 'react';
import KoltContext from './KoltContext';

function SortBtns() {
  const { selectDate, selectRide, sort } = useContext(KoltContext);

  return (
    <>
      <select className='sorting' value={selectDate} onChange={sort}>
        <option default value='last_used' selected>
          Last Used
        </option>
        <option value='sort_date_asc'>sort 0 - 9</option>
        <option value='sort_date_desc'>sort 9-0</option>
        <option value='default'>default</option>
      </select>
      <select className='sorting' value={selectRide} onChange={sort}>
        <option default value='total_ride' selected>
          Total Ride
        </option>
        <option value='sort_km_asc'>sort 0 - 9</option>
        <option value='sort_km_desc'>sort 9-0</option>
        <option value='default'>default</option>
      </select>
    </>
  );
}

export default SortBtns;
