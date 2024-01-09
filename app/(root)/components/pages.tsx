"use client";

import { useEffect, useState } from "react";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"


interface PagesProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;

}

const Pages: React.FC<PagesProps> = ({
    totalItems,
    itemsPerPage,
    currentPage,
    setCurrentPage
}) => {
    const [isMounted, setIsMounted] = useState(false);
    const [pages, setPages] = useState<number[]>([]);
    const [ellipsePage, setEllipsePage] = useState(6);
    const [previousEllipsePage, setPreviousEllipsePage] = useState(0);

    useEffect(() => {
        for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
            pages.push(i);
        }
    }, [])

    useEffect(() => {
        setIsMounted(true);

    }, [])

    if (!isMounted) {
        return null;
    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handlenext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (


        <>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious onClick={handlePrevious} className="cursor-pointer" />
                    </PaginationItem>
                    
                    <PaginationItem>
                        <PaginationNext onClick={handlenext} className="cursor-pointer" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    );
}

export default Pages;