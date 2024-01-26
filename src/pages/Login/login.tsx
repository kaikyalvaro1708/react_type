import { useEffect, useState, useMemo, useCallback, useRef, useContext } from "react";
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
import { UserLoggedContext } from "../../shared/contexts/UserLogged";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   console.log(email)
  // }, [email]);

  // useEffect(() => {
  //   console.log(password)
  // }, [password]);

  const userLoggedContex = useContext(UserLoggedContext)

  const emailLength = useMemo(() => {
    return email.length * 1000;
  }, [email.length]);

  const handleChange = useCallback(() => {
    console.log(email);
    console.log(password);

    if (inputPasswordRef.current !== null) {
      inputPasswordRef.current.focus();
    }
  }, [email, password]);

  return (
    <div>
      <form>
        <p>Quantidade de caracteres no email: {emailLength}</p>
        <p>Usuário: {userLoggedContex.name}</p>

        <InputLogin
          label="Email"
          value={email}
          onChange={(newValue) => setEmail(newValue)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />

        <InputLogin
          label="Senha"
          type="password"
          value={email}
          onChange={(newValue) => setPassword(newValue)}
        />

        {/* <button type="button" onClick={handleChange}>
          Entrar
        </button> */}

        <ButtonLogin type="button" onClick={handleChange}>
          Entrar
        </ButtonLogin>
      </form>
    </div>
  );
};
