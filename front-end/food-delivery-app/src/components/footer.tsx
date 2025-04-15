import { Texts } from "./texts";

export const Footer = () => {
  return (
    <div>
      <div></div>
      <div></div>
      <div className="flex px-8 gap-12">
        <div>
          <Texts
            isBottom={true}
            isMiddle={false}
            isTitle={false}
            text="Copy right 2024"
          />
          <Texts isBottom={true} isMiddle={false} isTitle={false} text="©" />
          <Texts
            isBottom={true}
            isMiddle={false}
            isTitle={false}
            text="Nomnom LLC"
          />
        </div>
        <Texts
          isBottom={true}
          isMiddle={false}
          isTitle={false}
          text="Privacy policy"
        />
        <Texts
          isBottom={true}
          isMiddle={false}
          isTitle={false}
          text="Terms and conditoin"
        />
        <Texts
          isBottom={true}
          isMiddle={false}
          isTitle={false}
          text="Cookie policy"
        />
      </div>
    </div>
  );
};
