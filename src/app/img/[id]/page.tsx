export default async function PhotoModal({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id: photoId } = await params;
  return <div>{photoId}</div>;
}
