import 'animate.css';
import { Link } from 'react-router-dom'

import { Props } from '../../types';

export const Type = ({ title }:Props): JSX.Element => {

  return (
    <>
      <div className='animate__fadeInDown'>
        <Link to={`${title}`}>
          <h3 className='h3Type'>{title}</h3>
        </Link>
      </div>
    </>
  )
}
