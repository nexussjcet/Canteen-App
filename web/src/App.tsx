import FoodCard from "./components/FoodCard";
import teaImg from "@/assets/tea.png";
import coffeeImg from "@/assets/coffee.png";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] p-4 flex flex-col gap-4 items-center">
      <FoodCard title="Tea" price={10} image={teaImg} />
      <FoodCard title="Coffee" price={15} image={coffeeImg} />
    </div>
  );
}
