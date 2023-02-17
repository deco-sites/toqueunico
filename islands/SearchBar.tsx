import { useEffect, useState } from "preact/hooks";
import type { JSX } from "preact";
import IconSearch from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/search.tsx";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const onSearch = (e: JSX.TargetedEvent<HTMLFormElement>) => {
    e.preventDefault();

    window.location.href = `/search?ft=${query}`;
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQuery(params.get("q") ?? "");
  }, []);

  return (
    <form onSubmit={onSearch} class="relative">
      <label class="hidden" for="search">
        Busca
      </label>
      <input
        id="search"
        class="w-full h-[30px] border rounded h-9 rounded-[50px] pl-[32px] placeholder-[#C1C1C1] text-[10px]"
        placeholder="Busque por produtos"
        value={query}
        onKeyUp={(event) => {
          setQuery(event.currentTarget.value);
        }}
      />
      <div class="absolute left-3 top-2.5">
        <IconSearch class="w-4 h-4" />
      </div>
    </form>
  );
}
