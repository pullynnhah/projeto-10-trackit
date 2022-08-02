import {ThreeDots} from "react-loader-spinner";
import {Link, useNavigate} from "react-router-dom";
import Form from "./commons/Form";
import {useContext, useState} from "react";
import {postSignUp} from "../services/api";
import Context from "./Context";

export default function SignUp() {
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({email: "", password: "", name: "", image: ""});

  const navigate = useNavigate();
  const {theme} = useContext(Context);

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
    {
      type: "text",
      value: "name",
      placeholder: "nome",
    },
    {
      type: "url",
      value: "image",
      placeholder: "foto",
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    const promise = postSignUp(form);
    promise.catch(e => {
      alert("Erro ao cadastrar!");
      setDisabled(false);
    });

    promise.then(response => {
      navigate("/");
    });

    setDisabled(true);
  }

  return (
    <Form theme={theme}>
      <form onSubmit={handleSubmit}>
        {inputs.map(({type, value, placeholder}, index) => (
          <input
            type={type}
            value={form[value]}
            onChange={e => setForm({...form, [value]: e.target.value})}
            placeholder={placeholder}
            disabled={disabled}
            required
          />
        ))}

        <button type="submit" disabled={disabled}>
          {disabled ? <ThreeDots color="#FFF" height={20} width={50} /> : "Cadastrar"}
        </button>
      </form>
      <Link to="/" className="link">
        Já tem uma conta? Faça login!
      </Link>
    </Form>
  );
}
