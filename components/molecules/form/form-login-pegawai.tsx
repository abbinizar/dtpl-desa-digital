import Input from "../../atoms/input/input";

const FormLoginPegawai = () => {
  return (
    <div className="space-y-4">
      <Input
        label="Nomor Induk Pegawai (NIP)"
        placeholder="Ketikkan no. HP Anda"
        type="number"
      />
      <Input label="Password" placeholder="Password" type="password" />
    </div>
  );
};

export default FormLoginPegawai;
