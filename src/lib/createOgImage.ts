import base64url from "base64url";

import { AuthorResponse } from "../types/author";

type Return = {
  ogImageUrl: string;
};

export const createOgImage = (
  baseImageUrl: string,
  title: string,
  author?: AuthorResponse
): Return => {
  const ogImageUrl = author
    ? `${baseImageUrl}?w=1200&h=1200&border=20,009688&txt64=${base64url(
        "creamstew.dev"
      )}&txt-pad=90&txt-color=00695C&txt-size=24&txt-align=right,bottom&mark64=${base64url(
        `${author.image.url}?w=60&h=60`
      )}&mark-x=870&mark-y=500&blend64=${base64url(
        `https://assets.imgix.net/~text?txtsize=48&txt-color=009688&w=1040&txt-align=middle&txtfont=Hiragino%20Sans%20W6&txt-track=2&txt64=${base64url(
          title
        )}`
      )}&blend-mode=normal&blend-align=top,middle&blend-x=80&blend-y=180`
    : `${baseImageUrl}`;

  return { ogImageUrl };
};
