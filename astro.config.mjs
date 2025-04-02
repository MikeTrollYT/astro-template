// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// -------------------------------------------------------------
// If you are using GitHub Pages, you can configure it as follows
// -------------------------------------------------------------
//export default defineConfig({
//    site: 'https://miketroll.github.io', // Change this field to the URL of your github page
//    base: 'astro-template', // Change this field to the name of your project. Remember to use /astro-template/ in your links.
                            // E.g., <a href="/astro-template/contact">Contact</a>
                            // "astro-template" is the name you entered in "base"
//});

// -------------------------------------------------------------
// If you have a domain, you can configure it as follows
// -------------------------------------------------------------
export default defineConfig({
    site: 'https://template.miketroll.es', // Change this field to your domain URL
    base: '/', // Leave it as '/' if you have a domain. And you should start with "/" when you put a link. 
                    // E.g., <a href="/contact">Contact</a> 
    output: 'static',
    build: {
        outDir: './dist',
    },
});