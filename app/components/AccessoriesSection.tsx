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
    <section id="accessoriesSection" className="flex justify-center py-20">
      <div className="w-full max-w-7xl">
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
