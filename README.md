# Poulsbo Pete Website

Yes, this site is based on a port of [Casper](https://github.com/TryGhost/Casper) v3 a theme from [Ghost](https://ghost.org/) for [GatsbyJS](https://www.gatsbyjs.org/) using [TypeScript](https://www.typescriptlang.org/). 

This is my first GatsbyJS website and I might change the theme and/or just write my own from scratch. My goal is a simple repeatable process with:

1. **Low cost** to run and maintain. Everything is hosted on AWS S3 and CloudFront CDN, with github
2. **Easily add new posts** from anywhere. Use any GIT client to change content and have it automatically uploaded to AWS S3. I want to do this from my iPhone when traveling.
3. **Fast and secure**. I don’t want to worry about performance or security. No updating servers, certificates, etc. See goal number 1, keep it low cost!

# How to

Was this hard to set up? No, not really. I followed the Gatsby [quick start](https://www.gatsbyjs.com/docs/quick-start) guide.  Once I had my website running locally, I followed a blog post on how to [set up Gatsby on S3](https://blog.elantha.com/gatsby-s3-cloudfront/). Follow the three steps and you get continuous deployment using GIT automation, pushing your website to S3.

# What’s next?

I’m going to start with:
1. Adding New Relic client-side monitoring
2. Testing different mobile clients for the blog posts
3. Update this Readme with any issues or surprises that I run into. 

