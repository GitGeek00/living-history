import Button from "react-bootstrap/Button";

const ButtonA = ({ children, className, type, onClick }) => {
  return (
    <>
      <Button className={className} type={type} onClick={onClick}>
        {children}
      </Button>
    </>
  );
};

export default ButtonA;
