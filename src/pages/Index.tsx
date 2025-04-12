
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Settings } from "lucide-react";

export default function Index() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">Chatbot Builder Dashboard</h1>
      <p className="text-xl text-center mb-8 max-w-3xl">
        Welcome to your chatbot builder dashboard. Configure and customize your AI assistant with our powerful settings panel.
      </p>
      
      <Link to="/settings">
        <Button className="flex items-center gap-2 text-lg px-6 py-6">
          <Settings className="h-5 w-5" />
          Open Settings Panel
        </Button>
      </Link>
    </div>
  );
}
