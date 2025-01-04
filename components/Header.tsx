"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaBlogger } from "react-icons/fa";

export const Header = () => {

    const pathname = usePathname();

    const navlinks = [
        { href: "/", label: "Home"},
        { href: '/posts', label: 'Posts'},
        { href: '/create', label: 'Create'}
    ]
  return (
    <header className='flex justify-between items-center px-12 py-8 border border-neutral-200'>
        <FaBlogger size={52} />
        <div className='flex gap-8 font-semibold list-none'>
            {navlinks.map((link) => <li className={`${pathname === link.href ? "text-black" : "text-neutral-500"}`} key={link.href}><Link href={link.href}>{link.label}</Link></li>)}
        </div>
    </header>
  )
}
