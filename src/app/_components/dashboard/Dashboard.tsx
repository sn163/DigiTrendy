"use client";

import { Articles, ArticlesQuery } from "@/app/_utils/types";
import { useState, useEffect } from "react";
import uuid from "react-uuid";
import { ArticlesCard } from "./ArticlesCard";

const mapArticlesQueryToArticles = (articles: ArticlesQuery[]) => {
  return articles.map((art) => {
    const { author, title, description, url, urlToImage, publishedAt, source } =
      art;
    return {
      source: source.name,
      author: author,
      title: title,
      description: description,
      url: url,
      urlToImage: urlToImage,
      publishedAt: publishedAt,
    };
  });
};

export default function Dashboard() {
  const [articlesList, setArticlesList] = useState<Articles[]>();
  // const [nextPageUrl, setNextPageUrl] = useState();
  // const [prevPageUrl, setPrevPageUrl] = useState();
  // const [allArticlesList, setAllArticlesList] = useState<Articles[]>();
  // const [value, setValue] = useState("");
  //const [loading, setLoading] = useState(true);

  const id = uuid();
  useEffect(() => {
    //setLoading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.articles);
        const mappedArticles = mapArticlesQueryToArticles(data.articles);
        const filteredArticles = mappedArticles.filter((art) =>
          Object.values(art).every((val) => val !== null),
        );

        setArticlesList(filteredArticles);
      });
  }, []);

  console.log(articlesList);

  return (
    <ul className="m-auto grid grid-cols-4 gap-6 px-20">
      {articlesList?.map((art, idx) => {
        return (
          <li key={`${id}-${idx}`}>
            <ArticlesCard article={art} />
          </li>
        );
      })}
    </ul>
  );
}
