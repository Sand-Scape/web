interface MetaDataType {
  grain_prediction: {
    size_mm: number;
    distribution_mm: {
      D10: number;
      D16: number;
      D25: number;
      D50: number;
      D50mean: number;
      D65: number;
      D75: number;
      D84: number;
      D90: number;
    };
  };
  coin_prediction: {
    mm_per_pixel: number;
    coin_label: string;
    coin_center_x: number;
    coin_center_y: number;
    coin_radius_px: number;
  };
}

export const PredictionData = ({ data }: { data: MetaDataType | null }) => {
  return (
    <div className="text-xs text-gray-700 dark:text-gray-300">
      <h4 className="font-bold mt-2">Coin Model Prediction</h4>
      <ul className="list-disc list-inside pl-2">
        <li>mm/pixel: {data?.coin_prediction?.mm_per_pixel ?? ""}</li>
        <li>Label: {data?.coin_prediction?.coin_label ?? ""}</li>
        <li>
          Center: ({data?.coin_prediction?.coin_center_x ?? ""},{" "}
          {data?.coin_prediction?.coin_center_y ?? ""})
        </li>
        <li>Radius (px): {data?.coin_prediction?.coin_radius_px ?? ""}</li>
      </ul>
      <h4 className="font-bold mt-2">Grain Model Prediction</h4>
      <ul className="list-disc list-inside pl-2">
        <li>Size (mm): {data?.grain_prediction.size_mm ?? ""}</li>
      </ul>
      <h4 className="font-bold mt-2">Grain Size Distribution (mm)</h4>
      <ul className="list-disc list-inside pl-2 grid grid-cols-2 gap-x-4">
        <li>D10: {data?.grain_prediction.distribution_mm.D10 ?? ""}</li>
        <li>D16: {data?.grain_prediction.distribution_mm.D16 ?? ""}</li>
        <li>D25: {data?.grain_prediction.distribution_mm.D25 ?? ""}</li>
        <li>D50: {data?.grain_prediction.distribution_mm.D50 ?? ""}</li>
        <li>D50mean: {data?.grain_prediction.distribution_mm.D50mean ?? ""}</li>
        <li>D65: {data?.grain_prediction.distribution_mm.D65 ?? ""}</li>
        <li>D75: {data?.grain_prediction.distribution_mm.D75 ?? ""}</li>
        <li>D84: {data?.grain_prediction.distribution_mm.D84 ?? ""}</li>
        <li>D90: {data?.grain_prediction.distribution_mm.D90 ?? ""}</li>
      </ul>
    </div>
  );
};
