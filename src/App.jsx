import { useState } from "react";
import LangSwitcher from "./components/LangSwitcher/LangSwitcher";
import LoginForm from "./components/LoginForm/LoginForm";
import SearchBar from "./components/SearchBar/SearchBar";
import Checkbox from "./components/Checkbox/Checkbox";

export default function App() {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });
  const handleLogin = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(values);

    setValues({
      login: "",
      password: "",
    });
  };

  const [lang, setLang] = useState("uk");
  const handleLang = (event) => {
    setLang(event.target.value);
  };

  const [hasAccepted, setHasAccepted] = useState(false);
  const handleChange = (event) => {
    setHasAccepted(event.target.checked);
  };

  return (
    <div>
      <LoginForm
        values={values}
        onLogin={handleLogin}
        handleSubmit={handleSubmit}
      />

      <SearchBar />

      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={handleLang} />

      <Checkbox value={hasAccepted} onSelect={handleChange} />
    </div>
  );
}
