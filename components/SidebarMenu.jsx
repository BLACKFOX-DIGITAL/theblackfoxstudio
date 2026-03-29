import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiMenuLine } from "@remixicon/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getFontFamily } from "@/utils/font";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const SidebarMenu = ({ links }) => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger aria-label="menu" className="lg:hidden">
        <RiMenuLine />
      </SheetTrigger>
      <SheetContent className="z-[101]" side="left">
        <SheetHeader>
          {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
          <SheetDescription className={"flex flex-col gap-4 mt-4"}>
            {links?.map((ele, ind) => {
              if (ele?.children)
                return (
                  <Accordion
                    key={ele.name}
                    type="single"
                    collapsible
                    className="w-full"
                  >
                    <AccordionItem className="border-b-0" value="item-1">
                      <AccordionTrigger
                        className={cn(
                          "text-[#011] px-4 text-center py-0  hover:no-underline tracking-[4px] hover:bg-grayLight transition-all duration-300 uppercase font-semibold  text-xl   ",
                          getFontFamily("saira-condensed"),
                          pathname === ele.url && "bg-grayLight"
                        )}
                      >
                        {ele?.name}
                      </AccordionTrigger>
                      <AccordionContent className={"pb-0"}>
                        {ele?.children?.map((ele) => (
                          <Link
                            className="text-sm block w-full text-start px-[16px] border-b uppercase py-3   text-[#2e2e2e] hover:bg-[#e4e4e4] transition-all duration-300"
                            href={ele?.url}
                            key={ele?.url}
                          >
                            {ele?.name}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>{" "}
                  </Accordion>
                );
              else
                return (
                  <Link
                    className={cn(
                      "text-[#011] text-start px-4 tracking-[4px] hover:bg-grayLight transition-all duration-300 uppercase font-semibold  text-xl   ",
                      getFontFamily("saira-condensed"),
                      pathname === ele.url && "bg-grayLight"
                    )}
                    key={ele.name}
                    href={ele.url}
                  >
                    {ele?.name}
                  </Link>
                );
            })}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SidebarMenu;
