"use client";

import ConfigurationsTitle from "@/components/atoms/configuraciones/ConfigurationsTitle";
import BusinessConfigurationsView from "@/components/organisms/configuraciones/BusinessConfigurationsView";
import ConfigurationsOptions from "@/components/organisms/configuraciones/ConfigurationsOptions";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const Settings = () => {
  const searchParams = useSearchParams();
  const option = searchParams.get("option");

  // FIXME: check if option is provided correctly, no letters, no big number, no negative numbers
  const [optionSelected, setOptionSelected] = useState<number>(
    parseInt(option!)
  );

  return (
    <main className="w-full min-h-screen bg-[rgb(38,40,54)]">
      <div className="w-[90.5%] ml-auto mr-7 flex flex-col">
        <ConfigurationsTitle />

        <div className="flex justify-between mt-7">
          {/* settings */}
          <ConfigurationsOptions
            optionSelected={optionSelected}
            setOptionSelected={setOptionSelected}
          />

          {/* content */}
          <BusinessConfigurationsView optionSelected={optionSelected} />
        </div>
      </div>
    </main>
  );
};

export default Settings;
