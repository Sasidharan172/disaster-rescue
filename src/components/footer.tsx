import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                <span className="text-white font-bold">DR</span>
              </div>
              <h2 className="text-xl font-bold">DisasterResponse</h2>
            </div>
            <p className="text-gray-400">
              Connecting communities, rescue teams, and resources during
              disasters.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/emergency"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Emergency Help
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">For Organizations</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/rescue-teams"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Rescue Teams
                </Link>
              </li>
              <li>
                <Link
                  href="/ngos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  NGOs
                </Link>
              </li>
              <li>
                <Link
                  href="/government"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Government
                </Link>
              </li>
              <li>
                <Link
                  href="/volunteers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Volunteers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">support@disasterresponse.org</li>
              <li className="text-gray-400">Emergency: +1-800-DISASTER</li>
              <li className="text-gray-400">General: +1-800-HELP-NOW</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} DisasterResponse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
