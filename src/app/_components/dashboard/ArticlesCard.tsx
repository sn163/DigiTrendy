import { Articles } from "@/app/_utils/types";
import Image from "next/image";
import { formatDate } from "@/app/_utils/utils";

type ArticleCardProps = {
  article: Articles;
};

type ImageCardProps = {
  imgUrl: string | null;
};

const ImageCard = ({ imgUrl }: ImageCardProps) => {
  return (
    <div
      className="overflow-hidden"
      style={{ width: 300, height: 200, overflow: "hidden" }}
    >
      <Image
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={imgUrl ?? ""}
        alt="article image"
      />
    </div>
  );
};

export const ArticlesCard = ({ article }: ArticleCardProps) => {
  if (!article) return <div>No Data Found</div>;

  const { url, urlToImage, title, publishedAt, source } = article;

  return (
    <a
      className="flex h-full flex-col items-center justify-between border-2 p-2 shadow-lg"
      style={{ width: 350, maxHeight: 600 }}
      href={url ?? ""}
    >
      <div className="m-4 flex flex-col items-center space-y-3 text-wrap">
        <ImageCard imgUrl={urlToImage} />
        <h3 className="font-main text-lg font-bold text-black">
          {title ?? ""}
        </h3>
      </div>
      <div className="mr-auto flex flex-col items-start px-4">
        <span className="font-main text-md text-black">{source}</span>
        <span className="font-main text-sm tracking-wider text-black">
          {formatDate(publishedAt ?? "")}
        </span>
      </div>
    </a>
  );
};
