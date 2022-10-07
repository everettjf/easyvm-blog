/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "EasyVM",
  description: "Virtual Machine Application based on Virtualization.framework for macOS",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "https://deno-avatar.deno.dev/avatar/blog.svg",
  avatarClass: "rounded-full",
  author: "everettjf",
  links: [
    { title: "Email", url: "mailto:everettjf@live.com" },
    { title: "GitHub", url: "https://github.com/easyvm" },
    { title: "Twitter", url: "https://twitter.com/everettjf" },
  ],
  // showHeaderOnPostPage: true,
  lang: "en",
  // coverTextColor:"white",
  theme: "auto",

  // localised format based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  // dateFormat: (date) => new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' }).format(date),

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
