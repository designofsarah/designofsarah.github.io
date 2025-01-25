import { Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import Projects from "@/pages/Projects";

// Base path for GitHub Pages - user/organization site
const base = "/";

function Router() {
  return (
    <Layout>
      <Route path={`${base}`} component={Home} />
      <Route path={`${base}blog`} component={Blog} />
      <Route path={`${base}projects`} component={Projects} />
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;