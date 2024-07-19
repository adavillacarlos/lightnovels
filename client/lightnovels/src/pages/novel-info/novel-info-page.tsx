import { useEffect, useState } from "react";

export default function NovelInfoPage() {
  const [dataObject, setDataObject] = useState<>();
  useEffect(() => {
    const abortController = new AbortController();
    console.count("mount");
    async function fetchData() {
      try {
        const response = await fetch(
          "http://localhost:3000/api/light-novels/search/overload",
          { signal: abortController.signal }
        );
        const data = await response.json();
        setDataObject(data);
      } catch (error) {
        console.log("err", error); 
      }
    }
    fetchData();
    return () => {
      console.count("unmount");
      abortController.abort("cleanup");
    };
  }, []);

  return (
    <div>
      <h1>Novel Info Page</h1>
      <div>{dataObject && JSON.stringify(dataObject)}</div>
    </div>
  );
}
