"use client";
import { useState } from "react";
import AccessoriesArticle from "./AccessoriesArticle";
import AccessoriesHeader from "./AccHeader";

export type AccessoryType =
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
      className="h-[400px] flex flex-col justify-center items-center gap-4 mx-10"
    >
      <div className="max-w-7xl w-full">
        <AccessoriesHeader
          selectedIcon={selectedIcon}
          onIconSelect={setSelectedIcon}
        />

        {selectedIcon && (
          <article className="mt-6">
            <AccessoriesArticle label={selectedIcon} />
          </article>
        )}
      </div>
    </section>
  );
};

export default AccessoriesSection;
