type Props = {
  text: string;
  isTitle: boolean;
  isMiddle: boolean;
  isBottom: boolean;
};

export const Texts = ({ text, isTitle, isMiddle, isBottom }: Props) => {
  return (
    <div
      className={`${isTitle && "text-base leading-[28px] text-[#71717A]"} 
      ${isMiddle && "text-base leading-[24px] text-[#FAFAFA]"} 
      ${isBottom && "text-sm leading-[20px] text-[#71717A]"}`}
    >
      {text}
    </div>
  );
};
