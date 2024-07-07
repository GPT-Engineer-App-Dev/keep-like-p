import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Archive, Home, Lightbulb, Trash2 } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar";
import Index from "./pages/Index.jsx";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Notes",
    to: "/",
    icon: <Lightbulb className="h-4 w-4" />,
  },
  {
    title: "Reminders",
    to: "/reminders",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Archive",
    to: "/archive",
    icon: <Archive className="h-4 w-4" />,
  },
  {
    title: "Trash",
    to: "/trash",
    icon: <Trash2 className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              {/* Add more routes here as needed */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;