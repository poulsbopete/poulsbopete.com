export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage?: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'Tales From The Tech',
  description: 'A blog from a Dad in technology having fun',
  coverImage: 'img/blog-cover.png',
  logo: 'img/poulsbopete-logo.png',
  lang: 'en',
  siteUrl: 'https://poulsbopete.com',
  facebook: 'https://www.facebook.com/peter.simkins',
  twitter: 'https://twitter.com/poulsbopete',
  showSubscribe: true,
  mailchimpAction: 'https://poulsbopete.us7.list-manage.com/subscribe/post?u=2c1584234fa56e234efdcbdeb&amp;id=66fc5af42f',
  mailchimpName: 'b_2c1584234fa56e234efdcbdeb_66fc5af42f',
  mailchimpEmailFieldName: 'MERGE0',
  googleSiteVerification: 'GoogleCode',
  footer: 'is based on Gatsby Casper',
};

export default config;
