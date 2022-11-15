import { useState } from "react";
import Button from "../../atoms/button/button";
import Dialog from "../../atoms/dialog/dialog";
import Input from "../../atoms/input/input";

const JanjiApplicationForm = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="p-12">
      <div className="shadow-card p-6 space-y-6">
        <h1 className="font-bold">Formulir Pembuatan Janji Pertemuan</h1>
        <div className="flex flex-col w-full space-y-8">
        <div className="space-y-4">
        <div className="space-y-2">
            <p className="text-sm">Kategori Pertemuan</p>
            <select className="border border-grey-light text-gray-900 text-sm rounded-lg focus:ring-tosca-dark focus:border-blue-500 block w-full p-2.5 outline-none">
            <option selected>Kategori Pertemuan</option>
            <option value="US">Janji Temu Layanan Administrasi</option>
            <option value="DE">Janji Temu Tamu Desa</option>
            <option value="US">Lain-lain</option>
            </select>
        </div>
        <Input placeholder="Nama Lengkap" label="Nama Lengkap" />
        <Input
            type="number"
            placeholder="Nomor induk kependudukan"
            label="Nomor Induk Kependudukan"
        />
        <div className="space-y-2">
            <p className="text-sm">Jadwal Temu</p>
            <select className="border border-grey-light text-gray-900 text-sm rounded-lg focus:ring-tosca-dark focus:border-blue-500 block w-full p-2.5 outline-none">
            <option selected>Jadwal Temu</option>
            <option>Senin 09.00 - 16.00</option>
            <option>Selasa 09.00 - 16.00</option>
            <option>Rabu 09.00 - 16.00</option>
            <option>Kamis 09.00 - 16.00</option>
            <option>Jumat 09.00 - 16.00</option>
            <option>Sabtu 10.00 - 15.00</option>
            <option>Minggu 10.00 - 15.00</option>
            </select>
        </div>
        <Input placeholder="Deskripsi Pertemuan" label="Deskripsi Pertemuan" />
        <div className="space-y-2">
            <p className="text-sm">Bagian yang Dituju</p>
            <select className="border border-grey-light text-gray-900 text-sm rounded-lg focus:ring-tosca-dark focus:border-blue-500 block w-full p-2.5 outline-none">
            <option selected>Bagian yang Dituju</option>
            <option>Kepala Desa</option>
            <option>Sekretaris Desa</option>
            <option>Staff Administrasi Desa</option>
            </select>
        </div>
        </div>
          <Button
            onClick={() => setShow(true)}
            isFull
            label="Kirim Permohonan"
          />
        </div>
      </div>
      <Dialog show={show}>
        <div className="px-8 space-y-4 flex flex-col items-center">
          <h1 className="text-center font-bold">Permohonan Janji Temu Terkirim</h1>
          <p className="text-center text-sm">
            Janji Temu berhasil dibuat dan sedang diproses oleh pegawai desa.
          </p>
          <div className="p-4 bg-[#F8E9E9] rounded-lg">
            <p className="text-red text-sm text-center">
              Layanan ini <b>GRATIS</b>
              (tidak dipungut biaya apapun).
            </p>
          </div>
          <div className="w-6/12 flex justify-center">
            <Button onClick={() => setShow(false)} isFull label="OK"></Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default JanjiApplicationForm;