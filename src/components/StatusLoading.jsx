import { Skeleton } from "./ui/skeleton";

function StatusLoading() {
  return (
    <div className="p-4 bg-white flex flex-col justify-between rounded-md shadow-md min-h-[300px]">
      <div>
        <div className="flex justify-center">
          <Skeleton className="h-[100px] w-[80px]" />
        </div>
        <div className="flex justify-center">
          <Skeleton className="h-6 w-[300px] mt-4 text-center" />
        </div>

        <div className="mt-4 mb-4 flex items-center gap-2 justify-center">
          <Skeleton className="w-[100px] h-[20px]" />
        </div>
        <div className="flex justify-center mt-4">
          <Skeleton className="h-4 w-[100px]" />
        </div>
        <div className="flex mt-4 justify-between">
          <Skeleton className="h-10 w-[120px]" />
          <Skeleton className="h-10 w-[120px]" />
        </div>
      </div>
    </div>
  );
}

export default StatusLoading;
