import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#222F3E] text-white pt-12 pb-6">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-10">
          <div className="mb-8 md:mb-0">
            <h4 className="font-bold text-2xl mb-1">Payunit</h4>
            <div className="text-[#B9C3CE] text-sm mb-3">
              Ready to integrate Payunit?
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <a
                href="#"
                className="inline-block px-4 py-2 bg-[#2563eb] text-white -[6px] text-sm font-semibold hover:bg-[#174ea6] transition"
              >
                Get Started
              </a>
              <a
                href="#"
                className="inline-block px-4 py-2 bg-white text-[#2563eb] border border-[#2563eb] -[6px] text-sm font-semibold hover:bg-gray-100 transition"
              >
                Contact Sales
              </a>
            </div>
            <div className="text-[#B9C3CE] text-xs">
              &copy; {new Date().getFullYear()} Payunit. All rights reserved.
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h5 className="font-semibold mb-3 text-[15px]">Products</h5>
              <ul className="space-y-2 text-[#B9C3CE] text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Payments
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Subscriptions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Invoices
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-[15px]">Learn</h5>
              <ul className="space-y-2 text-[#B9C3CE] text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Developers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API Reference
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-[15px]">Contacts</h5>
              <ul className="space-y-2 text-[#B9C3CE] text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Sales
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-[#384962] pt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-[#B9C3CE] text-xs">
          <div>
            <a href="#" className="hover:text-white mr-4">
              Terms &amp; Conditions
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
          <div className="flex space-x-2 mt-3 md:mt-0">
            <span>Follow us:</span>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              Twitter
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              LinkedIn
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-white">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
