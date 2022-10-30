import { useState } from "react";
import Button from "../../atoms/button/button";
import FormRegisterPegawai from "../../molecules/form/form-register-pegawai";
import FormRegisterWarga from "../../molecules/form/form-register-warga";

const Account = () => {
  const user = "warga";
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="flex w-full justify-center p-16">
      <div className="w-1/2 space-y-6">
        <h1 className="text-2xl font-bold text-slate-800">
          {user ? "Akun Warga" : "Akun Pegawai"}
        </h1>
        {user ? <FormRegisterWarga /> : <FormRegisterPegawai />}
        {isEdit ? (
          <Button
            isFull
            onClick={() => setIsEdit((prev) => !prev)}
            variant="secondary"
            label="Ubah Akun"
          />
        ) : (
          <Button
            isFull
            onClick={() => setIsEdit((prev) => !prev)}
            variant="primary"
            label="Simpan Perubahan"
          />
        )}
      </div>
    </div>
  );
};

export default Account;
