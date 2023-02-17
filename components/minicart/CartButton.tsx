import { useCart } from "../../sdk/cart/useCart.ts";
import { useUI } from "../../sdk/useUI.ts";
import IconBucket from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/bucket.tsx";

function CartButton() {
  const { displayCart } = useUI();
  const { loading, cart } = useCart();
  const totalItems = cart.value?.items.length || null;

  return (
    <button
      class="flex items-center justify-center relative h-12 w-12"
      aria-label="open cart"
      onClick={() => {
        displayCart.value = true;
      }}
      disabled={loading.value}
    >
      <IconBucket class="w-6 h-6 text-white" />
      {totalItems && (
        <div class="absolute text-[10px] right-0 top-2 rounded-full bg-[#ECCDA5] text-white w-4 h-4 flex items-center justify-center text-black font-bold">
          {totalItems}
        </div>
      )}
    </button>
  );
}

export default CartButton;
