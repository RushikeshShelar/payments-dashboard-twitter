"use client";

import Header from "@/components/main/header";
import MainPage from "@/components/main/main";
import { transactions } from "@/lib/constants";
import { useEffect, useState } from "react";

const RootPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentItems = transactions.slice(firstItemIndex, lastItemIndex);

    useEffect(() => {
        setIsMounted(true);

    }, [])

    if (!isMounted) {
        return null;
    }
    return (
        <div className="">
            <Header />
            <MainPage totalItems={transactions.length} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>

    );
}

export default RootPage;


