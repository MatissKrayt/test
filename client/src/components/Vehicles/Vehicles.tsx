import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

import { Vehicle } from "../Vehicle/Vehicle";
import { IFilterTwoElements, IVehicles } from "../../types";

export const Vehicles = (): JSX.Element => {

  const divVehicles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
  }

  const params = useParams();

  const response = useAppSelector((store) => store.korabliSlice.vehicles);
  const valueVehicles = response?.vehicles;

  const selectVehicles = valueVehicles.filter((vehicle :IFilterTwoElements) => vehicle.nation.title === params.nation && vehicle.type.title === params.type);

  return (
    <>
      <h1>
        <img src={selectVehicles[0].type.icons.default} alt="" className="imgType"/>
        {params.type}
      </h1>
      <div style={divVehicles}>
        {selectVehicles.sort((a:IVehicles, b:IVehicles) => a.level - b.level).map((vehicle:IVehicles, i:number) => (
        <Vehicle 
          key={i}
          title={vehicle.title}
          img={vehicle.icons.large}
          nationIconSm={vehicle.nation.icons.small}
          description={vehicle.description}        
          level={vehicle.level}
        />))}
      </div>
    </>
  )
}
