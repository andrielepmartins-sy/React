import { Square } from "./components/caixa";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="bg-blue-950 flex w-50 h-50 rounded-full justify-center text-center items-center ">teste
       </div>

      <div className="bg-green-800 flex w-50 h-50 rounded-full justify-center text-center items-center self-start">A 
       </div>
       <Square />
      <div className="bg-blue-800 flex w-100 h-50  items-center text-center justify-center">B  
       </div>
       
      <div className="bg-pink-800 flex w-120 h-60 rounded-lg  items-center text-center self-end justify-center">C</div>
    </div>
  );
}
