import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenu } from "iconsax-reactjs";

const Header = () => {
  const navigationItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#projects", label: "Our Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <Logo />
        <div className="lg:flex hidden gap-20 items-center">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href.replace('#', ''));
              }}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="lg:hidden block">
          <Sheet>
            <SheetTrigger>
              <div className="lg:hidden">
                <HamburgerMenu size={40} />
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Unique Builders Concepts</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col leading-[60px]">
                    {navigationItems.map((item) => (
                      <a
                        key={item.label}
                        className="text-[15px] font-bold cursor-pointer hover:text-blue-600 transition-colors"
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.href.replace('#', ''));
                        }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="py-6 px-6 lg:flex hidden rounded-full cursor-pointer bg-[#333333]"
                  >
                    Get a Free Quote
                  </Button>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <Button className="py-6 px-6 lg:flex hidden rounded-full cursor-pointer bg-[#333333]">
          Get a Free Quote
        </Button>
      </div>
    </div>
  );
};

export default Header;
