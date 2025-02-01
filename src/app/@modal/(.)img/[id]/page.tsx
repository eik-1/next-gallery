import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id: photoId } = await params;
  const idAsNum = Number(photoId);
  const image = await getImage(idAsNum);
  return (
    <div className="flex justify-center">
      <Image src={image.url} alt={image.name} width={300} height={300} />
    </div>
  );
}
