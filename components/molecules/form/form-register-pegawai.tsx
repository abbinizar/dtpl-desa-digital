import Input from "../../atoms/input/input";

const FormRegisterPegawai = () => {
  return (
    <div className="space-y-4 w-full">
      <Input
        type="number"
        label="Nomor Induk Pegawai (NIP)"
        placeholder="Ketikkan NIK"
      />
      <Input label="Nama Warga" placeholder="Ketikkan nama" />
      <Input type="number" label="No. HP" placeholder="Ketikkan No. Hp" />
      <div className="space-y-1">
        <Input label="Password" placeholder="Password" type="password" />
        <Input placeholder="Confirm Password" type="password" />
      </div>
    </div>
  );
};

export default FormRegisterPegawai;
