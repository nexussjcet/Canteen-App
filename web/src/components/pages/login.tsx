import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-xl space-y-6">

        {/* Title & Subtitle */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back 👋</h1>
          <p className="text-sm text-gray-500 mt-1">Login to continue ordering</p>
        </div>

        {/* Login Form */}
        <form className="space-y-4">
          <Input type="email" placeholder="Enter your email" />
          <Input type="password" placeholder="Enter your password" />
          <div className="text-right text-sm">
            <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
          </div>
          <Button type="submit" className="w-full">Login</Button>
        </form>

        {/* Sign Up Redirect */}
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}