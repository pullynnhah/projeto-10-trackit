import {useState, useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import {ThreeDots} from "react-loader-spinner";

import Form from "../commons/Form";
import GlobalContext from "../contexts/GlobalContext";
import {postLogin} from "../../services/api";
import Input from "../commons/Input";

export default function Login() {
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({email: "", password: ""});

  const {setLogin, theme} = useContext(GlobalContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const promise = postLogin(form);
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

  const inputs = [
    {
      type: "email",
      value: "email",
      placeholder: "email",
    },
    {
      type: "password",
      value: "password",
      placeholder: "senha",
    },
  ];

  return (
    <Form theme={theme}>
      <form onSubmit={handleSubmit}>
        {inputs.map(({type, value, placeholder}, index) => (
          <Input
            theme={theme}
            key={index}
            type={type}
            value={form[value]}
            onChange={e => setForm({...form, [value]: e.target.value})}
            placeholder={placeholder}
            disabled={disabled}
            required
          />
        ))}

        <button type="submit" disabled={disabled}>
          {disabled ? <ThreeDots color="#fff" height={20} width={50} /> : "Entrar"}
        </button>
      </form>
      <Link to="/cadastro" className="link">
        Não tem uma conta? Cadastre-se!
      </Link>
    </Form>
  );
}
