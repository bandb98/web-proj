"use client";

import React, { useState } from "react";
import { getWhatsAppLink } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const packages = [
  "Hygiene & Shower Package",
  "Hair Care Package",
  "Tip to Toe Package",
  "Tick Free Package",
];

export default function PackageSelector() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (pkg: string) => {
    setSelected((prev) =>
      prev.includes(pkg) ? prev.filter((p) => p !== pkg) : [...prev, pkg]
    );
  };

  const message =
    selected.length > 0
      ? `Hi! I'm interested in the following grooming package(s):\n\n${selected.map((p) => `• ${p}`).join("\n")}\n\nCan I get a quote?`
      : "Hello! I'd like to book a doorstep grooming appointment. Can I get a quote?";

  return (
    <div>
      <div className="space-y-3 mb-8">
        {packages.map((pkg) => (
          <label
            key={pkg}
            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 border ${
              selected.includes(pkg)
                ? "bg-brass-500/20 border-brass-500"
                : "bg-forest-800 border-forest-700 hover:border-forest-600"
            }`}
          >
            <input
              type="checkbox"
              checked={selected.includes(pkg)}
              onChange={() => toggle(pkg)}
              className="sr-only"
            />
            <div
              className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-colors ${
                selected.includes(pkg)
                  ? "bg-brass-500 text-white"
                  : "bg-forest-700 border border-forest-600"
              }`}
            >
              {selected.includes(pkg) && (
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-sm font-medium">{pkg}</span>
          </label>
        ))}
      </div>
      <a
        href={getWhatsAppLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full px-6 py-4 text-sm font-semibold uppercase tracking-wider text-forest-900 bg-brass-400 hover:bg-brass-300 rounded-full transition-all duration-300"
      >
        Book on WhatsApp <ArrowRight size={16} />
      </a>
    </div>
  );
}
