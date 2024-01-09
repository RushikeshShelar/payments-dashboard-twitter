import { cn } from "@/lib/utils";
import { HomeIcon,  LayoutGrid, MessageSquare, Settings, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Routes = () => {

    const routes = [
        {
            label: "Home",
            icon: HomeIcon,
            href: "/dashboard",
            src: "/home.png"
        },
        {
            label: "Orders",
            icon: LayoutGrid,
            href: "/orders",
            src: "/list.png"

        },
        {
            label: "Products",
            icon: LayoutGrid,
            href: "/Products",
            src: "/product.png"

        },
        {
            label: "Delivery",
            icon: Truck,
            href: "/Delivery",
            src: "/delivery.png"

        },
        {
            label: "Marketing",
            icon: MessageSquare,
            href: "/marketing",
            src: "/mareketing.png"

        },
        {
            label: "Analytics",
            icon: Settings,
            href: "/analytics",
            src: "/analytics.png"
        },
        {
            label: "Payments",
            icon: Settings,
            href: "/",
            src: "/payement.png",
            active: true,
        },
        {
            label: "Tools",
            icon: Settings,
            href: "/tools",
            src: "/tool.png"
        },
        {
            label: "Discounts",
            icon: Settings,
            href: "/discounts",
            src: "/discount.png"
        },
        {
            label: "Audience",
            icon: Settings,
            href: "/audience",
            src: "/audience.png"
        },
        {
            label: "Appearance",
            icon: Settings,
            href: "/appearance",
            src: "/appeareance.png"
        },
        {
            label: "Plugins",
            icon: Settings,
            href: "/plugins",
            src: "/plugins.png"
        },
    ]
    return (
        <div className="gap-[4px] min-w-[208px]">
            {routes.map((route) => (
                <Link
                key={route.href}
                href={route.href}
                className={cn(
                    "w-[208px] h-[36px] rounded-[4px] py-[8px] px-[16px] gap-[12px] flex items-center text-white",
                    route.active && "bg-[#ffffff]/10",
                )}
                >
                    <Image
                        width={20}
                        height={20}
                        src={`/icons${route.src}`}
                        alt={route.label}
                    />
                    <span className="w-[40px] h-[20px] opacity-80 font-medium leading-[20px] text-[14px]">{route.label}</span>
                </Link>
            ))}
        </div>
    );
}

export default Routes;