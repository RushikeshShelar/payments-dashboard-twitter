import { IndianRupeeIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { OrderClient } from "./components/client";




const DashboardPage = ({
}) => {
    const data = [ {
        id: "#1432",
        date: "12/12/2021",
        amount: "23,000",
        fees: "100"
    }]

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
                <OrderClient orders={data} />
            </div>
        </div>
    )
}

export default DashboardPage;