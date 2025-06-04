import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";

function TaskPage() {

  const navigate = useNavigate();
  const [SearchParams] = useSearchParams();
  const title = SearchParams.get("title");
  const description = SearchParams.get("description");

  return (
      <div className="w-screen h-screen bg-slate-100 flex justify-center p-1">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6 ">
          <button 
          onClick={() => navigate(-1)}
          className="absolute left-0 top-1 bottom-0 text-[#C43225] hover:text-red-800 transition-all hover:scale-110">
          <ChevronLeftIcon/>
          </button>
        <h1 className="text-3xl text-[#C43225] font-bold text-center">
        Detalhes do Termo 
        </h1>
        </div>

      <div className="bg-slate-200 p-4 rounded-md">

        <h2 className="text-xl font-bold text-slate-700">
        {title}
        </h2>

        <p className="text-slate-600">
        {description}
        </p>
      </div>
      </div>
    </div>
  );
}

export default TaskPage;