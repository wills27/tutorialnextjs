import React from "react";

const InfoLabel: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  return (
    <div className="w-[559px] h-5 flex flex-row justify-between">
      <p className="text-[16px] font-medium font-montserrat text-color-1 text-left">
        {label}:
      </p>
      <p className="text-[16px] font-medium font-montserrat text-color-6 text-right">
        {value}
      </p>
    </div>
  );
};

export default InfoLabel;