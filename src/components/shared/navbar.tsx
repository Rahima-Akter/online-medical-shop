"use client";

import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar({ isLoggedIn = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#146976]/20 bg-[#1E3F45] px-4 md:px-10 lg:px-20 py-4">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 text-white">
          <div className="w-8 h-8 bg-[#EBBA92] rounded-lg flex items-center justify-center text-[#1E3F45]">
            <MedicalServicesIcon />
          </div>
          <h2 className="text-xl font-black tracking-tight">MediStore</h2>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden relative">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <MenuIcon />
          </button>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-64 bg-[#1E3F45] border-2 border-[#EBBA92]/20 rounded-lg flex flex-col gap-3 p-4 z-50">
              <Link className={`text-sm font-semibold hover:text-[#EBBA92] transition-colors ${pathname === '/home' ? 'text-[#EBBA92] underline' : 'text-white'}`} href="/home">Home</Link>
              <Link className={`text-sm font-semibold hover:text-[#EBBA92] transition-colors ${pathname === '/shop' ? 'text-[#EBBA92] underline' : 'text-white'}`} href="/shop">Shop</Link>

              {/* Favorite */}
              <button className="flex items-center justify-center w-full h-10 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">
                <FavoriteIcon />
              </button>

              {/* Cart */}
              <button className="relative flex items-center justify-center w-full h-10 rounded-lg bg-[#146976] text-white font-bold text-sm gap-1 hover:bg-[#146976]/90 transition-colors">
                <ShoppingCartIcon className="text-sm" />
                <span>Cart</span>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#EBBA92] text-[#1E3F45] text-[10px] flex items-center justify-center rounded-full font-black border-2 border-[#1E3F45]">2</span>
              </button>

              {/* Auth Buttons */}
              {isLoggedIn ? (
                <Link href="/dashboard" className="flex items-center justify-center w-full h-10 rounded-lg bg-white/10 text-white font-bold text-sm hover:bg-white/20 transition-colors border border-white/10 gap-1">
                  <DashboardIcon className="text-sm" />
                  <span>Dashboard</span>
                </Link>
              ) : (
                <>
                  <Link href="/login" className="flex items-center justify-center w-full h-10 rounded-lg bg-white/10 text-white font-bold text-sm hover:bg-white/20 transition-colors border border-white/10 gap-1">
                    <LoginIcon className="text-sm" />
                    <span>Login</span>
                  </Link>
                  <Link href="/register" className="flex items-center justify-center w-full h-10 rounded-lg bg-[#EBBA92] text-[#1E3F45] font-bold text-sm hover:brightness-110 transition-colors gap-1">
                    <AppRegistrationIcon className="text-sm" />
                    <span>Register</span>
                  </Link>
                </>
              )}
            </div>
          )}
        </div>

        {/* Desktop Navigation & Actions */}
        <div className="hidden md:flex items-center gap-8">
          {/* Desktop Navigation */}
          <nav className="flex items-center gap-8">
            <Link className={`text-sm font-semibold hover:text-[#EBBA92] transition-colors ${pathname === '/home' ? 'text-[#EBBA92] underline' : 'text-white'}`} href="/">Home</Link>
            <Link className={`text-sm font-semibold hover:text-[#EBBA92] transition-colors ${pathname === '/shop' ? 'text-[#EBBA92] underline' : 'text-white'}`} href="/shop">Shop</Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Favorite */}
            <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">
              <FavoriteIcon />
            </button>

            {/* Cart */}
            <button className="relative flex items-center justify-center px-3 h-10 rounded-lg bg-[#146976] text-white font-bold text-sm gap-1 hover:bg-[#146976]/90 transition-colors">
              <ShoppingCartIcon className="text-sm" />
              <span className="hidden sm:inline">Cart</span>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#EBBA92] text-[#1E3F45] text-[10px] flex items-center justify-center rounded-full font-black border-2 border-[#1E3F45]">2</span>
            </button>

            {/* Auth Buttons */}
            {isLoggedIn ? (
              <Link href="/dashboard" className="flex items-center justify-center px-3 h-10 rounded-lg bg-white/10 text-white font-bold text-sm hover:bg-white/20 transition-colors border border-white/10 gap-1">
                <DashboardIcon className="text-sm" />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
            ) : (
              <>
                <Link href="/login" className="flex items-center justify-center px-3 h-10 rounded-lg bg-white/10 text-white font-bold text-sm hover:bg-white/20 transition-colors border border-white/10 gap-1">
                  <LoginIcon className="text-sm" />
                  <span className="hidden sm:inline">Login</span>
                </Link>
                <Link href="/register" className="flex items-center justify-center px-3 h-10 rounded-lg bg-[#EBBA92] text-[#1E3F45] font-bold text-sm hover:brightness-110 transition-colors gap-1">
                  <AppRegistrationIcon className="text-sm" />
                  <span className="hidden sm:inline">Register</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
