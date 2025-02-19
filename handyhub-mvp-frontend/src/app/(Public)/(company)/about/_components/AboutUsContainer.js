"use client";

import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";
import EmptyContainer from "@/components/EmptyContainer/EmptyContainer";
import { useGetContentQuery } from "@/redux/api/contentApi";

export default function AboutUsContainer() {
  const { data: aboutUsRes } = useGetContentQuery();
  const aboutUs =
    aboutUsRes?.data?.data?.length > 0
      ? aboutUsRes?.data?.data[0]?.aboutUs
      : "";

  return aboutUs ? <ContentWrapper content={aboutUs} /> : <EmptyContainer />;
}
