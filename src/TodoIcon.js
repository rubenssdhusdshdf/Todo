import { ReactComponent as CheckSVG } from '../src/check.svg';
import { ReactComponent as DeleteSVG } from '../src/delete.svg';
import '../src/TodoIcon.css';


const iconTypes = {
  "check": (color) => <CheckSVG className="Icon-svg" fill={color}/>,
  "delete":(color) => <DeleteSVG className="Icon-svg" fill={color} />,
};


function TodoIcon({ type, color, onClick }) {
  return (
    <span
      className={`Icon-container Icon-container-${type}`}
      onClick={onClick}
    >
       {iconTypes[type](color)}
    </span>
  )
}


export { TodoIcon };
