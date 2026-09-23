import { Link } from "react-router-dom";

function Unauthorized() {
  return (
    <div className="simple-page">
      <h1>403 - Unauthorized</h1>

      <p>
        You do not have permission to access this page.
      </p>

      <Link to="/login">
        Go to Login
      </Link>
    </div>
  );
}

export default Unauthorized;