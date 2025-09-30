"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactButtons() {


  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in your trading services. Can you provide more information?",
    )
    window.open(`https://wa.me/918888888888?text=${message}`, "_blank")
  }

  return (
    <div className="fixed z-50 flex flex-col gap-4 bottom-8 right-8">
      {/* WhatsApp Button */}
      <div className="relative">
        <Button
          onClick={openWhatsApp}
          className="rounded-full w-14 h-14 bg-white hover:bg-gray-200 shadow-lg flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6 text-black" />
        </Button>


      </div>
    </div>
  )
}
