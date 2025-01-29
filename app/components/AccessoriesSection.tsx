"use client";
import { useState } from "react";
import AccessoriesArticle from "./AccessoriesArticle";
import AccessoriesHeader from "./AccHeader";

type AccessoryType =
  | "Chairs"
  | "Chessboard"
  | "Lighting"
  | "Disco Ball"
  | "Bench"
  | "Tables";

const AccessoriesSection = () => {
  const [selectedIcon, setSelectedIcon] = useState<AccessoryType>("Chairs");

  return (
    <section
      id="accessoriesSection"
      className="w-full h-[400px] flex flex-col gap-4 mx-10"
    >
      <AccessoriesHeader
        selectedIcon={selectedIcon}
        onIconSelect={setSelectedIcon}
      />

      {selectedIcon && (
        <article className="mt-6">
          <AccessoriesArticle label={selectedIcon} />
        </article>
      )}
    </section>
  );
};

export default AccessoriesSection;
