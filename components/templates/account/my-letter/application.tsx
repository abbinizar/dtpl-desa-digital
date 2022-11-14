import Button from "../../../atoms/button/button";
import Application from "../../../molecules/form/form-permohonan";

const ApplicationForm = () => {
  return (
    <div className="p-12">
      <div className="shadow-card p-6 space-y-6">
        <h1 className="font-bold">Formulir Permohonan Surat Pengantar Desa</h1>
        <div className="flex flex-col w-full space-y-8">
          <Application />
          <Button isFull label="Kirim Permohonan" />
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
