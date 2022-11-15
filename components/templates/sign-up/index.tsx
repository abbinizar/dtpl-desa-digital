import Link from "next/link";
import Button from "../../atoms/button/button";
import Tab, {
  TabBody,
  TabBodyContainer,
  TabLabel,
  TabLabelContainer,
} from "../../atoms/tab/tab";
import FormRegisterPegawai from "../../molecules/form/form-register-pegawai";
import FormRegisterWarga from "../../molecules/form/form-register-warga";
import UserLayout from "../../organisms/layout/user-layout";
import { useRouter } from "next/router";
import { UserContext } from "../../../helpers/context/user";
import { useContext, useState } from "react";

const SignUp = () => {
  const { user } = useContext(UserContext);
  const [error, setError] = useState("");

  const router = useRouter();
  const handleClick = () => {
    if (user.username == "" && user.password == "") {
      setError("Wajib diisi");
    } else {
      router.push("/");
    }
  };
  return (
    <UserLayout>
      <div className="flex w-full flex-col space-y-6">
        <h1 className="text-2xl font-bold text-slate-800">Buat Akun</h1>
        <Tab initialSelected={0}>
          <TabLabelContainer>
            <TabLabel>Saya Warga Desa</TabLabel>
            <TabLabel>Saya Pegawai Desa</TabLabel>
          </TabLabelContainer>
          <TabBodyContainer>
            <TabBody>
              <FormRegisterWarga error={error} />
            </TabBody>
            <TabBody>
              <FormRegisterPegawai error={error} />
            </TabBody>
          </TabBodyContainer>
        </Tab>
        <div className="w-full space-y-2">
          <Button onClick={handleClick} isFull label="Buat Akun" />
          <div className="text-sm flex space-x-2 items-center">
            <p>Sudah punya akun? </p>
            <Link href="/sign-in">
              <p className="text-tosca cursor-pointer">Masuk</p>
            </Link>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default SignUp;
