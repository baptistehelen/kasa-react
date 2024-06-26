import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="Error">
      <h1>404</h1>
      <p>Oups ! La page que <br className="br"/>vous demandez n'existe pas.</p>
      <Link className="Error__link" to={`/`}>Retourner sur la page d'accueil</Link>
    </div>
  );
}
