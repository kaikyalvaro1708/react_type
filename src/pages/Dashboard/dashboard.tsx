import { useRef } from "react";
import { Link } from "react-router-dom";
import { useUserLogged } from "../../shared/hooks";

export const Dashboard = () => {
  const counterRef = useRef(0);

  const { name, logout } = useUserLogged();

  return (
    <div>
      <p>Dashboard</p>
      
      <p>{name}</p>

      <p>Contador: {counterRef.current}</p>

      <button onClick={() => counterRef.current++}>Somar</button>

      <button onClick={logout}>Sair</button>

      <Link to='/entrar'>Login</Link>
    </div>
  );
};
