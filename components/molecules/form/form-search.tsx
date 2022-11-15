import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";

const FormSearch = () => {
  return (
    <div className="flex items-center space-x-4">
      <Input placeholder="Cari..." />
      <Button variant="secondary" label="Cari" />
    </div>
  );
};

export default FormSearch;
