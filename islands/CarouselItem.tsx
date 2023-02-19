import { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import Video from "$live/std/ui/components/Video.tsx";

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
        class="object-cover w-full h-[65vh]"
        src={desktop}
        alt="logo"
        loading="eager"
      />
      {
        /* <Video
        loading="eager"
        autoPlay
        loop
        controls={false}
        muted
        width={1280}
        height={600}
        media="(min-width: 768px)"
        class="object-cover hidden md:block min-h-[55vh] w-full max-h-[600px] cursor-pointer"
        alt={redirectUrl}
        sizes="50vw"
        src={desktop}
      /> */
      }
    </button>
  );
}
