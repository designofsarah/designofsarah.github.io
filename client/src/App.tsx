import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

// Base path for GitHub Pages deployment
const base = "/";

function Router() {
  return (
    <Layout>
      <Switch base={base}>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
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