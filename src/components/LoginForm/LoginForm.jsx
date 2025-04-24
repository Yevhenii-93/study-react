import { useId } from "react";

export default function LoginForm({ values, onLogin, handleSubmit }) {
  const loginId = useId();
  const passwordId = useId();

  return (
    <form onChange={handleSubmit}>
      <label htmlFor={loginId}>Login:</label>
      <input
        type="text"
        name="login"
        value={values.login}
        id={loginId}
        onChange={onLogin}
      />
      <label htmlFor={passwordId}>Password:</label>
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={onLogin}
        id={passwordId}
      />
      <button type="submit">Log in</button>
    </form>
  );
}
