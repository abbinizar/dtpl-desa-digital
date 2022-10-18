import Link from "next/link";
import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";
import FormLogin from "../../molecules/form/form-login";
import UserLayout from "../../organisms/layout/user-layout";

const SignIn = () => {
  return (
    <UserLayout>
      <div className="flex w-full flex-col space-y-6">
        <h1 className="text-2xl font-bold text-slate-800">Masuk ke Akun</h1>
        <FormLogin />
        <div className="w-full space-y-2">
          <Button isFull label="Masuk" />
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
