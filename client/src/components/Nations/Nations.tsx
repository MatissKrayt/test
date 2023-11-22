import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { allKorabli } from '../../redux/thunkActions';

import { Nation } from '../Nation/Nation';
import { IVehicles } from '../../types';


export const Nations = (): JSX.Element => {

  const nationDiv = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
  }

  const dispatch = useAppDispatch();

  const response = useAppSelector((store) => store.korabliSlice.vehicles);
  const valueVehicles = response.vehicles;
  
  useEffect(() => {
    void dispatch(allKorabli());
  }, [dispatch]);

  let uniqueNations;
  let uniqueFlagNations: unknown[];
  let uniqueColorNations: unknown[];

  if(valueVehicles?.length > 0) {
    
    const boxNations = [];
    const boxFlagNations = [];
    const boxColorNations = [];
  
    function unique(arr: any[]) {
      return Array.from(new Set(...arr));
    }
  
    boxNations.push(valueVehicles.map((el: IVehicles) => el.nation.title));
    boxFlagNations.push(valueVehicles.map((el: IVehicles) => el.nation.icons.large));
    boxColorNations.push(valueVehicles.map((el: IVehicles) => el.nation.color));

    uniqueNations = unique(boxNations);
    uniqueFlagNations = unique(boxFlagNations);
    uniqueColorNations = unique(boxColorNations);
  }

  return (
    <>
      <div className='divNation' style={nationDiv}>
        {uniqueNations?.map((nation, i) => (<Nation 
                                                key={i}
                                                title={nation}
                                                flag={uniqueFlagNations[i]} 
                                                colorName={uniqueColorNations[i]}
                                                />))}
      </div>
    </>
  )
}


