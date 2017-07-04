/**
 * Returns document meta description
 * right now, it returns only Meta tags with name "Description" and "Keywords" only
 * but can be extended to get other meta tags by names
*/

getMetaByName = function(name) {
  var metas = document.getElementsByTagName('meta');
  for(var i in metas) {
    if (typeof(metas[i].name) != 'undefined' && metas[i].name.toLowerCase() == name) {
      return metas[i].content;
    }   
  }
  return '';
}

document.body.innerHTML = document.body.innerHTML + '<div style="position: fixed;left: 5%;right: 5%;bottom: 0;color: #ffffff;background: #015864;z-index: 5;text-align: center;font-size: 26px;opacity: 0.8;border-style: dashed;"><p><u>Meta Information</u></p><p>Description: '+getMetaByName('description')+'</p><p>Keywords: '+getMetaByName('keywords')+'</p></div>';