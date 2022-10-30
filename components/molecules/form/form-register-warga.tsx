import Input from "../../atoms/input/input";

const FormRegisterWarga = () => {
  return (
    <div className="space-y-4 w-full">
      <Input label="NIK" placeholder="Ketikkan NIK" />
      <Input label="Nama Warga" placeholder="Ketikkan nama" />
      <Input label="No. HP" placeholder="Ketikkan No. Hp" />
      <div className="space-y-1">
        <Input label="Password" placeholder="password" type="password" />
        <Input placeholder="password" type="password" />
      </div>
    </div>
  );
};

export default FormRegisterWarga;
