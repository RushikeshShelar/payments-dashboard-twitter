import React, { useState, useEffect } from 'react';
import { Card,CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { OrderClient } from '@/app/(root)/components/client';
import Pages from '@/app/(root)/components/pages';
import { IndianRupeeIcon } from 'lucide-react';
import { Heading } from './heading';
import { transactions } from '@/lib/constants';

interface MainPageProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;

}


const MainPage: React.FC<MainPageProps> = ({
    totalItems,
    itemsPerPage,
    currentPage,
    setCurrentPage
}) => {
    
    const [isMounted, setIsMounted] = useState(false);
    const [pages, setPages] = useState<number[]>([]);

    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentItems = transactions.slice(firstItemIndex, lastItemIndex);

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



    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <Heading title="Overview" />
                <div className="grid gap-4 grid-cols-2">
                    <Card className="rounded-lg border-none shadow-md">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4" >
                            <CardTitle className="text-lg font-light text-black">
                                Online Orders
                            </CardTitle>

                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl">
                                234
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="rounded-lg border-none shadow-md">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4" >
                            <CardTitle className="text-lg font-light text-black">
                                Amount Received
                            </CardTitle>

                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl flex items-center">
                                <IndianRupeeIcon /> 23,92,312.19
                            </div>
                        </CardContent>
                    </Card>

                </div>
                <Heading title="Transactions | This Month" />

                <OrderClient orders={currentItems} />

                <Pages
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    
                />
                
            </div>
        </div>
    );
}

export default MainPage;

// Copy
// display: flex;
// width: 1152px;
// flex-direction: column;
// align-items: flex-start;
// gap: 32px;