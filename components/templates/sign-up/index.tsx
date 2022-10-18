import Link from "next/link";
import Button from "../../atoms/button/button";
import FormRegister from "../../molecules/form/form-register";
import UserLayout from "../../organisms/layout/user-layout";

const SignUp = () => {
  return (
    <UserLayout>
      <div className="flex w-full flex-col space-y-6">
        <h1 className="text-2xl font-bold text-slate-800">Buat Akun</h1>
        <FormRegister />
        <div className="w-full space-y-2">
          <Button isFull label="Buat Akun" />
          <div className="text-sm flex space-x-2 items-center">
            <p>Sudah punya akun? </p>
            <Link href="/">
              <p className="text-tosca cursor-pointer">Masuk</p>
            </Link>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default SignUp;
