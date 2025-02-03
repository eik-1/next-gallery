import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  const client = await clerkClient();
  const uploaderInfo = await client.users.getUser(image.userId);

  return (
    <div className="flex h-screen w-screen">
      <div className="flex w-[70%] flex-shrink items-center justify-center">
        <img
          src={image.url}
          alt={image.name}
          className="h-fit max-h-full max-w-full flex-shrink object-contain"
        />
      </div>
      <div className="flex flex-shrink-0 flex-grow flex-col border-l">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>
        <div className="flex flex-col p-2">
          <span>Uploaded By:</span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created On:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
