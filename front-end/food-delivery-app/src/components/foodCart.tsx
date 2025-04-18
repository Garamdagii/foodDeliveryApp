import axios from "axios";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const foods = [
  {
    name: "food1",
    price: "100",
    description: "up",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/26ea/bce7/1cf327094760b819bce93ad28dd01157?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g3RjibRuZ1TmkJJRm6Ui~G79Y0DV7mj4WN1kbuW-wJtjB9qhoUNP9VyZooc3x9LgVS9PHwN3X6aVNb7qHTiJYc5AYau-C~xkcbHbF4z~nvI5HNisn~lAVcKsO51nql9YzdsjEukvZva1ruEN8q8~LT20C11EOpAHC6W0UZUD4mWWHknbFNwWmBOmugACe4uc9AYCgKqUP~DUslyeCStcMPSIQImd6QyN5iT1q~6rwzNQPc3TudqxxJMtjpdFXe9erdq-R7Aq8i1cCZ4aykttUWvriRfdOm5I1IjT91EczJqOQvwnoLOLmUfbUrBfAmF1ZhpI0MlB-8GDKe6ZMO2Wag__",
  },
  {
    name: "food1",
    price: "100",
    description: "up",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/26ea/bce7/1cf327094760b819bce93ad28dd01157?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g3RjibRuZ1TmkJJRm6Ui~G79Y0DV7mj4WN1kbuW-wJtjB9qhoUNP9VyZooc3x9LgVS9PHwN3X6aVNb7qHTiJYc5AYau-C~xkcbHbF4z~nvI5HNisn~lAVcKsO51nql9YzdsjEukvZva1ruEN8q8~LT20C11EOpAHC6W0UZUD4mWWHknbFNwWmBOmugACe4uc9AYCgKqUP~DUslyeCStcMPSIQImd6QyN5iT1q~6rwzNQPc3TudqxxJMtjpdFXe9erdq-R7Aq8i1cCZ4aykttUWvriRfdOm5I1IjT91EczJqOQvwnoLOLmUfbUrBfAmF1ZhpI0MlB-8GDKe6ZMO2Wag__",
  },
  {
    name: "food1",
    price: "100",
    description: "up",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/26ea/bce7/1cf327094760b819bce93ad28dd01157?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g3RjibRuZ1TmkJJRm6Ui~G79Y0DV7mj4WN1kbuW-wJtjB9qhoUNP9VyZooc3x9LgVS9PHwN3X6aVNb7qHTiJYc5AYau-C~xkcbHbF4z~nvI5HNisn~lAVcKsO51nql9YzdsjEukvZva1ruEN8q8~LT20C11EOpAHC6W0UZUD4mWWHknbFNwWmBOmugACe4uc9AYCgKqUP~DUslyeCStcMPSIQImd6QyN5iT1q~6rwzNQPc3TudqxxJMtjpdFXe9erdq-R7Aq8i1cCZ4aykttUWvriRfdOm5I1IjT91EczJqOQvwnoLOLmUfbUrBfAmF1ZhpI0MlB-8GDKe6ZMO2Wag__",
  },
  {
    name: "food1",
    price: "100",
    description: "up",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/26ea/bce7/1cf327094760b819bce93ad28dd01157?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g3RjibRuZ1TmkJJRm6Ui~G79Y0DV7mj4WN1kbuW-wJtjB9qhoUNP9VyZooc3x9LgVS9PHwN3X6aVNb7qHTiJYc5AYau-C~xkcbHbF4z~nvI5HNisn~lAVcKsO51nql9YzdsjEukvZva1ruEN8q8~LT20C11EOpAHC6W0UZUD4mWWHknbFNwWmBOmugACe4uc9AYCgKqUP~DUslyeCStcMPSIQImd6QyN5iT1q~6rwzNQPc3TudqxxJMtjpdFXe9erdq-R7Aq8i1cCZ4aykttUWvriRfdOm5I1IjT91EczJqOQvwnoLOLmUfbUrBfAmF1ZhpI0MlB-8GDKe6ZMO2Wag__",
  },
  {
    name: "food1",
    price: "100",
    description: "up",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/26ea/bce7/1cf327094760b819bce93ad28dd01157?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g3RjibRuZ1TmkJJRm6Ui~G79Y0DV7mj4WN1kbuW-wJtjB9qhoUNP9VyZooc3x9LgVS9PHwN3X6aVNb7qHTiJYc5AYau-C~xkcbHbF4z~nvI5HNisn~lAVcKsO51nql9YzdsjEukvZva1ruEN8q8~LT20C11EOpAHC6W0UZUD4mWWHknbFNwWmBOmugACe4uc9AYCgKqUP~DUslyeCStcMPSIQImd6QyN5iT1q~6rwzNQPc3TudqxxJMtjpdFXe9erdq-R7Aq8i1cCZ4aykttUWvriRfdOm5I1IjT91EczJqOQvwnoLOLmUfbUrBfAmF1ZhpI0MlB-8GDKe6ZMO2Wag__",
  },
  {
    name: "food1",
    price: "100",
    description: "up",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/26ea/bce7/1cf327094760b819bce93ad28dd01157?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g3RjibRuZ1TmkJJRm6Ui~G79Y0DV7mj4WN1kbuW-wJtjB9qhoUNP9VyZooc3x9LgVS9PHwN3X6aVNb7qHTiJYc5AYau-C~xkcbHbF4z~nvI5HNisn~lAVcKsO51nql9YzdsjEukvZva1ruEN8q8~LT20C11EOpAHC6W0UZUD4mWWHknbFNwWmBOmugACe4uc9AYCgKqUP~DUslyeCStcMPSIQImd6QyN5iT1q~6rwzNQPc3TudqxxJMtjpdFXe9erdq-R7Aq8i1cCZ4aykttUWvriRfdOm5I1IjT91EczJqOQvwnoLOLmUfbUrBfAmF1ZhpI0MlB-8GDKe6ZMO2Wag__",
  },
];

type Types = {
  foodName: string;
  price: string;
  image: string;
  ingredients: string;
  category: string;
};

export const FoodCart = () => {
  const [foodData, setFoodData] = useState<Types[]>();

  useEffect(() => {
    Foods();
  }, []);

  const Foods = async () => {
    try {
      const response = await axios.get("http://localhost:8001/food");
      //   console.log(response.data);
      setFoodData(response.data.foods);
    } catch (error) {
      console.error(error, "err");
    }
  };

  return (
    <div className="flex flex-wrap gap-9">
      {foodData?.map((food, index) => {
        return (
          <div
            key={index}
            className="flex flex-col p-4 items-start gap-5 rounded-[20px] bg-[#FFF] w-fit h-fit"
          >
            <div className="flex p-5 justify-end items-end rounded-[12px] relative w-[365px] h-[210px]">
              <Image
                width={0}
                height={0}
                layout="fill"
                src={food.image}
                alt="image"
                className="rounded-[20px]"
              />
              <button className="flex justify-center items-center absolute z-50 size-[44px] px-2 py-4 rounded-full bg-[#FFF]">
                <Plus className="size-[16px] stroke-[#EF4444] stroke-2" />
              </button>
            </div>

            <div className="flex">
              <h3 className="text-2xl font-semibold leading-[32px] text-[#EF4444]">
                {food.foodName}
              </h3>
              <span className="flex text-lg font-semibold leading-[28px] text-[#09090B]">
                {food.price}
              </span>
            </div>
            <p className="flex flex-wrap text-sm leading-[20px] text-[#09090B]">
              {food.ingredients}
            </p>
          </div>
        );
      })}
    </div>
  );
};
