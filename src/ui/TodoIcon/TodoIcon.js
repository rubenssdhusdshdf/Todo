import { ReactComponent as CheckSVG } from '../TodoIcon/check.svg';
import { ReactComponent as DeleteSVG } from '../TodoIcon/delete.svg';
import '../TodoIcon/TodoIcon.css';


const iconTypes = {
  "edit": (color) => <EditSVG className="Icon-svg" fill={color}/>,
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
