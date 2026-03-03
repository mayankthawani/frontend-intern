"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2 relative overflow-hidden">
      
      {/* Full Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0d1e24] via-[#0a1015] to-[#1a0f0a]">
        {/* Teal glow on left side */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-teal-800/20 blur-[120px] rounded-full -translate-x-1/3 -translate-y-1/4" />
        {/* Orange/Yellow glow on right side behind the card */}
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-orange-500/30 blur-[100px] rounded-full translate-x-1/4 translate-y-1/4" />
      </div>
      
     
      <div 
        className="fixed inset-0 z-[1] opacity-[0.15] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
      
      {/* LEFT SIDE */}
      <div className="hidden lg:flex flex-col justify-between px-16 py-12 text-white relative z-10">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
            <span className="w-4 h-4 rounded-full bg-white items-center justify-center"></span>
          </div>
          <span className="font-semibold text-xl text-teal-500">aps</span>
        </div>

        {/* Content */}
        <div className="space-y-6 max-w-xl flex-grow flex flex-col justify-center">
          <h2 className="text-5xl font-semibold leading-tight">
            Expert level Cybersecurity in <span className="text-[#0CC8A8]">hours</span> not weeks.
          </h2>

          <div className="space-y-3">
            <p className="text-sm font-semibold">What's included</p>
            <div className="space-y-2.5 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#0CC8A8] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Effortlessly spider and map targets to uncover hidden security flaws</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#0CC8A8] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Deliver high-quality, validated findings in hours, not weeks.</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#0CC8A8] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Generate professional, enterprise-grade security reports automatically.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Rating */}
        <div>
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-4 h-4 text-[#0CC8A8]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-semibold text-white text-sm">Trustpilot</span>
          </div>
          <p className="text-sm text-gray-400 mt-0.5">
            Rated 4.5/5.0 <span className="text-gray-500">(100k+ reviews)</span>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center p-6 lg:p-12 relative z-10">
        <Card className="w-full max-w-md shadow-2xl rounded-3xl border-0">
          <CardContent className="p-10 space-y-5">
            
            {/* Header */}
            <div className="text-center space-y-1">
              <h2 className="text-3xl font-bold text-gray-900">Sign up</h2>
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <span className="text-[#0CC8A8] cursor-pointer hover:underline font-medium">Log in</span>
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <Input placeholder="First name*" required className="h-12 rounded-lg bg-gray-50 border-gray-200" />
              <Input placeholder="Last name*" required className="h-12 rounded-lg bg-gray-50 border-gray-200" />
              <Input type="email" placeholder="Email address*" required className="h-12 rounded-lg bg-gray-50 border-gray-200" />
              
              {/* Password with toggle */}
              <div className="relative">
                <Input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password (8+ characters)*" 
                  required 
                  className="h-12 rounded-lg bg-gray-50 border-gray-200 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              <div className="flex items-start gap-2.5 text-xs pt-1">
                <Checkbox id="terms" className="mt-0.5" />
                <label htmlFor="terms" className="text-gray-600 leading-relaxed">
                  I agree to Aps's{" "}
                  <span className="text-[#0CC8A8] cursor-pointer hover:underline">Terms & Conditions</span>{" "}
                  and acknowledge the{" "}
                  <span className="text-[#0CC8A8] cursor-pointer hover:underline">Privacy Policy</span>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-[#0CC8A8] hover:bg-[#0bb39a] text-white rounded-full font-semibold mt-5"
              >
                Create account
              </Button>
            </form>

            {/* Social Login */}
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="w-full h-11 rounded-full bg-black hover:bg-gray-900 text-white border-0"
                type="button"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
              </Button>
              <Button 
                variant="outline" 
                className="w-full h-11 rounded-full bg-white hover:bg-gray-50 border-gray-200"
                type="button"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </Button>
              <Button 
                variant="outline" 
                className="w-full h-11 rounded-full bg-[#1877F2] hover:bg-[#166FE5] text-white border-0"
                type="button"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.03 23.5v-9.29H6.08v-3.62h2.95V8.36c0-2.92 1.78-4.51 4.39-4.51 1.25 0 2.32.09 2.63.13v3.05h-1.8c-1.42 0-1.69.67-1.69 1.66v2.18h3.38l-.44 3.62h-2.94V23.5"/>
                </svg>
              </Button>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  )
}