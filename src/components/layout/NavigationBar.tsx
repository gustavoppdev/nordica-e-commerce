// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// Components
import NordicaLogo from "./NordicaLogo";
import NavigationBarMobile from "./NavigationBarMobile";
import { Button } from "../ui/button";

// Constants
import { NavigationBarLinks } from "@/constants";

const NavigationBar = () => {
  const t = useTranslations("Layout.NavigationBar");
  return (
    <header className="border-b">
      <nav className="section-container flex items-center justify-between py-4">
        <ul className="items-center gap-2 hidden lg:flex">
          {NavigationBarLinks.slice(0, 3).map((link) => (
            <li key={link.labelKey}>
              <Button variant={"link"} className={"text-[13px]"}>
                <Link href={link.href}>{t(link.labelKey)}</Link>
              </Button>
            </li>
          ))}
        </ul>

        <NordicaLogo />

        <ul className="items-center gap-2 hidden lg:flex">
          {NavigationBarLinks.slice(3).map((link) => (
            <li key={link.labelKey}>
              <Button variant={"link"} className={"text-[13px]"}>
                <Link href={link.href}>{t(link.labelKey)}</Link>
              </Button>
            </li>
          ))}
        </ul>
        <NavigationBarMobile />
      </nav>
    </header>
  );
};

export default NavigationBar;
