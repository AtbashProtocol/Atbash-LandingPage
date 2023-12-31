import { Button } from "@chakra-ui/react";
import { Link } from "@saas-ui/react";
import { NextSeoProps } from "next-seo";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { Logo } from "./logo";

const siteConfig = {
  logo: Logo,
  seo: {
    title: "Atbash",
    description: "The ZKP component library for Solana",
  } as NextSeoProps,
  termsUrl: "#",
  privacyUrl: "#",
  header: {
    links: [
      {
        id: "features",
        label: "Features",
      },
      {
        id: "pricing",
        label: "Pricing",
      },
      {
        id: "faq",
        label: "FAQ",
      },
      {
        label: "Login",
        href: "/login",
      },
      {
        label: "Sign Up",
        href: "/signup",
        variant: "primary",
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by <Link href="https://twitter.com/Pagebakers">Ippo</Link>
      </>
    ),
    links: [
      {
        href: "mailto:hello@saas-ui.dev",
        label: "Contact",
      },
      {
        href: "https://twitter.com/saas_js",
        label: <FaTwitter size="14" />,
      },
      {
        href: "https://github.com/saas-js/saas-ui",
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: "Start building with Atbash",
    features: [
      {
        icon: FiCheck,
        title: "Accessible",
        description: "All components strictly follow ZKP standards.",
      },
      {
        icon: FiCheck,
        title: "Themable",
        description:
          "Fully customize all components to your brand with privacy support and style props.",
      },
      {
        icon: FiCheck,
        title: "Composable",
        description:
          "Compose components to fit your needs and mix them together to create new ones.",
      },
      {
        icon: FiCheck,
        title: "Productive",
        description:
          "Designed to reduce boilerplate, build your privacy product at speed.",
      },
    ],
  },
};

export default siteConfig;
