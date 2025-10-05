import DataCardPage from "@/components/HomePage/DataCard";
import RoyelYecData from "@/components/HomePage/RoyelYecData";
import SharedBannar from "@/components/shared/SharedBannar";
import React from "react";

const page = () => {

  return (
    <div>
      <SharedBannar
        title="ROYAL Yachts"
        description="Step aboard a private floating villa for an unforgettable event surrounded by sweeping 360° water views. Designed with luxury, comfort, and exclusivity in mind, these villas redefine what it means to host on the water."
      ></SharedBannar>

      <div className="pt-11 pb-20">
        <RoyelYecData></RoyelYecData>
      </div>
    </div>
  );
};

export default page;
