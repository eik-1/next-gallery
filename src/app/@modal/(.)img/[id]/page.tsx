import FullPageImageView from "~/components/full-image-page";
import { Modal } from "./modal";

export default function PhotoModal({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id: photoId } = params;
  const idAsNum = Number(photoId);
  return (
    <Modal>
      <FullPageImageView id={idAsNum} />
    </Modal>
  );
}
