import Input from "../../atoms/input/input";

const FormLogin = () => {
  return (
    <div className="space-y-4">
      <Input label="No. HP" placeholder="Ketikkan no. HP Anda" />
      <Input label="Password" placeholder="Password" type="password" />
    </div>
  );
};

export default FormLogin;
