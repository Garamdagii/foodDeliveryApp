import { LogInInput } from "@/components/logInInput";

type Props = {
  title: string;
  titleComment: string;
  placeholder: string;
  account: string;
  entry: string;
  onClick: () => void;
  onClick1: () => void;
};

export const LogInAccount = ({
  title,
  titleComment,
  placeholder,
  account,
  entry,
  onClick,
  onClick1,
}: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-2xl font-semibold leading-[32px] text-[#09090B]">
          {title}
        </h3>
        <p className="text-base leading-[24px] text-[#71717A]">
          {titleComment}
        </p>
      </div>

      <LogInInput placeholder={placeholder} />

      <button onClick={onClick1} className="flex">
        Let's Go
      </button>
      <div className="flex gap-3">
        <p>{account}</p>
        <button onClick={onClick}>{entry}</button>
      </div>
    </div>
  );
};
