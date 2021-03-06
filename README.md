# /r/Anarchism Stylesheet

The Reddit stylesheet for the /r/Anarchism subreddit.


## Installation

You can install dependencies using npm: 

```
npm install --save-dev gulp
npm install --save-dev gulp-clean-css
npm install --save-dev gulp-rename
npm install --save-dev gulp-sass
```

If you have never worked with Gulp before, feel free to do some research, maybe check-out this guide:
https://travismaynard.com/writing/getting-started-with-gulp

If this list of dependencies is out of date, look at the beginning of the `gulpfile.js` and look through the `require` statements and see whether you are missing something from that list.
You should especially do this if you have installed the above with npm, but you keep getting the `Error: Cannot find module` error when you try to run a gulp job.

## Gulp Jobs

There are various jobs setup in the `gulpfile.js`. A job does something for you relevant to the project.

Here are the gulp jobs and what they do:

- `gulp default` runs `gulp sass` and `gulp minify-css` sequentially.
- `gulp sass` will convert the Sass files into CSS files, e.g. creating `build/stylesheets/main.css` from `source/stylesheets/main.scss`. 
- `gulp minify-css` will [minify](https://en.wikipedia.org/wiki/Minification_(programming)) that CSS for you (creating `build/minified/main.min.css`). 
- `gulp watch` will watch for changes to the Sass files and run `gulp sass` and `gulp minify-css` whenever a change is detected. 


## Roadmap of the Directories

[Here](http://thesassway.com/beginner/how-to-structure-a-sass-project) is an excellent overview of how a Sass project should be structured. 

We try to follow these suggestions in ways that help us, but we do not follow the advice religiously. 

That said, here is a layout of the various files and directories, and their purposes.

Under the main project you will notice two directories: `source` and `build`. 
`source` is where you will find the Sass code you will want to work on. 
Under `build` you will find the artifacts produced by the gulp jobs, e.g. the minified CSS that should be entered as [the subreddit's stylesheet](https://www.reddit.com/r/Anarchism/about/stylesheet/). 
You should never manually change files under `build` - all `build` files should be generated by the gulp jobs.

Under `source` are directories for the different kinds of files.

`images` is for storing images, obviously. 
Reddit requires we manually upload images for the subreddit, so the only purpose of the directory is to keep track of the changes to images (so we can retrieve old images if accidentally deleted, etc.). 
In a real website's project, those images would be referenced directly in the Sass and packaged with the CSS to be hosted for the webpage.

`stylesheets` is where you will find the Sass files that make up the subreddit's styles. 
There are directories for various components or modules of the Sass styles, and a `main.scss` which [imports](http://sass-lang.com/guide#topic-5) those other Sass files to build the CSS. 

## How to Update the Subreddit's Styles

0. Run `gulp default` or alternatively, run `gulp sass` and `gulp minify-css` from the terminal.
0. Open up `build/minified/main.min.css` and copy the plaintext file into your clipboard (select all and copy)
0. Go to https://www.reddit.com/r/Anarchism/about/stylesheet/
0. Paste the minified CSS in your clipboard into the proper field (where the styles are). 
0. Preview the changes and make sure you didn't break anything.
0. Submit your changes.
