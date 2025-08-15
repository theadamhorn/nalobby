import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { onMount } from 'solid-js';

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./app.css";

onMount(async () => {
  await import('bootstrap/dist/js/bootstrap.bundle.min.js');
});

// Components
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>SolidStart - Basic</Title>
          <Navbar />
          <Suspense>{props.children}</Suspense>
          <Footer />
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
