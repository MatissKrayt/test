import 'animate.css';
import { Link } from 'react-router-dom'
import { Props } from '../../types';

export const Nation = ({ title, flag , colorName }:Props): JSX.Element => {

  const nationNameStyle = {
    color: colorName,
  }

  const nationFlagStyle = {
    width: '290px',
    height: '170px',
  }

  const nationDivStyle = {
    background: 'rgba(255, 255, 255, 0.137)',
    margin: '10px',
    padding: '15px',
    borderRadius : '15px',
    transition: '0.3s',
  }

  return (
    <>
      <div className='divOneNation animate__backInDown' style={nationDivStyle}>
        <Link to={`${title}`}>
          <img src={flag} alt="" style={nationFlagStyle}/>
          <h3 style={nationNameStyle}>{title}</h3>
        </Link>
      </div>
    </>
  )
}
