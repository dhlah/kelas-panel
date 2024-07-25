export async function Fetcher(url, isStatic) {
  const res = await fetch(process.env.API_URL + url, {
    ...(isStatic && { cache: "default" }),
    ...(isStatic
      ? {}
      : {
          next: {
            revalidate: 6400,
          },
        }),
  });
  if (res.ok) {
    return res.json();
  }
  return;
}
