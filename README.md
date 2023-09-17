### Description

This is a one-pager, simple travel website with a ticket booking system. I built it using React, couple of hooks and styled components. Website is made according to the design provided in Figma. All assets like photos and icons were given to me for the purpose of this exercise. 

### Problems & challenges

I'm using React Router. I defined Routes for the additional sections in the Navbar, although these pages look the same one as the main one. However, due to using Link, I can navigate from overlay back and the site remembers the state with booked tickets globally.

I started making the booking system with hook useState (two separate const for adults and children). During the process, I realized that for the web to remember the state of booked tickets, I need to find a way to remember it globally. Instead of using Redux, I used Context, which was also new to me - my coding mentor helped me implementing this. I'm also using useMemo to calculate. 

I use Intl.NumberFormat() constructor to format numbers as a currency GBP. 

I am proud of implementing onChange event to the inputs, so the user can type the amount instead of clicking plus and minus icons. 

It was the first time for me working with carousel (slider). I used the npm package slideshow, ( <a href="https://react-slideshow-image.netlify.app/?path=/story/introduction--page"> available here </a> )

It was also the first time for me making an overlay effect. If I had more time, I would experiment more with styling of this component, especially with the closing icon and how it coexists with the navbar.

As I deployed via Netlify, I added redirects file to the public folder in order to fix redirections url and routing.

### Deployment

https://travel-site-maja.netlify.app/
