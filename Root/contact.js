
const renderEmail = ()=>{
  /*
    This script Dynamically renders the "contact-us" information
    in order to deter crawlers and bots from getting the email email
    and sending spam. Idea credits to Joe Maller (http://joemaller.com/js-mailer.shtml)
  */
  // find div to fill contact info with
  const contactUs = document.getElementsByClassName("contact-us");
  // assemble email address piece-wise
  const emailToken1 = "support"
  const emailToken2 = "@"
  const emailToken3 = "spotcheckparking"
  const emailToken4 = ".com"
  const emailAddress = emailToken1 + emailToken2 + emailToken3 + emailToken4;
  // define rest of the content
  const contactUsMsg = "Contact us at ";
  // fill div with content
  return "<div class='contact-us'>" + contactUsMsg + "<a class='contact-us-link' href=mailto:" + emailAddress + ">" + emailAddress + "</a>" + "</div>"
}