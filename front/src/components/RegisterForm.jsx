import InputA from "./InputA";
import ButtonA from "./ButtonA";

const RegisterForm = ({ regDivRef, handleRegistration, regValues, setRegValues }) => {
  return (
    <div
      ref={regDivRef}
      className="border rounded-3 p-5 shadow-md d-none"
      style={{ backgroundColor: "rgba(255, 252, 252, 0.85)" }}
    >
      <h4
        className="text-center mb-4 text-secondary me-4"
        style={{ fontWeight: "800", textShadow: "1px 1px 3px white" }}
      >
        Registration
      </h4>
      <form onSubmit={handleRegistration}>
        <InputA
          label="Name"
          labelClassName="mb-3 text-black"
          type="text"
          inputName="userName"
          onChange={(e) => {
            setRegValues({ ...regValues, [e.target.name]: e.target.value });
          }}
        />
        <InputA
          label="Email Address"
          labelClassName="mb-3 text-black"
          type="email"
          inputName="email"
          onChange={(e) => {
            setRegValues({ ...regValues, [e.target.name]: e.target.value });
          }}
        />
        <InputA
          label="Password"
          labelClassName="mb-3 text-black"
          type="password"
          inputName="password"
          onChange={(e) => {
            setRegValues({ ...regValues, [e.target.name]: e.target.value });
          }}
        />
        <InputA
          label="Password Confirmation"
          labelClassName="mb-3 text-black"
          type="password"
          inputName="passwordConfirm"
          onChange={(e) => {
            setRegValues({ ...regValues, [e.target.name]: e.target.value });
          }}
        />
        <ButtonA type={"submit"} className="w-100 btn-secondary shadow border-0 mt-1 pb-2 pt-3">
          <h5>Sign up</h5>
        </ButtonA>
      </form>
    </div>
  );
};

export default RegisterForm;
