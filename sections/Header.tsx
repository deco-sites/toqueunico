import type { h } from "preact";

import Icon from "$components/ui/Icon.tsx";
import { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import IconHeart from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/heart.tsx";

import CartButton from "../islands/CartButton.tsx";
import SearchBar from "../islands/SearchBar.tsx";

function NavItem({
  href,
  children,
}: h.JSX.HTMLAttributes<HTMLLIElement>) {
  return (
    <a
      href={href ?? `/search?ft=${children}`}
      class="flex items-center text-[15px] px-8 lg:px-6"
    >
      <span class="hover:border-black border-solid border-b border-white">
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
        <section class="hidden md:flex bg-white flex-row h-[80px] items-center md:border-b border-[#d3d5db] mx-8">
          <a href="/" class="block min-w-[12rem] max-w-[14rem] p-3">
            <Icon id="Logo" width="566" height="64" class="w-full" />
          </a>
          <div class="flex justify-center md:justify-between pl-12 h-14">
            <NavItem href="/farm">Marcas</NavItem>
            <NavItem href="/search?trade-policy=1&filter.departamento=feminino">
              Feminino
            </NavItem>
            <NavItem href="/search?trade-policy=1&filter.departamento=masculino">
              Masculino
            </NavItem>
            <NavItem href="/search?trade-policy=1&filter.departamento=infantil">
              Infantil
            </NavItem>
          </div>
          <div class="flex-1 flex items-center justify-end gap-6">
            <a href="#" class="h-12 w-12 flex justify-center items-center">
              <Icon id="MagnifyingGlass" className="w-6 h-6" />
            </a>
            <a href="#" class="h-12 w-12 flex justify-center items-center">
              <Icon id="User" className="w-6 h-6" />
            </a>
            <CartButton />
          </div>
        </section>
      </>
    </header>
  );
}

export default Header;
