//- -- Copyright 1998 pluto@iconnect.de --
//-
//- Coauthor kdoberstein@js-webShop.com
function a_init() {
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
      "Ein Mac!\n\n Leider kommt es auf ** manchen ** Mac's zu Problemen\nbeim abspeichern. Unter 8.5 war es besonders schwierig.\nBitte testen Sie erst das Abspeichern bevor Sie\nEinstellungen vornehmen!\n\n Danke.",
    );
  a_initTr();
}
function a_update() {
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
    ni = system.x.length + 1;
    system["payment"][ni] = new Array();
    system["payment"][ni]["name"] = "Per%20ccard.net";
    system["payment"][ni]["value"] = "undefined";
    system["payment"][ni]["limit"] = "undefined";
    system["payment"][ni]["msg"] =
      "Nach%20dem%20Abschicken%20werden%20Sie%20nach%20Ihren%20Kreditkarten%20Informationen%20gefragt.%20Die%20&Uuml;bertragung%20erfolgt%20verschl%26uuml%3Bsselt%20%28SSL%29.";
    system["payment"][ni]["activ"] = "mwst";
    system["payment"][ni]["action"] =
      "https%3A//secure.ccard.net/js_demo/basket.cgi";
    system["payment"][ni]["enctype"] = "application/x-www-form-urlencoded";
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
function a_initTr() {
  tr = new Array();
  tr["&iexcl;"] = new Array("¡", "­", "­", "Á");
  tr["&cent;"] = new Array("¢", "½", "›", "¢");
  tr["&pound;"] = new Array("£", "œ", "œ", "£");
  tr["&curren;"] = new Array("¤", "Ï", "¤", "Û");
  tr["&yen;"] = new Array("¥", "¾", "", "´");
  tr["&brvbar;"] = new Array("¦", "Ý", "¦", "¦");
  tr["&sect;"] = new Array("§", "õ", "", "¤");
  tr["&uml;"] = new Array("¨", "ù", "¨", "¬");
  tr["&copy;"] = new Array("©", "¸", "©", "©");
  tr["&ordf;"] = new Array("ª", "¦", "¦", "»");
  tr["&laquo;"] = new Array("«", "®", "®", "Ç");
  tr["&not;"] = new Array("¬", "ª", "ª", "Â");
  tr["&shy;"] = new Array("­", "­", "­", "Ð");
  tr["&reg;"] = new Array("®", "©", "®", "¨");
  tr["&macr;"] = new Array("¯", "î", "¯", "ø");
  tr["&deg;"] = new Array("°", "ø", "ø", "¡");
  tr["&plusmn;"] = new Array("±", "ñ", "ñ", "±");
  tr["&sup2;"] = new Array("²", "ý", "ý", "²");
  tr["&sup3;"] = new Array("³", "ü", "³", "³");
  tr["&acute;"] = new Array("´", "ï", "´", "«");
  tr["&micro;"] = new Array("µ", "µ", "µ", "µ");
  tr["&para;"] = new Array("¶", "ô", "¶", "¦");
  tr["&middot;"] = new Array("·", "ú", "ú", "á");
  tr["&cedil;"] = new Array("¸", "÷", "¸", "ü");
  tr["&sup1;"] = new Array("¹", "û", "¹", "¹");
  tr["&ordm;"] = new Array("º", "§", "§", "¼");
  tr["&raquo;"] = new Array("»", "¯", "¯", "È");
  tr["&frac14;"] = new Array("¼", "¬", "¬", "¼");
  tr["&frac12;"] = new Array("½", "«", "«", "½");
  tr["&frac34;"] = new Array("¾", "ó", "¾", "¾");
  tr["&iquest;"] = new Array("¿", "¨", "¨", "À");
  tr["&Agrave;"] = new Array("À", "·", "À", "Ë");
  tr["&Aacute;"] = new Array("Á", "µ", "Á", "ç");
  tr["&Acirc;"] = new Array("Â", "¶", "Â", "å");
  tr["&Atilde;"] = new Array("Ã", "Ç", "Ã", "Ì");
  tr["&Auml;"] = new Array("Ä", "Ž", "Ž", "€");
  tr["&Aring;"] = new Array("Å", "", "", "");
  tr["&AElig;"] = new Array("Æ", "’", "’", "®");
  tr["&Ccedil;"] = new Array("Ç", "€", "€", "‚");
  tr["&Egrave;"] = new Array("È", "Ô", "È", "é");
  tr["&Eacute;"] = new Array("É", "", "", "ƒ");
  tr["&Ecirc;"] = new Array("Ê", "Ò", "Ê", "æ");
  tr["&Euml;"] = new Array("Ë", "Ó", "Ë", "è");
  tr["&Igrave;"] = new Array("Ì", "Þ", "Ì", "í");
  tr["&Iacute;"] = new Array("Í", "Ö", "Í", "ê");
  tr["&Icirc;"] = new Array("Î", "×", "Î", "ë");
  tr["&Iuml;"] = new Array("Ï", "Ø", "Ï", "ì");
  tr["&ETH;"] = new Array("Ð", "Ñ", "Ð", "Ð");
  tr["&Ntilde;"] = new Array("Ñ", "¥", "¥", "„");
  tr["&Ograve;"] = new Array("Ò", "ã", "Ò", "ñ");
  tr["&Oacute;"] = new Array("Ó", "à", "Ó", "î");
  tr["&Ocirc;"] = new Array("Ô", "â", "Ô", "ï");
  tr["&Otilde;"] = new Array("Õ", "å", "Õ", "Í");
  tr["&Ouml;"] = new Array("Ö", "™", "™", "…");
  tr["&times;"] = new Array("×", "ž", "×", "×");
  tr["&Oslash;"] = new Array("Ø", "", "Ø", "¯");
  tr["&Ugrave;"] = new Array("Ù", "ë", "Ù", "ô");
  tr["&Uacute;"] = new Array("Ú", "é", "Ú", "ò");
  tr["&Ucirc;"] = new Array("Û", "ê", "Û", "ó");
  tr["&Uuml;"] = new Array("Ü", "š", "š", "†");
  tr["&Yacute;"] = new Array("Ý", "í", "Ý", "Ý");
  tr["&THORN;"] = new Array("Þ", "è", "Þ", "Þ");
  tr["&szlig;"] = new Array("ß", "á", "á", "§");
  tr["&agrave;"] = new Array("à", "…", "…", "ˆ");
  tr["&aacute;"] = new Array("á", " ", " ", "‡");
  tr["&acirc;"] = new Array("â", "ƒ", "ƒ", "‰");
  tr["&atilde;"] = new Array("ã", "Æ", "ã", "‹");
  tr["&auml;"] = new Array("ä", "„", "„", "Š");
  tr["&aring;"] = new Array("å", "†", "†", "Œ");
  tr["&aelig;"] = new Array("æ", "‘", "‘", "¾");
  tr["&ccedil;"] = new Array("ç", "‡", "‡", "");
  tr["&egrave;"] = new Array("è", "Š", "Š", "");
  tr["&eacute;"] = new Array("é", "‚", "‚", "Ž");
  tr["&ecirc;"] = new Array("ê", "ˆ", "ˆ", "");
  tr["&euml;"] = new Array("ë", "‰", "‰", "‘");
  tr["&igrave;"] = new Array("ì", "", "", "“");
  tr["&iacute;"] = new Array("í", "¡", "¡", "’");
  tr["&icirc;"] = new Array("î", "Œ", "Œ", "”");
  tr["&iuml;"] = new Array("ï", "‹", "‹", "•");
  tr["&eth;"] = new Array("ð", "Ð", "ð", "ð");
  tr["&ntilde;"] = new Array("ñ", "¤", "¤", "–");
  tr["&ograve;"] = new Array("ò", "•", "•", "˜");
  tr["&oacute;"] = new Array("ó", "¢", "¢", "—");
  tr["&ocirc;"] = new Array("ô", "“", "“", "™");
  tr["&otilde;"] = new Array("õ", "ä", "õ", "›");
  tr["&ouml;"] = new Array("ö", "”", "”", "š");
  tr["&divide;"] = new Array("÷", "ö", "ö", "Ö");
  tr["&oslash;"] = new Array("ø", "›", "ø", "¿");
  tr["&ugrave;"] = new Array("ù", "—", "—", "");
  tr["&uacute;"] = new Array("ú", "£", "£", "œ");
  tr["&ucirc;"] = new Array("û", "–", "–", "ž");
  tr["&uuml;"] = new Array("ü", "", "", "Ÿ");
  tr["&yacute;"] = new Array("ý", "ì", "ý", "ý");
  tr["&thorn;"] = new Array("þ", "ç", "þ", "þ");
  tr["&yuml;"] = new Array("ÿ", "˜", "˜", "Ø");
}
function a_myEscape(txtin) {
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
function a_show_help_ins() {
  s.document.open();
  s.document.writeln(ADMIN_TOP);
  s.document.writeln(FONT_A_BIG + A_SHOW_HELP_INS + "</FONT>");
  s.document.writeln(ADMIN_BOT);
  s.document.close();
}
function a_show_help_set() {
  s.document.open();
  s.document.writeln(ADMIN_TOP);
  s.document.writeln(FONT_A_BIG + A_SHOW_HELP_SET + "</FONT>");
  s.document.writeln(ADMIN_BOT);
  s.document.close();
}
function a_show_help_des() {
  s.document.open();
  s.document.writeln(ADMIN_TOP);
  s.document.writeln(FONT_A_BIG + A_SHOW_HELP_DES + "</FONT>");
  s.document.writeln(ADMIN_BOT);
  s.document.close();
}
function a_show_help(s_obj) {
  was = s_obj.options[s_obj.selectedIndex].value;
  s_obj.selectedIndex = 0;
  if (was == "help_ed") {
    a_show_help_ins();
    return;
  } else if (was == "help_set") {
    a_show_help_set();
    return;
  } else if (was == "help_des") {
    a_show_help_des();
    return;
  }
  A_doConfigSystem(was);
}
function a_print_frame() {
  with (m.document) {
    writeln(ADMIN_TOP);
    writeln("<FORM name=menu>");
    writeln("<CENTER><TABLE >");
    writeln("<TR>");
    writeln("<TD colspan=2 align=middle>" + FONT_A + A_PRINT_FRAME_TOP);
    writeln("<SELECT onChange='parent.a_show_help(this)' name=sel1>");
    writeln("<OPTION selected value='help_ed'>" + A_PRINT_FRAME_INS);
    writeln("<OPTION value='page'>" + A_PRINT_FRAME_ADDP);
    writeln("<OPTION value='ed_C'>" + A_PRINT_FRAME_ED_PAGE);
    writeln("<OPTION value='import'>" + A_PRINT_FRAME_IMPORT);
    writeln("<OPTION value='ins_art'>" + A_PRINT_FRAME_ADD1);
    writeln("<OPTION value='ed_art'>" + A_PRINT_FRAME_ED_ART);
    writeln("</SELECT><BR>");
    writeln("<SELECT onChange='parent.a_show_help(this)' name=sel2>");
    writeln("<OPTION value='help_des'>" + A_NAME_ADMIN_DES);
    writeln("<OPTION value='sf'>" + A_NAME_ADMIN_F);
    writeln("<OPTION value='nav'>" + A_NAME_ADMIN_NAV);
    writeln("<OPTION value='tbl'>" + A_NAME_ADMIN_TBL);
    writeln("<OPTION value='tbo'>" + A_NAME_ADMIN_TBO);
    writeln("<OPTION value='htm'>" + A_NAME_ADMIN_HTM);
    writeln("</SELECT><BR>");
    writeln("<SELECT onChange='parent.a_show_help(this)' name=sel3>");
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
    writeln("<INPUT type=button onClick='javascript:parent.A_save();'");
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
function a_ln(ln) {
  if (rounds > 10) {
    location.replace("http://www.js-webShop.com");
    return;
  }
  if (ln) {
    if (a_check_ln(ln)) system["ln"] = escape(ln);
    else alert(A_CHECK_LN);
  } else {
    if (system["ln"]) {
      if (a_check_ln(unescape(system["ln"]))) {
        a_print_frame();
        return;
      }
    }
    tln = prompt(A_NAME_LN + ":", "");
    if (a_check_ln(tln)) {
      system["ln"] = escape(tln);
      a_print_frame();
    } else a_ln();
  }
  return;
}
function a_check_ln(ln) {
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
function a_print_save() {
  s.document.open();
  s.document.writeln(ADMIN_TOP);
  s.document.writeln("<FORM name=config>");
  s.document.writeln("Hier Klicken zum abspeichern:");
  s.document.writeln("</FORM>");
  s.document.writeln(ADMIN_BOT);
  s.document.close();
}
function A_save() {
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
    writeln("<FORM name=save onSubmit='parent.a_do_save();'>");
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
function a_do_save() {
  netscape.security.PrivilegeManager.enablePrivilege("UniversalFileAccess");
  if (s.document.save.path.value != "") {
    path = s.document.save.path.value;
    if (WIN) path = path.substring(0, path.lastIndexOf("\\") + 1);
    else path = path.substring(0, path.lastIndexOf("/") + 1);
  } else path = unescape(s.document.save.defaultPath.value);
  file_index = path + unescape(admin["ind"]);
  file_shop = path + unescape(admin["start_file"]);
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
  a_save_index();
  out_index.write(ba_stream_index.toByteArray());
  out_index.close();
  out_art = new java.io.FileOutputStream(file_art);
  ba_stream_art = new java.io.ByteArrayOutputStream();
  FSA = new java.io.DataOutputStream(ba_stream_art);
  a_save_db();
  out_art.write(ba_stream_art.toByteArray());
  out_art.close();
  out_layout = new java.io.FileOutputStream(file_layout);
  ba_stream_layout = new java.io.ByteArrayOutputStream();
  FSL = new java.io.DataOutputStream(ba_stream_layout);
  a_save_system();
  out_layout.write(ba_stream_layout.toByteArray());
  out_layout.close();
  out_shop = new java.io.FileOutputStream(file_shop);
  ba_stream_shop = new java.io.ByteArrayOutputStream();
  FSS = new java.io.DataOutputStream(ba_stream_shop);
  a_save_frameset();
  out_shop.write(ba_stream_shop.toByteArray());
  out_shop.close();
  out_aq = new java.io.FileOutputStream(file_aq);
  ba_stream_aq = new java.io.ByteArrayOutputStream();
  FST = new java.io.DataOutputStream(ba_stream_aq);
  a_save_admin();
  out_aq.write(ba_stream_aq.toByteArray());
  out_aq.close();
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln(FONT_A_BIG + A_DO_SAVE_DONE);
    writeln(
      "<P><CENTER><A HREF='file:///" +
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
function a_save_frameset() {
  FSS.writeBytes(
    '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">\n<HTML>\n<HEAD>\n\n',
  );
  FSS.writeBytes("<TITLE>" + unescape(system["titel"]) + "</TITLE>\n");
  FSS.writeBytes(
    '<META name="author" content="' +
      unescape(system["betreiber"] + " " + system["email"]) +
      '">\n',
  );
  FSS.writeBytes(
    '<META name="generator" content="js-webShop V' +
      system["version"] +
      ' www.js-webShop.com">\n',
  );
  FSS.writeBytes(
    '<META name="author" content="' +
      unescape(system["betreiber"] + " " + system["email"]) +
      '">\n',
  );
  FSS.writeBytes("</HEAD>\n");
  FSS.writeBytes(
    "<NOSCRIPT>\n<H1>Please allow JavaScript to have a look at this Cs!<P>" +
      A_DO_SAVE_INDEX_NOSCRIPT +
      "</H1>\n</NOSCRIPT>\n\n",
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
</SCRIPT>\n\n\n',
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
</FRAMESET>\n\n <BODY> \n',
  );
  FSS.writeBytes(
    "\n\n<H1>Your browser doesn't support frames, we're sorry.<P>\n" +
      A_DO_SAVE_INDEX_NOFRAMES +
      "</H1>\n\n",
  );
  FSS.writeBytes("</BODY></HTML>");
}
function a_save_index() {
  var re = /(<.*?>)/gi;
  var re2 = /"/gi;
  var txt = "";
  var tt = "";
  FSI.writeBytes(
    '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">\n<HTML>\n<HEAD>\n\n',
  );
  FSI.writeBytes("<TITLE>" + unescape(system["titel"]) + "</TITLE>\n");
  FSI.writeBytes(
    '<META name="author" content="' +
      unescape(system["betreiber"] + " " + system["email"]) +
      '">\n',
  );
  FSI.writeBytes(
    '<META name="generator" content="js-webShop V' +
      system["version"] +
      ' www.js-webShop.com">\n',
  );
  FSI.writeBytes(
    '<META name="author" content="' +
      unescape(system["betreiber"] + " " + system["email"]) +
      '">\n',
  );
  FSI.writeBytes(
    '<META name="description" content="' + unescape(system["titel"]) + '">\n',
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
  FSI.writeBytes('">' + "\n");
  FSI.writeBytes("<script>\ndone = false;\n</script>\n");
  endung = file_shop.substring(file_shop.lastIndexOf("."), file_shop.length);
  FSI.writeBytes(
    "<script language='JavaScript1.2'>\n<!-- \
function go(){ \
var gt = document.fo.pass.value; \
eval(\"location.replace('\"+ gt +\"" +
      endung +
      "')\"); \
} \
//-->\n</script>",
  );
  FSI.writeBytes("</head>\n");
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
      "'>\n\n",
  );
  FSI.writeBytes(
    "\n\n<noscript> \n" +
      unescape(admin["start_noscript"]) +
      " \n</noscript>\n",
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
      admin["start_ok1"] +
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
      admin["start_ok2"] +
      "')); \
writeln(\"<FORM name=fo onSubmit='return false;'>\"); \n",
  );
  if (admin["password"] == "on") {
    FSI.writeBytes(
      "writeln(\"<INPUT type=text name=pass onChange='go()'>\");\n",
    );
    FSI.writeBytes('writeln("<INPUT type=button value=Weiter >");\n');
  } else
    FSI.writeBytes(
      'writeln("<INPUT type=button value=weiter onClick=\'location.replace(\\\"' +
        unescape(admin["start_file"]) +
        '\\\");\'>");\n',
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
      admin["start_old"] +
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
var my_img = new Array(); \n",
  );
  var co = 0;
  var tmp = "";
  for (im in system) {
    if (system[im]) {
      tmp = unescape(system[im]);
      tmpsrc = tmp.match(/([a-z|0-9|_|\-|\/|\\]*\.+(jpg|gif))/i);
      if (tmpsrc) {
        FSI.writeBytes("my_img[" + co + "] = '" + tmpsrc[0] + "';\n");
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
          FSI.writeBytes("my_img[" + co + "] = '" + tmpsrc[0] + "';\n");
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
      "'; \n",
  );
  if (admin["password"] == "off")
    FSI.writeBytes(
      "setTimeout('location.replace(\"" +
        unescape(admin["start_file"]) +
        "\")', 2000);\n",
    );
  FSI.writeBytes("//--> \n</script>\n\n\n");
  FSI.writeBytes(
    "<TABLE " +
      TBG_PT +
      " width='" +
      T_W +
      "' border='" +
      TB_P +
      "' cellpadding='" +
      TP_P +
      "'>\n",
  );
  FSI.writeBytes(
    "<TR><TD>" +
      FONT +
      "<FONT size=-3 color='" +
      unescape(system["tbg_pt"]) +
      "'>\n",
  );
  FSI.writeBytes(unescape(system["titel"]) + "\n\n");
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
function a_save_admin() {
  a_save_header(FST);
  FST.writeBytes("var admin = new Array();\n");
  for (i in admin) {
    FST.writeBytes("admin['" + i + "'] = '" + admin[i] + "';\n");
  }
}
function a_save_system() {
  a_save_header(FSL);
  FSL.writeBytes("var Q = new Array();\n");
  for (i in system) {
    if (i == "currency" || i == "mwst") {
      FSL.writeBytes("system['" + i + "'] = new Array();\n");
      for (f in system[i]) {
        FSL.writeBytes(
          "system['" + i + "']['" + f + "'] = '" + system[i][f] + "';\n",
        );
      }
    } else if (
      i == "address" ||
      i == "freight" ||
      i == "areas" ||
      i == "payment" ||
      i == "features"
    ) {
      FSL.writeBytes("system['" + i + "'] = new Array();\n");
      for (k in system[i]) {
        if (!system[i][k] && i == "features") continue;
        FSL.writeBytes("system['" + i + "'][" + k + "] = new Array();\n");
        for (f in system[i][k]) {
          FSL.writeBytes(
            "system['" +
              i +
              "'][" +
              k +
              "]['" +
              f +
              "'] = '" +
              system[i][k][f] +
              "';\n",
          );
        }
      }
    } else if (i == "ewu") {
      FSL.writeBytes("system['" + i + "'] = new Array();\n");
      for (k in system[i]) {
        FSL.writeBytes("system['" + i + "']['" + k + "'] = new Array();\n");
        for (f in system[i][k]) {
          FSL.writeBytes(
            "system['" +
              i +
              "']['" +
              k +
              "']['" +
              f +
              "'] = '" +
              system[i][k][f] +
              "';\n",
          );
        }
      }
    } else {
      if (system[i] != "do_not_save")
        FSL.writeBytes("system['" + i + "'] = '" + system[i] + "';\n");
    }
  }
}
function a_save_db() {
  a_save_header(FSA);
  FSA.writeBytes("var A = new Array();\n");
  FSA.writeBytes("var B = new Array();\n");
  FSA.writeBytes("var C = new Array();\n");
  for (i in page) {
    if (i == "length") {
      continue;
    }
    FSA.writeBytes("page[" + i + "] = new Array();\n");
    for (j in page[i]) {
      FSA.writeBytes("page[" + i + "]['" + j + "'] = '" + page[i][j] + "';\n");
    }
  }
  for (i in artikel) {
    if (!artikel[i]) {
      continue;
    }
    if (i == "length") {
      continue;
    }
    FSA.writeBytes("artikel[" + i + "] = new Array();\n");
    for (j in artikel[i]) {
      if (!artikel[i][j]) continue;
      FSA.writeBytes(
        "artikel[" + i + "]['" + j + "'] = '" + artikel[i][j] + "';\n",
      );
    }
  }
}
function a_save_header(i_strm) {
  i_strm.writeBytes("\n //- -- Copyright 1998 / 1999 iConnect.de --\n");
  i_strm.writeBytes(" //- -- Contact pluto@iconnect.de --\n");
  i_strm.writeBytes(" //- -- coAuthor kdoberstein@js-webShop.de --\n");
}
function a_set_config(io) {
  if (io.type == "text") system[io.name] = a_myEscape(io.value);
  else if (io.type == "select-one") {
    var wert = "" + io.options[io.selectedIndex].value;
    if (wert == "enter") {
      wert = prompt(A_CONFIG_SYSTEM_SL_ASK, "");
      if (wert.length == 0) return;
    }
    system[io.name] = a_myEscape(wert);
  } else if (io.type == "checkbox") {
    if (io.checked) system[io.name] = "on";
    else system[io.name] = "off";
  } else if (io.type == "textarea") system[io.name] = a_myEscape(io.value);
  else alert("NOT DEFINED! " + io.type);
  E_init();
  LEFT = false;
  E_go("refresh");
}
function A_doConfigSystem(setup) {
  //noch:event für onclick auf radio-button raussuchen
  var auswahl, selectname, configname;
  var txt_name, txt_value, txt_y, err_txt;
  var idx = "-1";
  if (setup == "page") {
    a_page();
    return;
  } else if (setup == "ins_art") {
    a_product();
    return;
  } else if (setup == "ed_C") {
    a_page(e_page_state);
    return;
  } else if (setup == "vorlage") {
    a_import_first();
    return;
  } else if (setup == "import") {
    a_import_pages();
    return;
  } else if (setup == "ed_art") {
    a_editProd();
    return;
  } else if (setup == "sw") {
    a_curr(idx);
    return;
  } else if (setup == "sa") {
    a_address("-1");
    return;
  } else if (setup == "sfr") {
    ART = "freight";
    a_vs("-1");
    return;
  } else if (setup == "slg") {
    ART = "areas";
    a_vs("-1");
    return;
  } else if (setup == "smw") {
    a_mwst("-1");
    return;
  } else if (setup == "sza") {
    a_payment("-1");
    return;
  } else if (setup == "tbl") {
    a_color("-1");
    return;
  } else if (setup == "tbo") {
    a_border("-1");
    return;
  } else if (setup == "sf") {
    a_font("-1");
    return;
  } else if (setup == "vs") {
    a_config("-1");
    return;
  } else if (setup == "sft") {
    a_feature("-1");
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
          "' onChange='parent.a_set_config(this);'></TD>",
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SB_TITEL +
          "</TD><TD><INPUT type=text name='titel' value='" +
          unescape(system["titel"]) +
          "' onChange='parent.a_set_config(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SB_B +
          "</TD><TD><INPUT type=text name='betreiber' value='" +
          unescape(system["betreiber"]) +
          "' onChange='parent.a_set_config(this);'></TD>",
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SB_E +
          "</TD><TD><INPUT type=text name='email' value='" +
          unescape(system["email"]) +
          "' onChange='parent.a_set_config(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SB_T +
          "</TD><TD><INPUT type=text name='tel' value='" +
          unescape(system["tel"]) +
          "' onChange='parent.a_set_config(this);'></TD>",
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SB_F +
          "</TD><TD><INPUT type=text name='fax' value='" +
          unescape(system["fax"]) +
          "' onChange='parent.a_set_config(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SB_S +
          "</TD><TD><INPUT type=text name='str' value='" +
          unescape(system["str"]) +
          "' onChange='parent.a_set_config(this);'></TD>",
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SB_C +
          "</TD><TD><INPUT type=text name='city' value='" +
          unescape(system["city"]) +
          "' onChange='parent.a_set_config(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SB_CO +
          "</TD><TD><INPUT type=text name='country' value='" +
          unescape(system["country"]) +
          "' onChange='parent.a_set_config(this);'></TD>",
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SB_PB +
          "</TD><TD><INPUT type=text name='txt_pn' value='" +
          unescape(system["txt_pn"]) +
          "' onChange='parent.a_set_config(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SB_LU +
          "</TD><TD><INPUT type=text name='leave_url' value='" +
          unescape(system["leave_url"]) +
          "' onChange='parent.a_set_config(this);'></TD>",
      );
      writeln("<TD>&nbsp;</TD><TD>&nbsp;</TD></TR>");
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SB_SO +
          "</TD><TD colspan=3><TEXTAREA rows=10 cols=50 name='sonstiges' onChange='parent.a_set_config(this);' wrap=virtual>" +
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
          "' onChange='parent.a_set_config(this);'></TD>" +
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
          "' onChange='parent.a_set_config(this);'></TD>" +
          FONT_A,
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_NSEL +
          "</TD><TD><INPUT type=text name='gif_nsel' value='" +
          unescape(system["gif_nsel"]) +
          "' onChange='parent.a_set_config(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_NBG +
          "</TD><TD><INPUT type=text name='np_bg' value='" +
          unescape(system["np_bg"]) +
          "' onChange='parent.a_set_config(this);'></TD>" +
          FONT_A,
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_BG +
          "</TD><TD><INPUT type=text name='pt_bg' value='" +
          unescape(system["pt_bg"]) +
          "' onChange='parent.a_set_config(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_B +
          "</TD><TD><INPUT type=text name='b_img' value='" +
          unescape(system["b_img"]) +
          "' onChange='parent.a_set_config(this);'></TD>" +
          FONT_A,
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_B_A +
          "</TD><TD><INPUT type=text name='b_a_img' value='" +
          unescape(system["b_a_img"]) +
          "' onChange='parent.a_set_config(this);'></TD></TR>",
      );
      writeln("<TR><TD>&nbsp;</TD><TD>&nbsp;</TD>");
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_B_B +
          "<TD><INPUT type=text name='b_b_img' value='" +
          unescape(system["b_b_img"]) +
          "' onChange='parent.a_set_config(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_LEAVE +
          "</TD><TD><INPUT type=text name='leave' value='" +
          unescape(system["leave"]) +
          "' onChange='parent.a_set_config(this);'></TD>" +
          FONT_A,
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_SEARCH +
          "</TD><TD><INPUT type=text name='search' value='" +
          unescape(system["search"]) +
          "' onChange='parent.a_set_config(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_GOLEFT +
          "</TD><TD><INPUT type=text name='goleft' value='" +
          unescape(system["goleft"]) +
          "' onChange='parent.a_set_config(this);'></TD>" +
          FONT_A,
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_GORIGHT +
          "</TD><TD><INPUT type=text name='goright' value='" +
          unescape(system["goright"]) +
          "' onChange='parent.a_set_config(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_START +
          "</TD><TD><INPUT type=text name='navgif_start' value='" +
          unescape(system["navgif_start"]) +
          "' onChange='parent.a_set_config(this);'></TD>",
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_STARTS +
          "</TD><TD><INPUT type=text name='navgifs_aq' value='" +
          unescape(system["navgifs_aq"]) +
          "' onChange='parent.a_set_config(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_BASKET +
          "</TD><TD><INPUT type=text name='navgif_basket' value='" +
          unescape(system["navgif_basket"]) +
          "' onChange='parent.a_set_config(this);'></TD>",
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_BASKETS +
          "</TD><TD><INPUT type=text name='navgifs_basket' value='" +
          unescape(system["navgifs_basket"]) +
          "' onChange='parent.a_set_config(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_DATA +
          "</TD><TD><INPUT type=text name='navgif_data' value='" +
          unescape(system["navgif_data"]) +
          "' onChange='parent.a_set_config(this);'></TD>",
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_DATAS +
          "</TD><TD><INPUT type=text name='navgifs_data' value='" +
          unescape(system["navgifs_data"]) +
          "' onChange='parent.a_set_config(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_SEND +
          "</TD><TD><INPUT type=text name='navgif_send' value='" +
          unescape(system["navgif_send"]) +
          "' onChange='parent.a_set_config(this);'></TD>",
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_SENDS +
          "</TD><TD><INPUT type=text name='navgifs_send' value='" +
          unescape(system["navgifs_send"]) +
          "' onChange='parent.a_set_config(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_S_ON +
          "</TD><TD><INPUT type=text name='s_on' value='" +
          unescape(system["s_on"]) +
          "' onChange='parent.a_set_config(this);'></TD>",
      );
      writeln(
        "<TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_S_OFF +
          "</TD><TD><INPUT type=text name='s_off' value='" +
          unescape(system["s_off"]) +
          "' onChange='parent.a_set_config(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_NAV_COOKIE +
          "</TD><TD><INPUT type=text name='cookie' value='" +
          unescape(system["cookie"]) +
          "' onChange='parent.a_set_config(this);'></TD>",
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
          "' onChange='parent.a_set_config(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" + FONT_A + A_CONFIG_SYSTEM_SL_E + "</TD><TD>" + FONT_A,
      );
      write("<SELECT name='enctype' ");
      writeln(" onChange='parent.a_set_config(this);'>");
      write("<OPTION value='text/plain'");
      if ("text/plain" == unescape(system["enctype"])) write(" selected ");
      writeln(">" + A_CONFIG_SYSTEM_SL_MAIL);
      write("<OPTION value='application/x-www-form-urlencoded'");
      if ("application/x-www-form-urlencoded" == unescape(system["enctype"]))
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
          "' onChange='parent.a_set_config(this);'><BR>&nbsp;&nbsp;",
      );
      writeln(
        A_CONFIG_SYSTEM_SL_ZIN +
          " &nbsp;&nbsp;<INPUT type=text name='zin' size=15 value='" +
          unescape(system["zin"]) +
          "' onChange='parent.a_set_config(this);'><BR>",
      );
      writeln(
        A_CONFIG_SYSTEM_SL_ZIV +
          "&nbsp;<INPUT type=text name='ziv' size=35 value='" +
          unescape(system["ziv"]) +
          "' onChange='parent.a_set_config(this);'></TD></TR>",
      );
      writeln("<TR><TD>" + FONT_A + A_CONFIG_SYSTEM_SL_COM + "</TD><TD>");
      writeln(
        "<INPUT type=checkbox name='com' onClick='parent.a_set_config(this);'",
      );
      if (system["com"] == "on") write(" checked ");
      writeln("></TD></TR>");
    } else if (setup == "htm") {
      writeln("<TR><TD>" + FONT_A + A_NAME_ADMIN_HTM + "</TD></TR>");
      writeln("<TR>\n<TD colspan=2>");
      writeln(
        "<INPUT type=radio name=htm value='page_top' onClick='parent.a_htm(this);'><A HREF='javascript:parent.a_htm(\"" +
          "page_top" +
          "\")' onclick='sysedit.htm[0].checked = true'>" +
          A_CONFIG_SYSTEM_HTM_PT +
          "</A>",
      );
      writeln(
        "<INPUT type=radio name=htm value='page_summen' onClick='parent.a_htm(this);'><A HREF='javascript:parent.a_htm(\"" +
          "page_summen" +
          "\")' onclick='sysedit.htm[1].checked = true'>" +
          A_CONFIG_SYSTEM_HTM_PS +
          "</A>",
      );
      writeln(
        "<INPUT type=radio name=htm value='page_bottom' onClick='parent.a_htm(this);'><A HREF='javascript:parent.a_htm(\"" +
          "page_bottom" +
          "\")' onclick='sysedit.htm[2].checked = true'>" +
          A_CONFIG_SYSTEM_HTM_PB +
          "</A>",
      );
      writeln(
        "<INPUT type=radio name=htm value='nav_page_top' onClick='parent.a_htm(this);'><A HREF='javascript:parent.a_htm(\"" +
          "nav_page_top" +
          "\")' onclick='sysedit.htm[3].checked = true'>" +
          A_CONFIG_SYSTEM_HTM_NPT +
          "</A>",
      );
      writeln(
        "<INPUT type=radio name=htm value='nav_page_bottom' onClick='parent.a_htm(this);'><A HREF='javascript:parent.a_htm(\"" +
          "nav_page_bottom" +
          "\")' onclick='sysedit.htm[4].checked = true'>" +
          A_CONFIG_SYSTEM_HTM_NPB +
          "</A>",
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
          "<TEXTAREA align=textop cols=50 rows=10 name='htmltext' value='' onChange='parent.a_htm(this);' wrap='virtual'>",
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
function a_2pf(str) {
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
function a_payment(i_obj) {
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
    val = b_nzahl(system["payment"][idx]["value"]);
    lim = b_nzahl(system["payment"][idx]["limit"]);
    ac = system["payment"][idx]["activ"];
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
    writeln("<TR>\n<TD valign=top rowspan=12>");
    writeln(
      FONT_A + "<SELECT name=\"xs\" onChange='parent.a_payment(this);' size=8>",
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
          "' onChange='parent.a_edit_payment(\"" +
          idx +
          "\");'></FONT></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_SZA_MSG +
          "</FONT></TD><TD>" +
          FONT_A +
          "<TEXTAREA cols=15 rows=3 name='msg' wrap=virtual onChange='parent.a_edit_payment_value(\"" +
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
          "' onChange='parent.a_edit_payment_value(\"" +
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
          "' onChange='parent.a_edit_payment_value(\"" +
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
          "<INPUT type=checkbox name='act' onClick='parent.a_edit_payment_value(\"" +
          idx +
          "\");'",
      );
      if (ac == "limit") write("checked");
      writeln("></TD></TR>");
    }
    writeln("<TR><TD>" + FONT_A + A_CONFIG_SYSTEM_SZA_CASH + "</TD><TD>");
    writeln(
      FONT_A +
        '<SELECT name="eca" onChange=\'parent.a_set_payment_curr(this,"' +
        idx +
        "\");'>",
    );
    writeln("<OPTION value='null'>" + A_CONFIG_SYSTEM_SZA_ALL);
    for (k in system["ewu"])
      if (system["ewu"][k]["use"] == "limit") {
        write("<OPTION value='" + k + "'");
        if (k == ix) write("selected");
        writeln(">" + system["ewu"][k]["name"]);
      }
    for (j in system["currency"]) {
      if (j == "base") continue;
      write("<OPTION value='" + j + "'");
      if (j == ix) write("selected");
      writeln(">" + j);
    }
    writeln("</SELECT></TD></TR>");
    if (idx == "neu")
      writeln(
        "<TR><TD>" +
          FONT_A_SMALL +
          "<INPUT type=button value='" +
          A_INSERT +
          "' onClick='parent.a_new_payment();'></FONT></TD></TR>",
      );
    else {
      writeln(
        "<TR><TD>" +
          FONT_A_SMALL +
          "<INPUT type=button value='" +
          A_DO +
          "' onClick='parent.a_paymentMerkmale(this,\"" +
          idx +
          "\");'>",
      );
      writeln(
        "<INPUT type=button value='" +
          A_CONFIG_SYSTEM_SZA_ACTION +
          "' onClick='parent.a_paymentAction(\"" +
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
function a_set_payment_curr(i_obj, idx) {
  PAYCURR = i_obj.options[i_obj.selectedIndex].value;
  if (idx != "neu") {
    system["payment"][idx]["curr"] = PAYCURR;
    E_init_shipping();
    E_go("data");
  }
}
function a_new_payment() {
  with (s.document.sys_x) {
    if (!na.value) {
      alert("A_CONFIG_SYSTEM_SZA_CHO");
      return;
    }
    idx = system["payment"].length;
    system["payment"][idx] = new Array();
    system["payment"][idx]["name"] = a_myEscape(na.value);
    if (PAYCURR) system["payment"][idx]["curr"] = PAYCURR;
    a_edit_payment_value(idx);
    a_payment("-1");
  }
}
function a_edit_payment(idx) {
  with (s.document.sys_x) {
    if (na.value) system["payment"][idx]["name"] = a_myEscape(na.value);
    E_init_shipping();
    E_go("data");
    a_payment(idx);
  }
}
function a_edit_payment_value(idx) {
  with (s.document.sys_x) {
    system["payment"][idx]["value"] = a_2pf(val.value);
    system["payment"][idx]["limit"] = a_2pf(lim.value);
    if (msg.value) system["payment"][idx]["msg"] = a_myEscape(msg.value);
    if (system["payment"][idx]["msg"])
      system["payment"][idx]["msg"] = a_myEscape(msg.value);
    if (act.checked) system["payment"][idx]["activ"] = "limit";
    else system["payment"][idx]["activ"] = "mwst";
    E_init_shipping();
    E_go("data");
  }
}
function a_doDelPay(idx) {
  a_delete_sys("payment", idx);
  E_init_shipping();
  E_go("data");
  a_payment("-1");
}
function a_delete_sys(art, idx) {
  var sys_array = new Array();
  j = 0;
  len = system[art].length;
  for (i in system[art]) {
    if (i < idx) j = i;
    if (i == idx) i++;
    if (i > idx) j = i - 1;
    if (j == len - 1) break;
    sys_array[j] = system[art][i];
  }
  system[art] = sys_array;
}
function a_paymentMerkmale(i_obj, idx) {
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
    writeln("<TR>\n<TD valign=top width=35% rowspan=12>");
    writeln(
      FONT_A +
        '<SELECT name="xs" onChange=\'parent.a_paymentMerkmale(this,"' +
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
        "' onChange='parent.a_edit_paymentMerkmale(this,\"" +
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
          "' name='del' onClick='parent.a_edit_paymentMerkmale(this,\"" +
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
        "' onClick='parent.a_payment(\"" +
        idx +
        "\");'></TD></TR>",
    );
    writeln("</TABLE>");
    writeln("</FORM>");
    writeln(ADMIN_BOT);
    close();
  } //with
}
function a_edit_paymentMerkmale(i_obj, idx, ind) {
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
    for (j in system["payment"][idx]) {
      if (j != ind) sys_array[j] = system["payment"][idx][j];
    }
    system["payment"][idx] = sys_array;
    ind = "-1";
  }
  E_go("refresh");
  a_paymentMerkmale(ind, idx);
}
function a_feature_types() {
  var g = new Array();
  g[0] = "select";
  g[1] = "multiple-select";
  g[2] = "radio";
  g[3] = "checkbox";
  g[4] = "text";
  return g;
}
function a_feature(i_obj) {
  var f = new Array();
  var na = (req = "");
  idx = "neu";
  ftype = "";
  f = a_feature_types();
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
    writeln("<TR>\n<TD valign=top rowspan=12>");
    writeln(
      FONT_A +
        "<SELECT name=\"fts\" onChange='parent.a_feature(this);' size=8>",
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
      write("onChange='parent.a_edit_feature(this,\"" + idx + "\");'");
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
      write("onClick='parent.a_edit_feature(this,\"" + idx + "\");'");
      if (req == "limit") write("checked");
    }
    writeln("></TD></TR>");
    write("<TR><TD>" + FONT_A + '<SELECT name="ftstype"');
    if (idx != "neu")
      write("onChange='parent.a_edit_feature(this,\"" + idx + "\");'");
    writeln(">");
    for (i in f) {
      write("<OPTION value='" + i + "'");
      if (f[i] == ftype) write("selected");
      writeln(">" + f[i]);
    }
    writeln("</SELECT></TD></TR>");
    if (idx == "neu")
      writeln(
        "<TR><TD>" +
          FONT_A_SMALL +
          "<INPUT type=button value='" +
          A_INSERT +
          "' onClick='parent.a_edit_feature(this,\"" +
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
          "' onClick='parent.a_delete_feature();'></FONT></TD>",
      );
      writeln(
        "<TD>" +
          FONT_A_SMALL +
          "<INPUT type=button value='" +
          A_DO_MORE +
          "' onClick='parent.a_more_features(\"" +
          idx +
          "\", this);'></FONT></TD></TR>",
      );
    }
    writeln("</TABLE></FORM>");
    writeln(ADMIN_BOT);
    close();
  } //with
}
function a_next_feature_idx() {
  var idx = system.features.length;
  for (i = 0; i < system.features.length; i++)
    if (!system.features[i]) {
      idx = i;
      break;
    }
  return idx;
}
function a_edit_feature(i_obj, i) {
  var f = new Array();
  f = a_feature_types();
  if (i_obj.type == "text") {
    if (i_obj.value) system.features[i].name = escape(i_obj.value);
    else return;
  } else if (i_obj.type == "checkbox") {
    if (i_obj.checked) system.features[i].required = "limit";
    else system.features[i].required = "mwst";
  } else if (i_obj.type == "select-one") {
    idx = i_obj.options[i_obj.selectedIndex].value;
    for (j in f) if (j == idx) system.features[i].ftype = f[j];
  } else if (i_obj.type == "button") {
    with (s.document.sys_fts) {
      if (!na.value) return;
      i = a_next_feature_idx();
      system.features[i] = new Array();
      system.features[i].name = escape(na.value);
      if (req.checked) system.features[i].required = "limit";
      else system.features[i].required = "mwst";
      idx = ftstype.options[ftstype.selectedIndex].value;
      for (j in f) if (j == idx) system.features[i].ftype = f[j];
    }
  }
  E_go("refresh");
  a_feature(i);
}
function a_delete_feature() {
  var pos,
    f = new Array();
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
    a_feature("-1");
  }
}
function a_more_features(ix, i_obj) {
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
    writeln("<TR>\n<TD valign=top rowspan=12>");
    writeln(
      FONT_A +
        '<SELECT name="fts" onChange=\'parent.a_more_features("' +
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
        "onChange='parent.a_edit_more_features(this,\"" +
          ix +
          '","' +
          idx +
          "\");'",
      );
    writeln("></FONT></TD></TR>");
    if (idx == "neu")
      writeln(
        "<TR><TD>" +
          FONT_A_SMALL +
          "<INPUT type=button value='" +
          A_INSERT +
          "' onClick='parent.a_edit_more_features(this,\"" +
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
          "' onClick='parent.a_delete_more_features(\"" +
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
        "' onClick='parent.a_feature(\"" +
        ix +
        "\");'></FONT></TD></TR>",
    );
    writeln("</TABLE></FORM>");
    writeln(ADMIN_BOT);
    close();
  } //with
}
function a_edit_more_features(i_obj, ix, idx) {
  with (s.document.sys_morefts) {
    if (!na.value) return;
    if (i_obj.type == "button") {
      idx = system["features"][ix].length;
      system["features"][ix][idx] = new Array();
    }
    system["features"][ix][idx] = escape(na.value);
    E_go("refresh");
    a_more_features(ix, idx);
  }
}
function a_delete_more_features(ix, idx) {
  var f = new Array();
  na = system["features"][ix]["name"];
  req = system["features"][ix]["required"];
  ftype = system["features"][ix]["ftype"];
  for (i in system["features"][ix]) {
    if (i < idx) f[i] = system["features"][ix][i];
    else f[i] = system["features"][ix][i + 1];
    if (i + 1 == system["features"][ix].length - 1) break;
  }
  system["features"][ix] = f;
  system["features"][ix]["required"] = req;
  system["features"][ix]["name"] = na;
  system["features"][ix]["ftype"] = ftype;
  E_go("refresh");
  a_more_features(ix, "-1");
}
function a_base_mwst(txt) {
  system["nbase"] = txt;
  nshow = txt;
  LEFT = false;
  a_mwst("-1");
  E_go("refresh");
}
function a_mwst(i_obj) {
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
    writeln("<TR>\n<TD valign=top>" + FONT_A);
    writeln(
      "<INPUT type=radio name=mw value = 'brutto' onClick='parent.a_base_mwst(this.value);'",
    );
    if (system["nbase"] == "brutto") write("checked");
    writeln(
      "><A HREF='javascript:parent.a_base_mwst(\"brutto\");' onclick='sys_ns.mw[0].checked = true'>" +
        "Preise sind brutto" +
        "</A>",
    );
    writeln(
      "</TD><TD colspan=2>" +
        FONT_A +
        "<INPUT type=radio name=mw value = 'netto' onClick='parent.a_base_mwst(this.value);'",
    );
    if (system["nbase"] == "netto") write("checked");
    writeln(
      "><A HREF='javascript:parent.a_base_mwst(\"netto\");' onclick='sys_ns.mw[1].checked = true'>" +
        "Preise sind netto" +
        "</A></TD>",
    );
    write("<TR><TD>" + FONT_A_BIG + A_NAME_ADMIN_SMW + "</FONT></TD>");
    if (idx == "neu") write("<TD>" + FONT_A_BIG + A_INSERT + "</FONT></TD>");
    else write("<TD>" + FONT_A_BIG + A_CHANGE + "</FONT></TD>");
    writeln(
      "<TD align=right>" +
        FONT_A_SMALL +
        "<INPUT type=button onClick=\"parent.r.document.location.replace('../help/index.htm#n');\"",
    );
    writeln("value='" + A_NAME_HELP + "'></FONT></TD></TR>");
    writeln(
      "<TR><TD rowspan=7>" +
        FONT_A +
        "<SELECT name=\"n\" onChange='parent.a_mwst(this);' size=6>",
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
        "' onChange='parent.a_edit_mwst(this,\"" +
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
          "' onClick='parent.a_edit_mwst(this,\"" +
          idx +
          "\");'>",
      );
    writeln("</TD></TR>");
    writeln("</TABLE></FORM>");
    writeln(ADMIN_BOT);
    close();
  } //with
}
function a_edit_mwst(i_obj, idx) {
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
      a_delete_sys("mwst", idx);
      idx = "-1";
    }
    E_go("refresh");
    a_mwst(idx);
  } //of with
}
function a_address(i_obj) {
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
    writeln("<TR>\n<TD valign=top width=35% rowspan=12>");
    writeln(
      FONT_A +
        "<SELECT name=\"Wes\" onChange='parent.a_address(this);' size=8>",
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
          "' onChange='parent.a_edit_address(\"" +
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
          "' onChange='parent.a_edit_address(\"" +
          idx +
          "\");'></TD></TR>",
      );
      write(
        "<TR><TD colspan=2>" +
          FONT_A +
          "<INPUT type=checkbox name='req' onClick='parent.a_address_required(\"" +
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
        '<SELECT name="valid" onChange=\'parent.a_address_validation(this,"' +
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
          "'onClick='parent.a_new_address();'>",
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
          "' onClick='parent.a_delete_address(\"" +
          idx +
          "\");'>",
      );
    }
    writeln("</TD></TR></TABLE></FORM>");
    writeln(ADMIN_BOT);
    close();
  }
}
function a_edit_address(idx) {
  with (s.document.sys_Wes) {
    if (na.value) {
      system["address"][idx]["name"] = a_myEscape(na.value);
      system["address"][idx]["default"] = a_myEscape(de.value);
      E_go("data");
    } else alert(A_CONFIG_SYSTEM_SA_ADD);
  }
}
function a_address_required(idx) {
  if (idx == "neu") return;
  if (system["address"][idx]["required"] == "no")
    system["address"][idx]["required"] = "yes";
  else system["address"][idx]["required"] = "no";
  E_go("data");
}
function a_new_address() {
  var idx = system["address"].length;
  with (s.document.sys_Wes) {
    system["address"][idx] = new Array();
    system["address"][idx]["validation"] = VAL;
    if (req.checked) system["address"][idx]["required"] = "yes";
    else system["address"][idx]["required"] = "no";
    a_edit_address(idx);
    a_address("-1");
  }
}
function a_address_validation(i_obj, idx) {
  VAL = i_obj.options[i_obj.selectedIndex].value;
  if (idx != "neu") {
    system["address"][idx]["validation"] = a_myEscape(VAL);
    E_go("data");
  }
}
function a_delete_address(idx) {
  a_delete_sys("address", idx);
  E_go("data");
  a_address("-1");
}
function a_curr(i_obj) {
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
      if (B_isEu(idx) == "false")
        factor = a_parse_factor(system["currency"][idx]);
      else {
        if (idx != "EUR") jfactor = a_parse_factor(system["ewu"][idx]["euro"]);
        else if (EUROLAND == "true")
          jfactor = a_parse_factor(system["ewu"][CURR]["euro"]);
        else factor = a_parse_factor(system["currency"][idx]);
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
    writeln("<TR>\n<TD valign=top width=35% rowspan=12>" + FONT_A);
    writeln(
      "<INPUT type=radio name=T value ='ewu' onClick='parent.a_doSetEuroland(this.value);'",
    );
    if (EUROLAND == "true") write("checked");
    writeln(
      "><A HREF='javascript:parent.a_doSetEuroland(\"T\");' onclick='ewu[0].checked = true'>" +
        A_CONFIG_SYSTEM_SW_EUY +
        "</A>",
    );
    writeln(
      "<BR><INPUT type=radio name=T value = 'no_T' onClick='parent.a_doSetEuroland(this.value);'",
    );
    if (EUROLAND == "false") write("checked");
    writeln(
      "><A HREF='javascript:parent.a_doSetEuroland(\"no_T\");' onclick='ewu[1].checked = true'>" +
        A_CONFIG_SYSTEM_SW_EUN +
        "</A><BR>",
    );
    writeln(
      "<SELECT name=\"currencies\" onChange='parent.a_curr(this);' size=8>",
    );
    E_init_curr();
    if (EUROLAND == "true") {
      writeln("<OPTION value='base'>" + A_CONFIG_SYSTEM_SW_H + CURR + "<BR>");
      for (j in system["ewu"])
        if (system["ewu"][j]["use"] == "limit") {
          write("<OPTION value='" + j + "'");
          if (j == idx) write("selected");
          writeln(B_retOpt("ewu", j));
        }
    } else writeln("<OPTION value='base'>" + A_CONFIG_SYSTEM_SW_H + CURR);
    for (k in system["currency"]) {
      if (k == CURR || k == "base") continue;
      write("<OPTION value='" + k + "'");
      if (k == idx) write("selected");
      writeln(B_retOpt("currency", k));
    }
    write("<OPTION value = 'neu'>" + A_CONFIG_SYSTEM_SW_N);
    writeln("</SELECT></TD></TR>");
    if (EUROLAND == "true") {
      if (idx == "base") {
        write(
          "<TR><TD>" + FONT_A + A_CONFIG_SYSTEM_SW_H + "</TD><TD>" + FONT_A,
        );
        writeln(
          "<SELECT name=\"eurocurr\" onChange='parent.a_doEditBase(this);'>",
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
        if (idx != "neu" && B_isEu(idx) == "true") {
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
              "' onClick='parent.a_editEuroCurrency(-1);'>",
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
              "' onchange='parent.a_doEditCurrency(this,\"" +
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
              "' onchange='parent.a_doEditCurrency(this,\"" +
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
                "' onClick='parent.a_editEuroCurrency(-1);'>",
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
            "' onChange='parent.a_doEditBase(this);'></TD></TR>",
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
            "' onchange='parent.a_doEditCurrency(this,\"" +
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
            "' onchange='parent.a_doEditCurrency(this,\"" +
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
          "' onClick='parent.a_doDeleteCurrency(\"" +
          idx +
          "\");'>",
      );
    writeln("</TD></TR>");
    writeln("</TABLE></FORM>");
    writeln(ADMIN_BOT);
    close();
  } //with
}
function a_doSetEuroland(i_obj) {
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
  E_init_curr();
  LEFT = false;
  E_go("refresh");
  a_curr("-1");
}
function a_doEditBase(i_obj) {
  if (i_obj.name == "base") system["currency"]["base"] = i_obj.value;
  if (i_obj.type == "select-one") {
    idx = i_obj.options[i_obj.selectedIndex].value;
    system["currency"]["base"] = idx;
  }
  E_init_curr();
  LEFT = false;
  E_go("refresh");
  a_curr("base");
}
function a_parse_factor(i_obj) {
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
function a_editEuroCurrency(i_obj) {
  var idx = "",
    hash = "",
    factor = "";
  if (i_obj != "-1") {
    if (i_obj.type == "select-multiple") {
      idx = i_obj.options[i_obj.selectedIndex].value;
      if (idx != "EUR") {
        hash = system["ewu"][idx]["name"];
        factor = a_parse_factor(system["ewu"][idx]["euro"]);
      } else {
        hash = system["ewu"][CURR]["name"];
        factor = a_parse_factor(system["ewu"][CURR]["euro"]);
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
    writeln(
      "<SELECT name=\"eurocurr\" size=11 onChange='parent.a_editEuroCurrency(this);'>",
    );
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
        "' onClick='parent.a_doUseEuroCurrency(\"" +
        idx +
        "\");'></TD>",
    );
    writeln(
      "<TD>" +
        FONT_A_SMALL +
        "<INPUT type=button value='" +
        A_LEAVE +
        "' onClick='parent.a_curr(-1);'></TD></TR>",
    );
    writeln("</TABLE></FORM>");
    writeln(ADMIN_BOT);
    close();
  } //with
}
function a_doDeleteCurrency(idx) {
  if (idx == SELECTED_CURRENCY) SELECTED_CURRENCY = CURR;
  if (B_isEu(idx) == "true") system["ewu"][idx]["use"] = "mwst";
  else {
    var sys_array = new Array();
    for (i in system["currency"])
      if (i != idx) sys_array[i] = system["currency"][i];
    system["currency"] = sys_array;
  }
  E_init_curr();
  LEFT = false;
  E_go("refresh");
  a_curr("-1");
}
function a_doUseEuroCurrency(idx) {
  system["ewu"][idx]["use"] = "limit";
  LEFT = false;
  E_go("refresh");
  a_editEuroCurrency("-1");
}
function a_doEditCurrency(i_obj, idx) {
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
    a_curr(idx);
  }
}
function a_htm(i_obj) {
  with (s.document.sysedit) {
    if (i_obj.type == "textarea") {
      for (i in htm) {
        if (htm[i].checked) system[htm[i].value] = a_myEscape(i_obj.value);
      }
    } else if (i_obj.type == "radio")
      htmltext.value = unescape(system[i_obj.value]);
    else htmltext.value = unescape(system[i_obj]);
    E_init_page();
    LEFT = false;
    E_go("refresh");
  } // of with
}
function a_vs(i_obj) {
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
    writeln("<TR>\n<TD valign=top width=35% rowspan=12>");
    writeln(
      FONT_A +
        "<SELECT name=\"selectart\" onChange='parent.a_vs(this);' size=8>",
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
          "' onClick='parent.a_edit_vs(this,\"" +
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
          "' onChange='parent.a_edit_vs(this,\"" +
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
          b_nzahl(system[ART][idx]["value"]) +
          "' onChange='parent.a_edit_vs(this,\"" +
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
          b_nzahl(system[ART][idx]["limit"]) +
          "' onChange='parent.a_edit_vs(this,\"" +
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
            "' onClick='parent.a_edit_vs(this,\"" +
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
          "' onClick='parent.a_edit_vs(this,\"" +
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
    system[ART][idx]["name"] = a_myEscape(na.value);
    system[ART][idx]["value"] = a_2pf(val.value);
    system[ART][idx]["limit"] = a_2pf(lim.value);
    if (ART == "areas") {
      if (n.checked == "true") system[ART][idx]["mwst"] = "yes";
      else system[ART][idx]["mwst"] = "no";
    }
  }
}
function a_edit_vs(i_obj, idx) {
  if (!i_obj.value) {
    if (ART == "freight") alert(A_CONFIG_SYSTEM_SFR_B);
    else alert(A_CONFIG_SYSTEM_SLG_B);
    return;
  }
  with (s.document.sysconfig) {
    if (i_obj.type == "button") {
      if (idx == "neu") a_doEditArt(system[ART].length);
      else a_delete_sys(ART, idx);
    }
    if (i_obj.type == "text") a_doEditArt(idx);
    if (i_obj.type == "checkbox") {
      if (system[ART][idx]["mwst"] == "no") system[ART][idx]["mwst"] = "yes";
      else system[ART][idx]["mwst"] = "no";
    }
    E_init_shipping();
    E_go("data");
    if (i_obj.type == "button") a_vs("-1");
    if (i_obj.name == "na") a_vs(idx);
  }
}
function a_paymentAction(pix) {
  var action = "" + unescape(system["action"]);
  var enc = "" + unescape(system["enctype"]);
  var zit = "";
  var zin = "";
  var ziv = "";
  var eva = "";
  if (!system["payment"][pix]) {
    alert("There is no x idx = " + pix);
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
      "<INPUT type=text name='action' size=40 onChange='parent.a_do_paymentAction(this," +
        pix +
        ");'></TD></TR>",
    );
    writeln("<TR><TD>" + FONT_A + A_CONFIG_SYSTEM_SL_E + "</TD><TD>" + FONT_A);
    write("<SELECT name='enctype' ");
    writeln(" onChange='parent.a_do_paymentAction(this," + pix + ");'>");
    write("<OPTION value='text/plain'");
    if ("text/plain" == enc) write(" selected ");
    writeln(">" + A_CONFIG_SYSTEM_SL_MAIL);
    write("<OPTION value='application/x-www-form-urlencoded'");
    if ("application/x-www-form-urlencoded" == enc) write(" selected ");
    writeln(">" + A_CONFIG_SYSTEM_SL_CGI);
    write("<OPTION value='enter'>");
    writeln(A_CONFIG_SYSTEM_SL_OWN);
    write("</SELECT></TD></TR>");
    writeln("<TR><TD>" + FONT_A + A_CONFIG_SYSTEM_SL_ZI + "</TD><TD>");
    writeln(
      FONT_A +
        A_CONFIG_SYSTEM_SL_ZIT +
        "&nbsp;&nbsp;<INPUT type=text name='zit' size=15 onChange='parent.a_do_paymentAction(this," +
        pix +
        ");'><BR>&nbsp;&nbsp;",
    );
    writeln(
      A_CONFIG_SYSTEM_SL_ZIN +
        " &nbsp;&nbsp;<INPUT type=text name='zin' size=15 onChange='parent.a_do_paymentAction(this," +
        pix +
        ");'><BR>",
    );
    writeln(
      A_CONFIG_SYSTEM_SL_ZIV +
        "&nbsp;<INPUT type=text name='ziv' size=35 onChange='parent.a_do_paymentAction(this," +
        pix +
        ");'></TD></TR>",
    );
    writeln(
      "<TR><TD colspan=4>" +
        FONT_A +
        A_CONFIG_SYSTEM_SL_EVA +
        "<INPUT type=text size=40 name=eva onChange='parent.a_do_paymentAction(this," +
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
        "' onClick='parent.a_payment(\"" +
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
function a_do_paymentAction(io, pix) {
  if (!system["payment"][pix]) {
    alert("There is no x idx = " + pix);
    return;
  }
  if (io.type == "text") system["payment"][pix][io.name] = a_myEscape(io.value);
  else if (io.type == "select-one") {
    var wert = "" + io.options[io.selectedIndex].value;
    if (wert == "enter") {
      wert = prompt(A_CONFIG_SYSTEM_SL_ASK, "");
      if (wert.length == 0) return;
    }
    system["payment"][pix][io.name] = a_myEscape(wert);
  } else if (io.type == "checkbox") {
    if (io.checked) system["payment"][pix][io.name] = "on";
    else system["payment"][pix][io.name] = "off";
  } else if (io.type == "textarea")
    system["payment"][pix][io.name] = a_myEscape(io.value);
  else alert("NOT DEFINED! " + io.type);
  E_init_shipping();
  E_go("refresh");
}
function a_edit_font(i_ob, color) {
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
  E_init_font();
  LEFT = false;
  E_go("refresh");
}
function a_font(i_obj) {
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
    writeln("<TR>\n<TD valign=top width=35% rowspan=12>");
    writeln(
      FONT_A +
        "<SELECT name=\"fonts\" onChange='parent.a_choose_font(this);' size=8>",
    );
    write("<OPTION value='font'>" + A_CONFIG_SYSTEM_SF_B + "");
    write("<OPTION value='font_navigation'>" + A_CONFIG_SYSTEM_SF_N + "");
    write("<OPTION value='font_navigation_h'>" + A_CONFIG_SYSTEM_SF_NH + "");
    write("<OPTION value='font_right_head'>" + A_CONFIG_SYSTEM_SF_S + "");
    write("<OPTION value='font_top_text'>" + A_CONFIG_SYSTEM_SF_E + "");
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
        "' onChange='parent.a_edit_font(this,\"\");'></TD></TR>",
    );
    writeln(
      "<TR><TD>" +
        FONT_A +
        A_CONFIG_SYSTEM_SF_G +
        ": </TD><TD>" +
        FONT_A +
        "<SELECT name=gr onChange='parent.a_edit_font(this,\"\");'>",
    );
    writeln(
      "<OPTION value='+4'> +4<OPTION value='+3'> +3<OPTION value='+2'> +2<OPTION value='+1'> +1<OPTION selected value=''> +-0<OPTION value='-1'> -1<OPTION value='-2'> -2<OPTION value='-3'> -3<OPTION value='-4'> -4</SELECT></TD>",
    );
    a_print_colormap("sf");
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
function a_choose_font(i_obj) {
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
function a_color(i_obj) {
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
    writeln("<TR>\n<TD valign=top width=35% rowspan=12>");
    writeln(
      FONT_A +
        "<SELECT name=\"colors\" size=8 onChange='parent.a_color(this);'></FONT>",
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
        "' size=12 onChange='parent.a_edit_color(this.value);'></FONT>",
    );
    writeln(
      FONT_A +
        "<INPUT type=button value='" +
        A_NOCOLOR +
        "' onClick='parent.a_edit_color(this.value);'></FONT><BR>",
    );
    a_print_colormap("tbl");
    writeln(
      "<IMG SRC='../gif/cube.gif' align=texttop WIDTH=292 HEIGHT=196 BORDER=0 USEMAP=\"#map_webpal\" ISMAP></TD></TR>",
    );
    writeln("</TD></TR></TABLE>");
    close();
  } //with
}
function a_edit_color(i_obj) {
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
    E_init_font();
    E_init_page();
    LEFT = false;
    E_go("refresh");
  }
}
function a_border(i_obj) {
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
    writeln("<TR>\n<TD valign=top width=35% rowspan=12>");
    writeln(
      FONT_A +
        "<SELECT name=\"borders\" size=4 onChange='parent.a_border(this);'>",
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
        "' onChange='parent.a_set_config(this);'>",
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
        "' onChange='parent.a_edit_border(this.value,\"" +
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
        "' onChange='parent.a_edit_border(this.value,\"" +
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
function a_edit_border(i_obj, idx) {
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
    E_init_font();
    E_init_page();
    //Xcq();
    LEFT = false;
    E_go("refresh");
  } //with
}
function a_config(i_obj) {
  var idx = "";
  if (i_obj == "-1") idx = "start_file";
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
    writeln("<TR>\n<TD valign=top rowspan=12>");
    writeln(
      FONT_A + "<SELECT name=\"vss\" onChange='parent.a_config(this);' size=5>",
    );
    write("<OPTION value='start_file'");
    if (idx == "start_file") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_VS_DAT);
    write("<OPTION value='start_ok1'");
    if (idx == "start_ok1") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_VS_OK1);
    write("<OPTION value='start_ok2'");
    if (idx == "start_ok2") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_VS_OK2);
    write("<OPTION value='start_noscript'");
    if (idx == "start_noscript") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_VS_NOS);
    write("<OPTION value='start_old'");
    if (idx == "start_old") write("selected");
    writeln(">" + A_CONFIG_SYSTEM_VS_OLD);
    writeln("</SELECT></FONT></TD></TR>");
    if (idx == "start_file") {
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_VS_IND +
          "</TD><TD>" +
          FONT_A +
          "<INPUT type=text name='ind' size=15 value='" +
          unescape(admin["ind"]) +
          "' onChange='parent.a_edit_config(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_VS_DAT +
          "</TD><TD>" +
          FONT_A +
          "<INPUT type=text name='start_file' size=15 value='" +
          unescape(admin["start_file"]) +
          "' onChange='parent.a_edit_config(this);'></TD></TR>",
      );
      writeln(
        "<TR><TD>" +
          FONT_A +
          A_CONFIG_SYSTEM_VS_PWD +
          "</TD><TD>" +
          FONT_A +
          "<INPUT type=checkbox name='pwd' onClick='parent.a_edit_config(this);'",
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
function a_edit_config(io) {
  if (io.type == "text") admin[io.name] = escape(io.value);
  if (io.name == "pwd") {
    if (admin["password"] == "on") admin["password"] = "off";
    else admin["password"] = "on";
  }
}
function a_doEditVSC(io, idx) {
  admin[idx] = a_myEscape(io.value);
}
function a_print_colormap(i_obj) {
  with (s.document) {
    writeln('<MAP NAME="map_webpal">');
    writeln("<!--- Row 1 --->");
    writeln(
      "<AREA COORDS=\"2,2,18,18\" HREF=\"javascript:parent.a_choose_color('#330000','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"18,2,34,18\" HREF=\"javascript:parent.a_choose_color('#333300','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"34,2,50,18\" HREF=\"javascript:parent.a_choose_color('#336600','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"50,2,66,18\" HREF=\"javascript:parent.a_choose_color('#339900','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"66,2,82,18\" HREF=\"javascript:parent.a_choose_color('#33CC00','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"82,2,98,18\" HREF=\"javascript:parent.a_choose_color('#33FF00','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"98,2,114,18\" HREF=\"javascript:parent.a_choose_color('#66FF00','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"114,2,130,18\" HREF=\"javascript:parent.a_choose_color('#66CC00','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"130,2,146,18\" HREF=\"javascript:parent.a_choose_color('#669900','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"146,2,162,18\" HREF=\"javascript:parent.a_choose_color('#666600','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"162,2,178,18\" HREF=\"javascript:parent.a_choose_color('#663300','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"178,2,194,18\" HREF=\"javascript:parent.a_choose_color('#660000','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"194,2,210,18\" HREF=\"javascript:parent.a_choose_color('#FF0000','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"210,2,226,18\" HREF=\"javascript:parent.a_choose_color('#FF3300','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"226,2,242,18\" HREF=\"javascript:parent.a_choose_color('#FF6600','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"242,2,258,18\" HREF=\"javascript:parent.a_choose_color('#FF9900','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"258,2,274,18\" HREF=\"javascript:parent.a_choose_color('#FFCC00','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"274,2,290,18\" HREF=\"javascript:parent.a_choose_color('#FFFF00','" +
        i_obj +
        "')\">",
    );
    writeln("<!--- Row 2 --->");
    writeln(
      "<AREA COORDS=\"2,18,18,34\" HREF=\"javascript:parent.a_choose_color('#330033','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"18,18,34,34\" HREF=\"javascript:parent.a_choose_color('#333333','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"34,18,50,34\" HREF=\"javascript:parent.a_choose_color('#336633','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"50,18,66,34\" HREF=\"javascript:parent.a_choose_color('#339933','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"66,18,82,34\" HREF=\"javascript:parent.a_choose_color('#33CC33','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"82,18,98,34\" HREF=\"javascript:parent.a_choose_color('#33FF33','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"98,18,114,34\" HREF=\"javascript:parent.a_choose_color('#66FF33','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"114,18,130,34\" HREF=\"javascript:parent.a_choose_color('#66CC33','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"130,18,146,34\" HREF=\"javascript:parent.a_choose_color('#669933','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"146,18,162,34\" HREF=\"javascript:parent.a_choose_color('#666633','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"162,18,178,34\" HREF=\"javascript:parent.a_choose_color('#663333','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"178,18,194,34\" HREF=\"javascript:parent.a_choose_color('#660033','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"194,18,210,34\" HREF=\"javascript:parent.a_choose_color('#FF0033','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"210,18,226,34\" HREF=\"javascript:parent.a_choose_color('#FF3333','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"226,18,242,34\" HREF=\"javascript:parent.a_choose_color('#FF6633','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"242,18,258,34\" HREF=\"javascript:parent.a_choose_color('#FF9933','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"258,18,274,34\" HREF=\"javascript:parent.a_choose_color('#FFCC33','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"274,18,290,34\" HREF=\"javascript:parent.a_choose_color('#FFFF33','" +
        i_obj +
        "')\">",
    );
    writeln("<!--- Row 3 --->");
    writeln(
      "<AREA COORDS=\"2,34,18,50\" HREF=\"javascript:parent.a_choose_color('#330066','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"18,34,34,50\" HREF=\"javascript:parent.a_choose_color('#333366','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"34,34,50,50\" HREF=\"javascript:parent.a_choose_color('#336666','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"50,34,66,50\" HREF=\"javascript:parent.a_choose_color('#339966','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"66,34,82,50\" HREF=\"javascript:parent.a_choose_color('#33CC66','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"82,34,98,50\" HREF=\"javascript:parent.a_choose_color('#33FF66','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"98,34,114,50\" HREF=\"javascript:parent.a_choose_color('#66FF66','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"114,34,130,50\" HREF=\"javascript:parent.a_choose_color('#66CC66','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"130,34,146,50\" HREF=\"javascript:parent.a_choose_color('#669966','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"146,34,162,50\" HREF=\"javascript:parent.a_choose_color('#666666','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"162,34,178,50\" HREF=\"javascript:parent.a_choose_color('#663366','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"178,34,194,50\" HREF=\"javascript:parent.a_choose_color('#660066','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"194,34,210,50\" HREF=\"javascript:parent.a_choose_color('#FF0066','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"210,34,226,50\" HREF=\"javascript:parent.a_choose_color('#FF3366','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"226,34,242,50\" HREF=\"javascript:parent.a_choose_color('#FF6666','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"242,34,258,50\" HREF=\"javascript:parent.a_choose_color('#FF9966','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"258,34,274,50\" HREF=\"javascript:parent.a_choose_color('#FFCC66','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"274,34,290,50\" HREF=\"javascript:parent.a_choose_color('#FFFF66','" +
        i_obj +
        "')\">",
    );
    writeln("<!--- Row 4 --->");
    writeln(
      "<AREA COORDS=\"2,50,18,66\" HREF=\"javascript:parent.a_choose_color('#330099','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"18,50,34,66\" HREF=\"javascript:parent.a_choose_color('#333399','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"34,50,50,66\" HREF=\"javascript:parent.a_choose_color('#336699','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"50,50,66,66\" HREF=\"javascript:parent.a_choose_color('#339999','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"66,50,82,66\" HREF=\"javascript:parent.a_choose_color('#33CC99','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"82,50,98,66\" HREF=\"javascript:parent.a_choose_color('#33FF99','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"98,50,114,66\" HREF=\"javascript:parent.a_choose_color('#66FF99','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"114,50,130,66\" HREF=\"javascript:parent.a_choose_color('#66CC99','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"130,50,146,66\" HREF=\"javascript:parent.a_choose_color('#669999','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"146,50,162,66\" HREF=\"javascript:parent.a_choose_color('#666699','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"162,50,178,66\" HREF=\"javascript:parent.a_choose_color('#663399','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"178,50,194,66\" HREF=\"javascript:parent.a_choose_color('#660099','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"194,50,210,66\" HREF=\"javascript:parent.a_choose_color('#FF0099','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"210,50,226,66\" HREF=\"javascript:parent.a_choose_color('#FF3399','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"226,50,242,66\" HREF=\"javascript:parent.a_choose_color('#FF6699','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"242,50,258,66\" HREF=\"javascript:parent.a_choose_color('#FF9999','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"258,50,274,66\" HREF=\"javascript:parent.a_choose_color('#FFCC99','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"274,50,290,66\" HREF=\"javascript:parent.a_choose_color('#FFFF99','" +
        i_obj +
        "')\">",
    );
    writeln("<!--- Row 5 --->");
    writeln(
      "<AREA COORDS=\"2,66,18,82\" HREF=\"javascript:parent.a_choose_color('#3300CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"18,66,34,82\" HREF=\"javascript:parent.a_choose_color('#3333CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"34,66,50,82\" HREF=\"javascript:parent.a_choose_color('#3366CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"50,66,66,82\" HREF=\"javascript:parent.a_choose_color('#3399CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"66,66,82,82\" HREF=\"javascript:parent.a_choose_color('#33CCCC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"82,66,98,82\" HREF=\"javascript:parent.a_choose_color('#33FFCC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"98,66,114,82\" HREF=\"javascript:parent.a_choose_color('#66FFCC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"114,66,130,82\" HREF=\"javascript:parent.a_choose_color('#66CCCC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"130,66,146,82\" HREF=\"javascript:parent.a_choose_color('#6699CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"146,66,162,82\" HREF=\"javascript:parent.a_choose_color('#6666CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"162,66,178,82\" HREF=\"javascript:parent.a_choose_color('#6633CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"178,66,194,82\" HREF=\"javascript:parent.a_choose_color('#6600CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"194,66,210,82\" HREF=\"javascript:parent.a_choose_color('#FF00CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"210,66,226,82\" HREF=\"javascript:parent.a_choose_color('#FF33CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"226,66,242,82\" HREF=\"javascript:parent.a_choose_color('#FF66CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"242,66,258,82\" HREF=\"javascript:parent.a_choose_color('#FF99CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"258,66,274,82\" HREF=\"javascript:parent.a_choose_color('#FFCCCC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"274,66,290,82\" HREF=\"javascript:parent.a_choose_color('#FFFFCC','" +
        i_obj +
        "')\">",
    );
    writeln("<!--- Row 6 --->");
    writeln(
      "<AREA COORDS=\"2,82,18,98\" HREF=\"javascript:parent.a_choose_color('#3300FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"18,82,34,98\" HREF=\"javascript:parent.a_choose_color('#3333FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"34,82,50,98\" HREF=\"javascript:parent.a_choose_color('#3366FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"50,82,66,98\" HREF=\"javascript:parent.a_choose_color('#3399FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"66,82,82,98\" HREF=\"javascript:parent.a_choose_color('#33CCFF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"82,82,98,98\" HREF=\"javascript:parent.a_choose_color('#33FFFF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"98,82,114,98\" HREF=\"javascript:parent.a_choose_color('#66FFFF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"114,82,130,98\" HREF=\"javascript:parent.a_choose_color('#66CCFF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"130,82,146,98\" HREF=\"javascript:parent.a_choose_color('#6699FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"146,82,162,98\" HREF=\"javascript:parent.a_choose_color('#6666FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"162,82,178,98\" HREF=\"javascript:parent.a_choose_color('#6633FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"178,82,194,98\" HREF=\"javascript:parent.a_choose_color('#6600FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"194,82,210,98\" HREF=\"javascript:parent.a_choose_color('#FF00FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"210,82,226,98\" HREF=\"javascript:parent.a_choose_color('#FF33FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"226,82,242,98\" HREF=\"javascript:parent.a_choose_color('#FF66FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"242,82,258,98\" HREF=\"javascript:parent.a_choose_color('#FF99FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"258,82,274,98\" HREF=\"javascript:parent.a_choose_color('#FFCCFF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"274,82,290,98\" HREF=\"javascript:parent.a_choose_color('#FFFFFF','" +
        i_obj +
        "')\">",
    );
    writeln("<!--- Row 7 --->");
    writeln(
      "<AREA COORDS=\"2,98,18,114\" HREF=\"javascript:parent.a_choose_color('#0000FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"18,98,34,114\" HREF=\"javascript:parent.a_choose_color('#0033FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"34,98,50,114\" HREF=\"javascript:parent.a_choose_color('#0066FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"50,98,66,114\" HREF=\"javascript:parent.a_choose_color('#0099FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"66,98,82,114\" HREF=\"javascript:parent.a_choose_color('#00CCFF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"82,98,98,114\" HREF=\"javascript:parent.a_choose_color('#00FFFF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"98,98,114,114\" HREF=\"javascript:parent.a_choose_color('#99FFFF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"114,98,130,114\" HREF=\"javascript:parent.a_choose_color('#99CCFF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"130,98,146,114\" HREF=\"javascript:parent.a_choose_color('#9999FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"146,98,162,114\" HREF=\"javascript:parent.a_choose_color('#9966FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"162,98,178,114\" HREF=\"javascript:parent.a_choose_color('#9933FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"178,98,194,114\" HREF=\"javascript:parent.a_choose_color('#9900FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"194,98,210,114\" HREF=\"javascript:parent.a_choose_color('#CC00FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"210,98,226,114\" HREF=\"javascript:parent.a_choose_color('#CC33FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"226,98,242,114\" HREF=\"javascript:parent.a_choose_color('#CC66FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"242,98,258,114\" HREF=\"javascript:parent.a_choose_color('#CC99FF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"258,98,274,114\" HREF=\"javascript:parent.a_choose_color('#CCCCFF','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"274,98,290,114\" HREF=\"javascript:parent.a_choose_color('#CCFFFF','" +
        i_obj +
        "')\">",
    );
    writeln("<!--- Row 8 --->");
    writeln(
      "<AREA COORDS=\"2,114,18,130\" HREF=\"javascript:parent.a_choose_color('#0000CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"18,114,34,130\" HREF=\"javascript:parent.a_choose_color('#0033CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"34,114,50,130\" HREF=\"javascript:parent.a_choose_color('#0066CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"50,114,66,130\" HREF=\"javascript:parent.a_choose_color('#0099CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"66,114,82,130\" HREF=\"javascript:parent.a_choose_color('#00CCCC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"82,114,98,130\" HREF=\"javascript:parent.a_choose_color('#00FFCC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"98,114,114,130\" HREF=\"javascript:parent.a_choose_color('#99FFCC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"114,114,130,130\" HREF=\"javascript:parent.a_choose_color('#99CCCC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"130,114,146,130\" HREF=\"javascript:parent.a_choose_color('#9999CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"146,114,162,130\" HREF=\"javascript:parent.a_choose_color('#9966CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"162,114,178,130\" HREF=\"javascript:parent.a_choose_color('#9933CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"178,114,194,130\" HREF=\"javascript:parent.a_choose_color('#9900CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"194,114,210,130\" HREF=\"javascript:parent.a_choose_color('#CC00CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"210,114,226,130\" HREF=\"javascript:parent.a_choose_color('#CC33CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"226,114,242,130\" HREF=\"javascript:parent.a_choose_color('#CC66CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"242,114,258,130\" HREF=\"javascript:parent.a_choose_color('#CC99CC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"258,114,274,130\" HREF=\"javascript:parent.a_choose_color('#CCCCCC','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"274,114,290,130\" HREF=\"javascript:parent.a_choose_color('#CCFFCC','" +
        i_obj +
        "')\">",
    );
    writeln("<!--- Row 9 --->");
    writeln(
      "<AREA COORDS=\"2,130,18,146\" HREF=\"javascript:parent.a_choose_color('#000099','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"18,130,34,146\" HREF=\"javascript:parent.a_choose_color('#003399','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"34,130,50,146\" HREF=\"javascript:parent.a_choose_color('#006699','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"50,130,66,146\" HREF=\"javascript:parent.a_choose_color('#009999','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"66,130,82,146\" HREF=\"javascript:parent.a_choose_color('#00CC99','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"82,130,98,146\" HREF=\"javascript:parent.a_choose_color('#00FF99','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"98,130,114,146\" HREF=\"javascript:parent.a_choose_color('#99FF99','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"114,130,130,146\" HREF=\"javascript:parent.a_choose_color('#99CC99','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"130,130,146,146\" HREF=\"javascript:parent.a_choose_color('#999999','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"146,130,162,146\" HREF=\"javascript:parent.a_choose_color('#996699','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"162,130,178,146\" HREF=\"javascript:parent.a_choose_color('#993399','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"178,130,194,146\" HREF=\"javascript:parent.a_choose_color('#990099','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"194,130,210,146\" HREF=\"javascript:parent.a_choose_color('#CC0099','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"210,130,226,146\" HREF=\"javascript:parent.a_choose_color('#CC3399','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"226,130,242,146\" HREF=\"javascript:parent.a_choose_color('#CC6699','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"242,130,258,146\" HREF=\"javascript:parent.a_choose_color('#CC9999','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"258,130,274,146\" HREF=\"javascript:parent.a_choose_color('#CCCC99','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"274,130,290,146\" HREF=\"javascript:parent.a_choose_color('#CCFF99','" +
        i_obj +
        "')\">",
    );
    writeln("<!--- Row 10 --->");
    writeln(
      "<AREA COORDS=\"2,146,18,162\" HREF=\"javascript:parent.a_choose_color('#000066','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"18,146,34,162\" HREF=\"javascript:parent.a_choose_color('#003366','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"34,146,50,162\" HREF=\"javascript:parent.a_choose_color('#006666','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"50,146,66,162\" HREF=\"javascript:parent.a_choose_color('#009966','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"66,146,82,162\" HREF=\"javascript:parent.a_choose_color('#00CC66','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"82,146,98,162\" HREF=\"javascript:parent.a_choose_color('#00FF66','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"98,146,114,162\" HREF=\"javascript:parent.a_choose_color('#99FF66','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"114,146,130,162\" HREF=\"javascript:parent.a_choose_color('#99CC66','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"130,146,146,162\" HREF=\"javascript:parent.a_choose_color('#999966','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"146,146,162,162\" HREF=\"javascript:parent.a_choose_color('#996666','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"162,146,178,162\" HREF=\"javascript:parent.a_choose_color('#993366','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"178,146,194,162\" HREF=\"javascript:parent.a_choose_color('#990066','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"194,146,210,162\" HREF=\"javascript:parent.a_choose_color('#CC0066','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"210,146,226,162\" HREF=\"javascript:parent.a_choose_color('#CC3366','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"226,146,242,162\" HREF=\"javascript:parent.a_choose_color('#CC6666','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"242,146,258,162\" HREF=\"javascript:parent.a_choose_color('#CC9966','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"258,146,274,162\" HREF=\"javascript:parent.a_choose_color('#CCCC66','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"274,146,290,162\" HREF=\"javascript:parent.a_choose_color('#CCFF66','" +
        i_obj +
        "')\">",
    );
    writeln("<!--- Row 11 --->");
    writeln(
      "<AREA COORDS=\"2,162,18,178\" HREF=\"javascript:parent.a_choose_color('#000033','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"18,162,34,178\" HREF=\"javascript:parent.a_choose_color('#003333','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"34,162,50,178\" HREF=\"javascript:parent.a_choose_color('#006633','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"50,162,66,178\" HREF=\"javascript:parent.a_choose_color('#009933','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"66,162,82,178\" HREF=\"javascript:parent.a_choose_color('#00CC33','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"82,162,98,178\" HREF=\"javascript:parent.a_choose_color('#00FF33','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"98,162,114,178\" HREF=\"javascript:parent.a_choose_color('#99FF33','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"114,162,130,178\" HREF=\"javascript:parent.a_choose_color('#99CC33','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"130,162,146,178\" HREF=\"javascript:parent.a_choose_color('#999933','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"146,162,162,178\" HREF=\"javascript:parent.a_choose_color('#996633','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"162,162,178,178\" HREF=\"javascript:parent.a_choose_color('#993333','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"178,162,194,178\" HREF=\"javascript:parent.a_choose_color('#990033','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"194,162,210,178\" HREF=\"javascript:parent.a_choose_color('#CC0033','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"210,162,226,178\" HREF=\"javascript:parent.a_choose_color('#CC3333','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"226,162,242,178\" HREF=\"javascript:parent.a_choose_color('#CC6633','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"242,162,258,178\" HREF=\"javascript:parent.a_choose_color('#CC9933','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"258,162,274,178\" HREF=\"javascript:parent.a_choose_color('#CCCC33','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"274,162,290,178\" HREF=\"javascript:parent.a_choose_color('#CCFF33','" +
        i_obj +
        "')\">",
    );
    writeln("<!--- Row 12 --->");
    writeln(
      "<AREA COORDS=\"2,178,18,194\" HREF=\"javascript:parent.a_choose_color('#000000','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"18,178,34,194\" HREF=\"javascript:parent.a_choose_color('#003300','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"34,178,50,194\" HREF=\"javascript:parent.a_choose_color('#006600','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"50,178,66,194\" HREF=\"javascript:parent.a_choose_color('#009900','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"66,178,82,194\" HREF=\"javascript:parent.a_choose_color('#00CC00','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"82,178,98,194\" HREF=\"javascript:parent.a_choose_color('#00FF00','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"98,178,114,194\" HREF=\"javascript:parent.a_choose_color('#99FF00','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"114,178,130,194\" HREF=\"javascript:parent.a_choose_color('#99CC00','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"130,178,146,194\" HREF=\"javascript:parent.a_choose_color('#999900','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"146,178,162,194\" HREF=\"javascript:parent.a_choose_color('#996600','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"162,178,178,194\" HREF=\"javascript:parent.a_choose_color('#993300','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"178,178,194,194\" HREF=\"javascript:parent.a_choose_color('#990000','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"194,178,210,194\" HREF=\"javascript:parent.a_choose_color('#CC0000','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"210,178,226,194\" HREF=\"javascript:parent.a_choose_color('#CC3300','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"226,178,242,194\" HREF=\"javascript:parent.a_choose_color('#CC6600','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"242,178,258,194\" HREF=\"javascript:parent.a_choose_color('#CC9900','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"258,178,274,194\" HREF=\"javascript:parent.a_choose_color('#CCCC00','" +
        i_obj +
        "')\">",
    );
    writeln(
      "<AREA COORDS=\"274,178,290,194\" HREF=\"javascript:parent.a_choose_color('#CCFF00','" +
        i_obj +
        "')\">",
    );
    writeln("</MAP>");
  } //end with
}
function a_choose_color(color, i_obj) {
  if (i_obj == "sf") a_edit_font(i_obj, color);
  if (i_obj == "tbl") a_edit_color(color);
}
function a_edit_product(hash) {
  with (s.document.insert) {
    type = typ.options[typ.selectedIndex].value;
    he = h.options[h.selectedIndex].value;
    save = new Array();
    if (artikel[hash])
      for (si in system["features"]) {
        if (artikel[hash][si]) save[si] = artikel[hash][si];
      }
    artikel[hash] = new Array();
    artikel[hash]["htmltyp"] = he;
    artikel[hash]["typ"] = type;
    if (type != "txt") if (j.checked) artikel[hash]["menge"] = true;
    if (k.checked) artikel[hash]["preisa"] = true;
    artikel[hash]["name"] = a_myEscape(nname.value);
    artikel[hash]["titel"] = a_myEscape(l.value);
    if (image.value.length != 0)
      artikel[hash]["image"] = a_myEscape(image.value);
    if (o.value.length != 0) artikel[hash]["desc"] = a_myEscape(o.value);
    if (url.value.length != 0) artikel[hash]["url"] = a_myEscape(url.value);
    if (gm.value.length != 0)
      if (a_2pf(gm.value) != 0) artikel[hash]["gpreis"] = a_2pf(gm.value);
    artikel[hash]["preis"] = a_2pf(m.value);
    artikel[hash]["mwst"] = n.options[n.selectedIndex].value;
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
function a_save_product() {
  var ha;
  ha = s.document.insert.ha.value;
  a_edit_product(ha);
  A_doConfigSystem("ed_art");
  E_go("refresh");
}
function a_next_product_idx() {
  for (i = 0; i <= artikel.length; i++) {
    if (i > 10) {
      alert(A_DERR);
      a_del_s();
      return;
    }
    if (!artikel[i]) {
      hash = i;
      break;
    }
  }
  a_edit_product(hash);
  page[e_page_state]["artikel"] += hash + ",";
  a_product();
  E_print_right_frame();
}
function a_do_insert_page() {
  var nname;
  var art_tmp = "";
  hash = s.document.insert.hash.value;
  nname = s.document.insert.l.value;
  while (nname.length == 0) {
    if (!(nname = prompt(A_DO_INSERT_PAGE_NNAME, ""))) {
      a_page();
      return;
    }
  }
  art_tmp = page[hash]["artikel"];
  page[hash] = new Array();
  page[hash]["name"] = a_myEscape(nname);
  page[hash]["top_text"] = a_myEscape(s.document.insert.e.value);
  if (s.document.insert.url.value.length != 0) {
    page[hash]["url"] = escape(s.document.insert.url.value);
  } else {
    if (s.document.insert.f.checked == true) page[hash]["summen"] = "true";
  }
  if (s.document.insert.bg.value.length != 0)
    page[hash]["bg"] = escape(s.document.insert.bg.value);
  if (s.document.insert.ng.value.length != 0)
    page[hash]["navgif"] = escape(s.document.insert.ng.value);
  if (s.document.insert.ngs.value.length != 0)
    page[hash]["navgifs"] = escape(s.document.insert.ngs.value);
  page[hash]["artikel"] = art_tmp;
  a_page(hash);
  LEFT = false;
  E_go(parseInt(hash));
}
function a_del_s() {
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln(FONT_A_BIG + A_DEL_S);
    writeln(ADMIN_BOT);
    close();
  }
}
function a_insert_page() {
  var nname;
  if (e_page_state == "start") hash = 0;
  else if (isNaN(e_page_state)) hash = page.length;
  else hash = e_page_state + 1;
  nname = s.document.insert.l.value;
  while (nname.length == 0) {
    if (!(nname = prompt(A_DO_INSERT_PAGE_NNAME, ""))) {
      a_page();
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
  page[hash]["name"] = a_myEscape(nname);
  page[hash]["top_text"] = a_myEscape(s.document.insert.e.value);
  if (s.document.insert.url.value.length != 0)
    page[hash]["url"] = escape(s.document.insert.url.value);
  else if (s.document.insert.f.checked == true) page[hash]["summen"] = "true";
  if (s.document.insert.bg.value.length != 0)
    page[hash]["bg"] = escape(s.document.insert.bg.value);
  if (s.document.insert.ng.value.length != 0)
    page[hash]["navgif"] = escape(s.document.insert.ng.value);
  if (s.document.insert.ngs.value.length != 0)
    page[hash]["navgifs"] = escape(s.document.insert.ngs.value);
  page[hash]["artikel"] = "";
  a_page();
  LEFT = false;
  E_go(hash);
}
function a_delete_page(hash) {
  if (isNaN(hash)) {
    alert(A_DELPAGE_ERR);
    a_page(hash);
    return;
  }
  if (page.length == 1) {
    alert(A_DELPAGE_ERR2);
    a_page(hash);
    return;
  }
  if (!confirm(A_DELPAGE_ASK)) {
    a_page(hash);
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
  a_del_s();
  LEFT = false;
  E_go(0);
}
function a_delete_product(hash) {
  if (isNaN(hash)) {
    alert(A_DELPROD_ERR);
    a_del_s();
    return;
  }
  if (artikel.length == 1) {
    alert(A_DELPROD_ERR2);
    a_del_s();
    return;
  }
  if (!confirm(A_DELPROD_ASK)) {
    a_del_s();
    return;
  }
  artikel[hash] = false;
  var art = page[e_page_state]["artikel"];
  if (art.length == 0) return;
  var arttmp = "";
  while ((i = art.substring(0, art.indexOf(","))) != "") {
    if (i != hash) arttmp += i + ",";
    art = art.substring(art.indexOf(",") + 1, art.length);
  }
  page[e_page_state]["artikel"] = arttmp;
  a_del_s();
  E_go("refresh");
}
function a_product(s_obj) {
  var hash = -1;
  var h = "1";
  var typ = "checkbox";
  var j = false;
  var k = false;
  var nname = "";
  var l = "";
  var o = "";
  var image = "";
  var url = "";
  var gm = "";
  var m = "";
  var n = 0;
  var su = false;
  var d = "a_next_product_idx()";
  var ftrs = (feat = "");
  with (s.document) {
    if (isNaN(e_page_state)) {
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
      d = "a_save_product()";
      h = artikel[hash]["htmltyp"];
      typ = artikel[hash]["typ"];
      if (artikel[hash]["menge"]) j = true;
      if (artikel[hash]["preisa"]) k = true;
      nname = unescape(artikel[hash]["name"]);
      l = unescape(artikel[hash]["titel"]);
      if (artikel[hash]["desc"]) o = unescape(artikel[hash]["desc"]);
      if (artikel[hash]["image"]) image = unescape(artikel[hash]["image"]);
      if (artikel[hash]["url"]) url = unescape(artikel[hash]["url"]);
      if (artikel[hash]["gpreis"]) gm = artikel[hash]["gpreis"];
      m = artikel[hash]["preis"];
      n = artikel[hash]["mwst"];
      if (artikel[hash]["p_feature"]) ftrs = artikel[hash]["p_feature"];
      if (artikel[hash]["features"]) feat = artikel[hash]["features"];
    }
    open();
    writeln(ADMIN_TOP + FONT_A);
    writeln("<FORM name=insert onSubmit='parent." + d + ";'>");
    writeln("<TABLE width=560 border=0><TR><TD>" + FONT_A);
    if (hash >= 0) writeln("<INPUT type=hidden name=ha value='" + hash + "'>");
    writeln("<SELECT name=h>");
    write("<OPTION value='1' ");
    if (h == "1") write(" selected ");
    write(">" + A_INSERT_PROD_TAB);
    write("<OPTION value='2'");
    if (h == "2") write(" selected ");
    writeln(">" + A_INSERT_PROD_FLUF);
    write("<OPTION value='3'");
    if (h == "3") write(" selected ");
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
    if (j) write(" checked");
    writeln("><BR>");
    writeln(A_INSERT_PROD_PREISA + "&nbsp;<INPUT type=checkbox name='preisa'");
    if (k) write(" checked");
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
        l +
        "'>",
    );
    writeln("</TD></TR>");
    writeln("<TR><TD>" + FONT_A);
    writeln(
      A_INSERT_PROD_DESC +
        "</TD><TD colspan=3>" +
        FONT_A +
        "<TEXTAREA cols=50 wrap=virtual rows=3 name='desc'>" +
        o +
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
        b_nzahl(m) +
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
        b_nzahl(gm) +
        "'> " +
        CURR,
    );
    writeln("</TD></TR>");
    writeln("<TR><TD colspan=2>" + FONT_A);
    writeln(A_INSERT_PROD_MWST + "<SELECT name=n>");
    for (mw in system["mwst"]) {
      writeln("<OPTION value='" + mw + "' ");
      if (mw == n) write(" selected ");
      write(">" + system["mwst"][mw] + "%");
    }
    writeln("</SELECT></TD>");
    writeln(
      "<TD colspan=2>" + FONT_A + A_INSERT_PROD_FTS + "<SELECT name=featrs>",
    );
    write("<OPTION value='-1'");
    if (ftrs == "") write(" selected ");
    writeln(">" + A_CONFIG_SYSTEM_SFT_NO + "");
    for (j in system["features"]) {
      if (!system["features"][j]) continue;
      if (system["features"][j]["ftype"] == "multiple-select") continue;
      if (system["features"][j]["ftype"] == "text") continue;
      if (system["features"][j]["ftype"] == "checkbox") continue;
      writeln("<OPTION value='" + j + "' ");
      if (j == ftrs) write(" selected ");
      write(">" + unescape(system["features"][j]["name"]));
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
          "><A HREF='javascript:parent.a_product_feature(" +
            i +
            ",-1," +
            hash +
            ")'>&nbsp;" +
            unescape(system["features"][i]["name"]) +
            "</A>",
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
          "' onClick='parent.a_delete_product(" +
          hash +
          ");'>",
      );
      writeln("&nbsp;&nbsp;&nbsp;");
      writeln(
        "<INPUT type=button value='" +
          A_UP +
          "' name='up' onClick='parent.a_choose_prod(this, " +
          hash +
          ");'>",
      );
      writeln(
        "<INPUT type=button value='" +
          A_DOWN +
          "' name ='down' onClick='parent.a_choose_prod(this, " +
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
function a_get_feature_val(hash, idx) {
  var f = new Array();
  str = unescape(artikel[hash][idx]);
  if (str.indexOf("~") == -1) {
    var i = 0;
    while (str.length) {
      f[i] = new Array();
      f[i].name = str.substring(0, str.indexOf(","));
      f[i].m = str.substring(str.indexOf(",") + 1, str.indexOf("|"));
      str = str.substring(str.indexOf("|") + 1, str.length);
      i++;
    }
  } else {
    for (i in system.features[idx]) {
      if (i == "name" || i == "required" || i == "ftype") continue;
      f[i] = new Array();
      f[i].name = unescape(system.features[idx][i]);
      if (str.length) {
        f[i].m = str.substring(0, str.indexOf("~"));
        str = str.substring(str.indexOf("~") + 1, str.length);
      } else f[i].m = "";
      i++;
    }
  }
  return f;
}
function a_get_feature_names(idx) {
  var i,
    f = new Array();
  var j = 0;
  for (i in system.features[idx]) {
    if (i == "name" || i == "required" || i == "ftype") continue;
    f[j] = new Array();
    f[j].name = unescape(system.features[idx][i]);
    f[j].m = "";
    j++;
  }
  return f;
}
function a_product_feature(idx, i_obj, ix) {
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
    afs = a_get_feature_val(hash, idx);
  } else afs = a_get_feature_names(idx);
  if (i != "neu") {
    fname = afs[i].name;
    fm = b_nzahl(afs[i].m);
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
    writeln("<TR>\n<TD valign=top rowspan=12>");
    writeln(
      FONT_A +
        '<SELECT name="fts" onChange=\'parent.a_product_feature("' +
        idx +
        '",this,"' +
        hash +
        "\");' size=8>",
    );
    var k;
    for (k in afs) {
      write("<OPTION value='" + k + "'");
      if (afs == i) write("selected");
      if (afs[k]) writeln(">" + afs[k].name);
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
        "onChange='parent.a_edit_product_feature(this,\"" +
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
        "onChange='parent.a_edit_product_feature(this,\"" +
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
        "' onClick='parent.a_click_feature(\"" +
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
          "' onClick='parent.a_edit_product_feature(this,\"" +
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
          "' onClick='parent.a_reset_product_feature(\"" +
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
        "' onClick='parent.a_product(\"" +
        hash +
        "\")';></FONT></TD></TR>",
    );
    writeln("</TABLE></FORM>");
    writeln(ADMIN_BOT);
    close();
  } //with
}
function a_click_feature(idx, hash) {
  var old = "";
  var f = new Array();
  old += artikel[hash].features;
  str = old;
  while (str.length) {
    num = str.substring(0, str.indexOf(","));
    if (num == idx) {
      artikel[hash].features =
        old.substring(0, old.indexOf(num)) +
        old.substring(old.indexOf(num) + 2, old.length);
      for (i in artikel[hash]) if (i != idx) f[i] = artikel[hash][i];
      artikel[hash] = f;
      break;
    }
    str = str.substring(str.indexOf(",") + 1, str.length);
  }
  if (str.length) {
    E_go("refresh");
    a_product_feature(idx, -1, hash);
  }
}
function a_edit_product_feature(i_obj, idx, io, hash) {
  var str,
    f = new Array();
  var nurPr = "true";
  with (s.document.sys_persfts) {
    if (!fname.value) {
      alert(A_CONFIG_SYSTEM_SFT_NEW);
      return;
    }
    if (artikel[hash][idx]) {
      str = unescape(artikel[hash][idx]);
      if (str.indexOf("~") == -1) nurPr = "false";
      f = a_get_feature_val(hash, idx);
    } else {
      f = a_get_feature_names(idx);
      str = idx + ",";
      if (!artikel[hash].features) artikel[hash].features = "";
      if (artikel[hash].features.indexOf(str) == "-1") {
        artikel[hash].features += idx + ",";
        artikel[hash][idx] = new Array();
      }
    }
    if (i_obj.type == "text") {
      if (i_obj.name == "fname") nurPr = "false";
      for (i in f)
        if (i == io) {
          f[i].name = fname.value;
          f[i].m = a_2pf(fm.value);
        }
      artikel[hash][idx] = "";
      for (i in f) {
        if (nurPr == "true") artikel[hash][idx] += a_myEscape(f[i].m + "~");
        else artikel[hash][idx] += a_myEscape(f[i].name + "," + f[i].m + "|");
      }
    } else if (i_obj.type == "button") {
      if (nurPr == "true") {
        artikel[hash][idx] = "";
        for (i in f)
          artikel[hash][idx] += a_myEscape(f[i].name + "," + f[i].m + "|");
      }
      var fpr = parseInt(fm.value);
      if (isNaN(fpr)) artikel[hash][idx] += a_myEscape(fname.value + "," + "|");
      else
        artikel[hash][idx] += a_myEscape(
          fname.value + "," + a_2pf(fm.value) + "|",
        );
    }
    E_go("refresh");
    a_product_feature(idx, io, hash);
  }
}
function a_reset_product_feature(idx, io, hash) {
  var f,
    g = new Array();
  var str,
    j = 0;
  if (io == "neu") return;
  if (artikel[hash][idx]) {
    f = a_get_feature_val(hash, idx);
  } else {
    f = a_get_feature_names(idx);
    val = idx + ",";
    if (artikel[hash].features.indexOf(val) == "-1") {
      artikel[hash].features += idx + ",";
      artikel[hash][idx] = new Array();
    }
  }
  for (i in f) if (i != io) g[j++] = f[i];
  artikel[hash][idx] = "";
  if (i > 0) {
    for (i in g) {
      str = g[i].name + "," + g[i].m + "|";
      artikel[hash][idx] += a_myEscape(str);
    }
    E_go("refresh");
    a_product_feature(idx, -1, hash);
  } else {
    if (artikel[hash].p_feature == idx) artikel[hash].p_feature = "-1";
    val = idx + ",";
    if (artikel[hash].features.indexOf(val) > "-1") {
      str = artikel[hash].features;
      i = 0;
      while (str.length) {
        f[i++] = str.substring(0, str.indexOf(","));
        str = str.substring(str.indexOf(",") + 1, str.length);
      }
      artikel[hash].features = "";
      for (i in f) {
        if (i != idx) artikel[hash].features += f[i] + ",";
      }
      E_go("refresh");
      a_product(hash);
    }
  }
}
function a_choose_prod(i_obj, hash) {
  var f = new Array();
  var i, str, pos;
  if (page[e_page_state]["artikel"]) str = page[e_page_state]["artikel"];
  else return;
  f = str.split(",");
  for (i in f) {
    if (parseInt(hash) == parseInt(f[i])) {
      pos = i;
      break;
    }
  }
  if (i_obj.name == "up") {
    if (pos == 0) return;
    tmp = f[pos - 1];
    f[pos - 1] = f[pos];
    f[pos] = tmp;
  }
  if (i_obj.name == "down") {
    if (pos == f.length - 2) return;
    tmp = f[pos + 1];
    f[pos + 1] = f[pos];
    f[pos] = tmp;
  }
  page[e_page_state]["artikel"] = "" + f.join();
  E_go("refresh");
}
function a_editProd() {
  if (isNaN(e_page_state)) {
    alert(A_EDIT_PROD_ERR);
    a_del_s();
    return;
  }
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln("<FORM name=insert onSubmit='return false;'>");
    writeln(FONT_A + A_EDIT_PROD);
    writeln("<BR><SELECT name=edit onChange='parent.a_product(this);'>");
    writeln("<OPTION value='' selected>" + A_EDIT_PROD_S);
    var art = page[e_page_state]["artikel"];
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
function a_edit_start() {
  with (s.document) {
    open();
    writeln(ADMIN_TOP);
    writeln("<FORM name=insert onSubmit='return false;'>");
    writeln("<TABLE width=560 border=0><TR><TD>" + FONT_A);
    writeln(
      A_EDITSTART_URL + "<BR>" + FONT_A_SMALL + A_IF + "</FONT><BR>" + FONT_A,
    );
    writeln(
      "<INPUT type=text name=aq value='" +
        unescape(system["start"]) +
        "' onChange='parent.a_set_config(this);'>",
    );
    writeln("</TD></TR>");
    writeln("<TR><TD>" + FONT_A);
    writeln(A_EDITSTART_TXT + "<BR>" + FONT_A_SMALL + A_IF);
    writeln(
      "</FONT><BR>" +
        FONT_A +
        "<TEXTAREA cols='50' rows='10' name='startmsg' wrap=virtual onChange='parent.a_set_config(this);'>",
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
function a_import_first() {
  with (s.document) {
    open();
    writeln(ADMIN_TOP + FONT_A);
    writeln("<FORM name=insert onSubmit='parent.a_import_headline(this);'>");
    writeln("<TABLE width=560 border=0><TR><TD>" + FONT_A);
    writeln("<SELECT name=h>");
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
    writeln(A_INSERT_PROD_MWST + "<SELECT name=n>");
    for (mw in system["mwst"]) {
      writeln("<OPTION value='" + mw + "'>" + system["mwst"][mw] + "%");
    }
    writeln("</SELECT></TD>");
    writeln(
      "<TD colspan=2>" + FONT_A + A_INSERT_PROD_FTS + "<SELECT name=featrs>",
    );
    write("<OPTION value='-1' selected");
    writeln(">" + A_CONFIG_SYSTEM_SFT_NO + "");
    for (j in system["features"]) {
      if (!system["features"][j]) continue;
      if (system["features"][j]["ftype"] == "multiple-select") continue;
      if (system["features"][j]["ftype"] == "text") continue;
      if (system["features"][j]["ftype"] == "checkbox") continue;
      writeln("<OPTION value='" + j + "' ");
      write(">" + unescape(system["features"][j]["name"]));
    }
    writeln("</SELECT></TD></TR>");
    writeln("<TR><TD colspan=4>");
    for (i in system["features"]) {
      if (system["features"][i]) {
        writeln(FONT_A + " <INPUT type=checkbox name='feats" + i + "'");
        writeln(
          "><A HREF='javascript:parent.a_product_feature(,-1,)'>&nbsp;" +
            unescape(system["features"][i]["name"]) +
            "</A>",
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
function a_import_headline() {
  spec = new Array();
  with (s.document.insert) {
    type = typ.options[typ.selectedIndex].value;
    he = h.options[h.selectedIndex].value;
    rep = repl.options[repl.selectedIndex].value;
    spec = new Array();
    spec["repl"] = rep;
    spec["htmltyp"] = he;
    spec["typ"] = type;
    if (type != "txt" && j.checked) spec["menge"] = true;
    else spec["menge"] = false;
    if (k.checked) spec["preisa"] = true;
    else spec["preisa"] = false;
    spec_fields = A_INSERT_PROD_NAME + "\t";
    if (l.checked) spec_fields += A_INSERT_PROD_TITEL + "\t";
    if (image.checked) spec_fields += A_INSERT_PROD_IMAGE + "\t";
    if (o.checked) spec_fields += A_INSERT_PROD_DESC + "\t";
    if (url.checked) spec_fields += A_INSERT_PROD_URL + "\t";
    if (gm.checked) spec_fields += A_INSERT_PROD_GPREIS + "\t";
    if (m.checked) spec_fields += A_INSERT_PROD_SPREIS + "\t";
    spec["mwst"] = n.options[n.selectedIndex].value;
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
    writeln("\n" + spec_fields);
    writeln("</TEXTAREA>");
    writeln("</FONT></TD></TR>");
    writeln("</TABLE>");
    writeln("</FORM>");
    writeln(ADMIN_BOT);
    close();
  }
}
function a_import_pages() {
  with (s.document) {
    if (isNaN(e_page_state)) {
      open();
      writeln(ADMIN_TOP);
      writeln(FONT_A_BIG + A_IMPORT_PAGE_ERR + "</FONT>");
      writeln(ADMIN_BOT);
      close();
      return;
    }
    open();
    writeln(ADMIN_TOP + FONT_A);
    writeln("<FORM name=insert onSubmit='parent.a_do_import()'>");
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
function a_do_import() {
  var val = "";
  if (!(s.document.insert.imp && s.document.insert)) {
    a_del_s();
    alert("Form not found!");
    return;
  }
  if (!(val = s.document.insert.imp.value)) {
    a_del_s();
    alert(A_IMPORT_PAGE_NODATA);
    return;
  }
  r_tmp = new Array();
  r_tmp = val.split("\n");
  rows = new Array();
  for (tm in r_tmp) {
    rows[tm] = new Array();
    rows[tm] = r_tmp[tm].split("\t");
  }
  firs = new Array();
  firs = rows.shift();
  if (firs.length < 8) {
    alert(A_IMPORT_PAGE_NOADMIN);
    a_del_s();
    return;
  }
  if (firs[0] == "repl") {
    if (!confirm(AA_IMPORT_PAGE_ASK_OVWR)) {
      a_del_s();
      return;
    }
  } else if (firs[0] == "add") {
  } else {
    alert(A_IMPORT_PAGE_NOADMIN);
    a_del_s();
    return;
  }
  fields = new Array();
  fields = rows.shift();
  for (fi in fields) {
    field = unescape(a_myEscape(fields[fi]));
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
    a_del_s();
    return;
  }
  if (firs[0] == "repl" && page[e_page_state]["artikel"]) {
    art = new Array();
    art = page[e_page_state]["artikel"].split(",");
    for (ai in art) {
      if (artikel[art[ai]]) artikel[art[ai]] = false;
    }
    page[e_page_state]["artikel"] = "";
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
      a_del_s();
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
    page[e_page_state]["artikel"] += hash + ",";
    for (fe in fields) {
      if (!fields[fe].length) continue;
      if (!rows[ro][fe]) continue;
      if (!rows[ro][fe].length) tmp = "";
      else if (fields[fe] == "preis" || fields[fe] == "gpreis")
        tmp = a_2pf(rows[ro][fe]);
      else tmp = a_myEscape(rows[ro][fe]);
      artikel[hash][fields[fe]] = tmp;
    }
  }
  a_del_s();
  E_go("refresh");
}
function a_page(p) {
  var u = "";
  var n = "";
  var tt = "";
  var ng = "";
  var ngs = "";
  var bg = "";
  var su = false;
  var d = "a_insert_page()";
  if (p == "start") {
    a_edit_start();
    return;
  }
  if (p == "basket" || p == "send" || p == "data") {
    alert(A_PAGE_ERR);
    a_del_s();
    return;
  }
  if (p >= 0) {
    d = "a_do_insert_page()";
    if (isNaN(p)) {
      alert(A_PAGE_ERR1);
      a_del_s();
      return;
    }
    if (page[p]["url"]) u = unescape(page[p]["url"]);
    if (page[p]["navgif"]) ng = unescape(page[p]["navgif"]);
    if (page[p]["navgifs"]) ngs = unescape(page[p]["navgifs"]);
    if (page[p]["bg"]) bg = unescape(page[p]["bg"]);
    n = unescape(page[p]["name"]);
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
        n +
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
        u +
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
          "' onClick='parent.a_delete_page(" +
          p +
          ");'>",
      );
      writeln("&nbsp;&nbsp;&nbsp;");
      writeln(
        "<INPUT type=button value='" +
          A_UP +
          "' onClick='parent.a_move_page_up(" +
          p +
          ");'>",
      );
      writeln(
        "<INPUT type=button value='" +
          A_DOWN +
          "' onClick='parent.a_move_page_down(" +
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
function a_move_page_down(s_obj) {
  if (page.length == e_page_state + 1) return;
  for (i in page)
    if (i == s_obj) {
      hilf = page[i];
      page[i] = page[i + 1];
      page[i + 1] = hilf;
      break;
    }
  e_page_state += 1;
  LEFT = false;
  E_go("refresh");
  a_page(e_page_state);
}
function a_move_page_up(s_obj) {
  if (s_obj == "0") return;
  for (i in page)
    if (i == s_obj) {
      hilf = page[i];
      page[i] = page[i - 1];
      page[i - 1] = hilf;
      break;
    }
  e_page_state -= 1;
  LEFT = false;
  E_go("refresh");
  a_page(e_page_state);
}
function A_main() {
  a_update();
  E_main();
  ADMIN = true;
  a_init();
  a_ln();
}
