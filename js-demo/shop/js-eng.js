//- -- Copyright 1998 pluto@iconnect.de --
//-
//- Coauthor kdoberstein@js-webShop.com
function Xcj(msg, url, lno) {
if(lno)
alert("Message: "+ msg +"\nURL: " + url +"\nLine: "+ lno);
return true;
}
function Xck(){
FONT = unescape(Q['font']);
FONT_NAV = unescape(Q['au']);
FONT_NAV_H = unescape(Q['au_h']);
FONT_RH = unescape(Q['aw']);
FONT_TT = unescape(Q['font_e']);
FONT_CS = unescape(Q['ay']);
}
function E_init_C()
{
PAGE_TOP = unescape(Q['C_top']);
PAGE_SUM = unescape(Q['C_f']);
PAGE_BOT = unescape(Q['C_bottom']);
NAV_P_TOP = unescape(Q['nav_C_top']);
NAV_P_BOT = unescape(Q['nav_C_bottom']);
PT_BGC = "bgcolor="+ unescape(Q['pt_bgc']);
PT_BG = unescape(Q['pt_bg']);
PT_L = unescape(Q['pt_l']);
PT_VL = unescape(Q['pt_vl']);
PT_AL = unescape(Q['pt_al']);
NP_BGC = "bgcolor="+ unescape(Q['np_bgc']);
NP_BG = unescape(Q['np_bg']);
if (Q['tbg_nt'].length)
TBG_NT = "bgcolor="+ unescape(Q['tbg_nt']);
else
TBG_NT = "";
if (Q['tbg_np'].length)
TBG_NP = "bgcolor="+ unescape(Q['tbg_np']);
else
TBG_NP = "";
if (Q['tbg_p'].length)
TBG_P = "bgcolor="+ unescape(Q['tbg_p']);
else
TBG_P = "";
if (Q['tbg_pt'].length)
TBG_PT = "bgcolor="+ unescape(Q['tbg_pt']);
else
TBG_PT = "";
if (Q['tbg_pn'].length)
TBG_PN = "bgcolor="+ unescape(Q['tbg_pn']);
else
TBG_PN = "";
if (Q['tbg_b'].length)
TBG_B = "bgcolor="+ unescape(Q['tbg_b']);
else
TBG_B = "";
if (Q['tbg_br'].length)
TBG_BR = "bgcolor="+ unescape(Q['tbg_br']);
else
TBG_BR = "";
if (Q['tbg_bn'].length)
TBG_BN = "bgcolor="+ unescape(Q['tbg_bn']);
else
TBG_BN = "";
T_W = unescape(Q['t_w']);
TB_PT = unescape(Q['tb_pt']);
TB_PN = unescape(Q['tb_pn']);// navigation
TB_P = unescape(Q['tb_p']);
TB_N = unescape(Q['tb_n']);
TP_PT = unescape(Q['tp_pt']);
TP_PN = unescape(Q['tp_pn']);// navigation
TP_P = unescape(Q['tp_p']);
TP_N = unescape(Q['tp_n']);
TXT_PN = unescape(Q['txt_pn']);
}
function Xcm() {
var CUR = 0;
for (i in Q['v']) {
CUR++;
}
if (CUR >= 1) {
AREAS = true;
e_v = 0;
}
else
AREAS = false;
CUR = 0;
for (i in Q['u']) {
CUR++;
}
if (CUR >= 1) {
FREIGHT = true;
e_u = 0;
}
else
FREIGHT = false;
CUR = 0;
for (i in Q['x']) {
if (Q['x'][i]['activ'] == 'y')
CUR++;
}
if (CUR >= 1) {
PAYMENT = true;
for (i in Q['x']) {
if (Q['x'][i]['activ'] == 'y'){
e_x = i;
break;
}
}
PAYCHANGE = true;
if (Q['x'][i]['curr']){
if (Q['x'][i]['curr'] == 'null')
PAYCHANGE = true;
else {
PAYCHANGE = false;
SELECTED_CURRENCY = unescape(Q['x'][e_x]['curr']);
}
}
}
else
PAYMENT = false;
}
function Xcq_strings(){
for (lang in r.language){
eval(lang +" = r.language[lang]");
}
}
function Xco(){
B_IMG = unescape(Q['b_img']);
B_A_IMG = unescape(Q['b_a_img']);
B_B_IMG = unescape(Q['b_b_img']);
GIF_SEL = unescape(Q['gif_sel']);
GIF_NSEL = unescape(Q['gif_nsel']);
GO_RIGHT = unescape(Q['ap']);
GO_LEFT = unescape(Q['ao']);
}
function Xcp(){
nshow = 'brutto';
n_liefer = true;
if (Q['nbase'] == 'netto')
E_TAX_S = E_TAX_N;
else
E_TAX_S = E_TAX_B;
}
function Xcq(){
Xbd();
LAST_HREF = '';
if (Q['al_url']){
if (Q['al_url'].length != 0)
LAST_HREF = unescape(Q['al_url']);
}
else
LAST_HREF = document.referrer;
if (!LAST_HREF.length)
LAST_HREF = 'http://www.js-webShop.com';
ADMIN = false;
LOCK = false;
LEFT = false;
CURR = Q['R']['base'];
EUROLAND = Q['EUROLAND'];
TO_EURO = 'true';
EURO_TO = 'false';
EURO_TO_EURO = 'false';
e_C_state = "aq";
version = "1.6";
auto_bestell = true;
besch_dir = "/beschreibungen/";
SELECTED_CURRENCY = 'base';
Xco();
Xck();
Xcm();
E_init_C();
Xcq_strings();
if (Q['version'] != version)
alert(EA_W_VERSION);
Xcp();
Xct();
Xcu();
}
function Xcr(hash,term){
tmp = '';
if (A[hash]['name']){
tmp = unescape(A[hash]['name'].toLowerCase());
if (tmp.indexOf(term) != -1)
return true;
}
if (A[hash]['l']) {
tmp = unescape(A[hash]['l'].toLowerCase());
if (tmp.indexOf(term) != -1)
return true;
}
if (A[hash]['o']){
tmp = unescape(A[hash]['o'].toLowerCase());
if (tmp.indexOf(term) != -1)
return true;
}
return false;
}
function E_an() {
var such = '';
if ((such = prompt (E_SEARCH_PROMPT,'')) == null)
return;
if (such == '')
return;
e_an_C_before = e_C_state;
e_C_state = 'an';
LOCK = true;
with (r.document) {
open();
Xda();
Xgu (E_SEARCH_NAME);
writeln(E_SEARCH_ERG1 + such + E_SEARCH_ERG2 +"\t</FONT>\t<HR></TABLE>");
for (a in A){
if (Xcr(a,such.toLowerCase())){
if (A[a]['h'] == "1")
Xdr(a);
else if (A[a]['h'] == "2")
Xds(a);
else if (A[a]['h'] == "3")
Xdt(a);
else if (A[a]['h'] == "4")
e_printHTML4(a);
else
alert("Unknown HTMLTYP!!");
}
}
Xdb();
close();
}
Xce();
LOCK = false;
}
function Xct()
{
EURO_TO_EURO = EURO_TO = TO_EURO = NO_EURO = 'false';
CURR = Q['R']['base'];
if (EUROLAND == 'true') {
if (Xbm(SELECTED_CURRENCY) == 'true')
EURO_TO_EURO = 'true';
else TO_EURO = 'true';
}
else {
if (Xbm(SELECTED_CURRENCY) == 'true') {
EURO_TO = 'true';
SELECTED_CURRENCY = CURR;
}
else NO_EURO = 'true';
}
}
function Xcu() {
if (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4)
IE4 = true;
else
IE4 = false;
if (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 3)
IE3 = true;
else
IE3 = false;
if (navigator.appName == "Netscape" && parseInt(navigator.appVersion) == 3)
MOZZ3 = true;
else
MOZZ3 = false;
if (navigator.appName == "Netscape" && parseInt(navigator.appVersion) == 4)
MOZZ4 = true;
else
MOZZ4 = false;
if (navigator.appVersion.indexOf("Win") >= 0)
WIN = true;
else
WIN = false;
if (navigator.appVersion.indexOf("Mac") >= 0){
MAC = true;
}
else
MAC = false;
if (!(MOZZ3 || IE4)) {
window.captureEvents(Event.ERROR);
window.onError=Xcj;
}
if (IE3) {
if (confirm(E_CHECK_BROWSER_IE_ERR))
location.replace("http://cgi.netscape.com/cgi-bin/upgrade.cgi");
else
alert(E_CHECK_BROWSER_IE_ALERT);
}
}
function Xcv(C_hash){
if (LOCK)
return;
else
LOCK = true;
if (C_hash != 'refresh')
e_C_state = C_hash;
Xcy ();
Xdn ();
LOCK = false;
}
function Xcv_left(){
if (LOCK) {return;}
LOCK = true;
prev_C = '';
if (e_C_state == 'aq')
prev_C = 'data';
else if (e_C_state == 'data')
prev_C = 'basket';
else if (e_C_state == 'send')
prev_C = 'data';
else if (e_C_state == 'basket')
prev_C = C.length - 1;
else if (e_C_state == 'an'){
e_C_state = e_an_C_before;
LOCK = false;
Xcv_left();
return;
}
else if (e_C_state == 0)
prev_C = 'aq';
else
prev_C = e_C_state - 1;
LOCK = false;
Xcv(prev_C);
}
function Xcv_right(){
if (LOCK) {return;}
LOCK = true;
next_C = '';
if (e_C_state == 'aq')
next_C = 0;
else if (e_C_state == 'basket')
next_C = 'data';
else if (e_C_state == 'data')
next_C = 'send';
else if (e_C_state == 'send')
next_C = 'aq';
else if (e_C_state == 'an'){
e_C_state = e_an_C_before;
LOCK = false;
Xcv_right();
return;
}
else if (e_C_state == C.length - 1)
next_C = 'basket';
else
next_C = e_C_state + 1;
LOCK = false;
Xcv(next_C);
}
function Xcy (){
if (!LEFT) {
if (Q['left']) {
this.l.document.location.replace(Q['left']);
}
else {
this.l.document.open();
E_print_navigation();
l.document.close();
}
LEFT = true;
}
Xcz();
}
function Xcz(){
for (i in l.document.images) {
nm = escape(l.document.images[i].name);
if (nm == 'nav_'+ e_C_state)
l.document.images[i].src = GIF_SEL;
else
if (nm.indexOf('nav_') != -1)
l.document.images[i].src = GIF_NSEL;
if (nm.indexOf('gif_') != -1){
na = nm.substring(4,nm.length);
if (na == e_C_state) {
if (isNaN(na)){
if (eval("Q['navgifs_"+ na +"']"))
eval("l.document.images[i].src = unescape(Q['navgifs_"+ na +"'])");
}
else {
if (C[na]['navgifs'])
l.document.images[i].src = unescape(C[na]['navgifs']);
}
}
else {
if (isNaN(na)){
if (eval("Q['navgif_"+ na +"']"))
eval("l.document.images[i].src = unescape(Q['navgif_"+ na +"'])");
}
else {
if (C[na]['navgif'])
l.document.images[i].src = unescape(C[na]['navgif']);
}
}
}
}
}
function Xda(){
with (r.document) {
write("<BODY "+ PT_BGC +" link='"+ PT_L +"' vlink='"+ PT_VL +"' alink='"+ PT_AL +"' background='");
if (!isNaN(e_C_state)){
if (C[e_C_state]['bg'])
write(unescape(C[e_C_state]['bg']));
else
write(PT_BG);
}
else
write(PT_BG);
writeln("'><FORM name=right onSubmit='return false;'>");
write(PAGE_TOP);
}
}
function Xdb(sum){
with (r.document) {
writeln("<TABLE "+ TBG_PN +" width='"+ T_W +"' border='"+ TB_PN +"' cellpadding='"+ TP_PN +"'>");
if (sum == 'f'){
write(PAGE_SUM);
writeln("<TR>");
writeln("<TD align=middle colspan=3>"+ FONT + E_PRINT_LEFT_PAGE_BOT_SUM1 +"<INPUT type=text name=summe_1 size=8 onChange='parent.Xce();'>");
writeln(E_PRINT_LEFT_PAGE_BOT_SUM2 +"<INPUT type=text name=summe_2 size=8 onChange='parent.Xce();'></TD>");
writeln("</TR>");
}
writeln("<TR><TD align=left><A href='javascript:parent.Xcv_left();'><IMG src='"+ GO_LEFT +"' border=0></TD>");
writeln("<TD align=middle><A href='javascript:parent.Xdl();'>"+ FONT_TT + TXT_PN +"</A></TD>");
writeln("<TD align=right><A href='javascript:parent.Xcv_right();'><IMG src='"+ GO_RIGHT +"' border=0></TD></TR>");
writeln("</TABLE></FORM>");
write(PAGE_BOT);
}
}
function Xdc(){
with (r.document) {
}
}
function E_print_navigation (){
with (l.document) {
write("<BODY "+ NP_BGC +" link='"+ PT_L +"' vlink='"+ PT_VL +"' alink='"+ PT_AL +"' background='"+ NP_BG +"'>");
write(NAV_P_TOP);
writeln("<CENTER>");
writeln("<TABLE "+ TBG_NT +" width='100%' border='"+ TB_N +"' cellpadding='"+ TP_N +"'>");
writeln("<TR><TD colspan=2 align=middle><A href='javascript:parent.Xdl();'>");
writeln("<IMG SRC='"+ unescape(Q['ak']) +"' BORDER=0></A></TD></TR>");
writeln("<TR><TD width=25% align='middle' colspan=2>");
writeln("<A HREF='javascript:parent.E_al();'><IMG SRC='"+unescape(Q['al'])+"' border=0></A></TD></TR>");
writeln("<TR><TD width=25% align='middle' colspan=2><A HREF='javascript:parent.Xcv_left();'");
writeln("><IMG SRC='"+ GO_LEFT +"' border=0></A>");
writeln("<A HREF='javascript:parent.E_an();'><IMG SRC='"+ unescape(Q['an']) +"' border=0 ALT='Suchen'></A>");
writeln("<A HREF='javascript:parent.Xcv_right();'>");
writeln("<IMG SRC='"+ GO_RIGHT +"' border=0 ALT='The Road Ahead ;-)'></A></TD></TR>");
writeln("<TR><TD colspan=2><HR></TD></TR>");
if (Q['navgif_aq']){
writeln("<TR "+ TBG_NP +"><TD colspan=2><A href=\"javascript:parent.Xcv('aq');\">");
writeln("<IMG src='"+ unescape(Q['navgif_aq']) +"' name='gif_aq' border=0></A></TD></TR>");
}
else {
writeln("<TR "+ TBG_NP +"><TD width=20><A href=\"javascript:parent.Xcv('aq');\">");
writeln("<IMG src='"+ GIF_SEL +"' name=nav_aq border=0></A></TD>");
writeln("<TD><A href=\"javascript:parent.Xcv('aq');\">");
writeln(FONT_NAV_H);
writeln(E_NAME_STARTSEITE +"</FONT></A></TD></TR>");
}
for (i in C) {
if (C[i]['navgif']){
writeln("<TR "+ TBG_NP +"><TD colspan=2><A href=\"javascript:parent.Xcv("+ i +");\">");
writeln("<IMG src='"+ unescape(C[i]['navgif']) +"' name='gif_"+ i +"' border=0></A></TD></TR>");
}
else {
writeln("<TR "+ TBG_NP +"><TD width=20><A href=\"javascript:parent.Xcv("+ i +");\">");
writeln("<IMG src='"+ GIF_NSEL +"' name='nav_"+ i +"' border=0></A></TD>");
writeln("<TD><A href=\"javascript:parent.Xcv("+ i +");\">");
writeln(FONT_NAV);
writeln( unescape(C[i]['name']) +"</FONT>");
writeln("</A></TD></TR>");
}
}
writeln("<TR "+ TBG_NP +"><TD colspan=2><HR></TD></TR>");
if (Q['navgif_basket']){
writeln("<TR "+ TBG_NP +"><TD colspan=2><A href=\"javascript:parent.Xcv('basket');\">");
writeln("<IMG src='"+ unescape(Q['navgif_basket']) +"' name='gif_basket' border=0></A></TD></TR>");
}
else {
writeln("<TR "+ TBG_NP +"><TD><A href=\"javascript:parent.Xcv('basket');\">");
writeln("<IMG src='"+ GIF_NSEL +"' name=nav_basket border=0></A></TD>");
writeln("<TD><A href=\"javascript:parent.Xcv('basket');\">");
writeln(FONT_NAV_H);
writeln(E_NAME_BASKET +"</FONT></A></TD></TR>");
}
if (Q['navgif_data']){
writeln("<TR "+ TBG_NP +"><TD colspan=2><A href=\"javascript:parent.Xcv('data');\">");
writeln("<IMG src='"+ unescape(Q['navgif_data']) +"' name='gif_data' border=0></A></TD></TR>");
}
else {
writeln("<TR "+ TBG_NP +"><TD><A href=\"javascript:parent.Xcv('data');\">");
writeln("<IMG src='"+ GIF_NSEL +"' name=nav_data border=0></A></TD>");
writeln("<TD><A href=\"javascript:parent.Xcv('data');\">");
writeln(FONT_NAV_H);
writeln(E_NAME_DATA +"</FONT></FONT></A></TD></TR>");
}
if (Q['navgif_send']){
writeln("<TR "+ TBG_NP +"><TD colspan=2><A href=\"javascript:parent.Xcv('send');\">");
writeln("<IMG src='"+ unescape(Q['navgif_send']) +"' name='gif_send' border=0></A></TD></TR>");
}
else {
writeln("<TR "+ TBG_NP +"><TD><A href=\"javascript:parent.Xcv('send');\">");
writeln("<IMG src='"+ GIF_NSEL +"' name=nav_send border=0></A></TD>");
writeln("<TD><A href=\"javascript:parent.Xcv('send');\">");
writeln(FONT_NAV_H);
writeln(E_NAME_SEND +"</FONT></FONT></A></TD></TR>");
}
writeln("<TR "+ TBG_NP +"><TD colspan=2 align=middle>");
writeln(FONT_NAV + "<FONT size=-1>");
writeln("<FORM name=confign><SELECT name=nshow onChange=\"parent.Xbi(this)\">");
writeln("<OPTION value='netto'");
if (nshow == 'netto')
write(" selected ");
writeln("> "+ E_PRINT_NAVIGATION_NETTO);
writeln("<OPTION value='brutto'");
if (nshow == 'brutto')
write(" selected ");
writeln("> "+ E_PRINT_NAVIGATION_BRUTTO);
writeln("</SELECT></FORM></FONT>");
writeln("</TD></TR>");
CUR = 0;
for (i in Q['R']) {
CUR++;
}
for (i in Q['T']){
if (Q['T'][i]['use'] == 'y')
CUR++;
}
if (CUR > 1) {
writeln("<TR "+ TBG_NP +"><TD colspan=2 align=middle>");
writeln(FONT_NAV + "<FONT size=-1>");
writeln("<FORM name=config><SELECT name=R onChange=\"parent.B_set_R(this)\">");
writeln("<OPTION value='base'>"+ CURR);
if (EUROLAND == 'true') {
for (j in Q['T']) {
if (Q['T'][j]['use'] == 'n' || j == CURR) continue;
write("<OPTION value='"+ j +"'");
if (j == SELECTED_CURRENCY) write("selected");
writeln(Xbn('T',j));
}
}
for (k in Q['R']) {
if (k == CURR || k == 'base') continue;
write("<OPTION value='"+ k +"'");
if (k == SELECTED_CURRENCY) write("selected");
writeln(Xbn('R',k));
}
writeln("</SELECT></FORM></FONT>");
}
writeln("</TD></TR></TABLE></CENTER>");
write(NAV_P_BOT);
}
}
function E_print_basket() {
var coo = new Array();
with (r.document){
open();
Xda();
writeln("<TABLE "+ TBG_B +" width='"+ T_W +"' border='"+ TB_P +"' cellpadding='"+ TP_P +"'>");
writeln("<TR "+ TBG_BN +"><TD colspan=2 align=middle>"+ FONT_CS +"<FONT size=+1>"+ E_PRINT_BASKET_ORDER +'</FONT></FONT></TD></TR>');
coo = Xch();
for (coi in coo){
if (coi == name_des_cookies) continue;
if (coo[coi].indexOf('%7C%7C') == -1) continue;
writeln("<TR><TD>"+ FONT_CS + unescape(coi) );
writeln("</TD><TD>"+ FONT_CS);
writeln("<INPUT type=button name='"+ coi +"' value='"+ E_PRINT_BASKET_ORDER_GET +"' onClick='parent.Xid(this);'>");
writeln("<INPUT type=button name='"+ coi +"' value='"+ E_PRINT_BASKET_ORDER_DEL +"' onClick='parent.XbsOrder(this);'></TD></TR>");
}
if (D.length){
writeln("<TR><TD colspan=2 align=middle>"+ FONT_CS +"<INPUT type=button value='"+ E_PRINT_BASKET_ORDER_ADD +"' onClick='parent.Xie();'></TD></TR>");
}
writeln("</TABLE>");
writeln("<TABLE "+ TBG_B +" width='"+ T_W +"' border='"+ TB_P +"' cellpadding='"+ TP_P +"'>");
writeln("<TR "+ TBG_BN +"><TD colspan=2 align=middle>"+ FONT_CS +"<FONT size=+1>"+ E_PRINT_BASKET_HEAD +'</FONT></FONT></TD></TR>');
Xdz();
writeln("</TABLE>");
Xdb();
close();
}
}
function Xdf() {
/* with (r.document){
open();
Xda();
Xgu (E_THANKS_NAME);
writeln(E_THANKS_ALERT +"\t</FONT>\t<HR></TABLE>");
Xdb();
close();
}
*/
alert(E_THANKS_ALERT);
return;
}
function Xdg() {
with (r.document){
open();
Xda();
writeln("<TABLE "+ TBG_B +" width='"+ T_W +"' border='"+ TB_P +"' cellpadding='"+ TP_P +"'>");
writeln("<TR "+ TBG_BN +"><TD colspan=2 align=middle>"+ FONT_CS + "<FONT size=+1>"+ E_PRINT_DATA_HEAD +'</FONT></FONT></TD></TR>');
writeln('<TR '+ TBG_BN +'><TH colspan=2 align=middle>'+ FONT_CS + E_PRINT_DATA_HEAD2 +'</FONT></TR>');
writeln('<TR><TD valign=top colspan=2> \n'+ FONT_CS + E_PRINT_DATA_MESS1 +'<BR>');
writeln(E_PRINT_DATA_MESS2 +'</FONT></TD></TR>\n');
for (i in Q['W']){
if (Q['W'][i]['required'] == "yes")
writeln('<TR '+ TBG_BR +'><TD valign=top width=30%>');
else
writeln('<TR>\n<TD valign=top width=30%>');
writeln(FONT_CS + unescape(Q['W'][i]['name']));
writeln('</FONT> \n</TD> \n<TD valign=top width=70%>');
write(FONT_CS + "<INPUT type=text name=\"num");
writeln(i +"\" size=30 maxlength=40");
if (eval("kunde['num" + i +"']"))
write("value='"+ eval("kunde['num" + i +"']") +"'");
else
if (Q['W'][i]['default'])
write("value='"+ unescape(Q['W'][i]['default']) +"'");
writeln("onChange=\"parent.B_enter_W(this,'"+ Q['W'][i]['validation'] +"')\"><BR></TD></TR>\n");
}
if (PAYMENT) {
writeln('<TR '+ TBG_BR +'>\n<TD valign=top width=30%>');
writeln(FONT_CS + E_PRINT_DATA_PAY);
writeln('</FONT> \n</TD> \n<TD valign=top width=70%>');
writeln(FONT_CS + "<SELECT name=\"x\" onChange='parent.Xdj(this);'>");
for (p in Q['x']){
if (Q['x'][p]['activ'] == 'y' ){
write("<OPTION value='"+ p +"'");
if (e_x == p)
writeln("selected>");
else
writeln(">");
writeln(unescape(Q['x'][p]['name']) +"&nbsp;&nbsp;("+ Xbj(Q['x'][p]['value'])+")");
if (Q['x'][p]['curr']){
if (Q['x'][p]['curr'] != 'null')
writeln(E_PRINT_DATA_ONLY + unescape(Q['x'][p]['curr']));
}
}
}
writeln("</SELECT></TD></TR>");
if (Q['x'][e_x]['msg']) {
writeln('<TR>\n<TD valign=top colspan=2>');
writeln(FONT_CS + unescape(Q['x'][e_x]['msg']) + "</TD></TR>");
}
for (idx in Q['x'][e_x]){
if (idx == 'name') continue;
else if (idx == 'zit' || idx == 'ziv' || idx == 'zin' || idx == 'eva') continue;
else if (idx == 'enctype') continue;
else if (idx == 'action') continue;
else if (idx == 'y') continue;
else if (idx == 'value') continue;
else if (idx == 'activ') continue;
else if (idx == 'msg') continue;
else if (idx == 'curr') continue;
else {
writeln('<TR '+ TBG_BR +'>\n<TD valign=top width=30%>');
writeln(FONT_CS + unescape(Q['x'][e_x][idx]));
writeln('</FONT> \n</TD> \n<TD valign=top width=70%>');
write(FONT_CS + "<INPUT type=text name=\"pay");
writeln(idx +"\" size=30 maxlength=40");
if (eval("paym['pay"+ idx +"']"))
write(" value='"+ eval("paym['pay" + idx +"']") +"'");
writeln(" onChange=\"parent.Xbq(this)\"><BR></TD></TR>\n");
}
}
}
if (AREAS) {
writeln('<TR '+ TBG_BR +'>\n<TD valign=top width=30%>');
writeln(FONT_CS + E_PRINT_DATA_AREAS);
writeln('</FONT> \n</TD> \n<TD valign=top width=70%>');
writeln(FONT_CS + "<SELECT name=\"v\" onChange='parent.Xdi(this);'>");
for (i in Q['v']) {
write("<OPTION value='"+ i +"'");
if (e_v == i)
writeln("selected>");
else
writeln(">");
writeln(unescape(Q['v'][i]['name']) +"&nbsp;&nbsp;("+ Xbj(Q['v'][i]['value'])+")");
}
writeln("</SELECT></TD></TR>");
}
if (FREIGHT){
writeln('<TR '+ TBG_BR +'>\n<TD valign=top width=30%>');
writeln(FONT_CS + E_PRINT_DATA_FREIGHT);
writeln('</FONT> \n</TD> \n<TD valign=top width=70%>');
writeln(FONT_CS + "<SELECT name=\"u\" onChange='parent.Xdk(this);'>");
for (i in Q['u']) {
write("<OPTION value='"+ i +"'");
if (e_u == i)
writeln("selected>");
else
writeln(">");
writeln(unescape(Q['u'][i]['name']) +"&nbsp;&nbsp;("+ Xbj(Q['u'][i]['value'])+")");
}
writeln("</SELECT></TD></TR>");
}
writeln('<TR '+ TBG_BN +'><TH colspan=2 align=middle>');
writeln(FONT_CS +"<FONT size=+1>"+ E_PRINT_DATA_SAVE +"</FONT></FONT></TR>");
writeln("<TR><TD valign=top width=70%>"+ FONT_CS + E_PRINT_DATA_SAVE_TEXT +"</FONT></TD><TD valign=top width=30%>");
write("<A HREF=\"javascript:parent.Xcf()\">");
writeln("<img src=\""+ unescape(Q['cookie']) +"\" border=0></A></TD></TR>");
writeln("</TABLE>");
Xdb();
close();
}// end of with
}
function Xdh(){
var not_here = '';
var k_idx = '';
var b;
var b_tmp = 0;
for (t in Q['W']){
k_idx = "num" + t;
if (Q['W'][t]['required'] == 'yes' && !(kunde[k_idx]))
not_here += Q['W'][t]['name'] + "\n";
}
if (PAYMENT){
for (idx in Q['x'][e_x]){
if (idx == 'name') continue;
else if (idx == 'zit' || idx == 'ziv' || idx == 'zin' || idx == 'eva') continue;
else if (idx == 'enctype') continue;
else if (idx == 'action') continue;
else if (idx == 'y') continue;
else if (idx == 'value') continue;
else if (idx == 'msg') continue;
else if (idx == 'activ') continue;
else if (idx == 'curr') continue;
else {
if (!eval("paym['pay"+ idx +"']"))
not_here += unescape(Q['x'][e_x][idx]) + "\n";
}
}
}
if (not_here != '') {
alert(E_THANKS_MISSING + unescape(not_here));
setTimeout("Xcv('data')",100);
return;
}
for (b in I){
if (I[b])
b_tmp += 1;
}
if (!b_tmp) {
alert(E_THANKS_ORDER);
setTimeout("Xcv('basket')",100);
return;
}
var action = ''+ unescape(Q['action']);
var enctype = ''+ unescape(Q['enctype']);
if (PAYMENT){
if (Q['x'][e_x]['action']){
if (Q['x'][e_x]['action'].length != 0)
action = unescape(Q['x'][e_x]['action']);
}
if (Q['x'][e_x]['action']){
if (Q['x'][e_x]['action'].length)
enctype = unescape(Q['x'][e_x]['enctype']);
}
}
if (action.indexOf("mailto:",0) != -1)
var ons = "onSubmit='setTimeout(\"parent.Xdf();\",2000);'";
else
var ons = '';
with (r.document){
open();
Xda();
writeln("</form><FORM name=send method=post action='"+ action +"' enctype='"+ enctype +"' "+ ons +">");
if (Q['zit'] && Q['zin'] && Q['ziv'])
writeln("<INPUT type='"+ unescape(Q['zit']) +"' name='"+ unescape(Q['zin']) +"' value='"+ unescape(Q['ziv']) +"'>");
if (PAYMENT){
if (Q['x'][e_x]['zit'] && Q['x'][e_x]['zin'] && Q['x'][e_x]['ziv'])
writeln("<INPUT type='"+ unescape(Q['x'][e_x]['zit']) +"' name='"+ unescape(Q['x'][e_x]['zin']) +"' value='"+ unescape(Q['x'][e_x]['ziv']) +"'>");
}
Xgu(E_NAME_OWNER);
writeln("<CENTER>"+ unescape(Q['ac']) +"<BR>");
writeln("<A href='mailto:"+ unescape(Q['ad']) +"'>"+ unescape(Q['ad']) +"</A><BR>");
writeln(unescape(Q['str']));
writeln(unescape(Q['ae']) +"<BR>");
writeln(unescape(Q['af']) +"<BR>");
writeln(unescape(Q['tel']) );
writeln(unescape(Q['fax']) +"</CENTER><P><P>")
writeln("\t</FONT></TD></TR></TABLE>");
writeln("<TABLE "+ TBG_B +" width='"+ T_W +"' border='"+ TB_P +"' cellpadding='"+ TP_P +"'>");
writeln("<TR "+ TBG_BN +"><TD colspan=2 align=middle>"+ FONT_CS + "<FONT size=+1>"+ E_PRINT_SEND_HEAD +'</FONT></FONT></TD></TR>');
Xdv();
writeln('<TR><TH colspan=2><CENTER>');
writeln(FONT_CS +'<INPUT type=submit value="'+ E_PRINT_DATA_OK +'" >');
if (MOZZ4)
writeln('<INPUT type=button value="'+ E_PRINT_DATA_PRINT +'" onClick="print();"></FONT>');
writeln('</FONT></CENTER></TR>');
Xdz();
writeln('<TR><TH colspan=2><CENTER>');
writeln(FONT_CS +'<INPUT type=submit value="'+ E_PRINT_DATA_OK +'">');
if (MOZZ4)
writeln('<INPUT type=button value="'+ E_PRINT_DATA_PRINT +'" onClick="print();"></FONT>');
writeln('</FONT></CENTER></TR>');
writeln("</TABLE>");
Xdb();
close();
}
}
function Xdi(s_obj){
e_v = s_obj.options[s_obj.selectedIndex].value;
if (Q['v'][e_v]['n'] == 'no' && nshow == 'brutto') {
alert(EA_LIEFER_NETTO);
nshow = 'netto';
LEFT = false;
Xcy ();
Xcz();
}
if (Q['v'][e_v]['n'] == 'yes' && nshow == 'netto') {
alert(EA_LIEFER_BRUTTO);
nshow = 'brutto';
LEFT = false;
Xcy ();
Xcz();
}
if (Q['v'][e_v]['n'] == 'no') {
n_liefer = false;
}
}
function Xdj(s_obj){
paym = new Array();
e_x = s_obj.options[s_obj.selectedIndex].value;
if (Q['x'][e_x]['curr']){
if (Q['x'][e_x]['curr'] != 'null'){
PAYCHANGE = false;
SELECTED_CURRENCY = unescape(Q['x'][e_x]['curr']);
Xct();
LEFT = false;
}
else {
PAYCHANGE = true;
}
}
else
PAYCHANGE = true;
Xcv('refresh');
}
function Xdk(s_obj){
e_u = s_obj.options[s_obj.selectedIndex].value;
}
function Xdl(){
with (r.document){
open();
Xda();
Xgu(E_NAME_OWNER);
writeln("<CENTER>"+ unescape(Q['ac']) +"<BR>");
writeln("<A href='mailto:"+ unescape(Q['ad']) +"'>"+ unescape(Q['ad']) +"</A><BR>");
writeln(unescape(Q['str']));
writeln(unescape(Q['ae']) +"<BR>");
writeln(unescape(Q['af']) +"<BR>");
writeln(unescape(Q['tel']) );
writeln(unescape(Q['fax']) +"<P><P>")
writeln(unescape(Q['ag']) );
writeln("\t</FONT></TD></TR></TABLE>");
path = unescape(location.href.substring(0,location.href.lastIndexOf("/") + 1));
proto = path.substring(0,path.indexOf(":"));
write(PAGE_BOT);
writeln("<TABLE "+ TBG_PN +" width='"+ T_W +"' border='"+ TB_PN +"' cellpadding='"+ TP_PN +"'>");
writeln("<TR><TD align=left><A href='javascript:parent.Xcv_left();'><IMG src='"+ GO_LEFT +"' border=0></TD>");
if (proto == 'http' && path.indexOf(".") != -1 ){
writeln('<TD align=middle bgcolor=white><A href="http://www.js-webShop.com" target=_new>');
writeln('<img src="http://www.js-webShop.com/banner/js-webshop.gif" border=0></A></TD>');
}
else if (proto == 'https' && path.indexOf(".") != -1 ){
writeln('<TD align=middle bgcolor=white><A href="http://www.js-webShop.com" target=_new>');
writeln('<img src="https://secure.js-webShop.com/banner/js-webshop.gif" border=0></A></TD>');
}
else
writeln("<TD align=middle><A href='javascript:parent.Xdl();'>"+ FONT_TT + TXT_PN +"</A></TD>");
writeln("<TD align=right><A href='javascript:parent.Xcv_right();'><IMG src='"+ GO_RIGHT +"' border=0></TD></TR>");
writeln("</TABLE></FORM>");
close();
}
}
function Xgu (txt){
with (r.document){
writeln("<TABLE "+ TBG_PT +" width='"+ T_W +"' border='"+ TB_PT +"' cellpadding='"+ TP_PT +"'>");
write("<TR><TD valign=top>\n\t"+ FONT_RH + unescape(Q['name']) +" &nbsp;&nbsp; <I>");
writeln( txt +"</I></FONT>\n\t<HR>");
writeln(FONT_TT);
}
}
function Xdm(){
with (r.document){
open();
Xda();
Xgu(E_NAME_STARTSEITE);
writeln(unescape(Q['ah']) +"\t</FONT></TABLE>");
Xdb();
close();
}
}
function Xdn (){
if (e_C_state == 'aq') {
if (Q['aq'].length != 0)
r.document.location.replace(unescape(Q['aq']));
else
Xdm();
}
else if (e_C_state == 'basket')
E_print_basket();
else if (e_C_state == 'data')
Xdg();
else if (e_C_state == 'send')
Xdh();
else if (!isNaN(e_C_state)) {
if (C[e_C_state]['url']){
this.r.document.location.replace(unescape(C[e_C_state]['url']));
}
else {
r.document.open();
Xda();
Xdq ();
if (C[e_C_state]['f'])
Xdb('f');
else
Xdb();
r.document.close();
}
}
Xce();
}
function Xdox(was, Z) {
if (was) {
eval("r.document.img"+ Z +".src = '"+ B_A_IMG +"'");
if (I[Z])
window.status = E_MOB_N_BEST;
else
window.status = E_MOB_BEST;
}
else {
if (I[Z])
eval("r.document.img"+ Z +".src = '"+ B_B_IMG +"'");
else
eval("r.document.img"+ Z +".src = '"+ B_IMG +"'");
}
}
function Xdp(idx){
with (r.document){
open();
Xda();
Xgu(unescape(A[idx]['name']));
writeln(unescape(A[idx]['o']) +"</FONT>");
if (A[idx]['url'])
writeln("<P><center><A href='"+ unescape(A[idx]['url']) +"'>"+ FONT_TT + E_SHOWDESC_MORE +"</FONT></A>");
writeln("<P><center><A href=\"javascript:parent.Xcv('refresh');\">"+ FONT_TT + E_SHOWDESC_BACK +"</FONT></A></center></TD></TR></TABLE>");
Xdb();
close();
}
}
function Xdq (){
var art = '';
if (e_C_state == 'aq') {return;}
if (e_C_state == 'basket') {return;}
if (e_C_state == 'data') {return;}
if (e_C_state == 'send') {return;}
with (r.document){
if (C[e_C_state]['e']) {
Xgu (unescape(C[e_C_state]['name']));
writeln(unescape(C[e_C_state]['e']) +"\t</FONT>\t<HR></TABLE>");
}
art = C[e_C_state]['A'];
if (art.length == 0)
return;
while ((i = art.substring(0,art.indexOf(','))) != '') {
if (i > 10) return;
if (A[i]['h'] == "1")
Xdr(i);
else if (A[i]['h'] == "2")
Xds(i);
else if (A[i]['h'] == "3")
Xdt(i);
else if (A[i]['h'] == "4")
e_printHTML4(i);
else
alert("Unknown HTMLTYP!!");
art = art.substring(art.indexOf(',') + 1, art.length);
}
}
}
function Xha(idx){
with (r.document){
if (A[idx]['typ'] == 'checkbox') {
writeln(FONT + E_PRINT_HTML_ORD +"<BR>");
writeln("<INPUT type=checkbox name='check"+ idx +"' onClick='parent.Xbt("+ idx +");'");
if (I[idx])
write(" CHECKED>");
else
write(">");
}
else if (A[idx]['typ'] == 'img') {
writeln("<A");
writeln(" HREF='javascript:parent.Xbt("+ idx +");'");
writeln(" onMouseOver='parent.Xdox(true,"+ idx +");' ");
writeln(" onMouseOut='parent.Xdox(false,"+ idx +");'>");
if (I[idx])
write("<IMG name='img"+ idx +"' src='"+ B_B_IMG +"' border=0></A>");
else
write("<IMG name='img"+ idx +"' src='"+ B_IMG +"' border=0></A>");
}
else if (A[idx]['typ'] == 'txt') {
writeln(E_PRINT_HTML_MENGE +" <INPUT type=text onChange='parent.Xcd(this,"+ idx +" );'");
if (I[idx])
write(" size=4 maxlength=5 value='"+ D[idx]['j'] +"'>");
else
write(" size=4 maxlength=5 value=''>");
}
else
writeln("<INPUT>");
}
}
function XgzCheckbox(f_ar, aix, fix){
with (r.document){
writeln("<TD valign=top>");
writeln(FONT + f_ar['name'] +"<HR>");
for (ix in f_ar){
if (ix == 'name' || ix == 'price') continue;
write("<INPUT name='"+ aix +"-"+ fix +"-"+ ix +"' type=checkbox onClick='parent.Xhi(this, "+ aix +");' ");
if (I[aix])
if (D[aix][fix +"-"+ ix])
write("checked");
writeln(" >"+ unescape(ix));
if ( parseInt(f_ar[ix]) > 0 && f_ar['price'] == 'y')
writeln(" ("+ Xbj(f_ar[ix]) +")");
if ( parseInt(f_ar[ix]) > 0 && f_ar['price'] == 'n')
writeln(" ("+ E_PRINT_FEATURES_ADD + Xbj(f_ar[ix]) +")");
writeln("<BR>");
}
writeln("</TD>");
}
}
function XgzRadio(f_ar, aix, fix){
with (r.document){
writeln("<TD valign=top>");
writeln(FONT + f_ar['name'] +"<HR>");
for (ix in f_ar){
if (ix == 'name' || ix == 'price') continue;
write("<INPUT type=radio name='el"+ aix +"-"+ fix +"' value='"+ ix +"'");
if (I[aix])
if (D[aix][fix +"-"+ ix])
write(" checked ");
write(" onClick='parent.Xhi(this, "+ aix +");'>"+ unescape(ix));
if ( parseInt(f_ar[ix]) > 0 && f_ar['price'] == 'y')
writeln(" ("+ Xbj(f_ar[ix]) +")");
if ( parseInt(f_ar[ix]) > 0 && f_ar['price'] == 'n')
writeln(" ("+ E_PRINT_FEATURES_ADD + Xbj(f_ar[ix]) +")");
writeln("<BR>");
}
writeln("</TD>");
}
}
function XgzSelect(f_ar, aix, fix){
with (r.document){
writeln("<TD valign=top>");
writeln(FONT + "<SELECT name='el"+ aix +"-"+ fix +"' onChange='parent.Xhi(this, "+ aix +");'><OPTION value=head>"+ f_ar['name'] +"</OPTION>");
for (ix in f_ar){
if (ix == 'name' || ix == 'price') continue;
write("<OPTION value='"+ fix +"-"+ ix +"'");
if (I[aix])
if (D[aix][fix +"-"+ ix])
write(" selected ");
write(">"+ unescape(ix));
if ( parseInt(f_ar[ix]) > 0 && f_ar['price'] == 'y')
writeln(" ("+ Xbj(f_ar[ix]) +")");
if ( parseInt(f_ar[ix]) > 0 && f_ar['price'] == 'n')
writeln(" ("+ E_PRINT_FEATURES_ADD + Xbj(f_ar[ix]) +")");
writeln("</OPTION>");
}
writeln("</SELECT></TD>");
}
}
function XgzMselect(f_ar, aix, fix){
with (r.document){
writeln("<TD valign=top>");
writeln(FONT + f_ar['name'] +"<HR><SELECT multiple name='el"+ aix +"-"+ fix +"' onChange='parent.Xhi(this, "+ aix +");'>");
for (ix in f_ar){
if (ix == 'name' || ix == 'price') continue;
write("<OPTION value='"+ fix +"-"+ ix +"'");
if (I[aix])
if (D[aix][fix +"-"+ ix])
write(" selected ");
write(">"+ unescape(ix));
if ( parseInt(f_ar[ix]) > 0 && f_ar['price'] == 'y')
writeln(" ("+ Xbj(f_ar[ix]) +")");
if ( parseInt(f_ar[ix]) > 0 && f_ar['price'] == 'n')
writeln(" ("+ E_PRINT_FEATURES_ADD + Xbj(f_ar[ix]) +")");
writeln("</OPTION>");
}
writeln("</SELECT></TD>");
}
}
function XgzText(f_ar, aix, fix){
with (r.document){
writeln("<TD valign=top>");
writeln(FONT + f_ar['name'] +"<HR>");
for (ix in f_ar){
if (ix == 'name' || ix == 'price') continue;
write( unescape(ix) +" <INPUT type=text name='"+ aix +"-"+ fix +"-"+ ix +"' ");
if (I[aix])
if (D[aix][fix +"-"+ ix])
write(" value='"+ unescape(D[aix][fix +"-"+ ix]) +"'");
write(" onChange='parent.Xhi(this, "+ aix +");'>");
if ( parseInt(f_ar[ix]) > 0 && f_ar['price'] == 'y')
writeln(" ("+ Xbj(f_ar[ix]) +")");
if ( parseInt(f_ar[ix]) > 0 && f_ar['price'] == 'n')
writeln(" ("+ E_PRINT_FEATURES_ADD + Xbj(f_ar[ix]) +")");
writeln("<BR>");
}
writeln("</TD>");
}
}
function Xhk (aix, fix){
var f_st = '';
fs = ''+ fix;
f_ar = new Array();
if (A[aix]['p_feature']) pr = unescape(A[aix]['p_feature']);
else pr = '-1';
if (fix == pr )
f_ar['price'] = 'y';
else
f_ar['price'] = 'n';
f_ar['name'] = unescape(Q['B'][fix]['name']);
if (A[aix][fs]){
f_st = unescape(A[aix][fs]);
}
if (f_st.indexOf('|',0) != -1){
while ((ss = f_st.substring(0,f_st.indexOf('|'))) != '') {
s_n = ss.substring(0,ss.indexOf(','));
s_p = ss.substring(ss.indexOf(',') + 1, ss.length);
f_ar[s_n] = parseInt(s_p);
f_st = f_st.substring(f_st.indexOf('|') + 1, f_st.length);
}
}
else {
ta = new Array();
if ( f_st.indexOf('~',0) != -1) {
ps = f_st.split('~');
count = 0;
for (ips in ps){
if (ps[ips])
ta[count] = parseInt(ps[ips]);
count++;
}
}
count = 0;
for (sf in Q['B'][fix]){
if (sf == 'name' || sf == 'required' || sf == 'ftype') continue;
if (ta[count])
f_ar[Q['B'][fix][sf]] = ta[count];
else
f_ar[Q['B'][fix][sf]] = '';
count++;
}
}
return f_ar;
}
function Xgz(aix, feat){
var fs = '';
var pr = '';
while ((i = feat.substring(0,feat.indexOf(','))) != '') {
f_ar = Xhk(aix, i);
if (Q['B'][i]['ftype'] == 'checkbox')
XgzCheckbox(f_ar, aix, i);
else if (Q['B'][i]['ftype'] == 'select')
XgzSelect(f_ar, aix, i);
else if (Q['B'][i]['ftype'] == 'multiple-select')
XgzMselect(f_ar, aix, i);
else if (Q['B'][i]['ftype'] == 'radio')
XgzRadio(f_ar, aix, i);
else if (Q['B'][i]['ftype'] == 'text')
XgzText(f_ar, aix, i);
else
alert("Unknown feature typ!!"+ Q['B'][i]['ftype']);
feat = feat.substring(feat.indexOf(',') + 1, feat.length);
}
}
function Xdr(idx){
var cols = 0;
with (r.document){
writeln("<TABLE "+ TBG_P +" width='"+ T_W +"' border='"+ TB_P +"' cellpadding='"+ TP_P +"'>");
writeln("<TR><TD width=10%>"+ FONT);
cols++;
Xha(idx);
writeln("</FONT></TD>");
if (A[idx]['j']) {
writeln("<TD width=10%>"+ FONT);
cols++;
writeln(E_PRINT_HTML_MENGE +" &nbsp;<INPUT type=text size=4 name='j"+ idx +"' maxlength=5 onChange='parent.Xcd(this,"+ idx +" );' ");
if (I[idx])
writeln("value='"+ D[idx]['j'] +"'>");
else
writeln(">");
writeln("</FONT></TD>");
}
writeln("<TD width=15%>"+ FONT +"<B>");
cols++;
if (A[idx]['o'])
writeln("<A HREF='javascript:parent.Xdp("+ idx +");'>");
else if (A[idx]['url'])
writeln("<A HREF='"+ unescape(A[idx]['url']) +"'>");
write( unescape(A[idx]['name']));
if (A[idx]['o'] || A[idx]['url'])
writeln("</A>");
writeln("</B></FONT></TD>");
if (A[idx]['image']) {
writeln("<TD width=15%>");
cols++;
if (A[idx]['url'])
writeln("<A HREF='"+ unescape(A[idx]['url']) +"'>");
write("<IMG src='"+ unescape(A[idx]['image']) +"' width=60 align=textop border=0>");
if (A[idx]['url'])
writeln("</A>");
writeln("</FONT></TD>");
}
writeln("<TD>"+ FONT);
cols++;
writeln(unescape(A[idx]['l']) +" &nbsp;</FONT></TD>");
writeln("<TD width=15% align=right>"+ FONT);
cols++;
if (A[idx]['gm'])
writeln(E_PRINT_HTML_GPREIS + Xbj(Xbf(A[idx]['gm'],A[idx]['n']))+ "<BR>"+ E_PRINT_HTML_PREIS);
write( Xbj(Xbf(A[idx]['m'],A[idx]['n'])));
writeln("</FONT></TD>");
if (A[idx]['k']) {
writeln("<TD width=15%>"+ FONT);
cols++;
write(E_PRINT_HTML_PREISA +" &nbsp;<INPUT type=text name='k"+ idx +"' size=8 maxlength=20 onChange='parent.Xca(\""+ idx +"\");'>");
writeln("</FONT></TD>");
}
writeln("</TR>");
if (A[idx]['B']) {
feat = A[idx]['B'];
if (feat.length > 0){
writeln("<TR><TD colspan='"+ cols +"'>");
writeln("<TABLE><TR>");
Xgz(idx, feat);
writeln("</TR></TABLE>");
writeln("</TD></TR>");
}
}
writeln("</TABLE>");
}
}
function Xds(idx){
var cols = 0;
with (r.document){
writeln("<TABLE "+ TBG_P +" width='"+ T_W +"' border='"+ TB_P +"' cellpadding='"+ TP_P +"'>");
writeln("<TR>");
if (A[idx]['image']) {
writeln("<TD width=30% rowspan=3 align=middle>");
cols += 1;
if (A[idx]['url'])
writeln("<A HREF='"+ unescape(A[idx]['url']) +"'>");
write("<IMG src='"+ unescape(A[idx]['image']) +"' width=150 align=textop border=0>");
if (A[idx]['url'])
writeln("</A>");
writeln("</TD>");
writeln("<TD width=10% height=10%>"+ FONT);
}
else
writeln("<TD width=5% rowspan=3>"+ FONT);
cols += 1;
Xha(idx);
writeln("</FONT></TD>");
if (A[idx]['j']) {
writeln("<TD width=10%>"+ FONT);
cols += 1;
writeln(E_PRINT_HTML_MENGE +" &nbsp;<INPUT name='j"+ idx +"' type=text size=4 maxlength=5 onChange='parent.Xcd(this,"+ idx +" );' ");
if (I[idx])
writeln("value='"+ D[idx]['j'] +"'>");
else
writeln(">");
writeln("</FONT></TD>");
}
writeln("<TD width=15%>"+ FONT);
cols += 1;
writeln("<B>"+ unescape(A[idx]['name']) +"</B>");
writeln("</FONT></TD>");
writeln("<TD width=15% align=right>"+ FONT);
if (A[idx]['gm'])
writeln(E_PRINT_HTML_GPREIS + Xbj(Xbf(A[idx]['gm'],A[idx]['n']))+ "<BR>"+ E_PRINT_HTML_PREIS);
write( Xbj(Xbf(A[idx]['m'],A[idx]['n'])));
writeln("</FONT></TD>");
if (A[idx]['k']) {
writeln("<TD width=10%>"+ FONT);
cols += 1;
write(E_PRINT_HTML_PREISA +" &nbsp;<INPUT type=text name='k"+ idx +"' size=8 maxlength=20 onChange='parent.Xca(\""+ idx +"\");'>");
writeln("</FONT></TD>");
}
writeln("</TR>");
if (A[idx]['l']){
writeln("<TR><TD colspan="+ cols +" >");
writeln(FONT + unescape(A[idx]['l']));
writeln("&nbsp;</FONT></TD>");
writeln("</TR>");
}
if (A[idx]['o']){
writeln("<TR><TD width=90% colspan="+ cols +" >");
if (A[idx]['o'])
writeln(FONT + unescape(A[idx]['o']));
else
writeln("&nbsp;");
writeln("</FONT></TD>");
writeln("</TR>");
}
if (A[idx]['B']) {
feat = A[idx]['B'];
if (feat.length > 0){
cols++;
writeln("<TR><TD colspan='"+ cols +"'>");
writeln("<TABLE><TR>");
Xgz(idx, feat);
writeln("</TR></TABLE>");
writeln("</TD></TR>");
}
}
writeln("</TABLE><P>");
}
}
function Xdt(idx){
var cols = 0;
var brtmp = "<BR>";
var brtmp2 = "&nbsp;";
with (r.document){
writeln("<TABLE "+ TBG_P +" width='"+ T_W +"' border='"+ TB_P +"' cellpadding='"+ TP_P +"'>");
writeln("<TR>");
if (A[idx]['image']) {
brtmp = "<P>";
brtmp2 = "<BR>";
writeln("<TD rowspan=6 align=middle>");
if (A[idx]['url'])
writeln("<A HREF='"+ unescape(A[idx]['url']) +"'>");
write("<IMG src='"+ unescape(A[idx]['image']) +"' width='"+ parseInt(T_W * .7) +"' align=textop border=0>");
if (A[idx]['url'])
writeln("</A>");
writeln("</TD>");
}
writeln("<TD colspan=2>"+ FONT +"<B>");
if (A[idx]['url'])
writeln("<A HREF='"+ unescape(A[idx]['url']) +"'>");
write(unescape(A[idx]['name']) );
if (A[idx]['url'])
writeln("</A>");
writeln("</B></FONT></TD>");
writeln("</TR>");
if (A[idx]['l']) {
writeln("<TR><TD colspan=2 >");
writeln(FONT + unescape(A[idx]['l']));
writeln("&nbsp;</FONT></TD>");
writeln("</TR>");
}
if (A[idx]['o']){
writeln("<TR><TD colspan=2 >");
if (A[idx]['o'])
writeln(FONT + unescape(A[idx]['o']));
else
writeln("&nbsp;");
writeln("</FONT></TD>");
writeln("</TR>");
}
writeln("<TR><TD>"+ FONT);
Xha(idx);
writeln("</FONT></TD>");
writeln("<TD align=right>"+ FONT);
if (A[idx]['gm'])
writeln(E_PRINT_HTML_GPREIS +brtmp2+ Xbj(Xbf(A[idx]['gm'],A[idx]['n']))+ brtmp + E_PRINT_HTML_PREIS +brtmp2);
write( Xbj(Xbf(A[idx]['m'],A[idx]['n'])));
writeln("</FONT></TD>");
writeln("</TR>");
if (A[idx]['j']) {
if (A[idx]['k']){
writeln("<TR><TD>");
}
else {
writeln("<TR><TD colspan=2>");
}
writeln(FONT + E_PRINT_HTML_MENGE +"<BR><INPUT name='j"+ idx +"' type=text size=4 maxlength=5 onChange='parent.Xcd(this,"+ idx +" );' ");
if (I[idx])
writeln("value='"+ D[idx]['j'] +"'>");
else
writeln("></TD>");
}
if (A[idx]['k']) {
if (A[idx]['j'])
writeln("<TD>");
else
writeln("<TR><TD colspan=2>");
write(FONT + E_PRINT_HTML_PREISA +"<BR><INPUT type=text name='k"+ idx +"' size=8 maxlength=20 onChange='parent.Xca(\""+ idx +"\");'>");
writeln("</FONT></TD>");
}
writeln("</TR>");
if (A[idx]['B']) {
feat = A[idx]['B'];
if (feat.length > 0){
cols++;
writeln("<TR><TD colspan='"+ cols +"'>");
writeln("<TABLE><TR>");
Xgz(idx, feat);
writeln("</TR></TABLE>");
writeln("</TD></TR>");
}
}
writeln("</TABLE><P>");
}
}
function E_al() {
if (confirm(E_LEAVE_CONFIRM))
document.location.replace(LAST_HREF);
}
function Xdv() {
with (r.document){
for (i in kunde) {
s_idx = i.substring(3,4);
if (Q['W'][s_idx]){
if (Q['W'][s_idx]['validation'] == 'url') {
writeln("<TR><TD>"+ FONT_CS);
writeln("<INPUT type=hidden name='"+ unescape(Q['W'][s_idx]['name']) +"' value='"+ unescape(kunde[i]) +"'>");
write( unescape(Q['W'][s_idx]['name']) +"</FONT></TD><TD>"+ FONT_CS);
writeln("<A HREF='http://"+ unescape(kunde[i]) +"' target='_new'>"+ unescape(kunde[i]) +"</A></FONT></TD></TR>");
}
else if (Q['W'][s_idx]['validation'] == 'ad') {
writeln("<TR><TD>"+ FONT_CS);
writeln("<INPUT type=hidden name='"+ unescape(Q['W'][s_idx]['name']) +"' value='"+ unescape(kunde[i]) +"'>");
write( unescape(Q['W'][s_idx]['name']) +"</FONT></TD><TD>"+ FONT_CS);
writeln("<A HREF='mailto:"+ unescape(kunde[i]) +"'>"+ unescape(kunde[i]) +"</A></TD></TR>");
}
else {
writeln("<TR><TD>"+ FONT_CS);
writeln("<INPUT type=hidden name='"+ unescape(Q['W'][s_idx]['name']) +"' value='"+ unescape(kunde[i]) +"'>");
writeln( unescape(Q['W'][s_idx]['name']) +"</FONT></TD><TD>"+ FONT_CS);
writeln( unescape(kunde[i]) +"</FONT></TD></TR>");
}
}
}
if (PAYMENT){
if (Q['x'][e_x]['msg']){
writeln("<TR><TD colspan=2>"+ FONT_CS);
writeln(unescape(Q['x'][e_x]['msg']) +"</TD></TR>");
}
strpay_tmp = unescape(Q['x'][e_x]['name']);
writeln("<INPUT type=hidden name='Pay: "+ strpay_tmp +"'>");
for (pm in paym){
p_idx = pm.substring(3,4);
writeln("<TR><TD>"+ FONT_CS);
writeln("<INPUT type=hidden name='Pay: "+ unescape(Q['x'][e_x][p_idx]) +"' value='"+ unescape(paym[pm]) +"'>");
writeln( strpay_tmp +": &nbsp;"+ unescape(Q['x'][e_x][p_idx]) +"</FONT></TD><TD>"+ FONT_CS);
writeln(unescape(paym[pm]) +"</FONT></TD></TR>");
}
}
}
}
function print_f() {
var vtmp = 0;
var utmp = 0;
var xtmp = 0;
var ntmp_sum = 0;
var netto_sum = 0;
var price = Xbe();
with (r.document) {
writeln("<TR "+ TBG_BN +"><TD colspan=2 align=middle>"+ FONT_CS +"<FONT size=+1>"+ E_PRINT_SUMMEN_HEAD);
writeln("<INPUT type=hidden name='----' value='---------------------------------'>");
writeln("</FONT></FONT></TD></TR>");
if (PAYMENT){
if (price < parseInt(Q['x'][e_x]['y'])) {
xtmp = parseInt(Q['x'][e_x]['value']);
price += xtmp;
}
n[Q['un']] += xtmp;
ntmp_sum += xtmp;
ptp = Xbj(xtmp);
writeln("<TR "+ TBG_BN +"><TD>"+ FONT_CS);
writeln("<INPUT type=hidden name='Name_Zahlungs' value='"+ unescape(Q['x'][e_x]['name']) +"'>");
writeln("<INPUT type=hidden name='Zuschlag_Zahlung' value='"+ ptp +"'>");
writeln("+ Zahlungsweise "+ unescape(Q['x'][e_x]['name']) +"</FONT></TD><TD align=right>");
writeln(FONT_CS);
writeln(ptp +"</FONT></TD></TR>");
}
if (AREAS){
if (price < parseInt(Q['v'][e_v]['y'])){
vtmp = parseInt(Q['v'][e_v]['value']);
price += vtmp;
}
n[Q['un']] += vtmp;
ntmp_sum += vtmp;
atp = Xbj(vtmp);
writeln("<TR "+ TBG_BN +"><TD>"+ FONT_CS);
writeln("<INPUT type=hidden name='Name_Gebiet' value='"+ unescape(Q['v'][e_v]['name']) +"'>");
writeln("<INPUT type=hidden name='Zuschlag_Gebiet' value='"+ atp +"'>");
writeln("+ Lieferung nach "+ unescape(Q['v'][e_v]['name']) +"</FONT></TD><TD align=right>");
writeln(FONT_CS);
writeln(atp +"</FONT></TD></TR>");
}
if (FREIGHT){
if (price < parseInt(Q['u'][e_u]['y'])){
utmp = parseInt(Q['u'][e_u]['value']);
price += utmp;
}
n[Q['un']] += utmp;
ntmp_sum += utmp;
ftp = Xbj(utmp);
writeln("<TR "+ TBG_BN +"><TD>"+ FONT_CS);
writeln("<INPUT type=hidden name='Name_Fracht' value='"+ unescape(Q['u'][e_u]['name']) +"'>");
writeln("<INPUT type=hidden name='Zuschlag_Fracht' value='"+ ftp +"'>");
writeln("+ Lieferung durch "+ unescape(Q['u'][e_u]['name']) +"</FONT></TD><TD align=right>");
writeln(FONT_CS);
writeln(ftp +"</FONT></TD></TR>");
}
if (nshow == 'netto' || Q['nbase'] == 'netto') {
if (n_liefer){
mtp = Xbj(Xbg(ntmp_sum,Q['un']));
writeln("<TR "+ TBG_BR +"><TD>"+ FONT_CS);
writeln("<INPUT type=hidden name='Zuschlag_MwSt' value='"+ mtp +"'>");
writeln(E_TAX_S + unescape(Q['n'][Q['un']]) +" % </FONT></TD><TD align=right>");
writeln(FONT_CS);
writeln(mtp +"</FONT></TD></TR>");
}
if (Q['nbase'] == 'brutto'){
for (m_ix in Q['n']){
netto_sum += Xbg(n[m_ix],m_ix);
}
netto_sum = price - netto_sum;
}
else
netto_sum = price;
netto_s = Xbj(netto_sum);
writeln("<TR "+ TBG_BR +"><TD>"+ FONT_CS);
writeln("<INPUT type=hidden name='Gesamt_Netto' value='"+ netto_s +"'>");
writeln("<FONT size=+1>Gesamt Netto Preis</FONT></FONT></TD><TD align=right>");
writeln(FONT_CS);
writeln(netto_s +"</FONT></TD></TR>");
}
if (n_liefer) {
for (m_idx in Q['n']){
ntmp = Xbg(n[m_idx],m_idx);
if (Q['nbase'] == 'netto')
price += ntmp;
n_s = Xbj(ntmp);
if (nshow == 'netto' || Q['nbase'] == 'netto') {
writeln("<TR "+ TBG_BR +"><TD>"+ FONT_CS);
writeln("<INPUT type=hidden name='MwSt_"+ Q['n'][m_idx] +"' value='"+ n_s +"'>");
writeln(E_TAX_S + Q['n'][m_idx] +" % </FONT></TD><TD align=right>");
writeln(FONT_CS);
writeln( n_s +"</FONT></TD></TR>");
}
}
price_s = Xbj(price);
writeln("<TR "+ TBG_BN +"><TD>"+ FONT_CS);
writeln("<INPUT type=hidden name='Gesamt_Brutto' value='"+ price_s +"'>");
writeln("<FONT size=+1>Gesamt Brutto Preis</FONT></FONT></TD><TD align=right>");
writeln(FONT_CS);
writeln( price_s +"</FONT></TD></TR>");
}
if (PAYMENT){
if (Q['x'][e_x]['eva']){
if (Q['x'][e_x]['eva'].length)
eval(unescape(Q['x'][e_x]['eva']));
}
}
if (has_price == 0) {
writeln("<TR><TD colspan=2>"+ FONT_CS);
writeln(E_PRINT_SUMMEN +"</FONT></TD></TR>");
}
}// end with
}
function Xdy(art_hash){
var art = '';
for (p in C){
art = C[p]['A'];
if (art.length != 0){
while ((i = art.substring(0,art.indexOf(','))) != '') {
if (art_hash == i){
Xcv(p);
return;
}
art = art.substring(art.indexOf(',') + 1, art.length);
}
}
}
}
function Xdz()
{
var pcount = 1;
n = new Array();
var mid;
for ( mid in Q['n']){ n[mid] = 0;}
with (r.document){
writeln("<TR "+ TBG_BN +"><TH colspan=2>"+ FONT_CS +"<FONT size=+1><CENTER>"+ E_PRINT_PROD_ORDER +"</CENTER></FONT></FONT></TR>");
for (Z in I){
if (I[Z] && A[Z] != null) {
writeln("<INPUT type=hidden name='---------------' value='Position Nr."+ pcount++ +"'>");
writeln("<TR "+ TBG_BN +"><TD width=70%>");
writeln(FONT_CS +"<FONT size=+1>");
if (A[Z]['name']) {
writeln("<INPUT type=hidden name='Name' value='"+ unescape(A[Z]['name']) +"'>");
if (A[Z]['url']) {
writeln("<A HREF='"+ unescape(A[Z]['url']) +"'>");
writeln( unescape(A[Z]['name']) +"</A>");
}
else {
writeln( unescape(A[Z]['name']));
}
}
else {
writeln("<INPUT type=hidden name='Name' value='Unbenannt'>");
writeln("Unbennant");
}
writeln("</FONT></FONT></TD><TD>"+ FONT_CS);
if (D[Z]['C'] == 'an')
writeln("<A HREF='javascript:parent.Xdy("+ Z +");'>");
else
writeln("<A HREF='javascript:parent.Xcv("+ D[Z]['C'] +");'>");
writeln(E_PRINT_PROD_GOART +"</A>&nbsp;&nbsp;&nbsp;");
writeln("<A HREF='javascript:parent.Xbs("+ Z +");'>");
writeln(B_DEL +"</A>");
writeln("</FONT></TD></TR>");
if (Q['com'] == 'on'){
writeln("<TR><TD colspan=2>"+ FONT_CS);
writeln(E_PRINT_PROD_COM +"&nbsp;&nbsp;&nbsp;<INPUT type=text name='com"+ Z +"' size=50 ");
if (D[Z]['com'])
writeln("value='"+ unescape(D[Z]['com']) +"' ");
writeln(" onChange='parent.Xbv("+ Z +",this.value);'>");
writeln("</FONT></TD></TR>");
}
if (A[Z]['gm']) {
gpt = Xbj(A[Z]['gm']);
writeln("<TR><TD>"+ FONT_CS);
writeln("<INPUT type=hidden name='"+ E_PRINT_PROD_GPREIS +"' value='"+ gpt +"'>");
writeln(E_PRINT_PROD_GPREIS +"</FONT></TD><TD align=right>");
writeln(FONT_CS);
writeln( gpt +"</FONT></TD></TR>");
}
pda_tmp = 0;
if (A[Z]['download']){
writeln("<INPUT type=hidden name=download value='"+ A[Z]['download'] +"'>");
}
pf = '';
has_feature = false;
if (A[Z]['p_feature'])
if (A[Z]['p_feature'] >= 0){
pf = A[Z]['p_feature'];
for (di in D[Z]){
if (!D[Z][di] || di == 'j' || di == 'com' || di == 'C') continue;
fix = di.substring(0,di.indexOf('-',0));
if (fix != pf) continue;
pos1 = di.indexOf('-',0);
ha = di.substring(di.indexOf('-',pos1)+1, di.length);
f_ar = Xhk(Z, fix);
if (f_ar[ha]){
has_feature = true;
pda_tmp = parseInt(f_ar[ha]);
writeln("<TR><TD>"+ FONT_CS);
writeln("<INPUT type=hidden name='"+ E_PRINT_PROD_FPREIS +" "+ unescape(f_ar['name']) +" "+ unescape(D[Z][di]) +"' value='"+ Xbj(f_ar[ha]) +"'>");
writeln(E_PRINT_PROD_FPREIS +" "+ unescape(f_ar['name']) +" "+ unescape(D[Z][di]) +"</FONT></TD><TD align=right>");
writeln(FONT_CS);
writeln( Xbj(f_ar[ha]) +"</FONT></TD></TR>");
}
else {
writeln("<TR><TD>"+ FONT_CS);
writeln("<INPUT type=hidden name='"+ unescape(f_ar['name']) +"' value='"+ unescape(ha) +"'>");
writeln( unescape(f_ar['name']) +" "+ unescape(D[Z][di]) +"</FONT></TD><TD>");
writeln(FONT_CS);
writeln("&nbsp;</FONT></TD></TR>");
}
}
}
if (A[Z]['m'] && !has_feature) {
pda_tmp = parseInt(A[Z]['m']);
pt = Xbj(A[Z]['m']);
writeln("<TR><TD>"+ FONT_CS );
writeln("<INPUT type=hidden name='"+ E_PRINT_PROD_SPREIS +"' value='"+ pt +"'>");
writeln(E_PRINT_PROD_SPREIS +"</FONT></TD><TD align=right>");
writeln(FONT_CS);
writeln( pt +"</FONT></TD></TR>");
}
has_feature = false;
for (di in D[Z]){
if (!D[Z][di] || di == 'j' || di == 'com' || di == 'C') continue;
fix = di.substring(0,di.indexOf('-',0));
if (fix == pf) continue;
pos1 = di.indexOf('-',0);
ha = di.substring(di.indexOf('-',pos1)+1, di.length);
f_ar = Xhk(Z, fix);
if (f_ar[ha]){
pda_tmp += parseInt(f_ar[ha]);
fpr = " "+ Xbj(f_ar[ha]);
fpt = E_PRINT_PROD_ADD ;
}
else {
fpr = '&nbsp;';
fpt = "&nbsp;&nbsp;";
}
if (D[Z][di] == ha)
str = unescape(ha);
else
str = unescape(ha) +" "+ unescape(D[Z][di]);
writeln("<TR><TD>"+ FONT_CS);
write("<INPUT type=hidden name='"+ unescape(f_ar['name']) +" "+ str +"' ");
writeln("value='"+ fpr +"'>");
writeln(fpt + unescape(f_ar['name']) +" "+ str +"</FONT></TD><TD align=right>");
writeln(FONT_CS);
writeln(fpr +"</FONT></TD></TR>");
has_feature = true;
}
if (has_feature && pda_tmp > 0) {
writeln("<TR><TD>"+ FONT_CS);
writeln("<INPUT type=hidden name='"+ E_PRINT_PROD_SPREIS +"' value='"+ Xbj(pda_tmp) +"'>");
writeln(E_PRINT_PROD_SPREIS +" incl. Features</FONT></TD><TD align=right>");
writeln(FONT_CS);
writeln( Xbj(pda_tmp) +"</FONT></TD></TR>");
}
if (D[Z]['j'] > 1){
writeln("<TR><TD>"+ FONT_CS);
writeln("<INPUT type=hidden name='"+ E_PRINT_PROD_AMOUNT +"' value='"+ unescape(D[Z]['j']) +"'>");
writeln(E_PRINT_PROD_AMOUNT +"</FONT></TD><TD>");
writeln(FONT_CS);
writeln( unescape(D[Z]['j']) +"</FONT></TD></TR>");
}
else {
writeln("<INPUT type=hidden name='"+ E_PRINT_PROD_AMOUNT +"' value='1'>");
}
ppa_tmp = Xby(Z);
if (D[Z]['j'] > 1 || A[Z]['gm']) {
priceprodtmp = Xbj(ppa_tmp);
writeln("<TR><TD>"+ FONT_CS );
writeln("<INPUT type=hidden name='"+ E_PRINT_PROD_PREIS +"' value='"+ priceprodtmp +"'>");
writeln(E_PRINT_PROD_PREIS +"</FONT></TD><TD align=right>");
writeln( FONT_CS );
writeln( priceprodtmp +"</FONT></TD></TR>");
}
n[A[Z]['n']] += ppa_tmp;
if (n_liefer){
if (nshow == 'netto' || Q['nbase'] == 'netto') {
n_tmp = Xbg(ppa_tmp,A[Z]['n']);
writeln("<TR "+ TBG_BR +"><TD>"+ FONT_CS);
writeln("<INPUT type=hidden name='MwSt_"+ Q['n'][A[Z]['n']] +"' value='"+ Xbj(n_tmp) +"'>");
writeln( E_TAX_S + Q['n'][A[Z]['n']] +"%</FONT></TD><TD align=right>");
writeln(FONT_CS);
writeln( Xbj(n_tmp) +"</FONT></TD></TR>");
}
}
if (A[Z]['image'] && !MOZZ3 && e_C_state == 'basket') {
writeln("<TR><TD>"+ FONT_CS);
writeln("<INPUT type=hidden name='Image' value='"+ unescape(A[Z]['image']) +"'>");
writeln (E_PRINT_PROD_IMAGE +"</FONT></TD><TD>");
if (A[Z]['url']) {
writeln("<INPUT type=hidden name='URL' value='"+ A[Z]['url'] +"'>");
writeln("<A HREF='"+ unescape(A[Z]['url']) +"'>");
writeln("<IMG src='"+ unescape(A[Z]['image']) +"' border=0 width=150></A>");
}
else
writeln("<IMG src='"+ unescape(A[Z]['image']) +"' width=150>");
writeln("</TD></TR>");
}
else if (A[Z]['image']) {
writeln("<INPUT type=hidden name='Image' value='"+ unescape(A[Z]['image']) +"'>");
}
}
}
}
print_f();
}
function Xea() {
Xcq();
LEFT = false;
Xcv('aq');
}
