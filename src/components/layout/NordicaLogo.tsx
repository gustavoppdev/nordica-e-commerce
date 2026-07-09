// Next.js & Next-Intl
import Image from "next/image";
import { useTranslations } from "next-intl";

// Assets
import { nordica_logo } from "@/assets";
import { Link } from "@/i18n/navigation";

const NordicaLogo = () => {
  const t = useTranslations("Layout.NavigationBar.Logo");

  return (
    <Link href={"/"} className="flex flex-col items-center">
      <Image
        src={nordica_logo}
        alt="Nordica"
        width={24}
        height={24}
        className="object-cover size-6 mb-1"
      />

      <p className="uppercase tracking-[0.2em] font-mono font-bold">Nordica</p>

      <p className="uppercase text-xs font-medium tracking-widest">
        {t("description")}
      </p>
    </Link>
  );
};

export default NordicaLogo;
