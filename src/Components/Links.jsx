import { links } from '../util/consts';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <ul className="link-list">
      { links.filter(link => link.text !== 'Error').map(link => {
        const { id, url, text } = link;
        return (
          <li key={ id }>
            <Link to={ url }>{ text }</Link>
          </li>
        );
      }) }
    </ul>
  );
}

export default Links;
