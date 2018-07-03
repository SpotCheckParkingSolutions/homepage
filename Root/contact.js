/*
  This script Dynamically renders the "contact-us" information
  in order to deter crawlers and bots from getting the email email
  and sending spam. Idea credits to Joe Maller (http://joemaller.com/js-mailer.shtml)
*/

// find div to fill contact info with
var contactUs = document.getElementsByClassName("contact-us");
// assemble email address piece-wise
var emailToken1 = "support"
var emailToken2 = "@"
var emailToken3 = "spotcheckparking"
var emailToken4 = ".com"
var emailAddress = emailToken1 + emailToken2 + emailToken3 + emailToken4;
// define rest of the content
var contactUsMsg = "Contact us at ";
// fill div with content
document.write("<div class='contact-us'>" + contactUsMsg + "<a class='contact-us-link' href=mailto:" + emailAddress + ">" + emailAddress + "</a>" + "</div>");
