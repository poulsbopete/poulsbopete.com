# Poulsbo Pete Website

Yes, this site is based on the [Gatsby E-commerce Tutorial](https://www.gatsbyjs.com/tutorial/ecommerce-tutorial/).

This is my first GatsbyJS website using Stripe's [client only checkout](https://stripe.com/docs/payments/checkout/client-only). Running [Poulsbo Pete](https://poulsbopete.com) on S3 with CloudFront has several advantages:

1. **Low cost** to run and maintain. Everything is hosted on AWS S3 and CloudFront CDN, with github
2. **Easily add new posts** from anywhere. Use any GIT client to change content and have it automatically uploaded to AWS S3. I want to do this from my iPhone when traveling.
3. **Fast and secure**. I don’t want to worry about performance or security. No updating servers, certificates, etc. See goal number 1, keep it low cost!

Leveraging Stripes client only checkout provides even more e-commerce functionality including:
* Security inherent in static sites.
* Blazing fast performance when your pages are converted from React into static files.
* No server component required with Stripe’s client-only Checkout.
* Cost-efficient hosting of static sites.

# Overview
This static application is written in Javascript, hosted on S3 in a serverless configuration. No need for a database or payment processing applications allows me to leverage payment APIs offered by Stripe. I am securely collecting and processing payment information from customers without storing any of the customer information. Leveraging Stripe's hosted checkout doesn't require any backend component.

When you load the page, the catalog is loaded from the Stripe source plugin, which uses the https://stripe.com/docs/upgrades#2020-08-27 API.


# How I approached the problem
My goal was to have a basic storefront with a product catalog, shopping cart, payment processing, multiple prices, tax, etc. I wanted to keep the site very quick and easy to update.

# Why did I pick GatsbyJS?

# What's next?
