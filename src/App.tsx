import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Insights from "./pages/Insights";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Login from "./pages/Login";
import AdminLayout from "./pages/admin/AdminLayout";
import AddBlog from "./pages/admin/AddBlog";
import BlogList from "./pages/admin/BlogList";
import EditBlog from "./pages/admin/EditBlog";
import DebugPage from "./pages/admin/DebugPage";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AuthProvider } from "./lib/AuthContext";
import TeamMemberList from './components/admin/TeamMemberList';
import AddTeamMember from './pages/admin/AddTeamMember';
import EditTeamMember from './pages/admin/EditTeamMember';
import AddTestimonial from "./pages/admin/AddTestimonial";
import TestimonialList from "./pages/admin/TestimonialList";
import EditTestimonial from "./pages/admin/EditTestimonial";

const queryClient = new QueryClient();

// Create ScrollToTop component to ensure pages start at the top
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    // If there's a hash in the URL, don't automatically scroll to top
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      // Handle hash navigation after a short delay to ensure the page is loaded
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, [pathname, hash]);
  
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        
        {/* Login Route - Separate from main layout */}
        <Route path="/login" element={<Login />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<BlogList />} />
          <Route path="blogs" element={<BlogList />} />
          <Route path="add" element={<AddBlog />} />
          <Route path="edit/:id" element={<EditBlog />} />
          <Route path="debug" element={<DebugPage />} />
          <Route path="team-members" element={<TeamMemberList />} />
          <Route path="add-team-member" element={<AddTeamMember />} />
          <Route path="edit-team-member/:id" element={<EditTeamMember />} />
          {/* Testimonial Management Routes */}
          <Route path="add-testimonial" element={<AddTestimonial />} />
          <Route path="testimonials" element={<TestimonialList />} />
          <Route path="edit-testimonial/:id" element={<EditTestimonial />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AuthProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <AnimatedRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
