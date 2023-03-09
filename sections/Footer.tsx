import { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Props {
  imgSrc: LiveImage;
}

export default function Footer({ imgSrc }: Props) {
  return (
    <footer class="w-full bg-[#242D21]">
      <div class="hidden md:block  w-full">
        <div class="flex justify-between items-center px-[118px] py-[64px] text-[#ECCDA5] text-[24px] font-normal">
          <p>asdasd</p>
          <p class="cursor-pointer hover:font-bold">Termos e condições</p>
          <p class="cursor-pointer hover:font-bold">Privacidade</p>
          <p class="cursor-pointer hover:font-bold">CNPJ + endereço</p>
        </div>
      </div>
      <div class="md:hidden pt-[24px] pb-[42px] px-[16px] flex flex-col text-[#ECCDA5] text-[11px] font-normal items-center justify-center">
        <p class="pb-[32px]">adjasidjiao</p>
        <div class="flex items-center justify-between w-full">
          <p class="cursor-pointer hover:font-bold">Termos e condições</p>
          <p class="cursor-pointer hover:font-bold">Privacidade</p>
          <p class="cursor-pointer hover:font-bold">CNPJ + endereço</p>
        </div>
      </div>
    </footer>
  );
}
