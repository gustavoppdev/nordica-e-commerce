"use client";

// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// Components
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

// Constants
import { NavigationBarLinks } from "@/constants";

const NavigationBarMobile = () => {
  const t = useTranslations("Layout.NavigationBar");

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger className="p-2 hover:bg-muted rounded-md transition-colors cursor-pointer flex items-center justify-center">
          <Menu className="size-6 text-foreground" aria-label="Menu" />
        </SheetTrigger>
        <SheetContent className="p-6 flex flex-col justify-between h-full">
          <div>
            <SheetHeader className="p-0 mb-8">
              <SheetTitle className="text-left font-mono uppercase tracking-[0.2em] font-bold text-lg">
                Nordica
              </SheetTitle>
              <SheetDescription className={"sr-only"} />
            </SheetHeader>

            <nav className="flex flex-col">
              {NavigationBarLinks.map((link) => (
                <SheetClose
                  key={link.labelKey}
                  render={<Link href={link.href} />}
                  nativeButton={false}
                  className="text-left font-medium text-sm uppercase tracking-[0.15em] text-foreground hover:text-muted-foreground transition-colors py-4 border-b border-border/60 last:border-b-0 cursor-pointer"
                >
                  {t(link.labelKey)}
                </SheetClose>
              ))}
            </nav>
          </div>

          <SheetFooter className="p-0 mt-auto flex flex-col gap-2">
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">
              © {new Date().getFullYear()} Nordica Coffee
            </p>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavigationBarMobile;
