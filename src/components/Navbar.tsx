"use client";

import { useState, useEffect } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [search, setSearch] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      window.location.href = `/?search=${search}#koleksi`;
    }
  };

  return (
    <nav
      className={`sticky w-full z-40 top-0 transition-all duration-300 border-b border-skena-border ${
        isScrolled ? "bg-skena-dark" : "bg-skena-dark/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <a href="/" className="font-display text-2xl font-bold tracking-tighter text-skena-light">
              TRIFTGOOD<span className="text-skena-accent">_</span>CO
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="/" className="text-sm font-display font-bold uppercase tracking-wide text-skena-light hover:text-skena-accent transition-colors">Home</a>
            <a href="#kategori" className="text-sm font-display font-bold uppercase tracking-wide text-skena-muted hover:text-skena-accent transition-colors">Katalog</a>
            <a href="#koleksi" className="text-sm font-display font-bold uppercase tracking-wide text-skena-muted hover:text-skena-accent transition-colors">Drop Terbaru</a>
            <a href="#tentang" className="text-sm font-display font-bold uppercase tracking-wide text-skena-muted hover:text-skena-accent transition-colors">Manifesto</a>
          </div>

          {/* Icons & Search */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative flex items-center group">
              <input
                type="text"
                placeholder="Cari Barang..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-skena-card border border-skena-border px-4 py-2 text-xs font-bold uppercase tracking-widest outline-none focus:border-skena-accent transition-all w-0 group-hover:w-48 focus:w-48"
              />
              <button type="submit" className="p-2 text-skena-light hover:text-skena-accent transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-skena-light">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-skena-light hover:text-skena-accent focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="md:hidden bg-skena-card border-b border-skena-border p-4">
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Cari Barang..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-skena-dark border border-skena-border px-4 py-3 text-xs font-bold uppercase tracking-widest outline-none focus:border-skena-accent"
              autoFocus
            />
            <button type="submit" className="bg-skena-accent text-skena-dark p-3">
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-skena-dark border-b border-skena-border absolute w-full left-0 top-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#beranda" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-sm font-display font-bold uppercase tracking-wide text-skena-accent bg-skena-card border border-skena-border">Home</a>
            <a href="#kategori" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-sm font-display font-bold uppercase tracking-wide text-skena-light hover:bg-skena-card border border-transparent">Katalog</a>
            <a href="#koleksi" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-sm font-display font-bold uppercase tracking-wide text-skena-light hover:bg-skena-card border border-transparent">Drop Terbaru</a>
            <a href="#tentang" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-sm font-display font-bold uppercase tracking-wide text-skena-light hover:bg-skena-card border border-transparent">Manifesto</a>
          </div>
        </div>
      )}
    </nav>
  );
}
