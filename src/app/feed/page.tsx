import { Globe } from "@/components/feed/globe";
import { CircleGauge, ScanEyeIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl p-2 md:p-10 ">
        <div className="flex gap-2">
          <div className="h-20 w-full rounded-lg bg-muted flex justify-center items-center relative gap-2 ">
            <ScanEyeIcon />
            <h1 className="text-2xl">
              Sedinet <span className="text-primary"> Model</span>
            </h1>
          </div>
          <div className="h-20 w-full rounded-lg bg-muted flex justify-center items-center relative gap-2">
            <CircleGauge />
            <h1 className="text-2xl">
              8% <span className="text-primary">Accuracy</span>
            </h1>
          </div>
          <div className="h-20 w-full rounded-lg bg-muted"></div>
          <div className="h-20 w-full rounded-lg bg-muted"></div>
        </div>
        <div className="flex flex-1 gap-2">
          <div className="h-full w-full rounded-lg bg-muted"></div>
          <div className="h-full w-full rounded-lg bg-muted">
            <Globe />
          </div>
        </div>
      </div>
    </div>
  );
}
