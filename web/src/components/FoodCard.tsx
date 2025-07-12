import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface FoodCardProps {
  title: string;
  price: number;
  image: string;
}

export default function FoodCard({ title, price, image }: FoodCardProps) {
  return (
    <Card className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-white rounded-[20px] border border-[#A02224] shadow-md overflow-hidden">
      <div className="flex">
        {/* Left - Image */}
        <div className="flex-shrink-0 p-4">
          <img
            src={image}
            alt={title}
            className="w-32 h-28 sm:w-36 sm:h-32 lg:w-40 lg:h-36 object-cover rounded-xl"
          />
        </div>

        {/* Divider */}
        <div className="w-[1px] bg-[#C8C8C8] my-4" />

        {/* Right - Content */}
        <div className="flex flex-col justify-center px-4 py-2 relative flex-grow">
          {/* Heart */}
          <div className="absolute top-2 right-2">
            <Heart
              className="w-6 h-6 sm:w-7 sm:h-7 stroke-[#711E1E]"
              strokeWidth={2.5}
              fill="none"
            />
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-[#711E1E] mb-1">{title}</h3>

          {/* Price */}
          <div className="text-base sm:text-lg font-semibold text-[#711E1E]">₹{price}</div>

          {/* Button */}
          <Button className="mt-3 w-28 sm:w-32 h-8 sm:h-9 bg-[#A02224] rounded-full text-white text-sm sm:text-base font-medium">
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
}