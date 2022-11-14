import Button from "../../atoms/button/button";

const FormFilter = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-base font-bold">Filter Pencarian</h2>
        <p className="text-sm">
          Pilih periode untuk menampilkan informasi keuangan dana desa!
        </p>
      </div>
      <div className="space-y-2">
        <p className="text-xs">Periode Informasi Keuangan</p>
        <select className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-tosca-dark focus:border-blue-500 block w-full p-2.5 outline-none">
          <option selected>Juli - Desember 2022</option>
          <option value="US">Januari - Juni 2022</option>
          <option value="DE">Juli - Desember 2021</option>
          <option value="US">Januari - Juni 2021</option>
        </select>
      </div>
      <div className="flex w-40">
        <Button isFull label="Cari"></Button>
      </div>
    </div>
  );
};

export default FormFilter;
