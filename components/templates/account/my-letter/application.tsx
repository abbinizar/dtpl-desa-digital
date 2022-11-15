import { useState } from "react";
import Button from "../../../atoms/button/button";
import Dialog from "../../../atoms/dialog/dialog";
import Application from "../../../molecules/form/form-permohonan";

const ApplicationForm = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="p-12">
      <div className="shadow-card p-6 space-y-6">
        <h1 className="font-bold">Formulir Permohonan Surat Pengantar Desa</h1>
        <div className="flex flex-col w-full space-y-8">
          <Application />
          <Button
            onClick={() => setShow(true)}
            isFull
            label="Kirim Permohonan"
          />
        </div>
      </div>
      <Dialog show={show}>
        <div className="px-8 space-y-4 flex flex-col items-center">
          <h1 className="text-center font-bold">Permohonan Surat Terkirim</h1>
          <p className="text-center text-sm">
            Permohonan surat berhasil dibuat dan sedang diproses oleh pegawai
            desa. Proses pembuatan surat akan selesai paling lama 3-5 hari
            kerja.
          </p>
          <div className="p-4 bg-[#F8E9E9] rounded-lg">
            <p className="text-red text-sm text-center">
              Layanan pembuatan surat pengantar ini <b>GRATIS</b>
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

export default ApplicationForm;
