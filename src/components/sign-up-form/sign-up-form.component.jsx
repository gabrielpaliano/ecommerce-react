import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value})
  }

  return (
    <div>
      <h1>Entre com seu e-mail e senha</h1>
      <form onSubmit={() => {}}>
        <label>Nome completo</label>
        <input type="text" required onChange={handleChange} name="displayName" value={displayName}/>

        <label>Email</label>
        <input type="email" required onChange={handleChange} name="email" value={email}/>

        <label>Senha</label>
        <input type="password" required onChange={handleChange} name="password" value={password}/>

        <label>Confirme sua senha</label>
        <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
        <button type="submit">Criar conta</button>
      </form>
    </div>
  );
};

export default SignUpForm;
