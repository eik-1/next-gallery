import FullPageImageView from "~/components/full-image-page";

export default function PhotoPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id: photoId } = params;
  const idAsNum = Number(photoId);
  return <FullPageImageView id={idAsNum} />;
}
