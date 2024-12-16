"use client";

import { Select, SelectItem } from "@nextui-org/react";

export const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
];

export default function NextUIExample() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select className="max-w-xs" label="Select an animal">
        {animals.map((animal) => (
          <SelectItem key={animal.key} value={animal.key}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
