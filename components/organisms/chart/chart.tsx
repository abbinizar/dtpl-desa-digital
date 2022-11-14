import ChartCircle from "../../atoms/icon/chart-circle";

const Chart = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="space-y-8 text-sm">
        <h2 className="font-bold ">Info Pendapatan Desa</h2>
        <div className="space-y-4">
          <p>Juli - Desember 2022</p>
          <div className="flex items-center space-x-32">
            <div className="flex items-center space-x-4 w-72">
              <div className="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
              <p>Pendapatan Keseluruhan</p>
            </div>
            <p>85.71%</p>
          </div>
          <div className="flex items-center space-x-32">
            <div className="flex items-center space-x-4 w-72">
              <div className="w-2 h-2 rounded-full bg-[#22C55E]"></div>
              <p>Pendapatan Asli Desa</p>
            </div>
            <p>77.67%</p>
          </div>
          <div className="flex items-center space-x-32">
            <div className="flex items-center space-x-4 w-72">
              <div className="w-2 h-2 rounded-full bg-[#EF4444]"></div>
              <p>Pendapatan Transfer</p>
            </div>
            <p>71.16%</p>
          </div>
          <div className="flex items-center space-x-32">
            <div className="flex items-center space-x-4 w-72">
              <div className="w-2 h-2 rounded-full bg-[#F97316]"></div>
              <p>Pendapatan Lain - lain</p>
            </div>
            <p>64.44%</p>
          </div>
          <div className="flex items-center space-x-32">
            <div className="flex items-center space-x-4 w-72">
              <div className="w-2 h-2 rounded-full bg-[#EAB308]"></div>
              <p>Realisasi</p>
            </div>
            <p>52.22%</p>
          </div>
        </div>
      </div>
      <div>
        <ChartCircle />
      </div>
    </div>
  );
};

export default Chart;
