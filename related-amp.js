
// related post for blogger
// author: http://spot.sneeit.com   
// widget/plugin ID: _140414_
// release note:
// - v1.0: initial release

// TODO

// SETTINGS
var _140414_Post_Number = 3;/*_140414_Post_Number*/
var _140414_Show_Labels = true;/*_140414_Show_Labels*/
var _140414_Show_Comment_Number = true;/*_140414_Show_Comment_Number*/
var _140414_Show_Author = true;/*_140414_Show_Author*/
var _140414_Show_Thumbnail = true;/*_140414_Show_Thumbnail*/
var _140414_Show_Date = false;/*_140414_Show_Date*/
var _140414_Show_Snippet = false;/*_140414_Show_Snippet*/
var _140414_Show_Border = false;/*_140414_Show_Border*/
var _140414_Date_Format = 'dd-mm-yyyy';/*_140414_Date_Format*/
var _140414_Snippet_Length = 150;/*_140414_Snippet_Length*/
var _140414_Default_Thumbnail = '';/*_140414_Default_Thumbnail*/
var _140414_Thumbnail_Height = 100;/*_140414_Thumbnail_Height*/

var _140414_Theme = '';// pending
// if the theme is a string, we will use it as theme developer code with below variable list
// $thumbnail$ $date$ $comment$ $link$ $title$ $author$ $snip$ $labels$ $loop-start$ $loop-end$

var _140414_Host = '';// pending

