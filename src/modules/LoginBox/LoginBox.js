import LoginCss from "./LoginBox.module.css";
function LoginBox(props) {
  return props.triggered ? (
    <div className={LoginCss.loginBox}>
      <div className={LoginCss.closeBox}>
        <button className={LoginCss.close}>
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <form className={LoginCss.form}>
        <h1>Login</h1>
        <div className={LoginCss.login}>
          <input name="login" id="login" placeholder="Enter Login ..." />
        </div>
        <div className={LoginCss.password}>
          <input
            type={"password"}
            name="password"
            id="password"
            placeholder="Enter Password ..."
          />
        </div>
      </form>
      <div className={LoginCss.submitBox}>
        <button className={LoginCss.submit} type="button">
          Submit
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}
export default LoginBox;
