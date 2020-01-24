const rp = require('request-promise');
const $ = require('cheerio');
const fs = require('fs');
//const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
let websiteToCheck = 'https://www.spazionapoli.it/ads.txt';
let stringToFind = 'adyoulike.com, af44b7c1dd5bb716a71d349f85767d10, DIRECT';

rp(websiteToCheck)
  .then(function(adstxt){
    //success!
    console.log(adstxt);
    console.log("===>", stringToFind)
    if (adstxt.includes(stringToFind)) { 
    	console.log("====> ok");
    } else {
      console.log("Non contenuta");
    }
    //console.log($('big > a', html).length);
    //console.log($('big > a', html));
  })
  .catch(function(err){
    //handle error
  });