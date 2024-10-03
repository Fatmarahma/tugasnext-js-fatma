import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f3ecd2]">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 rounded-lg bg-[#E0C097] p-6 shadow-lg sm:flex-row sm:justify-between">
          <strong className="text-xl text-white sm:text-xl"> See You There! </strong>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-[#DF2E38] hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
            href="#"
          >
            <span className="text-sm font-medium"> Reserve Your Wristband </span>
            <svg
              className="size-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn
            title="About Us"
            links={[
              { name: "Company History", href: "#" },
              { name: "Meet the Team", href: "#" },
              { name: "Employee Handbook", href: "#" },
              { name: "Careers", href: "#" },
            ]}
          />
          <FooterColumn
            title="Our Services"
            links={[
              { name: "Web Development", href: "#" },
              { name: "Web Design", href: "#" },
              { name: "Marketing", href: "#" },
              { name: "Google Ads", href: "#" },
            ]}
          />
          <FooterColumn
            title="Resources"
            links={[
              { name: "Online Guides", href: "#" },
              { name: "Conference Notes", href: "#" },
              { name: "Forum", href: "#" },
              { name: "Downloads", href: "#" },
              { name: "Upcoming Events", href: "#" },
            ]}
          />
          <FooterColumn
            title="Helpful Links"
            links={[
              { name: "FAQs", href: "#" },
              { name: "Support", href: "#" },
              { name: "Live Chat", href: "#" },
            ]}
          />
        </div>

        <div className="mt-16">
          <ul className="flex justify-center gap-6 sm:justify-end">
            {/* Icon Social Media */}
            {/* (Isi dengan ikon media sosial di sini) */}
          </ul>
          <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => (
  <div className="text-center sm:text-left">
    <p className="text-lg font-medium text-gray-900">{title}</p>
    <ul className="mt-8 space-y-4 text-sm">
      {links.map((link) => (
        <li key={link.name}>
          <a className="text-gray-700 transition hover:text-gray-700/75" href={link.href}>
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
