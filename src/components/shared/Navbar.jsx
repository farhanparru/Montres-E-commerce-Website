import React, { useState, useEffect } from "react";
import {
  FaClipboardList,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
  FaThLarge,
  FaSearch,
  FaChevronDown,
  FaPhone,
  FaGlobe,
  FaCommentAlt,
} from "react-icons/fa";
import { FaComments, FaEnvelope, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/montreslogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar - SEO optimized with structured data */}
      <div
        className="bg-[#1e518e] text-white text-sm py-2 px-4 text-center"
        itemScope
        itemType="https://schema.org/Offer"
      >
        <span itemProp="description">
          Free shipping on orders over AED 500 | Dubai's premier watch
          destination
        </span>
      </div>

      {/* Main Navigation - Semantic HTML with ARIA labels */}
      <header
        className={`w-full bg-white sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-lg" : "shadow-md"
        }`}
        role="banner"
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          {/* Logo with proper alt text and structured data */}
          <Link
            to="/"
            className="flex items-center space-x-2"
            aria-label="Montres Home"
          >
            <img
              src={logo}
              alt="Montres - Luxury Watches Dubai"
              className="h-12 w-auto object-contain"
              itemProp="logo"
            />
            {isClient && (
              <meta itemProp="url" content={window.location.origin} />
            )}
          </Link>

          {/* Desktop Menu */}
          <nav
            className="hidden md:flex items-center gap-6 text-gray-700"
            aria-label="Main navigation"
          >
            <NavItem icon={<FaClipboardList />} label="Orders" to="/orders" />

            {/* Enhanced Cart Icon with Badge */}
            <div className="relative">
              <Link
                to="/cart"
                className="flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f1e5ac] text-gray-800 hover:from-[#c19b2e] hover:to-[#e0d294] transition-all shadow-md hover:shadow-lg"
                aria-label="Shopping cart"
              >
                <FaShoppingCart className="text-2xl" />
              </Link>
              {/* Cart badge - replace '3' with your actual cart item count */}

              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-md border-2 border-white">
                {3}
              </span>
            </div>

            <Link
              to="/register"
              className="ml-2 bg-gradient-to-r from-[#1e518e] to-[#0061b0ee] hover:from-[#1a457a] hover:to-[#00559f] text-white px-6 py-2.5 rounded-full flex items-center gap-2 text-base transition-all shadow-md hover:shadow-lg"
              aria-label="Sign in or register"
            >
              <FaUser className="text-sm" /> Sign In
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/cart" className="relative" aria-label="Shopping cart">
              <FaShoppingCart size={20} className="text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-[#1e518e] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav
            className="md:hidden bg-white px-4 py-4 border-t border-gray-200 space-y-4 animate-slideDown"
            aria-label="Mobile navigation"
          >
            <MobileNavItem
              icon={<FaClipboardList />}
              label="My Orders"
              to="/orders"
            />
            <MobileNavItem
              icon={<FaShoppingCart />}
              label="Shopping Cart"
              to="/cart"
              badge={3}
            />

            {/* Mobile Help Dropdown */}
            <MobileDropdown
              icon={<FaPhone className="text-[#1e518e]" />}
              label="Help & Support"
              items={[
                {
                  icon: <FaPhone className="text-[#1e518e]" />,
                  label: "Call Support",
                  sublabel: "+971 1234 5678",
                  to: "tel:+97112345678",
                  ariaLabel: "Call customer support",
                },
                {
                  icon: <FaEnvelope className="text-[#1e518e]" />,
                  label: "Contact Form",
                  to: "/contact",
                  ariaLabel: "Contact form",
                },
                {
                  icon: <FaComments className="text-[#1e518e]" />,
                  label: "Live Chat",
                  sublabel: "24/7 Available",
                  to: "/live-chat",
                  ariaLabel: "Start live chat",
                },
                {
                  icon: <FaQuestionCircle className="text-[#1e518e]" />,
                  label: "FAQs",
                  to: "/faq",
                  ariaLabel: "Frequently asked questions",
                },
              ]}
            />

            {/* Mobile Language Dropdown */}
            <MobileDropdown
              icon={<FaGlobe className="text-[#1e518e]" />}
              label="Language"
              items={[
                {
                  icon: "🇬🇧",
                  label: "English",
                  to: "#",
                  onClick: () => console.log("English selected"),
                  ariaLabel: "Switch to English",
                },
                {
                  icon: "🇦🇪",
                  label: "العربية",
                  to: "#",
                  onClick: () => console.log("Arabic selected"),
                  ariaLabel: "Switch to Arabic",
                },
                {
                  icon: "🇮🇳",
                  label: "हिन्दी",
                  to: "#",
                  onClick: () => console.log("Hindi selected"),
                  ariaLabel: "Switch to Hindi",
                },
              ]}
            />

            <Link
              to="/signin"
              className="block bg-gradient-to-r from-[#1e518e] to-[#0061b0ee] hover:from-[#1a457a] hover:to-[#00559f] text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md"
              aria-label="Sign in or register"
            >
              <FaUser /> Sign In / Register
            </Link>
          </nav>
        )}
      </header>

      {/* Sub Navigation */}
      <SubNavbar />
    </>
  );
};

