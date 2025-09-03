"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function AnalyticsListener() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (!pathname) return;

        const url = pathname + (searchParams.toString() ? `?${searchParams}` : "");
        window.gtag?.('config', 'G-SR0XTSY1B3', {
            page_path: url,
        });
    }, [pathname, searchParams]);

    return null;
}
