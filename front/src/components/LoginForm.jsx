import InputA from "./InputA";
import ButtonA from "./ButtonA";
import { Link } from "react-router-dom";

const LoginForm = ({ logDivRef, handleLogin, logValues, setLogValues }) => {
  return (
    <>
      <div
        ref={logDivRef}
        className="border rounded-3 p-5 shadow-md d-none"
        style={{ backgroundColor: "rgba(255, 252, 252, 0.85)" }}
      >
        <h4
          className="text-center mb-4 text-secondary me-4"
          style={{ fontWeight: "800", textShadow: "1px 1px 3px white" }}
        >
          Sign in
        </h4>
        <form onSubmit={handleLogin}>
          <InputA
            label="Email Address"
            labelClassName="mb-3 text-black"
            type="email"
            inputName="email"
            onChange={(e) => {
              setLogValues({ ...logValues, [e.target.name]: e.target.value });
            }}
          />
          <InputA
            label="Password"
            labelClassName="mb-3 text-black"
            type="password"
            inputName="password"
            onChange={(e) => {
              setLogValues({ ...logValues, [e.target.name]: e.target.value });
            }}
          />
          <ButtonA type={"submit"} className="w-100 btn-secondary shadow border-0 mt-2 pb-2 pt-3">
            <h5>Sign in</h5>
          </ButtonA>
          <div className="mt-4">
            <Link className="ps-2" style={{ textDecoration: "none", fontWeight: "400" }}>
              Forget password
            </Link>
          </div>
          <div className="border-top border-secondary w-100 mt-4">
            <div className="mt-3 ms-2 text-secondary">
              <strong>Trouble Logging in? Contact</strong>
              <br />
              <div className="mt-1">
                <Link>
                  <strong>support@livinghistory.com</strong>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
