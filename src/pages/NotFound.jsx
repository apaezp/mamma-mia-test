import { Link } from 'react-router-dom';
import '../css/Notfound.css';

const NotFound = () => {

return (
        <div className="notFound text-center">
            <h1 className="text-white py-5">Pizza No Encontrada 🤔🍕</h1>
            <Link className="volver-inicio" to="/">
                Volver Al Inicio 💨
            </Link>
        </div>
    );

};

export default NotFound;