import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              Strike Point Trading provides premium market research solutions, empowering traders and investors globally
              with cutting-edge analysis and insights.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-white hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link href="/services" className="block text-white hover:text-gray-300 transition-colors">
                Services
              </Link>
              <Link href="/packages" className="block text-white hover:text-gray-300 transition-colors">
                Packages
              </Link>
              <Link href="/about" className="block text-white hover:text-gray-300 transition-colors">
                About
              </Link>
              <Link href="/contact" className="block text-white hover:text-gray-300 transition-colors">
                Contact
              </Link>
              <Link href="/terms" className="block text-white hover:text-gray-300 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="block text-white hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p>Vashi haware B wing Office no 1405</p>

              <p className="mt-3">support@strikepointtrading.com</p>
              <p>7738928016</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>Copyright © 2025 Strike Point Trading | All Rights Reserved</p>
          <p>Not affiliated with meta</p>
        </div>
      </div>
    </footer>
  )
}
