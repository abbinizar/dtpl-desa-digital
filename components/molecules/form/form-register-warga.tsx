import Input from "../../atoms/input/input";
import { useContext } from "react";
import { UserContext } from "../../../helpers/context/user";

interface IForm {
  error?: string;
}
const FormRegisterWarga = (props: IForm) => {
  const { user, setUser } = useContext(UserContext);
  const handleUsername = (e: any) => {
    setUser({ ...user, username: e.target.value, role: "warga" });
  };
  const handlePassword = (e: any) => {
    setUser({ ...user, password: e.target.value, role: "warga" });
  };
  return (
    <div className="space-y-4 w-full">
      <Input
        type="number"
        label="NIK"
        placeholder="Ketikkan NIK"
        value={user.username}
        onChange={(e) => handleUsername(e)}
        error={props.error}
      />
      <Input label="Nama Warga" placeholder="Ketikkan nama" />
      <Input type="number" label="No. HP" placeholder="Ketikkan No. Hp" />
      <div className="space-y-1">
        <Input
          error={props.error}
          value={user.password}
          onChange={(e) => handlePassword(e)}
          label="Password"
          placeholder="Psassword"
          type="password"
        />
        <Input placeholder="Confirm Password" type="password" />
      </div>
    </div>
  );
};

export default FormRegisterWarga;
