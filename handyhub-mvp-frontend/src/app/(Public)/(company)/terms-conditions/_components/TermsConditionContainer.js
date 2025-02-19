"use client";

import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";
import EmptyContainer from "@/components/EmptyContainer/EmptyContainer";
import { useGetContentQuery } from "@/redux/api/contentApi";

export default function TermsConditionContainer() {
  const { data: termsRes } = useGetContentQuery();
  const termsConditions =
    termsRes?.data?.data?.length > 0
      ? termsRes?.data?.data[0]?.termsAndConditions
      : "";

  return termsConditions ? (
    <ContentWrapper content={termsConditions} />
  ) : (
    <EmptyContainer />
  );
}
