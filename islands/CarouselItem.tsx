import { Video as LiveVideo } from "$live/std/ui/types/Video.ts";
import Video from "$live/std/ui/components/Video.tsx";

export interface Props {
  mobile: LiveVideo;
  desktop: LiveVideo;
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
      <Video
        loading="eager"
        autoPlay
        loop
        controls={false}
        muted
        width={767}
        height={360}
        media="(max-width: 767px)"
        class="object-cover md:hidden min-h-[360px] w-full cursor-pointer"
        alt={redirectUrl}
        sizes="25vw"
        src={mobile}
      />
      <Video
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
      />
    </button>
  );
}
