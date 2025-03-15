import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <footer className="w-full py-2 bg-gray-200 text-gray-600">
          <div className="w-11/12 md:w-8/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-5 pt-5">
            <div className="col-span-1 flex flex-col gap-y-1">
              <h2 className="text-lg font-semibold">About Us</h2>
              <div className="text-sm flex flex-col gap-y-1.5">
                <span>About Us Overview</span>
                <span>Leadership Team</span>
                <span>Values In Action</span>
                <span>Franchising info</span>
                <span>Recalls & Alerts</span>
                <span>Real Estate</span>
                <span>Accessibility</span>
                <span>Investor Relations</span>
                <span>News & Notifications</span>
              </div>
            </div>
            <div className="col-span-1 flex items-end md:items-center md:text-center text-end flex-col gap-y-1">
              <h2 className="text-lg font-semibold">Services</h2>
              <div className="text-sm flex flex-col gap-y-1.5">
                <span>About Us Overview</span>
                <span>Leadership Team</span>
                <span>Values In Action</span>
                <span>Franchising info</span>
                <span>Recalls & Alerts</span>
                <span>Real Estate</span>
                <span>Accessibility</span>
                <span>Investor Relations</span>
                <span>News & Notifications</span>
              </div>
            </div>
            <div className="col-span-1 flex md:items-center md:text-center flex-col gap-y-1">
              <h2 className="text-lg font-semibold">Community</h2>
              <div className="text-sm flex flex-col gap-y-1.5">
                <span>About Us Overview</span>
                <span>Leadership Team</span>
                <span>Values In Action</span>
                <span>Franchising info</span>
                <span>Recalls & Alerts</span>
                <span>Real Estate</span>
                <span>Accessibility</span>
                <span>Investor Relations</span>
                <span>News & Notifications</span>
              </div>
            </div>
            <div className="col-span-1 flex flex-col items-end text-end gap-y-1">
              <h2 className="text-lg font-semibold">Contact Us</h2>
              <div className="text-sm flex flex-col gap-y-1.5">
                <span>About Us Overview</span>
                <span>Leadership Team</span>
                <span>Values In Action</span>
                <span>Franchising info</span>
                <span>Recalls & Alerts</span>
                <span>Real Estate</span>
                <span>Accessibility</span>
                <span>Investor Relations</span>
                <span>News & Notifications</span>
              </div>
            </div>
          </div>
          <div className="w-11/12 md:w-8/12 mx-auto mt-6 flex items-center justify-between flex-col md:flex-row gap-y-3">
            <div className="flex items-center gap-x-3">
              <a href="#" className="h-8 w-8 border border-gray-600 rounded-full flex items-center justify-center transitions text-gray-600 hover:text-white hover:bg-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="h-8 w-8 border border-gray-600 rounded-full flex items-center justify-center transitions text-gray-600 hover:text-white hover:bg-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
              <a href="#" className="h-8 w-8 border border-gray-600 rounded-full flex items-center justify-center transitions text-gray-600 hover:text-white hover:bg-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="h-8 w-8 border border-gray-600 rounded-full flex items-center justify-center transitions text-gray-600 hover:text-white hover:bg-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
              </a>
            </div>
            <div className="flex items-center justify-end gap-x-1 py-1">
              <Image src="/images/google-play-store.png" alt="Google Play Store" height={60} width={130}></Image>
              <Image src="/images/app_store.png" alt="Google Play Store" height={60} width={130}></Image>
            </div>
          </div>
          <div className="w-11/12 md:w-8/12 mx-auto mt-6">
            <hr />
            <div className="w-full flex flex-col md:flex-row items-center justify-between py-2">
              <div className="flex items-center gap-x-2 text-sm">
                <Link href="/">Privacy</Link>
                <Link href="/">Terms & Conditions</Link>
                <Link href="/">Accessibility</Link>
              </div>
              <small>All Copyright Reserve <a href="https://mmitsoft.com/" className="font-semibold">@MMIT Soft Ltd</a></small>
            </div>
          </div>
        </footer>
  )
}
