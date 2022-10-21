/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import IconPlay from "public/images/btn_play.svg";

export default function RenderItem({ item }) {
  return (
    <div className="w-1/4 px-4">
      <div className="item relative">
        <figure className="item-image">
          <IconPlay></IconPlay>
          <img
            className="w-full"
            src={item?.thumbnail ?? ""}
            alt={item?.name ?? "Some Information"}
          />
        </figure>
        <div className="item-meta">
          <h4 className="text-lg text-gray-900">
            {item?.name ?? "Course Name"}
          </h4>
          <h5 className="text-lg text-gray-600">
            {item?.level ?? "Course Level"}
          </h5>
        </div>
        <Link href="/courses/[slug]" as={`/courses/${item.id}`}>
          <a className="link-wrapped"></a>
        </Link>
      </div>
    </div>
  );
}
