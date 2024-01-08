import { HelpCircle, MessageSquareMoreIcon } from "lucide-react";

import Search from "@/components/ui/search";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4 border-b">
            <div className="flex justify-between w-[20%]">
                <div>
                    Payments
                </div>
                <div className="flex">
                    <HelpCircle /> <p>How it works</p>
                </div>
            </div>
            <Search />

            <div className="flex w-[7%] justify-between">
                <div className="bg-gray-600 rounded-full p-2 h-10 w-10 relative overflow-hidden">
                    <MessageSquareMoreIcon className="absolute test-sm h-6 w-6" />
                </div>
                <div className="bg-gray-600 rounded-full p-2 h-10 w-10 relative overflow-hidden">
                    <MessageSquareMoreIcon className="absolute test-sm h-6 w-6" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;