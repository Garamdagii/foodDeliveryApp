import axios from "axios";
import { useEffect, useState } from "react";

type Types = {
  categoryName: string;
};

export const FoodCategories = () => {
  const [categoryData, setCategoryData] = useState<Types[]>();

  useEffect(() => {
    foodCategories();
  }, []);

  const foodCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8001/foodCategory");
      setCategoryData(response.data.categories);
      //   console.log(response.data.categories);
    } catch (error) {
      console.error(error, "err");
    }
  };

  return (
    <div className="flex flex-col gap-9 px-8 py-12">
      <h2 className="text-3xl font-semibold leading-[36px] text-[#FFF]">
        Categories
      </h2>
      <div className="flex gap-[8px]">
        {categoryData?.map((value, index) => (
          <button
            key={index}
            className="flex justify-center items-center px-5 py-1 rounded-full bg-[#FFF] text-lg leading-[28px] text-[#18181B] active:bg-red-500 active:text-[#FAFAFA]"
          >
            {value.categoryName}
          </button>
        ))}
      </div>
    </div>
  );
};
