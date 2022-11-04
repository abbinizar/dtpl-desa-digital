import Input from "../../atoms/input/input";

const FormRegisterWarga = () => {
  return (
    <div className="space-y-4 w-full">
      <Input type="number" label="NIK" placeholder="Ketikkan NIK" />
      <Input label="Nama Warga" placeholder="Ketikkan nama" />
      <Input type="number" label="No. HP" placeholder="Ketikkan No. Hp" />
      <div className="space-y-1">
        <Input label="Password" placeholder="Psassword" type="password" />
        <Input placeholder="Confirm Password" type="password" />
      </div>
    </div>
  );
};

export default FormRegisterWarga;
