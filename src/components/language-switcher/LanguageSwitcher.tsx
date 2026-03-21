"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import EnglishFlag from "@/../public/assets/flags/english-flag.svg";
import RussianFlag from "@/../public/assets/flags/russian-flag.svg";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion"; // <-- დაამატე ეს
import { cn } from "@/lib/utils";

type LanguageCode = "en" | "ru";

interface LanguageConfig {
  code: LanguageCode;
  short: string;
  label: string;
  flag: StaticImageData;
}

const LANGUAGES: Record<LanguageCode, LanguageConfig> = {
  en: {
    code: "en",
    short: "EN",
    label: "ENGLISH",
    flag: EnglishFlag,
  },
  ru: {
    code: "ru",
    short: "RU",
    label: "RUSSIAN",
    flag: RussianFlag,
  },
};

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const locale = useLocale() as LanguageCode;
  const pathname = usePathname();
  const router = useRouter();
  const currentLang = LANGUAGES[locale] ?? LANGUAGES.en;

  const changeLanguage = (newLocale: LanguageCode) => {
    if (!pathname) return;
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
    setOpen(false);
  };

  return (
    <DropdownMenu modal={false} open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center bg-white gap-2 px-3 h-10 rounded-md cursor-pointer"
        >
          <Image
            src={currentLang.flag}
            alt={currentLang.label}
            width={35}
            height={35}
            className="rounded-sm"
          />
          <span className="text-sm font-medium text-gray-800">
            {currentLang.short}
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-gray-600 transition-transform",
              open && "rotate-180",
            )}
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent asChild>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="bg-white ml-5"
        >
          {Object.values(LANGUAGES).map(({ code, label, flag }) => (
            <DropdownMenuItem
              key={code}
              onClick={() => changeLanguage(code)}
              className="flex items-center gap-3 px-3 py-2 cursor-pointer rounded-sm hover:bg-gray-300"
            >
              <Image
                src={flag}
                alt={label}
                width={35}
                height={35}
                className="rounded-sm"
              />
              <span className="text-lg">{label}</span>
            </DropdownMenuItem>
          ))}
        </motion.div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
