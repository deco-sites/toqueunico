import Image from "deco-sites/std/components/Image.tsx";
import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";

/**
 * A simple, inplace sku selector to be displayed once the user hovers the product card
 * It takes the user to the pdp once the user clicks on a given sku. This is interesting to
 * remove JS from the frontend
 */
function Sizes(product: Product) {
  const possibilities = useVariantPossibilities(product);
  const options = Object.entries(
    possibilities["TAMANHO"] ?? possibilities["Tamanho"] ?? {},
  );

  return (
    <ul class="flex justify-center items-center gap-2">
      {options.map(([value, urls]) => {
        const url = urls.find((url) => url === product.url) || urls[0];

        return (
          <a href={url}>
            <Avatar
              class="bg-default"
              variant="abbreviation"
              content={value}
              disabled={url === product.url}
            />
          </a>
        );
      })}
    </ul>
  );
}

interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;
}

function ProductCard({ product, preload }: Props) {
  const {
    url,
    productID,
    name,
    image: images,
    offers,
  } = product;
  const [front, back] = images ?? [];
  const { listPrice, price, seller } = useOffer(offers);

  return (
    <div
      data-deco="view-product"
      id={`product-card-${productID}`}
      class="w-full group"
    >
      <a href={url} aria-label="product link">
        <div class="relative w-full">
          <Image
            src={front.url!}
            alt={front.alternateName}
            width={200}
            height={279}
            class="rounded w-full group-hover:hidden"
            preload={preload}
            loading={preload ? "eager" : "lazy"}
            sizes="(max-width: 640px) 50vw, 20vw"
          />
          <Image
            src={back?.url ?? front.url!}
            alt={back?.alternateName ?? front.alternateName}
            width={200}
            height={279}
            class="rounded w-full hidden group-hover:block"
            sizes="(max-width: 640px) 50vw, 20vw"
          />
          {seller && (
            <div
              class="absolute bottom-0 hidden sm:group-hover:flex flex-col gap-2 w-full p-2 bg-opacity-10"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(2px)",
              }}
            >
              <Sizes {...product} />
              <Button as="a" href={product.url}>Visualizar Produto</Button>
            </div>
          )}
        </div>

        <div class="flex justify-between">
          <div class="flex flex-col gap-1 py-2 px-2 md:px-5 w-[70%] md:w-full">
            <Text
              class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[#5D7661] font-medium text-[12px] md:text-[20px]"
              variant="caption"
            >
              {name}
            </Text>
            <div class="flex items-center gap-2 pt-2">
              <Text
                class="line-through text-[#5D7661] font-bold text-[12px] md:text-[20px]"
                variant="list-price"
                tone="subdued"
              >
                {formatPrice(listPrice, offers!.priceCurrency!)}
              </Text>
              <Text
                variant="caption"
                class="text-[#D8564D] font-bold text-[12px] md:text-[20px]"
              >
                {formatPrice(price, offers!.priceCurrency!)}
              </Text>
            </div>
          </div>
          {seller && (
            <AddToCartButton skuId={productID} sellerId={seller} icon={true} />
          )}
        </div>
      </a>
    </div>
  );
}

export default ProductCard;