_s7XfY = ['','http://lorempixel.com/300/300/','-','dd','mm','yyyy','','\u003cimg ','src\u003d\"','\"','','data-thumbnail-src\u003d\"','\"','','\u003ciframe ','src\u003d\"','\"','http://www.youtube.com/watch?v=','','http://www.youtube.com/embed/','','?rel=0','','http://img.youtube.com/vi/','/mqdefault.jpg','blog-','.comments','','category','','title','','subtitle','Anonymous','','http://img1.blogblog.com/img/anon36.png','name','uri','gd$image','http://img1.blogblog.com/img/blank.gif','entry','post-','','published','category','','title','','content','','summary','','','','','comments','link','alternate','replies','Anonymous','','http://img1.blogblog.com/img/anon36.png','name','uri','gd$image','http://img1.blogblog.com/img/blank.gif','','media$thumbnail','thr$total',' ','','','','','thr$in-reply-to','thr$in-reply-to','thr$in-reply-to','/default/','/summary/','?alt=json-in-script','','gd$extendedProperty','blogger.itemClass','pid-','','undefined','undefined','undefined','script','src','https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js','type','text/javascript','head','._140414_related_posts_hook','.widget','._140414_related_posts','link[href*="font-awesome.css"]','link','href','http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css','rel','stylesheet','head','margin-left','0','margin-top','0','h','w','.item-thumbnail','.item-thumbnail','','margin-top:','px!important;','margin-top:0px!important;','margin-left:','px!important;','width:','px!important;','height:','px!important;','style','.item-thumbnail img','height','width','src','/s72-c/','/s72-c/','/s1600/','<img src="','" class="replaced"/>','youtube.com','/default.','/default.','/mqdefault.','<img src="','" class="replaced"/>','.item-thumbnail img','w','h','load','w','h','load','._140414_related_label','url','/search/label/','.related_posts','post_id','','<div class="item item-','">','','undefined','<a href="','" class="item-thumbnail"><img src="','"/></a>','<a href="','" class="date published meta-item"><i class="fa fa-clock-o"></i> ','</a>','<a href="','#comments" class="comments meta-item"><i class="fa fa-comment"></i> ','</a>','<a href="','" class="author meta-item"><i class="fa fa-user"></i> ','</a>','','<a href="/search/label/','" class="label-item">','</a>','<div class="labels">','</div>','<h3 class="title"><a href="','">','</a></h3>','...','<p class="snippet">','</p>','<div class="meta">','</div>','<div class="clear"></div></div>','._140414_related_posts','<div class="inner">','<div class="clear"></div></div>','._140414_related_posts','<div class="clear"></div>','._140414_related_posts','theme-','._140414_related_posts','show-border','._140414_related_posts_hook','.widget','h2','._140414_related_posts','._140414_related_posts','<a href="https://sneeit.com/premium-flexible-related-post-widget-for-blogger-blogspot/" target="blank" style="display: block!important;font-size: 10px!important;font-weight: bold!important;visibility: visible!important;text-align: right;text-indent: 0!important;z-index: 9!important;color: #999!important;" title="Get Related Post Widget for Blogger/Blogspot">bRelated</div>','._140414_related_posts > a','._140414_related_posts','<a href="https://sneeit.com/premium-flexible-related-post-widget-for-blogger-blogspot/" target="blank" style="display: block!important;font-size: 10px!important;font-weight: bold!important;visibility: visible!important;text-align: right;text-indent: 0!important;z-index: 9!important;color: #999!important;" title="Get Related Post Widget for Blogger/Blogspot">bRelated</a>','/feeds/posts/summary/-/','?alt=json-in-script&max-results=0','/feeds/posts/summary/-/','?alt=json-in-script&max-results=','&start-index=',"jsonp","jsonp",'/feeds/posts/summary?alt=json-in-script&max-results=0','/feeds/posts/summary?alt=json-in-script&max-results=','&start-index=',"jsonp","jsonp"];if(_140414_Default_Thumbnail==_s7XfY[0]){_140414_Default_Thumbnail=_s7XfY[1];}function _fAfH(pub_date,format){pub_date=pub_date.split(_s7XfY[2]);date=new Date(pub_date[0],pub_date[1]-1,pub_date[2].substring(0,2));dd=date.getDate();mm=date.getMonth()+1;yyyy=date.getFullYear();format=format.replace(_s7XfY[3],dd);format=format.replace(_s7XfY[4],mm);format=format.replace(_s7XfY[5],yyyy);return format;}function _fXzP(content){var _vTnL=_s7XfY[6];var _vJuN=_s7XfY[7];var _vWfV=_s7XfY[8];var _vZtM=_s7XfY[9];index0=content.indexOf(_vJuN);if(index0!=-1){index1=content.indexOf(_vWfV,index0);if(index0!=-1){index2=content.indexOf(_vZtM,index1+_vWfV.length);if(index0!=-1){_vTnL=content.substring(index1+_vWfV.length,index2);}}}if(_vTnL==_s7XfY[10]){_vJuN=_s7XfY[11];_vWfV=_s7XfY[12];index0=content.indexOf(_vJuN);if(index0!=-1){index1=content.indexOf(_vWfV,index0+_vJuN.length);if(index0!=-1){_vTnL=content.substring(index0+_vJuN.length,index1);}}}if(_vTnL==_s7XfY[13]){_vJuN=_s7XfY[14];_vWfV=_s7XfY[15];_vZtM=_s7XfY[16];index0=content.indexOf(_vJuN);if(index0!=-1){index1=content.indexOf(_vWfV,index0);if(index0!=-1){index2=content.indexOf(_vZtM,index1+_vWfV.length);if(index0!=-1){_vTnL=content.substring(index1+_vWfV.length,index2);_vTnL=_vTnL.replace(_s7XfY[17],_s7XfY[18]);_vTnL=_vTnL.replace(_s7XfY[19],_s7XfY[20]);_vTnL=_vTnL.replace(_s7XfY[21],_s7XfY[22]);_vTnL=_s7XfY[23]+_vTnL+_s7XfY[24];}}}}return _vTnL;}function _fOtC(json){var _vHhN=new Object();var _vKsK=/<\S[^>]*>/g;_vHhN.id=json.feed.id.$t;key=_s7XfY[25];index=_vHhN.id.indexOf(key);_vHhN.id=_vHhN.id.substring(index+key.length);_vHhN.id=_vHhN.id.replace(_s7XfY[26],_s7XfY[27]);_vHhN.cate=new Array();if(_s7XfY[28] in json.feed){for(_vPuX=0;_vPuX<json.feed.category.length;_vPuX++){_vHhN.cate[_vPuX]=json.feed.category[_vPuX].term;}}_vHhN.title=_s7XfY[29];if(_s7XfY[30] in json.feed){_vHhN.title=json.feed.title.$t;}_vHhN.subtitle=_s7XfY[31];if(_s7XfY[32] in json.feed){_vHhN.subtitle=json.feed.subtitle.$t;}_vHhN.admin=new Object();_vHhN.admin.name=_s7XfY[33];_vHhN.admin.uri=_s7XfY[34];_vHhN.admin.avatar=_s7XfY[35];if(_s7XfY[36] in json.feed.author[0]){_vHhN.admin.name=json.feed.author[0].name.$t;}if(_s7XfY[37] in json.feed.author[0]){_vHhN.admin.uri=json.feed.author[0].uri.$t;}if(_s7XfY[38] in json.feed.author[0]){if(json.feed.author[0].gd$image.src!=_s7XfY[39]){_vHhN.admin.avatar=json.feed.author[0].gd$image.src;}}_vHhN.total_entry=Number(json.feed.openSearch$totalResults.$t);_vHhN.start_index=Number(json.feed.openSearch$startIndex.$t);_vHhN.item_per_page=Number(json.feed.openSearch$itemsPerPage.$t);_vHhN.entry_number=0;if(_s7XfY[40] in json.feed){_vHhN.entry_number=json.feed.entry.length;}_vHhN.entry=new Array();for(_vPuX=0;_vPuX<_vHhN.entry_number;_vPuX++){_vHhN.entry[_vPuX]=new Object();_vAfF=new Object();entry=json.feed.entry[_vPuX];_vAfF.id=entry.id.$t;key=_s7XfY[41];index=_vAfF.id.indexOf(key);_vAfF.id=_vAfF.id.substring(index+key.length);_vAfF.published=_s7XfY[42];if(_s7XfY[43] in entry){_vAfF.published=entry.published.$t;}_vAfF.cate=new Array();if(_s7XfY[44] in entry){for(_vXgK=0;_vXgK<entry.category.length;_vXgK++){_vAfF.cate[_vXgK]=entry.category[_vXgK].term;}}_vAfF.title=_s7XfY[45];if(_s7XfY[46] in entry){_vAfF.title=entry.title.$t;}_vAfF.content=_s7XfY[47];if(_s7XfY[48] in entry){_vAfF.content=entry.content.$t;}_vAfF.summary=_s7XfY[49];if(_s7XfY[50] in entry){_vAfF.summary=entry.summary.$t;}if(_vAfF.summary==_s7XfY[51]){_vAfF.summary=_vAfF.content.replace(_vKsK,_s7XfY[52]);}if(_vAfF.content==_s7XfY[53]){_vAfF.content=_vAfF.summary;}_vAfF.link=_s7XfY[54];_vAfF.reply_label=_s7XfY[55];if(_s7XfY[56] in entry){for(_vXgK=0;_vXgK<entry.link.length;_vXgK++){if(entry.link[_vXgK].rel==_s7XfY[57]){_vAfF.link=entry.link[_vXgK].href;}if(entry.link[_vXgK].rel==_s7XfY[58]){_vAfF.reply_label=entry.link[_vXgK].title;}}}_vAfF.author=new Object();_vAfF.author.name=_s7XfY[59];_vAfF.author.uri=_s7XfY[60];_vAfF.author.avatar=_s7XfY[61];a0=entry.author[0];if(_s7XfY[62] in a0){_vAfF.author.name=a0.name.$t;}if(_s7XfY[63] in a0){_vAfF.author.uri=a0.uri.$t;}if(_s7XfY[64] in a0){if(a0.gd$image.src!=_s7XfY[65]){_vAfF.author.avatar=a0.gd$image.src;}}_vAfF.thumbnail=_s7XfY[66];if(_s7XfY[67] in entry){_vAfF.thumbnail=entry.media$thumbnail.url;}_vAfF.reply_number=0;if(_s7XfY[68] in entry){_vAfF.reply_number=Number(entry.thr$total.$t);}_vAfF.reply_label=_vAfF.reply_label.replace(_vAfF.reply_number+_s7XfY[69],_s7XfY[70]);_vAfF.reply_to=_s7XfY[71];_vAfF.reply_json=_s7XfY[72];_vAfF.reply_title=_s7XfY[73];if(_s7XfY[74] in entry){_vAfF.reply_to=entry[_s7XfY[75]].href;_vAfF.reply_json=entry[_s7XfY[76]].source;_vAfF.reply_json=_vAfF.reply_json.replace(_s7XfY[77],_s7XfY[78]);_vAfF.reply_json=_vAfF.reply_json+_s7XfY[79];}_vAfF.pid=_s7XfY[80];if(_s7XfY[81] in entry){for(_vXgK=0;_vXgK<entry.gd$extendedProperty.length;_vXgK++){if(entry.gd$extendedProperty[_vXgK].name==_s7XfY[82]){_vAfF.pid=entry.gd$extendedProperty[_vXgK].value;}}}_vAfF.pid=_vAfF.pid.replace(_s7XfY[83],_s7XfY[84]);_vHhN.entry[_vPuX]=_vAfF;}return _vHhN;}function _fJkB(require_count,entry_count){if(require_count>=entry_count){return 1;}var _vSuV=1;var _vMbL=entry_count-require_count+1;var _vXaA=Math.floor(Math.random()*(_vMbL-_vSuV+1))+_vSuV;return _vXaA;}function _fFfC(_vSuV,_vMbL){if(_vSuV>_vMbL){var _vAfF=_vMbL;_vMbL=_vSuV;_vSuV=_vAfF;}return Math.floor(Math.random()*(_vMbL-_vSuV+1))+_vSuV;}if(typeof(jquery_included)==_s7XfY[85]){jquery_included=false;}if(typeof(_140414)==_s7XfY[86]){_140414=false;}if(!_140414&&_140414_Post_Number){_140414=true;function _fVtF(){if(typeof(jQuery)==_s7XfY[87]){if(!jquery_included){jquery_included=true;var _vFaX=document.createElement(_s7XfY[88]);_vFaX.setAttribute(_s7XfY[89],_s7XfY[90]);_vFaX.setAttribute(_s7XfY[91],_s7XfY[92]);document.getElementsByTagName(_s7XfY[93])[0].appendChild(_vFaX);}setTimeout(function(){_fVtF();},50);}else{$(function(){$(_s7XfY[94]).each(function(){$(this).parents(_s7XfY[95]).hide();});if($(_s7XfY[96]).length==0){return;}if(!($(_s7XfY[97]).length)){_vFaX=document.createElement(_s7XfY[98]);_vFaX.setAttribute(_s7XfY[99],_s7XfY[100]);_vFaX.setAttribute(_s7XfY[101],_s7XfY[102]);document.getElementsByTagName(_s7XfY[103])[0].appendChild(_vFaX);}function _fMmS(img){jQuery(img).css(_s7XfY[104],_s7XfY[105]);jQuery(img).css(_s7XfY[106],_s7XfY[107]);var _vSwU=Number(jQuery(img).attr(_s7XfY[108]));var _vSrI=Number(jQuery(img).attr(_s7XfY[109]));var _vTqB=Number(jQuery(img).parents(_s7XfY[110]).height());var _vRbM=Number(jQuery(img).parents(_s7XfY[111]).width());var _vYkO=_vTqB;var _vEhT=(_vSrI/_vSwU)*_vYkO;var _vQmV=_s7XfY[112];if(_vEhT<_vRbM){_vEhT=_vRbM;_vYkO=(_vSwU/_vSrI)*_vEhT;var _vBeQ=-((_vYkO-_vTqB)/2);if(_vYkO/_vEhT<1.3){_vQmV+=_s7XfY[113]+_vBeQ+_s7XfY[114];}else{_vQmV+=_s7XfY[115];}}else{var _vQqM=-((_vEhT-_vRbM)/2);_vQmV+=_s7XfY[116]+_vQqM+_s7XfY[117];}_vQmV+=_s7XfY[118]+_vEhT+_s7XfY[119];_vQmV+=_s7XfY[120]+_vYkO+_s7XfY[121];jQuery(img).attr(_s7XfY[122],_vQmV);}function _fBdZ(){jQuery(_s7XfY[123]).each(function(){jQuery(this).removeAttr(_s7XfY[124]);jQuery(this).removeAttr(_s7XfY[125]);var _vTnL=jQuery(this).attr(_s7XfY[126]);if(_vTnL!=null){if(_vTnL.indexOf(_s7XfY[127])!=-1){_vTnL=_vTnL.replace(_s7XfY[128],_s7XfY[129]);jQuery(this).after(_s7XfY[130]+_vTnL+_s7XfY[131]);jQuery(this).remove();}else if(_vTnL.indexOf(_s7XfY[132])!=-1){if(_vTnL.indexOf(_s7XfY[133])!=-1){_vTnL=_vTnL.replace(_s7XfY[134],_s7XfY[135]);jQuery(this).after(_s7XfY[136]+_vTnL+_s7XfY[137]);jQuery(this).remove();}}}});jQuery(_s7XfY[138]).each(function(){if(jQuery(this).attr(_s7XfY[139])&&jQuery(this).attr(_s7XfY[140])){_fMmS(this);}else{jQuery(this).on(_s7XfY[141],function(){var _vFeH=this.width;var _vFkS=this.height;jQuery(this).attr(_s7XfY[142],_vFeH);jQuery(this).attr(_s7XfY[143],_vFkS);_fMmS(this);}).each(function(){if(this.complete){jQuery(this).trigger(_s7XfY[144]);}this.src=this.src;});}});}var _vFgA=new Array();var _vSzK=0;var _vZxB=new Array();var _vLjI=0;$(_s7XfY[145]).each(function(){var _vKqP=$(this).attr(_s7XfY[146]);var _vPsW=$(this).html();_vKqP=_vKqP.split(_s7XfY[147])[1];_vFgA[_vSzK]=new Object();_vFgA[_vSzK].url=_vKqP;_vFgA[_vSzK].name=_vPsW;_vSzK++;});_vSzK=0;_140414_Post_Number++;function _fXrW(entries){if(entries.length<2){return;}var _vByY=false;var _vNyF=$(_s7XfY[148]).attr(_s7XfY[149]);var _vZoS=entries.length;for(var _vPuX=0;_vPuX<_vZoS-1;_vPuX++){if(_vNyF==entries[_vPuX].id&&(!_vByY)){_vByY=true;}if(_vByY){entries[_vPuX]=entries[_vPuX+1];}}if(_vByY){_vZoS=_vZoS-1;}var _vOvN=0;_140414_Post_Number=_140414_Post_Number-1;var _vZeE=_vZoS-_140414_Post_Number;if(_140414_Post_Number<_vZoS){_vOvN=_fFfC(0,_vZoS-_140414_Post_Number);}var _vZuU=_s7XfY[150];var _vSxR=0;for(var _vPuX=_vOvN;_vPuX<_vOvN+_140414_Post_Number&&_vPuX<_vZoS;_vPuX++,_vSxR++){var _vQqT=entries[_vPuX];_vZuU+=_s7XfY[151]+_vSxR+_s7XfY[152];var _vGeT=_vQqT.thumbnail;if(_vGeT===_s7XfY[153]||typeof(_vGeT)===_s7XfY[154]){_vGeT=_140414_Default_Thumbnail;}if(_vGeT){_vGeT=_s7XfY[155]+_vQqT.link+_s7XfY[156]+_vGeT+_s7XfY[157];}var _vElD=_fAfH(_vQqT.published,_140414_Date_Format);_vElD=_s7XfY[158]+_vQqT.link+_s7XfY[159]+_vElD+_s7XfY[160];var _vGvU=_s7XfY[161]+_vQqT.link+_s7XfY[162]+_vQqT.reply_number+_s7XfY[163];var _vPwZ=_s7XfY[164]+_vQqT.author.uri+_s7XfY[165]+_vQqT.author.name+_s7XfY[166];var _vYbZ=_s7XfY[167];for(var _vXgK=0;_vXgK<_vQqT.cate.length;_vXgK++){_vYbZ+=_s7XfY[168]+_vQqT.cate[_vXgK]+_s7XfY[169]+_vQqT.cate[_vXgK]+_s7XfY[170];}if(_vYbZ){_vYbZ=_s7XfY[171]+_vYbZ+_s7XfY[172];}var _vSaG=_s7XfY[173]+_vQqT.link+_s7XfY[174]+_vQqT.title+_s7XfY[175];if(_vQqT.summary.length>_140414_Snippet_Length){_vQqT.summary=_vQqT.summary.substring(0,_140414_Snippet_Length)+_s7XfY[176];}var _vPkQ=_s7XfY[177]+_vQqT.summary+_s7XfY[178];if(_140414_Show_Thumbnail){_vZuU+=_vGeT;}_vZuU+=_vSaG;var _vQxR=_s7XfY[179];if(_140414_Show_Author){_vQxR+=_vPwZ;}if(_140414_Show_Comment_Number){_vQxR+=_vGvU;}if(_140414_Show_Date){_vQxR+=_vElD;}_vQxR+=_s7XfY[180];_vZuU+=_vQxR;if(_140414_Show_Snippet){_vZuU+=_vPkQ;}if(_140414_Show_Labels){_vZuU+=_vYbZ;}_vZuU+=_s7XfY[181];}$(_s7XfY[182]).html(_s7XfY[183]+_vZuU+_s7XfY[184]);_fBdZ();$(_s7XfY[185]).append(_s7XfY[186]);$(_s7XfY[187]).addClass(_s7XfY[188]+_140414_Post_Number);if(_140414_Show_Border){$(_s7XfY[189]).addClass(_s7XfY[190]);}$(_s7XfY[191]).each(function(){$(this).parents(_s7XfY[192]).find(_s7XfY[193]).prependTo($(_s7XfY[194]));});$(_s7XfY[195]).append(_s7XfY[196]);setTimeout(function(){if($(_s7XfY[197]).length==0){$(_s7XfY[198]).append(_s7XfY[199]);}},10000);}function _fLjE(){for(var _vPuX=0;_vPuX<_vLjI-1;_vPuX++){for(var _vXgK=_vPuX+1;_vXgK<_vLjI;_vXgK++){if(_vZxB[_vPuX].id==_vZxB[_vXgK].id){_vLjI=_vLjI-1;_vZxB[_vXgK]=_vZxB[_vLjI];_vXgK=_vXgK-1;}}}}function _fGcS(){$.get(_s7XfY[200]+_vFgA[_vSzK].url+_s7XfY[201],function(json){var _vBhT=_fOtC(json);$.get(_s7XfY[202]+_vFgA[_vSzK].url+_s7XfY[203]+(_140414_Post_Number+_vLjI)+_s7XfY[204]+_fJkB(_140414_Post_Number+_vLjI,_vBhT.total_entry),function(json){_vSzK++;_vBhT=_fOtC(json);for(var _vPuX=0;_vPuX<_vBhT.entry.length;_vPuX++,_vLjI++){_vZxB[_vLjI]=_vBhT.entry[_vPuX];}_fLjE();if(_vLjI>=_140414_Post_Number||_vSzK>=_vFgA.length){_fXrW(_vZxB);}else{_fGcS();}},_s7XfY[205]);},_s7XfY[206]);}if(_vFgA.length){_fGcS();}else{$.get(_s7XfY[207],function(json){_vBhT=_fOtC(json);if(_vBhT.total_entry==0){return;}$.get(_s7XfY[208]+_140414_Post_Number+_s7XfY[209]+_fJkB(_140414_Post_Number,_vBhT.total_entry),function(json){_vBhT=_fOtC(json);for(var _vPuX=0;_vPuX<_vBhT.entry.length&&_vPuX<_140414_Post_Number;_vPuX++){_vZxB[_vPuX]=_vBhT.entry[_vPuX];}_fXrW(_vZxB);},_s7XfY[210]);},_s7XfY[211]);}});}}_fVtF();}
    
