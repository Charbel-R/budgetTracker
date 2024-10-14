"use client";

import { DateToUTCDate } from "@/lib/helpers";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface TransactionTableProps {
  from: Date;
  to: Date;
}
export default function TransactionTable({ from, to }: TransactionTableProps) {
  const history = useQuery({
    queryKey: ["transactions", "history", from, to],
    queryFn: () =>
      fetch(
        `/api/transactions-history?from=${DateToUTCDate(
          from
        )}&to=${DateToUTCDate(to)}`
      ).then((res) => res.json()),
  });

  return <div>TransactionTable</div>;
}
