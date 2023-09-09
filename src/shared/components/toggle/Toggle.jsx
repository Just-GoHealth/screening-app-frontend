import { Switch } from "@headlessui/react";
import React from "react";

const Toggle = ({ enabled, setEnabled }) => {
  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-white/80" : "bg-white"}
          relative inline-flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-primary shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default Toggle;
