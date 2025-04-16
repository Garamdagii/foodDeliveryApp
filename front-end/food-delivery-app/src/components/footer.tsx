import { BottomTexts, MiddleTexts, TitleTexts } from "./texts";

const bottomTexts = [
  "Copy right 2024",
  "©",
  "Nomnom LLC",
  "Privacy policy",
  "Terms and conditoin",
  "Cookie policy",
];

const middleTexts = [
  "Home",
  "Contact us",
  "Delivery zone",
  "Appetizers",
  "Salads",
  "Pizzas",
  "Main dishes",
  "Desserts",
];

export const Footer = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <h3>NOMNOM</h3>
        {middleTexts.slice(0, 3).map((text, index) => (
          <MiddleTexts key={index} text={text} />
        ))}
      </div>
      <div>
        <h3>MENU</h3>
        {middleTexts.slice(3, 7).map((text, index) => (
          <MiddleTexts key={index} text={text} />
        ))}
      </div>
      {/* <div className="flex px-8 gap-12">
        {bottomTexts.map((text, index) => (
          <BottomTexts key={index} text={text} />
        ))}
      </div> */}
    </div>
  );
};
