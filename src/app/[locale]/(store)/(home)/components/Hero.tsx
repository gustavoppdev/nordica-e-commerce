// Next-Intl
import { useTranslations } from "next-intl";

// Components & Icons
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const t = useTranslations("Sections.Hero");
  return (
    <section className="relative w-full min-h-[calc(100dvh-100px)] flex justify-center items-center section-container">
      <div className="flex flex-col gap-8 text-center items-center text-pretty">
        <h1 className="font-light text-5xl lg:text-6xl tracking-tighter leading-[1.15]">
          {t.rich("title", {
            break: (chunks) => <span className="block">{chunks}</span>,
          })}
        </h1>

        <p className="lg:text-lg max-w-md lg:max-w-xl">{t("description")}</p>

        <div className="flex items-center gap-4">
          <Button size={"lg"}>{t("buttons.shop")}</Button>
          <Button variant={"outline"} size={"lg"}>
            {t("buttons.learnMore")} <ArrowRight className="size-4.5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
