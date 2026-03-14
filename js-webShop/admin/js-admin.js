//- -- Copyright 1998 pluto@iconnect.de --
//-
//- Coauthor kdoberstein@js-webShop.com
function B_lade_kunden() {
  ADMIN_TOP = "<body background='../gif/chip.jpg' bgcolor=#FFFFFF>";
  ADMIN_BOT = "";
  PAYCURR = "";
  VAL = "";
  rounds = 0;
  FONT_A_SMALL =
    "<FONT face='Arial,Helvetica,Swiss,sans-serif' size=-1 color=#CC0000>";
  FONT_A = "<FONT face='Arial,Helvetica,Swiss,sans-serif' color=#CC0000>";
  FONT_A_BIG =
    "<FONT face='Arial,Helvetica,Swiss,sans-serif' size=+1 color=#CC0000>";
  for (lang in s.language) {
    eval(lang + " = s.language[lang]");
  }
  if (
    !navigator.appName == "Netscape" &&
    parseFloat(navigator.appVersion) < 4.06
  ) {
    alert(
      "Bitte benutzen Sie zum Erstellen eines Shops Netscape 4.06 oder neuer!",
    );
    ADMIN = false;
    return;
  }
  if (MAC)
    alert(
      "Ein Mac!\mwst\mwst Leider kommt es auf ** manchen ** Mac's zu Problemen\nbeim abspeichern. Unter 8.5 war es besonders schwierig.\nBitte testen Sie erst das Abspeichern bevor Sie\nEinstellungen vornehmen!\mwst\mwst Danke.",
    );
  XebTr();
}
function e_print_features() {
  if (!system["version"]) system["version"] = "1.0.0";
  if (
    system["version"] == "1.0.0" ||
    system["version"] == "1.0.0beta1" ||
    system["version"] == "1.0.0beta4"
  ) {
    alert("Update auf 1.0.1");
    if (system["ai"]) system["action"] = system["ai"];
    if (system["aj"]) system["enctype"] = system["aj"];
    system["version"] = "1.0.1";
  }
  if (system["version"] == "1.0.1") {
    alert("Update auf 1.1b");
    if (system["ai"]) system["ai"] = "do_not_save";
    if (system["aj"]) system["aj"] = "do_not_save";
    if (!system["navgifs_basket"]) system["navgifs_basket"] = "";
    if (!system["navgif_basket"]) system["navgif_basket"] = "";
    system["version"] = "1.1b";
  }
  if (system["version"] == "1.1b") {
    alert("Update auf 1.1");
    system["version"] = "1.1";
  }
  if (system["version"] == "1.1" || system["version"] == "1.2b") {
    alert("Update auf 1.5b");
    ni = system.payment.length + 1;
    system["payment"][ni] = new Array();
    system["payment"][ni]["name"] = "Per%20ccard.net";
    system["payment"][ni]["value"] = "undefined";
    system["payment"][ni]["limit"] = "undefined";
    system["payment"][ni]["msg"] =
      "Nach%20dem%20Abschicken%20werden%20Sie%20nach%20Ihren%20Kreditkarten%20Informationen%20gefragt.%20Die%20&Uuml;bertragung%20erfolgt%20verschl%26uuml%3Bsselt%20%28SSL%29.";
    system["payment"][ni]["activ"] = "mwst";
    system["payment"][ni]["action"] =
      "https%3A//secure.ccard.net/js_demo/basket.cgi";
    system["payment"][ni]["enctype"] =
      "application/payment-www-form-urlencoded";
    system["payment"][ni]["zit"] = "hidden";
    system["payment"][ni]["zin"] = "job_nr";
    system["payment"][ni]["ziv"] = "js_001";
    system["payment"][ni]["eva"] =
      "writeln%28%22%3CINPUT%20type%3Dhidden%20value%3D1%20name%3DSumme%23%22+%20price%20+%22%3E%22%29";
    system["payment"][ni]["curr"] = "DEM";
    system["features"] = new Array();
    system["version"] = "1.5b";
  }
  if (
    system["version"] == "1.5b" ||
    system["version"] == "1.5c" ||
    system["version"] == "1.5"
  ) {
    alert("Update auf 1.5d");
    if (!system["s_on"]) system["s_on"] = "gif/status_on.gif";
    if (!system["s_off"]) system["s_off"] = "gif/status_off.gif";
    if (!admin["ind"]) admin["ind"] = "index.htm";
    system["version"] = "1.5d";
  }
  if (system["version"] == "1.5d") {
    alert("Update auf 1.6a");
    if (!system["cookie"]) system["cookie"] = "gif/cookie.gif";
    system["version"] = "1.6a";
  }
  if (system["version"] == "1.6a") {
    alert("Update auf 1.6");
    system["version"] = "1.6";
  }
}
function XebTr() {
  tr = new Array();
  tr["&iexcl;"] = new Array("�", "�", "�", "�");
  tr["&cent;"] = new Array("�", "�", "�", "�");
  tr["&pound;"] = new Array("�", "�", "�", "�");
  tr["&curren;"] = new Array("�", "�", "�", "�");
  tr["&yen;"] = new Array("�", "�", "�", "�");
  tr["&brvbar;"] = new Array("�", "�", "�", "�");
  tr["&sect;"] = new Array("�", "�", "", "�");
  tr["&uml;"] = new Array("�", "�", "�", "�");
  tr["&copy;"] = new Array("�", "�", "�", "�");
  tr["&ordf;"] = new Array("�", "�", "�", "�");
  tr["&laquo;"] = new Array("�", "�", "�", "�");
  tr["&not;"] = new Array("�", "�", "�", "�");
  tr["&shy;"] = new Array("�", "�", "�", "�");
  tr["&reg;"] = new Array("�", "�", "�", "�");
  tr["&macr;"] = new Array("�", "�", "�", "�");
  tr["&deg;"] = new Array("�", "�", "�", "�");
  tr["&plusmn;"] = new Array("�", "�", "�", "�");
  tr["&sup2;"] = new Array("�", "�", "�", "�");
  tr["&sup3;"] = new Array("�", "�", "�", "�");
  tr["&acute;"] = new Array("�", "�", "�", "�");
  tr["&micro;"] = new Array("�", "�", "�", "�");
  tr["&para;"] = new Array("�", "�", "�", "�");
  tr["&middot;"] = new Array("�", "�", "�", "�");
  tr["&cedil;"] = new Array("�", "�", "�", "�");
  tr["&sup1;"] = new Array("�", "�", "�", "�");
  tr["&ordm;"] = new Array("�", "�", "�", "�");
  tr["&raquo;"] = new Array("�", "�", "�", "�");
  tr["&frac14;"] = new Array("�", "�", "�", "�");
  tr["&frac12;"] = new Array("�", "�", "�", "�");
  tr["&frac34;"] = new Array("�", "�", "�", "�");
  tr["&iquest;"] = new Array("�", "�", "�", "�");
  tr["&Agrave;"] = new Array("�", "�", "�", "�");
  tr["&Aacute;"] = new Array("�", "�", "�", "�");
  tr["&Acirc;"] = new Array("�", "�", "�", "�");
  tr["&Atilde;"] = new Array("�", "�", "�", "�");
  tr["&Auml;"] = new Array("�", "�", "�", "�");
  tr["&Aring;"] = new Array("�", "�", "�", "�");
  tr["&AElig;"] = new Array("�", "�", "�", "�");
  tr["&Ccedil;"] = new Array("�", "�", "�", "�");
  tr["&Egrave;"] = new Array("�", "�", "�", "�");
  tr["&Eacute;"] = new Array("�", "�", "�", "�");
  tr["&Ecirc;"] = new Array("�", "�", "�", "�");
  tr["&Euml;"] = new Array("�", "�", "�", "�");
  tr["&Igrave;"] = new Array("�", "�", "�", "�");
  tr["&Iacute;"] = new Array("�", "�", "�", "�");
  tr["&Icirc;"] = new Array("�", "�", "�", "�");
  tr["&Iuml;"] = new Array("�", "�", "�", "�");
  tr["&ETH;"] = new Array("�", "�", "�", "�");
  tr["&Ntilde;"] = new Array("�", "�", "�", "�");
  tr["&Ograve;"] = new Array("�", "�", "�", "�");
  tr["&Oacute;"] = new Array("�", "�", "�", "�");
  tr["&Ocirc;"] = new Array("�", "�", "�", "�");
  tr["&Otilde;"] = new Array("�", "�", "�", "�");
  tr["&Ouml;"] = new Array("�", "�", "�", "�");
  tr["&times;"] = new Array("�", "�", "�", "�");
  tr["&Oslash;"] = new Array("�", "�", "�", "�");
  tr["&Ugrave;"] = new Array("�", "�", "�", "�");
  tr["&Uacute;"] = new Array("�", "�", "�", "�");
  tr["&Ucirc;"] = new Array("�", "�", "�", "�");
  tr["&Uuml;"] = new Array("�", "�", "�", "�");
  tr["&Yacute;"] = new Array("�", "�", "�", "�");
  tr["&THORN;"] = new Array("�", "�", "�", "�");
  tr["&szlig;"] = new Array("�", "�", "�", "�");
  tr["&agrave;"] = new Array("�", "�", "�", "�");
  tr["&aacute;"] = new Array("�", "�", "�", "�");
  tr["&acirc;"] = new Array("�", "�", "�", "�");
  tr["&atilde;"] = new Array("�", "�", "�", "�");
  tr["&auml;"] = new Array("�", "�", "�", "�");
  tr["&aring;"] = new Array("�", "�", "�", "�");
  tr["&aelig;"] = new Array("�", "�", "�", "�");
  tr["&ccedil;"] = new Array("�", "�", "�", "�");
  tr["&egrave;"] = new Array("�", "�", "�", "�");
  tr["&eacute;"] = new Array("�", "�", "�", "�");
  tr["&ecirc;"] = new Array("�", "�", "�", "�");
  tr["&euml;"] = new Array("�", "�", "�", "�");
  tr["&igrave;"] = new Array("�", "�", "�", "�");
  tr["&iacute;"] = new Array("�", "�", "�", "�");
  tr["&icirc;"] = new Array("�", "�", "�", "�");
  tr["&iuml;"] = new Array("�", "�", "�", "�");
  tr["&eth;"] = new Array("�", "�", "�", "�");
  tr["&ntilde;"] = new Array("�", "�", "�", "�");
  tr["&ograve;"] = new Array("�", "�", "�", "�");
  tr["&oacute;"] = new Array("�", "�", "�", "�");
  tr["&ocirc;"] = new Array("�", "�", "�", "�");
  tr["&otilde;"] = new Array("�", "�", "�", "�");
  tr["&ouml;"] = new Array("�", "�", "�", "�");
  tr["&divide;"] = new Array("�", "�", "�", "�");
  tr["&oslash;"] = new Array("�", "�", "�", "�");
  tr["&ugrave;"] = new Array("�", "�", "�", "�");
  tr["&uacute;"] = new Array("�", "�", "�", "�");
  tr["&ucirc;"] = new Array("�", "�", "�", "�");
  tr["&uuml;"] = new Array("�", "�", "�", "�");
  tr["&yacute;"] = new Array("�", "�", "�", "�");
  tr["&thorn;"] = new Array("�", "�", "�", "�");
  tr["&yuml;"] = new Array("�", "�", "�", "�");
}
function e_print_header(txtin) {
  var ind = 0;
  var reg = "";
  var cu = 0;
  var tmp = "";
  var txtout = "";
  if (MAC) ind = 3;
  cu = 0;
  while (cu < txtin.length) {
    tmp = txtin.charAt(cu);
    if (tmp.charCodeAt() > 127) {
      for (hs in tr) {
        if (tr[hs][ind].charCodeAt() == txtin.charCodeAt(cu)) {
          tmp = hs;
        }
      }
    }
    txtout += tmp;
    cu++;
  }
  return escape(txtout);
}
function B_get_cookie() {
  s.document.open();
  s.document.writeln(ADMIN_TOP);
  s.document.writeln(FONT_A_BIG + A_SHOW_HELP_INS + "</FONT>");
  s.document.writeln(ADMIN_BOT);
  s.document.close();
}
function B_speichere_kunden() {
  s.document.open();
  s.document.writeln(ADMIN_TOP);
  s.document.writeln(FONT_A_BIG + A_SHOW_HELP_SET + "</FONT>");
  s.document.writeln(ADMIN_BOT);
  s.document.close();
}
function b_set_cookie() {
  s.document.open();
  s.document.writeln(ADMIN_TOP);
  s.document.writeln(FONT_A_BIG + A_SHOW_HELP_DES + "</FONT>");
  s.document.writeln(ADMIN_BOT);
  s.document.close();
}
function b_product_price(s_obj) {
  was = s_obj.options[s_obj.selectedIndex].value;
  s_obj.selectedIndex = 0;
  if (was == "help_ed") {
    B_get_cookie();
    return;
  } else if (was == "help_set") {
    B_speichere_kunden();
    return;
  } else if (was == "help_des") {
    b_set_cookie();
    return;
  }
  B_auswertung(was);
}
function Xeg() {
  with (preis.document) {
    writeln(ADMIN_TOP);
    writeln("<FORM name=menu>");
    writeln("<CENTER><TABLE >");
    writeln("<TR>");
    writeln("<TD colspan=2 align=middle>" + FONT_A + A_PRINT_FRAME_TOP);
    writeln("<SELECT onChange='parent.b_product_price(this)' name=sel1>");
    writeln("<OPTION selected value='help_ed'>" + A_PRINT_FRAME_INS);
    writeln("<OPTION value='page'>" + A_PRINT_FRAME_ADDP);
    writeln("<OPTION value='ed_C'>" + A_PRINT_FRAME_ED_PAGE);
    writeln("<OPTION value='import'>" + A_PRINT_FRAME_IMPORT);
    writeln("<OPTION value='ins_art'>" + A_PRINT_FRAME_ADD1);
    writeln("<OPTION value='ed_art'>" + A_PRINT_FRAME_ED_ART);
    writeln("</SELECT><BR>");
    writeln("<SELECT onChange='parent.b_product_price(this)' name=sel2>");
    writeln("<OPTION value='help_des'>" + A_NAME_ADMIN_DES);
    writeln("<OPTION value='sf'>" + A_NAME_ADMIN_F);
    writeln("<OPTION value='nav'>" + A_NAME_ADMIN_NAV);
    writeln("<OPTION value='tbl'>" + A_NAME_ADMIN_TBL);
    writeln("<OPTION value='tbo'>" + A_NAME_ADMIN_TBO);
    writeln("<OPTION value='htm'>" + A_NAME_ADMIN_HTM);
    writeln("</SELECT><BR>");
    writeln("<SELECT onChange='parent.b_product_price(this)' name=sel3>");
    writeln("<OPTION value='help_set'>" + A_NAME_ADMIN);
    writeln("<OPTION value='sb'>" + A_NAME_ADMIN_B);
    writeln("<OPTION value='vorlage'>" + A_NAME_ADMIN_VOR);
    writeln("<OPTION value='sfr'>" + A_NAME_ADMIN_FR);
    writeln("<OPTION value='sa'>" + A_NAME_ADMIN_A);
    writeln("<OPTION value='slg'>" + A_NAME_ADMIN_LG);
    writeln("<OPTION value='sza'>" + A_NAME_ADMIN_SZA);
    writeln("<OPTION value='sw'>" + A_NAME_ADMIN_W);
    writeln("<OPTION value='smw'>" + A_NAME_ADMIN_SMW);
    writeln("<OPTION value='sft'>" + A_NAME_ADMIN_FT);
    writeln("<OPTION value='vs'>" + A_NAME_ADMIN_VS);
    writeln("<OPTION value='sl'>" + A_NAME_ADMIN_L);
    writeln("</SELECT></TD></TR>");
    writeln("<TR>");
    writeln(
      "<TD colspan=2 align=middle>" +
        FONT_A +
        "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm');\"",
    );
    writeln("value='" + A_NAME_HELP + "'>");
    writeln("<INPUT type=button onClick='javascript:parent.B_set_mwstshow();'");
    writeln("value='" + A_NAME_SAVE + "'><BR>");
    writeln(
      "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/bugrep.htm');\"",
    );
    writeln("value='" + A_NAME_BUG + "'></FONT></TD>");
    writeln("</TABLE></CENTER>");
    writeln("</FORM>");
    writeln(ADMIN_BOT);
  }
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln(FONT_A_BIG + system["version"] + A_DEL_S);
    writeln("</FONT>");
    writeln(ADMIN_BOT);
    close();
  }
}
function B_toMWST(ln) {
  if (rounds > 10) {
    location.replace("http://www.js-webShop.com");
    return;
  }
  if (ln) {
    if (B_getMWST(ln)) system["ln"] = escape(ln);
    else alert(A_CHECK_LN);
  } else {
    if (system["ln"]) {
      if (B_getMWST(unescape(system["ln"]))) {
        Xeg();
        return;
      }
    }
    tln = prompt(A_NAME_LN + ":", "");
    if (B_getMWST(tln)) {
      system["ln"] = escape(tln);
      Xeg();
    } else B_toMWST();
  }
  return;
}
function B_getMWST(ln) {
  if (!ln) return false;
  rounds++;
  if (
    (ln.substring(0, ln.indexOf("-")) +
      ln.substring(ln.lastIndexOf("-") + 1, ln.length) -
      5) %
      23 ||
    (ln.substring(0, ln.indexOf("-")) +
      ln.substring(ln.lastIndexOf("-") + 1, ln.length)) %
      281 !=
      ln.substring(ln.indexOf("-") + 1, ln.lastIndexOf("-"))
  )
    return false;
  else return true;
}
function B_set_currency() {
  s.document.open();
  s.document.writeln(ADMIN_TOP);
  s.document.writeln("<FORM name=config>");
  s.document.writeln("Hier Klicken zum abspeichern:");
  s.document.writeln("</FORM>");
  s.document.writeln(ADMIN_BOT);
  s.document.close();
}
function B_set_mwstshow() {
  var path = "";
  path = unescape(
    location.href.substring(0, location.href.lastIndexOf("/") + 1),
  );
  p_idx = path.indexOf("file:");
  if (p_idx == -1) {
    alert("Nur file: erlaubt");
    return;
  } else if (WIN) {
    path = unescape(path.substring(path.indexOf("|") - 1, path.length));
    path = path.replace("|", ":");
    path = path.replace(/\//g, "\\");
  } else path = unescape(path.substring(p_idx + 5, path.length));
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln("<FORM name=save onSubmit='parent.toDM();'>");
    writeln(FONT_A_BIG + A_SAVE_TOP + "</FONT><BR>");
    writeln(
      FONT_A +
        A_SAVE_PATH +
        "<INPUT type=file size=30 accept='text/html' name='path'><BR>",
    );
    writeln(
      "<INPUT type=hidden name='defaultPath' value='" + escape(path) + "'><BR>",
    );
    writeln(A_SAVE_USE_DEF1 + path + A_SAVE_USE_DEF2);
    writeln("<INPUT type=submit value='" + A_NAME_SAVE + "'><BR>");
    writeln("</FONT></FORM>");
    writeln(ADMIN_BOT);
    close();
  }
}
function toDM() {
  netscape.security.PrivilegeManager.enablePrivilege("UniversalFileAccess");
  if (s.document.save.path.value != "") {
    path = s.document.save.path.value;
    if (WIN) path = path.substring(0, path.lastIndexOf("\\") + 1);
    else path = path.substring(0, path.lastIndexOf("/") + 1);
  } else path = unescape(s.document.save.defaultPath.value);
  file_index = path + unescape(admin["ind"]);
  file_shop = path + unescape(admin["aq_file"]);
  file_aq = path + "js-adm.js";
  file_art = path + "js-db.js";
  file_layout = path + "js-sys.js";
  alert(
    "index: " +
      file_index +
      "\nArt: " +
      file_art +
      "\nlayout: " +
      file_layout +
      "\nShop: " +
      file_shop +
      "\nintern: " +
      file_aq,
  );
  out_index = new java.io.FileOutputStream(file_index);
  ba_stream_index = new java.io.ByteArrayOutputStream();
  FSI = new java.io.DataOutputStream(ba_stream_index);
  toCurr();
  out_index.write(ba_stream_index.toByteArray());
  out_index.close();
  out_art = new java.io.FileOutputStream(file_art);
  ba_stream_art = new java.io.ByteArrayOutputStream();
  FSA = new java.io.DataOutputStream(ba_stream_art);
  B_enter_payment();
  out_art.write(ba_stream_art.toByteArray());
  out_art.close();
  out_layout = new java.io.FileOutputStream(file_layout);
  ba_stream_layout = new java.io.ByteArrayOutputStream();
  FSL = new java.io.DataOutputStream(ba_stream_layout);
  B_retOpt();
  out_layout.write(ba_stream_layout.toByteArray());
  out_layout.close();
  out_shop = new java.io.FileOutputStream(file_shop);
  ba_stream_shop = new java.io.ByteArrayOutputStream();
  FSS = new java.io.DataOutputStream(ba_stream_shop);
  toDMhidden();
  out_shop.write(ba_stream_shop.toByteArray());
  out_shop.close();
  out_aq = new java.io.FileOutputStream(file_aq);
  ba_stream_aq = new java.io.ByteArrayOutputStream();
  FST = new java.io.DataOutputStream(ba_stream_aq);
  B_isEu();
  out_aq.write(ba_stream_aq.toByteArray());
  out_aq.close();
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln(FONT_A_BIG + A_DO_SAVE_DONE);
    writeln(
      "<P><CENTER><artikel HREF='file:///" +
        file_index +
        "' target=_new>" +
        A_DO_SAVE_DONE_TEST +
        "</CENTER>",
    );
    writeln("</FONT>");
    writeln(ADMIN_BOT);
    close();
  }
}
function toDMhidden() {
  FSS.writeBytes(
    '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">\mwst<HTML>\mwst<HEAD>\mwst\mwst',
  );
  FSS.writeBytes("<TITLE>" + unescape(system["titel"]) + "</TITLE>\mwst");
  FSS.writeBytes(
    '<META name="author" content="' +
      unescape(system["betreiber"] + " " + system["email"]) +
      '">\mwst',
  );
  FSS.writeBytes(
    '<META name="generator" content="js-webShop V' +
      system["version"] +
      ' www.js-webShop.com">\mwst',
  );
  FSS.writeBytes(
    '<META name="author" content="' +
      unescape(system["betreiber"] + " " + system["email"]) +
      '">\mwst',
  );
  FSS.writeBytes("</HEAD>\mwst");
  FSS.writeBytes(
    "<NOSCRIPT>\mwst<H1>Please allow JavaScript to have a look at this Cs!<P>" +
      A_DO_SAVE_INDEX_NOSCRIPT +
      "</H1>\mwst</NOSCRIPT>\mwst\mwst",
  );
  FSS.writeBytes(
    '<SCRIPT src="js-db.js" type="text/javascript"> \
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
</SCRIPT>\mwst\mwst\mwst',
  );
  FSS.writeBytes(
    '<FRAMESET onLoad=\'setTimeout("E_main();",500);\' \
COLS="210,*" BORDER="0" frameborder="0" framespacing="0"> \
<FRAME NAME="titel" src="blank.htm" \
MARGINWIDTH="00" MARGINHEIGHT="00" \
NORESIZE>\
<FRAME NAME="r" src="language.htm" \
MARGINWIDTH="20" MARGINHEIGHT="10" \
SCROLLING="auto" NORESIZE> \
</FRAMESET>\mwst\mwst <BODY> \mwst',
  );
  FSS.writeBytes(
    "\mwst\mwst<H1>Your browser doesn't support frames, we're sorry.<P>\mwst" +
      A_DO_SAVE_INDEX_NOFRAMES +
      "</H1>\mwst\mwst",
  );
  FSS.writeBytes("</BODY></HTML>");
}
function toCurr() {
  var re = /(<.*?>)/gi;
  var re2 = /"/gi;
  var txt = "";
  var tt = "";
  FSI.writeBytes(
    '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">\mwst<HTML>\mwst<HEAD>\mwst\mwst',
  );
  FSI.writeBytes("<TITLE>" + unescape(system["titel"]) + "</TITLE>\mwst");
  FSI.writeBytes(
    '<META name="author" content="' +
      unescape(system["betreiber"] + " " + system["email"]) +
      '">\mwst',
  );
  FSI.writeBytes(
    '<META name="generator" content="js-webShop V' +
      system["version"] +
      ' www.js-webShop.com">\mwst',
  );
  FSI.writeBytes(
    '<META name="author" content="' +
      unescape(system["betreiber"] + " " + system["email"]) +
      '">\mwst',
  );
  FSI.writeBytes(
    '<META name="description" content="' +
      unescape(system["titel"]) +
      '">\mwst',
  );
  FSI.writeBytes('<META name="keywords" content="');
  for (i in page) {
    tt = unescape(page[i]["name"]);
    txt = tt.replace(re2, "");
    FSI.writeBytes(txt.replace(re, "") + " ");
  }
  for (i in artikel) {
    if (artikel[i]) {
      tt = unescape(artikel[i]["name"]);
      txt = tt.replace(re2, "");
      FSI.writeBytes(txt.replace(re, "") + " ");
    }
  }
  FSI.writeBytes('">' + "\mwst");
  FSI.writeBytes("<script>\ndone = false;\mwst</script>\mwst");
  endung = file_shop.substring(file_shop.lastIndexOf("."), file_shop.length);
  FSI.writeBytes(
    "<script language='JavaScript1.2'>\mwst<!-- \
function go(){ \
var gt = document.fo.pass.value; \
eval(\"location.replace('\"+ gt +\"" +
      endung +
      "')\"); \
} \
//-->\mwst</script>",
  );
  FSI.writeBytes("</head>\mwst");
  FSI.writeBytes(
    "<BODY " +
      PT_BGC +
      " link='" +
      PT_L +
      "' vlink='" +
      PT_VL +
      "' alink='" +
      PT_AL +
      "' background='" +
      PT_BG +
      "'>\mwst\mwst",
  );
  FSI.writeBytes(
    "\mwst\mwst<noscript> \mwst" +
      unescape(admin["aq_noscript"]) +
      " \mwst</noscript>\mwst",
  );
  FSI.writeBytes(
    '<script language=\'JavaScript1.2\'> \
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
writeln("<CENTER><TABLE ' +
      TBG_PT +
      " width='" +
      T_W +
      "' border='" +
      TB_PT +
      "' cellpadding='" +
      TP_PT +
      "'>\"); \
write('<TD valign=top>" +
      FONT_RH +
      unescape(system["name"]) +
      " &nbsp;&nbsp; <I>'); \
writeln(\"" +
      A_NAME_START +
      "</I></FONT><HR>\"); \
writeln('" +
      FONT_TT +
      "'); \
writeln(unescape('" +
      admin["aq_ok1"] +
      '\') +"<HR>"); \
\
writeln("<P><img name=s01 src=' +
      system["s_off"] +
      '>"); \
writeln("<img name=s02 src=' +
      system["s_off"] +
      '>"); \
writeln("<img name=s11 src=' +
      system["s_off"] +
      '>"); \
writeln("<img name=s12 src=' +
      system["s_off"] +
      '>"); \
writeln("<img name=s21 src=' +
      system["s_off"] +
      '>"); \
writeln("<img name=s22 src=' +
      system["s_off"] +
      '>"); \
writeln("<img name=s31 src=' +
      system["s_off"] +
      '>"); \
writeln("<img name=s32 src=' +
      system["s_off"] +
      '>"); \
writeln("<img name=s41 src=' +
      system["s_off"] +
      '>"); \
writeln("<img name=s42 src=' +
      system["s_off"] +
      '>"); \
writeln("<HR>"+ unescape(\'' +
      admin["aq_ok2"] +
      "')); \
writeln(\"<FORM name=fo onSubmit='return false;'>\"); \mwst",
  );
  if (admin["password"] == "on") {
    FSI.writeBytes(
      "writeln(\"<INPUT type=text name=pass onChange='go()'>\");\mwst",
    );
    FSI.writeBytes('writeln("<INPUT type=button value=Weiter >");\mwst');
  } else
    FSI.writeBytes(
      'writeln("<INPUT type=button value=weiter onClick=\'location.replace(\\\"' +
        unescape(admin["aq_file"]) +
        '\\\");\'>");\mwst',
    );
  FSI.writeBytes(
    'writeln("</FORM></FONT></TD></TR></TABLE>"); \
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
writeln("<CENTER><TABLE ' +
      TBG_PT +
      " width='" +
      T_W +
      "' border='" +
      TB_PT +
      "' cellpadding='" +
      TP_PT +
      "'>\"); \
write('<TD valign=top>" +
      FONT_RH +
      unescape(system["name"]) +
      " &nbsp;&nbsp; <I>'); \
writeln(\"" +
      A_NAME_NOSTART +
      "</I></FONT><HR>\"); \
writeln('" +
      FONT_TT +
      "'); \
writeln(unescape('" +
      admin["aq_old"] +
      "') +\"</TD></TR>\"); \
writeln(\"</TABLE>\"); \
close(); \
} \
done = true; \
} \
//--> \
</script> \
\
<script language='JavaScript1.2'> \
<!-- \
document.s01.src = '" +
      system["s_on"] +
      "'; \
//--> \
</script> \
<script language='JavaScript1.2' src=\"js-sys.js\"> \
<!-- \
//--> \
</script> \
<script language='JavaScript1.2'> \
<!-- \
document.s02.src = '" +
      system["s_on"] +
      "'; \
document.s11.src = '" +
      system["s_on"] +
      "'; \
//--> \
</script> \
<script language='JavaScript1.2' src=\"js-bes.js\"> \
<!-- \
//--> \
</script> \
<script language='JavaScript1.2'> \
<!-- \
document.s12.src = '" +
      system["s_on"] +
      "'; \
document.s21.src = '" +
      system["s_on"] +
      "'; \
//--> \
</script> \
<script language='JavaScript1.2' src=\"js-eng.js\"> \
<!-- \
//--> \
</script> \
<script language='JavaScript1.2'> \
<!-- \
document.s22.src = '" +
      system["s_on"] +
      "'; \
document.s31.src = '" +
      system["s_on"] +
      "'; \
//--> \
</script> \
<script language='JavaScript1.2' src=\"js-db.js\"> \
<!-- \
//--> \
</script> \
<script language='JavaScript1.2'> \
<!-- \
document.s32.src = '" +
      system["s_on"] +
      "'; \
document.s41.src = '" +
      system["s_on"] +
      "'; \
//--> \
</script> \
<script language='JavaScript1.2'> \
<!-- \
lang = new Image(); \
lang.src='language.htm'; \
//--> \
</script> \
<script language='JavaScript1.2'> \
<!-- \
document.s32.src = '" +
      system["s_on"] +
      "'; \
document.s41.src = '" +
      system["s_on"] +
      "'; \
//--> \
</script> \
<script language='JavaScript1.2'> \
<!-- \
var my_img = new Array(); \mwst",
  );
  var co = 0;
  var tmp = "";
  for (im in system) {
    if (system[im]) {
      tmp = unescape(system[im]);
      tmpsrc = tmp.match(/([a-z|0-9|_|\-|\/|\\]*\.+(jpg|gif))/i);
      if (tmpsrc) {
        FSI.writeBytes("my_img[" + co + "] = '" + tmpsrc[0] + "';\mwst");
        co++;
      }
    }
  }
  var tmp = "";
  for (im in page) {
    for (ha in page[im]) {
      if (page[im][ha]) {
        tmp = unescape(page[im][ha]);
        tmpsrc = tmp.match(/([a-z|0-9|_|\-|\/|\\]*\.+(jpg|gif))/i);
        if (tmpsrc) {
          FSI.writeBytes("my_img[" + co + "] = '" + tmpsrc[0] + "';\mwst");
          co++;
        }
      }
    }
  }
  FSI.writeBytes(
    '\nfor ( i in my_img){ \
document.writeln("<img name=put_here"+ i +" src=\'"+ my_img[i] +"\' width=1 height=1>"); \
} \
\
document.s42.src = \'' +
      system["s_on"] +
      "'; \mwst",
  );
  if (admin["password"] == "off")
    FSI.writeBytes(
      "setTimeout('location.replace(\"" +
        unescape(admin["aq_file"]) +
        "\")', 2000);\mwst",
    );
  FSI.writeBytes("//--> \mwst</script>\mwst\mwst\mwst");
  FSI.writeBytes(
    "<TABLE " +
      TBG_PT +
      " width='" +
      T_W +
      "' border='" +
      TB_P +
      "' cellpadding='" +
      TP_P +
      "'>\mwst",
  );
  FSI.writeBytes(
    "<TR><TD>" +
      FONT +
      "<FONT size=-3 color='" +
      unescape(system["tbg_pt"]) +
      "'>\mwst",
  );
  FSI.writeBytes(unescape(system["titel"]) + "\mwst\mwst");
  for (i in page) {
    tt = unescape(page[i]["name"]);
    txt = tt.replace(re2, "");
    FSI.writeBytes(txt.replace(re, "") + " ");
  }
  for (i in artikel) {
    if (artikel[i]) {
      tt = unescape(artikel[i]["name"]);
      txt = tt.replace(re2, "");
      FSI.writeBytes(txt.replace(re, "") + " ");
    }
  }
  FSI.writeBytes("</font></font></TD></TR></TABLE></body></html>");
}
function B_isEu() {
  B_enter_address(FST);
  FST.writeBytes("var admin = new Array();\mwst");
  for (i in admin) {
    FST.writeBytes("admin['" + i + "'] = '" + admin[i] + "';\mwst");
  }
}
function B_retOpt() {
  B_enter_address(FSL);
  FSL.writeBytes("var system = new Array();\mwst");
  for (i in system) {
    if (i == "currency" || i == "mwst") {
      FSL.writeBytes("system['" + i + "'] = new Array();\mwst");
      for (summen in system[i]) {
        FSL.writeBytes(
          "system['" +
            i +
            "']['" +
            summen +
            "'] = '" +
            system[i][summen] +
            "';\mwst",
        );
      }
    } else if (
      i == "address" ||
      i == "freight" ||
      i == "areas" ||
      i == "payment" ||
      i == "features"
    ) {
      FSL.writeBytes("system['" + i + "'] = new Array();\mwst");
      for (preisa in system[i]) {
        if (!system[i][preisa] && i == "features") continue;
        FSL.writeBytes(
          "system['" + i + "'][" + preisa + "] = new Array();\mwst",
        );
        for (summen in system[i][preisa]) {
          FSL.writeBytes(
            "system['" +
              i +
              "'][" +
              preisa +
              "]['" +
              summen +
              "'] = '" +
              system[i][preisa][summen] +
              "';\mwst",
          );
        }
      }
    } else if (i == "ewu") {
      FSL.writeBytes("system['" + i + "'] = new Array();\mwst");
      for (preisa in system[i]) {
        FSL.writeBytes(
          "system['" + i + "']['" + preisa + "'] = new Array();\mwst",
        );
        for (summen in system[i][preisa]) {
          FSL.writeBytes(
            "system['" +
              i +
              "']['" +
              preisa +
              "']['" +
              summen +
              "'] = '" +
              system[i][preisa][summen] +
              "';\mwst",
          );
        }
      }
    } else {
      if (system[i] != "do_not_save")
        FSL.writeBytes("system['" + i + "'] = '" + system[i] + "';\mwst");
    }
  }
}
function B_enter_payment() {
  B_enter_address(FSA);
  FSA.writeBytes("var artikel = new Array();\mwst");
  FSA.writeBytes("var features = new Array();\mwst");
  FSA.writeBytes("var page = new Array();\mwst");
  for (i in page) {
    if (i == "length") {
      continue;
    }
    FSA.writeBytes("page[" + i + "] = new Array();\mwst");
    for (menge in page[i]) {
      FSA.writeBytes(
        "page[" + i + "]['" + menge + "'] = '" + page[i][menge] + "';\mwst",
      );
    }
  }
  for (i in artikel) {
    if (!artikel[i]) {
      continue;
    }
    if (i == "length") {
      continue;
    }
    FSA.writeBytes("artikel[" + i + "] = new Array();\mwst");
    for (menge in artikel[i]) {
      if (!artikel[i][menge]) continue;
      FSA.writeBytes(
        "artikel[" +
          i +
          "]['" +
          menge +
          "'] = '" +
          artikel[i][menge] +
          "';\mwst",
      );
    }
  }
}
function B_enter_address(i_strm) {
  i_strm.writeBytes("\mwst //- -- Copyright 1998 / 1999 iConnect.de --\mwst");
  i_strm.writeBytes(" //- -- Contact pluto@iconnect.de --\mwst");
  i_strm.writeBytes(" //- -- coAuthor kdoberstein@js-webShop.de --\mwst");
}
function B_del(io) {
  if (io.type == "text") system[io.name] = e_print_header(io.value);
  else if (io.type == "select-one") {
    var wert = "" + io.options[io.selectedIndex].value;
    if (wert == "enter") {
      wert = prompt(A_CONFIG_SYSTEM_SL_ASK, "");
      if (wert.length == 0) return;
    }
    system[io.name] = e_print_header(wert);
  } else if (io.type == "checkbox") {
    if (io.checked) system[io.name] = "on";
    else system[io.name] = "off";
  } else if (io.type == "textarea") system[io.name] = e_print_header(io.value);
  else alert("NOT DEFINED! " + io.type);
  a_doSetEuroland();
  LEFT = false;
  E_go("refresh");
}
function B_auswertung(setup) {
  //noch:event f�r onclick auf radio-button raussuchen
  var auswahl, selectname, configname;
  var txt_name, txt_value, txt_y, err_txt;
  var idx = "-1";
  if (setup == "page") {
    e_insert_navgif();
    return;
  } else if (setup == "ins_art") {
    E_print_left_frame();
    return;
  } else if (setup == "ed_C") {
    e_insert_navgif(e_C_state);
    return;
  } else if (setup == "vorlage") {
    Xif();
    return;
  } else if (setup == "import") {
    Xih();
    return;
  } else if (setup == "ed_art") {
    a_editProd();
    return;
  } else if (setup == "sw") {
    B_storeOrder(idx);
    return;
  } else if (setup == "sa") {
    B_delOrder("-1");
    return;
  } else if (setup == "sfr") {
    ART = "freight";
    Xfp("-1");
    return;
  } else if (setup == "slg") {
    ART = "areas";
    Xfp("-1");
    return;
  } else if (setup == "smw") {
    B_setAmount("-1");
    return;
  } else if (setup == "sza") {
    B_setCom("-1");
    return;
  } else if (setup == "tbl") {
    Xfu("-1");
    return;
  } else if (setup == "tbo") {
    Xfx("-1");
    return;
  } else if (setup == "sf") {
    Xfs("-1");
    return;
  } else if (setup == "vs") {
    Xfy("-1");
    return;
  } else if (setup == "sft") {
    e_set_areas("-1");
    return;
  }
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln("<FORM name=sysedit>");
    writeln("<TABLE width=560>");
    if (setup == "sb") {
      writeln(
        "<TR><TD colspan=3>" + FONT_A_BIG + A_CONFIG_SYSTEM_SB + "</FONT></TD>",
      );
      writeln(
        "<TD align=right>" +
          FONT_A_SMALL +
          "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#shopD');\"",
      );
      writeln("value='" + A_NAME_HELP + "'></FONT></TD></TR>");
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SB_N +
          "</FONT></TD><TD><INPUT type=text name='name' value='" +
          unescape(system["name"]) +
          "' onChange='parent.B_del(this);'></TD>",
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SB_TITEL +
          "</TD><TD><INPUT type=text name='titel' value='" +
          unescape(system["titel"]) +
          "' onChange='parent.B_del(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SB_B +
          "</TD><TD><INPUT type=text name='betreiber' value='" +
          unescape(system["betreiber"]) +
          "' onChange='parent.B_del(this);'></TD>",
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SB_E +
          "</TD><TD><INPUT type=text name='email' value='" +
          unescape(system["email"]) +
          "' onChange='parent.B_del(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SB_T +
          "</TD><TD><INPUT type=text name='tel' value='" +
          unescape(system["tel"]) +
          "' onChange='parent.B_del(this);'></TD>",
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SB_F +
          "</TD><TD><INPUT type=text name='fax' value='" +
          unescape(system["fax"]) +
          "' onChange='parent.B_del(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SB_S +
          "</TD><TD><INPUT type=text name='str' value='" +
          unescape(system["str"]) +
          "' onChange='parent.B_del(this);'></TD>",
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SB_C +
          "</TD><TD><INPUT type=text name='city' value='" +
          unescape(system["city"]) +
          "' onChange='parent.B_del(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SB_CO +
          "</TD><TD><INPUT type=text name='country' value='" +
          unescape(system["country"]) +
          "' onChange='parent.B_del(this);'></TD>",
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SB_PB +
          "</TD><TD><INPUT type=text name='txt_pn' value='" +
          unescape(system["txt_pn"]) +
          "' onChange='parent.B_del(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SB_LU +
          "</TD><TD><INPUT type=text name='al_url' value='" +
          unescape(system["al_url"]) +
          "' onChange='parent.B_del(this);'></TD>",
      );
      writeln("<TD>&nbsp;</TD><TD>&nbsp;</TD></TR>");
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SB_SO +
          "</TD><TD colspan=3><TEXTAREA rows=10 cols=50 name='sonstiges' onChange='parent.B_del(this);' wrap=virtual>" +
          unescape(system["sonstiges"]) +
          "</TEXTAREA></TD></TR>",
      );
    } else if (setup == "nav") {
      writeln(
        "<TR><TD colspan=3>" +
          FONT_A_BIG +
          A_CONFIG_SYSTEM_NAV +
          "</FONT></TD>",
      );
      writeln(
        "<TD align=right>" +
          FONT_A_SMALL +
          "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#grafiken');\"",
      );
      writeln("value='" + A_NAME_HELP + "'></FONT></TD></TR>");
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_LOGO +
          "</FONT></TD><TD><INPUT type=text name='logo' value='" +
          unescape(system["logo"]) +
          "' onChange='parent.B_del(this);'></TD>" +
          FONT_A,
      );
      writeln(
        "<TD align=right colspan=2>" +
          FONT_A +
          "<INPUT type=button onClick=\"parent.r.document.location.replace('.');\"",
      );
      writeln("value='" + A_SHOWDIR + "'></TD></TR>");
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_SEL +
          "</TD><TD><INPUT type=text name='gif_sel' value='" +
          unescape(system["gif_sel"]) +
          "' onChange='parent.B_del(this);'></TD>" +
          FONT_A,
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_NSEL +
          "</TD><TD><INPUT type=text name='gif_nsel' value='" +
          unescape(system["gif_nsel"]) +
          "' onChange='parent.B_del(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_NBG +
          "</TD><TD><INPUT type=text name='np_bg' value='" +
          unescape(system["np_bg"]) +
          "' onChange='parent.B_del(this);'></TD>" +
          FONT_A,
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_BG +
          "</TD><TD><INPUT type=text name='pt_bg' value='" +
          unescape(system["pt_bg"]) +
          "' onChange='parent.B_del(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_B +
          "</TD><TD><INPUT type=text name='b_img' value='" +
          unescape(system["b_img"]) +
          "' onChange='parent.B_del(this);'></TD>" +
          FONT_A,
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_B_A +
          "</TD><TD><INPUT type=text name='b_a_img' value='" +
          unescape(system["b_a_img"]) +
          "' onChange='parent.B_del(this);'></TD></TR>",
      );
      writeln("<TR><TD>&nbsp;</TD><TD>&nbsp;</TD>");
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_B_B +
          "<TD><INPUT type=text name='b_b_img' value='" +
          unescape(system["b_b_img"]) +
          "' onChange='parent.B_del(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_LEAVE +
          "</TD><TD><INPUT type=text name='leave' value='" +
          unescape(system["leave"]) +
          "' onChange='parent.B_del(this);'></TD>" +
          FONT_A,
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_SEARCH +
          "</TD><TD><INPUT type=text name='search' value='" +
          unescape(system["search"]) +
          "' onChange='parent.B_del(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_GOLEFT +
          "</TD><TD><INPUT type=text name='goleft' value='" +
          unescape(system["goleft"]) +
          "' onChange='parent.B_del(this);'></TD>" +
          FONT_A,
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_GORIGHT +
          "</TD><TD><INPUT type=text name='goright' value='" +
          unescape(system["goright"]) +
          "' onChange='parent.B_del(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_START +
          "</TD><TD><INPUT type=text name='navgif_aq' value='" +
          unescape(system["navgif_aq"]) +
          "' onChange='parent.B_del(this);'></TD>",
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_STARTS +
          "</TD><TD><INPUT type=text name='navgifs_aq' value='" +
          unescape(system["navgifs_aq"]) +
          "' onChange='parent.B_del(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_BASKET +
          "</TD><TD><INPUT type=text name='navgif_basket' value='" +
          unescape(system["navgif_basket"]) +
          "' onChange='parent.B_del(this);'></TD>",
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_BASKETS +
          "</TD><TD><INPUT type=text name='navgifs_basket' value='" +
          unescape(system["navgifs_basket"]) +
          "' onChange='parent.B_del(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_DATA +
          "</TD><TD><INPUT type=text name='navgif_data' value='" +
          unescape(system["navgif_data"]) +
          "' onChange='parent.B_del(this);'></TD>",
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_DATAS +
          "</TD><TD><INPUT type=text name='navgifs_data' value='" +
          unescape(system["navgifs_data"]) +
          "' onChange='parent.B_del(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_SEND +
          "</TD><TD><INPUT type=text name='navgif_send' value='" +
          unescape(system["navgif_send"]) +
          "' onChange='parent.B_del(this);'></TD>",
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_SENDS +
          "</TD><TD><INPUT type=text name='navgifs_send' value='" +
          unescape(system["navgifs_send"]) +
          "' onChange='parent.B_del(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_S_ON +
          "</TD><TD><INPUT type=text name='s_on' value='" +
          unescape(system["s_on"]) +
          "' onChange='parent.B_del(this);'></TD>",
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_S_OFF +
          "</TD><TD><INPUT type=text name='s_off' value='" +
          unescape(system["s_off"]) +
          "' onChange='parent.B_del(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_COOKIE +
          "</TD><TD><INPUT type=text name='cookie' value='" +
          unescape(system["cookie"]) +
          "' onChange='parent.B_del(this);'></TD>",
      );
      writeln("<TD>&nbsp;</TD></TR>");
    } else if (setup == "sl") {
      /** Abschicken **/
      writeln(
        "<TR><TD colspan=3>" + FONT_A_BIG + A_CONFIG_SYSTEM_SL + "</FONT></TD>",
      );
      writeln(
        "<TD align=right>" +
          FONT_A_SMALL +
          "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#abschicken');\"",
      );
      writeln("value='" + A_NAME_HELP + "'></FONT></TD></TR>");
      writeln("<TR><TD>" + FONT_A + A_CONFIG_SYSTEM_SL_A + "</TD><TD>");
      writeln(
        "<INPUT type=text name='action' size=40 value='" +
          unescape(system["action"]) +
          "' onChange='parent.B_del(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" + FONT_A + A_CONFIG_SYSTEM_SL_E + "</TD><TD>" + FONT_A,
      );
      write("<SELECT name='enctype' ");
      writeln(" onChange='parent.B_del(this);'>");
      write("<OPTION value='text/plain'");
      if ("text/plain" == unescape(system["enctype"])) write(" selected ");
      writeln(">" + A_CONFIG_SYSTEM_SL_MAIL);
      write("<OPTION value='application/payment-www-form-urlencoded'");
      if (
        "application/payment-www-form-urlencoded" == unescape(system["enctype"])
      )
        write(" selected ");
      writeln(">" + A_CONFIG_SYSTEM_SL_CGI);
      write("<OPTION value='enter'>");
      writeln(A_CONFIG_SYSTEM_SL_OWN);
      write("</SELECT></TD></TR>");
      writeln("<TR><TD>" + FONT_A + A_CONFIG_SYSTEM_SL_ZI + "</TD><TD>");
      writeln(
        FONT_A +
          A_CONFIG_SYSTEM_SL_ZIT +
          "&nbsp;&nbsp;<INPUT type=text name='zit' size=15 value='" +
          unescape(system["zit"]) +
          "' onChange='parent.B_del(this);'><BR>&nbsp;&nbsp;",
      );
      writeln(
        A_CONFIG_SYSTEM_SL_ZIN +
          " &nbsp;&nbsp;<INPUT type=text name='zin' size=15 value='" +
          unescape(system["zin"]) +
          "' onChange='parent.B_del(this);'><BR>",
      );
      writeln(
        A_CONFIG_SYSTEM_SL_ZIV +
          "&nbsp;<INPUT type=text name='ziv' size=35 value='" +
          unescape(system["ziv"]) +
          "' onChange='parent.B_del(this);'></TD></TR>",
      );
      writeln("<TR><TD>" + FONT_A + A_CONFIG_SYSTEM_SL_COM + "</TD><TD>");
      writeln("<INPUT type=checkbox name='com' onClick='parent.B_del(this);'");
      if (system["com"] == "on") write(" checked ");
      writeln("></TD></TR>");
    } else if (setup == "htm") {
      writeln("<TR><TD>" + FONT_A + A_NAME_ADMIN_HTM + "</TD></TR>");
      writeln("<TR>\mwst<TD colspan=2>");
      writeln(
        "<INPUT type=radio name=htm value='C_top' onClick='parent.Xfo(this);'><artikel HREF='javascript:parent.Xfo(\"" +
          "C_top" +
          "\")' onclick='sysedit.htm[0].checked = true'>" +
          A_CONFIG_SYSTEM_HTM_PT +
          "</artikel>",
      );
      writeln(
        "<INPUT type=radio name=htm value='C_f' onClick='parent.Xfo(this);'><artikel HREF='javascript:parent.Xfo(\"" +
          "C_f" +
          "\")' onclick='sysedit.htm[1].checked = true'>" +
          A_CONFIG_SYSTEM_HTM_PS +
          "</artikel>",
      );
      writeln(
        "<INPUT type=radio name=htm value='C_bottom' onClick='parent.Xfo(this);'><artikel HREF='javascript:parent.Xfo(\"" +
          "C_bottom" +
          "\")' onclick='sysedit.htm[2].checked = true'>" +
          A_CONFIG_SYSTEM_HTM_PB +
          "</artikel>",
      );
      writeln(
        "<INPUT type=radio name=htm value='nav_C_top' onClick='parent.Xfo(this);'><artikel HREF='javascript:parent.Xfo(\"" +
          "nav_C_top" +
          "\")' onclick='sysedit.htm[3].checked = true'>" +
          A_CONFIG_SYSTEM_HTM_NPT +
          "</artikel>",
      );
      writeln(
        "<INPUT type=radio name=htm value='nav_C_bottom' onClick='parent.Xfo(this);'><artikel HREF='javascript:parent.Xfo(\"" +
          "nav_C_bottom" +
          "\")' onclick='sysedit.htm[4].checked = true'>" +
          A_CONFIG_SYSTEM_HTM_NPB +
          "</artikel>",
      );
      writeln("</TD>");
      writeln("<TR><TD align=center colspan=2>" + FONT_A_SMALL);
      writeln(
        "<INPUT type=button onClick='parent.r.document.location.replace(\".\");' value='" +
          A_SHOWDIR +
          "'>",
      );
      writeln("</TD>");
      writeln(
        "<TD align=right>" +
          FONT_A_SMALL +
          "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#html');\"",
      );
      writeln("value='" + A_NAME_HELP + "'></FONT></TD></TR>");
      writeln(
        "<TR><TD valign=top colspan=2>" +
          FONT_A +
          "<TEXTAREA align=textop cols=50 rows=10 name='htmltext' value='' onChange='parent.Xfo(this);' wrap='virtual'>",
      );
      writeln("</TEXTAREA></TD></TR>");
    } else alert(A_CONFIG_SYSTEM_ERR);
    writeln(
      "<TR><TD colspan=4>" +
        FONT_A +
        "<INPUT type=button value='" +
        A_USE +
        "'></TD></TR>",
    );
    writeln("</TABLE>");
    writeln("</FORM>");
    writeln(ADMIN_BOT);
    close();
  } //of with
}
function b_add_record(str) {
  var c,
    len,
    zahl = "",
    pf = "";
  var i = 0,
    anz = 0;
  len = str.length;
  if (!len) return;
  while (i < len) {
    c = str.charAt(i);
    if ("a" <= c <= "z" && "artikel" <= c <= "Z") {
      alert(A_CONFIG_SYSTEM_SZA_NOB);
      return;
    } else if (c == "." || c == "-" || c == "," || c == "/" || c == ":") {
      if (!anz++) zahl += ".";
      else break;
    } else if (0 <= c <= 9) zahl += c;
    i++;
  }
  if (zahl.indexOf(".") == "-1") pf = parseInt(zahl) * 100;
  else pf = parseFloat(zahl) * 100;
  zahl = "" + pf;
  if (zahl.indexOf(".")) parseInt(zahl);
  if (isNaN(pf)) return 0;
  else return Math.round(pf);
}
function B_setCom(i_obj) {
  var idx = "neu",
    ix = "",
    msg = "";
  if (i_obj != "-1") {
    if (i_obj.type == "select-multiple")
      idx = i_obj.options[i_obj.selectedIndex].value;
    else idx = i_obj;
  }
  if (idx != "neu") {
    na = unescape(system["payment"][idx]["name"]);
    val = a_pment_action(system["payment"][idx]["value"]);
    lim = a_pment_action(system["payment"][idx]["limit"]);
    betreiber = system["payment"][idx]["activ"];
    if (system["payment"][idx]["msg"])
      msg = unescape(system["payment"][idx]["msg"]);
    if (system["payment"][idx]["curr"])
      ix = unescape(system["payment"][idx]["curr"]);
  }
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln("<FORM name=sys_x onSubmit='return false;'>");
    writeln("<TABLE width=560 border=0>");
    write("<TR><TD>" + FONT_A_BIG + A_NAME_ADMIN_SZA + "</FONT></TD>");
    if (idx == "neu") write("<TD>" + FONT_A_BIG + A_INSERT + "</FONT></TD>");
    else write("<TD>" + FONT_A_BIG + A_CHANGE + "</FONT></TD>");
    writeln(
      "<TD align=right>" +
        FONT_A_SMALL +
        "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#zahlungsweise');\"",
    );
    writeln("value='" + A_NAME_HELP + "'></FONT></TD></TR>");
    writeln("<TR>\mwst<TD valign=top rowspan=12>");
    writeln(
      FONT_A + "<SELECT name=\"xs\" onChange='parent.B_setCom(this);' size=8>",
    );
    for (i in system["payment"]) {
      write("<OPTION value='" + i + "'");
      if (i == idx) write("selected");
      writeln(">" + unescape(system["payment"][i]["name"]));
    }
    writeln("<OPTION value = 'neu'>" + A_CONFIG_SYSTEM_SZA_N);
    writeln("</SELECT></TD></TR>");
    if (idx == "neu") {
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SZA_NA +
          "</TD><TD>" +
          FONT_A +
          "<INPUT type=text name='na' size=15 value=''></FONT></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SZA_MSG +
          "</TD><TD>" +
          FONT_A +
          "<TEXTAREA cols=15 rows=3 name='msg' wrap=virtual></TEXTAREA></FONT></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SZA_Z +
          "</TD><TD>" +
          FONT_A +
          "<INPUT type=text name='val' size=8 value=''>&nbsp;" +
          CURR +
          "</FONT></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SZA_ZF +
          "</TD><TD>" +
          FONT_A +
          "<INPUT type=text name='lim' size=8 value=''>&nbsp;" +
          CURR +
          "</FONT></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SZA_AK +
          "</TD><TD>" +
          FONT_A +
          "<INPUT type=checkbox name='act'></FONT>",
      );
    } else {
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SZA_NA +
          "</FONT></TD><TD>" +
          FONT_A +
          "<INPUT type=text name='na' size=15 value='" +
          na +
          "' onChange='parent.e_print_logo(\"" +
          idx +
          "\");'></FONT></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SZA_MSG +
          "</FONT></TD><TD>" +
          FONT_A +
          "<TEXTAREA cols=15 rows=3 name='msg' wrap=virtual onChange='parent.b_checkFeatures(\"" +
          idx +
          "\");'>",
      );
      write(msg + "</TEXTAREA></FONT></TD></TR>");
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SZA_Z +
          "</FONT></TD><TD>" +
          FONT_A +
          "<INPUT type=text name='val' size=8 value='" +
          val +
          "' onChange='parent.b_checkFeatures(\"" +
          idx +
          "\");'>&nbsp;" +
          CURR +
          "</TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SZA_ZF +
          "</FONT></TD><TD>" +
          FONT_A +
          "<INPUT type=text name='lim' size=8 value='" +
          lim +
          "' onChange='parent.b_checkFeatures(\"" +
          idx +
          "\");'>&nbsp;" +
          CURR +
          "</TD></TR>",
      );
      write(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SZA_AK +
          "</FONT></TD><TD>" +
          FONT_A +
          "<INPUT type=checkbox name='act' onClick='parent.b_checkFeatures(\"" +
          idx +
          "\");'",
      );
      if (betreiber == "limit") write("checked");
      writeln("></TD></TR>");
    }
    writeln("<TR><TD>" + FONT_A + A_CONFIG_SYSTEM_SZA_CASH + "</TD><TD>");
    writeln(
      FONT_A +
        '<SELECT name="eca" onChange=\'parent.e_leave(this,"' +
        idx +
        "\");'>",
    );
    writeln("<OPTION value='null'>" + A_CONFIG_SYSTEM_SZA_ALL);
    for (preisa in system["ewu"])
      if (system["ewu"][preisa]["use"] == "limit") {
        write("<OPTION value='" + preisa + "'");
        if (preisa == ix) write("selected");
        writeln(">" + system["ewu"][preisa]["name"]);
      }
    for (menge in system["currency"]) {
      if (menge == "base") continue;
      write("<OPTION value='" + menge + "'");
      if (menge == ix) write("selected");
      writeln(">" + menge);
    }
    writeln("</SELECT></TD></TR>");
    if (idx == "neu")
      writeln(
        "<TR><TD>" +
          FONT_A_SMALL +
          "<INPUT type=button value='" +
          A_INSERT +
          "' onClick='parent.e_showDesc();'></FONT></TD></TR>",
      );
    else {
      writeln(
        "<TR><TD>" +
          FONT_A_SMALL +
          "<INPUT type=button value='" +
          A_DO +
          "' onClick='parent.XewMerkmale(this,\"" +
          idx +
          "\");'>",
      );
      writeln(
        "<INPUT type=button value='" +
          A_CONFIG_SYSTEM_SZA_ACTION +
          "' onClick='parent.XewAction(\"" +
          idx +
          "\");'>",
      );
      writeln("</FONT></TD>");
      writeln(
        "<TD>" + FONT_A_SMALL + "<INPUT type=button value='" + A_USE + "'>",
      );
      writeln(
        "<INPUT type=button value='" +
          A_DELETE +
          "' onClick='parent.a_doDelPay(\"" +
          idx +
          "\");'></FONT></TD></TR>",
      );
    }
    writeln("</TABLE></FORM>");
    writeln(ADMIN_BOT);
    close();
  } //with
}
function e_leave(i_obj, idx) {
  PAYCURR = i_obj.options[i_obj.selectedIndex].value;
  if (idx != "neu") {
    system["payment"][idx]["curr"] = PAYCURR;
    a_myEscape();
    E_go("data");
  }
}
function e_showDesc() {
  with (s.document.sys_x) {
    if (!na.value) {
      alert("A_CONFIG_SYSTEM_SZA_CHO");
      return;
    }
    idx = system["payment"].length;
    system["payment"][idx] = new Array();
    system["payment"][idx]["name"] = e_print_header(na.value);
    if (PAYCURR) system["payment"][idx]["curr"] = PAYCURR;
    b_checkFeatures(idx);
    B_setCom("-1");
  }
}
function e_print_logo(idx) {
  with (s.document.sys_x) {
    if (na.value) system["payment"][idx]["name"] = e_print_header(na.value);
    a_myEscape();
    E_go("data");
    B_setCom(idx);
  }
}
function b_checkFeatures(idx) {
  with (s.document.sys_x) {
    system["payment"][idx]["value"] = b_add_record(val.value);
    system["payment"][idx]["limit"] = b_add_record(lim.value);
    if (msg.value) system["payment"][idx]["msg"] = e_print_header(msg.value);
    if (system["payment"][idx]["msg"])
      system["payment"][idx]["msg"] = e_print_header(msg.value);
    if (act.checked) system["payment"][idx]["activ"] = "limit";
    else system["payment"][idx]["activ"] = "mwst";
    a_myEscape();
    E_go("data");
  }
}
function a_doDelPay(idx) {
  Xey("payment", idx);
  a_myEscape();
  E_go("data");
  B_setCom("-1");
}
function Xey(art, idx) {
  var sys_array = new Array();
  menge = 0;
  len = system[art].length;
  for (i in system[art]) {
    if (i < idx) menge = i;
    if (i == idx) i++;
    if (i > idx) menge = i - 1;
    if (menge == len - 1) break;
    sys_array[menge] = system[art][i];
  }
  system[art] = sys_array;
}
function XewMerkmale(i_obj, idx) {
  var na = "",
    titl = "";
  var ind = "neu";
  var btn = A_INSERT;
  if (i_obj != "-1" && idx != "-1") {
    if (i_obj.type == "button") {
      if (idx == "neu") {
        alert(A_CONFIG_SYSTEM_SZA_CHOICE);
        return;
      }
    } else if (i_obj.type == "select-multiple")
      ind = i_obj.options[i_obj.selectedIndex].value;
    else ind = i_obj;
    titl = " " + unescape(system["payment"][idx]["name"]);
  }
  if (ind != "neu") {
    na = unescape(system["payment"][idx][ind]);
    btn = A_USE;
  }
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln("<FORM name=sys_xmerk onSubmit='return false;'>");
    writeln("<TABLE width=560 border=0>");
    write("<TR><TD>" + FONT_A_BIG + A_NAME_ADMIN_SZA + "</FONT></TD>");
    if (ind != "neu") write("<TD>" + FONT_A_BIG + A_CHANGE + "</FONT></TD>");
    else write("<TD>" + FONT_A_BIG + A_INSERT + "</FONT></TD>");
    writeln(
      "<TD align=right>" +
        FONT_A_SMALL +
        "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#merkmale');\"",
    );
    writeln("value='" + A_NAME_HELP + "'></FONT></TD></TR>");
    write("<TR><TD colspan=3>" + FONT_A_BIG + titl + "</FONT></TD></TR>");
    writeln("<TR>\mwst<TD valign=top width=35% rowspan=12>");
    writeln(
      FONT_A +
        '<SELECT name="xs" onChange=\'parent.XewMerkmale(this,"' +
        idx +
        "\");' size=8>",
    );
    for (i in system["payment"][idx]) {
      if (
        i != "value" &&
        i != "limit" &&
        i != "activ" &&
        i != "msg" &&
        i != "name" &&
        i != "curr" &&
        i != "action" &&
        i != "enctype" &&
        i != "zin" &&
        i != "ziv" &&
        i != "zit" &&
        i != "eva"
      ) {
        write("<OPTION value='" + i + "'");
        if (i == ind) write("selected");
        writeln(">" + unescape(system["payment"][idx][i]));
      }
    }
    writeln("<OPTION value = 'neu'>" + A_CONFIG_SYSTEM_SZA_NM);
    writeln("</SELECT></TD></TR>");
    writeln(
      "<TR><TD>" +
        FONT_A +
        A_CONFIG_SYSTEM_SZA_MB +
        "</TD><TD>" +
        FONT_A +
        "<INPUT type=text name='na' size=15 value='" +
        na +
        "' onChange='parent.XexMerkmale(this,\"" +
        idx +
        '","' +
        ind +
        "\");'></TD></TR>",
    );
    writeln(
      "<TR><TD>" + FONT_A_SMALL + "<INPUT type=button value='" + btn + "'>",
    );
    if (ind != "neu")
      writeln(
        "<TD>" +
          FONT_A_SMALL +
          "<INPUT type=button value='" +
          A_DELETE +
          "' name='del' onClick='parent.XexMerkmale(this,\"" +
          idx +
          '","' +
          ind +
          "\");'></TD></TR>",
      );
    writeln(
      "<TD>" +
        FONT_A_SMALL +
        "<INPUT type=button value='" +
        A_LEAVE +
        "' onClick='parent.B_setCom(\"" +
        idx +
        "\");'></TD></TR>",
    );
    writeln("</TABLE>");
    writeln("</FORM>");
    writeln(ADMIN_BOT);
    close();
  } //with
}
function XexMerkmale(i_obj, idx, ind) {
  if (i_obj.type == "text") {
    if (i_obj.name == "na") {
      if (ind == "neu") {
        ind = system["payment"][idx].length;
        system["payment"][idx][ind] = new Array();
      }
      system["payment"][idx][ind] = i_obj.value;
    }
  }
  if (i_obj.type == "button" && i_obj.name == "del") {
    var sys_array = new Array();
    for (menge in system["payment"][idx]) {
      if (menge != ind) sys_array[menge] = system["payment"][idx][menge];
    }
    system["payment"][idx] = sys_array;
    ind = "-1";
  }
  E_go("refresh");
  XewMerkmale(ind, idx);
}
function e_set_freight() {
  var g = new Array();
  g[0] = "select";
  g[1] = "multiple-select";
  g[2] = "radio";
  g[3] = "checkbox";
  g[4] = "text";
  return g;
}
function e_set_areas(i_obj) {
  var summen = new Array();
  var na = (req = "");
  idx = "neu";
  ftype = "";
  summen = e_set_freight();
  if (i_obj != "-1") {
    if (i_obj.type == "select-multiple")
      idx = i_obj.options[i_obj.selectedIndex].value;
    else idx = i_obj;
  }
  if (idx != "neu") {
    na = unescape(system["features"][idx]["name"]);
    req = system["features"][idx]["required"];
    ftype = unescape(system["features"][idx]["ftype"]);
  }
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln("<FORM name=sys_fts onSubmit='return false;'>");
    writeln("<TABLE width=560 border=0>");
    write("<TR><TD>" + FONT_A_BIG + A_CONFIG_SYSTEM_SFT_NNA + "</FONT></TD>");
    if (idx == "neu") write("<TD>" + FONT_A_BIG + A_INSERT + "</FONT></TD>");
    else write("<TD>" + FONT_A_BIG + A_CHANGE + "</FONT></TD>");
    writeln("<TD align=right>" + FONT_A_SMALL);
    writeln(
      "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#A_merkmale');\"",
    );
    writeln("value='" + A_NAME_HELP + "'></FONT></TD></TR>");
    writeln("<TR>\mwst<TD valign=top rowspan=12>");
    writeln(
      FONT_A +
        "<SELECT name=\"fts\" onChange='parent.e_set_areas(this);' size=8>",
    );
    for (i in system["features"])
      if (system["features"][i]) {
        write("<OPTION value='" + i + "'");
        if (i == idx) write("selected");
        writeln(">" + unescape(system.features[i].name));
      }
    writeln("<OPTION value = 'neu'>" + A_CONFIG_SYSTEM_SFT_N);
    writeln("</SELECT></TD></TR>");
    write(
      "<TR><TD>" +
        FONT_A +
        A_CONFIG_SYSTEM_SFT_NA +
        "</FONT></TD><TD>" +
        FONT_A +
        "<INPUT type=text name='na' size=15 value='" +
        na +
        "'",
    );
    if (idx != "neu")
      write("onChange='parent.e_go_right(this,\"" + idx + "\");'");
    writeln("></FONT></TD></TR>");
    write(
      "<TR><TD>" +
        FONT_A +
        A_CONFIG_SYSTEM_SFT_REQ +
        "</FONT></TD><TD>" +
        FONT_A +
        "<INPUT type=checkbox name='req'",
    );
    if (idx != "neu") {
      write("onClick='parent.e_go_right(this,\"" + idx + "\");'");
      if (req == "limit") write("checked");
    }
    writeln("></TD></TR>");
    write("<TR><TD>" + FONT_A + '<SELECT name="ftstype"');
    if (idx != "neu")
      write("onChange='parent.e_go_right(this,\"" + idx + "\");'");
    writeln(">");
    for (i in summen) {
      write("<OPTION value='" + i + "'");
      if (summen[i] == ftype) write("selected");
      writeln(">" + summen[i]);
    }
    writeln("</SELECT></TD></TR>");
    if (idx == "neu")
      writeln(
        "<TR><TD>" +
          FONT_A_SMALL +
          "<INPUT type=button value='" +
          A_INSERT +
          "' onClick='parent.e_go_right(this,\"" +
          idx +
          "\");'></FONT>",
      );
    else {
      writeln(
        "<TR><TD>" +
          FONT_A_SMALL +
          "<INPUT type=button value='" +
          A_USE +
          "'></FONT>",
      );
      writeln(
        FONT_A_SMALL +
          "<INPUT type=button value='" +
          A_DELETE +
          "' onClick='parent.e_go_left();'></FONT></TD>",
      );
      writeln(
        "<TD>" +
          FONT_A_SMALL +
          "<INPUT type=button value='" +
          A_DO_MORE +
          "' onClick='parent.e_myEscape(\"" +
          idx +
          "\", this);'></FONT></TD></TR>",
      );
    }
    writeln("</TABLE></FORM>");
    writeln(ADMIN_BOT);
    close();
  } //with
}
function e_set_payment() {
  var idx = system.features.length;
  for (i = 0; i < system.features.length; i++)
    if (!system.features[i]) {
      idx = i;
      break;
    }
  return idx;
}
function e_go_right(i_obj, i) {
  var summen = new Array();
  summen = e_set_freight();
  if (i_obj.type == "text") {
    if (i_obj.value) system.features[i].name = escape(i_obj.value);
    else return;
  } else if (i_obj.type == "checkbox") {
    if (i_obj.checked) system.features[i].required = "limit";
    else system.features[i].required = "mwst";
  } else if (i_obj.type == "select-one") {
    idx = i_obj.options[i_obj.selectedIndex].value;
    for (menge in summen)
      if (menge == idx) system.features[i].ftype = summen[menge];
  } else if (i_obj.type == "button") {
    with (s.document.sys_fts) {
      if (!na.value) return;
      i = e_set_payment();
      system.features[i] = new Array();
      system.features[i].name = escape(na.value);
      if (req.checked) system.features[i].required = "limit";
      else system.features[i].required = "mwst";
      idx = ftstype.options[ftstype.selectedIndex].value;
      for (menge in summen)
        if (menge == idx) system.features[i].ftype = summen[menge];
    }
  }
  E_go("refresh");
  e_set_areas(i);
}
function e_go_left() {
  var pos,
    summen = new Array();
  with (s.document.sys_fts) {
    qu = "";
    pos = fts.options[fts.selectedIndex].value;
    system["features"][pos] = false;
    for (i in artikel) {
      if (artikel[i].p_feature == pos) artikel[i].p_feature = "-1";
      if (artikel[i][pos]) artikel[i][pos] = false;
      if (!artikel[i].features) continue;
      str = artikel[i].features;
      feat = str.substring(0, str.length - 1);
      fe = feat.split(",");
      str = "";
      for (fi in fe) {
        if (fe[fi] == pos) continue;
        else str += fe[fi] + ",";
      }
      if (str.length) artikel[i].features = str;
      else artikel[i].features = "";
    }
    E_go("refresh");
    e_set_areas("-1");
  }
}
function e_myEscape(ix, i_obj) {
  var idx = "neu",
    na = "";
  var A_FTS = unescape(system["features"][ix]["name"]);
  var A_CONFIG_SYSTEM_SFT_N = "Neue " + A_FTS + " eingeben";
  if (i_obj != "-1") {
    if (i_obj.type == "select-multiple")
      idx = i_obj.options[i_obj.selectedIndex].value;
    else if (i_obj.type != "button") idx = i_obj;
    if (idx == "neu") na = "";
    else na = unescape(system["features"][ix][idx]);
  }
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln("<FORM name=sys_morefts onSubmit='return false;'>");
    writeln("<TABLE width=560 border=0>");
    write("<TR><TD>" + FONT_A_BIG + A_FTS + "</FONT></TD>");
    if (idx == "neu") write("<TD>" + FONT_A_BIG + A_INSERT + "</FONT></TD>");
    else write("<TD>" + FONT_A_BIG + A_CHANGE + "</FONT></TD>");
    writeln(
      "<TD align=right>" +
        FONT_A_SMALL +
        "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#zahlungsweise');\"",
    );
    writeln("value='" + A_NAME_HELP + "'></FONT></TD></TR>");
    writeln("<TR>\mwst<TD valign=top rowspan=12>");
    writeln(
      FONT_A +
        '<SELECT name="fts" onChange=\'parent.e_myEscape("' +
        ix +
        "\",this);' size=8>",
    );
    for (i in system.features[ix]) {
      if (i == "name" || i == "required" || i == "ftype") continue;
      write("<OPTION value='" + i + "'");
      if (i == idx) write("selected");
      writeln(">" + unescape(system.features[ix][i]));
    }
    writeln("<OPTION value = 'neu'>" + A_CONFIG_SYSTEM_SFT_N);
    writeln("</SELECT></TD></TR>");
    writeln(
      "<TR><TD>" +
        FONT_A +
        unescape(system["features"][ix]["name"]) +
        ": " +
        "</FONT></TD><TD>" +
        FONT_A +
        "<INPUT type=text name='na' size=15 value='" +
        na +
        "'",
    );
    if (idx != "neu")
      writeln(
        "onChange='parent.e_doSearch(this,\"" + ix + '","' + idx + "\");'",
      );
    writeln("></FONT></TD></TR>");
    if (idx == "neu")
      writeln(
        "<TR><TD>" +
          FONT_A_SMALL +
          "<INPUT type=button value='" +
          A_INSERT +
          "' onClick='parent.e_doSearch(this,\"" +
          ix +
          '","' +
          idx +
          "\");'></FONT>",
      );
    else {
      writeln(
        "<TR><TD>" +
          FONT_A_SMALL +
          "<INPUT type=button value='" +
          A_USE +
          "'></FONT>",
      );
      writeln(
        FONT_A_SMALL +
          "<INPUT type=button value='" +
          A_DELETE +
          "' onClick='parent.e_search(\"" +
          ix +
          '","' +
          idx +
          "\");'></FONT>",
      );
    }
    writeln(
      "<TD>" +
        FONT_A_SMALL +
        "<INPUT type=button value='" +
        A_LEAVE +
        "' onClick='parent.e_set_areas(\"" +
        ix +
        "\");'></FONT></TD></TR>",
    );
    writeln("</TABLE></FORM>");
    writeln(ADMIN_BOT);
    close();
  } //with
}
function e_doSearch(i_obj, ix, idx) {
  with (s.document.sys_morefts) {
    if (!na.value) return;
    if (i_obj.type == "button") {
      idx = system["features"][ix].length;
      system["features"][ix][idx] = new Array();
    }
    system["features"][ix][idx] = escape(na.value);
    E_go("refresh");
    e_myEscape(ix, idx);
  }
}
function e_search(ix, idx) {
  var summen = new Array();
  na = system["features"][ix]["name"];
  req = system["features"][ix]["required"];
  ftype = system["features"][ix]["ftype"];
  for (i in system["features"][ix]) {
    if (i < idx) summen[i] = system["features"][ix][i];
    else summen[i] = system["features"][ix][i + 1];
    if (i + 1 == system["features"][ix].length - 1) break;
  }
  system["features"][ix] = summen;
  system["features"][ix]["required"] = req;
  system["features"][ix]["name"] = na;
  system["features"][ix]["ftype"] = ftype;
  E_go("refresh");
  e_myEscape(ix, "-1");
}
function B_setFeature(txt) {
  system["nbase"] = txt;
  nshow = txt;
  LEFT = false;
  B_setAmount("-1");
  E_go("refresh");
}
function B_setAmount(i_obj) {
  var na = "",
    idx = "neu";
  var btn = A_INSERT;
  if (i_obj != "-1") {
    if (i_obj.type == "select-multiple")
      idx = i_obj.options[i_obj.selectedIndex].value;
    else idx = i_obj;
  }
  if (idx != "neu") {
    na = system["mwst"][idx];
    btn = A_USE;
  }
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln("<FORM name=sys_ns onSubmit='return false;'>");
    writeln("<TABLE width=560 border=0>");
    writeln("<TR>\mwst<TD valign=top>" + FONT_A);
    writeln(
      "<INPUT type=radio name=mw value = 'brutto' onClick='parent.B_setFeature(this.value);'",
    );
    if (system["nbase"] == "brutto") write("checked");
    writeln(
      "><artikel HREF='javascript:parent.B_setFeature(\"brutto\");' onclick='sys_ns.mw[0].checked = true'>" +
        "Preise sind brutto" +
        "</artikel>",
    );
    writeln(
      "</TD><TD colspan=2>" +
        FONT_A +
        "<INPUT type=radio name=mw value = 'netto' onClick='parent.B_setFeature(this.value);'",
    );
    if (system["nbase"] == "netto") write("checked");
    writeln(
      "><artikel HREF='javascript:parent.B_setFeature(\"netto\");' onclick='sys_ns.mw[1].checked = true'>" +
        "Preise sind netto" +
        "</artikel></TD>",
    );
    write("<TR><TD>" + FONT_A_BIG + A_NAME_ADMIN_SMW + "</FONT></TD>");
    if (idx == "neu") write("<TD>" + FONT_A_BIG + A_INSERT + "</FONT></TD>");
    else write("<TD>" + FONT_A_BIG + A_CHANGE + "</FONT></TD>");
    writeln(
      "<TD align=right>" +
        FONT_A_SMALL +
        "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#mwst');\"",
    );
    writeln("value='" + A_NAME_HELP + "'></FONT></TD></TR>");
    writeln(
      "<TR><TD rowspan=7>" +
        FONT_A +
        "<SELECT name=\"mwst\" onChange='parent.B_setAmount(this);' size=6>",
    );
    for (i in system["mwst"]) {
      write("<OPTION value='" + i + "'");
      if (i == idx) write("selected");
      writeln(">" + system["mwst"][i]);
    }
    write("<OPTION value = 'neu'>" + A_CONFIG_SYSTEM_SMW_N);
    writeln("</SELECT></TD></TR>");
    writeln(
      "<TR><TD>" +
        FONT_A +
        A_CONFIG_SYSTEM_SLG_M +
        "</TD><TD>" +
        FONT_A +
        "<INPUT type=text name='na' size=7 maxlength=5 value='" +
        na +
        "' onChange='parent.B_sumPage(this,\"" +
        idx +
        "\");'>&nbsp;" +
        "%" +
        "</TD></TR>",
    );
    writeln("</TR>");
    writeln(
      "<TR><TD colspan=2 align=middle>" +
        FONT_A_SMALL +
        "<INPUT type=button value='" +
        btn +
        "'>",
    );
    if (idx != "neu")
      write(
        "<INPUT type=button value='" +
          A_DELETE +
          "' onClick='parent.B_sumPage(this,\"" +
          idx +
          "\");'>",
      );
    writeln("</TD></TR>");
    writeln("</TABLE></FORM>");
    writeln(ADMIN_BOT);
    close();
  } //with
}
function B_sumPage(i_obj, idx) {
  with (s.document.sys_ns) {
    if (!i_obj.value) return;
    if (i_obj.type == "text") {
      if (idx == "neu") {
        idx = system["mwst"].length;
        system["mwst"][idx] = new Array();
      }
      system["mwst"][idx] = i_obj.value;
    }
    if (i_obj.type == "button") {
      Xey("mwst", idx);
      idx = "-1";
    }
    E_go("refresh");
    B_setAmount(idx);
  } //of with
}
function B_delOrder(i_obj) {
  var re = (vali = "");
  VAL = "no";
  ((idx = "neu"), (btn = A_INSERT));
  if (i_obj != "-1") {
    if (i_obj.type == "select-multiple")
      idx = i_obj.options[i_obj.selectedIndex].value;
    else idx = i_obj;
  }
  if (idx != "neu") {
    na = unescape(system["address"][idx]["name"]);
    de = unescape(system["address"][idx]["default"]);
    if (de == "undefined") de = "";
    re = system["address"][idx]["required"];
    vali = unescape(system["address"][idx]["validation"]);
    btn = A_USE;
  }
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln("<FORM name=sys_Wes onSubmit='return false;'>");
    writeln("<TABLE width=560 border=0>");
    write("<TR><TD>" + FONT_A_BIG + A_NAME_ADMIN_A + "</FONT></TD>");
    if (idx == "neu") tmp = A_INSERT;
    else tmp = A_CHANGE;
    write("<TD>" + FONT_A_BIG + tmp + "</FONT></TD>");
    writeln(
      "<TD align=right>" +
        FONT_A_SMALL +
        "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#kundenD');\"",
    );
    writeln("value='" + A_NAME_HELP + "'></FONT></TD></TR>");
    writeln("<TR>\mwst<TD valign=top width=35% rowspan=12>");
    writeln(
      FONT_A +
        "<SELECT name=\"Wes\" onChange='parent.B_delOrder(this);' size=8>",
    );
    for (i in system["address"]) {
      write("<OPTION value='" + i + "'");
      if (i == idx) write("selected");
      writeln(">" + unescape(system["address"][i]["name"]));
    }
    write("<OPTION value = 'neu'>" + A_CONFIG_SYSTEM_SA_N);
    writeln("</SELECT></TD></TR>");
    if (idx == "neu") {
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SA_NA +
          "</TD><TD>" +
          FONT_A +
          "<INPUT type=text name='na' size=15 value=''></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SA_DE +
          "</TD><TD>" +
          FONT_A +
          "<INPUT type=text name='de' size=10 value=''></TD></TR>",
      );
      write(
        "<TR><TD colspan=2>" +
          FONT_A +
          "<INPUT type=checkbox name='req'>" +
          FONT_A +
          A_CONFIG_SYSTEM_SA_RE +
          "</TD></TR>",
      );
    } else {
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SA_NA +
          "</TD><TD>" +
          FONT_A +
          "<INPUT type=text name='na' size=15 value='" +
          unescape(system["address"][idx]["name"]) +
          "' onChange='parent.B_getOrder(\"" +
          idx +
          "\");'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SA_DE +
          "</TD><TD>" +
          FONT_A +
          "<INPUT type=text name='de' size=10 value='" +
          de +
          "' onChange='parent.B_getOrder(\"" +
          idx +
          "\");'></TD></TR>",
      );
      write(
        "<TR><TD colspan=2>" +
          FONT_A +
          "<INPUT type=checkbox name='req' onClick='parent.Xgt(\"" +
          idx +
          "\");'",
      );
      if (re == "yes") write("checked");
      writeln(">" + FONT_A + A_CONFIG_SYSTEM_SA_RE + "</TD></TR>");
    }
    writeln("<TR><TD>" + FONT_A + A_CONFIG_SYSTEM_SA_VALI + "</FONT></TD>");
    writeln(
      "<TD>" +
        FONT_A +
        '<SELECT name="valid" onChange=\'parent.a_save_header(this,"' +
        idx +
        "\");'>",
    );
    writeln("<OPTION value='help'>" + A_CONFIG_SYSTEM_SA_NO + "");
    write("<OPTION value='tel'");
    if (vali == "tel") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_SA_TEL + "");
    write("<OPTION value='plz'");
    if (vali == "plz") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_SA_PLZ + "");
    write("<OPTION value='email'");
    if (vali == "email") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_SA_MAIL + "");
    write("<OPTION value='url'");
    if (vali == "url") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_SA_URL + "");
    writeln("</SELECT></FONT></TD></TR>");
    if (idx == "neu")
      writeln(
        "<TR><TD colspan=2 align=middle>" +
          FONT_A_SMALL +
          "<INPUT type=button value='" +
          A_INSERT +
          "'onClick='parent.Xgs();'>",
      );
    else {
      writeln(
        "<TR><TD colspan=2 align=middle>" +
          FONT_A_SMALL +
          "<INPUT type=button value='" +
          A_USE +
          "'>",
      );
      write(
        "<INPUT type=button value='" +
          A_DELETE +
          "' onClick='parent.Xgq(\"" +
          idx +
          "\");'>",
      );
    }
    writeln("</TD></TR></TABLE></FORM>");
    writeln(ADMIN_BOT);
    close();
  }
}
function B_getOrder(idx) {
  with (s.document.sys_Wes) {
    if (na.value) {
      system["address"][idx]["name"] = e_print_header(na.value);
      system["address"][idx]["default"] = e_print_header(de.value);
      E_go("data");
    } else alert(A_CONFIG_SYSTEM_SA_ADD);
  }
}
function Xgt(idx) {
  if (idx == "neu") return;
  if (system["address"][idx]["required"] == "no")
    system["address"][idx]["required"] = "yes";
  else system["address"][idx]["required"] = "no";
  E_go("data");
}
function Xgs() {
  var idx = system["address"].length;
  with (s.document.sys_Wes) {
    system["address"][idx] = new Array();
    system["address"][idx]["validation"] = VAL;
    if (req.checked) system["address"][idx]["required"] = "yes";
    else system["address"][idx]["required"] = "no";
    B_getOrder(idx);
    B_delOrder("-1");
  }
}
function a_save_header(i_obj, idx) {
  VAL = i_obj.options[i_obj.selectedIndex].value;
  if (idx != "neu") {
    system["address"][idx]["validation"] = e_print_header(VAL);
    E_go("data");
  }
}
function Xgq(idx) {
  Xey("address", idx);
  E_go("data");
  B_delOrder("-1");
}
function B_storeOrder(i_obj) {
  var hash = "",
    factor = "",
    jfactor = "";
  var idx = "neu",
    btn = A_INSERT;
  if (i_obj != "-1") {
    if (i_obj.type == "select-multiple")
      idx = i_obj.options[i_obj.selectedIndex].value;
    else idx = i_obj;
  }
  if (idx != "neu") {
    if (idx != "base") {
      hash = idx;
      if (a_kunde(idx) == "false") factor = Xfj(system["currency"][idx]);
      else {
        if (idx != "EUR") jfactor = Xfj(system["ewu"][idx]["euro"]);
        else if (EUROLAND == "true") jfactor = Xfj(system["ewu"][CURR]["euro"]);
        else factor = Xfj(system["currency"][idx]);
      }
    }
    btn = A_USE;
  }
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln("<FORM name=sys_currencies onSubmit='return false;'>");
    writeln("<TABLE width=560 border=0>");
    write("<TR><TD>" + FONT_A_BIG + A_NAME_ADMIN_W + "</FONT></TD>");
    if (idx == "neu") write("<TD>" + FONT_A_BIG + A_INSERT + "</FONT></TD>");
    else write("<TD>" + FONT_A_BIG + A_CHANGE + "</FONT></TD>");
    writeln(
      "<TD align=right>" +
        FONT_A_SMALL +
        "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#waehrungen');\"",
    );
    writeln("value='" + A_NAME_HELP + "'></FONT></TD></TR>");
    writeln("<TR>\mwst<TD valign=top width=35% rowspan=12>" + FONT_A);
    writeln(
      "<INPUT type=radio name=ewu value ='ewu' onClick='parent.B_init(this.value);'",
    );
    if (EUROLAND == "true") write("checked");
    writeln(
      "><artikel HREF='javascript:parent.B_init(\"ewu\");' onclick='ewu[0].checked = true'>" +
        A_CONFIG_SYSTEM_SW_EUY +
        "</artikel>",
    );
    writeln(
      "<BR><INPUT type=radio name=ewu value = 'no_T' onClick='parent.B_init(this.value);'",
    );
    if (EUROLAND == "false") write("checked");
    writeln(
      "><artikel HREF='javascript:parent.B_init(\"no_T\");' onclick='ewu[1].checked = true'>" +
        A_CONFIG_SYSTEM_SW_EUN +
        "</artikel><BR>",
    );
    writeln(
      "<SELECT name=\"currencies\" onChange='parent.B_storeOrder(this);' size=8>",
    );
    a_doDeleteCurrency();
    if (EUROLAND == "true") {
      writeln("<OPTION value='base'>" + A_CONFIG_SYSTEM_SW_H + CURR + "<BR>");
      for (menge in system["ewu"])
        if (system["ewu"][menge]["use"] == "limit") {
          write("<OPTION value='" + menge + "'");
          if (menge == idx) write("selected");
          writeln(a_address("ewu", menge));
        }
    } else writeln("<OPTION value='base'>" + A_CONFIG_SYSTEM_SW_H + CURR);
    for (preisa in system["currency"]) {
      if (preisa == CURR || preisa == "base") continue;
      write("<OPTION value='" + preisa + "'");
      if (preisa == idx) write("selected");
      writeln(a_address("currency", preisa));
    }
    write("<OPTION value = 'neu'>" + A_CONFIG_SYSTEM_SW_N);
    writeln("</SELECT></TD></TR>");
    if (EUROLAND == "true") {
      if (idx == "base") {
        write(
          "<TR><TD>" + FONT_A + A_CONFIG_SYSTEM_SW_H + "</TD><TD>" + FONT_A,
        );
        writeln(
          "<SELECT name=\"eurocurr\" onChange='parent.b_getPageToShow(this);'>",
        );
        for (i in system["ewu"]) {
          write("<OPTION value='" + i + "'");
          if (system["currency"]["base"] == i) write("selected");
          writeln(">" + system["ewu"][i]["name"]);
        }
        writeln("</SELECT></TD></TR>");
        writeln(
          "<TR><TD colspan=2 align=middle>" +
            FONT_A_SMALL +
            "<INPUT type=button value='" +
            A_CHANGE +
            "'>",
        );
        writeln("</TD></TR>");
      } else {
        if (idx != "neu" && a_kunde(idx) == "true") {
          if (idx == "EUR") {
            writeln(
              "<TR><TD>" +
                FONT_A +
                A_CONFIG_SYSTEM_SW_H +
                "</TD><TD>" +
                FONT_A +
                CURR +
                "</TD></TR>",
            );
            writeln(
              "<TR><TD>" +
                FONT_A +
                A_CONFIG_SYSTEM_SW_U +
                "</TD><TD>" +
                FONT_A +
                A_CONFIG_SYSTEM_SW_EUEIN +
                system["ewu"][CURR]["euro"] +
                "&nbsp;" +
                CURR +
                "</TD></TR>",
            );
          } else {
            writeln(
              "<TR><TD>" +
                FONT_A +
                A_CONFIG_SYSTEM_SW_NA +
                "</TD><TD>" +
                FONT_A +
                system["ewu"][idx]["name"] +
                "</TD></TR>",
            );
            writeln(
              "<TR><TD>" +
                FONT_A +
                A_CONFIG_SYSTEM_SW_U +
                "</TD><TD>" +
                FONT_A +
                A_CONFIG_SYSTEM_SW_EUEIN +
                jfactor +
                "&nbsp;" +
                idx +
                "</TD></TR>",
            );
          }
          writeln("</TR><TR><TD>");
          writeln(
            "<TR><TD colspan=2 align=middle>" +
              FONT_A_SMALL +
              "<INPUT type=button value='" +
              A_CONFIG_SYSTEM_SW_EUB +
              "' onClick='parent.Xfk(-1);'>",
          );
        } else {
          writeln(
            "<TR><TD>" +
              FONT_A +
              A_CONFIG_SYSTEM_SW_NA +
              "</TD><TD>" +
              FONT_A +
              "<INPUT type=text name='hash' size=7 value='" +
              hash +
              "' onchange='parent.Xfn(this,\"" +
              idx +
              "\");'></TD></TR>",
          );
          writeln(
            "<TR><TD>" +
              FONT_A +
              A_CONFIG_SYSTEM_SW_U +
              A_CONFIG_SYSTEM_SW_EUEIN +
              "</TD><TD>" +
              FONT_A +
              "<INPUT type=text name='factor' size=7 value='" +
              factor +
              "' onchange='parent.Xfn(this,\"" +
              idx +
              "\");'></TD></TR>",
          );
          writeln(
            "</TR><TR><TD colspan=2 align=middle>" +
              FONT_A_SMALL +
              "<INPUT type=button value='" +
              btn +
              "'>",
          );
          if (idx == "neu")
            writeln(
              "<TR><TD colspan=2 align=middle>" +
                FONT_A_SMALL +
                "<INPUT type=button value='" +
                A_CONFIG_SYSTEM_SW_EUB +
                "' onClick='parent.Xfk(-1);'>",
            );
        }
      }
    }
    if (EUROLAND == "false") {
      if (idx == "base") {
        writeln(
          "<TR><TD>" +
            FONT_A +
            A_CONFIG_SYSTEM_SW_H +
            "</TD><TD>" +
            FONT_A +
            "<INPUT type=text name='base' size=7 value='" +
            CURR +
            "' onChange='parent.b_getPageToShow(this);'></TD></TR>",
        );
        writeln(
          "<TR><TD colspan=2 align=middle>" +
            FONT_A_SMALL +
            "<INPUT type=button value='" +
            A_CHANGE +
            "'>",
        );
        writeln("</TD></TR>");
      } else {
        writeln(
          "<TR><TD>" +
            FONT_A +
            A_CONFIG_SYSTEM_SW_NA +
            "</TD><TD>" +
            FONT_A +
            "<INPUT type=text name='hash' size=7 value='" +
            hash +
            "' onchange='parent.Xfn(this,\"" +
            idx +
            "\");'></TD></TR>",
        );
        writeln(
          "<TR><TD>" +
            FONT_A +
            A_CONFIG_SYSTEM_SW_U +
            "1 " +
            CURR +
            " = " +
            "</TD><TD>" +
            FONT_A +
            "<INPUT type=text name='factor' size=7 value='" +
            factor +
            "' onchange='parent.Xfn(this,\"" +
            idx +
            "\");'></TD></TR>",
        );
        writeln(
          "</TR><TR><TD colspan=2 align=middle>" +
            FONT_A_SMALL +
            "<INPUT type=button value='" +
            btn +
            "'>",
        );
      }
    }
    if (idx != -1 && idx != "neu" && idx != "base")
      writeln(
        "<TD>" +
          FONT_A_SMALL +
          "<INPUT type=button value='" +
          A_DELETE +
          "' onClick='parent.Xfl(\"" +
          idx +
          "\");'>",
      );
    writeln("</TD></TR>");
    writeln("</TABLE></FORM>");
    writeln(ADMIN_BOT);
    close();
  } //with
}
function B_init(i_obj) {
  if (i_obj == "ewu") {
    if (EUROLAND == "false") {
      EUROLAND = "true";
      system["currency"]["base"] = "EUR";
    } else return;
  } else {
    if (EUROLAND == "true") EUROLAND = "false";
    else return;
  }
  system["EUROLAND"] = EUROLAND;
  a_doDeleteCurrency();
  LEFT = false;
  E_go("refresh");
  B_storeOrder("-1");
}
function b_getPageToShow(i_obj) {
  if (i_obj.name == "base") system["currency"]["base"] = i_obj.value;
  if (i_obj.type == "select-one") {
    idx = i_obj.options[i_obj.selectedIndex].value;
    system["currency"]["base"] = idx;
  }
  a_doDeleteCurrency();
  LEFT = false;
  E_go("refresh");
  B_storeOrder("base");
}
function Xfj(i_obj) {
  var wert = 0;
  zw = i_obj;
  punkt = zw.indexOf(".");
  if (punkt == "-1") wert = zw;
  else {
    vk = zw.substring(0, punkt);
    if (vk == "") vk = "0";
    nk = zw.substring(punkt + 1, zw.length);
    wert = vk + "," + nk;
  }
  return wert;
}
function Xfk(i_obj) {
  var idx = "",
    hash = "",
    factor = "";
  if (i_obj != "-1") {
    if (i_obj.type == "select-multiple") {
      idx = i_obj.options[i_obj.selectedIndex].value;
      if (idx != "EUR") {
        hash = system["ewu"][idx]["name"];
        factor = Xfj(system["ewu"][idx]["euro"]);
      } else {
        hash = system["ewu"][CURR]["name"];
        factor = Xfj(system["ewu"][CURR]["euro"]);
      }
    }
  }
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln("<FORM name=sys_eurocurr onSubmit='return false;'>");
    writeln("<TABLE width=560 border=0>");
    write("<TR><TD>" + FONT_A_BIG + A_CONFIG_SYSTEM_SW_EUNA + "</FONT></TD>");
    write("<TD>" + FONT_A_BIG + A_INSERT + "</FONT></TD>");
    writeln(
      "<TD align=right>" +
        FONT_A +
        "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#waehrungen');\"",
    );
    writeln("value='" + A_NAME_HELP + "'></FONT></TD></TR>");
    writeln("<TR><TD rowspan=5>" + FONT_A);
    writeln("<SELECT name=\"eurocurr\" size=11 onChange='parent.Xfk(this);'>");
    for (i in system["ewu"]) {
      if (system["ewu"][i]["use"] == "mwst") {
        write("<OPTION value='" + i + "'");
        if (i == idx) write("selected");
        writeln(">" + system["ewu"][i]["name"]);
      }
    }
    writeln("</SELECT></TD></TR>");
    if (idx == "EUR") {
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SW_H +
          "</TD><TD>" +
          FONT_A +
          hash +
          "</TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SW_U +
          "</TD><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SW_EUEIN +
          factor +
          "&nbsp;" +
          CURR +
          "</TD></TR>",
      );
    } else {
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SW_NA +
          "</TD><TD>" +
          FONT_A +
          hash +
          "</TD></TR>",
      );
      if (idx)
        writeln(
          "<TR><TD>" +
            FONT_A +
            A_CONFIG_SYSTEM_SW_U +
            "</TD><TD>" +
            FONT_A +
            A_CONFIG_SYSTEM_SW_EUEIN +
            factor +
            "&nbsp;" +
            idx +
            "</TD></TR>",
        );
      else
        writeln(
          "<TR><TD>" +
            FONT_A +
            A_CONFIG_SYSTEM_SW_U +
            "</TD><TD>" +
            FONT_A +
            A_CONFIG_SYSTEM_SW_EUEIN +
            "</TD></TR>",
        );
    }
    writeln(
      "<TR><TD colspan=2 align=middle>" +
        FONT_A_SMALL +
        "<INPUT type=button value='" +
        A_INSERT +
        "' onClick='parent.Xfm(\"" +
        idx +
        "\");'></TD>",
    );
    writeln(
      "<TD>" +
        FONT_A_SMALL +
        "<INPUT type=button value='" +
        A_LEAVE +
        "' onClick='parent.B_storeOrder(-1);'></TD></TR>",
    );
    writeln("</TABLE></FORM>");
    writeln(ADMIN_BOT);
    close();
  } //with
}
function Xfl(idx) {
  if (idx == SELECTED_CURRENCY) SELECTED_CURRENCY = CURR;
  if (a_kunde(idx) == "true") system["ewu"][idx]["use"] = "mwst";
  else {
    var sys_array = new Array();
    for (i in system["currency"])
      if (i != idx) sys_array[i] = system["currency"][i];
    system["currency"] = sys_array;
  }
  a_doDeleteCurrency();
  LEFT = false;
  E_go("refresh");
  B_storeOrder("-1");
}
function Xfm(idx) {
  system["ewu"][idx]["use"] = "limit";
  LEFT = false;
  E_go("refresh");
  Xfk("-1");
}
function Xfn(i_obj, idx) {
  with (s.document.sys_currencies) {
    if (!i_obj) return;
    if (i_obj.type == "text") {
      if (i_obj.name == "hash" || i_obj.name == "factor") {
        if (hash.value == "" || factor.value == "") return;
        zw = factor.value;
        if (isNaN(zw)) {
          komma = zw.indexOf(",");
          if (komma == "-1") {
            alert(A_CONFIG_SYSTEM_SW_EUERR);
            return;
          } else {
            vk = zw.substring(0, komma);
            nk = zw.substring(komma + 1, zw.length);
            zw = vk + "." + nk;
          }
        }
        if (idx == "neu") {
          idx = hash.value;
          system["currency"][idx] = new Array();
          system["currency"][idx] = zw;
        } else {
          var sys_array = new Array();
          for (i in system["currency"]) {
            if (i == idx) sys_array[hash.value] = zw;
            else sys_array[i] = system["currency"][i];
          }
          system["currency"] = sys_array;
          idx = hash.value;
        }
      }
    }
    LEFT = false;
    E_go("refresh");
    B_storeOrder(idx);
  }
}
function Xfo(i_obj) {
  with (s.document.sysedit) {
    if (i_obj.type == "textarea") {
      for (i in htm) {
        if (htm[i].checked) system[htm[i].value] = e_print_header(i_obj.value);
      }
    } else if (i_obj.type == "radio")
      htmltext.value = unescape(system[i_obj.value]);
    else htmltext.value = unescape(system[i_obj]);
    E_init_C();
    LEFT = false;
    E_go("refresh");
  } // of with
}
function Xfp(i_obj) {
  if (ART == "areas") {
    A_CHOICE = A_NAME_ADMIN_LG;
    auswahlhinzu = A_CONFIG_SYSTEM_SLG_N;
    txtna = A_CONFIG_SYSTEM_SLG_NA;
    txtval = A_CONFIG_SYSTEM_SFR_Z;
    txtlim = A_CONFIG_SYSTEM_SFR_ZF;
    txtn = A_CONFIG_SYSTEM_SLG_M;
    helptmp = "liefergebiete";
  }
  if (ART == "freight") {
    A_CHOICE = A_NAME_ADMIN_FR;
    auswahlhinzu = A_CONFIG_SYSTEM_SFR_N;
    txtna = A_CONFIG_SYSTEM_SFR_NA;
    txtval = A_CONFIG_SYSTEM_SFR_Z;
    txtlim = A_CONFIG_SYSTEM_SFR_ZF;
    txtn = A_CONFIG_SYSTEM_SLG_M;
    helptmp = "versandarten";
  }
  if (i_obj == "-1") idx = "neu";
  else if (i_obj.type == "select-multiple")
    idx = i_obj.options[i_obj.selectedIndex].value;
  else idx = i_obj;
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln("<FORM name=sysconfig onSubmit='return false;'>");
    writeln("<TABLE width=560 border=0>");
    write("<TR><TD>" + FONT_A_BIG + A_CHOICE + "</FONT></TD>");
    if (idx == "neu") btn = A_INSERT;
    else btn = A_CHANGE;
    write("<TD>" + FONT_A_BIG + btn + "</FONT></TD>");
    writeln(
      "<TD align=right>" +
        FONT_A_SMALL +
        "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#" +
        helptmp +
        "');\"",
    );
    writeln("value='" + A_NAME_HELP + "'></FONT></TD></TR>");
    writeln("<TR>\mwst<TD valign=top width=35% rowspan=12>");
    writeln(
      FONT_A +
        "<SELECT name=\"selectart\" onChange='parent.Xfp(this);' size=8>",
    );
    for (i in system[ART]) {
      write("<OPTION value='" + i + "'");
      if (i == idx) write("selected");
      writeln(">" + unescape(system[ART][i]["name"]));
    }
    write("<OPTION value = 'neu'>" + auswahlhinzu);
    writeln("</SELECT></TD></TR>");
    if (idx == "neu") {
      writeln(
        "<TR><TD>" +
          FONT_A +
          txtna +
          "</TD><TD>" +
          FONT_A +
          "<INPUT type=text name='na' size=15 value=''></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          txtval +
          "</TD><TD>" +
          FONT_A +
          "<INPUT type=text name='val' size=10 value=''>&nbsp;" +
          CURR +
          "</TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          txtlim +
          "</TD><TD>" +
          FONT_A +
          "<INPUT type=text name='lim' size=10 value=''>&nbsp;" +
          CURR +
          "</TD></TR>",
      );
      if (ART == "areas")
        writeln(
          "<TR><TD>" +
            FONT_A +
            txtn +
            "</TD><TD>" +
            FONT_A +
            "<INPUT type=checkbox name='mwst' size=10 value=''></TD></TR>",
        );
      writeln(
        "<TR><TD colspan=2 align=middle>" +
          FONT_A_SMALL +
          "<INPUT type=button value='" +
          A_INSERT +
          "' onClick='parent.Xfq(this,\"" +
          idx +
          "\");'>",
      );
    } else {
      writeln(
        "<TR><TD>" +
          FONT_A +
          txtna +
          "</TD><TD>" +
          FONT_A +
          "<INPUT type=text name='na' size=15 value='" +
          unescape(system[ART][idx]["name"]) +
          "' onChange='parent.Xfq(this,\"" +
          idx +
          "\");'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          txtval +
          "</TD><TD>" +
          FONT_A +
          "<INPUT type=text name='val' size=10 value='" +
          a_pment_action(system[ART][idx]["value"]) +
          "' onChange='parent.Xfq(this,\"" +
          idx +
          "\");'>&nbsp;" +
          CURR +
          "</TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          txtlim +
          "</TD><TD>" +
          FONT_A +
          "<INPUT type=text name='lim' size=10 value='" +
          a_pment_action(system[ART][idx]["limit"]) +
          "' onChange='parent.Xfq(this,\"" +
          idx +
          "\");'>&nbsp;" +
          CURR +
          "</TD></TR>",
      );
      if (ART == "areas") {
        write(
          "<TR><TD>" +
            FONT_A +
            txtn +
            "</TD><TD>" +
            FONT_A +
            "<INPUT type=checkbox name='mwst' size=10 value='" +
            system["areas"][idx]["mwst"] +
            "' onClick='parent.Xfq(this,\"" +
            idx +
            "\");'",
        );
        if (system["areas"][idx]["mwst"] == "yes") write("checked");
        writeln("></TD></TR>");
      }
      writeln(
        "<TR><TD colspan=2 align=middle>" +
          FONT_A_SMALL +
          "<INPUT type=button value='" +
          A_USE +
          "'>",
      );
      writeln(
        "<INPUT type=button value='" +
          A_DELETE +
          "' onClick='parent.Xfq(this,\"" +
          idx +
          "\");'>",
      );
    }
    writeln("</FONT></TD></TR></TABLE></FORM>");
    writeln(ADMIN_BOT);
    close();
  } //of with
}
function a_doEditArt(idx) {
  with (s.document.sysconfig) {
    if (idx == system[ART].length) system[ART][idx] = new Array();
    system[ART][idx]["name"] = e_print_header(na.value);
    system[ART][idx]["value"] = b_add_record(val.value);
    system[ART][idx]["limit"] = b_add_record(lim.value);
    if (ART == "areas") {
      if (mwst.checked == "true") system[ART][idx]["mwst"] = "yes";
      else system[ART][idx]["mwst"] = "no";
    }
  }
}
function Xfq(i_obj, idx) {
  if (!i_obj.value) {
    if (ART == "freight") alert(A_CONFIG_SYSTEM_SFR_B);
    else alert(A_CONFIG_SYSTEM_SLG_B);
    return;
  }
  with (s.document.sysconfig) {
    if (i_obj.type == "button") {
      if (idx == "neu") a_doEditArt(system[ART].length);
      else Xey(ART, idx);
    }
    if (i_obj.type == "text") a_doEditArt(idx);
    if (i_obj.type == "checkbox") {
      if (system[ART][idx]["mwst"] == "no") system[ART][idx]["mwst"] = "yes";
      else system[ART][idx]["mwst"] = "no";
    }
    a_myEscape();
    E_go("data");
    if (i_obj.type == "button") Xfp("-1");
    if (i_obj.name == "na") Xfp(idx);
  }
}
function XewAction(pix) {
  var action = "" + unescape(system["action"]);
  var enc = "" + unescape(system["enctype"]);
  var zit = "";
  var zin = "";
  var ziv = "";
  var eva = "";
  if (!system["payment"][pix]) {
    alert("There is no payment idx = " + pix);
    return;
  }
  if (system["payment"][pix]["action"])
    action = unescape(system["payment"][pix]["action"]);
  if (system["payment"][pix]["enctype"])
    enc = unescape(system["payment"][pix]["enctype"]);
  if (system["payment"][pix]["zit"])
    zit = unescape(system["payment"][pix]["zit"]);
  if (system["payment"][pix]["zin"])
    zin = unescape(system["payment"][pix]["zin"]);
  if (system["payment"][pix]["ziv"])
    ziv = unescape(system["payment"][pix]["ziv"]);
  if (system["payment"][pix]["eva"])
    eva = unescape(system["payment"][pix]["eva"]);
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln("<FORM name=sysedit>");
    writeln("<TABLE width=560>");
    writeln(
      "<TR><TD colspan=3>" + FONT_A_BIG + A_CONFIG_SYSTEM_SL + "</FONT></TD>",
    );
    writeln(
      "<TD align=right>" +
        FONT_A_SMALL +
        "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#abschicken_pay');\"",
    );
    writeln("value='" + A_NAME_HELP + "'></FONT></TD></TR>");
    writeln("<TR><TD>" + FONT_A + A_CONFIG_SYSTEM_SL_A + "</TD><TD>");
    writeln(
      "<INPUT type=text name='action' size=40 onChange='parent.e_printFeaturesText(this," +
        pix +
        ");'></TD></TR>",
    );
    writeln("<TR><TD>" + FONT_A + A_CONFIG_SYSTEM_SL_E + "</TD><TD>" + FONT_A);
    write("<SELECT name='enctype' ");
    writeln(" onChange='parent.e_printFeaturesText(this," + pix + ");'>");
    write("<OPTION value='text/plain'");
    if ("text/plain" == enc) write(" selected ");
    writeln(">" + A_CONFIG_SYSTEM_SL_MAIL);
    write("<OPTION value='application/payment-www-form-urlencoded'");
    if ("application/payment-www-form-urlencoded" == enc) write(" selected ");
    writeln(">" + A_CONFIG_SYSTEM_SL_CGI);
    write("<OPTION value='enter'>");
    writeln(A_CONFIG_SYSTEM_SL_OWN);
    write("</SELECT></TD></TR>");
    writeln("<TR><TD>" + FONT_A + A_CONFIG_SYSTEM_SL_ZI + "</TD><TD>");
    writeln(
      FONT_A +
        A_CONFIG_SYSTEM_SL_ZIT +
        "&nbsp;&nbsp;<INPUT type=text name='zit' size=15 onChange='parent.e_printFeaturesText(this," +
        pix +
        ");'><BR>&nbsp;&nbsp;",
    );
    writeln(
      A_CONFIG_SYSTEM_SL_ZIN +
        " &nbsp;&nbsp;<INPUT type=text name='zin' size=15 onChange='parent.e_printFeaturesText(this," +
        pix +
        ");'><BR>",
    );
    writeln(
      A_CONFIG_SYSTEM_SL_ZIV +
        "&nbsp;<INPUT type=text name='ziv' size=35 onChange='parent.e_printFeaturesText(this," +
        pix +
        ");'></TD></TR>",
    );
    writeln(
      "<TR><TD colspan=4>" +
        FONT_A +
        A_CONFIG_SYSTEM_SL_EVA +
        "<INPUT type=text size=40 name=eva onChange='parent.e_printFeaturesText(this," +
        pix +
        ");'></TD></TR>",
    );
    writeln(
      "<TR><TD colspan=2>" +
        FONT_A +
        "<INPUT type=button value='" +
        A_USE +
        "'></TD>",
    );
    writeln(
      "<TD colspan=2>" +
        FONT_A_SMALL +
        "<INPUT type=button value='" +
        A_LEAVE +
        "' onClick='parent.B_setCom(\"" +
        pix +
        "\");'></TD></TR>",
    );
    writeln("</TABLE>");
    writeln("</FORM>");
    writeln(ADMIN_BOT);
    close();
  } //of with
  s.document.sysedit.action.value = action;
  s.document.sysedit.zit.value = zit;
  s.document.sysedit.zin.value = zin;
  s.document.sysedit.ziv.value = ziv;
  s.document.sysedit.eva.value = eva;
}
function e_printFeaturesText(io, pix) {
  if (!system["payment"][pix]) {
    alert("There is no payment idx = " + pix);
    return;
  }
  if (io.type == "text")
    system["payment"][pix][io.name] = e_print_header(io.value);
  else if (io.type == "select-one") {
    var wert = "" + io.options[io.selectedIndex].value;
    if (wert == "enter") {
      wert = prompt(A_CONFIG_SYSTEM_SL_ASK, "");
      if (wert.length == 0) return;
    }
    system["payment"][pix][io.name] = e_print_header(wert);
  } else if (io.type == "checkbox") {
    if (io.checked) system["payment"][pix][io.name] = "on";
    else system["payment"][pix][io.name] = "off";
  } else if (io.type == "textarea")
    system["payment"][pix][io.name] = e_print_header(io.value);
  else alert("NOT DEFINED! " + io.type);
  a_myEscape();
  E_go("refresh");
}
function Xfr(i_ob, color) {
  var fnt_font = "",
    fnt_size = "",
    fnt_color = "",
    new_font = "";
  with (s.document.sysfonts) {
    fnt_name = fonts[fonts.selectedIndex].value;
    fnt = unescape(system[fnt_name]);
    first = fnt.indexOf('"') + 1;
    fnt_font = fnt.substring(first, fnt.indexOf('"', first));
    second = fnt.indexOf('"', first + fnt_font.length + 1) + 1;
    fnt_size =
      "size%3D%22" + fnt.substring(second, fnt.indexOf('"', second)) + "%22";
    fnt_color = fnt.substring(fnt.indexOf("color"), fnt.lastIndexOf(">"));
    if (color.length) {
      fnt_color = "color=" + escape(color);
    } else if (i_ob.name == "fnt_face") {
      fnt_font = i_ob.value;
    } else if (i_ob.name == "gr") {
      var val = i_ob.options[i_ob.selectedIndex].value;
      if (val.length) fnt_size = "size=%22" + val + "%22";
      else fnt_size = "size=%22%22";
    }
  }
  system[fnt_name] =
    "<FONT%20face%3D%22" +
    fnt_font +
    "%22%20" +
    fnt_size +
    "%20" +
    fnt_color +
    ">";
  a_edit_border();
  LEFT = false;
  E_go("refresh");
}
function Xfs(i_obj) {
  var fnt_name,
    fnt_face = "";
  if (i_obj != "-1")
    if (i_obj.type == "select-multiple") {
      fnt_name = i_obj.options[i_obj.selectedIndex].value;
      fnt_face = unescape(system[fnt_name]);
    }
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln("<FORM name=sysfonts onSubmit='return false;'>");
    writeln("<TABLE width=560 border=0>");
    write("<TR><TD>" + FONT_A_BIG + A_NAME_ADMIN_F + "</FONT></TD>");
    write("<TD>" + FONT_A_BIG + A_CHANGE + "</FONT></TD>");
    writeln(
      "<TD align=right colspan=3>" +
        FONT_A_SMALL +
        "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#schriften');\"",
    );
    writeln("value='" + A_NAME_HELP + "'></FONT></TD></TR>");
    writeln("<TR>\mwst<TD valign=top width=35% rowspan=12>");
    writeln(
      FONT_A + "<SELECT name=\"fonts\" onChange='parent.Xft(this);' size=8>",
    );
    write("<OPTION value='font'>" + A_CONFIG_SYSTEM_SF_B + "");
    write("<OPTION value='font_navigation'>" + A_CONFIG_SYSTEM_SF_N + "");
    write("<OPTION value='au_h'>" + A_CONFIG_SYSTEM_SF_NH + "");
    write("<OPTION value='font_right_head'>" + A_CONFIG_SYSTEM_SF_S + "");
    write("<OPTION value='font_e'>" + A_CONFIG_SYSTEM_SF_E + "");
    write("<OPTION value='font_send'>" + A_CONFIG_SYSTEM_SF_A + "");
    writeln("</SELECT></FONT><P><BR>");
    writeln(
      FONT_A_SMALL +
        "<INPUT type=button value='" +
        A_USE +
        "'></FONT></TD></TR>",
    );
    writeln("<TR><TD align=left>");
    writeln(
      FONT_A +
        A_CONFIG_SYSTEM_SF_F +
        ": </TD><TD colspan=3>" +
        FONT_A +
        "<INPUT type=text name=fnt_face size=20 value='" +
        fnt_face +
        "' onChange='parent.Xfr(this,\"\");'></TD></TR>",
    );
    writeln(
      "<TR><TD>" +
        FONT_A +
        A_CONFIG_SYSTEM_SF_G +
        ": </TD><TD>" +
        FONT_A +
        "<SELECT name=gr onChange='parent.Xfr(this,\"\");'>",
    );
    writeln(
      "<OPTION value='+4'> +4<OPTION value='+3'> +3<OPTION value='+2'> +2<OPTION value='+1'> +1<OPTION selected value=''> +-0<OPTION value='-1'> -1<OPTION value='-2'> -2<OPTION value='-3'> -3<OPTION value='-4'> -4</SELECT></TD>",
    );
    e_init_gif("sf");
    writeln(
      "<TR><TD valign=top>" +
        FONT_A +
        A_CONFIG_SYSTEM_SF_C +
        ":</TD><TD colspan=3><IMG SRC='../gif/cube.gif' align=texttop WIDTH=292 HEIGHT=196 BORDER=0 USEMAP=\"#map_webpal\" ISMAP></TD></TR>",
    );
    writeln("</TABLE>");
    close();
  } //with
}
function Xft(i_obj) {
  var fnt_size = "";
  with (s.document.sysfonts) {
    fnt_name = fonts[fonts.selectedIndex].value;
    fnt = unescape(system[fnt_name]);
    first = fnt.indexOf('"') + 1;
    fnt_font = fnt.substring(first, fnt.indexOf('"', first));
    fnt_face.value = fnt_font;
    second = fnt.indexOf('"', first + fnt_font.length + 1) + 1;
    fnt_size = fnt.substring(second, fnt.indexOf('"', second));
    for (ind = 0; ind < gr.length; ind++)
      if (gr.options[ind].value == fnt_size) {
        gr.selectedIndex = ind;
        break;
      }
  }
}
function Xfu(i_obj) {
  var idx = "",
    na = "";
  if (i_obj && i_obj.type == "select-multiple") {
    idx = i_obj.options[i_obj.selectedIndex].value;
    na = unescape(system[idx]);
  }
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln("<FORM name=sys_tables onSubmit='return false;'>");
    writeln("<TABLE width=560 border=0>");
    write("<TR><TD>" + FONT_A_BIG + A_NAME_ADMIN_TBL + "</FONT></TD>");
    write("<TD>" + FONT_A_BIG + A_CHANGE + "</FONT></TD>");
    writeln(
      "<TD align=right colspan=3>" +
        FONT_A_SMALL +
        "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#farben');\"",
    );
    writeln("value='" + A_NAME_HELP + "'></FONT></TD></TR>");
    writeln("<TR>\mwst<TD valign=top width=35% rowspan=12>");
    writeln(
      FONT_A +
        "<SELECT name=\"colors\" size=8 onChange='parent.Xfu(this);'></FONT>",
    );
    write("<OPTION value='pt_bgc'");
    if (idx == "pt_bgc") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_TBL_PTBGC + "");
    write("<OPTION value='pt_l'");
    if (idx == "pt_l") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_TBL_PTL + "");
    write("<OPTION value='pt_vl");
    if (idx == "pt_vl") write("selected");
    writeln("'>" + A_CONFIG_SYSTEM_TBL_PTVL + "");
    write("<OPTION value='pt_al'");
    if (idx == "pt_al") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_TBL_PTAL + "");
    write("<OPTION value='np_bgc'");
    if (idx == "np_bgc") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_TBL_NPBGC + "");
    write("<OPTION value='tbg_nt'");
    if (idx == "tbg_nt") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_TBL_TBGNT + "");
    write("<OPTION value='tbg_np'");
    if (idx == "tbg_np") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_TBL_TBGNP + "");
    write("<OPTION value='tbg_p'");
    if (idx == "tbg_p") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_TBL_TBGP + "");
    write("<OPTION value='tbg_pt'");
    if (idx == "tbg_pt") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_TBL_TBGPT + "");
    write("<OPTION value='tbg_pn'");
    if (idx == "tbg_pn") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_TBL_TBGPN + "");
    write("<OPTION value='tbg_b'");
    if (idx == "tbg_b") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_TBL_TBGB + "");
    write("<OPTION value='tbg_br'");
    if (idx == "tbg_br") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_TBL_TBGBR + "");
    write("<OPTION value='tbg_bn'");
    if (idx == "tbg_bn") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_TBL_TBGBN + "");
    writeln("</SELECT></FONT><P><BR>");
    writeln(
      FONT_A_SMALL +
        "<INPUT type=button value='" +
        A_USE +
        "'></FONT></TD></TR>",
    );
    writeln("<TR><TD valign=top>" + FONT_A + A_CONFIG_SYSTEM_SF_C + ":</TD>");
    if (na != "") bg_na = "bgcolor=" + na;
    else bg_na = "";
    writeln(
      "<TD " +
        bg_na +
        ">" +
        FONT_A +
        "<INPUT type=text name='farbe' value='" +
        na +
        "' size=12 onChange='parent.Xfv(this.value);'></FONT>",
    );
    writeln(
      FONT_A +
        "<INPUT type=button value='" +
        A_NOCOLOR +
        "' onClick='parent.Xfv(this.value);'></FONT><BR>",
    );
    e_init_gif("tbl");
    writeln(
      "<IMG SRC='../gif/cube.gif' align=texttop WIDTH=292 HEIGHT=196 BORDER=0 USEMAP=\"#map_webpal\" ISMAP></TD></TR>",
    );
    writeln("</TD></TR></TABLE>");
    close();
  } //with
}
function Xfv(i_obj) {
  var na = "",
    fnd = false;
  with (s.document.sys_tables) {
    for (i = 0; i < colors.length; i++)
      if (colors[i].selected) {
        na = "" + colors[i].value;
        fnd = true;
        break;
      }
    if (!fnd) {
      alert(A_CONFIG_SYSTEM_TBL_AW);
      return;
    }
    system[na] = "";
    if (i_obj.indexOf("#") != "-1") system[na] = escape(i_obj);
    farbe.value = unescape(system[na]);
    a_edit_border();
    E_init_C();
    LEFT = false;
    E_go("refresh");
  }
}
function Xfx(i_obj) {
  var idx = "-1",
    na = "",
    indx = "-1",
    tp = "";
  if (i_obj != "-1") {
    if (i_obj.type == "select-multiple" && i_obj.name == "borders") {
      idx = i_obj.options[i_obj.selectedIndex].value;
      na = system[idx];
      if (idx == "tb_pt") indx = "tp_pt";
      if (idx == "tb_pn") indx = "tp_pn";
      if (idx == "tb_p") indx = "tp_p";
      if (idx == "tb_n") indx = "tp_n";
      tp = system[indx];
    }
  }
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln("<FORM name=sys_borders onSubmit='return false;'>");
    writeln("<TABLE width=560 border=0>");
    write("<TR><TD>" + FONT_A_BIG + A_NAME_ADMIN_TBO + "</FONT></TD>");
    write("<TD>" + FONT_A_BIG + A_CHANGE + "</FONT></TD>");
    writeln(
      "<TD align=right>" +
        FONT_A_SMALL +
        "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#rahmen');\"",
    );
    writeln("value='" + A_NAME_HELP + "'></FONT></TD></TR>");
    writeln("<TR>\mwst<TD valign=top width=35% rowspan=12>");
    writeln(
      FONT_A + "<SELECT name=\"borders\" size=4 onChange='parent.Xfx(this);'>",
    );
    write("<OPTION value='tb_pt'");
    if (idx == "tb_pt") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_TBL_TBPT + "");
    write("<OPTION value='tb_pn'");
    if (idx == "tb_pn") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_TBL_TBPN + "");
    write("<OPTION value='tb_p'");
    if (idx == "tb_p") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_TBL_TBP + "");
    write("<OPTION value='tb_n'");
    if (idx == "tb_n") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_TBL_TBN + "");
    writeln("</SELECT><BR>");
    writeln(
      A_CONFIG_SYSTEM_TBL_T_W +
        ": <BR><INPUT type=text size=8 name='t_w' value='" +
        unescape(system["t_w"]) +
        "' onChange='parent.B_del(this);'>",
    );
    writeln("</TD></TR>");
    writeln(
      "<TR><TD>" +
        FONT_A +
        A_CONFIG_SYSTEM_TBL_BO +
        ": </TD><TD>" +
        FONT_A +
        "<INPUT type=text name=na size=6 value='" +
        na +
        "' onChange='parent.Xfw(this.value,\"" +
        idx +
        "\");'></TD></TR>",
    );
    writeln(
      "<TR><TD>" +
        FONT_A +
        A_CONFIG_SYSTEM_TBL_TP +
        ": </TD><TD>" +
        FONT_A +
        "<INPUT type=text name=tp size=6 value='" +
        tp +
        "' onChange='parent.Xfw(this.value,\"" +
        indx +
        "\");'></TD></TR>",
    );
    writeln(
      "<TR><TD>" +
        FONT_A_SMALL +
        "<INPUT type=button value='" +
        A_USE +
        "'></FONT></TD></TR>",
    );
    writeln("</TD></TR></TABLE>");
    close();
  } //with
}
function Xfw(i_obj, idx) {
  with (s.document.sys_borders) {
    if (!i_obj.length) return;
    if (idx == "-1") {
      alert(A_CONFIG_SYSTEM_TBL_AW);
      return;
    }
    if (isNaN(i_obj) || i_obj.indexOf(".") != "-1") {
      alert(A_CONFIG_SYSTEM_TBO_GZ);
      return;
    }
    if (i_obj > 15) {
      alert(A_CONFIG_SYSTEM_TBO_KZ);
      return;
    }
    system[idx] = i_obj;
    a_edit_border();
    E_init_C();
    //a_doSetEuroland();
    LEFT = false;
    E_go("refresh");
  } //with
}
function Xfy(i_obj) {
  var idx = "";
  if (i_obj == "-1") idx = "aq_file";
  else if (i_obj.type == "select-multiple")
    idx = i_obj.options[i_obj.selectedIndex].value;
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln("<FORM name=vsseite onSubmit='return false;'>");
    writeln("<TABLE width=560 border=0>");
    write("<TR><TD>" + FONT_A_BIG + A_NAME_ADMIN_VS + "</FONT></TD>");
    write("<TD>" + FONT_A_BIG + A_CHANGE + "</FONT></TD>");
    writeln(
      "<TD align=right>" +
        FONT_A_SMALL +
        "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#vorschaltseite');\"",
    );
    writeln("value='" + A_NAME_HELP + "'></FONT></TD></TR>");
    writeln("<TR>\mwst<TD valign=top rowspan=12>");
    writeln(
      FONT_A + "<SELECT name=\"vss\" onChange='parent.Xfy(this);' size=5>",
    );
    write("<OPTION value='aq_file'");
    if (idx == "aq_file") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_VS_DAT);
    write("<OPTION value='aq_ok1'");
    if (idx == "aq_ok1") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_VS_OK1);
    write("<OPTION value='aq_ok2'");
    if (idx == "aq_ok2") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_VS_OK2);
    write("<OPTION value='aq_noscript'");
    if (idx == "aq_noscript") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_VS_NOS);
    write("<OPTION value='aq_old'");
    if (idx == "aq_old") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_VS_OLD);
    writeln("</SELECT></FONT></TD></TR>");
    if (idx == "aq_file") {
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_VS_IND +
          "</TD><TD>" +
          FONT_A +
          "<INPUT type=text name='ind' size=15 value='" +
          unescape(admin["ind"]) +
          "' onChange='parent.Xfz(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_VS_DAT +
          "</TD><TD>" +
          FONT_A +
          "<INPUT type=text name='aq_file' size=15 value='" +
          unescape(admin["aq_file"]) +
          "' onChange='parent.Xfz(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_VS_PWD +
          "</TD><TD>" +
          FONT_A +
          "<INPUT type=checkbox name='pwd' onClick='parent.Xfz(this);'",
      );
      if (admin["password"] == "on") writeln("checked");
      writeln("></TD></TR>");
    } else {
      writeln(
        "<TR><TD colspan=2>" +
          FONT_A +
          "<TEXTAREA cols=28 rows=8 name='vsmsg' wrap=virtual onChange='parent.a_doEditVSC(this,\"" +
          idx +
          "\");'>",
      );
      write(unescape(admin[idx]) + "</TEXTAREA></FONT></TD></TR>");
    }
    write(
      "<TR><TD>" +
        FONT_A_SMALL +
        "<INPUT type=button value='" +
        A_USE +
        "'></FONT></TD>",
    );
    writeln("</TABLE></FORM>");
    writeln(ADMIN_BOT);
    close();
  }
}
function Xfz(io) {
  if (io.type == "text") admin[io.name] = escape(io.value);
  if (io.name == "pwd") {
    if (admin["password"] == "on") admin["password"] = "off";
    else admin["password"] = "on";
  }
}
function a_doEditVSC(io, idx) {
  admin[idx] = e_print_header(io.value);
}
function e_init_gif(i_obj) {
  with (s.document) {
    writeln('<MAP NAME="map_webpal">');
    writeln("<!--- Row 1 --->");
    writeln(
      "<AREA COORDS=\"2,2,18,18\" HREF=\"javascript:parent.e_init_strings('#330000','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"18,2,34,18\" HREF=\"javascript:parent.e_init_strings('#333300','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"34,2,50,18\" HREF=\"javascript:parent.e_init_strings('#336600','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"50,2,66,18\" HREF=\"javascript:parent.e_init_strings('#339900','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"66,2,82,18\" HREF=\"javascript:parent.e_init_strings('#33CC00','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"82,2,98,18\" HREF=\"javascript:parent.e_init_strings('#33FF00','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"98,2,114,18\" HREF=\"javascript:parent.e_init_strings('#66FF00','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"114,2,130,18\" HREF=\"javascript:parent.e_init_strings('#66CC00','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"130,2,146,18\" HREF=\"javascript:parent.e_init_strings('#669900','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"146,2,162,18\" HREF=\"javascript:parent.e_init_strings('#666600','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"162,2,178,18\" HREF=\"javascript:parent.e_init_strings('#663300','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"178,2,194,18\" HREF=\"javascript:parent.e_init_strings('#660000','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"194,2,210,18\" HREF=\"javascript:parent.e_init_strings('#FF0000','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"210,2,226,18\" HREF=\"javascript:parent.e_init_strings('#FF3300','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"226,2,242,18\" HREF=\"javascript:parent.e_init_strings('#FF6600','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"242,2,258,18\" HREF=\"javascript:parent.e_init_strings('#FF9900','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"258,2,274,18\" HREF=\"javascript:parent.e_init_strings('#FFCC00','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"274,2,290,18\" HREF=\"javascript:parent.e_init_strings('#FFFF00','" +
        i_obj +
        "')\">",
    );
    writeln("<!--- Row 2 --->");
    writeln(
      "<AREA COORDS=\"2,18,18,34\" HREF=\"javascript:parent.e_init_strings('#330033','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"18,18,34,34\" HREF=\"javascript:parent.e_init_strings('#333333','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"34,18,50,34\" HREF=\"javascript:parent.e_init_strings('#336633','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"50,18,66,34\" HREF=\"javascript:parent.e_init_strings('#339933','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"66,18,82,34\" HREF=\"javascript:parent.e_init_strings('#33CC33','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"82,18,98,34\" HREF=\"javascript:parent.e_init_strings('#33FF33','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"98,18,114,34\" HREF=\"javascript:parent.e_init_strings('#66FF33','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"114,18,130,34\" HREF=\"javascript:parent.e_init_strings('#66CC33','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"130,18,146,34\" HREF=\"javascript:parent.e_init_strings('#669933','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"146,18,162,34\" HREF=\"javascript:parent.e_init_strings('#666633','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"162,18,178,34\" HREF=\"javascript:parent.e_init_strings('#663333','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"178,18,194,34\" HREF=\"javascript:parent.e_init_strings('#660033','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"194,18,210,34\" HREF=\"javascript:parent.e_init_strings('#FF0033','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"210,18,226,34\" HREF=\"javascript:parent.e_init_strings('#FF3333','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"226,18,242,34\" HREF=\"javascript:parent.e_init_strings('#FF6633','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"242,18,258,34\" HREF=\"javascript:parent.e_init_strings('#FF9933','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"258,18,274,34\" HREF=\"javascript:parent.e_init_strings('#FFCC33','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"274,18,290,34\" HREF=\"javascript:parent.e_init_strings('#FFFF33','" +
        i_obj +
        "')\">",
    );
    writeln("<!--- Row 3 --->");
    writeln(
      "<AREA COORDS=\"2,34,18,50\" HREF=\"javascript:parent.e_init_strings('#330066','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"18,34,34,50\" HREF=\"javascript:parent.e_init_strings('#333366','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"34,34,50,50\" HREF=\"javascript:parent.e_init_strings('#336666','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"50,34,66,50\" HREF=\"javascript:parent.e_init_strings('#339966','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"66,34,82,50\" HREF=\"javascript:parent.e_init_strings('#33CC66','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"82,34,98,50\" HREF=\"javascript:parent.e_init_strings('#33FF66','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"98,34,114,50\" HREF=\"javascript:parent.e_init_strings('#66FF66','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"114,34,130,50\" HREF=\"javascript:parent.e_init_strings('#66CC66','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"130,34,146,50\" HREF=\"javascript:parent.e_init_strings('#669966','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"146,34,162,50\" HREF=\"javascript:parent.e_init_strings('#666666','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"162,34,178,50\" HREF=\"javascript:parent.e_init_strings('#663366','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"178,34,194,50\" HREF=\"javascript:parent.e_init_strings('#660066','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"194,34,210,50\" HREF=\"javascript:parent.e_init_strings('#FF0066','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"210,34,226,50\" HREF=\"javascript:parent.e_init_strings('#FF3366','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"226,34,242,50\" HREF=\"javascript:parent.e_init_strings('#FF6666','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"242,34,258,50\" HREF=\"javascript:parent.e_init_strings('#FF9966','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"258,34,274,50\" HREF=\"javascript:parent.e_init_strings('#FFCC66','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"274,34,290,50\" HREF=\"javascript:parent.e_init_strings('#FFFF66','" +
        i_obj +
        "')\">",
    );
    writeln("<!--- Row 4 --->");
    writeln(
      "<AREA COORDS=\"2,50,18,66\" HREF=\"javascript:parent.e_init_strings('#330099','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"18,50,34,66\" HREF=\"javascript:parent.e_init_strings('#333399','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"34,50,50,66\" HREF=\"javascript:parent.e_init_strings('#336699','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"50,50,66,66\" HREF=\"javascript:parent.e_init_strings('#339999','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"66,50,82,66\" HREF=\"javascript:parent.e_init_strings('#33CC99','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"82,50,98,66\" HREF=\"javascript:parent.e_init_strings('#33FF99','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"98,50,114,66\" HREF=\"javascript:parent.e_init_strings('#66FF99','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"114,50,130,66\" HREF=\"javascript:parent.e_init_strings('#66CC99','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"130,50,146,66\" HREF=\"javascript:parent.e_init_strings('#669999','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"146,50,162,66\" HREF=\"javascript:parent.e_init_strings('#666699','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"162,50,178,66\" HREF=\"javascript:parent.e_init_strings('#663399','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"178,50,194,66\" HREF=\"javascript:parent.e_init_strings('#660099','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"194,50,210,66\" HREF=\"javascript:parent.e_init_strings('#FF0099','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"210,50,226,66\" HREF=\"javascript:parent.e_init_strings('#FF3399','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"226,50,242,66\" HREF=\"javascript:parent.e_init_strings('#FF6699','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"242,50,258,66\" HREF=\"javascript:parent.e_init_strings('#FF9999','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"258,50,274,66\" HREF=\"javascript:parent.e_init_strings('#FFCC99','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"274,50,290,66\" HREF=\"javascript:parent.e_init_strings('#FFFF99','" +
        i_obj +
        "')\">",
    );
    writeln("<!--- Row 5 --->");
    writeln(
      "<AREA COORDS=\"2,66,18,82\" HREF=\"javascript:parent.e_init_strings('#3300CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"18,66,34,82\" HREF=\"javascript:parent.e_init_strings('#3333CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"34,66,50,82\" HREF=\"javascript:parent.e_init_strings('#3366CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"50,66,66,82\" HREF=\"javascript:parent.e_init_strings('#3399CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"66,66,82,82\" HREF=\"javascript:parent.e_init_strings('#33CCCC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"82,66,98,82\" HREF=\"javascript:parent.e_init_strings('#33FFCC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"98,66,114,82\" HREF=\"javascript:parent.e_init_strings('#66FFCC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"114,66,130,82\" HREF=\"javascript:parent.e_init_strings('#66CCCC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"130,66,146,82\" HREF=\"javascript:parent.e_init_strings('#6699CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"146,66,162,82\" HREF=\"javascript:parent.e_init_strings('#6666CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"162,66,178,82\" HREF=\"javascript:parent.e_init_strings('#6633CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"178,66,194,82\" HREF=\"javascript:parent.e_init_strings('#6600CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"194,66,210,82\" HREF=\"javascript:parent.e_init_strings('#FF00CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"210,66,226,82\" HREF=\"javascript:parent.e_init_strings('#FF33CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"226,66,242,82\" HREF=\"javascript:parent.e_init_strings('#FF66CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"242,66,258,82\" HREF=\"javascript:parent.e_init_strings('#FF99CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"258,66,274,82\" HREF=\"javascript:parent.e_init_strings('#FFCCCC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"274,66,290,82\" HREF=\"javascript:parent.e_init_strings('#FFFFCC','" +
        i_obj +
        "')\">",
    );
    writeln("<!--- Row 6 --->");
    writeln(
      "<AREA COORDS=\"2,82,18,98\" HREF=\"javascript:parent.e_init_strings('#3300FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"18,82,34,98\" HREF=\"javascript:parent.e_init_strings('#3333FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"34,82,50,98\" HREF=\"javascript:parent.e_init_strings('#3366FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"50,82,66,98\" HREF=\"javascript:parent.e_init_strings('#3399FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"66,82,82,98\" HREF=\"javascript:parent.e_init_strings('#33CCFF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"82,82,98,98\" HREF=\"javascript:parent.e_init_strings('#33FFFF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"98,82,114,98\" HREF=\"javascript:parent.e_init_strings('#66FFFF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"114,82,130,98\" HREF=\"javascript:parent.e_init_strings('#66CCFF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"130,82,146,98\" HREF=\"javascript:parent.e_init_strings('#6699FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"146,82,162,98\" HREF=\"javascript:parent.e_init_strings('#6666FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"162,82,178,98\" HREF=\"javascript:parent.e_init_strings('#6633FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"178,82,194,98\" HREF=\"javascript:parent.e_init_strings('#6600FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"194,82,210,98\" HREF=\"javascript:parent.e_init_strings('#FF00FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"210,82,226,98\" HREF=\"javascript:parent.e_init_strings('#FF33FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"226,82,242,98\" HREF=\"javascript:parent.e_init_strings('#FF66FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"242,82,258,98\" HREF=\"javascript:parent.e_init_strings('#FF99FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"258,82,274,98\" HREF=\"javascript:parent.e_init_strings('#FFCCFF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"274,82,290,98\" HREF=\"javascript:parent.e_init_strings('#FFFFFF','" +
        i_obj +
        "')\">",
    );
    writeln("<!--- Row 7 --->");
    writeln(
      "<AREA COORDS=\"2,98,18,114\" HREF=\"javascript:parent.e_init_strings('#0000FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"18,98,34,114\" HREF=\"javascript:parent.e_init_strings('#0033FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"34,98,50,114\" HREF=\"javascript:parent.e_init_strings('#0066FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"50,98,66,114\" HREF=\"javascript:parent.e_init_strings('#0099FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"66,98,82,114\" HREF=\"javascript:parent.e_init_strings('#00CCFF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"82,98,98,114\" HREF=\"javascript:parent.e_init_strings('#00FFFF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"98,98,114,114\" HREF=\"javascript:parent.e_init_strings('#99FFFF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"114,98,130,114\" HREF=\"javascript:parent.e_init_strings('#99CCFF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"130,98,146,114\" HREF=\"javascript:parent.e_init_strings('#9999FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"146,98,162,114\" HREF=\"javascript:parent.e_init_strings('#9966FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"162,98,178,114\" HREF=\"javascript:parent.e_init_strings('#9933FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"178,98,194,114\" HREF=\"javascript:parent.e_init_strings('#9900FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"194,98,210,114\" HREF=\"javascript:parent.e_init_strings('#CC00FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"210,98,226,114\" HREF=\"javascript:parent.e_init_strings('#CC33FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"226,98,242,114\" HREF=\"javascript:parent.e_init_strings('#CC66FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"242,98,258,114\" HREF=\"javascript:parent.e_init_strings('#CC99FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"258,98,274,114\" HREF=\"javascript:parent.e_init_strings('#CCCCFF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"274,98,290,114\" HREF=\"javascript:parent.e_init_strings('#CCFFFF','" +
        i_obj +
        "')\">",
    );
    writeln("<!--- Row 8 --->");
    writeln(
      "<AREA COORDS=\"2,114,18,130\" HREF=\"javascript:parent.e_init_strings('#0000CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"18,114,34,130\" HREF=\"javascript:parent.e_init_strings('#0033CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"34,114,50,130\" HREF=\"javascript:parent.e_init_strings('#0066CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"50,114,66,130\" HREF=\"javascript:parent.e_init_strings('#0099CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"66,114,82,130\" HREF=\"javascript:parent.e_init_strings('#00CCCC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"82,114,98,130\" HREF=\"javascript:parent.e_init_strings('#00FFCC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"98,114,114,130\" HREF=\"javascript:parent.e_init_strings('#99FFCC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"114,114,130,130\" HREF=\"javascript:parent.e_init_strings('#99CCCC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"130,114,146,130\" HREF=\"javascript:parent.e_init_strings('#9999CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"146,114,162,130\" HREF=\"javascript:parent.e_init_strings('#9966CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"162,114,178,130\" HREF=\"javascript:parent.e_init_strings('#9933CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"178,114,194,130\" HREF=\"javascript:parent.e_init_strings('#9900CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"194,114,210,130\" HREF=\"javascript:parent.e_init_strings('#CC00CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"210,114,226,130\" HREF=\"javascript:parent.e_init_strings('#CC33CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"226,114,242,130\" HREF=\"javascript:parent.e_init_strings('#CC66CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"242,114,258,130\" HREF=\"javascript:parent.e_init_strings('#CC99CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"258,114,274,130\" HREF=\"javascript:parent.e_init_strings('#CCCCCC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"274,114,290,130\" HREF=\"javascript:parent.e_init_strings('#CCFFCC','" +
        i_obj +
        "')\">",
    );
    writeln("<!--- Row 9 --->");
    writeln(
      "<AREA COORDS=\"2,130,18,146\" HREF=\"javascript:parent.e_init_strings('#000099','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"18,130,34,146\" HREF=\"javascript:parent.e_init_strings('#003399','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"34,130,50,146\" HREF=\"javascript:parent.e_init_strings('#006699','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"50,130,66,146\" HREF=\"javascript:parent.e_init_strings('#009999','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"66,130,82,146\" HREF=\"javascript:parent.e_init_strings('#00CC99','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"82,130,98,146\" HREF=\"javascript:parent.e_init_strings('#00FF99','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"98,130,114,146\" HREF=\"javascript:parent.e_init_strings('#99FF99','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"114,130,130,146\" HREF=\"javascript:parent.e_init_strings('#99CC99','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"130,130,146,146\" HREF=\"javascript:parent.e_init_strings('#999999','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"146,130,162,146\" HREF=\"javascript:parent.e_init_strings('#996699','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"162,130,178,146\" HREF=\"javascript:parent.e_init_strings('#993399','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"178,130,194,146\" HREF=\"javascript:parent.e_init_strings('#990099','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"194,130,210,146\" HREF=\"javascript:parent.e_init_strings('#CC0099','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"210,130,226,146\" HREF=\"javascript:parent.e_init_strings('#CC3399','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"226,130,242,146\" HREF=\"javascript:parent.e_init_strings('#CC6699','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"242,130,258,146\" HREF=\"javascript:parent.e_init_strings('#CC9999','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"258,130,274,146\" HREF=\"javascript:parent.e_init_strings('#CCCC99','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"274,130,290,146\" HREF=\"javascript:parent.e_init_strings('#CCFF99','" +
        i_obj +
        "')\">",
    );
    writeln("<!--- Row 10 --->");
    writeln(
      "<AREA COORDS=\"2,146,18,162\" HREF=\"javascript:parent.e_init_strings('#000066','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"18,146,34,162\" HREF=\"javascript:parent.e_init_strings('#003366','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"34,146,50,162\" HREF=\"javascript:parent.e_init_strings('#006666','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"50,146,66,162\" HREF=\"javascript:parent.e_init_strings('#009966','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"66,146,82,162\" HREF=\"javascript:parent.e_init_strings('#00CC66','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"82,146,98,162\" HREF=\"javascript:parent.e_init_strings('#00FF66','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"98,146,114,162\" HREF=\"javascript:parent.e_init_strings('#99FF66','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"114,146,130,162\" HREF=\"javascript:parent.e_init_strings('#99CC66','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"130,146,146,162\" HREF=\"javascript:parent.e_init_strings('#999966','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"146,146,162,162\" HREF=\"javascript:parent.e_init_strings('#996666','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"162,146,178,162\" HREF=\"javascript:parent.e_init_strings('#993366','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"178,146,194,162\" HREF=\"javascript:parent.e_init_strings('#990066','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"194,146,210,162\" HREF=\"javascript:parent.e_init_strings('#CC0066','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"210,146,226,162\" HREF=\"javascript:parent.e_init_strings('#CC3366','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"226,146,242,162\" HREF=\"javascript:parent.e_init_strings('#CC6666','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"242,146,258,162\" HREF=\"javascript:parent.e_init_strings('#CC9966','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"258,146,274,162\" HREF=\"javascript:parent.e_init_strings('#CCCC66','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"274,146,290,162\" HREF=\"javascript:parent.e_init_strings('#CCFF66','" +
        i_obj +
        "')\">",
    );
    writeln("<!--- Row 11 --->");
    writeln(
      "<AREA COORDS=\"2,162,18,178\" HREF=\"javascript:parent.e_init_strings('#000033','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"18,162,34,178\" HREF=\"javascript:parent.e_init_strings('#003333','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"34,162,50,178\" HREF=\"javascript:parent.e_init_strings('#006633','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"50,162,66,178\" HREF=\"javascript:parent.e_init_strings('#009933','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"66,162,82,178\" HREF=\"javascript:parent.e_init_strings('#00CC33','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"82,162,98,178\" HREF=\"javascript:parent.e_init_strings('#00FF33','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"98,162,114,178\" HREF=\"javascript:parent.e_init_strings('#99FF33','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"114,162,130,178\" HREF=\"javascript:parent.e_init_strings('#99CC33','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"130,162,146,178\" HREF=\"javascript:parent.e_init_strings('#999933','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"146,162,162,178\" HREF=\"javascript:parent.e_init_strings('#996633','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"162,162,178,178\" HREF=\"javascript:parent.e_init_strings('#993333','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"178,162,194,178\" HREF=\"javascript:parent.e_init_strings('#990033','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"194,162,210,178\" HREF=\"javascript:parent.e_init_strings('#CC0033','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"210,162,226,178\" HREF=\"javascript:parent.e_init_strings('#CC3333','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"226,162,242,178\" HREF=\"javascript:parent.e_init_strings('#CC6633','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"242,162,258,178\" HREF=\"javascript:parent.e_init_strings('#CC9933','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"258,162,274,178\" HREF=\"javascript:parent.e_init_strings('#CCCC33','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"274,162,290,178\" HREF=\"javascript:parent.e_init_strings('#CCFF33','" +
        i_obj +
        "')\">",
    );
    writeln("<!--- Row 12 --->");
    writeln(
      "<AREA COORDS=\"2,178,18,194\" HREF=\"javascript:parent.e_init_strings('#000000','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"18,178,34,194\" HREF=\"javascript:parent.e_init_strings('#003300','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"34,178,50,194\" HREF=\"javascript:parent.e_init_strings('#006600','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"50,178,66,194\" HREF=\"javascript:parent.e_init_strings('#009900','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"66,178,82,194\" HREF=\"javascript:parent.e_init_strings('#00CC00','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"82,178,98,194\" HREF=\"javascript:parent.e_init_strings('#00FF00','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"98,178,114,194\" HREF=\"javascript:parent.e_init_strings('#99FF00','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"114,178,130,194\" HREF=\"javascript:parent.e_init_strings('#99CC00','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"130,178,146,194\" HREF=\"javascript:parent.e_init_strings('#999900','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"146,178,162,194\" HREF=\"javascript:parent.e_init_strings('#996600','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"162,178,178,194\" HREF=\"javascript:parent.e_init_strings('#993300','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"178,178,194,194\" HREF=\"javascript:parent.e_init_strings('#990000','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"194,178,210,194\" HREF=\"javascript:parent.e_init_strings('#CC0000','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"210,178,226,194\" HREF=\"javascript:parent.e_init_strings('#CC3300','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"226,178,242,194\" HREF=\"javascript:parent.e_init_strings('#CC6600','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"242,178,258,194\" HREF=\"javascript:parent.e_init_strings('#CC9900','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"258,178,274,194\" HREF=\"javascript:parent.e_init_strings('#CCCC00','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"274,178,290,194\" HREF=\"javascript:parent.e_init_strings('#CCFF00','" +
        i_obj +
        "')\">",
    );
    writeln("</MAP>");
  } //end with
}
function e_init_strings(color, i_obj) {
  if (i_obj == "sf") Xfr(i_obj, color);
  if (i_obj == "tbl") Xfv(color);
}
function e_init_mwst(hash) {
  with (s.document.insert) {
    type = typ.options[typ.selectedIndex].value;
    he = htmltyp.options[htmltyp.selectedIndex].value;
    save = new Array();
    if (artikel[hash])
      for (si in system["features"]) {
        if (artikel[hash][si]) save[si] = artikel[hash][si];
      }
    artikel[hash] = new Array();
    artikel[hash]["htmltyp"] = he;
    artikel[hash]["typ"] = type;
    if (type != "txt") if (menge.checked) artikel[hash]["menge"] = true;
    if (preisa.checked) artikel[hash]["preisa"] = true;
    artikel[hash]["name"] = e_print_header(nname.value);
    artikel[hash]["titel"] = e_print_header(titel.value);
    if (image.value.length != 0)
      artikel[hash]["image"] = e_print_header(image.value);
    if (desc.value.length != 0)
      artikel[hash]["desc"] = e_print_header(desc.value);
    if (url.value.length != 0) artikel[hash]["url"] = e_print_header(url.value);
    if (gpreis.value.length != 0)
      if (b_add_record(gpreis.value) != 0)
        artikel[hash]["gpreis"] = b_add_record(gpreis.value);
    artikel[hash]["preis"] = b_add_record(preis.value);
    artikel[hash]["mwst"] = mwst.options[mwst.selectedIndex].value;
    artikel[hash]["features"] = "";
    for (i in system["features"]) {
      if (!system["features"][i]) continue;
      if (eval("feats" + i + ".checked")) artikel[hash]["features"] += i + ",";
    }
    artikel[hash]["p_feature"] = featrs.options[featrs.selectedIndex].value;
    for (si in save) {
      artikel[hash][si] = save[si];
    }
  } // end with
}
function E_init_font() {
  var ha;
  ha = s.document.insert.ha.value;
  e_init_mwst(ha);
  B_auswertung("ed_art");
  E_go("refresh");
}
function E_init_page() {
  for (i = 0; i <= artikel.length; i++) {
    if (i > 10) {
      alert(A_DERR);
      E_init_curr();
      return;
    }
    if (!artikel[i]) {
      hash = i;
      break;
    }
  }
  e_init_mwst(hash);
  page[e_C_state]["artikel"] += hash + ",";
  E_print_left_frame();
  a_doEditCurrency();
}
function E_init_shipping() {
  var nname;
  var art_tmp = "";
  hash = s.document.insert.hash.value;
  nname = s.document.insert.titel.value;
  while (nname.length == 0) {
    if (!(nname = prompt(A_DO_INSERT_PAGE_NNAME, ""))) {
      e_insert_navgif();
      return;
    }
  }
  art_tmp = page[hash]["artikel"];
  page[hash] = new Array();
  page[hash]["name"] = e_print_header(nname);
  page[hash]["top_text"] = e_print_header(s.document.insert.top_text.value);
  if (s.document.insert.url.value.length != 0) {
    page[hash]["url"] = escape(s.document.insert.url.value);
  } else {
    if (s.document.insert.summen.checked == true) page[hash]["summen"] = "true";
  }
  if (s.document.insert.bg.value.length != 0)
    page[hash]["bg"] = escape(s.document.insert.bg.value);
  if (s.document.insert.ng.value.length != 0)
    page[hash]["navgif"] = escape(s.document.insert.ng.value);
  if (s.document.insert.ngs.value.length != 0)
    page[hash]["navgifs"] = escape(s.document.insert.ngs.value);
  page[hash]["artikel"] = art_tmp;
  e_insert_navgif(hash);
  LEFT = false;
  E_go(parseInt(hash));
}
function E_init_curr() {
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln(FONT_A_BIG + A_DEL_S);
    writeln(ADMIN_BOT);
    close();
  }
}
function e_check_browser() {
  var nname;
  if (e_C_state == "start") hash = 0;
  else if (isNaN(e_C_state)) hash = page.length;
  else hash = e_C_state + 1;
  nname = s.document.insert.titel.value;
  while (nname.length == 0) {
    if (!(nname = prompt(A_DO_INSERT_PAGE_NNAME, ""))) {
      e_insert_navgif();
      return;
    }
  }
  if (page.length > hash && page.length > 1) {
    for (i = page.length; i >= hash; i--) {
      page[i + 1] = new Array();
      page[i + 1] = page[i];
    }
    page.length -= 1;
  }
  page[hash] = new Array();
  page[hash]["name"] = e_print_header(nname);
  page[hash]["top_text"] = e_print_header(s.document.insert.top_text.value);
  if (s.document.insert.url.value.length != 0)
    page[hash]["url"] = escape(s.document.insert.url.value);
  else if (s.document.insert.summen.checked == true)
    page[hash]["summen"] = "true";
  if (s.document.insert.bg.value.length != 0)
    page[hash]["bg"] = escape(s.document.insert.bg.value);
  if (s.document.insert.ng.value.length != 0)
    page[hash]["navgif"] = escape(s.document.insert.ng.value);
  if (s.document.insert.ngs.value.length != 0)
    page[hash]["navgifs"] = escape(s.document.insert.ngs.value);
  page[hash]["artikel"] = "";
  e_insert_navgif();
  LEFT = false;
  E_go(hash);
}
function errorHandler(hash) {
  if (isNaN(hash)) {
    alert(A_DELPAGE_ERR);
    e_insert_navgif(hash);
    return;
  }
  if (page.length == 1) {
    alert(A_DELPAGE_ERR2);
    e_insert_navgif(hash);
    return;
  }
  if (!confirm(A_DELPAGE_ASK)) {
    e_insert_navgif(hash);
    return;
  }
  var art = page[hash]["artikel"];
  var art_idx = "";
  if (art.length != 0) {
    while ((art_idx = art.substring(0, art.indexOf(","))) != "") {
      if (artikel[art_idx]) artikel[art_idx] = false;
      art = art.substring(art.indexOf(",") + 1, art.length);
    }
  }
  for (i = hash; i < page.length; i++) {
    page[i] = new Array();
    page[i] = page[i + 1];
  }
  page.length -= 1;
  E_init_curr();
  LEFT = false;
  E_go(0);
}
function Xgk(hash) {
  if (isNaN(hash)) {
    alert(A_DELPROD_ERR);
    E_init_curr();
    return;
  }
  if (artikel.length == 1) {
    alert(A_DELPROD_ERR2);
    E_init_curr();
    return;
  }
  if (!confirm(A_DELPROD_ASK)) {
    E_init_curr();
    return;
  }
  artikel[hash] = false;
  var art = page[e_C_state]["artikel"];
  if (art.length == 0) return;
  var arttmp = "";
  while ((i = art.substring(0, art.indexOf(","))) != "") {
    if (i != hash) arttmp += i + ",";
    art = art.substring(art.indexOf(",") + 1, art.length);
  }
  page[e_C_state]["artikel"] = arttmp;
  E_init_curr();
  E_go("refresh");
}
function E_print_left_frame(s_obj) {
  var hash = -1;
  var htmltyp = "1";
  var typ = "checkbox";
  var menge = false;
  var preisa = false;
  var nname = "";
  var titel = "";
  var desc = "";
  var image = "";
  var url = "";
  var gpreis = "";
  var preis = "";
  var mwst = 0;
  var su = false;
  var d = "E_init_page()";
  var ftrs = (feat = "");
  with (s.document) {
    if (isNaN(e_C_state)) {
      open();
      writeln(ADMIN_TOP);
      writeln(FONT_A_BIG + A_INSERT_PROD_ERR + "</FONT>");
      writeln(ADMIN_BOT);
      close();
      return;
    }
    if (s_obj) {
      if (s_obj.type == "select-one")
        hash = s_obj.options[s_obj.selectedIndex].value;
      else hash = s_obj;
      d = "E_init_font()";
      htmltyp = artikel[hash]["htmltyp"];
      typ = artikel[hash]["typ"];
      if (artikel[hash]["menge"]) menge = true;
      if (artikel[hash]["preisa"]) preisa = true;
      nname = unescape(artikel[hash]["name"]);
      titel = unescape(artikel[hash]["titel"]);
      if (artikel[hash]["desc"]) desc = unescape(artikel[hash]["desc"]);
      if (artikel[hash]["image"]) image = unescape(artikel[hash]["image"]);
      if (artikel[hash]["url"]) url = unescape(artikel[hash]["url"]);
      if (artikel[hash]["gpreis"]) gpreis = artikel[hash]["gpreis"];
      preis = artikel[hash]["preis"];
      mwst = artikel[hash]["mwst"];
      if (artikel[hash]["p_feature"]) ftrs = artikel[hash]["p_feature"];
      if (artikel[hash]["features"]) feat = artikel[hash]["features"];
    }
    open();
    writeln(ADMIN_TOP + FONT_A);
    writeln("<FORM name=insert onSubmit='parent." + d + ";'>");
    writeln("<TABLE width=560 border=0><TR><TD>" + FONT_A);
    if (hash >= 0) writeln("<INPUT type=hidden name=ha value='" + hash + "'>");
    writeln("<SELECT name=htmltyp>");
    write("<OPTION value='1' ");
    if (htmltyp == "1") write(" selected ");
    write(">" + A_INSERT_PROD_TAB);
    write("<OPTION value='2'");
    if (htmltyp == "2") write(" selected ");
    writeln(">" + A_INSERT_PROD_FLUF);
    write("<OPTION value='3'");
    if (htmltyp == "3") write(" selected ");
    writeln(">" + A_INSERT_PROD_BIG);
    writeln("</SELECT>");
    writeln("</FONT></TD><TD>" + FONT_A);
    writeln("<SELECT name=typ>");
    writeln("<OPTION value='checkbox'");
    if (typ == "checkbox") write(" selected");
    writeln(">" + A_INSERT_PROD_CHECK);
    writeln("<OPTION value='img'");
    if (typ == "img") write(" selected");
    writeln(">" + A_INSERT_PROD_BILD);
    writeln("<OPTION value='txt'");
    if (typ == "txt") write(" selected");
    writeln(">" + A_INSERT_PROD_TXT);
    writeln("</SELECT>");
    writeln("</FONT></TD><TD>" + FONT_A);
    writeln(A_INSERT_PROD_MENGE + " <INPUT type=checkbox name='menge' ");
    if (menge) write(" checked");
    writeln("><BR>");
    writeln(A_INSERT_PROD_PREISA + "&nbsp;<INPUT type=checkbox name='preisa'");
    if (preisa) write(" checked");
    writeln(">");
    writeln("</TD><TD align=right>");
    writeln(
      FONT_A_SMALL +
        "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#A_einfuegen');\"",
    );
    writeln("value='" + A_NAME_HELP + "'></FONT>");
    writeln("</TD></TR>");
    writeln("<TR><TD>" + FONT_A);
    writeln(
      A_INSERT_PROD_NAME +
        "</TD><TD>" +
        FONT_A +
        "<INPUT type=text size=20 name='nname' value='" +
        nname +
        "'></TD><TD align=right colspan=2>" +
        FONT_A,
    );
    writeln(
      "<INPUT type=button onClick='parent.r.document.location.replace(\".\");' value='" +
        A_SHOWDIR +
        "'><BR>",
    );
    writeln("</TD></TR>");
    writeln("<TR><TD>" + FONT_A);
    writeln(
      A_INSERT_PROD_TITEL +
        "</TD><TD colspan=3>" +
        FONT_A +
        "<INPUT type=text size=50 name='titel' value='" +
        titel +
        "'>",
    );
    writeln("</TD></TR>");
    writeln("<TR><TD>" + FONT_A);
    writeln(
      A_INSERT_PROD_DESC +
        "</TD><TD colspan=3>" +
        FONT_A +
        "<TEXTAREA cols=50 wrap=virtual rows=3 name='desc'>" +
        desc +
        "</TEXTAREA>",
    );
    writeln("</TD></TR>");
    writeln("<TR><TD>" + FONT_A);
    writeln(
      A_INSERT_PROD_IMAGE +
        "<BR>" +
        FONT_A_SMALL +
        A_IF +
        "</TD><TD>" +
        FONT_A +
        "<INPUT type=text size=10 name='image' value='" +
        image +
        "'></TD><TD>" +
        FONT_A,
    );
    writeln(
      A_INSERT_PROD_URL +
        "<BR>" +
        FONT_A_SMALL +
        A_IF +
        "</TD><TD>" +
        FONT_A +
        "<INPUT type=text size=10 name='url' value='" +
        url +
        "'>",
    );
    writeln("</TD></TR>");
    writeln("<TR><TD>" + FONT_A);
    writeln(
      A_INSERT_PROD_SPREIS +
        "</TD><TD>" +
        FONT_A +
        "<INPUT type=text name='preis' size=8 value='" +
        a_pment_action(preis) +
        "'> " +
        CURR +
        "</TD><TD>" +
        FONT_A,
    );
    writeln(
      A_INSERT_PROD_GPREIS +
        "<BR>" +
        FONT_A_SMALL +
        A_IF +
        "</TD><TD>" +
        FONT_A +
        "<INPUT type=text name='gpreis' size=8 value='" +
        a_pment_action(gpreis) +
        "'> " +
        CURR,
    );
    writeln("</TD></TR>");
    writeln("<TR><TD colspan=2>" + FONT_A);
    writeln(A_INSERT_PROD_MWST + "<SELECT name=mwst>");
    for (mw in system["mwst"]) {
      writeln("<OPTION value='" + mw + "' ");
      if (mw == mwst) write(" selected ");
      write(">" + system["mwst"][mw] + "%");
    }
    writeln("</SELECT></TD>");
    writeln(
      "<TD colspan=2>" + FONT_A + A_INSERT_PROD_FTS + "<SELECT name=featrs>",
    );
    write("<OPTION value='-1'");
    if (ftrs == "") write(" selected ");
    writeln(">" + A_CONFIG_SYSTEM_SFT_NO + "");
    for (menge in system["features"]) {
      if (!system["features"][menge]) continue;
      if (system["features"][menge]["ftype"] == "multiple-select") continue;
      if (system["features"][menge]["ftype"] == "text") continue;
      if (system["features"][menge]["ftype"] == "checkbox") continue;
      writeln("<OPTION value='" + menge + "' ");
      if (menge == ftrs) write(" selected ");
      write(">" + unescape(system["features"][menge]["name"]));
    }
    writeln("</SELECT></TD></TR>");
    writeln("<TR><TD colspan=4>");
    for (i in system["features"]) {
      if (system["features"][i]) {
        writeln(FONT_A + " <INPUT type=checkbox name='feats" + i + "'");
        if (feat) {
          if (feat.indexOf(i) >= 0) write("checked");
        }
        writeln(
          "><artikel HREF='javascript:parent.e_printFeaturesRadio(" +
            i +
            ",-1," +
            hash +
            ")'>&nbsp;" +
            unescape(system["features"][i]["name"]) +
            "</artikel>",
        );
      }
    }
    writeln("</FONT></TD></TR>");
    writeln(
      "<TR><TD colspan=2>" +
        FONT_A +
        "<INPUT type=submit value='" +
        A_INSERT_PROD_FERTIG +
        "'>",
    );
    if (hash >= 0) {
      writeln(
        "<INPUT type=button value='" +
          A_DELETE +
          "' onClick='parent.Xgk(" +
          hash +
          ");'>",
      );
      writeln("&nbsp;&nbsp;&nbsp;");
      writeln(
        "<INPUT type=button value='" +
          A_UP +
          "' name='up' onClick='parent.e_print_name(this, " +
          hash +
          ");'>",
      );
      writeln(
        "<INPUT type=button value='" +
          A_DOWN +
          "' name ='down' onClick='parent.e_print_name(this, " +
          hash +
          ");'>",
      );
    }
    writeln("</FONT></TD></TR>");
    writeln("</TABLE>");
    writeln("</FORM>");
    writeln(ADMIN_BOT);
    close();
  }
}
function E_get_feature(hash, idx) {
  var summen = new Array();
  str = unescape(artikel[hash][idx]);
  if (str.indexOf("~") == -1) {
    var i = 0;
    while (str.length) {
      summen[i] = new Array();
      summen[i].name = str.substring(0, str.indexOf(","));
      summen[i].preis = str.substring(str.indexOf(",") + 1, str.indexOf("|"));
      str = str.substring(str.indexOf("|") + 1, str.length);
      i++;
    }
  } else {
    for (i in system.features[idx]) {
      if (i == "name" || i == "required" || i == "ftype") continue;
      summen[i] = new Array();
      summen[i].name = unescape(system.features[idx][i]);
      if (str.length) {
        summen[i].preis = str.substring(0, str.indexOf("~"));
        str = str.substring(str.indexOf("~") + 1, str.length);
      } else summen[i].preis = "";
      i++;
    }
  }
  return summen;
}
function e_printFeaturesCheck(idx) {
  var i,
    summen = new Array();
  var menge = 0;
  for (i in system.features[idx]) {
    if (i == "name" || i == "required" || i == "ftype") continue;
    summen[menge] = new Array();
    summen[menge].name = unescape(system.features[idx][i]);
    summen[menge].preis = "";
    menge++;
  }
  return summen;
}
function e_printFeaturesRadio(idx, i_obj, ix) {
  var A_FTS = unescape(system["features"][idx]["name"]);
  var A_ARTIKEL = "Artikel : " + unescape(artikel[ix]["name"]);
  var i = "neu",
    fname = (fm = "");
  var hash = ix;
  if (i_obj != "-1") {
    if (i_obj.type == "select-multiple")
      i = i_obj.options[i_obj.selectedIndex].value;
    else i = i_obj;
  }
  var afs = new Array();
  if (artikel[hash][idx]) {
    afs = E_get_feature(hash, idx);
  } else afs = e_printFeaturesCheck(idx);
  if (i != "neu") {
    fname = afs[i].name;
    fm = a_pment_action(afs[i].preis);
  }
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln("<FORM name=sys_persfts onSubmit='return false;'>");
    writeln("<TABLE width=560 border=0>");
    write("<TR><TD>" + FONT_A_BIG + A_FTS + "</FONT></TD>");
    write("<TD>" + FONT_A_BIG + A_ARTIKEL + "</FONT></TD>");
    writeln(
      "<TD align=right>" +
        FONT_A_SMALL +
        "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#A_merkmale');\"",
    );
    writeln("value='" + A_NAME_HELP + "'></FONT></TD></TR>");
    writeln("<TR>\mwst<TD valign=top rowspan=12>");
    writeln(
      FONT_A +
        '<SELECT name="fts" onChange=\'parent.e_printFeaturesRadio("' +
        idx +
        '",this,"' +
        hash +
        "\");' size=8>",
    );
    var preisa;
    for (preisa in afs) {
      write("<OPTION value='" + preisa + "'");
      if (afs == i) write("selected");
      if (afs[preisa]) writeln(">" + afs[preisa].name);
    }
    writeln("<OPTION value = 'neu'>" + A_CONFIG_SYSTEM_SFT_N);
    writeln("</SELECT></TD></TR>");
    write(
      "<TR><TD>" +
        FONT_A +
        A_FTS +
        ": " +
        "</FONT></TD><TD>" +
        FONT_A +
        "<INPUT type=text name='fname' size=15 value='" +
        fname +
        "'",
    );
    if (i != "neu")
      write(
        "onChange='parent.e_printFeaturesSelec(this,\"" +
          idx +
          '","' +
          i +
          '","' +
          hash +
          "\");'",
      );
    writeln("></FONT></TD></TR>");
    write(
      "<TR><TD>" +
        FONT_A +
        A_CONFIG_SYSTEM_SFT_VAL +
        "</FONT></TD><TD>" +
        FONT_A +
        "<INPUT type=text name='fm' size=4 value='" +
        fm +
        "'",
    );
    if (i != "neu")
      write(
        "onChange='parent.e_printFeaturesSelec(this,\"" +
          idx +
          '","' +
          i +
          '","' +
          hash +
          "\");'",
      );
    writeln(">&nbsp;" + CURR + "</FONT></TD></TR>");
    writeln(
      "<TR><TD>" +
        FONT_A_SMALL +
        "<INPUT type=button value='" +
        A_INSERT_PROD_DEFAULT +
        "' onClick='parent.e_print_menge(\"" +
        idx +
        '","' +
        hash +
        "\");'></FONT></TD></TR>",
    );
    if (i == "neu")
      writeln(
        "<TR><TD>" +
          FONT_A_SMALL +
          "<INPUT type=button value='" +
          A_INSERT +
          "' onClick='parent.e_printFeaturesSelec(this,\"" +
          idx +
          '","' +
          i +
          '","' +
          hash +
          "\");'></FONT>",
      );
    else {
      writeln(
        "<TR><TD>" +
          FONT_A_SMALL +
          "<INPUT type=button value='" +
          A_USE +
          "'></FONT>",
      );
      writeln(
        FONT_A_SMALL +
          "<INPUT type=button value='" +
          A_DELETE +
          "' onClick='parent.e_printFeaturesMsele(\"" +
          idx +
          '","' +
          i +
          '","' +
          hash +
          "\");'></FONT>",
      );
    }
    writeln(
      "<TD>" +
        FONT_A_SMALL +
        "<INPUT type=button value='" +
        A_LEAVE +
        "' onClick='parent.E_print_left_frame(\"" +
        hash +
        "\")';></FONT></TD></TR>",
    );
    writeln("</TABLE></FORM>");
    writeln(ADMIN_BOT);
    close();
  } //with
}
function e_print_menge(idx, hash) {
  var old = "";
  var summen = new Array();
  old += artikel[hash].features;
  str = old;
  while (str.length) {
    num = str.substring(0, str.indexOf(","));
    if (num == idx) {
      artikel[hash].features =
        old.substring(0, old.indexOf(num)) +
        old.substring(old.indexOf(num) + 2, old.length);
      for (i in artikel[hash]) if (i != idx) summen[i] = artikel[hash][i];
      artikel[hash] = summen;
      break;
    }
    str = str.substring(str.indexOf(",") + 1, str.length);
  }
  if (str.length) {
    E_go("refresh");
    e_printFeaturesRadio(idx, -1, hash);
  }
}
function e_printFeaturesSelec(i_obj, idx, io, hash) {
  var str,
    summen = new Array();
  var nurPr = "true";
  with (s.document.sys_persfts) {
    if (!fname.value) {
      alert(A_CONFIG_SYSTEM_SFT_NEW);
      return;
    }
    if (artikel[hash][idx]) {
      str = unescape(artikel[hash][idx]);
      if (str.indexOf("~") == -1) nurPr = "false";
      summen = E_get_feature(hash, idx);
    } else {
      summen = e_printFeaturesCheck(idx);
      str = idx + ",";
      if (!artikel[hash].features) artikel[hash].features = "";
      if (artikel[hash].features.indexOf(str) == "-1") {
        artikel[hash].features += idx + ",";
        artikel[hash][idx] = new Array();
      }
    }
    if (i_obj.type == "text") {
      if (i_obj.name == "fname") nurPr = "false";
      for (i in summen)
        if (i == io) {
          summen[i].name = fname.value;
          summen[i].preis = b_add_record(fm.value);
        }
      artikel[hash][idx] = "";
      for (i in summen) {
        if (nurPr == "true")
          artikel[hash][idx] += e_print_header(summen[i].preis + "~");
        else
          artikel[hash][idx] += e_print_header(
            summen[i].name + "," + summen[i].preis + "|",
          );
      }
    } else if (i_obj.type == "button") {
      if (nurPr == "true") {
        artikel[hash][idx] = "";
        for (i in summen)
          artikel[hash][idx] += e_print_header(
            summen[i].name + "," + summen[i].preis + "|",
          );
      }
      var fpr = parseInt(fm.value);
      if (isNaN(fpr))
        artikel[hash][idx] += e_print_header(fname.value + "," + "|");
      else
        artikel[hash][idx] += e_print_header(
          fname.value + "," + b_add_record(fm.value) + "|",
        );
    }
    E_go("refresh");
    e_printFeaturesRadio(idx, io, hash);
  }
}
function e_printFeaturesMsele(idx, io, hash) {
  var summen,
    g = new Array();
  var str,
    menge = 0;
  if (io == "neu") return;
  if (artikel[hash][idx]) {
    summen = E_get_feature(hash, idx);
  } else {
    summen = e_printFeaturesCheck(idx);
    val = idx + ",";
    if (artikel[hash].features.indexOf(val) == "-1") {
      artikel[hash].features += idx + ",";
      artikel[hash][idx] = new Array();
    }
  }
  for (i in summen) if (i != io) g[menge++] = summen[i];
  artikel[hash][idx] = "";
  if (i > 0) {
    for (i in g) {
      str = g[i].name + "," + g[i].preis + "|";
      artikel[hash][idx] += e_print_header(str);
    }
    E_go("refresh");
    e_printFeaturesRadio(idx, -1, hash);
  } else {
    if (artikel[hash].p_feature == idx) artikel[hash].p_feature = "-1";
    val = idx + ",";
    if (artikel[hash].features.indexOf(val) > "-1") {
      str = artikel[hash].features;
      i = 0;
      while (str.length) {
        summen[i++] = str.substring(0, str.indexOf(","));
        str = str.substring(str.indexOf(",") + 1, str.length);
      }
      artikel[hash].features = "";
      for (i in summen) {
        if (i != idx) artikel[hash].features += summen[i] + ",";
      }
      E_go("refresh");
      E_print_left_frame(hash);
    }
  }
}
function e_print_name(i_obj, hash) {
  var summen = new Array();
  var i, str, pos;
  if (page[e_C_state]["artikel"]) str = page[e_C_state]["artikel"];
  else return;
  summen = str.split(",");
  for (i in summen) {
    if (parseInt(hash) == parseInt(summen[i])) {
      pos = i;
      break;
    }
  }
  if (i_obj.name == "up") {
    if (pos == 0) return;
    tmp = summen[pos - 1];
    summen[pos - 1] = summen[pos];
    summen[pos] = tmp;
  }
  if (i_obj.name == "down") {
    if (pos == summen.length - 2) return;
    tmp = summen[pos + 1];
    summen[pos + 1] = summen[pos];
    summen[pos] = tmp;
  }
  page[e_C_state]["artikel"] = "" + summen.join();
  E_go("refresh");
}
function a_editProd() {
  if (isNaN(e_C_state)) {
    alert(A_EDIT_PROD_ERR);
    E_init_curr();
    return;
  }
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln("<FORM name=insert onSubmit='return false;'>");
    writeln(FONT_A + A_EDIT_PROD);
    writeln(
      "<BR><SELECT name=edit onChange='parent.E_print_left_frame(this);'>",
    );
    writeln("<OPTION value='' selected>" + A_EDIT_PROD_S);
    var art = page[e_C_state]["artikel"];
    if (art.length == 0) return;
    while ((i = art.substring(0, art.indexOf(","))) != "") {
      writeln("<OPTION value='" + i + "'>" + unescape(artikel[i]["name"]));
      art = art.substring(art.indexOf(",") + 1, art.length);
    }
    writeln("</SELECT>");
    writeln("<INPUT type=button value='" + A_USE + "'><BR>");
    writeln("</FORM>");
    writeln(ADMIN_BOT);
    close();
  }
}
function e_print_navigation() {
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln("<FORM name=insert onSubmit='return false;'>");
    writeln("<TABLE width=560 border=0><TR><TD>" + FONT_A);
    writeln(
      A_EDITSTART_URL + "<BR>" + FONT_A_SMALL + A_IF + "</FONT><BR>" + FONT_A,
    );
    writeln(
      "<INPUT type=text name=start value='" +
        unescape(system["start"]) +
        "' onChange='parent.B_del(this);'>",
    );
    writeln("</TD></TR>");
    writeln("<TR><TD>" + FONT_A);
    writeln(A_EDITSTART_TXT + "<BR>" + FONT_A_SMALL + A_IF);
    writeln(
      "</FONT><BR>" +
        FONT_A +
        "<TEXTAREA cols='50' rows='10' name='startmsg' wrap=virtual onChange='parent.B_del(this);'>",
    );
    write(unescape(system["startmsg"]) + "</TEXTAREA>");
    writeln("</TD></TR>");
    writeln("<TR><TD align=middle>" + FONT_A);
    writeln("<INPUT type=button value='" + A_USE + "'></TD></TR>");
    writeln("</TABLE>");
    writeln("</FORM>");
    writeln(ADMIN_BOT);
    close();
  }
}
function Xif() {
  with (s.document) {
    open();
    writeln(ADMIN_TOP + FONT_A);
    writeln("<FORM name=insert onSubmit='parent.Xig(this);'>");
    writeln("<TABLE width=560 border=0><TR><TD>" + FONT_A);
    writeln("<SELECT name=htmltyp>");
    writeln("<OPTION value='1' >" + A_INSERT_PROD_TAB);
    writeln("<OPTION value='2'>" + A_INSERT_PROD_FLUF);
    writeln("<OPTION value='3'>" + A_INSERT_PROD_BIG);
    writeln("</SELECT>");
    writeln("</FONT></TD><TD>" + FONT_A);
    writeln("<SELECT name=typ>");
    writeln("<OPTION value='checkbox'>" + A_INSERT_PROD_CHECK);
    writeln("<OPTION value='img'>" + A_INSERT_PROD_BILD);
    writeln("<OPTION value='txt'>" + A_INSERT_PROD_TXT);
    writeln("</SELECT>");
    writeln("</FONT></TD><TD>" + FONT_A);
    writeln(A_INSERT_PROD_MENGE + " <INPUT type=checkbox name='menge' ><BR>");
    writeln(A_INSERT_PROD_PREISA + "&nbsp;<INPUT type=checkbox name='preisa'>");
    writeln("</TD><TD align=right>");
    writeln(
      FONT_A_SMALL +
        "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#seite_maske');\"",
    );
    writeln("value='" + A_NAME_HELP + "'></FONT>");
    writeln("</TD></TR>");
    writeln("<TR><TD>" + FONT_A);
    writeln(
      A_INSERT_PROD_NAME +
        "</TD><TD>" +
        FONT_A +
        A_INSERT_PAGE_REQ +
        "</TD><TD align=right colspan=2>" +
        FONT_A,
    );
    writeln(
      "<INPUT type=button onClick='parent.r.document.location.replace(\".\");' value='" +
        A_SHOWDIR +
        "'><BR>",
    );
    writeln("</TD></TR>");
    writeln("<TR><TD>" + FONT_A);
    writeln(
      A_INSERT_PROD_TITEL +
        "</TD><TD colspan=3>" +
        FONT_A +
        A_INSERT_PAGE_IMP +
        "<INPUT type=checkbox name='titel'>",
    );
    writeln("</TD></TR>");
    writeln("<TR><TD>" + FONT_A);
    writeln(
      A_INSERT_PROD_DESC +
        "</TD><TD colspan=3>" +
        FONT_A +
        A_INSERT_PAGE_IMP +
        "<INPUT type=checkbox name='desc'>",
    );
    writeln("</TD></TR>");
    writeln("<TR><TD>" + FONT_A);
    writeln(
      A_INSERT_PROD_IMAGE +
        "<BR>" +
        FONT_A_SMALL +
        A_IF +
        "</TD><TD>" +
        FONT_A +
        A_INSERT_PAGE_IMP +
        "<INPUT type=checkbox name='image'></TD><TD>" +
        FONT_A,
    );
    writeln(
      A_INSERT_PROD_URL +
        "<BR>" +
        FONT_A_SMALL +
        A_IF +
        "</TD><TD>" +
        FONT_A +
        A_INSERT_PAGE_IMP +
        "<INPUT type=checkbox name='url' >",
    );
    writeln("</TD></TR>");
    writeln("<TR><TD>" + FONT_A);
    writeln(
      A_INSERT_PROD_SPREIS +
        "</TD><TD>" +
        FONT_A +
        A_INSERT_PAGE_IMP +
        "<INPUT type=checkbox name='preis'> " +
        CURR +
        "</TD><TD>" +
        FONT_A,
    );
    writeln(
      A_INSERT_PROD_GPREIS +
        "<BR>" +
        FONT_A_SMALL +
        A_IF +
        "</TD><TD>" +
        FONT_A +
        A_INSERT_PAGE_IMP +
        "<INPUT type=checkbox name='gpreis'> " +
        CURR,
    );
    writeln("</TD></TR>");
    writeln("<TR><TD colspan=2>" + FONT_A);
    writeln(A_INSERT_PROD_MWST + "<SELECT name=mwst>");
    for (mw in system["mwst"]) {
      writeln("<OPTION value='" + mw + "'>" + system["mwst"][mw] + "%");
    }
    writeln("</SELECT></TD>");
    writeln(
      "<TD colspan=2>" + FONT_A + A_INSERT_PROD_FTS + "<SELECT name=featrs>",
    );
    write("<OPTION value='-1' selected");
    writeln(">" + A_CONFIG_SYSTEM_SFT_NO + "");
    for (menge in system["features"]) {
      if (!system["features"][menge]) continue;
      if (system["features"][menge]["ftype"] == "multiple-select") continue;
      if (system["features"][menge]["ftype"] == "text") continue;
      if (system["features"][menge]["ftype"] == "checkbox") continue;
      writeln("<OPTION value='" + menge + "' ");
      write(">" + unescape(system["features"][menge]["name"]));
    }
    writeln("</SELECT></TD></TR>");
    writeln("<TR><TD colspan=4>");
    for (i in system["features"]) {
      if (system["features"][i]) {
        writeln(FONT_A + " <INPUT type=checkbox name='feats" + i + "'");
        writeln(
          "><artikel HREF='javascript:parent.e_printFeaturesRadio(,-1,)'>&nbsp;" +
            unescape(system["features"][i]["name"]) +
            "</artikel>",
        );
      }
    }
    writeln("</FONT></TD></TR>");
    writeln("<TR><TD colspan=2>" + FONT_A);
    writeln("<SELECT name=repl><OPTION value=repl>" + A_INSERT_PAGE_REPL);
    writeln("<OPTION value=add>" + A_INSERT_PAGE_ADD + "</SELECT>");
    writeln("<INPUT type=submit value='" + A_INSERT_PAGE_MAKE + "'>");
    writeln("</FONT></TD></TR>");
    writeln("</TABLE>");
    writeln("</FORM>");
    writeln(ADMIN_BOT);
    close();
  }
}
function Xig() {
  spec = new Array();
  with (s.document.insert) {
    type = typ.options[typ.selectedIndex].value;
    he = htmltyp.options[htmltyp.selectedIndex].value;
    rep = repl.options[repl.selectedIndex].value;
    spec = new Array();
    spec["repl"] = rep;
    spec["htmltyp"] = he;
    spec["typ"] = type;
    if (type != "txt" && menge.checked) spec["menge"] = true;
    else spec["menge"] = false;
    if (preisa.checked) spec["preisa"] = true;
    else spec["preisa"] = false;
    spec_fields = A_INSERT_PROD_NAME + "\t";
    if (titel.checked) spec_fields += A_INSERT_PROD_TITEL + "\t";
    if (image.checked) spec_fields += A_INSERT_PROD_IMAGE + "\t";
    if (desc.checked) spec_fields += A_INSERT_PROD_DESC + "\t";
    if (url.checked) spec_fields += A_INSERT_PROD_URL + "\t";
    if (gpreis.checked) spec_fields += A_INSERT_PROD_GPREIS + "\t";
    if (preis.checked) spec_fields += A_INSERT_PROD_SPREIS + "\t";
    spec["mwst"] = mwst.options[mwst.selectedIndex].value;
    spec["features"] = "";
    for (i in system["features"]) {
      if (!system["features"][i]) continue;
      if (eval("feats" + i + ".checked")) spec["features"] += i + ",";
    }
    spec["p_feature"] = featrs.options[featrs.selectedIndex].value;
  }
  with (s.document) {
    open();
    writeln(ADMIN_TOP + FONT_A);
    writeln("<FORM name=insert onSubmit='return false;'>");
    writeln("<TABLE width=560 border=0><TR><TD>" + FONT_A + A_INSERT_PAGE_VOR);
    writeln("</TD><TD align=right>");
    writeln(
      FONT_A_SMALL +
        "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#seite_template');\"",
    );
    writeln("value='" + A_NAME_HELP + "'></FONT></TD></TR>");
    writeln("<TR><TD colspan=2>" + FONT_A_SMALL);
    writeln("<TEXTAREA cols=100 rows=4 name=imp>");
    for (si in spec) write(spec[si] + "\t");
    writeln("\mwst" + spec_fields);
    writeln("</TEXTAREA>");
    writeln("</FONT></TD></TR>");
    writeln("</TABLE>");
    writeln("</FORM>");
    writeln(ADMIN_BOT);
    close();
  }
}
function Xih() {
  with (s.document) {
    if (isNaN(e_C_state)) {
      open();
      writeln(ADMIN_TOP);
      writeln(FONT_A_BIG + A_IMPORT_PAGE_ERR + "</FONT>");
      writeln(ADMIN_BOT);
      close();
      return;
    }
    open();
    writeln(ADMIN_TOP + FONT_A);
    writeln("<FORM name=insert onSubmit='parent.Xii()'>");
    writeln("<TABLE width=560 border=0><TR><TD>" + FONT_A + A_IMPORT_PAGE);
    writeln("</TD><TD align=right>");
    writeln(
      FONT_A +
        "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#seite_importieren');\"",
    );
    writeln("value='" + A_NAME_HELP + "'></FONT></TD></TR>");
    writeln("<TR><TD colspan=2>" + FONT_A_SMALL);
    writeln("<TEXTAREA cols=100 rows=4 name=imp>");
    writeln("</TEXTAREA><BR>");
    writeln("<INPUT type=submit value='" + A_IMPORT_PAGE_DO + "'>");
    writeln("<INPUT type=reset value='" + A_IMPORT_PAGE_DONT + "'>");
    writeln("</FONT></TD></TR>");
    writeln("</TABLE>");
    writeln("</FORM>");
    writeln(ADMIN_BOT);
    close();
  }
}
function Xii() {
  var val = "";
  if (!(s.document.insert.imp && s.document.insert)) {
    E_init_curr();
    alert("Form not found!");
    return;
  }
  if (!(val = s.document.insert.imp.value)) {
    E_init_curr();
    alert(A_IMPORT_PAGE_NODATA);
    return;
  }
  r_tmp = new Array();
  r_tmp = val.split("\mwst");
  rows = new Array();
  for (tm in r_tmp) {
    rows[tm] = new Array();
    rows[tm] = r_tmp[tm].split("\t");
  }
  firs = new Array();
  firs = rows.shift();
  if (firs.length < 8) {
    alert(A_IMPORT_PAGE_NOADMIN);
    E_init_curr();
    return;
  }
  if (firs[0] == "repl") {
    if (!confirm(AA_IMPORT_PAGE_ASK_OVWR)) {
      E_init_curr();
      return;
    }
  } else if (firs[0] == "add") {
  } else {
    alert(A_IMPORT_PAGE_NOADMIN);
    E_init_curr();
    return;
  }
  fields = new Array();
  fields = rows.shift();
  for (fi in fields) {
    field = unescape(e_print_header(fields[fi]));
    if (field == A_INSERT_PROD_NAME) fields[fi] = "name";
    else if (field == A_INSERT_PROD_TITEL) fields[fi] = "titel";
    else if (field == A_INSERT_PROD_DESC) fields[fi] = "desc";
    else if (field == A_INSERT_PROD_IMAGE) fields[fi] = "image";
    else if (field == A_INSERT_PROD_URL) fields[fi] = "url";
    else if (field == A_INSERT_PROD_GPREIS) fields[fi] = "gpreis";
    else if (field == A_INSERT_PROD_SPREIS) fields[fi] = "preis";
    else fields[fi] = "";
  }
  if (fields.length < 1) {
    alert(A_IMPORT_PAGE_NOFIELDS);
    E_init_curr();
    return;
  }
  if (firs[0] == "repl" && page[e_C_state]["artikel"]) {
    art = new Array();
    art = page[e_C_state]["artikel"].split(",");
    for (ai in art) {
      if (artikel[art[ai]]) artikel[art[ai]] = false;
    }
    page[e_C_state]["artikel"] = "";
  }
  for (ro in rows) {
    if (!rows[ro][0]) continue;
    if (!rows[ro][0].length) continue;
    for (i = 0; i <= artikel.length; i++) {
      if (!artikel[i]) {
        hash = i;
        break;
      }
    }
    if (hash > 10) {
      alert(A_DERR);
      E_init_curr();
      return;
    }
    artikel[hash] = new Array();
    artikel[hash]["htmltyp"] = firs[1];
    artikel[hash]["typ"] = firs[2];
    if (firs[3] == "true") artikel[hash]["menge"] = true;
    if (firs[4] == "true") artikel[hash]["preisa"] = true;
    artikel[hash]["mwst"] = firs[5];
    if (firs[6].length) {
      fet = new Array();
      fet = firs[6].split(",");
      fet_tmp = "";
      for (fix in fet) {
        if (system["features"][fet[fix]]) fet_tmp += fet[fix] + ",";
      }
      if (fet_tmp.length) {
        artikel[hash]["features"] = fet_tmp;
        if (artikel[hash]["features"].indexOf(firs[7]) != -1 && firs[7].length)
          artikel[hash]["p_feature"] = firs[7];
        else artikel[hash]["p_feature"] = "-1";
      }
    }
    page[e_C_state]["artikel"] += hash + ",";
    for (fe in fields) {
      if (!fields[fe].length) continue;
      if (!rows[ro][fe]) continue;
      if (!rows[ro][fe].length) tmp = "";
      else if (fields[fe] == "preis" || fields[fe] == "gpreis")
        tmp = b_add_record(rows[ro][fe]);
      else tmp = e_print_header(rows[ro][fe]);
      artikel[hash][fields[fe]] = tmp;
    }
  }
  E_init_curr();
  E_go("refresh");
}
function e_insert_navgif(p) {
  var freight = "";
  var mwst = "";
  var tt = "";
  var ng = "";
  var ngs = "";
  var bg = "";
  var su = false;
  var d = "e_check_browser()";
  if (p == "start") {
    e_print_navigation();
    return;
  }
  if (p == "basket" || p == "send" || p == "data") {
    alert(A_PAGE_ERR);
    E_init_curr();
    return;
  }
  if (p >= 0) {
    d = "E_init_shipping()";
    if (isNaN(p)) {
      alert(A_PAGE_ERR1);
      E_init_curr();
      return;
    }
    if (page[p]["url"]) freight = unescape(page[p]["url"]);
    if (page[p]["navgif"]) ng = unescape(page[p]["navgif"]);
    if (page[p]["navgifs"]) ngs = unescape(page[p]["navgifs"]);
    if (page[p]["bg"]) bg = unescape(page[p]["bg"]);
    mwst = unescape(page[p]["name"]);
    tt = unescape(page[p]["top_text"]);
    if (page[p]["summen"]) su = true;
  }
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln("<FORM name=insert onSubmit='parent." + d + ";'>");
    if (p >= 0) writeln("<INPUT type=hidden name=hash value='" + p + "'>");
    writeln("<TABLE width=560 border=0>");
    writeln("<TR><TD>" + FONT_A);
    writeln(
      A_PAGE_NAME +
        ": </TD><TD>" +
        FONT_A +
        "<INPUT type=text size=15 name='titel' value='" +
        mwst +
        "'></TD><TD bgcolor=#cc5577>" +
        FONT_A +
        "<FONT color=black>",
    );
    writeln(
      A_PAGE_URL +
        ": <BR>" +
        A_IF +
        " </TD><TD bgcolor=#cc5577>" +
        FONT_A +
        "<FONT color=black><INPUT type=text name='url' size=15 value='" +
        freight +
        "'>",
    );
    writeln("</TD></TR>");
    writeln("<TR><TD>" + FONT_A);
    writeln(
      A_PAGE_BG +
        ": </FONT><BR>" +
        FONT_A_SMALL +
        A_IF +
        " </FONT></TD><TD>" +
        FONT_A +
        "<INPUT type=text name='bg' size=15 value='" +
        bg +
        "'></TD><TD>" +
        FONT_A,
    );
    writeln(
      A_PAGE_NAV +
        ": </FONT><BR>" +
        FONT_A_SMALL +
        A_IF +
        " </FONT></TD><TD>" +
        FONT_A +
        "<INPUT type=text name='ng' size=15 value='" +
        ng +
        "'>",
    );
    writeln("</TD></TR>");
    writeln("<TR><TD>" + FONT_A);
    writeln(
      A_PAGE_NAVS +
        ": </FONT><BR>" +
        FONT_A_SMALL +
        A_IF +
        " </FONT></TD><TD>" +
        FONT_A +
        "<INPUT type=text name='ngs' size=15 value='" +
        ngs +
        "'>",
    );
    writeln(
      "</TD><TD>" +
        FONT_A +
        "<INPUT type=button onClick='parent.r.document.location.replace(\".\");' value='" +
        A_SHOWDIR +
        "'>",
    );
    writeln("</TD><TD align=right>");
    writeln(
      FONT_A_SMALL +
        "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#seite_einfuegen');\"",
    );
    writeln("value='" + A_NAME_HELP + "'></FONT>");
    writeln("</TD></TR>");
    writeln("<TR><TD>" + FONT_A);
    writeln(A_PAGE_TT + ": </FONT></TD>");
    writeln(
      "<TD colspan=3>" +
        FONT_A +
        " <TEXTAREA name='top_text' cols=50 rows=4 wrap=virtual>" +
        tt +
        "</TEXTAREA>",
    );
    writeln("</TD></TR>");
    writeln("<TR><TD>" + FONT_A);
    writeln(
      A_PAGE_SUM +
        ": </FONT><BR>" +
        FONT_A_SMALL +
        A_IF +
        " </FONT></TD><TD>" +
        FONT_A +
        "<INPUT type=checkbox name='summen'",
    );
    if (su) write(" checked ");
    writeln("></TD><TD colspan=2>" + FONT_A + "");
    writeln("<INPUT type=submit value='" + A_INSERT + "'>&nbsp;");
    if (p >= 0) {
      writeln(
        "<INPUT type=button value='" +
          A_DELETE +
          "' onClick='parent.errorHandler(" +
          p +
          ");'>",
      );
      writeln("&nbsp;&nbsp;&nbsp;");
      writeln(
        "<INPUT type=button value='" +
          A_UP +
          "' onClick='parent.e_thanks(" +
          p +
          ");'>",
      );
      writeln(
        "<INPUT type=button value='" +
          A_DOWN +
          "' onClick='parent.Xgv(" +
          p +
          ");'><BR>",
      );
    }
    writeln("</TD></TR>");
    writeln("</TABLE>");
    writeln("</FORM>");
    writeln(ADMIN_BOT);
    close();
  }
}
function Xgv(s_obj) {
  if (page.length == e_C_state + 1) return;
  for (i in page)
    if (i == s_obj) {
      hilf = page[i];
      page[i] = page[i + 1];
      page[i + 1] = hilf;
      break;
    }
  e_C_state += 1;
  LEFT = false;
  E_go("refresh");
  e_insert_navgif(e_C_state);
}
function e_thanks(s_obj) {
  if (s_obj == "0") return;
  for (i in page)
    if (i == s_obj) {
      hilf = page[i];
      page[i] = page[i - 1];
      page[i - 1] = hilf;
      break;
    }
  e_C_state -= 1;
  LEFT = false;
  E_go("refresh");
  e_insert_navgif(e_C_state);
}
function A_main() {
  e_print_features();
  E_main();
  ADMIN = true;
  B_lade_kunden();
  B_toMWST();
}
