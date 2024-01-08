import { ColumnDef } from "@tanstack/react-table"

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
]

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "OrderId",
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