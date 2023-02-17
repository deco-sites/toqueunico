import { asset, Head } from "$fresh/runtime.ts";

export interface Props {
  title?: string;
  description?: string;
  url: string;
  imageUrl?: string;
  faviconUrl?: string;
  styleUrls?: string[];
  themeColor?: string;
}

export const initialProps: Props = {
  title: "Fashion | 70% Off",
  description: "70% Off",
  url: "https://fashion.deco.page",
  imageUrl: "https://fashion.deco.page/android-chrome-384x384.png?v=1",
  faviconUrl: "https://fashion.deco.page/favicon-32x32.png?v=1",
  styleUrls: [],
  themeColor: "#221E1F",
};

export default function HeadComponent(props: Props) {
  let {
    title,
    description,
    url,
    imageUrl,
    faviconUrl,
    styleUrls,
    themeColor,
  } = props?.title ? props : initialProps;
  if (!imageUrl) {
    imageUrl = initialProps.imageUrl;
  }
  if (!faviconUrl) {
    faviconUrl = initialProps.faviconUrl;
  }
  return (
    <Head>
      <title>{title}</title>
      <meta name="theme-color" content={themeColor}></meta>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <link rel="shortcut icon" href={faviconUrl} type="image/x-icon"></link>

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      >
      </link>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      >
      </link>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      >
      </link>
      <link rel="manifest" href="/site.webmanifest"></link>
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        data-color="#221E1F"
      >
      </link>
      <meta name="theme-color" content="#221E1F"></meta>
      <meta name="msapplication-TileColor" content="#221E1F"></meta>
      {styleUrls?.map((styleUrl: string) => (
        <link rel="stylesheet" href={asset(styleUrl)}></link>
      ))}
    </Head>
  );
}
