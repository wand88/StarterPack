# StarterPack
StarterPack is a setup for **starting each new, efficient, custom web project**.

Packing **best practice** grid, very useful mixins, color palette map and function, few, most useful js plugins, and more.

INDEX.HTML + CSS + JS: **157kb** *(without Google font and images).*

In general, this setup, is *all you need for 85% of web projects*.

Easily **create solid website, under 500kb in total**,  with awesomely documented, and efficient code.

Start of your custom new web project in few seconds, from ground up, with great setup for large scale projects, to small web projects.

> I've created it to automatize the process of starting each **new, *purely custom*, web development project**. Without having to use parts of *Boostrap* in order to speed it up, or to *copy-paste or re-create grid, mixins, functions from previous projects*. As well, as *setup package.json and Grunt file* all over again, every time.

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
    * That's it, you have clean setup to start coding.
    * Enjoy. :)
## All features explained
I will explain all the features, by explaining what is in the folders and files, as well as methodology I use to name classes.

1. **Folder and files organization**

For documentation I use very flexible structure, which is easily scalable for large projects, as well as small ones.

It's based on [my custom SMACSS methodology](https://docs.google.com/spreadsheets/d/1TCHzqey9PGPfZpwy6A-H0sdRz8KeHn0S8zKwaunZKPM/edit#gid=1868618249).

![alt text](https://lazareric.com/img/1.png "Documentation tree")

1. Documentation:
    * Folders in root folder: **css**,  **js**,  **img**,  **node_modules** and  **SASS** (+ .sass-cache, non important).
    * Files in root folder:  **index.html**,  **package.json**,  **gruntfile.js** (+ licence, readme and .gitignore, non important).
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
    
    * package.json
    + Basic setup of package.json, including all necessary add-ons to Grunt, like code minifier and autoprefixer.
    
    * Gruntfile.js
    + Watches all the files in SCSS folder.
    + Minifies and converts all the code from **style.scss > style.css**
    + Also, while writing CSS, it adds all necessary prefixes for cross-browser compatibility (last 8 versions).
    ___
    Folders in root:
    
    * CSS
    
    + It only contains style.css, which is the final product of converted and minified SCSS code. It's linked in index.html.
    
    * IMG
    
    + Aasd


