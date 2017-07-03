# RevealMetaInfo

**This add-on injects JavaScript into web pages. It modifies the `document.body` element to display information from `document.head` section and displays on the UI. Purpose of writing this is to facilitate manual and automated testing of webpage's content which is not visible and complex to assert by automated tests particularly**

## What it does

This extension just includes:

* a content script, "revealmeta.js", that is injected into any pages
under ".com/", ".net/" or any of their subdomains

A div is added at the bottom of page to show the values of "Description" and "Keywords" meta tags.

## ToDo

Can be extended to fetch other information as well and display on the webpage.
