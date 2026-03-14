//- -- Copyright 1998 pluto@iconnect.de --
//-
//- Coauthor kdoberstein@js-webShop.com
function Xeb() {
ADMIN_TOP = "<body background='../gif/chip.jpg' bgcolor=#FFFFFF>";
ADMIN_BOT = "";
PAYCURR = '';
VAL = '';
rounds = 0;
FONT_A_SMALL = "<FONT face='Arial,Helvetica,Swiss,sans-serif' size=-1 color=#CC0000>";
FONT_A = "<FONT face='Arial,Helvetica,Swiss,sans-serif' color=#CC0000>";
FONT_A_BIG = "<FONT face='Arial,Helvetica,Swiss,sans-serif' size=+1 color=#CC0000>";
for (lang in s.language){
eval(lang +" = s.language[lang]");
}
if (!navigator.appName == "Netscape" && parseFloat(navigator.appVersion) < 4.06){
alert("Bitte benutzen Sie zum Erstellen eines Shops Netscape 4.06 oder neuer!");
ADMIN = false;
return;
}
if (MAC)
alert("Ein Mac!\n\n Leider kommt es auf ** manchen ** Mac's zu Problemen\nbeim abspeichern. Unter 8.5 war es besonders schwierig.\nBitte testen Sie erst das Abspeichern bevor Sie\nEinstellungen vornehmen!\n\n Danke.");
XebTr();
}
function Xgy(){
if (!Q['version']) Q['version'] = '1.0.0';
if (Q['version'] == '1.0.0' || Q['version'] == '1.0.0beta1' || Q['version'] == '1.0.0beta4'){
alert("Update auf 1.0.1");
if (Q['ai'])
Q['action'] = Q['ai'];
if (Q['aj'])
Q['enctype'] = Q['aj'];
Q['version'] = '1.0.1';
}
if (Q['version'] == '1.0.1'){
alert("Update auf 1.1b");
if (Q['ai'])
Q['ai'] = 'do_not_save';
if (Q['aj'])
Q['aj'] = 'do_not_save';
if (!Q['navgifs_basket'])
Q['navgifs_basket'] = '';
if (!Q['navgif_basket'])
Q['navgif_basket'] = '';
Q['version'] = '1.1b';
}
if (Q['version'] == '1.1b'){
alert("Update auf 1.1");
Q['version'] = '1.1';
}
if (Q['version'] == '1.1' || Q['version'] == '1.2b' ){
alert("Update auf 1.5b");
ni = Q.x.length + 1;
Q['x'][ni] = new Array();
Q['x'][ni]['name'] = 'Per%20ccard.net';
Q['x'][ni]['value'] = 'undefined';
Q['x'][ni]['y'] = 'undefined';
Q['x'][ni]['msg'] = 'Nach%20dem%20Abschicken%20werden%20Sie%20nach%20Ihren%20Kreditkarten%20Informationen%20gefragt.%20Die%20&Uuml;bertragung%20erfolgt%20verschl%26uuml%3Bsselt%20%28SSL%29.';
Q['x'][ni]['activ'] = 'n';
Q['x'][ni]['action'] = 'https%3A//secure.ccard.net/js_demo/basket.cgi';
Q['x'][ni]['enctype'] = 'application/x-www-form-urlencoded';
Q['x'][ni]['zit'] = 'hidden';
Q['x'][ni]['zin'] = 'job_nr';
Q['x'][ni]['ziv'] = 'js_001';
Q['x'][ni]['eva'] = 'writeln%28%22%3CINPUT%20type%3Dhidden%20value%3D1%20name%3DSumme%23%22+%20price%20+%22%3E%22%29';
Q['x'][ni]['curr'] = 'DEM';
Q['B'] = new Array();
Q['version'] = '1.5b';
}
if (Q['version'] == '1.5b' || Q['version'] == '1.5c' || Q['version'] == '1.5'){
alert("Update auf 1.5d");
if (!Q['s_on'])
Q['s_on'] = 'gif/status_on.gif';
if (!Q['s_off'])
Q['s_off'] = 'gif/status_off.gif';
if (!admin['ind'])
admin['ind'] = 'index.htm';
Q['version'] = '1.5d';
}
if (Q['version'] == '1.5d' ){
alert("Update auf 1.6a");
if (!Q['cookie'])
Q['cookie'] = 'gif/cookie.gif';
Q['version'] = '1.6a';
}
if (Q['version'] == '1.6a' ){
alert("Update auf 1.6");
Q['version'] = '1.6';
}
}
function XebTr(){
tr = new Array();
tr['&iexcl;'] = new Array('¡','­','­','Á');
tr['&cent;'] = new Array('¢','½','›','¢');
tr['&pound;'] = new Array('£','œ','œ','£');
tr['&curren;'] = new Array('¤','Ï','¤','Û');
tr['&yen;'] = new Array('¥','¾','','´');
tr['&brvbar;'] = new Array('¦','Ý','¦','¦');
tr['&sect;'] = new Array('§','õ','','¤');
tr['&uml;'] = new Array('¨','ù','¨','¬');
tr['&copy;'] = new Array('©','¸','©','©');
tr['&ordf;'] = new Array('ª','¦','¦','»');
tr['&laquo;'] = new Array('«','®','®','Ç');
tr['&not;'] = new Array('¬','ª','ª','Â');
tr['&shy;'] = new Array('­','­','­','Ð');
tr['&reg;'] = new Array('®','©','®','¨');
tr['&macr;'] = new Array('¯','î','¯','ø');
tr['&deg;'] = new Array('°','ø','ø','¡');
tr['&plusmn;'] = new Array('±','ñ','ñ','±');
tr['&sup2;'] = new Array('²','ý','ý','²');
tr['&sup3;'] = new Array('³','ü','³','³');
tr['&acute;'] = new Array('´','ï','´','«');
tr['&micro;'] = new Array('µ','µ','µ','µ');
tr['&para;'] = new Array('¶','ô','¶','¦');
tr['&middot;'] = new Array('·','ú','ú','á');
tr['&cedil;'] = new Array('¸','÷','¸','ü');
tr['&sup1;'] = new Array('¹','û','¹','¹');
tr['&ordm;'] = new Array('º','§','§','¼');
tr['&raquo;'] = new Array('»','¯','¯','È');
tr['&frac14;'] = new Array('¼','¬','¬','¼');
tr['&frac12;'] = new Array('½','«','«','½');
tr['&frac34;'] = new Array('¾','ó','¾','¾');
tr['&iquest;'] = new Array('¿','¨','¨','À');
tr['&Agrave;'] = new Array('À','·','À','Ë');
tr['&Aacute;'] = new Array('Á','µ','Á','ç');
tr['&Acirc;'] = new Array('Â','¶','Â','å');
tr['&Atilde;'] = new Array('Ã','Ç','Ã','Ì');
tr['&Auml;'] = new Array('Ä','Ž','Ž','€');
tr['&Aring;'] = new Array('Å','','','');
tr['&AElig;'] = new Array('Æ','’','’','®');
tr['&Ccedil;'] = new Array('Ç','€','€','‚');
tr['&Egrave;'] = new Array('È','Ô','È','é');
tr['&Eacute;'] = new Array('É','','','ƒ');
tr['&Ecirc;'] = new Array('Ê','Ò','Ê','æ');
tr['&Euml;'] = new Array('Ë','Ó','Ë','è');
tr['&Igrave;'] = new Array('Ì','Þ','Ì','í');
tr['&Iacute;'] = new Array('Í','Ö','Í','ê');
tr['&Icirc;'] = new Array('Î','×','Î','ë');
tr['&Iuml;'] = new Array('Ï','Ø','Ï','ì');
tr['&ETH;'] = new Array('Ð','Ñ','Ð','Ð');
tr['&Ntilde;'] = new Array('Ñ','¥','¥','„');
tr['&Ograve;'] = new Array('Ò','ã','Ò','ñ');
tr['&Oacute;'] = new Array('Ó','à','Ó','î');
tr['&Ocirc;'] = new Array('Ô','â','Ô','ï');
tr['&Otilde;'] = new Array('Õ','å','Õ','Í');
tr['&Ouml;'] = new Array('Ö','™','™','…');
tr['&times;'] = new Array('×','ž','×','×');
tr['&Oslash;'] = new Array('Ø','','Ø','¯');
tr['&Ugrave;'] = new Array('Ù','ë','Ù','ô');
tr['&Uacute;'] = new Array('Ú','é','Ú','ò');
tr['&Ucirc;'] = new Array('Û','ê','Û','ó');
tr['&Uuml;'] = new Array('Ü','š','š','†');
tr['&Yacute;'] = new Array('Ý','í','Ý','Ý');
tr['&THORN;'] = new Array('Þ','è','Þ','Þ');
tr['&szlig;'] = new Array('ß','á','á','§');
tr['&agrave;'] = new Array('à','…','…','ˆ');
tr['&aacute;'] = new Array('á',' ',' ','‡');
tr['&acirc;'] = new Array('â','ƒ','ƒ','‰');
tr['&atilde;'] = new Array('ã','Æ','ã','‹');
tr['&auml;'] = new Array('ä','„','„','Š');
tr['&aring;'] = new Array('å','†','†','Œ');
tr['&aelig;'] = new Array('æ','‘','‘','¾');
tr['&ccedil;'] = new Array('ç','‡','‡','');
tr['&egrave;'] = new Array('è','Š','Š','');
tr['&eacute;'] = new Array('é','‚','‚','Ž');
tr['&ecirc;'] = new Array('ê','ˆ','ˆ','');
tr['&euml;'] = new Array('ë','‰','‰','‘');
tr['&igrave;'] = new Array('ì','','','“');
tr['&iacute;'] = new Array('í','¡','¡','’');
tr['&icirc;'] = new Array('î','Œ','Œ','”');
tr['&iuml;'] = new Array('ï','‹','‹','•');
tr['&eth;'] = new Array('ð','Ð','ð','ð');
tr['&ntilde;'] = new Array('ñ','¤','¤','–');
tr['&ograve;'] = new Array('ò','•','•','˜');
tr['&oacute;'] = new Array('ó','¢','¢','—');
tr['&ocirc;'] = new Array('ô','“','“','™');
tr['&otilde;'] = new Array('õ','ä','õ','›');
tr['&ouml;'] = new Array('ö','”','”','š');
tr['&divide;'] = new Array('÷','ö','ö','Ö');
tr['&oslash;'] = new Array('ø','›','ø','¿');
tr['&ugrave;'] = new Array('ù','—','—','');
tr['&uacute;'] = new Array('ú','£','£','œ');
tr['&ucirc;'] = new Array('û','–','–','ž');
tr['&uuml;'] = new Array('ü','','','Ÿ');
tr['&yacute;'] = new Array('ý','ì','ý','ý');
tr['&thorn;'] = new Array('þ','ç','þ','þ');
tr['&yuml;'] = new Array('ÿ','˜','˜','Ø');
}
function Xgx(txtin){
var ind = 0;
var reg = '';
var cu = 0;
var tmp ='';
var txtout = '';
if (MAC)
ind = 3;
cu = 0;
while (cu < txtin.length){
tmp = txtin.charAt(cu);
if (tmp.charCodeAt() > 127){
for (hs in tr){
if (tr[hs][ind].charCodeAt() == txtin.charCodeAt(cu)){
tmp = hs;
}
}
}
txtout += tmp;
cu++;
}
return escape(txtout);
}
function Xec() {
s.document.open();
s.document.writeln(ADMIN_TOP);
s.document.writeln(FONT_A_BIG + A_SHOW_HELP_INS +"</FONT>");
s.document.writeln(ADMIN_BOT);
s.document.close();
}
function Xed() {
s.document.open();
s.document.writeln(ADMIN_TOP);
s.document.writeln(FONT_A_BIG + A_SHOW_HELP_SET +"</FONT>");
s.document.writeln(ADMIN_BOT);
s.document.close();
}
function Xee() {
s.document.open();
s.document.writeln(ADMIN_TOP);
s.document.writeln(FONT_A_BIG + A_SHOW_HELP_DES +"</FONT>");
s.document.writeln(ADMIN_BOT);
s.document.close();
}
function Xef(s_obj) {
was = s_obj.options[s_obj.selectedIndex].value;
s_obj.selectedIndex = 0;
if (was == 'help_ed') {
Xec();
return;
}
else if (was == 'help_set') {
Xed();
return;
}
else if (was == 'help_des') {
Xee();
return;
}
Xeu(was);
}
function Xeg() {
with (m.document){
writeln(ADMIN_TOP);
writeln("<FORM name=menu>");
writeln("<CENTER><TABLE >");
writeln("<TR>");
writeln("<TD colspan=2 align=middle>"+ FONT_A + A_PRINT_FRAME_TOP);
writeln("<SELECT onChange='parent.Xef(this)' name=sel1>");
writeln("<OPTION selected value='help_ed'>"+ A_PRINT_FRAME_INS);
writeln("<OPTION value='C'>"+ A_PRINT_FRAME_ADDP);
writeln("<OPTION value='ed_C'>"+ A_PRINT_FRAME_ED_PAGE);
writeln("<OPTION value='import'>"+ A_PRINT_FRAME_IMPORT);
writeln("<OPTION value='ins_art'>"+ A_PRINT_FRAME_ADD1);
writeln("<OPTION value='ed_art'>"+ A_PRINT_FRAME_ED_ART);
writeln("</SELECT><BR>");
writeln("<SELECT onChange='parent.Xef(this)' name=sel2>");
writeln("<OPTION value='help_des'>"+ A_NAME_ADMIN_DES);
writeln("<OPTION value='sf'>"+ A_NAME_ADMIN_F);
writeln("<OPTION value='nav'>"+ A_NAME_ADMIN_NAV);
writeln("<OPTION value='tbl'>"+ A_NAME_ADMIN_TBL);
writeln("<OPTION value='tbo'>"+ A_NAME_ADMIN_TBO);
writeln("<OPTION value='htm'>"+ A_NAME_ADMIN_HTM);
writeln("</SELECT><BR>");
writeln("<SELECT onChange='parent.Xef(this)' name=sel3>");
writeln("<OPTION value='help_set'>"+ A_NAME_ADMIN);
writeln("<OPTION value='sb'>"+ A_NAME_ADMIN_B);
writeln("<OPTION value='vorlage'>"+ A_NAME_ADMIN_VOR);
writeln("<OPTION value='sfr'>"+ A_NAME_ADMIN_FR);
writeln("<OPTION value='sa'>"+ A_NAME_ADMIN_A);
writeln("<OPTION value='slg'>"+ A_NAME_ADMIN_LG);
writeln("<OPTION value='sza'>"+ A_NAME_ADMIN_SZA);
writeln("<OPTION value='sw'>"+ A_NAME_ADMIN_W);
writeln("<OPTION value='smw'>"+ A_NAME_ADMIN_SMW);
writeln("<OPTION value='sft'>"+ A_NAME_ADMIN_FT);
writeln("<OPTION value='vs'>"+ A_NAME_ADMIN_VS);
writeln("<OPTION value='sl'>"+ A_NAME_ADMIN_L);
writeln("</SELECT></TD></TR>");
writeln("<TR>");
writeln("<TD colspan=2 align=middle>"+ FONT_A +"<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm');\"");
writeln("value='"+ A_NAME_HELP +"'>");
writeln("<INPUT type=button onClick='javascript:parent.Xek();'");
writeln("value='"+ A_NAME_SAVE +"'><BR>");
writeln("<INPUT type=button onClick=\"parent.r.document.location.replace('../help/bugrep.htm');\"");
writeln("value='"+ A_NAME_BUG +"'></FONT></TD>");
writeln("</TABLE></CENTER>");
writeln("</FORM>");
writeln(ADMIN_BOT);
}
with (s.document) {
open();
writeln(ADMIN_TOP);
writeln(FONT_A_BIG + Q['version'] + A_DEL_S);
writeln("</FONT>");
writeln(ADMIN_BOT);
close();
}
}
function Xeh(ln){
if (rounds > 10) {
location.replace("http://www.js-webShop.com");
return;
}
if (ln){
if (Xei(ln))
Q['ln'] = escape(ln);
else
alert(A_CHECK_LN);
}
else {
if (Q['ln']){
if (Xei(unescape(Q['ln']))){
Xeg();
return;
}
}
tln = prompt(A_NAME_LN +":", '');
if (Xei(tln)){
Q['ln'] = escape(tln);
Xeg();
}
else
Xeh();
}
return;
}
function Xei(ln){
if (!ln) return false;
rounds++;
if (((ln.substring(0,ln.indexOf('-')) + ln.substring(ln.lastIndexOf('-') + 1,ln.length)-5))%23 || (((ln.substring(0,ln.indexOf('-'))+ln.substring(ln.lastIndexOf('-') + 1,ln.length)) % 281) != (ln.substring(ln.indexOf('-') + 1,ln.lastIndexOf('-')))))
return false;
else
return true;
}
function Xej() {
s.document.open();
s.document.writeln(ADMIN_TOP);
s.document.writeln("<FORM name=config>");
s.document.writeln("Hier Klicken zum abspeichern:");
s.document.writeln("</FORM>");
s.document.writeln(ADMIN_BOT);
s.document.close();
}
function Xek(){
var path = '';
path = unescape(location.href.substring(0,location.href.lastIndexOf("/") + 1));
p_idx = path.indexOf("file:");
if (p_idx == -1){
alert("Nur file: erlaubt");
return;
}
else
if (WIN){
path = unescape(path.substring(path.indexOf("|") - 1,path.length));
path = path.replace("|",":");
path = path.replace(/\//g,"\\");
}
else
path = unescape(path.substring(p_idx + 5,path.length));
with (s.document){
open();
writeln(ADMIN_TOP);
writeln("<FORM name=save onSubmit='parent.Xel();'>");
writeln(FONT_A_BIG + A_SAVE_TOP +"</FONT><BR>");
writeln(FONT_A + A_SAVE_PATH +"<INPUT type=file size=30 accept='text/html' name='path'><BR>");
writeln("<INPUT type=hidden name='defaultPath' value='"+ escape(path) +"'><BR>");
writeln( A_SAVE_USE_DEF1 + path + A_SAVE_USE_DEF2 );
writeln("<INPUT type=submit value='"+ A_NAME_SAVE +"'><BR>");
writeln("</FONT></FORM>");
writeln(ADMIN_BOT);
close();
}
}
function Xel() {
netscape.security.PrivilegeManager.enablePrivilege("UniversalFileAccess");
if (s.document.save.path.value != '') {
path = s.document.save.path.value;
if (WIN)
path = path.substring(0,path.lastIndexOf("\\") + 1);
else
path = path.substring(0,path.lastIndexOf("/") + 1);
}
else
path = unescape(s.document.save.defaultPath.value);
file_index = path + unescape(admin['ind']);
file_shop = path + unescape(admin['aq_file']);
file_aq = path + 'js-adm.js';
file_art = path + 'js-db.js';
file_layout = path + 'js-sys.js';
alert("index: "+ file_index +"\nArt: "+ file_art +"\nlayout: "+ file_layout +"\nShop: "+ file_shop+"\nintern: "+ file_aq);
out_index = new java.io.FileOutputStream(file_index);
ba_stream_index = new java.io.ByteArrayOutputStream();
FSI = new java.io.DataOutputStream(ba_stream_index);
Xen();
out_index.write(ba_stream_index.toByteArray());
out_index.close();
out_art = new java.io.FileOutputStream(file_art);
ba_stream_art = new java.io.ByteArrayOutputStream();
FSA = new java.io.DataOutputStream(ba_stream_art);
Xer();
out_art.write(ba_stream_art.toByteArray());
out_art.close();
out_layout = new java.io.FileOutputStream(file_layout);
ba_stream_layout = new java.io.ByteArrayOutputStream();
FSL = new java.io.DataOutputStream(ba_stream_layout);
Xeq();
out_layout.write(ba_stream_layout.toByteArray());
out_layout.close();
out_shop = new java.io.FileOutputStream(file_shop);
ba_stream_shop = new java.io.ByteArrayOutputStream();
FSS = new java.io.DataOutputStream(ba_stream_shop);
Xem();
out_shop.write(ba_stream_shop.toByteArray());
out_shop.close();
out_aq = new java.io.FileOutputStream(file_aq);
ba_stream_aq = new java.io.ByteArrayOutputStream();
FST = new java.io.DataOutputStream(ba_stream_aq);
Xep();
out_aq.write(ba_stream_aq.toByteArray());
out_aq.close();
with (s.document) {
open();
writeln(ADMIN_TOP);
writeln(FONT_A_BIG + A_DO_SAVE_DONE);
writeln("<P><CENTER><A HREF='file:///"+ file_index +"' target=_new>"+ A_DO_SAVE_DONE_TEST +"</CENTER>");
writeln("</FONT>");
writeln(ADMIN_BOT);
close();
}
}
function Xem(){
FSS.writeBytes('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">\n<HTML>\n<HEAD>\n\n');
FSS.writeBytes('<TITLE>'+ unescape(Q['l']) +'</TITLE>\n');
FSS.writeBytes('<META name="author" content="'+ unescape(Q['ac'] +' '+ Q['ad']) +'">\n');
FSS.writeBytes('<META name="generator" content="js-webShop V'+ Q['version'] +' www.js-webShop.com">\n');
FSS.writeBytes('<META name="author" content="'+ unescape(Q['ac'] +' '+ Q['ad']) +'">\n');
FSS.writeBytes("</HEAD>\n");
FSS.writeBytes("<NOSCRIPT>\n<H1>Please allow JavaScript to have a look at this Cs!<P>"+ A_DO_SAVE_INDEX_NOSCRIPT + "</H1>\n</NOSCRIPT>\n\n");
FSS.writeBytes('<SCRIPT src="js-db.js" type="text/javascript"> \
<!-- \
//- -- Copyright 1998 iConnect.de -- \
//- -- Contact pluto@iconnect.de -- \
//--> \
</SCRIPT> \
\
<SCRIPT src="js-sys.js" type="text/javascript"> \
<!-- \
//- -- Copyright 1998 iConnect.de -- \
//- -- Contact pluto@iconnect.de -- \
//--> \
</SCRIPT> \
<SCRIPT src="js-eng.js" type="text/javascript"> \
<!-- \
//- -- Copyright 1998 iConnect.de -- \
//- -- Contact pluto@iconnect.de -- \
//--> \
</SCRIPT> \
\
<SCRIPT src="js-bes.js" type="text/javascript"> \
<!-- \
\
//- Based on a script by Stefan Mintert/Addison-Wesley -- \
//- -- Copyright 1998 iConnect.de --\
//- -- Contact pluto@iconnect.de -- \
\
//--> \
</SCRIPT>\n\n\n');
FSS.writeBytes('<FRAMESET onLoad=\'setTimeout("Xea();",500);\' \
COLS="210,*" BORDER="0" frameborder="0" framespacing="0"> \
<FRAME NAME="l" src="blank.htm" \
MARGINWIDTH="00" MARGINHEIGHT="00" \
NORESIZE>\
<FRAME NAME="r" src="language.htm" \
MARGINWIDTH="20" MARGINHEIGHT="10" \
SCROLLING="auto" NORESIZE> \
</FRAMESET>\n\n <BODY> \n');
FSS.writeBytes('\n\n<H1>Your browser doesn\'t support frames, we\'re sorry.<P>\n'+A_DO_SAVE_INDEX_NOFRAMES+'</H1>\n\n');
FSS.writeBytes('</BODY></HTML>');
}
function Xen(){
var re = /(<.*?>)/ig;
var re2= /"/ig;
var txt = '';
var tt = '';
FSI.writeBytes('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">\n<HTML>\n<HEAD>\n\n');
FSI.writeBytes('<TITLE>'+ unescape(Q['l']) +'</TITLE>\n');
FSI.writeBytes('<META name="author" content="'+ unescape(Q['ac'] +' '+ Q['ad']) +'">\n');
FSI.writeBytes('<META name="generator" content="js-webShop V'+ Q['version'] +' www.js-webShop.com">\n');
FSI.writeBytes('<META name="author" content="'+ unescape(Q['ac'] +' '+ Q['ad']) +'">\n');
FSI.writeBytes('<META name="description" content="'+ unescape(Q['l']) +'">\n');
FSI.writeBytes('<META name="keywords" content="');
for (i in C) {
tt = unescape(C[i]['name']);
txt = tt.replace(re2, "");
FSI.writeBytes( txt.replace(re,"") +" ");
}
for (i in A) {
if (A[i]) {
tt = unescape(A[i]['name']);
txt = tt.replace(re2, "");
FSI.writeBytes( txt.replace(re,"") +" ");
}
}
FSI.writeBytes('">'+ "\n");
FSI.writeBytes('<script>\ndone = false;\n</script>\n');
endung = file_shop.substring(file_shop.lastIndexOf('.'),file_shop.length);
FSI.writeBytes('<script language=\'JavaScript1.2\'>\n<!-- \
function go(){ \
var gt = document.fo.pass.value; \
eval("location.replace(\'"+ gt +"'+ endung +'\')"); \
} \
//-->\n</script>');
FSI.writeBytes('</head>\n');
FSI.writeBytes("<BODY "+ PT_BGC +" link='"+ PT_L +"' vlink='"+ PT_VL +"' alink='"+ PT_AL +"' background='"+ PT_BG +"'>\n\n");
FSI.writeBytes('\n\n<noscript> \n'+ unescape(admin['aq_noscript']) +' \n</noscript>\n');
FSI.writeBytes('<script language=\'JavaScript1.2\'> \
<!-- \
if (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4) \
IE = true; \
else \
IE = false; \
\
if (navigator.appName == "Netscape" && parseInt(navigator.appVersion) == 4) \
MOZZ = true; \
else \
MOZZ = false; \
\
with (document){ \
open(); \
writeln("<CENTER><TABLE '+ TBG_PT +' width=\''+ T_W +'\' border=\''+ TB_PT +'\' cellpadding=\''+ TP_PT +'\'>"); \
write(\'<TD valign=top>'+ FONT_RH + unescape(Q['name']) +' &nbsp;&nbsp; <I>\'); \
writeln("'+ A_NAME_START +'</I></FONT><HR>"); \
writeln(\''+ FONT_TT +'\'); \
writeln(unescape(\''+ admin['aq_ok1'] +'\') +"<HR>"); \
\
writeln("<P><img name=s01 src='+ Q['s_off'] +'>"); \
writeln("<img name=s02 src='+ Q['s_off'] +'>"); \
writeln("<img name=s11 src='+ Q['s_off'] +'>"); \
writeln("<img name=s12 src='+ Q['s_off'] +'>"); \
writeln("<img name=s21 src='+ Q['s_off'] +'>"); \
writeln("<img name=s22 src='+ Q['s_off'] +'>"); \
writeln("<img name=s31 src='+ Q['s_off'] +'>"); \
writeln("<img name=s32 src='+ Q['s_off'] +'>"); \
writeln("<img name=s41 src='+ Q['s_off'] +'>"); \
writeln("<img name=s42 src='+ Q['s_off'] +'>"); \
writeln("<HR>"+ unescape(\''+ admin["aq_ok2"] +'\')); \
writeln("<FORM name=fo onSubmit=\'return false;\'>"); \n');
if (admin['password'] == 'on'){
FSI.writeBytes('writeln("<INPUT type=text name=pass onChange=\'go()\'>");\n');
FSI.writeBytes('writeln("<INPUT type=button value=Weiter >");\n');
}
else
FSI.writeBytes('writeln("<INPUT type=button value=weiter onClick=\'location.replace(\\\"'+ unescape(admin['aq_file']) +'\\\");\'>");\n');
FSI.writeBytes('writeln("</FORM></FONT></TD></TR></TABLE>"); \
\
close(); \
} \
done = true; \
//--> \
</script> \
\
<script language=\'JavaScript1.1\'> \
<!-- \
if (!done){ \
with (document){ \
open(); \
writeln("<CENTER><TABLE '+ TBG_PT +' width=\''+ T_W +'\' border=\''+ TB_PT +'\' cellpadding=\''+ TP_PT +'\'>"); \
write(\'<TD valign=top>'+ FONT_RH + unescape(Q['name']) +' &nbsp;&nbsp; <I>\'); \
writeln("'+ A_NAME_NOSTART +'</I></FONT><HR>"); \
writeln(\''+ FONT_TT +'\'); \
writeln(unescape(\''+ admin['aq_old'] +'\') +"</TD></TR>"); \
writeln("</TABLE>"); \
close(); \
} \
done = true; \
} \
//--> \
</script> \
\
<script language=\'JavaScript1.2\'> \
<!-- \
document.s01.src = \''+ Q['s_on'] +'\'; \
//--> \
</script> \
<script language=\'JavaScript1.2\' src="js-sys.js"> \
<!-- \
//--> \
</script> \
<script language=\'JavaScript1.2\'> \
<!-- \
document.s02.src = \''+ Q['s_on'] +'\'; \
document.s11.src = \''+ Q['s_on'] +'\'; \
//--> \
</script> \
<script language=\'JavaScript1.2\' src="js-bes.js"> \
<!-- \
//--> \
</script> \
<script language=\'JavaScript1.2\'> \
<!-- \
document.s12.src = \''+ Q['s_on'] +'\'; \
document.s21.src = \''+ Q['s_on'] +'\'; \
//--> \
</script> \
<script language=\'JavaScript1.2\' src="js-eng.js"> \
<!-- \
//--> \
</script> \
<script language=\'JavaScript1.2\'> \
<!-- \
document.s22.src = \''+ Q['s_on'] +'\'; \
document.s31.src = \''+ Q['s_on'] +'\'; \
//--> \
</script> \
<script language=\'JavaScript1.2\' src="js-db.js"> \
<!-- \
//--> \
</script> \
<script language=\'JavaScript1.2\'> \
<!-- \
document.s32.src = \''+ Q['s_on'] +'\'; \
document.s41.src = \''+ Q['s_on'] +'\'; \
//--> \
</script> \
<script language=\'JavaScript1.2\'> \
<!-- \
lang = new Image(); \
lang.src=\'language.htm\'; \
//--> \
</script> \
<script language=\'JavaScript1.2\'> \
<!-- \
document.s32.src = \''+ Q['s_on'] +'\'; \
document.s41.src = \''+ Q['s_on'] +'\'; \
//--> \
</script> \
<script language=\'JavaScript1.2\'> \
<!-- \
var my_img = new Array(); \n');
var co = 0;
var tmp = '';
for (im in Q){
if (Q[im]) {
tmp = unescape(Q[im]);
tmpsrc = tmp.match(/([a-z|0-9|_|\-|\/|\\]*\.+(jpg|gif))/i);
if (tmpsrc){
FSI.writeBytes('my_img['+ co +'] = \''+ tmpsrc[0] +'\';\n');
co++;
}
}
}
var tmp = '';
for (im in C){
for (ha in C[im]){
if (C[im][ha]) {
tmp = unescape(C[im][ha]);
tmpsrc = tmp.match(/([a-z|0-9|_|\-|\/|\\]*\.+(jpg|gif))/i);
if (tmpsrc){
FSI.writeBytes('my_img['+ co +'] = \''+ tmpsrc[0] +'\';\n');
co++;
}
}
}
}
FSI.writeBytes('\nfor ( i in my_img){ \
document.writeln("<img name=put_here"+ i +" src=\'"+ my_img[i] +"\' width=1 height=1>"); \
} \
\
document.s42.src = \''+ Q['s_on'] +'\'; \n');
if (admin['password'] == 'off')
FSI.writeBytes('setTimeout(\'location.replace("'+ unescape(admin["aq_file"]) +'")\', 2000);\n');
FSI.writeBytes('//--> \n</script>\n\n\n');
FSI.writeBytes("<TABLE "+ TBG_PT +" width='"+ T_W +"' border='"+ TB_P +"' cellpadding='"+ TP_P +"'>\n");
FSI.writeBytes("<TR><TD>"+ FONT +"<FONT size=-3 color='"+ unescape(Q['tbg_pt']) +"'>\n");
FSI.writeBytes( unescape(Q['l']) +"\n\n");
for (i in C) {
tt = unescape(C[i]['name']);
txt = tt.replace(re2, "");
FSI.writeBytes( txt.replace(re,"") +" ");
}
for (i in A) {
if (A[i]) {
tt = unescape(A[i]['name']);
txt = tt.replace(re2, "");
FSI.writeBytes( txt.replace(re,"") +" ");
}
}
FSI.writeBytes('</font></font></TD></TR></TABLE></body></html>');
}
function Xep() {
Xes(FST);
FST.writeBytes("var admin = new Array();\n");
for (i in admin) {
FST.writeBytes("admin['"+ i +"'] = '"+ admin[i] +"';\n");
}
}
function Xeq() {
Xes(FSL);
FSL.writeBytes("var Q = new Array();\n");
for (i in Q) {
if (i == 'R' || i == 'n') {
FSL.writeBytes("Q['"+ i +"'] = new Array();\n");
for (f in Q[i]) {
FSL.writeBytes("Q['"+ i +"']['"+ f +"'] = '"+ Q[i][f] +"';\n");
}
}
else if (i == 'W' || i == 'u' || i == 'v' || i == 'x' || i == 'B') {
FSL.writeBytes("Q['"+ i +"'] = new Array();\n");
for (k in Q[i]) {
if (!Q[i][k] && i == 'B') continue;
FSL.writeBytes("Q['"+ i +"']["+ k +"] = new Array();\n");
for (f in Q[i][k]) {
FSL.writeBytes("Q['"+ i +"']["+ k +"]['"+ f +"'] = '"+ Q[i][k][f] +"';\n");
}
}
}
else if (i == 'T') {
FSL.writeBytes("Q['"+ i +"'] = new Array();\n");
for (k in Q[i]) {
FSL.writeBytes("Q['"+ i +"']['"+ k +"'] = new Array();\n");
for (f in Q[i][k]) {
FSL.writeBytes("Q['"+ i +"']['"+ k +"']['"+ f +"'] = '"+ Q[i][k][f] +"';\n");
}
}
}
else {
if (Q[i] != 'do_not_save')
FSL.writeBytes("Q['"+ i +"'] = '"+ Q[i] +"';\n");
}
}
}
function Xer() {
Xes(FSA);
FSA.writeBytes("var A = new Array();\n");
FSA.writeBytes("var B = new Array();\n");
FSA.writeBytes("var C = new Array();\n");
for (i in C) {
if (i == "length") {continue;}
FSA.writeBytes("C["+ i +"] = new Array();\n");
for (j in C[i]) {
FSA.writeBytes("C["+ i +"]['"+ j +"'] = '"+ C[i][j] +"';\n");
}
}
for (i in A) {
if (!A[i]) {continue;}
if (i == "length") {continue;}
FSA.writeBytes("A["+ i +"] = new Array();\n");
for (j in A[i]) {
if (!A[i][j]) continue;
FSA.writeBytes("A["+ i +"]['"+ j +"'] = '"+ A[i][j] +"';\n");
}
}
}
function Xes(i_strm) {
i_strm.writeBytes("\n //- -- Copyright 1998 / 1999 iConnect.de --\n");
i_strm.writeBytes(" //- -- Contact pluto@iconnect.de --\n");
i_strm.writeBytes(" //- -- coAuthor kdoberstein@js-webShop.de --\n");
}
function Xet(io) {
if (io.type == 'text')
Q[io.name] = Xgx(io.value);
else if (io.type == 'select-one'){
var wert = ''+ io.options[io.selectedIndex].value;
if (wert == 'enter'){
wert = prompt(A_CONFIG_SYSTEM_SL_ASK,'');
if (wert.length == 0)
return;
}
Q[io.name] = Xgx(wert);
}
else if (io.type == 'checkbox'){
if (io.checked)
Q[io.name] = 'on';
else
Q[io.name] = 'off';
}
else if (io.type == 'textarea')
Q[io.name] = Xgx(io.value);
else
alert('NOT DEFINED! ' + io.type);
Xcq();
LEFT = false;
Xcv('refresh');
}
function Xeu(setup)
{
//noch:event für onclick auf radio-button raussuchen
var auswahl, selectname, configname;
var txt_name, txt_value, txt_y, err_txt;
var idx = '-1';
if (setup == 'C') {
Xgn();
return;
}
else if (setup == 'ins_art') {
Xgl();
return;
}
else if (setup == 'ed_C') {
Xgn(e_C_state);
return;
}
else if (setup == 'vorlage') {
Xif();
return;
}
else if (setup == 'import') {
Xih();
return;
}
else if (setup == 'ed_art') {
a_editProd();
return;
}
else if (setup == 'sw') {
Xfg(idx);
return;
}
else if (setup == 'sa') {
Xfe('-1');
return;
}
else if (setup == 'sfr') {
ART = 'u';
Xfp('-1');
return;
}
else if (setup == 'slg') {
ART = 'v';
Xfp('-1');
return;
}
else if (setup == 'smw') {
Xfc('-1');
return;
}
else if (setup == 'sza') {
Xew('-1');
return;
}
else if (setup == 'tbl') {
Xfu('-1');
return;
}
else if (setup == 'tbo') {
Xfx('-1');
return;
}
else if (setup == 'sf') {
Xfs('-1');
return;
}
else if (setup == 'vs') {
Xfy('-1');
return;
}
else if (setup == 'sft') {
Xhx('-1');
return;
}
with (s.document) {
open();
writeln(ADMIN_TOP);
writeln("<FORM name=sysedit>");
writeln("<TABLE width=560>");
if (setup == 'sb'){
writeln("<TR><TD colspan=3>"+ FONT_A_BIG + A_CONFIG_SYSTEM_SB +"</FONT></TD>");
writeln("<TD align=right>"+ FONT_A_SMALL +"<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#shopD');\"");
writeln("value='"+ A_NAME_HELP +"'></FONT></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SB_N +"</FONT></TD><TD><INPUT type=text name='name' value='"+ unescape(Q['name']) +"' onChange='parent.Xet(this);'></TD>");
writeln("<TD>"+FONT_A + A_CONFIG_SYSTEM_SB_TITEL + "</TD><TD><INPUT type=text name='l' value='"+ unescape(Q['l']) +"' onChange='parent.Xet(this);'></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SB_B + "</TD><TD><INPUT type=text name='ac' value='"+ unescape(Q['ac']) +"' onChange='parent.Xet(this);'></TD>");
writeln("<TD>"+ FONT_A + A_CONFIG_SYSTEM_SB_E + "</TD><TD><INPUT type=text name='ad' value='"+ unescape(Q['ad']) +"' onChange='parent.Xet(this);'></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SB_T + "</TD><TD><INPUT type=text name='tel' value='"+ unescape(Q['tel']) +"' onChange='parent.Xet(this);'></TD>");
writeln("<TD>"+ FONT_A + A_CONFIG_SYSTEM_SB_F + "</TD><TD><INPUT type=text name='fax' value='"+ unescape(Q['fax']) +"' onChange='parent.Xet(this);'></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SB_S + "</TD><TD><INPUT type=text name='str' value='"+ unescape(Q['str']) +"' onChange='parent.Xet(this);'></TD>");
writeln("<TD>"+ FONT_A + A_CONFIG_SYSTEM_SB_C + "</TD><TD><INPUT type=text name='ae' value='"+ unescape(Q['ae']) +"' onChange='parent.Xet(this);'></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SB_CO + "</TD><TD><INPUT type=text name='af' value='"+ unescape(Q['af']) +"' onChange='parent.Xet(this);'></TD>");
writeln("<TD>"+ FONT_A + A_CONFIG_SYSTEM_SB_PB + "</TD><TD><INPUT type=text name='txt_pn' value='"+ unescape(Q['txt_pn']) +"' onChange='parent.Xet(this);'></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SB_LU + "</TD><TD><INPUT type=text name='al_url' value='"+ unescape(Q['al_url']) +"' onChange='parent.Xet(this);'></TD>");
writeln("<TD>&nbsp;</TD><TD>&nbsp;</TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SB_SO + "</TD><TD colspan=3><TEXTAREA rows=10 cols=50 name='ag' onChange='parent.Xet(this);' wrap=virtual>"+ unescape(Q['ag']) +"</TEXTAREA></TD></TR>");
}
else if (setup == 'nav'){
writeln("<TR><TD colspan=3>"+ FONT_A_BIG + A_CONFIG_SYSTEM_NAV +"</FONT></TD>");
writeln("<TD align=right>"+ FONT_A_SMALL +"<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#grafiken');\"");
writeln("value='"+ A_NAME_HELP +"'></FONT></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_NAV_LOGO +"</FONT></TD><TD><INPUT type=text name='ak' value='"+ unescape(Q['ak']) +"' onChange='parent.Xet(this);'></TD>"+ FONT_A);
writeln("<TD align=right colspan=2>"+ FONT_A +"<INPUT type=button onClick=\"parent.r.document.location.replace('.');\"");
writeln("value='"+ A_SHOWDIR +"'></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_NAV_SEL + "</TD><TD><INPUT type=text name='gif_sel' value='"+ unescape(Q['gif_sel']) +"' onChange='parent.Xet(this);'></TD>"+ FONT_A);
writeln("<TD>"+ FONT_A + A_CONFIG_SYSTEM_NAV_NSEL + "</TD><TD><INPUT type=text name='gif_nsel' value='"+ unescape(Q['gif_nsel']) +"' onChange='parent.Xet(this);'></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_NAV_NBG + "</TD><TD><INPUT type=text name='np_bg' value='"+ unescape(Q['np_bg']) +"' onChange='parent.Xet(this);'></TD>"+ FONT_A);
writeln("<TD>"+ FONT_A + A_CONFIG_SYSTEM_NAV_BG + "</TD><TD><INPUT type=text name='pt_bg' value='"+ unescape(Q['pt_bg']) +"' onChange='parent.Xet(this);'></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_B + "</TD><TD><INPUT type=text name='b_img' value='"+ unescape(Q['b_img']) +"' onChange='parent.Xet(this);'></TD>"+ FONT_A);
writeln("<TD>"+ FONT_A + A_CONFIG_SYSTEM_B_A + "</TD><TD><INPUT type=text name='b_a_img' value='"+ unescape(Q['b_a_img']) +"' onChange='parent.Xet(this);'></TD></TR>");
writeln("<TR><TD>&nbsp;</TD><TD>&nbsp;</TD>");
writeln("<TD>"+ FONT_A + A_CONFIG_SYSTEM_B_B +"<TD><INPUT type=text name='b_b_img' value='"+ unescape(Q['b_b_img']) +"' onChange='parent.Xet(this);'></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_NAV_LEAVE + "</TD><TD><INPUT type=text name='al' value='"+ unescape(Q['al']) +"' onChange='parent.Xet(this);'></TD>"+ FONT_A);
writeln("<TD>"+ FONT_A + A_CONFIG_SYSTEM_NAV_SEARCH + "</TD><TD><INPUT type=text name='an' value='"+ unescape(Q['an']) +"' onChange='parent.Xet(this);'></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_NAV_GOLEFT + "</TD><TD><INPUT type=text name='ao' value='"+ unescape(Q['ao']) +"' onChange='parent.Xet(this);'></TD>"+ FONT_A);
writeln("<TD>"+ FONT_A + A_CONFIG_SYSTEM_NAV_GORIGHT + "</TD><TD><INPUT type=text name='ap' value='"+ unescape(Q['ap']) +"' onChange='parent.Xet(this);'></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_NAV_START + "</TD><TD><INPUT type=text name='navgif_aq' value='"+ unescape(Q['navgif_aq']) +"' onChange='parent.Xet(this);'></TD>");
writeln("<TD>"+ FONT_A + A_CONFIG_SYSTEM_NAV_STARTS + "</TD><TD><INPUT type=text name='navgifs_aq' value='"+ unescape(Q['navgifs_aq']) +"' onChange='parent.Xet(this);'></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_NAV_BASKET + "</TD><TD><INPUT type=text name='navgif_basket' value='"+ unescape(Q['navgif_basket']) +"' onChange='parent.Xet(this);'></TD>");
writeln("<TD>"+ FONT_A + A_CONFIG_SYSTEM_NAV_BASKETS + "</TD><TD><INPUT type=text name='navgifs_basket' value='"+ unescape(Q['navgifs_basket']) +"' onChange='parent.Xet(this);'></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_NAV_DATA + "</TD><TD><INPUT type=text name='navgif_data' value='"+ unescape(Q['navgif_data']) +"' onChange='parent.Xet(this);'></TD>");
writeln("<TD>"+ FONT_A + A_CONFIG_SYSTEM_NAV_DATAS + "</TD><TD><INPUT type=text name='navgifs_data' value='"+ unescape(Q['navgifs_data']) +"' onChange='parent.Xet(this);'></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_NAV_SEND + "</TD><TD><INPUT type=text name='navgif_send' value='"+ unescape(Q['navgif_send']) +"' onChange='parent.Xet(this);'></TD>");
writeln("<TD>"+ FONT_A + A_CONFIG_SYSTEM_NAV_SENDS + "</TD><TD><INPUT type=text name='navgifs_send' value='"+ unescape(Q['navgifs_send']) +"' onChange='parent.Xet(this);'></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_NAV_S_ON + "</TD><TD><INPUT type=text name='s_on' value='"+ unescape(Q['s_on']) +"' onChange='parent.Xet(this);'></TD>");
writeln("<TD>"+ FONT_A + A_CONFIG_SYSTEM_NAV_S_OFF + "</TD><TD><INPUT type=text name='s_off' value='"+ unescape(Q['s_off']) +"' onChange='parent.Xet(this);'></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_NAV_COOKIE + "</TD><TD><INPUT type=text name='cookie' value='"+ unescape(Q['cookie']) +"' onChange='parent.Xet(this);'></TD>");
writeln("<TD>&nbsp;</TD></TR>");
}
else if (setup == 'sl') { /** Abschicken **/
writeln("<TR><TD colspan=3>"+FONT_A_BIG+A_CONFIG_SYSTEM_SL+"</FONT></TD>");
writeln("<TD align=right>"+ FONT_A_SMALL +"<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#abschicken');\"");
writeln("value='"+ A_NAME_HELP +"'></FONT></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SL_A+"</TD><TD>");
writeln("<INPUT type=text name='action' size=40 value='"+ unescape(Q['action'])+"' onChange='parent.Xet(this);'></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SL_E+"</TD><TD>"+ FONT_A);
write("<SELECT name='enctype' ");
writeln(" onChange='parent.Xet(this);'>");
write("<OPTION value='text/plain'");
if ('text/plain' == unescape(Q['enctype']))
write(" selected ");
writeln(">"+ A_CONFIG_SYSTEM_SL_MAIL);
write("<OPTION value='application/x-www-form-urlencoded'");
if ('application/x-www-form-urlencoded' == unescape(Q['enctype']))
write(" selected ");
writeln(">"+ A_CONFIG_SYSTEM_SL_CGI);
write("<OPTION value='enter'>");
writeln( A_CONFIG_SYSTEM_SL_OWN);
write("</SELECT></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SL_ZI +"</TD><TD>");
writeln(FONT_A + A_CONFIG_SYSTEM_SL_ZIT +"&nbsp;&nbsp;<INPUT type=text name='zit' size=15 value='"+ unescape(Q['zit'])+"' onChange='parent.Xet(this);'><BR>&nbsp;&nbsp;");
writeln(A_CONFIG_SYSTEM_SL_ZIN +" &nbsp;&nbsp;<INPUT type=text name='zin' size=15 value='"+ unescape(Q['zin'])+"' onChange='parent.Xet(this);'><BR>");
writeln(A_CONFIG_SYSTEM_SL_ZIV +"&nbsp;<INPUT type=text name='ziv' size=35 value='"+ unescape(Q['ziv'])+"' onChange='parent.Xet(this);'></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SL_COM +"</TD><TD>");
writeln("<INPUT type=checkbox name='com' onClick='parent.Xet(this);'");
if (Q['com'] == 'on')
write(" checked ");
writeln("></TD></TR>");
}
else if (setup == 'htm') {
writeln("<TR><TD>"+ FONT_A + A_NAME_ADMIN_HTM +"</TD></TR>");
writeln("<TR>\n<TD colspan=2>");
writeln("<INPUT type=radio name=htm value='C_top' onClick='parent.Xfo(this);'><A HREF='javascript:parent.Xfo(\""+'C_top'+"\")' onclick='sysedit.htm[0].checked = true'>"+A_CONFIG_SYSTEM_HTM_PT+"</A>");
writeln("<INPUT type=radio name=htm value='C_f' onClick='parent.Xfo(this);'><A HREF='javascript:parent.Xfo(\""+'C_f'+"\")' onclick='sysedit.htm[1].checked = true'>"+A_CONFIG_SYSTEM_HTM_PS+"</A>");
writeln("<INPUT type=radio name=htm value='C_bottom' onClick='parent.Xfo(this);'><A HREF='javascript:parent.Xfo(\""+'C_bottom'+"\")' onclick='sysedit.htm[2].checked = true'>"+A_CONFIG_SYSTEM_HTM_PB+"</A>");
writeln("<INPUT type=radio name=htm value='nav_C_top' onClick='parent.Xfo(this);'><A HREF='javascript:parent.Xfo(\""+'nav_C_top'+"\")' onclick='sysedit.htm[3].checked = true'>"+A_CONFIG_SYSTEM_HTM_NPT+"</A>");
writeln("<INPUT type=radio name=htm value='nav_C_bottom' onClick='parent.Xfo(this);'><A HREF='javascript:parent.Xfo(\""+'nav_C_bottom'+"\")' onclick='sysedit.htm[4].checked = true'>"+A_CONFIG_SYSTEM_HTM_NPB+"</A>");
writeln("</TD>");
writeln("<TR><TD align=center colspan=2>"+ FONT_A_SMALL);
writeln("<INPUT type=button onClick='parent.r.document.location.replace(\".\");' value='"+ A_SHOWDIR +"'>");
writeln("</TD>");
writeln("<TD align=right>"+ FONT_A_SMALL +"<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#html');\"");
writeln("value='"+ A_NAME_HELP +"'></FONT></TD></TR>");
writeln("<TR><TD valign=top colspan=2>"+ FONT_A +"<TEXTAREA align=textop cols=50 rows=10 name='htmltext' value='' onChange='parent.Xfo(this);' wrap='virtual'>");
writeln("</TEXTAREA></TD></TR>");
}
else alert(A_CONFIG_SYSTEM_ERR);
writeln("<TR><TD colspan=4>"+ FONT_A +"<INPUT type=button value='"+ A_USE +"'></TD></TR>");
writeln("</TABLE>");
writeln("</FORM>");
writeln(ADMIN_BOT);
close();
}//of with
}
function Xev(str)
{
var c, len, zahl = '', pf = '';
var i = 0, anz = 0;
len = str.length;
if (!len) return;
while (i < len) {
c = str.charAt(i);
if ('a' <= c <= 'z' && 'A' <= c <= 'Z') {
alert(A_CONFIG_SYSTEM_SZA_NOB);
return;
}
else if (c == '.' || c == '-' || c == ',' || c == '/' || c == ':') {
if (!anz++)
zahl += '.';
else break;
}
else if (0 <= c <= 9)
zahl += c;
i++;
}
if (zahl.indexOf('.') == '-1')
pf = parseInt(zahl) * 100;
else pf = parseFloat(zahl) * 100;
zahl = '' + pf;
if (zahl.indexOf('.'))
parseInt(zahl);
if (isNaN(pf)) return 0;
else return(Math.round(pf));
}
function Xew(i_obj)
{
var idx = 'neu', ix = '', msg = '';
if (i_obj != '-1') {
if (i_obj.type == 'select-multiple')
idx = i_obj.options[i_obj.selectedIndex].value;
else idx = i_obj;
}
if (idx != 'neu') {
na = unescape(Q['x'][idx]['name']);
val = Xbl(Q['x'][idx]['value']);
lim = Xbl(Q['x'][idx]['y']);
ac = Q['x'][idx]['activ'];
if (Q['x'][idx]['msg'])
msg = unescape(Q['x'][idx]['msg']);
if (Q['x'][idx]['curr'])
ix = unescape(Q['x'][idx]['curr']);
}
with (s.document) {
open();
writeln(ADMIN_TOP);
writeln("<FORM name=sys_x onSubmit='return false;'>");
writeln("<TABLE width=560 border=0>");
write("<TR><TD>"+ FONT_A_BIG + A_NAME_ADMIN_SZA +"</FONT></TD>");
if (idx == 'neu') write("<TD>"+ FONT_A_BIG + A_INSERT +"</FONT></TD>");
else write("<TD>"+ FONT_A_BIG + A_CHANGE +"</FONT></TD>");
writeln("<TD align=right>"+ FONT_A_SMALL +"<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#zahlungsweise');\"");
writeln("value='"+ A_NAME_HELP +"'></FONT></TD></TR>");
writeln("<TR>\n<TD valign=top rowspan=12>");
writeln(FONT_A + "<SELECT name=\"xs\" onChange='parent.Xew(this);' size=8>");
for (i in Q['x']) {
write("<OPTION value='"+ i +"'");
if (i == idx) write("selected");
writeln(">"+unescape(Q['x'][i]['name']));
}
writeln("<OPTION value = 'neu'>"+ A_CONFIG_SYSTEM_SZA_N);
writeln("</SELECT></TD></TR>");
if (idx == 'neu') {
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SZA_NA +"</TD><TD>"+ FONT_A +"<INPUT type=text name='na' size=15 value=''></FONT></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SZA_MSG+"</TD><TD>"+ FONT_A +"<TEXTAREA cols=15 rows=3 name='msg' wrap=virtual></TEXTAREA></FONT></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SZA_Z +"</TD><TD>"+ FONT_A +"<INPUT type=text name='val' size=8 value=''>&nbsp;"+ CURR +"</FONT></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SZA_ZF +"</TD><TD>"+ FONT_A +"<INPUT type=text name='lim' size=8 value=''>&nbsp;"+ CURR +"</FONT></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SZA_AK +"</TD><TD>"+ FONT_A +"<INPUT type=checkbox name='act'></FONT>");
}
else {
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SZA_NA +"</FONT></TD><TD>"+ FONT_A +"<INPUT type=text name='na' size=15 value='"+na+"' onChange='parent.Xhz(\""+idx+"\");'></FONT></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SZA_MSG +"</FONT></TD><TD>"+ FONT_A +"<TEXTAREA cols=15 rows=3 name='msg' wrap=virtual onChange='parent.Xex(\""+idx+"\");'>");
write( msg +"</TEXTAREA></FONT></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SZA_Z +"</FONT></TD><TD>"+ FONT_A +"<INPUT type=text name='val' size=8 value='"+val+"' onChange='parent.Xex(\""+idx+"\");'>&nbsp;"+ CURR +"</TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SZA_ZF +"</FONT></TD><TD>"+ FONT_A +"<INPUT type=text name='lim' size=8 value='"+lim+"' onChange='parent.Xex(\""+idx+"\");'>&nbsp;"+ CURR +"</TD></TR>");
write("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SZA_AK +"</FONT></TD><TD>"+ FONT_A +"<INPUT type=checkbox name='act' onClick='parent.Xex(\""+idx+"\");'");
if (ac == 'y') write("checked");
writeln("></TD></TR>");
}
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SZA_CASH +"</TD><TD>");
writeln(FONT_A+ "<SELECT name=\"eca\" onChange='parent.Xib(this,\""+idx+"\");'>");
writeln("<OPTION value='null'>"+ A_CONFIG_SYSTEM_SZA_ALL);
for (k in Q['T'])
if (Q['T'][k]['use'] == 'y') {
write("<OPTION value='"+ k +"'");
if (k == ix) write("selected");
writeln(">"+Q['T'][k]['name']);
}
for (j in Q['R']) {
if (j == 'base') continue;
write("<OPTION value='"+ j +"'");
if (j == ix) write("selected");
writeln(">"+j);
}
writeln("</SELECT></TD></TR>");
if (idx == 'neu')
writeln("<TR><TD>"+ FONT_A_SMALL +"<INPUT type=button value='"+A_INSERT+"' onClick='parent.Xia();'></FONT></TD></TR>");
else {
writeln("<TR><TD>"+ FONT_A_SMALL +"<INPUT type=button value='"+A_DO+"' onClick='parent.XewMerkmale(this,\""+idx+"\");'>");
writeln("<INPUT type=button value='"+A_CONFIG_SYSTEM_SZA_ACTION+"' onClick='parent.XewAction(\""+idx+"\");'>");
writeln("</FONT></TD>");
writeln("<TD>"+ FONT_A_SMALL + "<INPUT type=button value='"+A_USE+"'>");
writeln("<INPUT type=button value='"+A_DELETE+"' onClick='parent.a_doDelPay(\""+idx+"\");'></FONT></TD></TR>");
}
writeln("</TABLE></FORM>");
writeln(ADMIN_BOT);
close();
} //with
}
function Xib(i_obj, idx)
{
PAYCURR = i_obj.options[i_obj.selectedIndex].value;
if (idx != 'neu') {
Q['x'][idx]['curr'] = PAYCURR;
Xcm();
Xcv('data');
}
}
function Xia()
{
with (s.document.sys_x) {
if (!na.value) {
alert("A_CONFIG_SYSTEM_SZA_CHO");
return;
}
idx = Q['x'].length;
Q['x'][idx] = new Array();
Q['x'][idx]['name'] = Xgx(na.value);
if (PAYCURR)
Q['x'][idx]['curr'] = PAYCURR;
Xex(idx);
Xew('-1');
}
}
function Xhz(idx)
{
with (s.document.sys_x) {
if (na.value)
Q['x'][idx]['name'] = Xgx(na.value);
Xcm();
Xcv('data');
Xew(idx);
}
}
function Xex(idx)
{
with (s.document.sys_x) {
Q['x'][idx]['value'] = Xev(val.value);
Q['x'][idx]['y'] = Xev(lim.value);
if (msg.value)
Q['x'][idx]['msg'] = Xgx(msg.value);
if (Q['x'][idx]['msg'])
Q['x'][idx]['msg'] = Xgx(msg.value);
if (act.checked)
Q['x'][idx]['activ'] = 'y';
else Q['x'][idx]['activ'] = 'n';
Xcm();
Xcv('data');
}
}
function a_doDelPay(idx)
{
Xey('x', idx);
Xcm();
Xcv('data');
Xew('-1');
}
function Xey(art, idx)
{
var sys_array = new Array();
j = 0;
len = Q[art].length;
for (i in Q[art]) {
if (i < idx) j = i;
if (i == idx) i++;
if (i > idx) j = i-1;
if (j == len-1) break;
sys_array[j] = Q[art][i];
}
Q[art] = sys_array;
}
function XewMerkmale(i_obj, idx)
{
var na = '', titl = '';
var ind = 'neu';
var btn = A_INSERT;
if (i_obj != '-1' && idx != '-1') {
if (i_obj.type == 'button') {
if (idx == 'neu') {
alert(A_CONFIG_SYSTEM_SZA_CHOICE);
return;
}
}
else if (i_obj.type == 'select-multiple')
ind = i_obj.options[i_obj.selectedIndex].value;
else ind = i_obj;
titl = ' ' +unescape(Q['x'][idx]['name']);
}
if (ind != 'neu') {
na = unescape(Q['x'][idx][ind]);
btn = A_USE;
}
with (s.document) {
open();
writeln(ADMIN_TOP);
writeln("<FORM name=sys_xmerk onSubmit='return false;'>");
writeln("<TABLE width=560 border=0>");
write("<TR><TD>"+FONT_A_BIG+ A_NAME_ADMIN_SZA +"</FONT></TD>");
if (ind != 'neu')
write("<TD>"+ FONT_A_BIG + A_CHANGE +"</FONT></TD>");
else write("<TD>"+ FONT_A_BIG + A_INSERT +"</FONT></TD>");
writeln("<TD align=right>"+ FONT_A_SMALL +"<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#merkmale');\"");
writeln("value='"+ A_NAME_HELP +"'></FONT></TD></TR>");
write("<TR><TD colspan=3>"+FONT_A_BIG+ titl +"</FONT></TD></TR>");
writeln("<TR>\n<TD valign=top width=35% rowspan=12>");
writeln(FONT_A + "<SELECT name=\"xs\" onChange='parent.XewMerkmale(this,\""+idx+"\");' size=8>");
for (i in Q['x'][idx]) {
if (i != 'value' && i != 'y' && i != 'activ' && i != 'msg' && i !='name' && i != 'curr' && i != 'action' && i != 'enctype' && i != 'zin' && i != 'ziv' && i != 'zit' && i != 'eva') {
write("<OPTION value='"+ i +"'");
if (i == ind) write("selected");
writeln(">"+unescape(Q['x'][idx][i]));
}
}
writeln("<OPTION value = 'neu'>"+ A_CONFIG_SYSTEM_SZA_NM);
writeln("</SELECT></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SZA_MB +"</TD><TD>"+ FONT_A +"<INPUT type=text name='na' size=15 value='"+na+"' onChange='parent.XexMerkmale(this,\""+idx+"\",\""+ind+"\");'></TD></TR>");
writeln("<TR><TD>"+ FONT_A_SMALL +"<INPUT type=button value='"+ btn +"'>");
if (ind != 'neu')
writeln("<TD>"+ FONT_A_SMALL +"<INPUT type=button value='"+A_DELETE+"' name='del' onClick='parent.XexMerkmale(this,\""+idx+"\",\""+ind+"\");'></TD></TR>");
writeln("<TD>"+ FONT_A_SMALL +"<INPUT type=button value='"+A_LEAVE+"' onClick='parent.Xew(\""+idx+"\");'></TD></TR>");
writeln("</TABLE>");
writeln("</FORM>");
writeln(ADMIN_BOT);
close();
} //with
}
function XexMerkmale(i_obj, idx, ind)
{
if (i_obj.type == 'text') {
if (i_obj.name == 'na') {
if (ind == 'neu') {
ind = Q['x'][idx].length;
Q['x'][idx][ind] = new Array();
}
Q['x'][idx][ind] = i_obj.value;
}
}
if (i_obj.type == 'button' && i_obj.name == 'del') {
var sys_array = new Array();
for (j in Q['x'][idx]) {
if (j != ind)
sys_array[j] = Q['x'][idx][j];
}
Q['x'][idx] = sys_array;
ind = '-1';
}
Xcv('refresh');
XewMerkmale(ind, idx);
}
function Xhy()
{
var g = new Array();
g[0] = "select";
g[1] = "multiple-select";
g[2] = "radio";
g[3] = "checkbox";
g[4] = "text";
return g;
}
function Xhx(i_obj)
{
var f = new Array();
var na = req = '';
idx = 'neu';
ftype = '';
f = Xhy();
if (i_obj != '-1') {
if (i_obj.type == 'select-multiple')
idx = i_obj.options[i_obj.selectedIndex].value;
else idx = i_obj;
}
if (idx != 'neu') {
na = unescape(Q['B'][idx]['name']);
req = Q['B'][idx]['required'];
ftype = unescape(Q['B'][idx]['ftype']);
}
with (s.document) {
open();
writeln(ADMIN_TOP);
writeln("<FORM name=sys_fts onSubmit='return false;'>");
writeln("<TABLE width=560 border=0>");
write("<TR><TD>"+ FONT_A_BIG + A_CONFIG_SYSTEM_SFT_NNA +"</FONT></TD>");
if (idx == 'neu') write("<TD>"+ FONT_A_BIG + A_INSERT +"</FONT></TD>");
else write("<TD>"+ FONT_A_BIG + A_CHANGE +"</FONT></TD>");
writeln("<TD align=right>"+ FONT_A_SMALL);
writeln("<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#A_merkmale');\"");
writeln("value='"+ A_NAME_HELP +"'></FONT></TD></TR>");
writeln("<TR>\n<TD valign=top rowspan=12>");
writeln(FONT_A + "<SELECT name=\"fts\" onChange='parent.Xhx(this);' size=8>");
for (i in Q['B'])
if (Q['B'][i]) {
write("<OPTION value='"+ i +"'");
if (i == idx) write("selected");
writeln(">"+unescape(Q.B[i].name));
}
writeln("<OPTION value = 'neu'>"+ A_CONFIG_SYSTEM_SFT_N);
writeln("</SELECT></TD></TR>");
write("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SFT_NA +"</FONT></TD><TD>"+ FONT_A +"<INPUT type=text name='na' size=15 value='"+na+"'");
if (idx != 'neu') write("onChange='parent.Xhv(this,\""+idx+"\");'");
writeln("></FONT></TD></TR>");
write("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SFT_REQ +"</FONT></TD><TD>"+ FONT_A +"<INPUT type=checkbox name='req'");
if (idx != 'neu') {
write("onClick='parent.Xhv(this,\""+idx+"\");'");
if (req == 'y') write("checked");
}
writeln("></TD></TR>");
write("<TR><TD>"+FONT_A + "<SELECT name=\"ftstype\"");
if (idx != 'neu') write("onChange='parent.Xhv(this,\""+idx+"\");'");
writeln(">");
for (i in f) {
write("<OPTION value='"+i+"'");
if (f[i] == ftype) write("selected");
writeln(">"+f[i]);
}
writeln("</SELECT></TD></TR>");
if (idx == 'neu')
writeln("<TR><TD>"+ FONT_A_SMALL +"<INPUT type=button value='"+A_INSERT+"' onClick='parent.Xhv(this,\""+idx+"\");'></FONT>");
else {
writeln("<TR><TD>"+ FONT_A_SMALL +"<INPUT type=button value='"+A_USE+"'></FONT>");
writeln(FONT_A_SMALL +"<INPUT type=button value='"+A_DELETE+"' onClick='parent.Xhu();'></FONT></TD>");
writeln("<TD>"+ FONT_A_SMALL +"<INPUT type=button value='"+A_DO_MORE+"' onClick='parent.Xht(\""+idx+"\", this);'></FONT></TD></TR>");
}
writeln("</TABLE></FORM>");
writeln(ADMIN_BOT);
close();
} //with
}
function Xhw()
{
var idx = Q.B.length;
for (i = 0; i < Q.B.length; i++)
if (!Q.B[i]) {
idx = i;
break;
}
return idx;
}
function Xhv(i_obj, i)
{
var f = new Array();
f = Xhy();
if (i_obj.type == 'text') {
if (i_obj.value) Q.B[i].name = escape(i_obj.value);
else return;
}
else if (i_obj.type == 'checkbox') {
if (i_obj.checked) Q.B[i].required = 'y';
else Q.B[i].required = 'n';
}
else if (i_obj.type == 'select-one') {
idx = i_obj.options[i_obj.selectedIndex].value;
for (j in f)
if (j == idx) Q.B[i].ftype = f[j];
}
else if (i_obj.type == 'button') {
with (s.document.sys_fts) {
if (!na.value) return;
i = Xhw();
Q.B[i] = new Array();
Q.B[i].name = escape(na.value);
if (req.checked) Q.B[i].required = 'y';
else Q.B[i].required = 'n';
idx = ftstype.options[ftstype.selectedIndex].value;
for (j in f)
if (j == idx) Q.B[i].ftype = f[j];
}
}
Xcv('refresh');
Xhx(i);
}
function Xhu()
{
var pos, f = new Array();
with (s.document.sys_fts) {
qu = '';
pos = fts.options[fts.selectedIndex].value;
Q['B'][pos] = false;
for (i in A) {
if (A[i].p_feature == pos) A[i].p_feature = '-1';
if (A[i][pos]) A[i][pos] = false;
if (!A[i].B) continue;
str = A[i].B;
feat = str.substring(0,str.length-1);
fe = feat.split(',');
str = '';
for (fi in fe){
if (fe[fi] == pos) continue;
else str += fe[fi] +",";
}
if (str.length)
A[i].B = str;
else A[i].B = '';
}
Xcv('refresh');
Xhx('-1');
}
}
function Xht(ix, i_obj)
{
var idx = 'neu', na = '';
var A_FTS = unescape(Q['B'][ix]['name']);
var A_CONFIG_SYSTEM_SFT_N = "Neue "+A_FTS+" eingeben";
if (i_obj != '-1') {
if (i_obj.type == 'select-multiple')
idx = i_obj.options[i_obj.selectedIndex].value;
else if (i_obj.type != 'button') idx = i_obj;
if (idx == 'neu') na = '';
else na = unescape(Q['B'][ix][idx]);
}
with (s.document) {
open();
writeln(ADMIN_TOP);
writeln("<FORM name=sys_morefts onSubmit='return false;'>");
writeln("<TABLE width=560 border=0>");
write("<TR><TD>"+ FONT_A_BIG + A_FTS +"</FONT></TD>");
if (idx == 'neu') write("<TD>"+ FONT_A_BIG + A_INSERT +"</FONT></TD>");
else write("<TD>"+ FONT_A_BIG + A_CHANGE +"</FONT></TD>");
writeln("<TD align=right>"+ FONT_A_SMALL +"<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#zahlungsweise');\"");
writeln("value='"+ A_NAME_HELP +"'></FONT></TD></TR>");
writeln("<TR>\n<TD valign=top rowspan=12>");
writeln(FONT_A + "<SELECT name=\"fts\" onChange='parent.Xht(\""+ix+"\",this);' size=8>");
for (i in Q.B[ix]) {
if (i == 'name' || i == 'required' || i == 'ftype') continue;
write("<OPTION value='"+ i +"'");
if (i == idx) write("selected");
writeln(">"+unescape(Q.B[ix][i]));
}
writeln("<OPTION value = 'neu'>"+ A_CONFIG_SYSTEM_SFT_N);
writeln("</SELECT></TD></TR>");
writeln("<TR><TD>"+ FONT_A + unescape(Q['B'][ix]['name']) +": "+"</FONT></TD><TD>"+ FONT_A +"<INPUT type=text name='na' size=15 value='"+na+"'");
if (idx != 'neu') writeln("onChange='parent.Xhs(this,\""+ix+"\",\""+idx+"\");'");
writeln("></FONT></TD></TR>");
if (idx == 'neu')
writeln("<TR><TD>"+ FONT_A_SMALL +"<INPUT type=button value='"+A_INSERT+"' onClick='parent.Xhs(this,\""+ix+"\",\""+idx+"\");'></FONT>");
else {
writeln("<TR><TD>"+ FONT_A_SMALL +"<INPUT type=button value='"+A_USE+"'></FONT>");
writeln(FONT_A_SMALL +"<INPUT type=button value='"+A_DELETE+"' onClick='parent.Xhr(\""+ix+"\",\""+idx+"\");'></FONT>");
}
writeln("<TD>"+FONT_A_SMALL +"<INPUT type=button value='"+A_LEAVE+"' onClick='parent.Xhx(\""+ix+"\");'></FONT></TD></TR>");
writeln("</TABLE></FORM>");
writeln(ADMIN_BOT);
close();
} //with
}
function Xhs(i_obj, ix, idx)
{
with (s.document.sys_morefts) {
if (!na.value) return;
if (i_obj.type == 'button') {
idx = Q['B'][ix].length;
Q['B'][ix][idx] = new Array();
}
Q['B'][ix][idx] = escape(na.value);
Xcv('refresh');
Xht(ix, idx);
}
}
function Xhr(ix, idx)
{
var f = new Array();
na = Q['B'][ix]['name'];
req = Q['B'][ix]['required'];
ftype = Q['B'][ix]['ftype'];
for (i in Q['B'][ix]) {
if (i < idx)
f[i] = Q['B'][ix][i];
else f[i] = Q['B'][ix][i+1];
if (i+1 == Q['B'][ix].length-1) break;
}
Q['B'][ix] = f;
Q['B'][ix]['required'] = req;
Q['B'][ix]['name'] = na;
Q['B'][ix]['ftype'] = ftype;
Xcv('refresh');
Xht(ix,'-1');
}
function Xfb(txt)
{
Q['nbase'] = txt;
nshow = txt;
LEFT = false;
Xfc('-1');
Xcv('refresh');
}
function Xfc(i_obj)
{
var na = '', idx = 'neu';
var btn = A_INSERT;
if (i_obj != '-1') {
if (i_obj.type == 'select-multiple')
idx = i_obj.options[i_obj.selectedIndex].value;
else idx = i_obj;
}
if (idx != 'neu') {
na = Q['n'][idx];
btn = A_USE;
}
with (s.document) {
open();
writeln(ADMIN_TOP);
writeln("<FORM name=sys_ns onSubmit='return false;'>");
writeln("<TABLE width=560 border=0>");
writeln("<TR>\n<TD valign=top>"+ FONT_A);
writeln("<INPUT type=radio name=mw value = 'brutto' onClick='parent.Xfb(this.value);'");
if (Q['nbase'] == 'brutto')
write("checked");
writeln("><A HREF='javascript:parent.Xfb(\"brutto\");' onclick='sys_ns.mw[0].checked = true'>"+ "Preise sind brutto" +"</A>");
writeln("</TD><TD colspan=2>"+ FONT_A +"<INPUT type=radio name=mw value = 'netto' onClick='parent.Xfb(this.value);'");
if (Q['nbase'] == 'netto')
write("checked");
writeln("><A HREF='javascript:parent.Xfb(\"netto\");' onclick='sys_ns.mw[1].checked = true'>"+ "Preise sind netto" +"</A></TD>");
write("<TR><TD>"+FONT_A_BIG+ A_NAME_ADMIN_SMW +"</FONT></TD>");
if (idx == 'neu')
write("<TD>"+ FONT_A_BIG + A_INSERT +"</FONT></TD>");
else write("<TD>"+ FONT_A_BIG + A_CHANGE +"</FONT></TD>");
writeln("<TD align=right>"+ FONT_A_SMALL +"<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#n');\"");
writeln("value='"+ A_NAME_HELP +"'></FONT></TD></TR>");
writeln("<TR><TD rowspan=7>"+FONT_A+"<SELECT name=\"n\" onChange='parent.Xfc(this);' size=6>");
for (i in Q['n']) {
write("<OPTION value='"+ i +"'");
if (i == idx)
write("selected");
writeln(">"+Q['n'][i]);
}
write("<OPTION value = 'neu'>"+ A_CONFIG_SYSTEM_SMW_N);
writeln("</SELECT></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SLG_M +"</TD><TD>"+ FONT_A +"<INPUT type=text name='na' size=7 maxlength=5 value='"+na+"' onChange='parent.Xfd(this,\""+idx+"\");'>&nbsp;" +"%"+"</TD></TR>");
writeln("</TR>");
writeln("<TR><TD colspan=2 align=middle>"+ FONT_A_SMALL +"<INPUT type=button value='"+ btn +"'>");
if (idx != 'neu')
write("<INPUT type=button value='"+ A_DELETE +"' onClick='parent.Xfd(this,\""+idx+"\");'>");
writeln("</TD></TR>");
writeln("</TABLE></FORM>");
writeln(ADMIN_BOT);
close();
} //with
}
function Xfd(i_obj, idx)
{
with (s.document.sys_ns) {
if (!i_obj.value) return;
if (i_obj.type == 'text') {
if (idx == 'neu') {
idx = Q['n'].length;
Q['n'][idx] = new Array();
}
Q['n'][idx] = i_obj.value;
}
if (i_obj.type == 'button') {
Xey('n', idx);
idx = '-1';
}
Xcv('refresh');
Xfc(idx);
} //of with
}
function Xfe(i_obj)
{
var re = vali = '';
VAL = 'no';
idx = 'neu', btn = A_INSERT;
if (i_obj != '-1') {
if (i_obj.type == 'select-multiple')
idx = i_obj.options[i_obj.selectedIndex].value;
else idx = i_obj;
}
if (idx != 'neu') {
na = unescape(Q['W'][idx]['name']);
de = unescape(Q['W'][idx]['default']);
if (de == 'undefined') de = '';
re = Q['W'][idx]['required'];
vali = unescape(Q['W'][idx]['validation']);
btn = A_USE;
}
with (s.document) {
open();
writeln(ADMIN_TOP);
writeln("<FORM name=sys_Wes onSubmit='return false;'>");
writeln("<TABLE width=560 border=0>");
write("<TR><TD>"+FONT_A_BIG+ A_NAME_ADMIN_A +"</FONT></TD>");
if (idx == 'neu') tmp = A_INSERT;
else tmp = A_CHANGE;
write("<TD>"+ FONT_A_BIG + tmp +"</FONT></TD>");
writeln("<TD align=right>"+ FONT_A_SMALL +"<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#kundenD');\"");
writeln("value='"+ A_NAME_HELP +"'></FONT></TD></TR>");
writeln("<TR>\n<TD valign=top width=35% rowspan=12>");
writeln(FONT_A + "<SELECT name=\"Wes\" onChange='parent.Xfe(this);' size=8>");
for (i in Q['W']) {
write("<OPTION value='"+ i +"'");
if (i == idx)
write("selected");
writeln(">"+unescape(Q['W'][i]['name']));
}
write("<OPTION value = 'neu'>"+ A_CONFIG_SYSTEM_SA_N);
writeln("</SELECT></TD></TR>");
if (idx == 'neu') {
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SA_NA +"</TD><TD>"+ FONT_A +"<INPUT type=text name='na' size=15 value=''></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SA_DE +"</TD><TD>"+ FONT_A +"<INPUT type=text name='de' size=10 value=''></TD></TR>");
write("<TR><TD colspan=2>"+ FONT_A + "<INPUT type=checkbox name='req'>"+ FONT_A +A_CONFIG_SYSTEM_SA_RE+"</TD></TR>");
}
else {
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SA_NA +"</TD><TD>"+ FONT_A +"<INPUT type=text name='na' size=15 value='"+unescape(Q['W'][idx]['name'])+"' onChange='parent.Xff(\""+idx+"\");'></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SA_DE +"</TD><TD>"+ FONT_A +"<INPUT type=text name='de' size=10 value='"+de+"' onChange='parent.Xff(\""+idx+"\");'></TD></TR>");
write("<TR><TD colspan=2>"+ FONT_A + "<INPUT type=checkbox name='req' onClick='parent.Xgt(\""+idx+"\");'");
if (re == 'yes') write ("checked");
writeln(">"+ FONT_A +A_CONFIG_SYSTEM_SA_RE+"</TD></TR>");
}
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SA_VALI+"</FONT></TD>");
writeln("<TD>"+ FONT_A+"<SELECT name=\"valid\" onChange='parent.Xgr(this,\""+idx+"\");'>");
writeln("<OPTION value='help'>"+A_CONFIG_SYSTEM_SA_NO+"");
write("<OPTION value='tel'");
if (vali == 'tel') write ("selected");
writeln(">"+A_CONFIG_SYSTEM_SA_TEL+"");
write("<OPTION value='plz'");
if (vali == 'plz') write ("selected");
writeln(">"+A_CONFIG_SYSTEM_SA_PLZ+"");
write("<OPTION value='ad'");
if (vali == 'ad') write ("selected");
writeln(">"+A_CONFIG_SYSTEM_SA_MAIL+"");
write("<OPTION value='url'");
if (vali == 'url') write ("selected");
writeln(">"+A_CONFIG_SYSTEM_SA_URL+"");
writeln("</SELECT></FONT></TD></TR>");
if (idx == 'neu')
writeln("<TR><TD colspan=2 align=middle>"+ FONT_A_SMALL +"<INPUT type=button value='"+A_INSERT+"'onClick='parent.Xgs();'>");
else {
writeln("<TR><TD colspan=2 align=middle>"+ FONT_A_SMALL +"<INPUT type=button value='"+A_USE+"'>");
write("<INPUT type=button value='"+A_DELETE+"' onClick='parent.Xgq(\""+idx+"\");'>");
}
writeln("</TD></TR></TABLE></FORM>");
writeln(ADMIN_BOT);
close();
}
}
function Xff(idx)
{
with (s.document.sys_Wes) {
if (na.value) {
Q['W'][idx]['name'] = Xgx(na.value);
Q['W'][idx]['default'] = Xgx(de.value);
Xcv('data');
}
else alert(A_CONFIG_SYSTEM_SA_ADD);
}
}
function Xgt(idx)
{
if (idx == 'neu') return;
if (Q['W'][idx]['required'] == 'no')
Q['W'][idx]['required'] = 'yes';
else Q['W'][idx]['required'] = 'no';
Xcv('data');
}
function Xgs()
{
var idx = Q['W'].length;
with (s.document.sys_Wes) {
Q['W'][idx] = new Array;
Q['W'][idx]['validation'] = VAL;
if (req.checked)
Q['W'][idx]['required'] = 'yes';
else Q['W'][idx]['required'] = 'no';
Xff(idx);
Xfe('-1');
}
}
function Xgr(i_obj, idx)
{
VAL = i_obj.options[i_obj.selectedIndex].value;
if (idx != 'neu') {
Q['W'][idx]['validation'] = Xgx(VAL);
Xcv('data');
}
}
function Xgq(idx)
{
Xey('W', idx);
Xcv('data');
Xfe('-1');
}
function Xfg(i_obj)
{
var hash = '', factor = '', jfactor = '';
var idx = 'neu', btn = A_INSERT;
if (i_obj != '-1') {
if (i_obj.type == 'select-multiple')
idx = i_obj.options[i_obj.selectedIndex].value;
else idx = i_obj;
}
if (idx != 'neu') {
if (idx != 'base') {
hash = idx;
if (Xbm(idx) == 'false')
factor = Xfj(Q['R'][idx]);
else {
if (idx != 'EUR')
jfactor = Xfj(Q['T'][idx]['euro']);
else if (EUROLAND == 'true') jfactor = Xfj(Q['T'][CURR]['euro']);
else factor = Xfj(Q['R'][idx]);
}
}
btn = A_USE;
}
with (s.document) {
open();
writeln(ADMIN_TOP);
writeln("<FORM name=sys_currencies onSubmit='return false;'>");
writeln("<TABLE width=560 border=0>");
write("<TR><TD>"+FONT_A_BIG+A_NAME_ADMIN_W+"</FONT></TD>");
if (idx == 'neu')
write("<TD>"+ FONT_A_BIG + A_INSERT +"</FONT></TD>");
else write("<TD>"+ FONT_A_BIG + A_CHANGE +"</FONT></TD>");
writeln("<TD align=right>"+ FONT_A_SMALL +"<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#waehrungen');\"");
writeln("value='"+ A_NAME_HELP +"'></FONT></TD></TR>");
writeln("<TR>\n<TD valign=top width=35% rowspan=12>"+ FONT_A);
writeln("<INPUT type=radio name=T value ='T' onClick='parent.Xfh(this.value);'");
if (EUROLAND == 'true') write("checked");
writeln("><A HREF='javascript:parent.Xfh(\"T\");' onclick='T[0].checked = true'>"+ A_CONFIG_SYSTEM_SW_EUY +"</A>");
writeln("<BR><INPUT type=radio name=T value = 'no_T' onClick='parent.Xfh(this.value);'");
if (EUROLAND == 'false') write("checked");
writeln("><A HREF='javascript:parent.Xfh(\"no_T\");' onclick='T[1].checked = true'>"+ A_CONFIG_SYSTEM_SW_EUN +"</A><BR>");
writeln("<SELECT name=\"currencies\" onChange='parent.Xfg(this);' size=8>");
Xct();
if (EUROLAND == 'true') {
writeln("<OPTION value='base'>"+A_CONFIG_SYSTEM_SW_H + CURR +"<BR>");
for (j in Q['T'])
if (Q['T'][j]['use'] == 'y') {
write("<OPTION value='"+ j +"'");
if (j == idx) write("selected");
writeln(Xbn('T',j));
}
}
else
writeln("<OPTION value='base'>"+A_CONFIG_SYSTEM_SW_H + CURR);
for (k in Q['R']) {
if (k == CURR || k == 'base') continue;
write("<OPTION value='"+ k +"'");
if (k == idx) write("selected");
writeln(Xbn('R',k));
}
write("<OPTION value = 'neu'>"+ A_CONFIG_SYSTEM_SW_N);
writeln("</SELECT></TD></TR>");
if (EUROLAND == 'true') {
if (idx == 'base') {
write("<TR><TD>"+ FONT_A +A_CONFIG_SYSTEM_SW_H+"</TD><TD>"+ FONT_A );
writeln("<SELECT name=\"eurocurr\" onChange='parent.Xfi(this);'>");
for (i in Q['T']) {
write("<OPTION value='"+ i +"'");
if (Q['R']['base'] == i) write("selected");
writeln(">"+ Q['T'][i]['name'] );
}
writeln("</SELECT></TD></TR>");
writeln("<TR><TD colspan=2 align=middle>"+ FONT_A_SMALL +"<INPUT type=button value='"+ A_CHANGE +"'>");
writeln("</TD></TR>");
}
else {
if (idx != 'neu' && Xbm(idx) == 'true') {
if (idx == 'EUR') {
writeln("<TR><TD>"+ FONT_A +A_CONFIG_SYSTEM_SW_H+"</TD><TD>"+ FONT_A + CURR +"</TD></TR>");
writeln("<TR><TD>"+ FONT_A +A_CONFIG_SYSTEM_SW_U+"</TD><TD>"+ FONT_A + A_CONFIG_SYSTEM_SW_EUEIN + Q['T'][CURR]['euro'] + "&nbsp;" + CURR +"</TD></TR>");
}
else {
writeln("<TR><TD>"+ FONT_A +A_CONFIG_SYSTEM_SW_NA+"</TD><TD>"+ FONT_A + Q['T'][idx]['name'] +"</TD></TR>");
writeln("<TR><TD>"+ FONT_A +A_CONFIG_SYSTEM_SW_U+"</TD><TD>"+ FONT_A + A_CONFIG_SYSTEM_SW_EUEIN + jfactor + "&nbsp;" + idx +"</TD></TR>");
}
writeln("</TR><TR><TD>");
writeln("<TR><TD colspan=2 align=middle>"+ FONT_A_SMALL +"<INPUT type=button value='"+A_CONFIG_SYSTEM_SW_EUB+"' onClick='parent.Xfk(-1);'>");
}
else {
writeln("<TR><TD>"+ FONT_A +A_CONFIG_SYSTEM_SW_NA+"</TD><TD>"+ FONT_A +"<INPUT type=text name='hash' size=7 value='"+ hash +"' onchange='parent.Xfn(this,\""+idx+"\");'></TD></TR>");
writeln("<TR><TD>"+FONT_A+A_CONFIG_SYSTEM_SW_U+A_CONFIG_SYSTEM_SW_EUEIN+"</TD><TD>"+FONT_A+"<INPUT type=text name='factor' size=7 value='"+ factor +"' onchange='parent.Xfn(this,\""+idx+"\");'></TD></TR>");
writeln("</TR><TR><TD colspan=2 align=middle>"+ FONT_A_SMALL +"<INPUT type=button value='"+ btn +"'>");
if (idx == 'neu') writeln("<TR><TD colspan=2 align=middle>"+ FONT_A_SMALL +"<INPUT type=button value='"+A_CONFIG_SYSTEM_SW_EUB+"' onClick='parent.Xfk(-1);'>");
}
}
}
if (EUROLAND == 'false') {
if (idx == 'base') {
writeln("<TR><TD>"+ FONT_A +A_CONFIG_SYSTEM_SW_H+"</TD><TD>"+ FONT_A +"<INPUT type=text name='base' size=7 value='"+CURR+"' onChange='parent.Xfi(this);'></TD></TR>");
writeln("<TR><TD colspan=2 align=middle>"+ FONT_A_SMALL +"<INPUT type=button value='"+ A_CHANGE +"'>");
writeln("</TD></TR>");
}
else {
writeln("<TR><TD>"+ FONT_A +A_CONFIG_SYSTEM_SW_NA+"</TD><TD>"+ FONT_A +"<INPUT type=text name='hash' size=7 value='"+ hash +"' onchange='parent.Xfn(this,\""+idx+"\");'></TD></TR>");
writeln("<TR><TD>"+ FONT_A +A_CONFIG_SYSTEM_SW_U+"1 "+CURR+" = "+"</TD><TD>"+ FONT_A +"<INPUT type=text name='factor' size=7 value='"+ factor +"' onchange='parent.Xfn(this,\""+idx+"\");'></TD></TR>");
writeln("</TR><TR><TD colspan=2 align=middle>"+ FONT_A_SMALL +"<INPUT type=button value='"+ btn +"'>");
}
}
if (idx != -1 && idx != 'neu' && idx != 'base')
writeln("<TD>"+ FONT_A_SMALL +"<INPUT type=button value='"+ A_DELETE +"' onClick='parent.Xfl(\""+idx+"\");'>");
writeln("</TD></TR>");
writeln("</TABLE></FORM>");
writeln(ADMIN_BOT);
close();
} //with
}
function Xfh(i_obj)
{
if (i_obj == 'T') {
if (EUROLAND == 'false') {
EUROLAND = 'true';
Q['R']['base'] = 'EUR';
}
else return;
}
else {
if (EUROLAND == 'true') EUROLAND = 'false';
else return;
}
Q['EUROLAND'] = EUROLAND;
Xct();
LEFT = false;
Xcv('refresh');
Xfg('-1');
}
function Xfi(i_obj) {
if (i_obj.name == 'base')
Q['R']['base'] = i_obj.value;
if (i_obj.type == 'select-one') {
idx = i_obj.options[i_obj.selectedIndex].value;
Q['R']['base'] = idx;
}
Xct();
LEFT = false;
Xcv('refresh');
Xfg('base');
}
function Xfj(i_obj)
{
var wert = 0;
zw = i_obj;
punkt = zw.indexOf(".");
if (punkt == '-1')
wert = zw;
else {
vk = zw.substring(0, punkt);
if (vk == '') vk = "0";
nk = zw.substring(punkt+1, zw.length);
wert = vk + "," + nk;
}
return wert;
}
function Xfk(i_obj)
{
var idx = '', hash = '', factor = '';
if (i_obj != '-1') {
if (i_obj.type == 'select-multiple') {
idx = i_obj.options[i_obj.selectedIndex].value;
if (idx != 'EUR') {
hash = Q['T'][idx]['name'];
factor = Xfj(Q['T'][idx]['euro']);
}
else {
hash = Q['T'][CURR]['name'];
factor = Xfj(Q['T'][CURR]['euro']);
}
}
}
with (s.document) {
open();
writeln(ADMIN_TOP);
writeln("<FORM name=sys_eurocurr onSubmit='return false;'>");
writeln("<TABLE width=560 border=0>");
write("<TR><TD>"+FONT_A_BIG+A_CONFIG_SYSTEM_SW_EUNA+"</FONT></TD>");
write("<TD>"+ FONT_A_BIG + A_INSERT +"</FONT></TD>");
writeln("<TD align=right>"+ FONT_A +"<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#waehrungen');\"");
writeln("value='"+ A_NAME_HELP +"'></FONT></TD></TR>");
writeln("<TR><TD rowspan=5>"+ FONT_A);
writeln("<SELECT name=\"eurocurr\" size=11 onChange='parent.Xfk(this);'>");
for (i in Q['T']) {
if (Q['T'][i]['use'] == 'n') {
write("<OPTION value='"+ i +"'");
if (i == idx) write("selected");
writeln(">"+ Q['T'][i]['name'] );
}
}
writeln("</SELECT></TD></TR>");
if (idx == 'EUR') {
writeln("<TR><TD>"+ FONT_A +A_CONFIG_SYSTEM_SW_H+"</TD><TD>"+ FONT_A + hash +"</TD></TR>");
writeln("<TR><TD>"+ FONT_A +A_CONFIG_SYSTEM_SW_U+"</TD><TD>"+ FONT_A + A_CONFIG_SYSTEM_SW_EUEIN + factor + "&nbsp;" + CURR +"</TD></TR>");
}
else {
writeln("<TR><TD>"+ FONT_A +A_CONFIG_SYSTEM_SW_NA+"</TD><TD>"+ FONT_A + hash +"</TD></TR>");
if (idx)
writeln("<TR><TD>"+ FONT_A +A_CONFIG_SYSTEM_SW_U+"</TD><TD>"+ FONT_A + A_CONFIG_SYSTEM_SW_EUEIN + factor + "&nbsp;" + idx +"</TD></TR>");
else writeln("<TR><TD>"+ FONT_A +A_CONFIG_SYSTEM_SW_U+"</TD><TD>"+ FONT_A +A_CONFIG_SYSTEM_SW_EUEIN +"</TD></TR>");
}
writeln("<TR><TD colspan=2 align=middle>"+ FONT_A_SMALL +"<INPUT type=button value='"+ A_INSERT +"' onClick='parent.Xfm(\""+idx+"\");'></TD>");
writeln("<TD>"+ FONT_A_SMALL +"<INPUT type=button value='"+A_LEAVE+"' onClick='parent.Xfg(-1);'></TD></TR>");
writeln("</TABLE></FORM>");
writeln(ADMIN_BOT);
close();
} //with
}
function Xfl(idx)
{
if (idx == SELECTED_CURRENCY)
SELECTED_CURRENCY = CURR;
if (Xbm(idx) == 'true')
Q['T'][idx]['use'] = 'n';
else {
var sys_array = new Array();
for (i in Q['R'])
if (i != idx)
sys_array[i] = Q['R'][i];
Q['R'] = sys_array;
}
Xct();
LEFT = false;
Xcv('refresh');
Xfg('-1');
}
function Xfm(idx)
{
Q['T'][idx]['use'] = 'y';
LEFT = false;
Xcv('refresh');
Xfk('-1');
}
function Xfn(i_obj, idx)
{
with (s.document.sys_currencies) {
if (!i_obj) return;
if (i_obj.type == 'text') {
if (i_obj.name == 'hash' || i_obj.name == 'factor') {
if (hash.value == '' || factor.value == '') return;
zw = factor.value;
if (isNaN(zw)) {
komma = zw.indexOf(",");
if (komma == '-1') {
alert(A_CONFIG_SYSTEM_SW_EUERR);
return;
}
else {
vk = zw.substring(0, komma);
nk = zw.substring(komma+1, zw.length);
zw = vk + "." + nk;
}
}
if (idx == 'neu') {
idx = hash.value;
Q['R'][idx] = new Array();
Q['R'][idx] = zw;
}
else {
var sys_array = new Array();
for (i in Q['R']) {
if (i == idx)
sys_array[hash.value] = zw;
else sys_array[i] = Q['R'][i];
}
Q['R'] = sys_array;
idx = hash.value;
}
}
}
LEFT = false;
Xcv('refresh');
Xfg(idx);
}
}
function Xfo(i_obj)
{
with (s.document.sysedit) {
if (i_obj.type == 'textarea') {
for (i in htm) {
if (htm[i].checked)
Q[htm[i].value] = Xgx(i_obj.value);
}
}
else if (i_obj.type == 'radio')
htmltext.value = unescape(Q[i_obj.value]);
else htmltext.value = unescape(Q[i_obj]);
E_init_C();
LEFT = false;
Xcv('refresh');
}// of with
}
function Xfp(i_obj)
{
if (ART == 'v') {
A_CHOICE = A_NAME_ADMIN_LG;
auswahlhinzu = A_CONFIG_SYSTEM_SLG_N;
txtna = A_CONFIG_SYSTEM_SLG_NA;
txtval = A_CONFIG_SYSTEM_SFR_Z;
txtlim = A_CONFIG_SYSTEM_SFR_ZF;
txtn = A_CONFIG_SYSTEM_SLG_M;
helptmp = 'liefergebiete';
}
if (ART == 'u') {
A_CHOICE = A_NAME_ADMIN_FR;
auswahlhinzu = A_CONFIG_SYSTEM_SFR_N;
txtna = A_CONFIG_SYSTEM_SFR_NA;
txtval = A_CONFIG_SYSTEM_SFR_Z;
txtlim = A_CONFIG_SYSTEM_SFR_ZF;
txtn = A_CONFIG_SYSTEM_SLG_M;
helptmp = 'versandarten';
}
if (i_obj == '-1' ) idx = 'neu';
else if (i_obj.type == 'select-multiple')
idx = i_obj.options[i_obj.selectedIndex].value;
else idx = i_obj;
with (s.document) {
open();
writeln(ADMIN_TOP);
writeln("<FORM name=sysconfig onSubmit='return false;'>");
writeln("<TABLE width=560 border=0>");
write("<TR><TD>"+FONT_A_BIG+ A_CHOICE +"</FONT></TD>");
if (idx == 'neu') btn = A_INSERT;
else btn = A_CHANGE;
write("<TD>"+ FONT_A_BIG +btn+"</FONT></TD>");
writeln("<TD align=right>"+ FONT_A_SMALL +"<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#"+ helptmp +"');\"");
writeln("value='"+ A_NAME_HELP +"'></FONT></TD></TR>");
writeln("<TR>\n<TD valign=top width=35% rowspan=12>");
writeln(FONT_A + "<SELECT name=\"selectart\" onChange='parent.Xfp(this);' size=8>");
for (i in Q[ART]) {
write("<OPTION value='"+ i +"'");
if (i == idx) write("selected");
writeln(">"+unescape(Q[ART][i]['name']));
}
write("<OPTION value = 'neu'>"+ auswahlhinzu);
writeln("</SELECT></TD></TR>");
if (idx == 'neu') {
writeln("<TR><TD>"+ FONT_A + txtna +"</TD><TD>"+ FONT_A +"<INPUT type=text name='na' size=15 value=''></TD></TR>");
writeln("<TR><TD>"+ FONT_A + txtval +"</TD><TD>"+ FONT_A +"<INPUT type=text name='val' size=10 value=''>&nbsp;"+ CURR +"</TD></TR>");
writeln("<TR><TD>"+ FONT_A + txtlim +"</TD><TD>"+ FONT_A +"<INPUT type=text name='lim' size=10 value=''>&nbsp;"+ CURR +"</TD></TR>");
if (ART == 'v')
writeln("<TR><TD>"+ FONT_A + txtn +"</TD><TD>"+ FONT_A +"<INPUT type=checkbox name='n' size=10 value=''></TD></TR>");
writeln("<TR><TD colspan=2 align=middle>"+ FONT_A_SMALL +"<INPUT type=button value='"+A_INSERT+"' onClick='parent.Xfq(this,\""+idx+"\");'>");
}
else {
writeln("<TR><TD>"+ FONT_A + txtna +"</TD><TD>"+ FONT_A +"<INPUT type=text name='na' size=15 value='"+unescape(Q[ART][idx]['name'])+"' onChange='parent.Xfq(this,\""+idx+"\");'></TD></TR>");
writeln("<TR><TD>"+ FONT_A + txtval +"</TD><TD>"+ FONT_A +"<INPUT type=text name='val' size=10 value='"+Xbl(Q[ART][idx]['value'])+"' onChange='parent.Xfq(this,\""+idx+"\");'>&nbsp;"+ CURR +"</TD></TR>");
writeln("<TR><TD>"+ FONT_A + txtlim +"</TD><TD>"+ FONT_A +"<INPUT type=text name='lim' size=10 value='"+Xbl(Q[ART][idx]['y'])+"' onChange='parent.Xfq(this,\""+idx+"\");'>&nbsp;"+ CURR +"</TD></TR>");
if (ART == 'v') {
write("<TR><TD>"+ FONT_A + txtn +"</TD><TD>"+ FONT_A +"<INPUT type=checkbox name='n' size=10 value='"+Q['v'][idx]['n']+"' onClick='parent.Xfq(this,\""+idx+"\");'");
if (Q['v'][idx]['n'] == 'yes') write ("checked");
writeln("></TD></TR>");
}
writeln("<TR><TD colspan=2 align=middle>"+ FONT_A_SMALL +"<INPUT type=button value='"+A_USE+"'>");
writeln("<INPUT type=button value='"+A_DELETE+"' onClick='parent.Xfq(this,\""+idx+"\");'>");
}
writeln("</FONT></TD></TR></TABLE></FORM>");
writeln(ADMIN_BOT);
close();
}//of with
}
function a_doEditArt(idx)
{
with (s.document.sysconfig) {
if (idx == Q[ART].length)
Q[ART][idx] = new Array;
Q[ART][idx]['name'] = Xgx(na.value);
Q[ART][idx]['value'] = Xev(val.value);
Q[ART][idx]['y'] = Xev(lim.value);
if (ART == 'v') {
if (n.checked == 'true')
Q[ART][idx]['n'] = 'yes';
else Q[ART][idx]['n'] = 'no';
}
}
}
function Xfq(i_obj, idx)
{
if (!i_obj.value) {
if (ART == 'u') alert(A_CONFIG_SYSTEM_SFR_B);
else alert(A_CONFIG_SYSTEM_SLG_B);
return;
}
with (s.document.sysconfig) {
if (i_obj.type == 'button') {
if (idx == 'neu')
a_doEditArt(Q[ART].length);
else Xey(ART, idx);
}
if (i_obj.type == 'text')
a_doEditArt(idx);
if (i_obj.type == 'checkbox') {
if (Q[ART][idx]['n'] == 'no')
Q[ART][idx]['n'] = 'yes';
else Q[ART][idx]['n'] = 'no';
}
Xcm();
Xcv('data');
if (i_obj.type == 'button') Xfp('-1');
if (i_obj.name == 'na') Xfp(idx);
}
}
function XewAction(pix){
var action = ''+ unescape(Q['action']);
var enc = ''+ unescape(Q['enctype']);
var zit = '';
var zin = '';
var ziv = '';
var eva = '';
if (!Q['x'][pix]){
alert("There is no x idx = "+ pix);
return;
}
if (Q['x'][pix]['action'])
action = unescape(Q['x'][pix]['action']);
if (Q['x'][pix]['enctype'])
enc = unescape(Q['x'][pix]['enctype']);
if (Q['x'][pix]['zit'])
zit = unescape(Q['x'][pix]['zit']);
if (Q['x'][pix]['zin'])
zin = unescape(Q['x'][pix]['zin']);
if (Q['x'][pix]['ziv'])
ziv = unescape(Q['x'][pix]['ziv']);
if (Q['x'][pix]['eva'])
eva = unescape(Q['x'][pix]['eva']);
with (s.document) {
open();
writeln(ADMIN_TOP);
writeln("<FORM name=sysedit>");
writeln("<TABLE width=560>");
writeln("<TR><TD colspan=3>"+FONT_A_BIG+A_CONFIG_SYSTEM_SL+"</FONT></TD>");
writeln("<TD align=right>"+ FONT_A_SMALL +"<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#abschicken_pay');\"");
writeln("value='"+ A_NAME_HELP +"'></FONT></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SL_A+"</TD><TD>");
writeln("<INPUT type=text name='action' size=40 onChange='parent.Xhq(this,"+ pix +");'></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SL_E+"</TD><TD>"+ FONT_A);
write("<SELECT name='enctype' ");
writeln(" onChange='parent.Xhq(this,"+ pix +");'>");
write("<OPTION value='text/plain'");
if ('text/plain' == enc)
write(" selected ");
writeln(">"+ A_CONFIG_SYSTEM_SL_MAIL);
write("<OPTION value='application/x-www-form-urlencoded'");
if ('application/x-www-form-urlencoded' == enc)
write(" selected ");
writeln(">"+ A_CONFIG_SYSTEM_SL_CGI);
write("<OPTION value='enter'>");
writeln( A_CONFIG_SYSTEM_SL_OWN);
write("</SELECT></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SL_ZI +"</TD><TD>");
writeln(FONT_A + A_CONFIG_SYSTEM_SL_ZIT +"&nbsp;&nbsp;<INPUT type=text name='zit' size=15 onChange='parent.Xhq(this,"+ pix +");'><BR>&nbsp;&nbsp;");
writeln(A_CONFIG_SYSTEM_SL_ZIN +" &nbsp;&nbsp;<INPUT type=text name='zin' size=15 onChange='parent.Xhq(this,"+ pix +");'><BR>");
writeln(A_CONFIG_SYSTEM_SL_ZIV +"&nbsp;<INPUT type=text name='ziv' size=35 onChange='parent.Xhq(this,"+ pix +");'></TD></TR>");
writeln("<TR><TD colspan=4>"+ FONT_A + A_CONFIG_SYSTEM_SL_EVA +"<INPUT type=text size=40 name=eva onChange='parent.Xhq(this,"+ pix +");'></TD></TR>");
writeln("<TR><TD colspan=2>"+ FONT_A +"<INPUT type=button value='"+ A_USE +"'></TD>");
writeln("<TD colspan=2>"+ FONT_A_SMALL +"<INPUT type=button value='"+A_LEAVE+"' onClick='parent.Xew(\""+pix+"\");'></TD></TR>");
writeln("</TABLE>");
writeln("</FORM>");
writeln(ADMIN_BOT);
close();
}//of with
s.document.sysedit.action.value = action;
s.document.sysedit.zit.value = zit;
s.document.sysedit.zin.value = zin;
s.document.sysedit.ziv.value = ziv;
s.document.sysedit.eva.value = eva;
}
function Xhq(io, pix) {
if (!Q['x'][pix]){
alert("There is no x idx = "+ pix);
return;
}
if (io.type == 'text')
Q['x'][pix][io.name] = Xgx(io.value);
else if (io.type == 'select-one'){
var wert = ''+ io.options[io.selectedIndex].value;
if (wert == 'enter'){
wert = prompt(A_CONFIG_SYSTEM_SL_ASK,'');
if (wert.length == 0)
return;
}
Q['x'][pix][io.name] = Xgx(wert);
}
else if (io.type == 'checkbox'){
if (io.checked)
Q['x'][pix][io.name] = 'on';
else
Q['x'][pix][io.name] = 'off';
}
else if (io.type == 'textarea')
Q['x'][pix][io.name] = Xgx(io.value);
else
alert('NOT DEFINED! ' + io.type);
Xcm();
Xcv('refresh');
}
function Xfr(i_ob, color) {
var fnt_font = '', fnt_size = '', fnt_color = '', new_font = '';
with (s.document.sysfonts) {
fnt_name = fonts[fonts.selectedIndex].value;
fnt = unescape(Q[fnt_name]);
first = fnt.indexOf('"') + 1;
fnt_font = fnt.substring(first,fnt.indexOf('"', first));
second = fnt.indexOf('"', first + fnt_font.length + 1 ) + 1;
fnt_size = "size%3D%22"+ fnt.substring(second,fnt.indexOf('"', second)) +"%22";
fnt_color = fnt.substring(fnt.indexOf('color'),fnt.lastIndexOf('>'));
if (color.length) {
fnt_color = "color=" + escape(color);
}
else if (i_ob.name == 'fnt_face') {
fnt_font = i_ob.value;
}
else if (i_ob.name == 'gr') {
var val = i_ob.options[i_ob.selectedIndex].value;
if (val.length) fnt_size = "size=%22" + val +"%22";
else fnt_size = 'size=%22%22';
}
}
Q[fnt_name] = "<FONT%20face%3D%22"+ fnt_font +"%22%20"+ fnt_size +"%20"+ fnt_color +">" ;
Xck();
LEFT = false;
Xcv('refresh');
}
function Xfs(i_obj)
{
var fnt_name, fnt_face = '';
if (i_obj != '-1')
if (i_obj.type == 'select-multiple') {
fnt_name = i_obj.options[i_obj.selectedIndex].value;
fnt_face = unescape(Q[fnt_name]);
}
with (s.document) {
open();
writeln(ADMIN_TOP);
writeln("<FORM name=sysfonts onSubmit='return false;'>");
writeln("<TABLE width=560 border=0>");
write("<TR><TD>"+FONT_A_BIG+ A_NAME_ADMIN_F +"</FONT></TD>");
write("<TD>"+ FONT_A_BIG + A_CHANGE +"</FONT></TD>");
writeln("<TD align=right colspan=3>"+ FONT_A_SMALL +"<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#schriften');\"");
writeln("value='"+ A_NAME_HELP +"'></FONT></TD></TR>");
writeln("<TR>\n<TD valign=top width=35% rowspan=12>");
writeln(FONT_A + "<SELECT name=\"fonts\" onChange='parent.Xft(this);' size=8>");
write("<OPTION value='font'>"+A_CONFIG_SYSTEM_SF_B+"");
write("<OPTION value='au'>"+A_CONFIG_SYSTEM_SF_N+"");
write("<OPTION value='au_h'>"+A_CONFIG_SYSTEM_SF_NH+"");
write("<OPTION value='aw'>"+A_CONFIG_SYSTEM_SF_S+"");
write("<OPTION value='font_e'>"+A_CONFIG_SYSTEM_SF_E+"");
write("<OPTION value='ay'>"+A_CONFIG_SYSTEM_SF_A+"");
writeln("</SELECT></FONT><P><BR>");
writeln( FONT_A_SMALL +"<INPUT type=button value='"+ A_USE +"'></FONT></TD></TR>");
writeln("<TR><TD align=left>");
writeln(FONT_A + A_CONFIG_SYSTEM_SF_F +": </TD><TD colspan=3>"+ FONT_A +"<INPUT type=text name=fnt_face size=20 value='"+fnt_face+"' onChange='parent.Xfr(this,\"\");'></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SF_G +": </TD><TD>"+ FONT_A +"<SELECT name=gr onChange='parent.Xfr(this,\"\");'>");
writeln("<OPTION value='+4'> +4<OPTION value='+3'> +3<OPTION value='+2'> +2<OPTION value='+1'> +1<OPTION selected value=''> +-0<OPTION value='-1'> -1<OPTION value='-2'> -2<OPTION value='-3'> -3<OPTION value='-4'> -4</SELECT></TD>");
Xgb('sf');
writeln("<TR><TD valign=top>"+ FONT_A + A_CONFIG_SYSTEM_SF_C +":</TD><TD colspan=3><IMG SRC='../gif/cube.gif' align=texttop WIDTH=292 HEIGHT=196 BORDER=0 USEMAP=\"#map_webpal\" ISMAP></TD></TR>");
writeln("</TABLE>");
close();
}//with
}
function Xft(i_obj)
{
var fnt_size = '';
with (s.document.sysfonts) {
fnt_name = fonts[fonts.selectedIndex].value;
fnt = unescape(Q[fnt_name]);
first = fnt.indexOf('"') + 1;
fnt_font = fnt.substring(first,fnt.indexOf('"', first));
fnt_face.value = fnt_font;
second = fnt.indexOf('"', first + fnt_font.length + 1) + 1;
fnt_size = fnt.substring(second,fnt.indexOf('"', second));
for (ind = 0 ; ind < gr.length ; ind++)
if (gr.options[ind].value == fnt_size) {
gr.selectedIndex = ind;
break;
}
}
}
function Xfu(i_obj)
{
var idx = '', na = '';
if (i_obj && i_obj.type == 'select-multiple') {
idx = i_obj.options[i_obj.selectedIndex].value;
na = unescape(Q[idx]);
}
with (s.document) {
open();
writeln(ADMIN_TOP);
writeln("<FORM name=sys_tables onSubmit='return false;'>");
writeln("<TABLE width=560 border=0>");
write("<TR><TD>"+FONT_A_BIG+ A_NAME_ADMIN_TBL +"</FONT></TD>");
write("<TD>"+ FONT_A_BIG + A_CHANGE +"</FONT></TD>");
writeln("<TD align=right colspan=3>"+ FONT_A_SMALL +"<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#farben');\"");
writeln("value='"+ A_NAME_HELP +"'></FONT></TD></TR>");
writeln("<TR>\n<TD valign=top width=35% rowspan=12>");
writeln(FONT_A + "<SELECT name=\"colors\" size=8 onChange='parent.Xfu(this);'></FONT>");
write("<OPTION value='pt_bgc'");
if (idx == 'pt_bgc') write("selected");
writeln(">"+A_CONFIG_SYSTEM_TBL_PTBGC+"");
write("<OPTION value='pt_l'");
if (idx == 'pt_l') write("selected");
writeln(">"+A_CONFIG_SYSTEM_TBL_PTL+"");
write("<OPTION value='pt_vl");
if (idx == 'pt_vl') write("selected");
writeln("'>"+A_CONFIG_SYSTEM_TBL_PTVL+"");
write("<OPTION value='pt_al'");
if (idx == 'pt_al') write("selected");
writeln(">"+A_CONFIG_SYSTEM_TBL_PTAL+"");
write("<OPTION value='np_bgc'");
if (idx == 'np_bgc') write("selected");
writeln(">"+A_CONFIG_SYSTEM_TBL_NPBGC+"");
write("<OPTION value='tbg_nt'");
if (idx == 'tbg_nt') write("selected");
writeln(">"+A_CONFIG_SYSTEM_TBL_TBGNT+"");
write("<OPTION value='tbg_np'");
if (idx == 'tbg_np') write("selected");
writeln(">"+A_CONFIG_SYSTEM_TBL_TBGNP+"");
write("<OPTION value='tbg_p'");
if (idx == 'tbg_p') write("selected");
writeln(">"+A_CONFIG_SYSTEM_TBL_TBGP+"");
write("<OPTION value='tbg_pt'");
if (idx == 'tbg_pt') write("selected");
writeln(">"+A_CONFIG_SYSTEM_TBL_TBGPT+"");
write("<OPTION value='tbg_pn'");
if (idx == 'tbg_pn') write("selected");
writeln(">"+A_CONFIG_SYSTEM_TBL_TBGPN+"");
write("<OPTION value='tbg_b'");
if (idx == 'tbg_b') write("selected");
writeln(">"+A_CONFIG_SYSTEM_TBL_TBGB+"");
write("<OPTION value='tbg_br'");
if (idx == 'tbg_br') write("selected");
writeln(">"+A_CONFIG_SYSTEM_TBL_TBGBR+"");
write("<OPTION value='tbg_bn'");
if (idx == 'tbg_bn') write("selected");
writeln(">"+A_CONFIG_SYSTEM_TBL_TBGBN+"");
writeln("</SELECT></FONT><P><BR>");
writeln(FONT_A_SMALL +"<INPUT type=button value='"+ A_USE +"'></FONT></TD></TR>");
writeln("<TR><TD valign=top>"+ FONT_A + A_CONFIG_SYSTEM_SF_C +":</TD>");
if (na != '')
bg_na = "bgcolor="+ na ;
else
bg_na = '';
writeln("<TD "+ bg_na +">"+ FONT_A +"<INPUT type=text name='farbe' value='"+na+"' size=12 onChange='parent.Xfv(this.value);'></FONT>");
writeln( FONT_A +"<INPUT type=button value='"+ A_NOCOLOR +"' onClick='parent.Xfv(this.value);'></FONT><BR>");
Xgb("tbl");
writeln("<IMG SRC='../gif/cube.gif' align=texttop WIDTH=292 HEIGHT=196 BORDER=0 USEMAP=\"#map_webpal\" ISMAP></TD></TR>");
writeln("</TD></TR></TABLE>");
close();
}//with
}
function Xfv(i_obj)
{
var na = '', fnd = false;
with (s.document.sys_tables) {
for (i = 0; i < colors.length; i++)
if (colors[i].selected) {
na = '' + colors[i].value;
fnd = true;
break;
}
if (!fnd) {
alert(A_CONFIG_SYSTEM_TBL_AW);
return;
}
Q[na] = '';
if (i_obj.indexOf('#') != '-1')
Q[na] = escape(i_obj);
farbe.value = unescape(Q[na]);
Xck();
E_init_C();
LEFT = false;
Xcv('refresh');
}
}
function Xfx(i_obj)
{
var idx = '-1', na = '', indx = '-1', tp = '';
if (i_obj != '-1') {
if (i_obj.type == 'select-multiple' && i_obj.name == 'borders') {
idx = i_obj.options[i_obj.selectedIndex].value;
na = Q[idx];
if (idx == 'tb_pt') indx = 'tp_pt';
if (idx == 'tb_pn') indx = 'tp_pn';
if (idx == 'tb_p') indx = 'tp_p';
if (idx == 'tb_n') indx = 'tp_n';
tp = Q[indx];
}
}
with (s.document) {
open();
writeln(ADMIN_TOP);
writeln("<FORM name=sys_borders onSubmit='return false;'>");
writeln("<TABLE width=560 border=0>");
write("<TR><TD>"+FONT_A_BIG+ A_NAME_ADMIN_TBO +"</FONT></TD>");
write("<TD>"+ FONT_A_BIG + A_CHANGE +"</FONT></TD>");
writeln("<TD align=right>"+ FONT_A_SMALL +"<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#rahmen');\"");
writeln("value='"+ A_NAME_HELP +"'></FONT></TD></TR>");
writeln("<TR>\n<TD valign=top width=35% rowspan=12>");
writeln(FONT_A + "<SELECT name=\"borders\" size=4 onChange='parent.Xfx(this);'>");
write("<OPTION value='tb_pt'");
if (idx == 'tb_pt') write("selected");
writeln(">"+A_CONFIG_SYSTEM_TBL_TBPT+"");
write("<OPTION value='tb_pn'");
if (idx == 'tb_pn') write("selected");
writeln(">"+A_CONFIG_SYSTEM_TBL_TBPN+"");
write("<OPTION value='tb_p'");
if (idx == 'tb_p') write("selected");
writeln(">"+A_CONFIG_SYSTEM_TBL_TBP+"");
write("<OPTION value='tb_n'");
if (idx == 'tb_n') write("selected");
writeln(">"+A_CONFIG_SYSTEM_TBL_TBN+"");
writeln("</SELECT><BR>");
writeln(A_CONFIG_SYSTEM_TBL_T_W +": <BR><INPUT type=text size=8 name='t_w' value='"+ unescape(Q['t_w']) +"' onChange='parent.Xet(this);'>");
writeln("</TD></TR>");
writeln("<TR><TD>" + FONT_A + A_CONFIG_SYSTEM_TBL_BO +": </TD><TD>"+ FONT_A +"<INPUT type=text name=na size=6 value='"+na+"' onChange='parent.Xfw(this.value,\""+idx+"\");'></TD></TR>");
writeln("<TR><TD>" + FONT_A + A_CONFIG_SYSTEM_TBL_TP +": </TD><TD>"+ FONT_A +"<INPUT type=text name=tp size=6 value='"+tp+"' onChange='parent.Xfw(this.value,\""+indx+"\");'></TD></TR>");
writeln("<TR><TD>"+ FONT_A_SMALL +"<INPUT type=button value='"+ A_USE +"'></FONT></TD></TR>");
writeln("</TD></TR></TABLE>");
close();
}//with
}
function Xfw(i_obj, idx)
{
with (s.document.sys_borders) {
if (!i_obj.length) return;
if (idx == '-1') {
alert(A_CONFIG_SYSTEM_TBL_AW);
return;
}
if (isNaN(i_obj) || i_obj.indexOf('.') != '-1') {
alert(A_CONFIG_SYSTEM_TBO_GZ);
return;
}
if (i_obj > 15) {
alert(A_CONFIG_SYSTEM_TBO_KZ);
return;
}
Q[idx] = i_obj;
Xck();
E_init_C();
//Xcq();
LEFT = false;
Xcv('refresh');
}//with
}
function Xfy(i_obj)
{
var idx = '';
if (i_obj == '-1')
idx = 'aq_file';
else if (i_obj.type == 'select-multiple')
idx = i_obj.options[i_obj.selectedIndex].value;
with (s.document) {
open();
writeln(ADMIN_TOP);
writeln("<FORM name=vsseite onSubmit='return false;'>");
writeln("<TABLE width=560 border=0>");
write("<TR><TD>"+ FONT_A_BIG + A_NAME_ADMIN_VS +"</FONT></TD>");
write("<TD>"+ FONT_A_BIG + A_CHANGE +"</FONT></TD>");
writeln("<TD align=right>"+ FONT_A_SMALL +"<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#vorschaltseite');\"");
writeln("value='"+ A_NAME_HELP +"'></FONT></TD></TR>");
writeln("<TR>\n<TD valign=top rowspan=12>");
writeln(FONT_A + "<SELECT name=\"vss\" onChange='parent.Xfy(this);' size=5>");
write("<OPTION value='aq_file'");
if (idx == 'aq_file') write("selected");
writeln(">"+A_CONFIG_SYSTEM_VS_DAT);
write("<OPTION value='aq_ok1'");
if (idx == 'aq_ok1') write("selected");
writeln(">"+A_CONFIG_SYSTEM_VS_OK1);
write("<OPTION value='aq_ok2'");
if (idx == 'aq_ok2') write("selected");
writeln(">"+A_CONFIG_SYSTEM_VS_OK2);
write("<OPTION value='aq_noscript'");
if (idx == 'aq_noscript') write("selected");
writeln(">"+A_CONFIG_SYSTEM_VS_NOS);
write("<OPTION value='aq_old'");
if (idx == 'aq_old') write("selected");
writeln(">"+A_CONFIG_SYSTEM_VS_OLD);
writeln("</SELECT></FONT></TD></TR>");
if (idx == 'aq_file') {
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_VS_IND +"</TD><TD>"+ FONT_A +"<INPUT type=text name='ind' size=15 value='"+unescape(admin['ind'])+"' onChange='parent.Xfz(this);'></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_VS_DAT +"</TD><TD>"+ FONT_A +"<INPUT type=text name='aq_file' size=15 value='"+unescape(admin['aq_file'])+"' onChange='parent.Xfz(this);'></TD></TR>");
writeln("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_VS_PWD +"</TD><TD>"+ FONT_A +"<INPUT type=checkbox name='pwd' onClick='parent.Xfz(this);'");
if (admin['password'] == 'on') writeln("checked");
writeln("></TD></TR>");
}
else {
writeln("<TR><TD colspan=2>"+ FONT_A +"<TEXTAREA cols=28 rows=8 name='vsmsg' wrap=virtual onChange='parent.a_doEditVSC(this,\""+idx+"\");'>");
write(unescape(admin[idx])+"</TEXTAREA></FONT></TD></TR>");
}
write("<TR><TD>"+ FONT_A_SMALL +"<INPUT type=button value='"+ A_USE +"'></FONT></TD>");
writeln("</TABLE></FORM>");
writeln(ADMIN_BOT);
close();
}
}
function Xfz(io)
{
if (io.type == 'text')
admin[io.name] = escape(io.value);
if (io.name == 'pwd') {
if (admin['password'] == 'on') admin['password'] = 'off';
else admin['password'] = 'on';
}
}
function a_doEditVSC(io, idx)
{
admin[idx] = Xgx(io.value);
}
function Xgb(i_obj){
with (s.document){
writeln('<MAP NAME="map_webpal">');
writeln('<!--- Row 1 --->');
writeln('<AREA COORDS="2,2,18,18" HREF="javascript:parent.Xgc(\'#330000\',\''+i_obj+'\')">');
writeln('<AREA COORDS="18,2,34,18" HREF="javascript:parent.Xgc(\'#333300\',\''+i_obj+'\')">');
writeln('<AREA COORDS="34,2,50,18" HREF="javascript:parent.Xgc(\'#336600\',\''+i_obj+'\')">');
writeln('<AREA COORDS="50,2,66,18" HREF="javascript:parent.Xgc(\'#339900\',\''+i_obj+'\')">');
writeln('<AREA COORDS="66,2,82,18" HREF="javascript:parent.Xgc(\'#33CC00\',\''+i_obj+'\')">');
writeln('<AREA COORDS="82,2,98,18" HREF="javascript:parent.Xgc(\'#33FF00\',\''+i_obj+'\')">');
writeln('<AREA COORDS="98,2,114,18" HREF="javascript:parent.Xgc(\'#66FF00\',\''+i_obj+'\')">');
writeln('<AREA COORDS="114,2,130,18" HREF="javascript:parent.Xgc(\'#66CC00\',\''+i_obj+'\')">');
writeln('<AREA COORDS="130,2,146,18" HREF="javascript:parent.Xgc(\'#669900\',\''+i_obj+'\')">');
writeln('<AREA COORDS="146,2,162,18" HREF="javascript:parent.Xgc(\'#666600\',\''+i_obj+'\')">');
writeln('<AREA COORDS="162,2,178,18" HREF="javascript:parent.Xgc(\'#663300\',\''+i_obj+'\')">');
writeln('<AREA COORDS="178,2,194,18" HREF="javascript:parent.Xgc(\'#660000\',\''+i_obj+'\')">');
writeln('<AREA COORDS="194,2,210,18" HREF="javascript:parent.Xgc(\'#FF0000\',\''+i_obj+'\')">');
writeln('<AREA COORDS="210,2,226,18" HREF="javascript:parent.Xgc(\'#FF3300\',\''+i_obj+'\')">');
writeln('<AREA COORDS="226,2,242,18" HREF="javascript:parent.Xgc(\'#FF6600\',\''+i_obj+'\')">');
writeln('<AREA COORDS="242,2,258,18" HREF="javascript:parent.Xgc(\'#FF9900\',\''+i_obj+'\')">');
writeln('<AREA COORDS="258,2,274,18" HREF="javascript:parent.Xgc(\'#FFCC00\',\''+i_obj+'\')">');
writeln('<AREA COORDS="274,2,290,18" HREF="javascript:parent.Xgc(\'#FFFF00\',\''+i_obj+'\')">');
writeln('<!--- Row 2 --->');
writeln('<AREA COORDS="2,18,18,34" HREF="javascript:parent.Xgc(\'#330033\',\''+i_obj+'\')">');
writeln('<AREA COORDS="18,18,34,34" HREF="javascript:parent.Xgc(\'#333333\',\''+i_obj+'\')">');
writeln('<AREA COORDS="34,18,50,34" HREF="javascript:parent.Xgc(\'#336633\',\''+i_obj+'\')">');
writeln('<AREA COORDS="50,18,66,34" HREF="javascript:parent.Xgc(\'#339933\',\''+i_obj+'\')">');
writeln('<AREA COORDS="66,18,82,34" HREF="javascript:parent.Xgc(\'#33CC33\',\''+i_obj+'\')">');
writeln('<AREA COORDS="82,18,98,34" HREF="javascript:parent.Xgc(\'#33FF33\',\''+i_obj+'\')">');
writeln('<AREA COORDS="98,18,114,34" HREF="javascript:parent.Xgc(\'#66FF33\',\''+i_obj+'\')">');
writeln('<AREA COORDS="114,18,130,34" HREF="javascript:parent.Xgc(\'#66CC33\',\''+i_obj+'\')">');
writeln('<AREA COORDS="130,18,146,34" HREF="javascript:parent.Xgc(\'#669933\',\''+i_obj+'\')">');
writeln('<AREA COORDS="146,18,162,34" HREF="javascript:parent.Xgc(\'#666633\',\''+i_obj+'\')">');
writeln('<AREA COORDS="162,18,178,34" HREF="javascript:parent.Xgc(\'#663333\',\''+i_obj+'\')">');
writeln('<AREA COORDS="178,18,194,34" HREF="javascript:parent.Xgc(\'#660033\',\''+i_obj+'\')">');
writeln('<AREA COORDS="194,18,210,34" HREF="javascript:parent.Xgc(\'#FF0033\',\''+i_obj+'\')">');
writeln('<AREA COORDS="210,18,226,34" HREF="javascript:parent.Xgc(\'#FF3333\',\''+i_obj+'\')">');
writeln('<AREA COORDS="226,18,242,34" HREF="javascript:parent.Xgc(\'#FF6633\',\''+i_obj+'\')">');
writeln('<AREA COORDS="242,18,258,34" HREF="javascript:parent.Xgc(\'#FF9933\',\''+i_obj+'\')">');
writeln('<AREA COORDS="258,18,274,34" HREF="javascript:parent.Xgc(\'#FFCC33\',\''+i_obj+'\')">');
writeln('<AREA COORDS="274,18,290,34" HREF="javascript:parent.Xgc(\'#FFFF33\',\''+i_obj+'\')">');
writeln('<!--- Row 3 --->');
writeln('<AREA COORDS="2,34,18,50" HREF="javascript:parent.Xgc(\'#330066\',\''+i_obj+'\')">');
writeln('<AREA COORDS="18,34,34,50" HREF="javascript:parent.Xgc(\'#333366\',\''+i_obj+'\')">');
writeln('<AREA COORDS="34,34,50,50" HREF="javascript:parent.Xgc(\'#336666\',\''+i_obj+'\')">');
writeln('<AREA COORDS="50,34,66,50" HREF="javascript:parent.Xgc(\'#339966\',\''+i_obj+'\')">');
writeln('<AREA COORDS="66,34,82,50" HREF="javascript:parent.Xgc(\'#33CC66\',\''+i_obj+'\')">');
writeln('<AREA COORDS="82,34,98,50" HREF="javascript:parent.Xgc(\'#33FF66\',\''+i_obj+'\')">');
writeln('<AREA COORDS="98,34,114,50" HREF="javascript:parent.Xgc(\'#66FF66\',\''+i_obj+'\')">');
writeln('<AREA COORDS="114,34,130,50" HREF="javascript:parent.Xgc(\'#66CC66\',\''+i_obj+'\')">');
writeln('<AREA COORDS="130,34,146,50" HREF="javascript:parent.Xgc(\'#669966\',\''+i_obj+'\')">');
writeln('<AREA COORDS="146,34,162,50" HREF="javascript:parent.Xgc(\'#666666\',\''+i_obj+'\')">');
writeln('<AREA COORDS="162,34,178,50" HREF="javascript:parent.Xgc(\'#663366\',\''+i_obj+'\')">');
writeln('<AREA COORDS="178,34,194,50" HREF="javascript:parent.Xgc(\'#660066\',\''+i_obj+'\')">');
writeln('<AREA COORDS="194,34,210,50" HREF="javascript:parent.Xgc(\'#FF0066\',\''+i_obj+'\')">');
writeln('<AREA COORDS="210,34,226,50" HREF="javascript:parent.Xgc(\'#FF3366\',\''+i_obj+'\')">');
writeln('<AREA COORDS="226,34,242,50" HREF="javascript:parent.Xgc(\'#FF6666\',\''+i_obj+'\')">');
writeln('<AREA COORDS="242,34,258,50" HREF="javascript:parent.Xgc(\'#FF9966\',\''+i_obj+'\')">');
writeln('<AREA COORDS="258,34,274,50" HREF="javascript:parent.Xgc(\'#FFCC66\',\''+i_obj+'\')">');
writeln('<AREA COORDS="274,34,290,50" HREF="javascript:parent.Xgc(\'#FFFF66\',\''+i_obj+'\')">');
writeln('<!--- Row 4 --->');
writeln('<AREA COORDS="2,50,18,66" HREF="javascript:parent.Xgc(\'#330099\',\''+i_obj+'\')">');
writeln('<AREA COORDS="18,50,34,66" HREF="javascript:parent.Xgc(\'#333399\',\''+i_obj+'\')">');
writeln('<AREA COORDS="34,50,50,66" HREF="javascript:parent.Xgc(\'#336699\',\''+i_obj+'\')">');
writeln('<AREA COORDS="50,50,66,66" HREF="javascript:parent.Xgc(\'#339999\',\''+i_obj+'\')">');
writeln('<AREA COORDS="66,50,82,66" HREF="javascript:parent.Xgc(\'#33CC99\',\''+i_obj+'\')">');
writeln('<AREA COORDS="82,50,98,66" HREF="javascript:parent.Xgc(\'#33FF99\',\''+i_obj+'\')">');
writeln('<AREA COORDS="98,50,114,66" HREF="javascript:parent.Xgc(\'#66FF99\',\''+i_obj+'\')">');
writeln('<AREA COORDS="114,50,130,66" HREF="javascript:parent.Xgc(\'#66CC99\',\''+i_obj+'\')">');
writeln('<AREA COORDS="130,50,146,66" HREF="javascript:parent.Xgc(\'#669999\',\''+i_obj+'\')">');
writeln('<AREA COORDS="146,50,162,66" HREF="javascript:parent.Xgc(\'#666699\',\''+i_obj+'\')">');
writeln('<AREA COORDS="162,50,178,66" HREF="javascript:parent.Xgc(\'#663399\',\''+i_obj+'\')">');
writeln('<AREA COORDS="178,50,194,66" HREF="javascript:parent.Xgc(\'#660099\',\''+i_obj+'\')">');
writeln('<AREA COORDS="194,50,210,66" HREF="javascript:parent.Xgc(\'#FF0099\',\''+i_obj+'\')">');
writeln('<AREA COORDS="210,50,226,66" HREF="javascript:parent.Xgc(\'#FF3399\',\''+i_obj+'\')">');
writeln('<AREA COORDS="226,50,242,66" HREF="javascript:parent.Xgc(\'#FF6699\',\''+i_obj+'\')">');
writeln('<AREA COORDS="242,50,258,66" HREF="javascript:parent.Xgc(\'#FF9999\',\''+i_obj+'\')">');
writeln('<AREA COORDS="258,50,274,66" HREF="javascript:parent.Xgc(\'#FFCC99\',\''+i_obj+'\')">');
writeln('<AREA COORDS="274,50,290,66" HREF="javascript:parent.Xgc(\'#FFFF99\',\''+i_obj+'\')">');
writeln('<!--- Row 5 --->');
writeln('<AREA COORDS="2,66,18,82" HREF="javascript:parent.Xgc(\'#3300CC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="18,66,34,82" HREF="javascript:parent.Xgc(\'#3333CC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="34,66,50,82" HREF="javascript:parent.Xgc(\'#3366CC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="50,66,66,82" HREF="javascript:parent.Xgc(\'#3399CC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="66,66,82,82" HREF="javascript:parent.Xgc(\'#33CCCC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="82,66,98,82" HREF="javascript:parent.Xgc(\'#33FFCC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="98,66,114,82" HREF="javascript:parent.Xgc(\'#66FFCC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="114,66,130,82" HREF="javascript:parent.Xgc(\'#66CCCC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="130,66,146,82" HREF="javascript:parent.Xgc(\'#6699CC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="146,66,162,82" HREF="javascript:parent.Xgc(\'#6666CC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="162,66,178,82" HREF="javascript:parent.Xgc(\'#6633CC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="178,66,194,82" HREF="javascript:parent.Xgc(\'#6600CC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="194,66,210,82" HREF="javascript:parent.Xgc(\'#FF00CC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="210,66,226,82" HREF="javascript:parent.Xgc(\'#FF33CC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="226,66,242,82" HREF="javascript:parent.Xgc(\'#FF66CC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="242,66,258,82" HREF="javascript:parent.Xgc(\'#FF99CC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="258,66,274,82" HREF="javascript:parent.Xgc(\'#FFCCCC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="274,66,290,82" HREF="javascript:parent.Xgc(\'#FFFFCC\',\''+i_obj+'\')">');
writeln('<!--- Row 6 --->');
writeln('<AREA COORDS="2,82,18,98" HREF="javascript:parent.Xgc(\'#3300FF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="18,82,34,98" HREF="javascript:parent.Xgc(\'#3333FF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="34,82,50,98" HREF="javascript:parent.Xgc(\'#3366FF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="50,82,66,98" HREF="javascript:parent.Xgc(\'#3399FF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="66,82,82,98" HREF="javascript:parent.Xgc(\'#33CCFF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="82,82,98,98" HREF="javascript:parent.Xgc(\'#33FFFF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="98,82,114,98" HREF="javascript:parent.Xgc(\'#66FFFF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="114,82,130,98" HREF="javascript:parent.Xgc(\'#66CCFF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="130,82,146,98" HREF="javascript:parent.Xgc(\'#6699FF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="146,82,162,98" HREF="javascript:parent.Xgc(\'#6666FF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="162,82,178,98" HREF="javascript:parent.Xgc(\'#6633FF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="178,82,194,98" HREF="javascript:parent.Xgc(\'#6600FF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="194,82,210,98" HREF="javascript:parent.Xgc(\'#FF00FF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="210,82,226,98" HREF="javascript:parent.Xgc(\'#FF33FF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="226,82,242,98" HREF="javascript:parent.Xgc(\'#FF66FF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="242,82,258,98" HREF="javascript:parent.Xgc(\'#FF99FF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="258,82,274,98" HREF="javascript:parent.Xgc(\'#FFCCFF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="274,82,290,98" HREF="javascript:parent.Xgc(\'#FFFFFF\',\''+i_obj+'\')">');
writeln('<!--- Row 7 --->');
writeln('<AREA COORDS="2,98,18,114" HREF="javascript:parent.Xgc(\'#0000FF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="18,98,34,114" HREF="javascript:parent.Xgc(\'#0033FF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="34,98,50,114" HREF="javascript:parent.Xgc(\'#0066FF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="50,98,66,114" HREF="javascript:parent.Xgc(\'#0099FF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="66,98,82,114" HREF="javascript:parent.Xgc(\'#00CCFF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="82,98,98,114" HREF="javascript:parent.Xgc(\'#00FFFF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="98,98,114,114" HREF="javascript:parent.Xgc(\'#99FFFF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="114,98,130,114" HREF="javascript:parent.Xgc(\'#99CCFF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="130,98,146,114" HREF="javascript:parent.Xgc(\'#9999FF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="146,98,162,114" HREF="javascript:parent.Xgc(\'#9966FF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="162,98,178,114" HREF="javascript:parent.Xgc(\'#9933FF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="178,98,194,114" HREF="javascript:parent.Xgc(\'#9900FF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="194,98,210,114" HREF="javascript:parent.Xgc(\'#CC00FF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="210,98,226,114" HREF="javascript:parent.Xgc(\'#CC33FF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="226,98,242,114" HREF="javascript:parent.Xgc(\'#CC66FF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="242,98,258,114" HREF="javascript:parent.Xgc(\'#CC99FF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="258,98,274,114" HREF="javascript:parent.Xgc(\'#CCCCFF\',\''+i_obj+'\')">');
writeln('<AREA COORDS="274,98,290,114" HREF="javascript:parent.Xgc(\'#CCFFFF\',\''+i_obj+'\')">');
writeln('<!--- Row 8 --->');
writeln('<AREA COORDS="2,114,18,130" HREF="javascript:parent.Xgc(\'#0000CC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="18,114,34,130" HREF="javascript:parent.Xgc(\'#0033CC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="34,114,50,130" HREF="javascript:parent.Xgc(\'#0066CC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="50,114,66,130" HREF="javascript:parent.Xgc(\'#0099CC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="66,114,82,130" HREF="javascript:parent.Xgc(\'#00CCCC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="82,114,98,130" HREF="javascript:parent.Xgc(\'#00FFCC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="98,114,114,130" HREF="javascript:parent.Xgc(\'#99FFCC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="114,114,130,130" HREF="javascript:parent.Xgc(\'#99CCCC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="130,114,146,130" HREF="javascript:parent.Xgc(\'#9999CC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="146,114,162,130" HREF="javascript:parent.Xgc(\'#9966CC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="162,114,178,130" HREF="javascript:parent.Xgc(\'#9933CC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="178,114,194,130" HREF="javascript:parent.Xgc(\'#9900CC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="194,114,210,130" HREF="javascript:parent.Xgc(\'#CC00CC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="210,114,226,130" HREF="javascript:parent.Xgc(\'#CC33CC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="226,114,242,130" HREF="javascript:parent.Xgc(\'#CC66CC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="242,114,258,130" HREF="javascript:parent.Xgc(\'#CC99CC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="258,114,274,130" HREF="javascript:parent.Xgc(\'#CCCCCC\',\''+i_obj+'\')">');
writeln('<AREA COORDS="274,114,290,130" HREF="javascript:parent.Xgc(\'#CCFFCC\',\''+i_obj+'\')">');
writeln('<!--- Row 9 --->');
writeln('<AREA COORDS="2,130,18,146" HREF="javascript:parent.Xgc(\'#000099\',\''+i_obj+'\')">');
writeln('<AREA COORDS="18,130,34,146" HREF="javascript:parent.Xgc(\'#003399\',\''+i_obj+'\')">');
writeln('<AREA COORDS="34,130,50,146" HREF="javascript:parent.Xgc(\'#006699\',\''+i_obj+'\')">');
writeln('<AREA COORDS="50,130,66,146" HREF="javascript:parent.Xgc(\'#009999\',\''+i_obj+'\')">');
writeln('<AREA COORDS="66,130,82,146" HREF="javascript:parent.Xgc(\'#00CC99\',\''+i_obj+'\')">');
writeln('<AREA COORDS="82,130,98,146" HREF="javascript:parent.Xgc(\'#00FF99\',\''+i_obj+'\')">');
writeln('<AREA COORDS="98,130,114,146" HREF="javascript:parent.Xgc(\'#99FF99\',\''+i_obj+'\')">');
writeln('<AREA COORDS="114,130,130,146" HREF="javascript:parent.Xgc(\'#99CC99\',\''+i_obj+'\')">');
writeln('<AREA COORDS="130,130,146,146" HREF="javascript:parent.Xgc(\'#999999\',\''+i_obj+'\')">');
writeln('<AREA COORDS="146,130,162,146" HREF="javascript:parent.Xgc(\'#996699\',\''+i_obj+'\')">');
writeln('<AREA COORDS="162,130,178,146" HREF="javascript:parent.Xgc(\'#993399\',\''+i_obj+'\')">');
writeln('<AREA COORDS="178,130,194,146" HREF="javascript:parent.Xgc(\'#990099\',\''+i_obj+'\')">');
writeln('<AREA COORDS="194,130,210,146" HREF="javascript:parent.Xgc(\'#CC0099\',\''+i_obj+'\')">');
writeln('<AREA COORDS="210,130,226,146" HREF="javascript:parent.Xgc(\'#CC3399\',\''+i_obj+'\')">');
writeln('<AREA COORDS="226,130,242,146" HREF="javascript:parent.Xgc(\'#CC6699\',\''+i_obj+'\')">');
writeln('<AREA COORDS="242,130,258,146" HREF="javascript:parent.Xgc(\'#CC9999\',\''+i_obj+'\')">');
writeln('<AREA COORDS="258,130,274,146" HREF="javascript:parent.Xgc(\'#CCCC99\',\''+i_obj+'\')">');
writeln('<AREA COORDS="274,130,290,146" HREF="javascript:parent.Xgc(\'#CCFF99\',\''+i_obj+'\')">');
writeln('<!--- Row 10 --->');
writeln('<AREA COORDS="2,146,18,162" HREF="javascript:parent.Xgc(\'#000066\',\''+i_obj+'\')">');
writeln('<AREA COORDS="18,146,34,162" HREF="javascript:parent.Xgc(\'#003366\',\''+i_obj+'\')">');
writeln('<AREA COORDS="34,146,50,162" HREF="javascript:parent.Xgc(\'#006666\',\''+i_obj+'\')">');
writeln('<AREA COORDS="50,146,66,162" HREF="javascript:parent.Xgc(\'#009966\',\''+i_obj+'\')">');
writeln('<AREA COORDS="66,146,82,162" HREF="javascript:parent.Xgc(\'#00CC66\',\''+i_obj+'\')">');
writeln('<AREA COORDS="82,146,98,162" HREF="javascript:parent.Xgc(\'#00FF66\',\''+i_obj+'\')">');
writeln('<AREA COORDS="98,146,114,162" HREF="javascript:parent.Xgc(\'#99FF66\',\''+i_obj+'\')">');
writeln('<AREA COORDS="114,146,130,162" HREF="javascript:parent.Xgc(\'#99CC66\',\''+i_obj+'\')">');
writeln('<AREA COORDS="130,146,146,162" HREF="javascript:parent.Xgc(\'#999966\',\''+i_obj+'\')">');
writeln('<AREA COORDS="146,146,162,162" HREF="javascript:parent.Xgc(\'#996666\',\''+i_obj+'\')">');
writeln('<AREA COORDS="162,146,178,162" HREF="javascript:parent.Xgc(\'#993366\',\''+i_obj+'\')">');
writeln('<AREA COORDS="178,146,194,162" HREF="javascript:parent.Xgc(\'#990066\',\''+i_obj+'\')">');
writeln('<AREA COORDS="194,146,210,162" HREF="javascript:parent.Xgc(\'#CC0066\',\''+i_obj+'\')">');
writeln('<AREA COORDS="210,146,226,162" HREF="javascript:parent.Xgc(\'#CC3366\',\''+i_obj+'\')">');
writeln('<AREA COORDS="226,146,242,162" HREF="javascript:parent.Xgc(\'#CC6666\',\''+i_obj+'\')">');
writeln('<AREA COORDS="242,146,258,162" HREF="javascript:parent.Xgc(\'#CC9966\',\''+i_obj+'\')">');
writeln('<AREA COORDS="258,146,274,162" HREF="javascript:parent.Xgc(\'#CCCC66\',\''+i_obj+'\')">');
writeln('<AREA COORDS="274,146,290,162" HREF="javascript:parent.Xgc(\'#CCFF66\',\''+i_obj+'\')">');
writeln('<!--- Row 11 --->');
writeln('<AREA COORDS="2,162,18,178" HREF="javascript:parent.Xgc(\'#000033\',\''+i_obj+'\')">');
writeln('<AREA COORDS="18,162,34,178" HREF="javascript:parent.Xgc(\'#003333\',\''+i_obj+'\')">');
writeln('<AREA COORDS="34,162,50,178" HREF="javascript:parent.Xgc(\'#006633\',\''+i_obj+'\')">');
writeln('<AREA COORDS="50,162,66,178" HREF="javascript:parent.Xgc(\'#009933\',\''+i_obj+'\')">');
writeln('<AREA COORDS="66,162,82,178" HREF="javascript:parent.Xgc(\'#00CC33\',\''+i_obj+'\')">');
writeln('<AREA COORDS="82,162,98,178" HREF="javascript:parent.Xgc(\'#00FF33\',\''+i_obj+'\')">');
writeln('<AREA COORDS="98,162,114,178" HREF="javascript:parent.Xgc(\'#99FF33\',\''+i_obj+'\')">');
writeln('<AREA COORDS="114,162,130,178" HREF="javascript:parent.Xgc(\'#99CC33\',\''+i_obj+'\')">');
writeln('<AREA COORDS="130,162,146,178" HREF="javascript:parent.Xgc(\'#999933\',\''+i_obj+'\')">');
writeln('<AREA COORDS="146,162,162,178" HREF="javascript:parent.Xgc(\'#996633\',\''+i_obj+'\')">');
writeln('<AREA COORDS="162,162,178,178" HREF="javascript:parent.Xgc(\'#993333\',\''+i_obj+'\')">');
writeln('<AREA COORDS="178,162,194,178" HREF="javascript:parent.Xgc(\'#990033\',\''+i_obj+'\')">');
writeln('<AREA COORDS="194,162,210,178" HREF="javascript:parent.Xgc(\'#CC0033\',\''+i_obj+'\')">');
writeln('<AREA COORDS="210,162,226,178" HREF="javascript:parent.Xgc(\'#CC3333\',\''+i_obj+'\')">');
writeln('<AREA COORDS="226,162,242,178" HREF="javascript:parent.Xgc(\'#CC6633\',\''+i_obj+'\')">');
writeln('<AREA COORDS="242,162,258,178" HREF="javascript:parent.Xgc(\'#CC9933\',\''+i_obj+'\')">');
writeln('<AREA COORDS="258,162,274,178" HREF="javascript:parent.Xgc(\'#CCCC33\',\''+i_obj+'\')">');
writeln('<AREA COORDS="274,162,290,178" HREF="javascript:parent.Xgc(\'#CCFF33\',\''+i_obj+'\')">');
writeln('<!--- Row 12 --->');
writeln('<AREA COORDS="2,178,18,194" HREF="javascript:parent.Xgc(\'#000000\',\''+i_obj+'\')">');
writeln('<AREA COORDS="18,178,34,194" HREF="javascript:parent.Xgc(\'#003300\',\''+i_obj+'\')">');
writeln('<AREA COORDS="34,178,50,194" HREF="javascript:parent.Xgc(\'#006600\',\''+i_obj+'\')">');
writeln('<AREA COORDS="50,178,66,194" HREF="javascript:parent.Xgc(\'#009900\',\''+i_obj+'\')">');
writeln('<AREA COORDS="66,178,82,194" HREF="javascript:parent.Xgc(\'#00CC00\',\''+i_obj+'\')">');
writeln('<AREA COORDS="82,178,98,194" HREF="javascript:parent.Xgc(\'#00FF00\',\''+i_obj+'\')">');
writeln('<AREA COORDS="98,178,114,194" HREF="javascript:parent.Xgc(\'#99FF00\',\''+i_obj+'\')">');
writeln('<AREA COORDS="114,178,130,194" HREF="javascript:parent.Xgc(\'#99CC00\',\''+i_obj+'\')">');
writeln('<AREA COORDS="130,178,146,194" HREF="javascript:parent.Xgc(\'#999900\',\''+i_obj+'\')">');
writeln('<AREA COORDS="146,178,162,194" HREF="javascript:parent.Xgc(\'#996600\',\''+i_obj+'\')">');
writeln('<AREA COORDS="162,178,178,194" HREF="javascript:parent.Xgc(\'#993300\',\''+i_obj+'\')">');
writeln('<AREA COORDS="178,178,194,194" HREF="javascript:parent.Xgc(\'#990000\',\''+i_obj+'\')">');
writeln('<AREA COORDS="194,178,210,194" HREF="javascript:parent.Xgc(\'#CC0000\',\''+i_obj+'\')">');
writeln('<AREA COORDS="210,178,226,194" HREF="javascript:parent.Xgc(\'#CC3300\',\''+i_obj+'\')">');
writeln('<AREA COORDS="226,178,242,194" HREF="javascript:parent.Xgc(\'#CC6600\',\''+i_obj+'\')">');
writeln('<AREA COORDS="242,178,258,194" HREF="javascript:parent.Xgc(\'#CC9900\',\''+i_obj+'\')">');
writeln('<AREA COORDS="258,178,274,194" HREF="javascript:parent.Xgc(\'#CCCC00\',\''+i_obj+'\')">');
writeln('<AREA COORDS="274,178,290,194" HREF="javascript:parent.Xgc(\'#CCFF00\',\''+i_obj+'\')">');
writeln('</MAP>');
} //end with
}
function Xgc(color, i_obj)
{
if (i_obj == 'sf')
Xfr(i_obj,color);
if (i_obj == 'tbl')
Xfv(color);
}
function Xgd(hash){
with (s.document.insert) {
type = typ.options[typ.selectedIndex].value;
he = h.options[h.selectedIndex].value;
save = new Array();
if (A[hash])
for (si in Q['B']){
if (A[hash][si])
save[si] = A[hash][si];
}
A[hash] = new Array();
A[hash]['h'] = he;
A[hash]['typ'] = type;
if (type != 'txt')
if (j.checked)
A[hash]['j'] = true;
if (k.checked)
A[hash]['k'] = true;
A[hash]['name'] = Xgx(nname.value);
A[hash]['l'] = Xgx(l.value);
if (image.value.length != 0)
A[hash]['image'] = Xgx(image.value);
if (o.value.length != 0)
A[hash]['o'] = Xgx(o.value);
if (url.value.length != 0)
A[hash]['url'] = Xgx(url.value);
if (gm.value.length != 0)
if (Xev(gm.value) != 0)
A[hash]['gm'] = Xev(gm.value);
A[hash]['m'] = Xev(m.value);
A[hash]['n'] = n.options[n.selectedIndex].value;
A[hash]['B'] = '';
for (i in Q['B']) {
if (!Q['B'][i]) continue;
if (eval("feats"+ i +".checked")) A[hash]['B'] += i + ',';
}
A[hash]['p_feature'] = featrs.options[featrs.selectedIndex].value;
for (si in save){
A[hash][si] = save[si];
}
}// end with
}
function Xge(){
var ha;
ha = s.document.insert.ha.value;
Xgd(ha);
Xeu('ed_art');
Xcv('refresh');
}
function Xgf() {
for (i = 0; i <= A.length; i++){
if (i > 10) {
alert(A_DERR);
Xgh();
return;
}
if (!A[i]){
hash = i;
break;
}
}
Xgd(hash);
C[e_C_state]['A'] += hash +",";
Xgl();
Xdn();
}
function Xgg(){
var nname;
var art_tmp = '';
hash = s.document.insert.hash.value;
nname = s.document.insert.l.value;
while (nname.length == 0) {
if (!(nname = prompt(A_DO_INSERT_PAGE_NNAME,''))) {
Xgn();
return;
}
}
art_tmp = C[hash]['A'];
C[hash] = new Array();
C[hash]['name'] = Xgx(nname);
C[hash]['e'] = Xgx(s.document.insert.e.value);
if (s.document.insert.url.value.length != 0) {
C[hash]['url'] = escape(s.document.insert.url.value);
}
else {
if (s.document.insert.f.checked == true)
C[hash]['f'] = 'true';
}
if (s.document.insert.bg.value.length != 0)
C[hash]['bg'] = escape(s.document.insert.bg.value);
if (s.document.insert.ng.value.length != 0)
C[hash]['navgif'] = escape(s.document.insert.ng.value);
if (s.document.insert.ngs.value.length != 0)
C[hash]['navgifs'] = escape(s.document.insert.ngs.value);
C[hash]['A'] = art_tmp;
Xgn(hash);
LEFT = false;
Xcv(parseInt(hash));
}
function Xgh(){
with (s.document) {
open();
writeln(ADMIN_TOP);
writeln(FONT_A_BIG + A_DEL_S);
writeln(ADMIN_BOT);
close();
}
}
function Xgi() {
var nname;
if (e_C_state == 'aq')
hash = 0;
else if (isNaN(e_C_state))
hash = C.length;
else
hash = e_C_state + 1;
nname = s.document.insert.l.value;
while (nname.length == 0) {
if (!(nname = prompt(A_DO_INSERT_PAGE_NNAME,''))) {
Xgn();
return;
}
}
if (C.length > hash && C.length > 1){
for (i = C.length ; i >= hash; i--){
C[i + 1] = new Array();
C[i + 1] = C[i];
}
C.length -= 1;
}
C[hash] = new Array();
C[hash]['name'] = Xgx(nname);
C[hash]['e'] = Xgx(s.document.insert.e.value);
if (s.document.insert.url.value.length != 0)
C[hash]['url'] = escape(s.document.insert.url.value);
else
if (s.document.insert.f.checked == true)
C[hash]['f'] = 'true';
if (s.document.insert.bg.value.length != 0)
C[hash]['bg'] = escape(s.document.insert.bg.value);
if (s.document.insert.ng.value.length != 0)
C[hash]['navgif'] = escape(s.document.insert.ng.value);
if (s.document.insert.ngs.value.length != 0)
C[hash]['navgifs'] = escape(s.document.insert.ngs.value);
C[hash]['A'] = '';
Xgn();
LEFT = false;
Xcv(hash);
}
function Xgj(hash){
if (isNaN(hash)){
alert(A_DELPAGE_ERR);
Xgn(hash);
return;
}
if (C.length == 1){
alert(A_DELPAGE_ERR2);
Xgn(hash);
return;
}
if (!confirm(A_DELPAGE_ASK)){
Xgn(hash);
return;
}
var art = C[hash]['A'];
var art_idx = '';
if (art.length != 0){
while ((art_idx = art.substring(0,art.indexOf(','))) != '') {
if (A[art_idx])
A[art_idx] = false;
art = art.substring(art.indexOf(',') + 1, art.length);
}
}
for (i = hash ; i < C.length; i++){
C[i] = new Array();
C[i] = C[i + 1];
}
C.length -= 1;
Xgh();
LEFT = false;
Xcv(0);
}
function Xgk(hash){
if (isNaN(hash)){
alert(A_DELPROD_ERR);
Xgh();
return;
}
if (A.length == 1){
alert(A_DELPROD_ERR2);
Xgh();
return;
}
if (!confirm(A_DELPROD_ASK)){
Xgh();
return;
}
A[hash] = false;
var art = C[e_C_state]['A'];
if (art.length == 0)
return;
var arttmp = '';
while ((i = art.substring(0,art.indexOf(','))) != '') {
if (i != hash)
arttmp += i + ",";
art = art.substring(art.indexOf(',') + 1, art.length);
}
C[e_C_state]['A'] = arttmp;
Xgh();
Xcv('refresh');
}
function Xgl(s_obj) {
var hash = -1;
var h = '1';
var typ = 'checkbox';
var j = false;
var k = false;
var nname = '';
var l = '';
var o = '';
var image = '';
var url = '';
var gm = '';
var m = '';
var n = 0;
var su = false;
var d = 'Xgf()';
var ftrs = feat = '';
with (s.document) {
if (isNaN(e_C_state)) {
open();
writeln(ADMIN_TOP);
writeln(FONT_A_BIG + A_INSERT_PROD_ERR +"</FONT>");
writeln(ADMIN_BOT);
close();
return;
}
if (s_obj) {
if (s_obj.type == 'select-one')
hash = s_obj.options[s_obj.selectedIndex].value;
else hash = s_obj;
d = 'Xge()';
h = A[hash]['h'];
typ = A[hash]['typ'];
if (A[hash]['j'])
j = true;
if (A[hash]['k'])
k = true;
nname = unescape(A[hash]['name']);
l = unescape(A[hash]['l']);
if (A[hash]['o'])
o = unescape(A[hash]['o']);
if (A[hash]['image'])
image = unescape(A[hash]['image']);
if (A[hash]['url'])
url = unescape(A[hash]['url']);
if (A[hash]['gm'])
gm = A[hash]['gm'];
m = A[hash]['m'];
n = A[hash]['n'];
if (A[hash]['p_feature'])
ftrs = A[hash]['p_feature'];
if (A[hash]['B'])
feat = A[hash]['B'];
}
open();
writeln(ADMIN_TOP + FONT_A);
writeln("<FORM name=insert onSubmit='parent."+ d +";'>");
writeln("<TABLE width=560 border=0><TR><TD>"+ FONT_A);
if (hash >= 0)
writeln("<INPUT type=hidden name=ha value='"+ hash +"'>");
writeln("<SELECT name=h>");
write("<OPTION value='1' ");
if (h == '1')
write(" selected ");
write(">"+ A_INSERT_PROD_TAB);
write("<OPTION value='2'");
if (h == '2')
write(" selected ");
writeln(">"+ A_INSERT_PROD_FLUF);
write("<OPTION value='3'");
if (h == '3')
write(" selected ");
writeln(">"+ A_INSERT_PROD_BIG);
writeln("</SELECT>");
writeln("</FONT></TD><TD>"+ FONT_A);
writeln("<SELECT name=typ>");
writeln("<OPTION value='checkbox'");
if (typ == 'checkbox')
write(" selected");
writeln(">"+ A_INSERT_PROD_CHECK)
writeln("<OPTION value='img'");
if (typ == 'img')
write(" selected");
writeln(">"+ A_INSERT_PROD_BILD);
writeln("<OPTION value='txt'");
if (typ == 'txt')
write(" selected");
writeln(">"+ A_INSERT_PROD_TXT);
writeln("</SELECT>");
writeln("</FONT></TD><TD>"+ FONT_A );
writeln(A_INSERT_PROD_MENGE +" <INPUT type=checkbox name='j' ");
if (j)
write(" checked");
writeln("><BR>");
writeln(A_INSERT_PROD_PREISA +"&nbsp;<INPUT type=checkbox name='k'");
if (k)
write(" checked");
writeln(">");
writeln("</TD><TD align=right>");
writeln(FONT_A_SMALL +"<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#A_einfuegen');\"");
writeln("value='"+ A_NAME_HELP +"'></FONT>");
writeln("</TD></TR>");
writeln("<TR><TD>"+ FONT_A);
writeln(A_INSERT_PROD_NAME +"</TD><TD>"+ FONT_A +"<INPUT type=text size=20 name='nname' value='"+ nname +"'></TD><TD align=right colspan=2>"+ FONT_A );
writeln("<INPUT type=button onClick='parent.r.document.location.replace(\".\");' value='"+ A_SHOWDIR +"'><BR>");
writeln("</TD></TR>");
writeln("<TR><TD>"+ FONT_A);
writeln(A_INSERT_PROD_TITEL+"</TD><TD colspan=3>"+ FONT_A +"<INPUT type=text size=50 name='l' value='"+ l +"'>");
writeln("</TD></TR>");
writeln("<TR><TD>"+ FONT_A);
writeln(A_INSERT_PROD_DESC+"</TD><TD colspan=3>"+ FONT_A +"<TEXTAREA cols=50 wrap=virtual rows=3 name='o'>"+ o +"</TEXTAREA>");
writeln("</TD></TR>");
writeln("<TR><TD>"+ FONT_A);
writeln(A_INSERT_PROD_IMAGE + "<BR>"+ FONT_A_SMALL + A_IF +"</TD><TD>"+ FONT_A +"<INPUT type=text size=10 name='image' value='"+ image +"'></TD><TD>"+ FONT_A);
writeln(A_INSERT_PROD_URL +"<BR>"+ FONT_A_SMALL + A_IF +"</TD><TD>"+ FONT_A +"<INPUT type=text size=10 name='url' value='"+ url +"'>");
writeln("</TD></TR>");
writeln("<TR><TD>"+ FONT_A);
writeln(A_INSERT_PROD_SPREIS +"</TD><TD>"+ FONT_A +"<INPUT type=text name='m' size=8 value='"+ Xbl(m) +"'> "+ CURR +"</TD><TD>"+ FONT_A);
writeln(A_INSERT_PROD_GPREIS +"<BR>"+ FONT_A_SMALL + A_IF +"</TD><TD>"+ FONT_A +"<INPUT type=text name='gm' size=8 value='"+ Xbl(gm) +"'> "+ CURR);
writeln("</TD></TR>");
writeln("<TR><TD colspan=2>"+ FONT_A);
writeln(A_INSERT_PROD_MWST +"<SELECT name=n>");
for (mw in Q['n']) {
writeln("<OPTION value='"+ mw +"' ");
if (mw == n)
write(" selected ");
write(">"+ Q['n'][mw] +"%");
}
writeln("</SELECT></TD>");
writeln("<TD colspan=2>"+ FONT_A +A_INSERT_PROD_FTS+"<SELECT name=featrs>");
write("<OPTION value='-1'");
if (ftrs == '') write(" selected ");
writeln(">"+A_CONFIG_SYSTEM_SFT_NO+"");
for (j in Q['B']) {
if (!Q['B'][j]) continue;
if (Q['B'][j]['ftype'] == 'multiple-select') continue;
if (Q['B'][j]['ftype'] == 'text') continue;
if (Q['B'][j]['ftype'] == 'checkbox') continue;
writeln("<OPTION value='"+ j +"' ");
if (j == ftrs) write(" selected ");
write(">"+ unescape(Q['B'][j]['name']));
}
writeln("</SELECT></TD></TR>");
writeln("<TR><TD colspan=4>");
for (i in Q['B']) {
if (Q['B'][i]) {
writeln( FONT_A +" <INPUT type=checkbox name='feats"+i+"'");
if (feat) {
if (feat.indexOf(i) >= 0)
write("checked");
}
writeln("><A HREF='javascript:parent.Xhn("+i+",-1,"+hash+")'>&nbsp;"+ unescape(Q['B'][i]['name']) +"</A>");
}
}
writeln("</FONT></TD></TR>");
writeln("<TR><TD colspan=2>"+ FONT_A +"<INPUT type=submit value='"+ A_INSERT_PROD_FERTIG +"'>");
if (hash >= 0) {
writeln("<INPUT type=button value='"+ A_DELETE +"' onClick='parent.Xgk("+ hash +");'>");
writeln("&nbsp;&nbsp;&nbsp;");
writeln("<INPUT type=button value='"+A_UP+"' name='up' onClick='parent.Xhh(this, "+ hash +");'>");
writeln("<INPUT type=button value='"+A_DOWN+"' name ='down' onClick='parent.Xhh(this, "+ hash +");'>");
}
writeln("</FONT></TD></TR>");
writeln("</TABLE>");
writeln("</FORM>");
writeln(ADMIN_BOT);
close();
}
}
function Xhl(hash, idx)
{
var f = new Array();
str = unescape(A[hash][idx]);
if (str.indexOf('~') == -1) {
var i = 0;
while (str.length){
f[i] = new Array();
f[i].name = str.substring(0, str.indexOf(','));
f[i].m = str.substring(str.indexOf(',')+1, str.indexOf('|'));
str = str.substring(str.indexOf('|')+1, str.length);
i++;
}
}
else {
for (i in Q.B[idx]){
if (i == 'name' || i == 'required' || i == 'ftype') continue;
f[i] = new Array();
f[i].name = unescape(Q.B[idx][i]);
if (str.length){
f[i].m = str.substring(0, str.indexOf('~'));
str = str.substring(str.indexOf('~')+1, str.length);
}
else f[i].m = '';
i++;
}
}
return f;
}
function Xhm(idx)
{
var i, f = new Array();
var j = 0;
for (i in Q.B[idx]) {
if (i == 'name' || i == 'required' || i == 'ftype') continue;
f[j] = new Array();
f[j].name = unescape(Q.B[idx][i]);
f[j].m = '';
j++;
}
return f;
}
function Xhn(idx, i_obj, ix)
{
var A_FTS = unescape(Q['B'][idx]['name']);
var A_ARTIKEL = "Artikel : "+ unescape(A[ix]['name']);
var i = 'neu', fname = fm = '';
var hash = ix;
if (i_obj != '-1') {
if (i_obj.type == 'select-multiple')
i = i_obj.options[i_obj.selectedIndex].value;
else i = i_obj;
}
var afs = new Array();
if (A[hash][idx]) {
afs = Xhl(hash, idx);
}
else afs = Xhm(idx);
if (i != 'neu') {
fname = afs[i].name;
fm = Xbl(afs[i].m);
}
with (s.document) {
open();
writeln(ADMIN_TOP);
writeln("<FORM name=sys_persfts onSubmit='return false;'>");
writeln("<TABLE width=560 border=0>");
write("<TR><TD>"+ FONT_A_BIG + A_FTS +"</FONT></TD>");
write("<TD>"+ FONT_A_BIG + A_ARTIKEL +"</FONT></TD>");
writeln("<TD align=right>"+ FONT_A_SMALL +"<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#A_merkmale');\"");
writeln("value='"+ A_NAME_HELP +"'></FONT></TD></TR>");
writeln("<TR>\n<TD valign=top rowspan=12>");
writeln(FONT_A + "<SELECT name=\"fts\" onChange='parent.Xhn(\""+idx+"\",this,\""+hash+"\");' size=8>");
var k;
for (k in afs) {
write("<OPTION value='"+k+"'");
if (afs == i) write("selected");
if (afs[k]) writeln(">"+afs[k].name);
}
writeln("<OPTION value = 'neu'>"+ A_CONFIG_SYSTEM_SFT_N);
writeln("</SELECT></TD></TR>");
write("<TR><TD>"+ FONT_A + A_FTS +": "+"</FONT></TD><TD>"+ FONT_A +"<INPUT type=text name='fname' size=15 value='"+fname+"'");
if (i != 'neu')
write("onChange='parent.Xho(this,\""+idx+"\",\""+i+"\",\""+hash+"\");'");
writeln("></FONT></TD></TR>");
write("<TR><TD>"+ FONT_A + A_CONFIG_SYSTEM_SFT_VAL +"</FONT></TD><TD>"+ FONT_A +"<INPUT type=text name='fm' size=4 value='"+fm+"'");
if (i != 'neu')
write("onChange='parent.Xho(this,\""+idx+"\",\""+i+"\",\""+hash+"\");'");
writeln(">&nbsp;"+ CURR +"</FONT></TD></TR>");
writeln("<TR><TD>"+ FONT_A_SMALL +"<INPUT type=button value='"+A_INSERT_PROD_DEFAULT+"' onClick='parent.Xhg(\""+idx+"\",\""+hash+"\");'></FONT></TD></TR>");
if (i == 'neu')
writeln("<TR><TD>"+FONT_A_SMALL +"<INPUT type=button value='"+A_INSERT+"' onClick='parent.Xho(this,\""+idx+"\",\""+i+"\",\""+hash+"\");'></FONT>");
else {
writeln("<TR><TD>"+ FONT_A_SMALL +"<INPUT type=button value='"+A_USE+"'></FONT>");
writeln(FONT_A_SMALL +"<INPUT type=button value='"+A_DELETE+"' onClick='parent.Xhp(\""+idx+"\",\""+i+"\",\""+hash+"\");'></FONT>");
}
writeln("<TD>"+FONT_A_SMALL +"<INPUT type=button value='"+A_LEAVE+"' onClick='parent.Xgl(\""+hash+"\")';></FONT></TD></TR>");
writeln("</TABLE></FORM>");
writeln(ADMIN_BOT);
close();
} //with
}
function Xhg(idx, hash)
{
var old = '';
var f = new Array();
old += A[hash].B;
str = old;
while (str.length) {
num = str.substring(0, str.indexOf(','));
if (num == idx) {
A[hash].B = old.substring(0,old.indexOf(num))
+old.substring(old.indexOf(num)+2,old.length);
for (i in A[hash])
if (i != idx)
f[i] = A[hash][i];
A[hash] = f;
break;
}
str = str.substring(str.indexOf(',')+1, str.length);
}
if (str.length) {
Xcv('refresh');
Xhn(idx, -1, hash);
}
}
function Xho(i_obj, idx, io, hash)
{
var str, f = new Array();
var nurPr = 'true';
with (s.document.sys_persfts) {
if (!fname.value) {
alert(A_CONFIG_SYSTEM_SFT_NEW);
return;
}
if (A[hash][idx]) {
str = unescape(A[hash][idx]);
if (str.indexOf('~') == -1) nurPr = 'false';
f = Xhl(hash, idx);
}
else {
f = Xhm(idx);
str = idx + ',';
if (!A[hash].B) A[hash].B = '';
if (A[hash].B.indexOf(str) == '-1') {
A[hash].B += idx + ',';
A[hash][idx] = new Array();
}
}
if (i_obj.type == 'text') {
if (i_obj.name == 'fname') nurPr = 'false';
for (i in f)
if (i == io) {
f[i].name = fname.value;
f[i].m = Xev(fm.value);
}
A[hash][idx] = '';
for (i in f) {
if (nurPr == 'true')
A[hash][idx] += Xgx(f[i].m + '~');
else A[hash][idx] += Xgx(f[i].name + ',' + f[i].m + '|');
}
}
else if (i_obj.type == 'button') {
if (nurPr == 'true') {
A[hash][idx] = '';
for (i in f)
A[hash][idx] += Xgx(f[i].name+','+ f[i].m+'|');
}
var fpr = parseInt(fm.value);
if (isNaN(fpr))
A[hash][idx] += Xgx(fname.value + ',' + '|');
else A[hash][idx] += Xgx(fname.value + ',' + Xev(fm.value) + '|');
}
Xcv('refresh');
Xhn(idx, io, hash);
}
}
function Xhp(idx, io, hash)
{
var f, g = new Array();
var str, j = 0;
if (io == 'neu') return;
if (A[hash][idx]) {
f = Xhl(hash, idx);
}
else {
f = Xhm(idx);
val = idx + ',';
if (A[hash].B.indexOf(val) == '-1') {
A[hash].B += idx + ',';
A[hash][idx] = new Array();
}
}
for (i in f)
if (i != io) g[j++] = f[i];
A[hash][idx] = '';
if (i > 0) {
for (i in g) {
str = g[i].name + ',' + g[i].m + '|';
A[hash][idx] += Xgx(str);
}
Xcv('refresh');
Xhn(idx, -1, hash);
}
else {
if (A[hash].p_feature == idx)
A[hash].p_feature = '-1';
val = idx + ',';
if (A[hash].B.indexOf(val) > '-1') {
str = A[hash].B;
i = 0;
while (str.length) {
f[i++] = str.substring(0, str.indexOf(','));
str = str.substring(str.indexOf(',')+1, str.length);
}
A[hash].B = '';
for (i in f) {
if (i != idx)
A[hash].B += f[i] + ',';
}
Xcv('refresh');
Xgl(hash);
}
}
}
function Xhh(i_obj, hash)
{
var f = new Array();
var i, str, pos;
if (C[e_C_state]['A'])
str = C[e_C_state]['A'];
else return;
f = str.split(",");
for (i in f) {
if (parseInt(hash) == parseInt(f[i])) {
pos = i;
break;
}
}
if (i_obj.name == 'up') {
if (pos == 0) return;
tmp = f[pos - 1];
f[pos - 1] = f[pos];
f[pos] = tmp;
}
if (i_obj.name == 'down') {
if (pos == f.length-2) return;
tmp = f[pos + 1];
f[pos + 1] = f[pos];
f[pos] = tmp;
}
C[e_C_state]['A'] = ''+ f.join();
Xcv('refresh');
}
function a_editProd() {
if (isNaN(e_C_state)){
alert(A_EDIT_PROD_ERR);
Xgh();
return;
}
with (s.document) {
open();
writeln(ADMIN_TOP);
writeln("<FORM name=insert onSubmit='return false;'>");
writeln(FONT_A + A_EDIT_PROD);
writeln("<BR><SELECT name=edit onChange='parent.Xgl(this);'>");
writeln("<OPTION value='' selected>"+ A_EDIT_PROD_S);
var art = C[e_C_state]['A'];
if (art.length == 0)
return;
while ((i = art.substring(0,art.indexOf(','))) != '') {
writeln("<OPTION value='"+ i +"'>"+ unescape(A[i]['name']));
art = art.substring(art.indexOf(',') + 1, art.length);
}
writeln("</SELECT>");
writeln("<INPUT type=button value='"+ A_USE +"'><BR>");
writeln("</FORM>");
writeln(ADMIN_BOT);
close();
}
}
function Xgm(){
with (s.document) {
open();
writeln(ADMIN_TOP);
writeln("<FORM name=insert onSubmit='return false;'>");
writeln("<TABLE width=560 border=0><TR><TD>"+ FONT_A);
writeln(A_EDITSTART_URL +"<BR>"+ FONT_A_SMALL + A_IF +"</FONT><BR>"+ FONT_A );
writeln("<INPUT type=text name=aq value='"+ unescape(Q['aq']) +"' onChange='parent.Xet(this);'>");
writeln("</TD></TR>");
writeln("<TR><TD>"+ FONT_A);
writeln(A_EDITSTART_TXT +"<BR>"+ FONT_A_SMALL + A_IF );
writeln("</FONT><BR>"+ FONT_A +"<TEXTAREA cols='50' rows='10' name='ah' wrap=virtual onChange='parent.Xet(this);'>");
write( unescape(Q['ah']) +"</TEXTAREA>");
writeln("</TD></TR>");
writeln("<TR><TD align=middle>"+ FONT_A);
writeln("<INPUT type=button value='"+ A_USE +"'></TD></TR>");
writeln("</TABLE>");
writeln("</FORM>");
writeln(ADMIN_BOT);
close();
}
}
function Xif(){
with (s.document) {
open();
writeln(ADMIN_TOP + FONT_A);
writeln("<FORM name=insert onSubmit='parent.Xig(this);'>");
writeln("<TABLE width=560 border=0><TR><TD>"+ FONT_A);
writeln("<SELECT name=h>");
writeln("<OPTION value='1' >"+ A_INSERT_PROD_TAB);
writeln("<OPTION value='2'>"+ A_INSERT_PROD_FLUF);
writeln("<OPTION value='3'>"+ A_INSERT_PROD_BIG);
writeln("</SELECT>");
writeln("</FONT></TD><TD>"+ FONT_A);
writeln("<SELECT name=typ>");
writeln("<OPTION value='checkbox'>"+ A_INSERT_PROD_CHECK)
writeln("<OPTION value='img'>"+ A_INSERT_PROD_BILD);
writeln("<OPTION value='txt'>"+ A_INSERT_PROD_TXT);
writeln("</SELECT>");
writeln("</FONT></TD><TD>"+ FONT_A );
writeln(A_INSERT_PROD_MENGE +" <INPUT type=checkbox name='j' ><BR>");
writeln(A_INSERT_PROD_PREISA +"&nbsp;<INPUT type=checkbox name='k'>");
writeln("</TD><TD align=right>");
writeln(FONT_A_SMALL +"<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#seite_maske');\"");
writeln("value='"+ A_NAME_HELP +"'></FONT>");
writeln("</TD></TR>");
writeln("<TR><TD>"+ FONT_A);
writeln(A_INSERT_PROD_NAME +"</TD><TD>"+ FONT_A + A_INSERT_PAGE_REQ +"</TD><TD align=right colspan=2>"+ FONT_A );
writeln("<INPUT type=button onClick='parent.r.document.location.replace(\".\");' value='"+ A_SHOWDIR +"'><BR>");
writeln("</TD></TR>");
writeln("<TR><TD>"+ FONT_A);
writeln(A_INSERT_PROD_TITEL+"</TD><TD colspan=3>"+ FONT_A + A_INSERT_PAGE_IMP +"<INPUT type=checkbox name='l'>");
writeln("</TD></TR>");
writeln("<TR><TD>"+ FONT_A);
writeln(A_INSERT_PROD_DESC+"</TD><TD colspan=3>"+ FONT_A + A_INSERT_PAGE_IMP +"<INPUT type=checkbox name='o'>");
writeln("</TD></TR>");
writeln("<TR><TD>"+ FONT_A);
writeln(A_INSERT_PROD_IMAGE + "<BR>"+ FONT_A_SMALL + A_IF +"</TD><TD>"+ FONT_A + A_INSERT_PAGE_IMP +"<INPUT type=checkbox name='image'></TD><TD>"+ FONT_A);
writeln(A_INSERT_PROD_URL +"<BR>"+ FONT_A_SMALL + A_IF +"</TD><TD>"+ FONT_A + A_INSERT_PAGE_IMP +"<INPUT type=checkbox name='url' >");
writeln("</TD></TR>");
writeln("<TR><TD>"+ FONT_A);
writeln(A_INSERT_PROD_SPREIS +"</TD><TD>"+ FONT_A + A_INSERT_PAGE_IMP +"<INPUT type=checkbox name='m'> "+ CURR +"</TD><TD>"+ FONT_A);
writeln(A_INSERT_PROD_GPREIS +"<BR>"+ FONT_A_SMALL + A_IF +"</TD><TD>"+ FONT_A + A_INSERT_PAGE_IMP +"<INPUT type=checkbox name='gm'> "+ CURR);
writeln("</TD></TR>");
writeln("<TR><TD colspan=2>"+ FONT_A);
writeln(A_INSERT_PROD_MWST +"<SELECT name=n>");
for (mw in Q['n']) {
writeln("<OPTION value='"+ mw +"'>"+ Q['n'][mw] +"%");
}
writeln("</SELECT></TD>");
writeln("<TD colspan=2>"+ FONT_A +A_INSERT_PROD_FTS+"<SELECT name=featrs>");
write("<OPTION value='-1' selected");
writeln(">"+A_CONFIG_SYSTEM_SFT_NO+"");
for (j in Q['B']) {
if (!Q['B'][j]) continue;
if (Q['B'][j]['ftype'] == 'multiple-select') continue;
if (Q['B'][j]['ftype'] == 'text') continue;
if (Q['B'][j]['ftype'] == 'checkbox') continue;
writeln("<OPTION value='"+ j +"' ");
write(">"+ unescape(Q['B'][j]['name']));
}
writeln("</SELECT></TD></TR>");
writeln("<TR><TD colspan=4>");
for (i in Q['B']) {
if (Q['B'][i]) {
writeln( FONT_A +" <INPUT type=checkbox name='feats"+i+"'");
writeln("><A HREF='javascript:parent.Xhn(,-1,)'>&nbsp;"+ unescape(Q['B'][i]['name']) +"</A>");
}
}
writeln("</FONT></TD></TR>");
writeln("<TR><TD colspan=2>"+ FONT_A);
writeln("<SELECT name=repl><OPTION value=repl>"+ A_INSERT_PAGE_REPL);
writeln("<OPTION value=add>"+ A_INSERT_PAGE_ADD +"</SELECT>");
writeln("<INPUT type=submit value='"+ A_INSERT_PAGE_MAKE +"'>");
writeln("</FONT></TD></TR>");
writeln("</TABLE>");
writeln("</FORM>");
writeln(ADMIN_BOT);
close();
}
}
function Xig(){
spec = new Array();
with (s.document.insert) {
type = typ.options[typ.selectedIndex].value;
he = h.options[h.selectedIndex].value;
rep = repl.options[repl.selectedIndex].value;
spec = new Array();
spec['repl'] = rep;
spec['h'] = he;
spec['typ'] = type;
if (type != 'txt' && j.checked)
spec['j'] = true;
else
spec['j'] = false;
if (k.checked)
spec['k'] = true;
else
spec['k'] = false;
spec_fields = A_INSERT_PROD_NAME +'\t';
if (l.checked)
spec_fields += A_INSERT_PROD_TITEL +'\t';
if (image.checked)
spec_fields += A_INSERT_PROD_IMAGE +'\t';
if (o.checked)
spec_fields += A_INSERT_PROD_DESC +'\t';
if (url.checked)
spec_fields += A_INSERT_PROD_URL +'\t';
if (gm.checked)
spec_fields += A_INSERT_PROD_GPREIS +'\t';
if (m.checked)
spec_fields += A_INSERT_PROD_SPREIS +'\t';
spec['n'] = n.options[n.selectedIndex].value;
spec['B'] = '';
for (i in Q['B']) {
if (!Q['B'][i]) continue;
if (eval("feats"+ i +".checked")) spec['B'] += i + ',';
}
spec['p_feature'] = featrs.options[featrs.selectedIndex].value;
}
with (s.document){
open();
writeln(ADMIN_TOP + FONT_A);
writeln("<FORM name=insert onSubmit='return false;'>");
writeln("<TABLE width=560 border=0><TR><TD>"+ FONT_A + A_INSERT_PAGE_VOR);
writeln("</TD><TD align=right>");
writeln(FONT_A_SMALL +"<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#seite_template');\"");
writeln("value='"+ A_NAME_HELP +"'></FONT></TD></TR>");
writeln("<TR><TD colspan=2>"+ FONT_A_SMALL);
writeln("<TEXTAREA cols=100 rows=4 name=imp>");
for (si in spec) write(spec[si] +"\t");
writeln("\n"+ spec_fields);
writeln("</TEXTAREA>");
writeln("</FONT></TD></TR>");
writeln("</TABLE>");
writeln("</FORM>");
writeln(ADMIN_BOT);
close();
}
}
function Xih(){
with (s.document){
if (isNaN(e_C_state)) {
open();
writeln(ADMIN_TOP);
writeln(FONT_A_BIG + A_IMPORT_PAGE_ERR +"</FONT>");
writeln(ADMIN_BOT);
close();
return;
}
open();
writeln(ADMIN_TOP + FONT_A);
writeln("<FORM name=insert onSubmit='parent.Xii()'>");
writeln("<TABLE width=560 border=0><TR><TD>"+ FONT_A + A_IMPORT_PAGE );
writeln("</TD><TD align=right>");
writeln(FONT_A +"<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#seite_importieren');\"");
writeln("value='"+ A_NAME_HELP +"'></FONT></TD></TR>");
writeln("<TR><TD colspan=2>"+ FONT_A_SMALL);
writeln("<TEXTAREA cols=100 rows=4 name=imp>");
writeln("</TEXTAREA><BR>");
writeln("<INPUT type=submit value='"+ A_IMPORT_PAGE_DO +"'>");
writeln("<INPUT type=reset value='"+ A_IMPORT_PAGE_DONT +"'>");
writeln("</FONT></TD></TR>");
writeln("</TABLE>");
writeln("</FORM>");
writeln(ADMIN_BOT);
close();
}
}
function Xii(){
var val = '';
if (!(s.document.insert.imp && s.document.insert)){
Xgh();
alert("Form not found!");
return;
}
if (!(val = s.document.insert.imp.value)){
Xgh();
alert(A_IMPORT_PAGE_NODATA);
return;
}
r_tmp = new Array();
r_tmp = val.split("\n");
rows = new Array();
for (tm in r_tmp){
rows[tm] = new Array();
rows[tm] = r_tmp[tm].split("\t");
}
firs = new Array();
firs = rows.shift();
if (firs.length < 8){
alert(A_IMPORT_PAGE_NOADMIN);
Xgh();
return;
}
if (firs[0] == 'repl'){
if (!confirm(AA_IMPORT_PAGE_ASK_OVWR)){
Xgh();
return;
}
}
else if (firs[0] == 'add'){}
else {
alert(A_IMPORT_PAGE_NOADMIN);
Xgh();
return;
}
fields = new Array();
fields = rows.shift();
for (fi in fields){
field = unescape(Xgx(fields[fi]));
if (field == A_INSERT_PROD_NAME) fields[fi] = 'name';
else if (field == A_INSERT_PROD_TITEL) fields[fi] = 'l';
else if (field == A_INSERT_PROD_DESC) fields[fi] = 'o';
else if (field == A_INSERT_PROD_IMAGE) fields[fi] = 'image';
else if (field == A_INSERT_PROD_URL) fields[fi] = 'url';
else if (field == A_INSERT_PROD_GPREIS) fields[fi] = 'gm';
else if (field == A_INSERT_PROD_SPREIS) fields[fi] = 'm';
else fields[fi] = '';
}
if (fields.length < 1){
alert(A_IMPORT_PAGE_NOFIELDS);
Xgh();
return;
}
if (firs[0] == 'repl' && C[e_C_state]['A']){
art = new Array();
art = C[e_C_state]['A'].split(',');
for (ai in art){
if (A[art[ai]])
A[art[ai]] = false;
}
C[e_C_state]['A'] = '';
}
for (ro in rows){
if (!rows[ro][0]) continue;
if (!rows[ro][0].length) continue;
for (i = 0; i <= A.length; i++){
if (!A[i]){
hash = i;
break;
}
}
if (hash > 10){
alert(A_DERR);
Xgh();
return;
}
A[hash] = new Array();
A[hash]['h'] = firs[1];
A[hash]['typ'] = firs[2];
if (firs[3] == 'true')
A[hash]['j'] = true;
if (firs[4] == 'true')
A[hash]['k'] = true;
A[hash]['n'] = firs[5];
if (firs[6].length) {
fet = new Array();
fet = firs[6].split(',');
fet_tmp = '';
for (fix in fet){
if (Q['B'][fet[fix]])
fet_tmp += fet[fix] +",";
}
if (fet_tmp.length) {
A[hash]['B'] = fet_tmp;
if (A[hash]['B'].indexOf(firs[7]) != -1 && firs[7].length)
A[hash]['p_feature'] = firs[7];
else
A[hash]['p_feature'] = '-1';
}
}
C[e_C_state]['A'] += hash +',';
for (fe in fields){
if (!fields[fe].length) continue;
if (!rows[ro][fe]) continue;
if (!rows[ro][fe].length)
tmp = '';
else if (fields[fe] == 'm' || fields[fe] == 'gm')
tmp = Xev(rows[ro][fe]);
else
tmp = Xgx(rows[ro][fe]);
A[hash][fields[fe]] = tmp;
}
}
Xgh();
Xcv('refresh');
}
function Xgn(p) {
var u = '';
var n = '';
var tt = '';
var ng = '';
var ngs = '';
var bg = '';
var su = false;
var d = 'Xgi()';
if (p == 'aq'){
Xgm();
return;
}
if (p == 'basket' || p == 'send' || p == 'data'){
alert(A_PAGE_ERR);
Xgh();
return;
}
if (p >= 0) {
d = 'Xgg()';
if (isNaN(p)){
alert(A_PAGE_ERR1);
Xgh();
return;
}
if (C[p]['url'])
u = unescape(C[p]['url']);
if (C[p]['navgif'])
ng = unescape(C[p]['navgif']);
if (C[p]['navgifs'])
ngs = unescape(C[p]['navgifs']);
if (C[p]['bg'])
bg = unescape(C[p]['bg']);
n = unescape(C[p]['name']);
tt = unescape(C[p]['e']);
if (C[p]['f'])
su = true;
}
with (s.document) {
open();
writeln(ADMIN_TOP);
writeln("<FORM name=insert onSubmit='parent."+ d +";'>");
if (p >= 0)
writeln("<INPUT type=hidden name=hash value='"+ p +"'>");
writeln("<TABLE width=560 border=0>");
writeln("<TR><TD>"+ FONT_A);
writeln(A_PAGE_NAME +": </TD><TD>"+ FONT_A +"<INPUT type=text size=15 name='l' value='"+ n +"'></TD><TD bgcolor=#cc5577>"+ FONT_A +"<FONT color=black>");
writeln(A_PAGE_URL +": <BR>"+ A_IF +" </TD><TD bgcolor=#cc5577>"+ FONT_A +"<FONT color=black><INPUT type=text name='url' size=15 value='"+ u +"'>");
writeln("</TD></TR>");
writeln("<TR><TD>"+ FONT_A);
writeln(A_PAGE_BG +": </FONT><BR>"+ FONT_A_SMALL + A_IF +" </FONT></TD><TD>"+ FONT_A +"<INPUT type=text name='bg' size=15 value='"+ bg+"'></TD><TD>"+ FONT_A );
writeln(A_PAGE_NAV +": </FONT><BR>"+ FONT_A_SMALL + A_IF +" </FONT></TD><TD>"+ FONT_A +"<INPUT type=text name='ng' size=15 value='"+ ng +"'>");
writeln("</TD></TR>");
writeln("<TR><TD>"+ FONT_A);
writeln(A_PAGE_NAVS +": </FONT><BR>"+ FONT_A_SMALL +A_IF +" </FONT></TD><TD>"+ FONT_A +"<INPUT type=text name='ngs' size=15 value='"+ ngs +"'>");
writeln("</TD><TD>"+ FONT_A +"<INPUT type=button onClick='parent.r.document.location.replace(\".\");' value='"+ A_SHOWDIR +"'>");
writeln("</TD><TD align=right>");
writeln(FONT_A_SMALL +"<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#seite_einfuegen');\"");
writeln("value='"+ A_NAME_HELP +"'></FONT>");
writeln("</TD></TR>");
writeln("<TR><TD>"+ FONT_A);
writeln(A_PAGE_TT +": </FONT></TD>");
writeln("<TD colspan=3>"+ FONT_A +" <TEXTAREA name='e' cols=50 rows=4 wrap=virtual>"+ tt +"</TEXTAREA>");
writeln("</TD></TR>");
writeln("<TR><TD>"+ FONT_A);
writeln(A_PAGE_SUM +": </FONT><BR>"+ FONT_A_SMALL + A_IF +" </FONT></TD><TD>"+ FONT_A +"<INPUT type=checkbox name='f'");
if (su)
write(" checked ");
writeln("></TD><TD colspan=2>"+ FONT_A +"");
writeln("<INPUT type=submit value='"+ A_INSERT +"'>&nbsp;");
if (p >= 0) {
writeln("<INPUT type=button value='"+ A_DELETE +"' onClick='parent.Xgj("+ p +");'>");
writeln("&nbsp;&nbsp;&nbsp;");
writeln("<INPUT type=button value='"+ A_UP +"' onClick='parent.Xgw("+ p +");'>");
writeln("<INPUT type=button value='"+ A_DOWN +"' onClick='parent.Xgv("+ p +");'><BR>");
}
writeln("</TD></TR>");
writeln("</TABLE>");
writeln("</FORM>");
writeln(ADMIN_BOT);
close();
}
}
function Xgv(s_obj)
{
if (C.length == e_C_state+1) return;
for (i in C)
if (i == s_obj) {
hilf = C[i];
C[i] = C[i+1];
C[i+1] = hilf;
break;
}
e_C_state +=1;
LEFT = false;
Xcv('refresh');
Xgn(e_C_state);
}
function Xgw(s_obj)
{
if (s_obj == '0') return;
for (i in C)
if (i == s_obj) {
hilf = C[i];
C[i] = C[i-1];
C[i-1] = hilf;
break;
}
e_C_state -=1;
LEFT = false;
Xcv('refresh');
Xgn(e_C_state);
}
function Xgo(){
Xgy();
Xea();
ADMIN = true;
Xeb();
Xeh();
}
