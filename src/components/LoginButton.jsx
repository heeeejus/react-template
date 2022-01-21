import { withRouter } from "react-router-dom";
//hoc, 훅
//withRouter를 통해 props histoty를 전달 할 수 있다.
export default withRouter(function LoginButton(props) {
  console.log(props);
  function login() {
    setTimeout(() => {
      props.history.push("/");
    }, 1000);
  }
  return <button onClick={login}>로그인하기</button>;
});
