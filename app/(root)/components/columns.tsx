import { ColumnDef } from "@tanstack/react-table"


export type Order = {
    id: string;
    date: string;
    amount: string;
    fees: string;
}

export const columns: ColumnDef<Order>[] = [
    {
        accessorKey: "id",
        header: "Order ID",
      },
      {
        accessorKey: "date",
        header: "Order Date",
      },
      {
        accessorKey: "amount",
        header: "Order Amount",
      },
      {
        accessorKey: "fees",
        header: "Transaction Fees",
      },
]