import { useEffect, useState, useMemo, useCallback, useRef } from "react";

export const Dashboard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   console.log(email)
  // }, [email]);

  // useEffect(() => {
  //   console.log(password)
  // }, [password]);

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

        <label>
          <span>Email</span>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          <span>Senha</span>
          <input
            type="password"
            ref={inputPasswordRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="button" onClick={handleChange}>
          Entrar
        </button>
      </form>
    </div>
  );
};
