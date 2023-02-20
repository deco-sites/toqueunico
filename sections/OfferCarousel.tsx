import { useId } from "preact/hooks";
import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/chevron-right.tsx";
import IconChevronLeft from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/chevron-left.tsx";
import { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import CarouselItem from "../islands/CarouselItem.tsx";
import Slider from "../islands/Slider.tsx";

export interface Props {
  images: Array<{
    /** @title Image Mobile */
    mobile: LiveImage;
    /** @title Image Desktop */
    desktop: LiveImage;
    redirectUrl?: string;
  }>;
  /**
   * @title delay
   * @description Time to switch slides in seconds
   * @default 3
   */
  delay?: number;
}

function OfferCarousel({ images = [], delay = 3 }: Props) {
  const id = useId();

  return (
    <>
      <div id={id} class="relative w-full overflow-hidden relative">
        <div
          data-slider-content
          class={`flex transition w-[${images.length * 100}%]`}
        >
          {images.map(({ mobile, desktop, redirectUrl = "" }, index) => (
            <CarouselItem
              mobile={mobile}
              desktop={desktop}
              redirectUrl={redirectUrl}
              id={`${id}-${index}`}
            />
          ))}
        </div>
        <IconChevronLeft
          data-slider-prev
          name="ChevronLeft"
          class="h-[32px] w-[32px] md:h-[64px] md:w-[64px] text-white p-2 absolute top-[45%] left-1 md:left-12 cursor-pointer"
        />
        <IconChevronRight
          data-slider-next
          name="ChevronRight"
          class="h-[32px] w-[32px] md:h-[64px] md:w-[64px] text-white p-2 absolute top-[45%] right-1 md:right-12 cursor-pointer"
        />
        <div class="absolute z-30 bottom-5 flex w-full items-center justify-center">
          {images.map((_, index) => (
            <div
              data-dot
              aria-label={`Focus slide carousel ${index}`}
              class="w-[38px] h-[1px] md:w-[160px] md:h-[4px]  bg-white dark:bg-gray-800 mx-2 cursor-pointer"
            />
          ))}
        </div>
      </div>
      <Slider id={id} items={images.length} delay={delay * 1000} />
    </>
  );
}

export default OfferCarousel;
