import { useId } from "preact/hooks";
import Slider from "../islands/Slider.tsx";
import Icon from "$components/ui/Icon.tsx";
import { Video as LiveVideo } from "$live/std/ui/types/Video.ts";
import CarouselItem from "../islands/CarouselItem.tsx";

export interface Props {
  images: Array<{
    /** @title Image Mobile */
    mobile: LiveVideo;
    /** @title Image Desktop */
    desktop: LiveVideo;
    redirectUrl?: string;
  }>;
  /**
   * @title delay
   * @description Time to switch slides in seconds
   * @default 3
   */
  delay?: number;
}

function VideoCarousel({ images = [], delay = 3 }: Props) {
  const id = useId();

  return (
    <>
      <div id={id} class="relative w-full overflow-hidden">
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

        <div class="absolute z-30 flex -translate-x-1/2 bottom-[8px] left-[42px] md:left-[102px]">
          <button data-slider-prev class="bg-white p-2 mr-2">
            <Icon
              weight="bold"
              name="ChevronLeft"
              className="h-3 w-3 text-[#f55d2f]"
            />
          </button>
          <button data-slider-next class="bg-white p-2">
            <Icon
              weight="bold"
              name="ChevronRight"
              className="h-3 w-3 text-[#f55d2f]"
            />
            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2">
              {images.map((_, index) => (
                <button
                  data-dot
                  aria-label={`Focus slide carousel ${index}`}
                  class="p-4"
                >
                  <div class="w-4 h-4 rounded-full bg-white dark:bg-gray-800" />
                </button>
              ))}
            </div>
          </button>
        </div>
      </div>
      <Slider id={id} items={images.length} delay={delay * 1000} />
    </>
  );
}

export default VideoCarousel;
