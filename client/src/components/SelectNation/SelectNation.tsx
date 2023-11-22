import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

import { Type } from '../Type/Type';
import { IFilterElement, IMapElement } from '../../types';

export const SelectNation = (): JSX.Element => {
    const params = useParams();
    
    const response = useAppSelector((store) => store.korabliSlice.vehicles);
    const valueVehicles = response?.vehicles;

    const selectNation = valueVehicles.filter((el: IFilterElement) => el.nation.title === params.nation);

    const box = [];

    function unique(arr: any[]) {
      return Array.from(new Set(...arr));
    }

    box.push(selectNation.map((el: IMapElement) => el.type.title))

  return (
    <>
        {unique(box)?.map((type, i) => (<Type key={i} title={type}/>))}            
    </>
  )
}
