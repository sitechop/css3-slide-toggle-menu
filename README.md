#CSS3 + Pure JS Slide Toggle Menu

CSS3 Transitions are awesome. This runs a lot smoother than a jQuery slideToggle (specifically on mobile), and has no library dependencies. The transition's only work on IE10+, but the toggle functionality will work fine on IE8+.

Many browsers render em's slightly different in size. To solve this problem I had to calculate the height of the menu and change margin-top using JavaScript. On the plus side this allows us to add navigation links without having to change any styles. I placed an estimate of margin-top, so browsers that render em's differently than chrome will only see a 2-4px flash of gray.