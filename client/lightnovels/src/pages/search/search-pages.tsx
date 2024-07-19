import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SearchPage() {
  const [novelData, setNovelData] = useState<
    Array<{ id: string; image: string; title: string; url: string }>
  >([]);

  console.log(novelData);
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const search = formData.get("search");
    if (search) {
      //change link once api is available online
      const response = await fetch(
        `http://localhost:3000/api/light-novels/search/${search}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log("data: ", data);

        if (data?.result1?.results.length) {
          setNovelData(data?.result1?.results);
        }
      }
    }
  }

  return (
    <div className="flex flex-col">
      <h1>Search Page</h1>

      <br />
      <form onSubmit={onSubmit}>
        <input name="search" placeholder="search novel" />
        <Button type="submit">Search Novel</Button>
      </form>

      <div>{novelData && JSON.stringify(novelData)}</div>
    </div>
  );
}
