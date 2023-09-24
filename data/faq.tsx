import * as React from "react";

const faq = {
  title: "Frequently asked questions",
  // description: '',
  items: [
    {
      q: "How many products can I use Atbash Pro for?",
      a: (
        <>
          The single license can be used for one commercial application or SaaS
          product and unlimited internal tools. You can buy as many licenses as
          you need. <br /> The unlimited license does not have any restrictions.
        </>
      ),
    },
    {
      q: "Can I use Atbash Pro for client work?",
      a: "Yes, that's totally up to you, as long as it fits the license you purchase.",
    },
    {
      q: "Can I use Atbash Pro for Open Source projects?",
      a: "Yes 100%. All of Atbash is already released under MIT license. We try to give back to the community as much as possible.",
    },
    {
      q: "Does Atbash include Figma, Sketch or other Fontend components?",
      a: "Yes, Atbash does include lots of design assets. Maintaining design resources costs a lot of extra effort. We believe small teams can move much faster by designing directly in code.",
    },
  ],
};

export default faq;
