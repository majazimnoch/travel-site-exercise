### Description

This is a one-pager, simple travel website with a ticket booking system. I built it using <b>React</b>, couple of <b>hooks</b> and <b>styled components</b>. Website is made according to the design provided in <b>Figma</b>. All assets like photos and icons were given to me for the purpose of this exercise. 

### Problems & challenges

I'm using <b>React Router</b>. I defined Routes for the additional sections in the Navbar, although these pages look the same one as the main one. However, due to using <b>Link</b>, I can navigate from overlay back and the site remembers the state with booked tickets globally.

I started making the booking system with <b>hook useState</b> (two separate const for adults and children). During the process, I realized that for the web to remember the state of booked tickets, I need to find a way to remember it globally. Instead of using Redux I used <b>Context</b> which was also new to me - my coding mentor helped me implementing this. I'm also using <b>useMemo</b> to calculate. 

I took advantage of <b>Intl.NumberFormat()</b> object constructor to format numbers as a currency of GBP. 

I'm proud of implementing <b>onChange event</b> to the inputs, so the user can type the amount instead of clicking plus and minus icons. 

It was the first time for me working with <b>carousel (slider)</b>. I used the npm package slideshow ( <a href="https://react-slideshow-image.netlify.app/?path=/story/introduction--page"   target="_blank"> available here </a> )

It was also the first time for me making an <b>overlay effect</b>. If I had more time, I would experiment more with styling of this component, especially with the closing icon and how it coexists with the navbar.

As I deployed via Netlify, I added <b>redirects</b> file to the public folder in order to fix redirections url and routing.

### Deployment

https://travel-site-maja.netlify.app/
