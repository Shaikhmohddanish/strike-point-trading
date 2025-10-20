"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PhoneButton() {


  return (
    <div className="fixed z-50 flex flex-col gap-4 bottom-8 left-8">
      {/* Phone Button */}
      <div className="relative">
        <Button
          onClick={() => (window.location.href = "tel:+917738928016")}
          className="rounded-full w-14 h-14 bg-white hover:bg-gray-200 shadow-lg flex items-center justify-center"

        >
          <Phone className="h-6 w-6 text-black" />
        </Button>


      </div>
    </div>
  )
}
