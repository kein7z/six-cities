import { Link } from 'react-router-dom';

const NotFoundScreen = () => (
  <div>
    страница не найдена<br />
    <Link to='/'>Можете вернуться на главную страницу</Link>
  </div>
);

export default NotFoundScreen;
