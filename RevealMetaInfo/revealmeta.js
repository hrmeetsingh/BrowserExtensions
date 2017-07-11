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

  addDivToBody = function(){
      var newdiv = document.createElement('div');
      var keywordstext = document.createElement('p');
      var descriptiontext = document.createElement('p');
      newdiv.id = 'meta-info-div';
      newdiv.className = 'display-meta-info';
      keywordstext.id = 'meta-keyword-text';
      descriptiontext.id = 'meta-description-text';

      keywordstext.textContent = getMetaByName('keywords');
      descriptiontext.textContent = getMetaByName('description');

      newdiv.appendChild(keywordstext);
      newdiv.appendChild(descriptiontext);

      document.getElementsByTagName('body')[0].appendChild(newdiv);
  }

document.body.onload = addDivToBody();