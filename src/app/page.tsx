import Image from "next/image";
import Link from "next/link";
import { mock } from "node:test";

const mockUrls = [
  "https://utfs.io/f/YihdkJ4pq7Qw1Nt6HeiGCaerv5zbK9mPgtc3IpMxdB6sTfDy",
  "https://utfs.io/f/YihdkJ4pq7Qw26PNLrWAqgmV1kswJ5pSOM9bxcRBfPHrlZtj",
  "https://utfs.io/f/YihdkJ4pq7QwsFoQ06aO3dtiSbYD4JqnzhXBF2Prj8EZ1a7w",
  "https://utfs.io/f/YihdkJ4pq7QwRVxUtvhhec7uUdPJkH0WtKzifLGZErgslVAC",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="h-48 w-48">
            <img
              src={image.url}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      Hello (Gallery in progress)
    </main>
  );
}
