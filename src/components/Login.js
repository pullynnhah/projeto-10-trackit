import {useState, useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import {ThreeDots} from "react-loader-spinner";

import Form from "./commons/Form";
import Context from "./Context";
import {postLogin} from "../services/api";

export default function Login() {
  const [disabled, setDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {setLogin, theme} = useContext(Context);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const promise = postLogin({email, password});
    promise.catch(e => {
      alert("Erro ao logar!");
      setDisabled(false);
    });

    promise.then(response => {
      setLogin(response.data);
      navigate("/hoje");
    });

    setDisabled(true);
  }

  return (
    <Form theme={theme}>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="email"
          disabled={disabled}
          required
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="senha"
          disabled={disabled}
          required
        />
        <button type="submit" disabled={disabled}>
          {disabled ? <ThreeDots color="#FFF" height={20} width={50} /> : "Entrar"}
        </button>
      </form>
      <Link to="/cadastro" className="link">
        Não tem uma conta? Cadastre-se!
      </Link>
    </Form>
  );
}
