import Input from "../../atoms/input/input";

const FormRegisterPegawai = () => {
  return (
    <div className="space-y-4">
      <Input label="Nomor Induk Pegawai (NIP)" placeholder="Ketikkan NIK" />
      <Input label="Nama Warga" placeholder="Ketikkan nama" />
      <Input label="No. HP" placeholder="Ketikkan No. Hp" />
      <div className="space-y-1">
        <Input label="Password" placeholder="password" type="password" />
        <Input placeholder="password" type="password" />
      </div>
    </div>
  );
};

export default FormRegisterPegawai;