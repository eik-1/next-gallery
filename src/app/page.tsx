import { db } from "~/server/db";

export const revalidate = 0;

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <div key={image.id + "-" + index} className="flex h-48 w-48 flex-col">
            <img
              src={image.url}
              alt="image"
              className="h-full w-full object-cover"
            />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
