export const BottomTexts = ({ text }: { text: string }) => {
  return <span className="text-sm text-[#71717A] leading-[20px]">{text}</span>;
};

export const TitleTexts = ({ text }: { text: string }) => {
  return (
    <span className="text-base text-[#71717A] leading-[28px]">{text}</span>
  );
};

export const MiddleTexts = ({ text }: { text: string }) => {
  return <span className="text-base text-[red] leading-[24px]">{text}</span>;
};