// Mobile Dropdown Component
const MobileDropdown = ({ icon, label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3 px-2 rounded-lg hover:bg-gray-50 transition-all"
        aria-expanded={isOpen}
        aria-controls={`mobile-dropdown-${label
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
        aria-label={`${label} dropdown`}
      >
        <div className="flex items-center gap-4">
          <div className="text-xl">{icon}</div>
          <span className="text-sm font-medium text-gray-700">{label}</span>
        </div>
        <FaChevronDown
          className={`text-xs text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          id={`mobile-dropdown-${label.replace(/\s+/g, "-").toLowerCase()}`}
          className="ml-12 mt-1 space-y-2 border-l-2 border-gray-100 pl-4"
          role="menu"
        >
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              onClick={(e) => {
                if (item.onClick) {
                  e.preventDefault();
                  item.onClick();
                }
              }}
              className="flex items-center gap-4 py-2 px-2 rounded-lg hover:bg-gray-50 transition-all"
              role="menuitem"
              aria-label={item.ariaLabel || item.label}
            >
              <div className="text-lg w-6 text-center">{item.icon}</div>
              <div>
                <div className="text-sm font-medium text-gray-700">
                  {item.label}
                </div>
                {item.sublabel && (
                  <div className="text-xs text-gray-500">{item.sublabel}</div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// Desktop nav item with proper accessibility
const NavItem = ({ icon, label, to, badge }) => (
  <Link
    to={to}
    className="relative flex flex-col items-center hover:text-[#1e518e] transition-all group"
    aria-label={label}
  >
    <div className="text-xl relative">
      {icon}
      {badge && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {badge}
        </span>
      )}
    </div>
    <span className="text-xs font-medium mt-1 group-hover:font-semibold">
      {label}
    </span>
  </Link>
);

// Mobile nav item with proper accessibility
const MobileNavItem = ({ icon, label, to, badge }) => (
  <Link
    to={to}
    className="flex items-center gap-4 hover:text-[#1e518e] transition-all py-3 px-2 rounded-lg hover:bg-gray-50"
    aria-label={label}
  >
    <div className="text-xl relative">
      {icon}
      {badge && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {badge}
        </span>
      )}
    </div>
    <span className="text-sm font-medium">{label}</span>
  </Link>
);

// Enhanced SubNavbar Component with SEO optimizations
const SubNavbar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Sample categories data with SEO-friendly URLs
  const categories = [
    { name: "Luxury Watches", icon: "⌚", path: "/luxury-watches" },
    { name: "Men's Collection", icon: "👔", path: "/mens-watches" },
    { name: "Women's Collection", icon: "👗", path: "/womens-watches" },
    { name: "Smart Watches", icon: "📱", path: "/smart-watches" },
    { name: "Watch Accessories", icon: "⏱️", path: "/watch-accessories" },
    { name: "Sale & Offers", icon: "🛍️", path: "/sale-offers", sale: true },
  ];

  // Popular search suggestions
  const popularSearches = [
    { term: "Rolex watches", path: "/search?q=rolex" },
    { term: "Omega collections", path: "/search?q=omega" },
    { term: "Smart watches", path: "/search?q=smart+watches" },
    { term: "Luxury watches for men", path: "/search?q=luxury+watches+men" },
    { term: "Diamond watches", path: "/search?q=diamond+watches" },
  ];

  return (
    <div className="w-full bg-[#f8f9fa] border-b border-gray-200 sticky top-20 z-40">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Categories Dropdown - Enhanced with ARIA */}
        <div className="relative w-full md:w-auto">
          <button
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="flex items-center justify-between w-full md:w-56 bg-[#1e518e] text-white px-4 py-3 rounded-lg gap-2 text-sm font-medium shadow-sm hover:bg-[#1a457a] transition-all"
            aria-expanded={isCategoryOpen}
            aria-controls="categories-menu"
            aria-label="Browse categories"
          >
            <div className="flex items-center gap-3">
              <FaThLarge className="text-lg" />
              <span>All Categories</span>
            </div>
            <FaChevronDown
              className={`transition-transform text-sm ${
                isCategoryOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isCategoryOpen && (
            <div
              id="categories-menu"
              className="absolute z-20 mt-2 w-full md:w-72 bg-white shadow-xl rounded-lg py-2 border border-gray-100"
              role="menu"
            >
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  className={`flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 ${
                    category.sale
                      ? "text-red-500 font-semibold"
                      : "text-gray-700"
                  }`}
                  onClick={() => setIsCategoryOpen(false)}
                  role="menuitem"
                  aria-label={category.name}
                >
                  <span className="text-lg" aria-hidden="true">
                    {category.icon}
                  </span>
                  <span>{category.name}</span>
                  {category.sale && (
                    <span className="ml-auto bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                      SALE
                    </span>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Search Input - Enhanced with SEO and accessibility */}
        <div className="relative flex w-full max-w-2xl">
          <div
            className="flex w-full border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#1e518e] focus-within:border-transparent transition-all"
            role="search"
          >
            <select
              className="border-r px-3 text-sm text-gray-700 font-medium outline-none bg-gray-50 hidden md:block w-40"
              aria-label="Search category filter"
            >
              <option value="">Categories</option>
              {categories.map((category) => (
                <option key={category.name} value={category.path}>
                  {category.name}
                </option>
              ))}
            </select>
            <input
              type="search"
              placeholder="Search for luxury watches, brands, or products..."
              className="flex-grow px-4 py-3 outline-none text-sm placeholder-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => {
                setIsCategoryOpen(false);
                setIsSearchFocused(true);
              }}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              aria-label="Search products"
            />
            <button
              className="bg-gradient-to-r from-[#1e518e] to-[#0061b0ee] text-white px-5 flex items-center justify-center gap-2 hover:from-[#1a457a] hover:to-[#00559f] transition-all"
              aria-label="Submit search"
            >
              <FaSearch />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>

          {/* Search suggestions dropdown */}
          {searchQuery && isSearchFocused && (
            <div
              className="absolute top-full mt-1 w-full bg-white shadow-lg rounded-lg py-2 z-30 border border-gray-200"
              role="listbox"
            >
              <div className="px-3 py-2 text-xs text-gray-500 font-medium">
                Popular searches
              </div>
              {popularSearches.map((search) => (
                <Link
                  key={search.term}
                  to={search.path}
                  className="block px-4 py-2 text-sm hover:bg-gray-50"
                  role="option"
                  aria-label={`Search for ${search.term}`}
                >
                  {search.term}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Help & Language - Enhanced with structured data */}
        <div className="flex items-center gap-4 text-sm text-gray-700 whitespace-nowrap">
          {/* Help Dropdown */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setIsHelpOpen(!isHelpOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all group"
              aria-label="Help and support"
              aria-expanded={isHelpOpen}
              aria-controls="help-menu"
            >
              <FaPhone className="text-[#1e518e] text-sm group-hover:text-[#1a457a]" />
              <span className="text-sm font-medium text-gray-700 group-hover:text-[#1e518e]">
                Support
              </span>
              <FaChevronDown
                className={`text-xs text-gray-500 transition-transform ${
                  isHelpOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isHelpOpen && (
              <div
                id="help-menu"
                className="absolute right-0 mt-1 w-52 bg-white shadow-lg rounded-lg py-2 z-20 border border-gray-100"
                role="menu"
              >
                <a
                  href="tel:+97112345678"
                  className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700 hover:text-[#1e518e]"
                  role="menuitem"
                  itemProp="telephone"
                  content="+97112345678"
                >
                  <FaPhone className="text-[#1e518e] text-sm" />
                  <div>
                    <div>Call Support</div>
                    <div className="text-xs text-gray-500">+971 1234 5678</div>
                  </div>
                </a>
                <Link
                  to="/contact"
                  className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700 hover:text-[#1e518e]"
                  role="menuitem"
                >
                  <FaEnvelope className="text-[#1e518e] text-sm" />
                  Contact Form
                </Link>
                <Link
                  to="/live-chat"
                  className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700 hover:text-[#1e518e]"
                  role="menuitem"
                >
                  <FaComments className="text-[#1e518e] text-sm" />
                  <div>
                    <div>Live Chat</div>
                    <div className="text-xs text-gray-500">24/7 Available</div>
                  </div>
                </Link>
                <Link
                  to="/faq"
                  className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700 hover:text-[#1e518e]"
                  role="menuitem"
                >
                  <FaQuestionCircle className="text-[#1e518e] text-sm" />
                  FAQs
                </Link>
              </div>
            )}
          </div>

          {/* Language Dropdown */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all"
              aria-label="Language selector"
              aria-expanded={isLanguageOpen}
              aria-controls="language-menu"
            >
              <FaGlobe className="text-[#1e518e] text-sm" />
              <span className="text-sm font-medium">English</span>
              <FaChevronDown
                className={`text-xs text-gray-500 transition-transform ${
                  isLanguageOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLanguageOpen && (
              <div
                id="language-menu"
                className="absolute right-0 mt-1 w-40 bg-white shadow-lg rounded-lg py-2 z-20 border border-gray-100"
                role="menu"
              >
                <button
                  className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-2 hover:bg-gray-50"
                  onClick={() => setIsLanguageOpen(false)}
                  role="menuitem"
                  lang="en"
                >
                  <span className="w-6 text-center" aria-hidden="true">
                    🇬🇧
                  </span>
                  English
                </button>
                <button
                  className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-2 hover:bg-gray-50"
                  onClick={() => setIsLanguageOpen(false)}
                  role="menuitem"
                  lang="ar"
                >
                  <span className="w-6 text-center" aria-hidden="true">
                    🇦🇪
                  </span>
                  العربية
                </button>
                <button
                  className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-2 hover:bg-gray-50"
                  onClick={() => setIsLanguageOpen(false)}
                  role="menuitem"
                  lang="hi"
                >
                  <span className="w-6 text-center" aria-hidden="true">
                    🇮🇳
                  </span>
                  हिन्दी
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
