# StarterPack
StarterPack is a setup for **starting each new, efficient, custom web project**.

Packing **best practice** grid, very useful mixins, color palette map and function, few, most useful js plugins, and more.

INDEX.HTML + CSS + JS: **157kb** *(without Google font and jquery.min.js).*

In general, this setup, is *all you need for 85% of web projects*.

Easily **create great, solid website, under 500kb in total**,  with awesomely documented and DRY (Don't Repeat Yourself) code.

Start of your custom new web project in few seconds, from ground up, with great setup for large scale projects, to small web projects.

> I've created it to automatize the process of starting each **new, *purely custom*, web development project**. Without having to use parts of *Boostrap* in order to speed it up, or to *copy-paste or re-create grid, mixins, functions from previous projects*. As well, as *setup package.json and Grunt file* all over again, every time.

Note: This is not Bootstrap, in means it doesn't have predone navigation, slider, tabs, etc.
It's a setup, with no Bootstrap overhead. That's the entire point, to have a clean, yet stable start. For full custom projects.

### Legend: 
+ [Goodies inside](../master/README.md#goodies-inside)
+ [Steps to take](../master/README.md#steps-to-take)
+ [All features explained](../master/README.md#all-features-explained)
+ [Advice and recommendation](../master/README.md#advice-and-recommendation)
+ [Author's example projects and info](../master/README.md#authors-example-projects-and-info)

## Goodies inside:

1. Entire package has **[package.json](../master/package.json) and [Grunt file](../master/Gruntfile.js)** (with code compression and autoprefixing), **already setup**.

2. **[Index.html](../master/index.html)**
     * It has all necessary markup for starting a project. All meta info you'll ever need for most projects.
     * Already linked, css, js to files in root folder, as well as font (Open sans), and header, main and footer.

3. **[SASS folder and files](../master/sass)**. Organized SCSS partial folders and files (with pre-made code).
    * Just enough variables, mixins, functions and placeholders, you will need. 
    * Including: Grid, More media query options than Boostrap, Color palette map and function, Clearfix classes, etc.

4. **[JS plugins](../master/js)**, few most awesome plugins, that high quality projects use daily.
    * Like: Smooth scroll, Sections/elements fadein on scroll into viewport, Touch manipulation support, etc.

5. Additional, **[img folder](../master/img)** for images and favicons, already linked inside index.html.

## Steps to take:
In order to just download this repository, extract it on your laptop/pc, I will explain everything I use (tools and software installed), for it to work instantly.

1. **Laptop/PC setup I have:**
    * System: Windows 10 64-bit, PC
    * Processor: AMD A10-7860K, 3.60GHz, 12Gb RAM
    * Graphic card: Radeon R7, 4C+8G
    * This isn't important that much, but, there's the info.
2. **Tools I use for coding:**
    * [WAMP – Local server](https://docs.google.com/spreadsheets/d/1TCHzqey9PGPfZpwy6A-H0sdRz8KeHn0S8zKwaunZKPM/edit#gid=630269241). This is where I keep all my projects, and from where they are connected to theirs github repo.
    * **Windows Powershell** for initiating Grunt, within C:\wamp64\www\ **MyProject**>
    * [Git Bash for Windows](https://docs.google.com/spreadsheets/d/1TCHzqey9PGPfZpwy6A-H0sdRz8KeHn0S8zKwaunZKPM/edit#gid=501934981), Git's terminal, for all git commands.
    * **Sublime – Code editor**, for coding.
    * **Installed Ruby**
    * [gem install sass](https://docs.google.com/spreadsheets/d/1TCHzqey9PGPfZpwy6A-H0sdRz8KeHn0S8zKwaunZKPM/edit#gid=630269241), for SASS to work, after you extract the files from this repo, into your local folder.
    * [Installed Node.js](https://docs.google.com/spreadsheets/d/1TCHzqey9PGPfZpwy6A-H0sdRz8KeHn0S8zKwaunZKPM/edit#gid=501934981), for Grunt to work, after you extract the files from this repo, into your local folder. 
    
    If you don't have wamp, sublime and git installed, I would recommend it.
    Also, Ruby(+ install sass) and Node.js are necessary for items in this repo to work right away, when you extract them.
    
 3. **Download, extract and start coding:**
    * Click on "Clone or download" button in main repo.
    * Click on "Download ZIP".
    * Extract the downloaded ZIP, into **C:\wamp64\www**
    * Rename the folder, into the name of your project.
    * Inside the folder, delete: LICENCE and README.md
    * Choose whether or not to delete **.gitignore**, depending if you will later git push files to the remote repo (on github). 
    * Or use **npm** to install:
    
            npm install starterpack
                    
    * If you use **npm** to install this repo to your local folder, you will need to cut all from node_modules folder, and put it in root folder of your project. Additionally, you will have to download all node_modules (dependencies), that you would have already by just downloading it here, and extracting it in your project folder.
    * That's it, you have clean setup to start coding.
    * Enjoy. :)
## All features explained
I will explain all the features, by explaining what is in the folders and files, as well as methodology I use to name classes.

### **Folder and files organization methodology**

For documentation I use very flexible structure, which is easily scalable for large projects, as well as small ones.

It's based on [my custom SMACSS methodology](https://docs.google.com/spreadsheets/d/1TCHzqey9PGPfZpwy6A-H0sdRz8KeHn0S8zKwaunZKPM/edit#gid=1868618249).

![alt text](https://lazareric.com/img/2.png "Documentation tree")

### **Documentation:**
  1. Folders in root folder: **css**,  **js**,  **img**,  **node_modules** and  **SASS** (+ .sass-cache, non important).
  2. Files in root folder:  **index.html**,  **package.json**,  **gruntfile.js** (+ licence, readme and .gitignore, non important).
    ___
    Files in root:
    
* **[index.html](../master/index.html)**
    
    **It has**:
    + All necessary meta for UTF-8, IE edge, chrome 1 meta, title, viewport meta, google-size verification etc.
    + Conditional loading scripts, html5shiv.js and respond.js, which create comptaibility for HTML5 elements and CSS3 properties in older browsers.
    + Linked CSS(to the css folder in root folder), and Google font.
    + SEO: All the meta tags you would probably use in 95% of the projects. Amazing collection of meta tags, to be as precise as possible. Default meta, apple meta, windows 8 meta, open graph and twitter meta.
    + Favicons: Also, every needed favicon size, ever. For default browsers and systems, as well as ios system.
    + Then, Body, Wrapper, Header, Main and Footer (usually starting structure).
    + In the end: jQuery.min.js latest version linked, then our custom js file with plugins (linked to js folder in root folder), and Google analytics script. That's it for HTML.
    
* **[package.json](https://docs.google.com/spreadsheets/d/1TCHzqey9PGPfZpwy6A-H0sdRz8KeHn0S8zKwaunZKPM/edit#gid=501934981)**
    + Basic setup of package.json, including all necessary add-ons to Grunt, like code minifier and autoprefixer.
    
* **[Gruntfile.js](https://docs.google.com/spreadsheets/d/1TCHzqey9PGPfZpwy6A-H0sdRz8KeHn0S8zKwaunZKPM/edit#gid=501934981)**
    + Watches all the files in SCSS folder.
    + Minifies and converts all the code from **style.scss > style.css**
    + Also, while writing CSS, it adds all necessary prefixes for cross-browser compatibility (last 8 versions).
    ___
    Folders in root:
    
* [CSS](../master/css)
    + It only contains style.css, which is the final product of converted and minified SCSS code. It's linked in index.html.
    
* [IMG](../master/img) 
    + All images go to img root folder and all favicons go to favicon subfolder.
    
* [JS](../master/js) – Light collection, to create **high quality look and feel**, web project.
    
    **It has next plugins:**
    + [Hammer.js](http://hammerjs.github.io/) provides better touch manipulation support.
    + [pictureFill](https://scottjehl.github.io/picturefill/) better support for HTML5 picture element, and for src and size.
    + **[smoothScroll](http://codepen.io/chriscoyier/pen/dpBMVP)** one of my favourites, smooth scroll to the anchor link on the page.
    + **[WOW.js](http://mynameismatthieu.com/WOW/)**, my other favourite, reveals elements, sections on scroll into view.
    + **[Sticky-kit](http://leafo.net/sticky-kit/#examples)** provides an easy way to attach elements to the page when the user scrolls.
    + **[Headroom.js](http://wicky.nillia.ms/headroom.js/)**, allows you to react to the user's scroll. Shows/Hides and animates header.
    
* [Node_modules](../master/node_modules)
    + Just all node_modules, that come with initiating package.json in this local folder. Minifier and autoprefixer that we use with Grunt, are included.
    
* **[SASS](../master/sass)**

And finally SASS folder, which explains the subtle power of this custom StarterPack.

**It has**:
    
0. [Folders](../master/sass):
    * 1-Variable-Mixin-Function-Placeholder
    * 2-Base-Animation
    * 3-Layout
    * 4-Module 
    * 5-State
    * 6-Theme

Now each folder, files and goodies within.

1. [Variable-Mixin-Function-Placeholder](../master/sass/1-Variable-Mixin-Function-Placeholder)
+ **Variable-Map**: all variables and sass maps.
    * Variables for: base font, font family, font weights and colors (black and white colors, colorful named colors, color usagage).
    * Maps for: Simple color map for $ui-colros and complex nested map $palettes.
    
**Awesome part**: These color palettes, are what we use to generate bg-colors and color standalone classes, later on, for clean (non repetative code).

+ **Mixin**: all mixins we use in the code.
    * **Sprite image map** mixin, to include icon in the class, with retina icon fallback (from another sprite image map).
    * **Pseudo-elements**, easily include before or after pseudo element on any class, with premade code within mixin.
    * **Font size in REM with PX fallback**
    * **Simple $map class generator** generate additional classes for $ui-colors, on a class (button--info, button--success, etc.).
    * **Complex $map class generator** generates any class, from nested map $palettes (bg-grey--base, color-primary--base, etc.).
    * **Media Breakpoints** mixin — I've created **more Media Query options than Bootstrap**, and which are most used. Breakpoints: 320px = 20em; 480px = 30em; 640px = 40em; 768px = 48em; 980px = 61.25em; 1024px = 64em; 1100px = 68.75em; 1200px = 75em; 1440px = 90em; 1650px = 103.125em; 1920px = 120em; // Breakpoints are in 'EM' unit, which is the best one for Media Queries.
    
**Awesome part**: Apart from most usefull mixin collection, yet light, you have all those Media Queries, for mobile-first quries, tv-first, and queries in between (all combinations of breakpoints).

    ie. @include min-768 {} or @include max-1200 {} or @include min-640-max-1440 {}
    
+ **Functions**: all functions.
    * **Calculate 'EM' from 'PX'**
    * **Calculate 'REM' from size, with 'PX' fallback**
    * **Get color, from color map $palettes**

            ie. padding: em(48px) 0; / font-size: rem(16); / color: palette(grey, base);
    
+ **Placeholders**: all placeholders.
    * **Clearfix**
    * **Pseudo-elements** repetative properties
    * **Container**
    * **Row**
    
+ **Index**
    * In index files, we import all of the files within that folder.
    * Added Print/PDF support:
        + For your website to look awesome in Print view, I've added some Print/PDF only header, footer code in html, which will only be shown in Print/PDF view (right click > print > change > PDF > save).
        + Also, there are few more things: reset-print.scss, .hide-print (to hide all other elements in web view, that we don't need in print/PDF view), .display-print-block (inline-block, inline) class, and .font-family--print (serif based font stack for print/PDF).
    
2. [Animation-Base](../master/sass/2-Animation-Base)
 
+ **Animation-animate**
    * All the **animate.css** code.
    
+ **Animate-custom**
    * All custom code, for animations.
    
+ **Reset-normalize**
    * Latest version of normalize code for reset.
    
+ **Reset-custom**
    * I've added some more reset code. Why? There are few things, like browser adding rounded corners and inset shadow to form elements for search. If you want 100% custom design, across all devices, this will make it happen.
    
+ **General**
    * Basic styling of major elements: * , body, p, h1-h4 tags, etc.

+ **Index**
    * In index files, we import all of the files within that folder.
    
3. [Layout](../master/sass/3-Layout)

+ **Grid** *Awesome*
    * I've created **more detailed custom grid, with all the features that Boostrap's bulletproof grid** has + with those additional Media Queries. So now, you have **mobile first grid + for media queries: 320, 480, 640, 768, 980, 1024, 1100, 1200, 1440, 1650 and 1920px**.
    * All col-*-*-* have floats, position: relative, etc. And row's, container's have clearfixs premade, relax. **+ col- * -pull- * , col- * -push - * and col- * -offset- * for all the col's and media query breakpoints**. 

            ie. col-12; / col-320-6; / col-640-pull-6; / col-1200-push-4; / col-1920-offset-5 all you need. :)
            
 + **Layout**
    * Layout contains all the container, row classes, as well as wrapper, main, and any additional similar type layout classes.
    
 + **Header**
    * Header contains, all the blocks and elements scss code (BEM naming class methodology), for header part of the website only.
 
 + **Footer**
    * Footer contains, all the blocks and elements scss code, for footer part of the website only.
 
 + **Preloader**
    * If you have made preloader, this is where you will put all classes for bloks and elements, related to it.
    
+ **Index**
    * In index files, we import all of the files within that folder.
    
4. [Module](../master/sass/4-Module)
    * Ok, we have folders, for all the mixins, functions, placeholders, variabels, reset, animations and major layout parts of our website. **This folder contains the code for specific funcionalities like: forms, buttons, post-thumbnails, slider, etc.**
    * It should only contain blocks and elements regarding those specific funcionalities, modifiers go in next 2 folders.
    * As always, index file, where we import all of those files within this folder.
    
5. [State](../master/sass/5-State)
    * State folder, has all the code, which changes the state of elements, classes on our website, on hover, event, etc.
    * Also, contains all very cool **Hide and Display** classes for all **Media Query Breakpoints**.
    * Like:
    
            ie. .font-family--primary / .font-weight--light / .text-left
            .srt (Screen Reader Text, class to hide text) / .font-heading / .font-subheading
            .font-body / .clearfix / .image-responsive / .iframe-responsive
            Helper Classes (mobile first): hide-768 (display: none, 768px and up)
            display-1200-inline-block (understandable);
        
6. [Theme](../master/sass/6-Theme)
    * Theme has all the class modifiers, regarding colors.
    * Here, we used complex mixin class generator, to generate classes for bg-colors and colors from map $palettes.
    
            ie. .bg-white--base / .bg-grey--xx-dark / .color-primary--base / .color-secondary--dark

7. [partials and style.scss file](../master/sass)
    * In partials.scss we import all of the index files, from all other folders (that already have imported all the files from their respective folders).
    * In style.scss we import partials.scss
    * Grunt minifies and converts all the scss code from style.scss to style.css
    * That's it!
___

In general, that's all of it.
Explained it as short as possible, but of course go through each file, to see what's in it, I used comments to explain it well with examples as well.

Of course, this is again, just a setup, remove, add, what ever you wish on it. :)

## Advice and recommendation

Few advices regarding class naming methodology, as well as few js plugins for specific functionalities.

1. Try to **only use classes**. No id's, no complex css specificity.
Check out [my small tutorial](https://docs.google.com/spreadsheets/d/1TCHzqey9PGPfZpwy6A-H0sdRz8KeHn0S8zKwaunZKPM/edit#gid=1868618249), custom BEM, on how to do it. You will have almost **0% specificity issues**.

2. [Great typography, font combinations and color palettes](https://docs.google.com/spreadsheets/d/1TCHzqey9PGPfZpwy6A-H0sdRz8KeHn0S8zKwaunZKPM/edit#gid=2008705279)
I will soon create many great working font combinations (free fonts), for you to use, as well as color palettes, for good design.

3. In the link above, I will create custom code snippets, for many front end functionalities:
    * Different types of headers.
    * Different types of footer.
    * Different types of sections, with color, video background, etc.
    * Tabs, accordians, timeline effect.
    * Awesome Preloaders, and more.
    
[Check here](https://docs.google.com/spreadsheets/d/1TCHzqey9PGPfZpwy6A-H0sdRz8KeHn0S8zKwaunZKPM/edit#gid=2008705279) in a month or so, for all those **free, high quality, copy-paste goodies**. :)

4. Also, in the same tab in linked spreadsheet above, there's a column on the right, "js", with many awesome, light weight but greatly made js plugins, for many functionalities.

**I will continuously improve this repo, as well as that spreadsheet with new copy-paste design and code for you.**

## Author's example projects and info

**Example projects with this repo as a setup, coming soon.**

**Author**: Lazar Erić, lazar.eric1@gmail.com

Let me know, if you have any comments, to make this repo, even better and more powerful for our projects. Cheers, enjoy!
