"use client";

import { Breadcrumb, 
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { MobileSidebar } from './Sidebar';

function BreadcrumbHeader() {
    const [pathName, setPathName] = useState<string | null>(null);
    const clientPathName = usePathname(); // Этот хук доступен только на клиенте

    useEffect(() => {
        setPathName(clientPathName); // Устанавливаем путь после монтирования
    }, [clientPathName]);

    if (!pathName) return null; // Пока путь не загружен, рендерим null

    const paths = pathName === "/" ? [""] : pathName.split("/");

    return (
        <div className="flex items-center flex-start">
            <MobileSidebar />
            <Breadcrumb>    
                <BreadcrumbList>
                    {paths.map((path, index) => (
                        <React.Fragment key={index}>
                            <BreadcrumbItem>
                                <BreadcrumbLink className="capitalize" href={`/${path}`}>
                                    {path === "" ? "home" : path}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            {index !== paths.length - 1 && <BreadcrumbSeparator />}
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}

export default BreadcrumbHeader;