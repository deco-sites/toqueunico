import { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Props {
  categories: Array<{ image: LiveImage; name: string }>;
}

export default function CarouselItem(
  { categories = [] }: Props,
) {
  return (
    <div class="w-full flex flex-wrap items-center gap-5 px-[15px] md:px-[120px] py-[21px] md:py-[46px] justify-center">
      {categories.map(({ image, name }) => (
        <div class="w-[161px] md:w-[285px] cursor-pointer group">
          <img
            class="object-cover w-full h-[120px] md:h-[292px] rounded-t-[13px] group-hover:shadow-xl"
            src={image}
            alt="logo"
            loading="eager"
          />
          <div class="bg-[#ECCDA5] h-[41px] md:h-[100px] rounded-b-[13px] flex justify-center items-center group-hover:shadow-xl">
            <p class="font-semibold text-[20px] md:text-[48px] text-black">
              {name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
