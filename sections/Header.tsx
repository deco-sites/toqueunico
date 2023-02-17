import type { h } from "preact";

import Icon from "$components/ui/Icon.tsx";
import { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import IconHeart from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/heart.tsx";
import IconUser from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/user.tsx";

import CartButton from "../islands/CartButton.tsx";
import SearchBar from "../islands/SearchBar.tsx";

function NavItem({
  href,
  children,
}: h.JSX.HTMLAttributes<HTMLLIElement>) {
  return (
    <a
      href={href ?? `/search?ft=${children}`}
      class="flex items-center text-[15px] px-[26px] lg:px-6"
    >
      <span class="text-white font-normal hover:font-bold text-[20px] leading-[24px]">
        {children}
      </span>
    </a>
  );
}

export interface Props {
  color: string;
  imgSrc: LiveImage;
}

function Header({ color = "", imgSrc }: Props) {
  return (
    <header>
      <>
        {/* Mobile Version */}
        <section
          class={`bg-[${color}] md:hidden px-[15px] pt-[28px] pb-[18px]`}
        >
          <div class="flex justify-between items-center h-[27px]">
            <button
              aria-label="open menu"
              class="flex items-center justify-center"
            >
              <Icon id="Bars3" className="w-6 h-6 text-white w-[55px]" />
            </button>

            <img
              class="object-cover w-[175px]"
              src={imgSrc}
              alt="logo"
              loading="eager"
            />
            <div class="flex justify-end w-[55px]">
              <a
                href="#"
                class="flex items-center justify-center h-12 w-12"
                aria-label="search"
              >
                <IconHeart class="w-6 h-6 text-white" />
              </a>

              <CartButton />
            </div>
          </div>
          <div class="mt-4">
            <SearchBar />
          </div>
        </section>

        {/* Desktop Version */}
        <section
          class={`bg-[${color}] hidden md:flex items-center justify-center`}
        >
          <div class="max-w-[1200px] flex flex-row h-[80px] items-center py-[54px]">
            <img
              class="object-contain w-[317px] h-[51px]"
              src={imgSrc}
              alt="logo"
              loading="eager"
            />
            <div class="flex items-center justify-center md:justify-between pl-8">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/search?trade-policy=1&filter.departamento=feminino">
                Categorias
              </NavItem>
            </div>
            <div class="flex-initial flex">
              <SearchBar />
            </div>
            <div class="flex-1 flex items-center justify-end gap-6 ml-4">
              <a href="#" class="h-12 w-12 flex justify-center items-center">
                <IconUser class="w-6 h-6 text-white" />
              </a>
              <a href="#" class="h-12 w-12 flex justify-center items-center">
                <IconHeart class="w-6 h-6 text-white" />
              </a>
              <CartButton />
            </div>
          </div>
        </section>
      </>
    </header>
  );
}

export default Header;
