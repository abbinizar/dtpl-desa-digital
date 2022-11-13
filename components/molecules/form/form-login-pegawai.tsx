import Input from "../../atoms/input/input";
import { useContext } from "react";
import { UserContext } from "../../../helpers/context/user";

interface IForm {
  error?: string;
}
const FormLoginPegawai = (props: IForm) => {
  const { user, setUser } = useContext(UserContext);
  const handleUsername = (e: any) => {
    setUser({ ...user, username: e.target.value, role: "pegawai" });
  };
  const handlePassword = (e: any) => {
    setUser({ ...user, password: e.target.value, role: "pegawai" });
  };
  return (
    <div className="space-y-4">
      <Input
        label="Nomor Induk Pegawai (NIP)"
        placeholder="Ketikkan no. HP Anda"
        type="number"
        value={user.username}
        onChange={(e) => handleUsername(e)}
        error={props.error}
      />
      <Input
        label="Password"
        placeholder="Password"
        type="password"
        value={user.password}
        onChange={(e) => handlePassword(e)}
        error={props.error}
      />
    </div>
  );
};

export default FormLoginPegawai;
