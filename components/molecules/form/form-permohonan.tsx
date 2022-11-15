import Input from "../../atoms/input/input";

const Application = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm">Tujuan Pembuatan Surat</p>
        <select className="border border-grey-light text-gray-900 text-sm rounded-lg focus:ring-tosca-dark focus:border-blue-500 block w-full p-2.5 outline-none">
          <option selected>Tujuan Pembuatan Surat</option>
          <option value="US">Permohonan KK</option>
          <option value="DE">Permohonan KTP</option>
          <option value="US">Permohonan Akta</option>
        </select>
      </div>
      <Input placeholder="Nama Lengkap" label="Nama Lengkap" />
      <Input
        type="number"
        placeholder="Nomor induk kependudukan"
        label="Nomor Induk Kependudukan"
      />
      <div className="space-y-2">
        <p className="text-sm">Tempat/Tanggal Lahir</p>
        <select className="border border-grey-light text-gray-900 text-sm rounded-lg focus:ring-tosca-dark focus:border-blue-500 block w-full p-2.5 outline-none">
          <option selected>Tempat/Tanggal Lahir</option>
        </select>
      </div>
      <Input placeholder="Jenis Kelamin" label="Jenis Kelamin" />
      <div className="space-y-2">
        <p className="text-sm">Status Perkawinan</p>
        <select className="border border-grey-light text-gray-900 text-sm rounded-lg focus:ring-tosca-dark focus:border-blue-500 block w-full p-2.5 outline-none">
          <option selected>Status Perkawinan</option>
          <option>Nikah</option>
          <option>Belum Menikahn</option>
        </select>
      </div>
      <div className="space-y-2">
        <p className="text-sm">Kewarganegaraan</p>
        <select className="border border-grey-light text-gray-900 text-sm rounded-lg focus:ring-tosca-dark focus:border-blue-500 block w-full p-2.5 outline-none">
          <option selected>Kewarganegaraan</option>
          <option>WNI</option>
          <option>WNA</option>
        </select>
      </div>
      <div className="space-y-2">
        <p className="text-sm">Agama</p>
        <select className="border border-grey-light text-gray-900 text-sm rounded-lg focus:ring-tosca-dark focus:border-blue-500 block w-full p-2.5 outline-none">
          <option selected>Agama</option>
          <option>Islam</option>
          <option>Kristen</option>
        </select>
      </div>
      <Input placeholder="Pekerjaan" label="Pekerjaan" />
      <Input placeholder="Alamat" label="Alamat" />
    </div>
  );
};

export default Application;
