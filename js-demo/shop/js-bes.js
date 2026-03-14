function Xbd(){
I = new Array();
D = new Array();
attrib = new Array();
kunde = new Array();
paym = new Array();
has_price = 1;
heute = new Date();
SELECTED_CURRENCY = 'base';
name_des_cookies = "js-webshow-W";
Xcg();
}
function Xbe() {
var NETTO = 0;
for (i in I) {
if (I[i])
NETTO += Xby(i);
}
return NETTO;
}
function Xbf(amount, mix){
if (nshow == 'brutto' && Q['nbase'] == 'netto')
return ((parseFloat(amount * Q['n'][mix]) / 100) + parseFloat(amount));
else if (nshow == 'netto' && Q['nbase'] == 'brutto')
return ((amount / (100 + parseInt(Q['n'][mix]))) * 100 );
else return amount;
}
function Xbg(amount, mix){
if (Q['nbase'] == 'netto')
return ((amount * Q['n'][mix]) / 100);
else (Q['nbase'] == 'brutto')
return ((amount / (100 + parseInt(Q['n'][mix]))) * parseInt(Q['n'][mix]));
}
function B_set_R(input_obj) {
if (!PAYCHANGE){
alert(B_SET_CURRENCY_A + E_NAME_DATA);
LEFT = false;
Xcv('refresh');
}
else{
SELECTED_CURRENCY = input_obj.options[input_obj.selectedIndex].value;
Xct();
Xcv('refresh');
}
}
function Xbi(input_obj) {
ind = input_obj.options[input_obj.selectedIndex].value;
if (ind == 'netto'){
if (confirm(BA_NETTO)){
nshow = ind;
Xcv('refresh');
}
else {
LEFT = false;
Xcv('refresh');
}
}
else {
nshow = ind;
Xcv('refresh');
}
}
function Xbj(zahl)
{
if (SELECTED_CURRENCY == 'base') {
return (Xbl(zahl) + "&nbsp;" + CURR);
}
else
return (Xbl(Xbk(zahl)) + "&nbsp;" + SELECTED_CURRENCY);
}
function Xbk(zahl){
zw = 0;
if (SELECTED_CURRENCY == 'base'){
zw = zahl;
}
else if (EURO_TO_EURO == 'true') {
zw = zahl * Q['T'][SELECTED_CURRENCY]['euro'] / Q['T'][CURR]['euro'];
}
else if (EURO_TO == 'true') {
if (Xbm(CURR)) zw = zahl * Q['T'][SELECTED_CURRENCY]['euro'] / Q['T'][CURR]['euro'];
else zw = zahl * Q['T'][SELECTED_CURRENCY]['euro'] / Q['R'][CURR];
}
else if (TO_EURO == 'true') {
zw = zahl * Q['R'][SELECTED_CURRENCY] / Q['T'][CURR]['euro'];
}
else if (NO_EURO == 'true') {
if (SELECTED_CURRENCY == CURR) zw = zahl;
else zw = zahl * Q['R'][SELECTED_CURRENCY];
}
return zw;
}
function Xbl(zahl)
{
var z, nk = vk = rzahl = 0;
zahl = parseFloat(zahl);
if (isNaN(zahl) || zahl == 0)
return "0,00";
z = zahl / 100;
nk = z % 1;
vk = z - nk;
nk = Math.round(nk * 100);
if (nk < 10)
rzahl = "0" + nk;
else rzahl = nk;
if (rzahl == 100){
vk++;
rzahl = '00';
}
res = vk + "," + rzahl;
return(res);
}
function Xbm(idx)
{
var eu = 'false';
for (i in Q['T'])
if (idx == i) {
eu = 'true';
break;
}
return eu;
}
function Xbn(fi,ci){
var ct = 0, my_anz = 0, zw = 0;
var mt1 = '', mt2 = '', ret = '';
if (EUROLAND == 'true') {
if (fi == 'T')
zw = Q[fi][ci]['euro'];
else
zw = Q[fi][ci];
if (CURR == 'EUR'){
ret = "> 1 "+ CURR +" = "+ Xbl(zw * 100) +" "+ ci;
}
else {
mt1 = ''+ parseInt(zw);
mt2 = ''+ parseInt(Q['T'][CURR]['euro']);
if (mt1.length < mt2.length)
my_anz = 1;
else
my_anz = Math.pow(10,(mt1.length - mt2.length));
ct = my_anz / zw * parseFloat(Q['T'][CURR]['euro']) * 100;
ret = ">"+ Xbl(ct)+" "+ CURR +" = "+ my_anz +" "+ ci;
}
}
else {
mt1 = ''+ parseInt(Q['R'][ci]);
my_anz = Math.pow(10,mt1.length - 1);
ct = my_anz / parseFloat(Q['R'][ci]) * 100;
ret = ">"+ Xbl(ct) +" "+ CURR +" = "+ my_anz +" "+ k;
}
return ret;
}
function Xbo() {
r.bestellung.nname.focus();
r.bestellung.nname.select();
return;
}
function Xbp(feld) {
feld.focus();
feld.select();
}
function Xbq(i_obj) {
if (i_obj.value.length)
paym[i_obj.name] = i_obj.value;
}
function B_enter_W( input_obj, art)
{
var durchgang = 1;
eingabe = false;
ende = false;
var input = input_obj.value;
zahlwert = parseInt(input,10);
len = input_obj.value.length;
while (durchgang <= 2){
if (durchgang == 1){
while (!ende) {
if (!len){
alert(B_VALIDIERUNG_NO_ZEICHEN);
break;
}
if (len < 2 || input == " "){
alert(B_VALIDIERUNG_2_ZEICHEN);
break;
}
if (art == "tel"){
if (!zahlwert){
alert(B_VALIDIERUNG_ZAHL);
break;
}
if ((4 <= input.indexOf('/', 0) <= 6)||(4 <= input.indexOf('-', 0) <= 6)){
if (len < 10){
alert(B_VALIDIERUNG_VORWAHL);
break;
}
}
}
if (art == "plz"){
if (zahlwert <= 1000 || zahlwert > 99999 || isNaN(zahlwert)){
alert(B_VALIDIERUNG_PLZ);
break;
}
}
if (art == "ad"){
if (len < 8){
alert(B_VALIDIERUNG_8_ZEICHEN);
break;
}
if (input.indexOf('@', 0) < 2){
alert(B_VALIDIERUNG_AT);
break;
}
if (input.indexOf('.', 0) < 1){
alert(B_VALIDIERUNG_POINT);
break;
}
}
if (art == "url"){
if (input != 'http://'){
if (len < 11 ){
alert(B_VALIDIERUNG_URL);
break;
}
var pt = input.indexOf('.', 0);
if (pt == '-1') {
alert(B_VALIDIERUNG_P_URL);
break;
}
}
}
eingabe = true;
ende = true;
}
}
else eingabe = true;
if (eingabe == true){
kunde[input_obj.name] = input_obj.value;
break;
}
else Xbp(input_obj);
durchgang++;
}
}
function Xbs(Z){
I[Z] = false;
Xcv('refresh');
}
function Xbt(Z)
{
if (!I[Z])
Xbu(Z);
else
Xbz(Z);
}
function Xbu(Z)
{
var merkmal = "";
var tmp = 0;
I[Z] = true;
D[Z] = new Array();
D[Z]['C'] = e_C_state;
if (A[Z]['j'] && eval("r.document.right.j"+ Z)){
eval("tmp = r.document.right.j"+ Z +".value");
if (tmp.length)
D[Z]['j'] = tmp;
else
D[Z]['j'] = 1;
}
else
D[Z]['j'] = 1;
if (A[Z]['B']) {
feat = A[Z]['B'];
if (feat.length > 0){
Xhj(Z, feat);
}
}
Xca(Z);
}
function Xbv(Z, txt){
D[Z]['com'] = escape(txt);
}
function Xhj (Z, feat) {
var missing = '';
var test = new Array();
var elem = '';
feat = feat.substring(0,feat.length-1);
fe = feat.split(',');
for (i in fe){
if (Q['B'][fe[i]]['required'] == 'y')
test[Q['B'][fe[i]]['name']] = true;
tp = Q['B'][fe[i]]['ftype'];
if (tp == 'checkbox' || tp == 'text'){
f_ar = Xhk(Z, fe[i]);
for (ha in f_ar){
if (ha == 'price' || ha == 'name') continue;
elem = Z +"-"+ fe[i] +"-"+ ha;
if (r.document.right.elements[elem])
Xhi(r.document.right.elements[elem], Z);
}
}
else if (tp == 'radio'){
alert("In arbeit ...");
}
else {
elem = "el"+ Z+"-"+ fe[i];
if (r.document.right.elements[elem])
Xhi(r.document.right.elements[elem], Z);
}
}
for (i in D[Z]){
if (!D[Z][i] || i == 'j' || i == 'com' || i == 'C') continue;
pos1 = i.indexOf('-',0);
fix = i.substring(pos1,i.indexOf('-',pos1 + 1));
if (test[Q['B'][fix]['name']])
test[Q['B'][fix]['name']] = false;
}
for (te in test){
if (test[te])
missing += unescape(te) + " ";
}
if (missing.length != 0)
alert(BA_CHECK_FEATURES + "\n"+ missing);
}
function Xbx(Z) {
var price = 0;
var pt = 0;
if (A[Z]['gm']) {
price_tmp = parseInt(A[Z]['gm']);
if (!isNaN(price_tmp))
price += price_tmp;
}
pt = parseInt(A[Z]['m']);
if (A[Z]['p_feature']){
pf = A[Z]['p_feature'];
if (pf >= 0){
f_ar = Xhk(Z, pf);
for (ha in f_ar){
if (ha == 'price' || ha == 'name') continue;
dix = pf +"-"+ ha;
if (D[Z][dix] && f_ar[ha]) {
pt = f_ar[ha];
}
}
}
}
if (D[Z]['j'])
price_tmp = D[Z]['j'] * pt;
else
price_tmp = pt;
if (!isNaN(price_tmp))
price += price_tmp;
return price;
}
function Xby (Z) {
var price = Xbx(Z);
if (A[Z]['p_feature']){
pf = A[Z]['p_feature'];
}
for (di in D[Z]){
if (!D[Z][di] || di == 'j' || di == 'com' || di == 'C') continue;
fix = di.substring(0,di.indexOf('-',0));
if (fix == pf) continue;
pos1 = di.indexOf('-',0);
ha = di.substring(di.indexOf('-',pos1)+1, di.length);
f_ar = Xhk(Z, fix);
if (f_ar[ha]){
if (D[Z]['j'])
price += D[Z]['j'] * f_ar[ha];
else
price += f_ar[ha];
}
}
return price;
}
function Xbz(Z)
{
I[Z] = false;
Xca(Z);
}
function Xca(Z) {
var tmp;
if (I[Z])
tmp = true;
else
tmp = false;
if (A[Z]['typ'] == 'img'){
if (tmp)
eval("r.document.img"+ Z +".src = '"+ B_B_IMG +"'");
else
eval("r.document.img"+ Z +".src = '"+ B_IMG +"'");
}
else if (A[Z]['typ'] == 'checkbox')
eval("r.document.right.check"+ Z +".checked = tmp");
if (D[Z]['j'] && eval("r.document.right.j"+ Z) && tmp)
eval("r.document.right.j"+ Z +".value = D["+ Z +"]['j']");
Xce();
return;
}
function Xcb (input_obj, feature_hash, Z, name_radio) {
input_obj.name = name_radio;
Xhi (input_obj, feature_hash, Z);
}
function Xhi (iob, aix) {
var dix = '';
if (!I[aix]) {
return;
}
if (iob.type == 'checkbox'){
dix = iob.name.substring(iob.name.indexOf('-',0)+1, iob.name.length);
if (iob.checked)
D[aix][dix] = dix.substring(dix.indexOf('-',0)+1, dix.length);
else
D[aix][dix] = false;
}
else if (iob.type == 'select-one' || iob.type == 'select-multiple' ){
if (iob.type == 'select-one') st = 1;
else st = 0;
for (oi = st; oi < iob.length; oi++){
val = iob.options[oi].value;
if (iob.options[oi].selected)
D[aix][val] = val.substring(val.indexOf('-',0)+1, val.length);
else
D[aix][val] = false;
}
}
else if (iob.type == 'text'){
dix = iob.name.substring(iob.name.indexOf('-',0)+1, iob.name.length);
if (iob.value.length > 0)
D[aix][dix] = escape(iob.value);
else
D[aix][dix] = false;
}
else if (iob.type == 'radio'){
alert("In Arbeit ... ");
}
else
alert("Unknown Type of Input!\nType: "+ iob.type);
Xce();
}
function Xcd (input_obj, Z) {
if (input_obj.value.length == 0)
input_obj.value = 0;
if (isNaN(input_obj.value))
return;
if (!I[Z])
Xbu(Z);
if (I[Z]) {
D[Z]['j'] = parseInt(input_obj.value);
if (D[Z]['j'] == 0)
Xbz(Z);
}
Xce();
}
function Xce(){
if (e_C_state != 'an') {
if (isNaN(e_C_state))
return;
}
var seite_summe = 0;
var alles_summe = 0;
var temp = 0;
for (i in I) {
temp = 0;
if (I[i]) {
temp = Math.round(Xbf(Xby(i),A[i]['n']));
alles_summe += temp;
if (A[i]['k'] && eval("r.document.right.k"+ i ))
eval("r.document.right.k"+ i +".value = Xbl(Xbk(temp))");
if (D[i]['C'] == e_C_state)
seite_summe += temp;
}
else {
if (A[i]['k'] && eval("r.document.right.k"+ i))
eval("r.document.right.k"+ i +".value = ''");
}
}
if (e_C_state != 'an'){
if (C[e_C_state]['f'] &&
r.document.right.summe_1 &&
r.document.right.summe_2 ){
r.document.right.summe_1.value = Xbl(Xbk(seite_summe));
r.document.right.summe_2.value = Xbl(Xbk(alles_summe));
}
}
}
function XbsOrder(i_ob){
var cn = '';
if (i_ob.name && i_ob)
cn = i_ob.name;
var expire_date = new Date();
Xci(cn,'',expire_date,'/');
Xcv('refresh');
}
function Xid(i_ob){
var coo = new Array();
var cn = '';
var val = '';
if (i_ob.name && i_ob)
cn = i_ob.name;
coo = Xch();
if (!coo[cn]) return;
val = unescape(coo[cn]);
var tmp = new Array();
tmp = val.split("~~");
for (bi in tmp){
if (!tmp[bi]) continue;
Z = tmp[bi].substring(0,tmp[bi].indexOf("~"));
cont = tmp[bi].substring(tmp[bi].indexOf("~")+1,tmp[bi].length);
con = new Array();
con = cont.split("||");
con.length--;
if (!A[Z]){
alert(BA_GET_COOKIE_NO);
continue;
}
if (I[Z]){
if (!confirm(BA_GET_COOKIE_ASK +"\n"+ unescape(A[Z]['name']))) continue;
}
else {
I[Z] = true;
D[Z] = new Array();
}
for (ic in con){
hash = con[ic].substring(0,con[ic].indexOf("|"));
valu = con[ic].substring(con[ic].indexOf("|")+1,con[ic].length);
D[Z][hash] = valu;
}
}
Xcv('refresh');
}
function Xie(){
var now = new Date();
var c_val = '';
var c_name = '';
if (!(c_name = prompt(BA_STORE_ORDER_ASK,'')))
return;
var twelf_months = 12*30*24*60*60*1000;
var expire_date = new Date();
expire_date.setTime(now.getTime()+twelf_months);
for (Z in I){
if (!I[Z]) continue;
c_val_tmp = Z +"~";
for (di in D[Z])
if (D[Z][di]) {
c_val_tmp += di +"|"+ D[Z][di] +"||";
}
if ((c_name.length + c_val_tmp.length + c_val.length) > 4096){
alert(BA_STORE_ORDER_LONG +"\n"+ unescape(A[Z]['name']));
continue;
}
c_val += c_val_tmp;
c_val += "~~";
}
if (c_val.length)
Xci(c_name,c_val,expire_date,'/');
Xcv('refresh');
}
function Xcf()
{
var now = new Date();
var cookie_val = "";
var twelf_months = 12*30*24*60*60*1000;
var expire_date = new Date();
expire_date.setTime(now.getTime()+twelf_months);
if (FREIGHT){
if (e_u != 0)
cookie_val += "EF|" + e_u + "||";
}
if (AREAS){
if (e_v != 0)
cookie_val += "EA|" + e_v + "||";
}
for (i in kunde) {
cookie_val += i +"|" + kunde[i] + "||";
if (cookie_val.length >= 3800) {
alert(B_SPEICHERE_KUNDEN_MESS1);
break;
}
}
Xci(name_des_cookies,cookie_val,expire_date,"/");
var message = B_SPEICHERE_KUNDEN_MESS2;
message += B_SPEICHERE_KUNDEN_MESS3;
message += B_SPEICHERE_KUNDEN_MESS4;
alert(message);
}
function Xcg()
{
var coo = new Array();
coo = Xch();
if (!coo[unescape(name_des_cookies)]) return false;
var cookie_val = unescape(coo[name_des_cookies]);
if (cookie_val)
{
test_wert = true;
while(test_wert) {
trennpos1 = cookie_val.indexOf("|");
trennpos2 = cookie_val.indexOf("||");
if (trennpos2 > 0 && trennpos1 > 0) {
hash = ""+cookie_val.substring(0,trennpos1);
value = ""+cookie_val.substring(trennpos1 + 1, trennpos2);
if (hash == 'EF')
e_u = value;
else if (hash == 'EA')
e_v = value;
else
kunde[hash] = value;
cookie_val = cookie_val.substring(trennpos2 + 2, cookie_val.length);
}
else
test_wert = false;
}
return true;
}
else { return false; }
}
function Xch (namefield) {
var coo = new Array();
var tmp = new Array();
var len = document.cookie.length;
var val = document.cookie;
if (len) {
tmp = val.split(';');
for (ic in tmp){
coo[tmp[ic].substring(0,tmp[ic].indexOf("=",0))] = tmp[ic].substring(tmp[ic].indexOf("=",0)+1,tmp[ic].length);
}
}
return coo;
}
function Xci (namefield, value) {
var argv = Xci.arguments;
var argc = Xci.arguments.length;
var expires = (argc > 2) ? argv[2] : null;
var path = (argc > 3) ? argv[3] : null;
var domain = (argc > 4) ? argv[4] : null;
var secure = (argc > 5) ? argv[5] : false;
document.cookie = namefield + "=" + escape (value) +
((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
((path == null) ? "" : ("; path=" + path)) +
((domain == null) ? "" : ("; domain=" + domain)) +
((secure == true) ? "; secure" : "");
}
//---------------------------------------------------------------------------------
