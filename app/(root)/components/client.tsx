"use client";

import { Order, columns } from "./columns";
import { DataTable } from "./data-table";

interface OrdersTableProps {
    orders: Order[];
}

export const OrderClient: React.FC<OrdersTableProps> = ({
    orders
}) => {
    return (
    <DataTable columns={columns} data={orders}/>
    );
}