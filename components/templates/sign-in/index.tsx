import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { UserContext } from "../../../helpers/context/user";
import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";
import Tab, {
  TabBody,
  TabBodyContainer,
  TabLabel,
  TabLabelContainer,
} from "../../atoms/tab/tab";
import FormLoginPegawai from "../../molecules/form/form-login-pegawai";
import FormLoginWarga from "../../molecules/form/form-login-warga";
import UserLayout from "../../organisms/layout/user-layout";

const SignIn = () => {
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
        <h1 className="text-2xl font-bold text-slate-800">Masuk ke Akun</h1>
        <Tab initialSelected={0}>
          <TabLabelContainer>
            <TabLabel>Warga Desa</TabLabel>
            <TabLabel>Pegawai Desa</TabLabel>
          </TabLabelContainer>
          <TabBodyContainer>
            <TabBody>
              <FormLoginWarga error={error} />
            </TabBody>
            <TabBody>
              <FormLoginPegawai error={error} />
            </TabBody>
          </TabBodyContainer>
        </Tab>
        <div className="w-full space-y-2">
          <Button onClick={handleClick} isFull label="Masuk" />
          <div className="text-sm flex space-x-2 items-center">
            <p>Belum punya akun? </p>
            <Link href="/sign-up">
              <p className="text-tosca cursor-pointer">Buat akun</p>
            </Link>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default SignIn;
