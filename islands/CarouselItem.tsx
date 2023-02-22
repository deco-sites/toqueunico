import { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Props {
  mobile: LiveImage;
  desktop: LiveImage;
  redirectUrl: string;
  id: string;
}

export default function CarouselItem(
  { mobile, desktop, redirectUrl, id }: Props,
) {
  const handleImageClick = (url: string) => {
    console.log(url);
  };

  return (
    <button
      class="w-full"
      id={id}
      onClick={() => handleImageClick(redirectUrl || "")}
    >
      <img
        class="inline md:hidden object-cover w-full h-[350px] "
        src={mobile}
        alt="logo"
        loading="eager"
      />
      <img
        class="hidden md:inline object-cover w-full h-[65vh]"
        src={desktop}
        alt="logo"
        loading="eager"
      />
    </button>
  );
}
