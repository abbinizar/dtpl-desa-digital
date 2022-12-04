import { useState } from "react";
import Button from "../../components/atoms/button/button";
import Dialog from "../../components/atoms/dialog/dialog";
import { useRouter } from "next/router";
import Link from "next/link";


const EditPengeluaran = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  return (
    <div className="p-12">
    <div className="w-full flex justify-center">
      <h1 className="text-3xl font-bold text-tosca-darkest mb-10">
      Informasi Pengeluaran Dana
      </h1>
    </div>
      <div className="shadow-card p-6 space-y-6">
        <h1 className="font-bold">Tambah Pengeluaran</h1>
        <p className="text-sm w-full" style={{ width:"150vw"}}>Edit periode atau upload excel pendapatan untuk mengubah data </p>
        <div className="flex flex-col w-full space-y-8">
        <div className="space-y-4">
        <p className="text-sm">File Excel</p>
        <Link href="">Juli-Desember.xlsx</Link>
        <div className="space-y-2">
            <p className="text-sm">Periode Informasi Keuangan</p>
            <div id="select-periode" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap:"10px", width:"50vw"}}>
            <select className="border border-grey-light text-gray-900 text-sm rounded-lg focus:ring-tosca-dark focus:border-blue-500 block w-full p-2.5 outline-none">
            <option selected>Bulan Awal</option>
            <option value="US">Januari</option>
            <option value="DE">Februari</option>
            <option value="US">Maret</option>
            <option value="US">April</option>
            <option value="US">Mei</option>
            <option value="US">Juni</option>
            <option value="US">Juli</option>
            <option value="US">Agustus</option>
            <option value="US">September</option>
            <option value="US">Oktober</option>
            <option value="US">November</option>
            <option value="US">Desember</option>
            </select>
            <select className="border border-grey-light text-gray-900 text-sm rounded-lg focus:ring-tosca-dark focus:border-blue-500 block w-full p-2.5 outline-none">
            <option selected>Bulan Akhir</option>
            <option value="US">Januari</option>
            <option value="DE">Februari</option>
            <option value="US">Maret</option>
            <option value="US">April</option>
            <option value="US">Mei</option>
            <option value="US">Juni</option>
            <option value="US">Juli</option>
            <option value="US">Agustus</option>
            <option value="US">September</option>
            <option value="US">Oktober</option>
            <option value="US">November</option>
            <option value="US">Desember</option>
            </select>
            <select className="border border-grey-light text-gray-900 text-sm rounded-lg focus:ring-tosca-dark focus:border-blue-500 block w-full p-2.5 outline-none">
            <option selected>Tahun</option>
            <option value="US">2022</option>
            <option value="DE">2021</option>
            <option value="US">2020</option>
            <option value="US">2019</option>
            <option value="US">2018</option>
            <option value="US">2017</option>
            </select>
            </div>
            <div className="space-y-2" style={{ width:"50vw"}}>
            <Button
            // onClick={() => setShow(true)}
            label="Upload File"
            variant="secondary"
            isFull
          />
            </div>
        </div>
        </div>
        <div id="select-periode" style={{ display: "flex", flexDirection: "row", gap: "10px", width:"50vw"}}>
          <Button
            onClick={() => router.push("/info-desa/pengeluaran-dana")}
            label="Batal"
            variant="secondary"
            isFull
          />
          <Button
            onClick={() => setShow(true)}
            label="Submit"
            isFull
          />
        </div>
        </div>
      </div>
      <Dialog show={show}>
        <div className="px-8 space-y-4 flex flex-col items-center">
          <h1 className="text-center font-bold">Sukses!</h1>
          <p className="text-center text-sm">
           Penambahan atau Edit Informasi Pengeluaran Dana Berhasil Disubmit
          </p>  
          <div className="w-6/12 flex justify-center">
            <Button onClick={() => setShow(false)} isFull label="OK"></Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default EditPengeluaran;