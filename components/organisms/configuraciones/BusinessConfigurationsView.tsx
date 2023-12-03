import { FC } from "react";

import BusinessMenu from "./businessMenu/BusinessMenu";
import BusinessEmployees from "./BusinessEmployees";

interface Props {
  optionSelected: number;
}

const BusinessConfigurationsView: FC<Props> = ({ optionSelected }) => {
  return (
    <section className="w-[70%] bg-[rgb(17,17,17)] h-[680px] rounded-lg relative overflow-y-scroll">
      {optionSelected === 0 && <div>hello</div>}
      {optionSelected === 1 && <BusinessMenu />}
      {optionSelected === 2 && <BusinessEmployees />}
    </section>
  );
};

export default BusinessConfigurationsView;
