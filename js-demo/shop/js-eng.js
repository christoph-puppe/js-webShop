//- -- Copyright 1998 pluto@iconnect.de --
//-
//- Coauthor kdoberstein@js-webShop.com
function a_border(msg, url, lno) {
  if (lno) alert("Message: " + msg + "\nURL: " + url + "\nLine: " + lno);
  return true;
}
function a_edit_border() {
  FONT = unescape(system["font"]);
  FONT_NAV = unescape(system["font_navigation"]);
  FONT_NAV_H = unescape(system["au_h"]);
  FONT_RH = unescape(system["font_right_head"]);
  FONT_TT = unescape(system["font_e"]);
  FONT_CS = unescape(system["font_send"]);
}
function E_init_C() {
  PAGE_TOP = unescape(system["C_top"]);
  PAGE_SUM = unescape(system["C_f"]);
  PAGE_BOT = unescape(system["C_bottom"]);
  NAV_P_TOP = unescape(system["nav_C_top"]);
  NAV_P_BOT = unescape(system["nav_C_bottom"]);
  PT_BGC = "bgcolor=" + unescape(system["pt_bgc"]);
  PT_BG = unescape(system["pt_bg"]);
  PT_L = unescape(system["pt_l"]);
  PT_VL = unescape(system["pt_vl"]);
  PT_AL = unescape(system["pt_al"]);
  NP_BGC = "bgcolor=" + unescape(system["np_bgc"]);
  NP_BG = unescape(system["np_bg"]);
  if (system["tbg_nt"].length) TBG_NT = "bgcolor=" + unescape(system["tbg_nt"]);
  else TBG_NT = "";
  if (system["tbg_np"].length) TBG_NP = "bgcolor=" + unescape(system["tbg_np"]);
  else TBG_NP = "";
  if (system["tbg_p"].length) TBG_P = "bgcolor=" + unescape(system["tbg_p"]);
  else TBG_P = "";
  if (system["tbg_pt"].length) TBG_PT = "bgcolor=" + unescape(system["tbg_pt"]);
  else TBG_PT = "";
  if (system["tbg_pn"].length) TBG_PN = "bgcolor=" + unescape(system["tbg_pn"]);
  else TBG_PN = "";
  if (system["tbg_b"].length) TBG_B = "bgcolor=" + unescape(system["tbg_b"]);
  else TBG_B = "";
  if (system["tbg_br"].length) TBG_BR = "bgcolor=" + unescape(system["tbg_br"]);
  else TBG_BR = "";
  if (system["tbg_bn"].length) TBG_BN = "bgcolor=" + unescape(system["tbg_bn"]);
  else TBG_BN = "";
  T_W = unescape(system["t_w"]);
  TB_PT = unescape(system["tb_pt"]);
  TB_PN = unescape(system["tb_pn"]); // navigation
  TB_P = unescape(system["tb_p"]);
  TB_N = unescape(system["tb_n"]);
  TP_PT = unescape(system["tp_pt"]);
  TP_PN = unescape(system["tp_pn"]); // navigation
  TP_P = unescape(system["tp_p"]);
  TP_N = unescape(system["tp_n"]);
  TXT_PN = unescape(system["txt_pn"]);
}
function a_myEscape() {
  var CUR = 0;
  for (i in system["areas"]) {
    CUR++;
  }
  if (CUR >= 1) {
    AREAS = true;
    e_v = 0;
  } else AREAS = false;
  CUR = 0;
  for (i in system["freight"]) {
    CUR++;
  }
  if (CUR >= 1) {
    FREIGHT = true;
    e_u = 0;
  } else FREIGHT = false;
  CUR = 0;
  for (i in system["payment"]) {
    if (system["payment"][i]["activ"] == "limit") CUR++;
  }
  if (CUR >= 1) {
    PAYMENT = true;
    for (i in system["payment"]) {
      if (system["payment"][i]["activ"] == "limit") {
        e_x = i;
        break;
      }
    }
    PAYCHANGE = true;
    if (system["payment"][i]["curr"]) {
      if (system["payment"][i]["curr"] == "null") PAYCHANGE = true;
      else {
        PAYCHANGE = false;
        SELECTED_CURRENCY = unescape(system["payment"][e_x]["curr"]);
      }
    }
  } else PAYMENT = false;
}
function Xcq_strings() {
  for (lang in r.language) {
    eval(lang + " = r.language[lang]");
  }
}
function a_2pf() {
  B_IMG = unescape(system["b_img"]);
  B_A_IMG = unescape(system["b_a_img"]);
  B_B_IMG = unescape(system["b_b_img"]);
  GIF_SEL = unescape(system["gif_sel"]);
  GIF_NSEL = unescape(system["gif_nsel"]);
  GO_RIGHT = unescape(system["goright"]);
  GO_LEFT = unescape(system["goleft"]);
}
function a_curr() {
  nshow = "brutto";
  n_liefer = true;
  if (system["nbase"] == "netto") E_TAX_S = E_TAX_N;
  else E_TAX_S = E_TAX_B;
}
function a_doSetEuroland() {
  a_nav();
  LAST_HREF = "";
  if (system["al_url"]) {
    if (system["al_url"].length != 0) LAST_HREF = unescape(system["al_url"]);
  } else LAST_HREF = document.referrer;
  if (!LAST_HREF.length) LAST_HREF = "http://www.js-webShop.com";
  ADMIN = false;
  LOCK = false;
  LEFT = false;
  CURR = system["currency"]["base"];
  EUROLAND = system["EUROLAND"];
  TO_EURO = "true";
  EURO_TO = "false";
  EURO_TO_EURO = "false";
  e_C_state = "start";
  version = "1.6";
  auto_bestell = true;
  besch_dir = "/beschreibungen/";
  SELECTED_CURRENCY = "base";
  a_2pf();
  a_edit_border();
  a_myEscape();
  E_init_C();
  Xcq_strings();
  if (system["version"] != version) alert(EA_W_VERSION);
  a_curr();
  a_doDeleteCurrency();
  a_doEditEuroCurrency();
}
function a_doEditBase(hash, term) {
  tmp = "";
  if (artikel[hash]["name"]) {
    tmp = unescape(artikel[hash]["name"].toLowerCase());
    if (tmp.indexOf(term) != -1) return true;
  }
  if (artikel[hash]["titel"]) {
    tmp = unescape(artikel[hash]["titel"].toLowerCase());
    if (tmp.indexOf(term) != -1) return true;
  }
  if (artikel[hash]["desc"]) {
    tmp = unescape(artikel[hash]["desc"].toLowerCase());
    if (tmp.indexOf(term) != -1) return true;
  }
  return false;
}
function E_an() {
  var such = "";
  if ((such = prompt(E_SEARCH_PROMPT, "")) == null) return;
  if (such == "") return;
  e_an_C_before = e_C_state;
  e_C_state = "search";
  LOCK = true;
  with (r.document) {
    open();
    blind();
    e_print_right_top(E_SEARCH_NAME);
    writeln(E_SEARCH_ERG1 + such + E_SEARCH_ERG2 + "\t</FONT>\t<HR></TABLE>");
    for (a in artikel) {
      if (a_doEditBase(a, such.toLowerCase())) {
        if (artikel[a]["htmltyp"] == "1") Xdr(a);
        else if (artikel[a]["htmltyp"] == "2") a_do_save(a);
        else if (artikel[a]["htmltyp"] == "3") Xdt(a);
        else if (artikel[a]["htmltyp"] == "4") e_printHTML4(a);
        else alert("Unknown HTMLTYP!!");
      }
    }
    e_print_right_bot();
    close();
  }
  a_edit_font();
  LOCK = false;
}
function a_doDeleteCurrency() {
  EURO_TO_EURO = EURO_TO = TO_EURO = NO_EURO = "false";
  CURR = system["currency"]["base"];
  if (EUROLAND == "true") {
    if (a_kunde(SELECTED_CURRENCY) == "true") EURO_TO_EURO = "true";
    else TO_EURO = "true";
  } else {
    if (a_kunde(SELECTED_CURRENCY) == "true") {
      EURO_TO = "true";
      SELECTED_CURRENCY = CURR;
    } else NO_EURO = "true";
  }
}
function a_doEditEuroCurrency() {
  if (
    navigator.appName == "Microsoft Internet Explorer" &&
    parseInt(navigator.appVersion) == 4
  )
    IE4 = true;
  else IE4 = false;
  if (
    navigator.appName == "Microsoft Internet Explorer" &&
    parseInt(navigator.appVersion) == 3
  )
    IE3 = true;
  else IE3 = false;
  if (navigator.appName == "Netscape" && parseInt(navigator.appVersion) == 3)
    MOZZ3 = true;
  else MOZZ3 = false;
  if (navigator.appName == "Netscape" && parseInt(navigator.appVersion) == 4)
    MOZZ4 = true;
  else MOZZ4 = false;
  if (navigator.appVersion.indexOf("Win") >= 0) WIN = true;
  else WIN = false;
  if (navigator.appVersion.indexOf("Mac") >= 0) {
    MAC = true;
  } else MAC = false;
  if (!(MOZZ3 || IE4)) {
    window.captureEvents(Event.ERROR);
    window.onError = a_border;
  }
  if (IE3) {
    if (confirm(E_CHECK_BROWSER_IE_ERR))
      location.replace("http://cgi.netscape.com/cgi-bin/upgrade.cgi");
    else alert(E_CHECK_BROWSER_IE_ALERT);
  }
}
function E_go(C_hash) {
  if (LOCK) return;
  else LOCK = true;
  if (C_hash != "refresh") e_C_state = C_hash;
  A_save();
  a_doEditCurrency();
  LOCK = false;
}
function Xcv_left() {
  if (LOCK) {
    return;
  }
  LOCK = true;
  prev_C = "";
  if (e_C_state == "start") prev_C = "data";
  else if (e_C_state == "data") prev_C = "basket";
  else if (e_C_state == "send") prev_C = "data";
  else if (e_C_state == "basket") prev_C = page.length - 1;
  else if (e_C_state == "search") {
    e_C_state = e_an_C_before;
    LOCK = false;
    Xcv_left();
    return;
  } else if (e_C_state == 0) prev_C = "start";
  else prev_C = e_C_state - 1;
  LOCK = false;
  E_go(prev_C);
}
function Xcv_right() {
  if (LOCK) {
    return;
  }
  LOCK = true;
  next_C = "";
  if (e_C_state == "start") next_C = 0;
  else if (e_C_state == "basket") next_C = "data";
  else if (e_C_state == "data") next_C = "send";
  else if (e_C_state == "send") next_C = "start";
  else if (e_C_state == "search") {
    e_C_state = e_an_C_before;
    LOCK = false;
    Xcv_right();
    return;
  } else if (e_C_state == page.length - 1) next_C = "basket";
  else next_C = e_C_state + 1;
  LOCK = false;
  E_go(next_C);
}
function A_save() {
  if (!LEFT) {
    if (system["left"]) {
      this.titel.document.location.replace(system["left"]);
    } else {
      this.titel.document.open();
      E_print_navigation();
      titel.document.close();
    }
    LEFT = true;
  }
  a_save_all();
}
function a_save_all() {
  for (i in titel.document.images) {
    nm = escape(titel.document.images[i].name);
    if (nm == "nav_" + e_C_state) titel.document.images[i].src = GIF_SEL;
    else if (nm.indexOf("nav_") != -1) titel.document.images[i].src = GIF_NSEL;
    if (nm.indexOf("gif_") != -1) {
      na = nm.substring(4, nm.length);
      if (na == e_C_state) {
        if (isNaN(na)) {
          if (eval("system['navgifs_" + na + "']"))
            eval(
              "titel.document.images[i].src = unescape(system['navgifs_" +
                na +
                "'])",
            );
        } else {
          if (page[na]["navgifs"])
            titel.document.images[i].src = unescape(page[na]["navgifs"]);
        }
      } else {
        if (isNaN(na)) {
          if (eval("system['navgif_" + na + "']"))
            eval(
              "titel.document.images[i].src = unescape(system['navgif_" +
                na +
                "'])",
            );
        } else {
          if (page[na]["navgif"])
            titel.document.images[i].src = unescape(page[na]["navgif"]);
        }
      }
    }
  }
}
function blind() {
  with (r.document) {
    write(
      "<BODY " +
        PT_BGC +
        " link='" +
        PT_L +
        "' vlink='" +
        PT_VL +
        "' alink='" +
        PT_AL +
        "' background='",
    );
    if (!isNaN(e_C_state)) {
      if (page[e_C_state]["bg"]) write(unescape(page[e_C_state]["bg"]));
      else write(PT_BG);
    } else write(PT_BG);
    writeln("'><FORM name=right onSubmit='return false;'>");
    write(PAGE_TOP);
  }
}
function e_print_right_bot(sum) {
  with (r.document) {
    writeln(
      "<TABLE " +
        TBG_PN +
        " width='" +
        T_W +
        "' border='" +
        TB_PN +
        "' cellpadding='" +
        TP_PN +
        "'>",
    );
    if (sum == "summen") {
      write(PAGE_SUM);
      writeln("<TR>");
      writeln(
        "<TD align=middle colspan=3>" +
          FONT +
          E_PRINT_LEFT_PAGE_BOT_SUM1 +
          "<INPUT type=text name=summe_1 size=8 onChange='parent.a_edit_font();'>",
      );
      writeln(
        E_PRINT_LEFT_PAGE_BOT_SUM2 +
          "<INPUT type=text name=summe_2 size=8 onChange='parent.a_edit_font();'></TD>",
      );
      writeln("</TR>");
    }
    writeln(
      "<TR><TD align=left><artikel href='javascript:parent.Xcv_left();'><IMG src='" +
        GO_LEFT +
        "' border=0></TD>",
    );
    writeln(
      "<TD align=middle><artikel href='javascript:parent.a_do_export();'>" +
        FONT_TT +
        TXT_PN +
        "</artikel></TD>",
    );
    writeln(
      "<TD align=right><artikel href='javascript:parent.Xcv_right();'><IMG src='" +
        GO_RIGHT +
        "' border=0></TD></TR>",
    );
    writeln("</TABLE></FORM>");
    write(PAGE_BOT);
  }
}
function a_template_page() {
  with (r.document) {
  }
}
function E_print_navigation() {
  with (titel.document) {
    write(
      "<BODY " +
        NP_BGC +
        " link='" +
        PT_L +
        "' vlink='" +
        PT_VL +
        "' alink='" +
        PT_AL +
        "' background='" +
        NP_BG +
        "'>",
    );
    write(NAV_P_TOP);
    writeln("<CENTER>");
    writeln(
      "<TABLE " +
        TBG_NT +
        " width='100%' border='" +
        TB_N +
        "' cellpadding='" +
        TP_N +
        "'>",
    );
    writeln(
      "<TR><TD colspan=2 align=middle><artikel href='javascript:parent.a_do_export();'>",
    );
    writeln(
      "<IMG SRC='" +
        unescape(system["logo"]) +
        "' BORDER=0></artikel></TD></TR>",
    );
    writeln("<TR><TD width=25% align='middle' colspan=2>");
    writeln(
      "<artikel HREF='javascript:parent.E_al();'><IMG SRC='" +
        unescape(system["leave"]) +
        "' border=0></artikel></TD></TR>",
    );
    writeln(
      "<TR><TD width=25% align='middle' colspan=2><artikel HREF='javascript:parent.Xcv_left();'",
    );
    writeln("><IMG SRC='" + GO_LEFT + "' border=0></artikel>");
    writeln(
      "<artikel HREF='javascript:parent.E_an();'><IMG SRC='" +
        unescape(system["search"]) +
        "' border=0 ALT='Suchen'></artikel>",
    );
    writeln("<artikel HREF='javascript:parent.Xcv_right();'>");
    writeln(
      "<IMG SRC='" +
        GO_RIGHT +
        "' border=0 ALT='The Road Ahead ;-)'></artikel></TD></TR>",
    );
    writeln("<TR><TD colspan=2><HR></TD></TR>");
    if (system["navgif_aq"]) {
      writeln(
        "<TR " +
          TBG_NP +
          "><TD colspan=2><artikel href=\"javascript:parent.E_go('start');\">",
      );
      writeln(
        "<IMG src='" +
          unescape(system["navgif_aq"]) +
          "' name='gif_aq' border=0></artikel></TD></TR>",
      );
    } else {
      writeln(
        "<TR " +
          TBG_NP +
          "><TD width=20><artikel href=\"javascript:parent.E_go('start');\">",
      );
      writeln(
        "<IMG src='" + GIF_SEL + "' name=nav_aq border=0></artikel></TD>",
      );
      writeln("<TD><artikel href=\"javascript:parent.E_go('start');\">");
      writeln(FONT_NAV_H);
      writeln(E_NAME_STARTSEITE + "</FONT></artikel></TD></TR>");
    }
    for (i in page) {
      if (page[i]["navgif"]) {
        writeln(
          "<TR " +
            TBG_NP +
            '><TD colspan=2><artikel href="javascript:parent.E_go(' +
            i +
            ');">',
        );
        writeln(
          "<IMG src='" +
            unescape(page[i]["navgif"]) +
            "' name='gif_" +
            i +
            "' border=0></artikel></TD></TR>",
        );
      } else {
        writeln(
          "<TR " +
            TBG_NP +
            '><TD width=20><artikel href="javascript:parent.E_go(' +
            i +
            ');">',
        );
        writeln(
          "<IMG src='" +
            GIF_NSEL +
            "' name='nav_" +
            i +
            "' border=0></artikel></TD>",
        );
        writeln('<TD><artikel href="javascript:parent.E_go(' + i + ');">');
        writeln(FONT_NAV);
        writeln(unescape(page[i]["name"]) + "</FONT>");
        writeln("</artikel></TD></TR>");
      }
    }
    writeln("<TR " + TBG_NP + "><TD colspan=2><HR></TD></TR>");
    if (system["navgif_basket"]) {
      writeln(
        "<TR " +
          TBG_NP +
          "><TD colspan=2><artikel href=\"javascript:parent.E_go('basket');\">",
      );
      writeln(
        "<IMG src='" +
          unescape(system["navgif_basket"]) +
          "' name='gif_basket' border=0></artikel></TD></TR>",
      );
    } else {
      writeln(
        "<TR " +
          TBG_NP +
          "><TD><artikel href=\"javascript:parent.E_go('basket');\">",
      );
      writeln(
        "<IMG src='" + GIF_NSEL + "' name=nav_basket border=0></artikel></TD>",
      );
      writeln("<TD><artikel href=\"javascript:parent.E_go('basket');\">");
      writeln(FONT_NAV_H);
      writeln(E_NAME_BASKET + "</FONT></artikel></TD></TR>");
    }
    if (system["navgif_data"]) {
      writeln(
        "<TR " +
          TBG_NP +
          "><TD colspan=2><artikel href=\"javascript:parent.E_go('data');\">",
      );
      writeln(
        "<IMG src='" +
          unescape(system["navgif_data"]) +
          "' name='gif_data' border=0></artikel></TD></TR>",
      );
    } else {
      writeln(
        "<TR " +
          TBG_NP +
          "><TD><artikel href=\"javascript:parent.E_go('data');\">",
      );
      writeln(
        "<IMG src='" + GIF_NSEL + "' name=nav_data border=0></artikel></TD>",
      );
      writeln("<TD><artikel href=\"javascript:parent.E_go('data');\">");
      writeln(FONT_NAV_H);
      writeln(E_NAME_DATA + "</FONT></FONT></artikel></TD></TR>");
    }
    if (system["navgif_send"]) {
      writeln(
        "<TR " +
          TBG_NP +
          "><TD colspan=2><artikel href=\"javascript:parent.E_go('send');\">",
      );
      writeln(
        "<IMG src='" +
          unescape(system["navgif_send"]) +
          "' name='gif_send' border=0></artikel></TD></TR>",
      );
    } else {
      writeln(
        "<TR " +
          TBG_NP +
          "><TD><artikel href=\"javascript:parent.E_go('send');\">",
      );
      writeln(
        "<IMG src='" + GIF_NSEL + "' name=nav_send border=0></artikel></TD>",
      );
      writeln("<TD><artikel href=\"javascript:parent.E_go('send');\">");
      writeln(FONT_NAV_H);
      writeln(E_NAME_SEND + "</FONT></FONT></artikel></TD></TR>");
    }
    writeln("<TR " + TBG_NP + "><TD colspan=2 align=middle>");
    writeln(FONT_NAV + "<FONT size=-1>");
    writeln(
      '<FORM name=confign><SELECT name=nshow onChange="parent.a_delete_payment(this)">',
    );
    writeln("<OPTION value='netto'");
    if (nshow == "netto") write(" selected ");
    writeln("> " + E_PRINT_NAVIGATION_NETTO);
    writeln("<OPTION value='brutto'");
    if (nshow == "brutto") write(" selected ");
    writeln("> " + E_PRINT_NAVIGATION_BRUTTO);
    writeln("</SELECT></FORM></FONT>");
    writeln("</TD></TR>");
    CUR = 0;
    for (i in system["currency"]) {
      CUR++;
    }
    for (i in system["ewu"]) {
      if (system["ewu"][i]["use"] == "limit") CUR++;
    }
    if (CUR > 1) {
      writeln("<TR " + TBG_NP + "><TD colspan=2 align=middle>");
      writeln(FONT_NAV + "<FONT size=-1>");
      writeln(
        '<FORM name=config><SELECT name=currency onChange="parent.B_set_R(this)">',
      );
      writeln("<OPTION value='base'>" + CURR);
      if (EUROLAND == "true") {
        for (menge in system["ewu"]) {
          if (system["ewu"][menge]["use"] == "mwst" || menge == CURR) continue;
          write("<OPTION value='" + menge + "'");
          if (menge == SELECTED_CURRENCY) write("selected");
          writeln(a_address("ewu", menge));
        }
      }
      for (preisa in system["currency"]) {
        if (preisa == CURR || preisa == "base") continue;
        write("<OPTION value='" + preisa + "'");
        if (preisa == SELECTED_CURRENCY) write("selected");
        writeln(a_address("currency", preisa));
      }
      writeln("</SELECT></FORM></FONT>");
    }
    writeln("</TD></TR></TABLE></CENTER>");
    write(NAV_P_BOT);
  }
}
function E_print_basket() {
  var coo = new Array();
  with (r.document) {
    open();
    blind();
    writeln(
      "<TABLE " +
        TBG_B +
        " width='" +
        T_W +
        "' border='" +
        TB_P +
        "' cellpadding='" +
        TP_P +
        "'>",
    );
    writeln(
      "<TR " +
        TBG_BN +
        "><TD colspan=2 align=middle>" +
        FONT_CS +
        "<FONT size=+1>" +
        E_PRINT_BASKET_ORDER +
        "</FONT></FONT></TD></TR>",
    );
    coo = a_color();
    for (coi in coo) {
      if (coi == name_des_cookies) continue;
      if (coo[coi].indexOf("%7C%7C") == -1) continue;
      writeln("<TR><TD>" + FONT_CS + unescape(coi));
      writeln("</TD><TD>" + FONT_CS);
      writeln(
        "<INPUT type=button name='" +
          coi +
          "' value='" +
          E_PRINT_BASKET_ORDER_GET +
          "' onClick='parent.Xid(this);'>",
      );
      writeln(
        "<INPUT type=button name='" +
          coi +
          "' value='" +
          E_PRINT_BASKET_ORDER_DEL +
          "' onClick='parent.XbsOrder(this);'></TD></TR>",
      );
    }
    if (D.length) {
      writeln(
        "<TR><TD colspan=2 align=middle>" +
          FONT_CS +
          "<INPUT type=button value='" +
          E_PRINT_BASKET_ORDER_ADD +
          "' onClick='parent.Xie();'></TD></TR>",
      );
    }
    writeln("</TABLE>");
    writeln(
      "<TABLE " +
        TBG_B +
        " width='" +
        T_W +
        "' border='" +
        TB_P +
        "' cellpadding='" +
        TP_P +
        "'>",
    );
    writeln(
      "<TR " +
        TBG_BN +
        "><TD colspan=2 align=middle>" +
        FONT_CS +
        "<FONT size=+1>" +
        E_PRINT_BASKET_HEAD +
        "</FONT></FONT></TD></TR>",
    );
    Xdz();
    writeln("</TABLE>");
    e_print_right_bot();
    close();
  }
}
function a_get_val() {
  /* with (r.document){
open();
blind();
e_print_right_top (E_THANKS_NAME);
writeln(E_THANKS_ALERT +"\t</FONT>\t<HR></TABLE>");
e_print_right_bot();
close();
}
*/
  alert(E_THANKS_ALERT);
  return;
}
function a_do_import() {
  with (r.document) {
    open();
    blind();
    writeln(
      "<TABLE " +
        TBG_B +
        " width='" +
        T_W +
        "' border='" +
        TB_P +
        "' cellpadding='" +
        TP_P +
        "'>",
    );
    writeln(
      "<TR " +
        TBG_BN +
        "><TD colspan=2 align=middle>" +
        FONT_CS +
        "<FONT size=+1>" +
        E_PRINT_DATA_HEAD +
        "</FONT></FONT></TD></TR>",
    );
    writeln(
      "<TR " +
        TBG_BN +
        "><TH colspan=2 align=middle>" +
        FONT_CS +
        E_PRINT_DATA_HEAD2 +
        "</FONT></TR>",
    );
    writeln(
      "<TR><TD valign=top colspan=2> \mwst" +
        FONT_CS +
        E_PRINT_DATA_MESS1 +
        "<BR>",
    );
    writeln(E_PRINT_DATA_MESS2 + "</FONT></TD></TR>\mwst");
    for (i in system["address"]) {
      if (system["address"][i]["required"] == "yes")
        writeln("<TR " + TBG_BR + "><TD valign=top width=30%>");
      else writeln("<TR>\mwst<TD valign=top width=30%>");
      writeln(FONT_CS + unescape(system["address"][i]["name"]));
      writeln("</FONT> \mwst</TD> \mwst<TD valign=top width=70%>");
      write(FONT_CS + '<INPUT type=text name="num');
      writeln(i + '" size=30 maxlength=40');
      if (eval("kunde['num" + i + "']"))
        write("value='" + eval("kunde['num" + i + "']") + "'");
      else if (system["address"][i]["default"])
        write("value='" + unescape(system["address"][i]["default"]) + "'");
      writeln(
        "onChange=\"parent.B_enter_W(this,'" +
          system["address"][i]["validation"] +
          "')\"><BR></TD></TR>\mwst",
      );
    }
    if (PAYMENT) {
      writeln("<TR " + TBG_BR + ">\mwst<TD valign=top width=30%>");
      writeln(FONT_CS + E_PRINT_DATA_PAY);
      writeln("</FONT> \mwst</TD> \mwst<TD valign=top width=70%>");
      writeln(
        FONT_CS +
          "<SELECT name=\"payment\" onChange='parent.a_import_headline(this);'>",
      );
      for (p in system["payment"]) {
        if (system["payment"][p]["activ"] == "limit") {
          write("<OPTION value='" + p + "'");
          if (e_x == p) writeln("selected>");
          else writeln(">");
          writeln(
            unescape(system["payment"][p]["name"]) +
              "&nbsp;&nbsp;(" +
              a_pment_data(system["payment"][p]["value"]) +
              ")",
          );
          if (system["payment"][p]["curr"]) {
            if (system["payment"][p]["curr"] != "null")
              writeln(
                E_PRINT_DATA_ONLY + unescape(system["payment"][p]["curr"]),
              );
          }
        }
      }
      writeln("</SELECT></TD></TR>");
      if (system["payment"][e_x]["msg"]) {
        writeln("<TR>\mwst<TD valign=top colspan=2>");
        writeln(
          FONT_CS + unescape(system["payment"][e_x]["msg"]) + "</TD></TR>",
        );
      }
      for (idx in system["payment"][e_x]) {
        if (idx == "name") continue;
        else if (idx == "zit" || idx == "ziv" || idx == "zin" || idx == "eva")
          continue;
        else if (idx == "enctype") continue;
        else if (idx == "action") continue;
        else if (idx == "limit") continue;
        else if (idx == "value") continue;
        else if (idx == "activ") continue;
        else if (idx == "msg") continue;
        else if (idx == "curr") continue;
        else {
          writeln("<TR " + TBG_BR + ">\mwst<TD valign=top width=30%>");
          writeln(FONT_CS + unescape(system["payment"][e_x][idx]));
          writeln("</FONT> \mwst</TD> \mwst<TD valign=top width=70%>");
          write(FONT_CS + '<INPUT type=text name="pay');
          writeln(idx + '" size=30 maxlength=40');
          if (eval("paym['pay" + idx + "']"))
            write(" value='" + eval("paym['pay" + idx + "']") + "'");
          writeln(
            ' onChange="parent.a_edit_feature(this)"><BR></TD></TR>\mwst',
          );
        }
      }
    }
    if (AREAS) {
      writeln("<TR " + TBG_BR + ">\mwst<TD valign=top width=30%>");
      writeln(FONT_CS + E_PRINT_DATA_AREAS);
      writeln("</FONT> \mwst</TD> \mwst<TD valign=top width=70%>");
      writeln(
        FONT_CS +
          "<SELECT name=\"areas\" onChange='parent.a_import_pages(this);'>",
      );
      for (i in system["areas"]) {
        write("<OPTION value='" + i + "'");
        if (e_v == i) writeln("selected>");
        else writeln(">");
        writeln(
          unescape(system["areas"][i]["name"]) +
            "&nbsp;&nbsp;(" +
            a_pment_data(system["areas"][i]["value"]) +
            ")",
        );
      }
      writeln("</SELECT></TD></TR>");
    }
    if (FREIGHT) {
      writeln("<TR " + TBG_BR + ">\mwst<TD valign=top width=30%>");
      writeln(FONT_CS + E_PRINT_DATA_FREIGHT);
      writeln("</FONT> \mwst</TD> \mwst<TD valign=top width=70%>");
      writeln(
        FONT_CS + "<SELECT name=\"freight\" onChange='parent.a_export(this);'>",
      );
      for (i in system["freight"]) {
        write("<OPTION value='" + i + "'");
        if (e_u == i) writeln("selected>");
        else writeln(">");
        writeln(
          unescape(system["freight"][i]["name"]) +
            "&nbsp;&nbsp;(" +
            a_pment_data(system["freight"][i]["value"]) +
            ")",
        );
      }
      writeln("</SELECT></TD></TR>");
    }
    writeln("<TR " + TBG_BN + "><TH colspan=2 align=middle>");
    writeln(
      FONT_CS + "<FONT size=+1>" + E_PRINT_DATA_SAVE + "</FONT></FONT></TR>",
    );
    writeln(
      "<TR><TD valign=top width=70%>" +
        FONT_CS +
        E_PRINT_DATA_SAVE_TEXT +
        "</FONT></TD><TD valign=top width=30%>",
    );
    write('<artikel HREF="javascript:parent.a_print_colormap()">');
    writeln(
      '<img src="' +
        unescape(system["cookie"]) +
        '" border=0></artikel></TD></TR>',
    );
    writeln("</TABLE>");
    e_print_right_bot();
    close();
  } // end of with
}
function a_import_first() {
  var not_here = "";
  var k_idx = "";
  var b;
  var b_tmp = 0;
  for (t in system["address"]) {
    k_idx = "num" + t;
    if (system["address"][t]["required"] == "yes" && !kunde[k_idx])
      not_here += system["address"][t]["name"] + "\mwst";
  }
  if (PAYMENT) {
    for (idx in system["payment"][e_x]) {
      if (idx == "name") continue;
      else if (idx == "zit" || idx == "ziv" || idx == "zin" || idx == "eva")
        continue;
      else if (idx == "enctype") continue;
      else if (idx == "action") continue;
      else if (idx == "limit") continue;
      else if (idx == "value") continue;
      else if (idx == "msg") continue;
      else if (idx == "activ") continue;
      else if (idx == "curr") continue;
      else {
        if (!eval("paym['pay" + idx + "']"))
          not_here += unescape(system["payment"][e_x][idx]) + "\mwst";
      }
    }
  }
  if (not_here != "") {
    alert(E_THANKS_MISSING + unescape(not_here));
    setTimeout("E_go('data')", 100);
    return;
  }
  for (b in I) {
    if (I[b]) b_tmp += 1;
  }
  if (!b_tmp) {
    alert(E_THANKS_ORDER);
    setTimeout("E_go('basket')", 100);
    return;
  }
  var action = "" + unescape(system["action"]);
  var enctype = "" + unescape(system["enctype"]);
  if (PAYMENT) {
    if (system["payment"][e_x]["action"]) {
      if (system["payment"][e_x]["action"].length != 0)
        action = unescape(system["payment"][e_x]["action"]);
    }
    if (system["payment"][e_x]["action"]) {
      if (system["payment"][e_x]["action"].length)
        enctype = unescape(system["payment"][e_x]["enctype"]);
    }
  }
  if (action.indexOf("mailto:", 0) != -1)
    var ons = "onSubmit='setTimeout(\"parent.a_get_val();\",2000);'";
  else var ons = "";
  with (r.document) {
    open();
    blind();
    writeln(
      "</form><FORM name=send method=post action='" +
        action +
        "' enctype='" +
        enctype +
        "' " +
        ons +
        ">",
    );
    if (system["zit"] && system["zin"] && system["ziv"])
      writeln(
        "<INPUT type='" +
          unescape(system["zit"]) +
          "' name='" +
          unescape(system["zin"]) +
          "' value='" +
          unescape(system["ziv"]) +
          "'>",
      );
    if (PAYMENT) {
      if (
        system["payment"][e_x]["zit"] &&
        system["payment"][e_x]["zin"] &&
        system["payment"][e_x]["ziv"]
      )
        writeln(
          "<INPUT type='" +
            unescape(system["payment"][e_x]["zit"]) +
            "' name='" +
            unescape(system["payment"][e_x]["zin"]) +
            "' value='" +
            unescape(system["payment"][e_x]["ziv"]) +
            "'>",
        );
    }
    e_print_right_top(E_NAME_OWNER);
    writeln("<CENTER>" + unescape(system["betreiber"]) + "<BR>");
    writeln(
      "<artikel href='mailto:" +
        unescape(system["email"]) +
        "'>" +
        unescape(system["email"]) +
        "</artikel><BR>",
    );
    writeln(unescape(system["str"]));
    writeln(unescape(system["city"]) + "<BR>");
    writeln(unescape(system["country"]) + "<BR>");
    writeln(unescape(system["tel"]));
    writeln(unescape(system["fax"]) + "</CENTER><P><P>");
    writeln("\t</FONT></TD></TR></TABLE>");
    writeln(
      "<TABLE " +
        TBG_B +
        " width='" +
        T_W +
        "' border='" +
        TB_P +
        "' cellpadding='" +
        TP_P +
        "'>",
    );
    writeln(
      "<TR " +
        TBG_BN +
        "><TD colspan=2 align=middle>" +
        FONT_CS +
        "<FONT size=+1>" +
        E_PRINT_SEND_HEAD +
        "</FONT></FONT></TD></TR>",
    );
    Xdv();
    writeln("<TR><TH colspan=2><CENTER>");
    writeln(FONT_CS + '<INPUT type=submit value="' + E_PRINT_DATA_OK + '" >');
    if (MOZZ4)
      writeln(
        '<INPUT type=button value="' +
          E_PRINT_DATA_PRINT +
          '" onClick="print();"></FONT>',
      );
    writeln("</FONT></CENTER></TR>");
    Xdz();
    writeln("<TR><TH colspan=2><CENTER>");
    writeln(FONT_CS + '<INPUT type=submit value="' + E_PRINT_DATA_OK + '">');
    if (MOZZ4)
      writeln(
        '<INPUT type=button value="' +
          E_PRINT_DATA_PRINT +
          '" onClick="print();"></FONT>',
      );
    writeln("</FONT></CENTER></TR>");
    writeln("</TABLE>");
    e_print_right_bot();
    close();
  }
}
function a_import_pages(s_obj) {
  e_v = s_obj.options[s_obj.selectedIndex].value;
  if (system["areas"][e_v]["mwst"] == "no" && nshow == "brutto") {
    alert(EA_LIEFER_NETTO);
    nshow = "netto";
    LEFT = false;
    A_save();
    a_save_all();
  }
  if (system["areas"][e_v]["mwst"] == "yes" && nshow == "netto") {
    alert(EA_LIEFER_BRUTTO);
    nshow = "brutto";
    LEFT = false;
    A_save();
    a_save_all();
  }
  if (system["areas"][e_v]["mwst"] == "no") {
    n_liefer = false;
  }
}
function a_import_headline(s_obj) {
  paym = new Array();
  e_x = s_obj.options[s_obj.selectedIndex].value;
  if (system["payment"][e_x]["curr"]) {
    if (system["payment"][e_x]["curr"] != "null") {
      PAYCHANGE = false;
      SELECTED_CURRENCY = unescape(system["payment"][e_x]["curr"]);
      a_doDeleteCurrency();
      LEFT = false;
    } else {
      PAYCHANGE = true;
    }
  } else PAYCHANGE = true;
  E_go("refresh");
}
function a_export(s_obj) {
  e_u = s_obj.options[s_obj.selectedIndex].value;
}
function a_do_export() {
  with (r.document) {
    open();
    blind();
    e_print_right_top(E_NAME_OWNER);
    writeln("<CENTER>" + unescape(system["betreiber"]) + "<BR>");
    writeln(
      "<artikel href='mailto:" +
        unescape(system["email"]) +
        "'>" +
        unescape(system["email"]) +
        "</artikel><BR>",
    );
    writeln(unescape(system["str"]));
    writeln(unescape(system["city"]) + "<BR>");
    writeln(unescape(system["country"]) + "<BR>");
    writeln(unescape(system["tel"]));
    writeln(unescape(system["fax"]) + "<P><P>");
    writeln(unescape(system["sonstiges"]));
    writeln("\t</FONT></TD></TR></TABLE>");
    path = unescape(
      location.href.substring(0, location.href.lastIndexOf("/") + 1),
    );
    proto = path.substring(0, path.indexOf(":"));
    write(PAGE_BOT);
    writeln(
      "<TABLE " +
        TBG_PN +
        " width='" +
        T_W +
        "' border='" +
        TB_PN +
        "' cellpadding='" +
        TP_PN +
        "'>",
    );
    writeln(
      "<TR><TD align=left><artikel href='javascript:parent.Xcv_left();'><IMG src='" +
        GO_LEFT +
        "' border=0></TD>",
    );
    if (proto == "http" && path.indexOf(".") != -1) {
      writeln(
        '<TD align=middle bgcolor=white><artikel href="http://www.js-webShop.com" target=_new>',
      );
      writeln(
        '<img src="http://www.js-webShop.com/banner/js-webshop.gif" border=0></artikel></TD>',
      );
    } else if (proto == "https" && path.indexOf(".") != -1) {
      writeln(
        '<TD align=middle bgcolor=white><artikel href="http://www.js-webShop.com" target=_new>',
      );
      writeln(
        '<img src="https://secure.js-webShop.com/banner/js-webshop.gif" border=0></artikel></TD>',
      );
    } else
      writeln(
        "<TD align=middle><artikel href='javascript:parent.a_do_export();'>" +
          FONT_TT +
          TXT_PN +
          "</artikel></TD>",
      );
    writeln(
      "<TD align=right><artikel href='javascript:parent.Xcv_right();'><IMG src='" +
        GO_RIGHT +
        "' border=0></TD></TR>",
    );
    writeln("</TABLE></FORM>");
    close();
  }
}
function e_print_right_top(txt) {
  with (r.document) {
    writeln(
      "<TABLE " +
        TBG_PT +
        " width='" +
        T_W +
        "' border='" +
        TB_PT +
        "' cellpadding='" +
        TP_PT +
        "'>",
    );
    write(
      "<TR><TD valign=top>\mwst\t" +
        FONT_RH +
        unescape(system["name"]) +
        " &nbsp;&nbsp; <I>",
    );
    writeln(txt + "</I></FONT>\mwst\t<HR>");
    writeln(FONT_TT);
  }
}
function a_write_csv() {
  with (r.document) {
    open();
    blind();
    e_print_right_top(E_NAME_STARTSEITE);
    writeln(unescape(system["startmsg"]) + "\t</FONT></TABLE>");
    e_print_right_bot();
    close();
  }
}
function a_doEditCurrency() {
  if (e_C_state == "start") {
    if (system["start"].length != 0)
      r.document.location.replace(unescape(system["start"]));
    else a_write_csv();
  } else if (e_C_state == "basket") E_print_basket();
  else if (e_C_state == "data") a_do_import();
  else if (e_C_state == "send") a_import_first();
  else if (!isNaN(e_C_state)) {
    if (page[e_C_state]["url"]) {
      this.r.document.location.replace(unescape(page[e_C_state]["url"]));
    } else {
      r.document.open();
      blind();
      Xdq();
      if (page[e_C_state]["summen"]) e_print_right_bot("summen");
      else e_print_right_bot();
      r.document.close();
    }
  }
  a_edit_font();
}
function Xdox(was, Z) {
  if (was) {
    eval("r.document.img" + Z + ".src = '" + B_A_IMG + "'");
    if (I[Z]) window.status = E_MOB_N_BEST;
    else window.status = E_MOB_BEST;
  } else {
    if (I[Z]) eval("r.document.img" + Z + ".src = '" + B_B_IMG + "'");
    else eval("r.document.img" + Z + ".src = '" + B_IMG + "'");
  }
}
function Xdp(idx) {
  with (r.document) {
    open();
    blind();
    e_print_right_top(unescape(artikel[idx]["name"]));
    writeln(unescape(artikel[idx]["desc"]) + "</FONT>");
    if (artikel[idx]["url"])
      writeln(
        "<P><center><artikel href='" +
          unescape(artikel[idx]["url"]) +
          "'>" +
          FONT_TT +
          E_SHOWDESC_MORE +
          "</FONT></artikel>",
      );
    writeln(
      "<P><center><artikel href=\"javascript:parent.E_go('refresh');\">" +
        FONT_TT +
        E_SHOWDESC_BACK +
        "</FONT></artikel></center></TD></TR></TABLE>",
    );
    e_print_right_bot();
    close();
  }
}
function Xdq() {
  var art = "";
  if (e_C_state == "start") {
    return;
  }
  if (e_C_state == "basket") {
    return;
  }
  if (e_C_state == "data") {
    return;
  }
  if (e_C_state == "send") {
    return;
  }
  with (r.document) {
    if (page[e_C_state]["top_text"]) {
      e_print_right_top(unescape(page[e_C_state]["name"]));
      writeln(
        unescape(page[e_C_state]["top_text"]) + "\t</FONT>\t<HR></TABLE>",
      );
    }
    art = page[e_C_state]["artikel"];
    if (art.length == 0) return;
    while ((i = art.substring(0, art.indexOf(","))) != "") {
      if (i > 10) return;
      if (artikel[i]["htmltyp"] == "1") Xdr(i);
      else if (artikel[i]["htmltyp"] == "2") a_do_save(i);
      else if (artikel[i]["htmltyp"] == "3") Xdt(i);
      else if (artikel[i]["htmltyp"] == "4") e_printHTML4(i);
      else alert("Unknown HTMLTYP!!");
      art = art.substring(art.indexOf(",") + 1, art.length);
    }
  }
}
function e_print_summen(idx) {
  with (r.document) {
    if (artikel[idx]["typ"] == "checkbox") {
      writeln(FONT + E_PRINT_HTML_ORD + "<BR>");
      writeln(
        "<INPUT type=checkbox name='check" +
          idx +
          "' onClick='parent.a_edit_more_features(" +
          idx +
          ");'",
      );
      if (I[idx]) write(" CHECKED>");
      else write(">");
    } else if (artikel[idx]["typ"] == "img") {
      writeln("<artikel");
      writeln(" HREF='javascript:parent.a_edit_more_features(" + idx + ");'");
      writeln(" onMouseOver='parent.Xdox(true," + idx + ");' ");
      writeln(" onMouseOut='parent.Xdox(false," + idx + ");'>");
      if (I[idx])
        write(
          "<IMG name='img" +
            idx +
            "' src='" +
            B_B_IMG +
            "' border=0></artikel>",
        );
      else
        write(
          "<IMG name='img" + idx + "' src='" + B_IMG + "' border=0></artikel>",
        );
    } else if (artikel[idx]["typ"] == "txt") {
      writeln(
        E_PRINT_HTML_MENGE +
          " <INPUT type=text onChange='parent.a_choose_font(this," +
          idx +
          " );'",
      );
      if (I[idx]) write(" size=4 maxlength=5 value='" + D[idx]["menge"] + "'>");
      else write(" size=4 maxlength=5 value=''>");
    } else writeln("<INPUT>");
  }
}
function XgzCheckbox(f_ar, aix, fix) {
  with (r.document) {
    writeln("<TD valign=top>");
    writeln(FONT + f_ar["name"] + "<HR>");
    for (ix in f_ar) {
      if (ix == "name" || ix == "price") continue;
      write(
        "<INPUT name='" +
          aix +
          "-" +
          fix +
          "-" +
          ix +
          "' type=checkbox onClick='parent.e_print_preis(this, " +
          aix +
          ");' ",
      );
      if (I[aix]) if (D[aix][fix + "-" + ix]) write("checked");
      writeln(" >" + unescape(ix));
      if (parseInt(f_ar[ix]) > 0 && f_ar["price"] == "limit")
        writeln(" (" + a_pment_data(f_ar[ix]) + ")");
      if (parseInt(f_ar[ix]) > 0 && f_ar["price"] == "mwst")
        writeln(" (" + E_PRINT_FEATURES_ADD + a_pment_data(f_ar[ix]) + ")");
      writeln("<BR>");
    }
    writeln("</TD>");
  }
}
function XgzRadio(f_ar, aix, fix) {
  with (r.document) {
    writeln("<TD valign=top>");
    writeln(FONT + f_ar["name"] + "<HR>");
    for (ix in f_ar) {
      if (ix == "name" || ix == "price") continue;
      write(
        "<INPUT type=radio name='el" + aix + "-" + fix + "' value='" + ix + "'",
      );
      if (I[aix]) if (D[aix][fix + "-" + ix]) write(" checked ");
      write(
        " onClick='parent.e_print_preis(this, " + aix + ");'>" + unescape(ix),
      );
      if (parseInt(f_ar[ix]) > 0 && f_ar["price"] == "limit")
        writeln(" (" + a_pment_data(f_ar[ix]) + ")");
      if (parseInt(f_ar[ix]) > 0 && f_ar["price"] == "mwst")
        writeln(" (" + E_PRINT_FEATURES_ADD + a_pment_data(f_ar[ix]) + ")");
      writeln("<BR>");
    }
    writeln("</TD>");
  }
}
function XgzSelect(f_ar, aix, fix) {
  with (r.document) {
    writeln("<TD valign=top>");
    writeln(
      FONT +
        "<SELECT name='el" +
        aix +
        "-" +
        fix +
        "' onChange='parent.e_print_preis(this, " +
        aix +
        ");'><OPTION value=head>" +
        f_ar["name"] +
        "</OPTION>",
    );
    for (ix in f_ar) {
      if (ix == "name" || ix == "price") continue;
      write("<OPTION value='" + fix + "-" + ix + "'");
      if (I[aix]) if (D[aix][fix + "-" + ix]) write(" selected ");
      write(">" + unescape(ix));
      if (parseInt(f_ar[ix]) > 0 && f_ar["price"] == "limit")
        writeln(" (" + a_pment_data(f_ar[ix]) + ")");
      if (parseInt(f_ar[ix]) > 0 && f_ar["price"] == "mwst")
        writeln(" (" + E_PRINT_FEATURES_ADD + a_pment_data(f_ar[ix]) + ")");
      writeln("</OPTION>");
    }
    writeln("</SELECT></TD>");
  }
}
function XgzMselect(f_ar, aix, fix) {
  with (r.document) {
    writeln("<TD valign=top>");
    writeln(
      FONT +
        f_ar["name"] +
        "<HR><SELECT multiple name='el" +
        aix +
        "-" +
        fix +
        "' onChange='parent.e_print_preis(this, " +
        aix +
        ");'>",
    );
    for (ix in f_ar) {
      if (ix == "name" || ix == "price") continue;
      write("<OPTION value='" + fix + "-" + ix + "'");
      if (I[aix]) if (D[aix][fix + "-" + ix]) write(" selected ");
      write(">" + unescape(ix));
      if (parseInt(f_ar[ix]) > 0 && f_ar["price"] == "limit")
        writeln(" (" + a_pment_data(f_ar[ix]) + ")");
      if (parseInt(f_ar[ix]) > 0 && f_ar["price"] == "mwst")
        writeln(" (" + E_PRINT_FEATURES_ADD + a_pment_data(f_ar[ix]) + ")");
      writeln("</OPTION>");
    }
    writeln("</SELECT></TD>");
  }
}
function XgzText(f_ar, aix, fix) {
  with (r.document) {
    writeln("<TD valign=top>");
    writeln(FONT + f_ar["name"] + "<HR>");
    for (ix in f_ar) {
      if (ix == "name" || ix == "price") continue;
      write(
        unescape(ix) +
          " <INPUT type=text name='" +
          aix +
          "-" +
          fix +
          "-" +
          ix +
          "' ",
      );
      if (I[aix])
        if (D[aix][fix + "-" + ix])
          write(" value='" + unescape(D[aix][fix + "-" + ix]) + "'");
      write(" onChange='parent.e_print_preis(this, " + aix + ");'>");
      if (parseInt(f_ar[ix]) > 0 && f_ar["price"] == "limit")
        writeln(" (" + a_pment_data(f_ar[ix]) + ")");
      if (parseInt(f_ar[ix]) > 0 && f_ar["price"] == "mwst")
        writeln(" (" + E_PRINT_FEATURES_ADD + a_pment_data(f_ar[ix]) + ")");
      writeln("<BR>");
    }
    writeln("</TD>");
  }
}
function e_print_typ(aix, fix) {
  var f_st = "";
  fs = "" + fix;
  f_ar = new Array();
  if (artikel[aix]["p_feature"]) pr = unescape(artikel[aix]["p_feature"]);
  else pr = "-1";
  if (fix == pr) f_ar["price"] = "limit";
  else f_ar["price"] = "mwst";
  f_ar["name"] = unescape(system["features"][fix]["name"]);
  if (artikel[aix][fs]) {
    f_st = unescape(artikel[aix][fs]);
  }
  if (f_st.indexOf("|", 0) != -1) {
    while ((ss = f_st.substring(0, f_st.indexOf("|"))) != "") {
      s_n = ss.substring(0, ss.indexOf(","));
      s_p = ss.substring(ss.indexOf(",") + 1, ss.length);
      f_ar[s_n] = parseInt(s_p);
      f_st = f_st.substring(f_st.indexOf("|") + 1, f_st.length);
    }
  } else {
    ta = new Array();
    if (f_st.indexOf("~", 0) != -1) {
      ps = f_st.split("~");
      count = 0;
      for (ips in ps) {
        if (ps[ips]) ta[count] = parseInt(ps[ips]);
        count++;
      }
    }
    count = 0;
    for (sf in system["features"][fix]) {
      if (sf == "name" || sf == "required" || sf == "ftype") continue;
      if (ta[count]) f_ar[system["features"][fix][sf]] = ta[count];
      else f_ar[system["features"][fix][sf]] = "";
      count++;
    }
  }
  return f_ar;
}
function e_print_prod(aix, feat) {
  var fs = "";
  var pr = "";
  while ((i = feat.substring(0, feat.indexOf(","))) != "") {
    f_ar = e_print_typ(aix, i);
    if (system["features"][i]["ftype"] == "checkbox") XgzCheckbox(f_ar, aix, i);
    else if (system["features"][i]["ftype"] == "select")
      XgzSelect(f_ar, aix, i);
    else if (system["features"][i]["ftype"] == "multiple-select")
      XgzMselect(f_ar, aix, i);
    else if (system["features"][i]["ftype"] == "radio") XgzRadio(f_ar, aix, i);
    else if (system["features"][i]["ftype"] == "text") XgzText(f_ar, aix, i);
    else alert("Unknown feature typ!!" + system["features"][i]["ftype"]);
    feat = feat.substring(feat.indexOf(",") + 1, feat.length);
  }
}
function Xdr(idx) {
  var cols = 0;
  with (r.document) {
    writeln(
      "<TABLE " +
        TBG_P +
        " width='" +
        T_W +
        "' border='" +
        TB_P +
        "' cellpadding='" +
        TP_P +
        "'>",
    );
    writeln("<TR><TD width=10%>" + FONT);
    cols++;
    e_print_summen(idx);
    writeln("</FONT></TD>");
    if (artikel[idx]["menge"]) {
      writeln("<TD width=10%>" + FONT);
      cols++;
      writeln(
        E_PRINT_HTML_MENGE +
          " &nbsp;<INPUT type=text size=4 name='menge" +
          idx +
          "' maxlength=5 onChange='parent.a_choose_font(this," +
          idx +
          " );' ",
      );
      if (I[idx]) writeln("value='" + D[idx]["menge"] + "'>");
      else writeln(">");
      writeln("</FONT></TD>");
    }
    writeln("<TD width=15%>" + FONT + "<features>");
    cols++;
    if (artikel[idx]["desc"])
      writeln("<artikel HREF='javascript:parent.Xdp(" + idx + ");'>");
    else if (artikel[idx]["url"])
      writeln("<artikel HREF='" + unescape(artikel[idx]["url"]) + "'>");
    write(unescape(artikel[idx]["name"]));
    if (artikel[idx]["desc"] || artikel[idx]["url"]) writeln("</artikel>");
    writeln("</features></FONT></TD>");
    if (artikel[idx]["image"]) {
      writeln("<TD width=15%>");
      cols++;
      if (artikel[idx]["url"])
        writeln("<artikel HREF='" + unescape(artikel[idx]["url"]) + "'>");
      write(
        "<IMG src='" +
          unescape(artikel[idx]["image"]) +
          "' width=60 align=textop border=0>",
      );
      if (artikel[idx]["url"]) writeln("</artikel>");
      writeln("</FONT></TD>");
    }
    writeln("<TD>" + FONT);
    cols++;
    writeln(unescape(artikel[idx]["titel"]) + " &nbsp;</FONT></TD>");
    writeln("<TD width=15% align=right>" + FONT);
    cols++;
    if (artikel[idx]["gpreis"])
      writeln(
        E_PRINT_HTML_GPREIS +
          a_pment_data(a_htm(artikel[idx]["gpreis"], artikel[idx]["mwst"])) +
          "<BR>" +
          E_PRINT_HTML_PREIS,
      );
    write(a_pment_data(a_htm(artikel[idx]["preis"], artikel[idx]["mwst"])));
    writeln("</FONT></TD>");
    if (artikel[idx]["preisa"]) {
      writeln("<TD width=15%>" + FONT);
      cols++;
      write(
        E_PRINT_HTML_PREISA +
          " &nbsp;<INPUT type=text name='preisa" +
          idx +
          "' size=8 maxlength=20 onChange='parent.a_page_vs(\"" +
          idx +
          "\");'>",
      );
      writeln("</FONT></TD>");
    }
    writeln("</TR>");
    if (artikel[idx]["features"]) {
      feat = artikel[idx]["features"];
      if (feat.length > 0) {
        writeln("<TR><TD colspan='" + cols + "'>");
        writeln("<TABLE><TR>");
        e_print_prod(idx, feat);
        writeln("</TR></TABLE>");
        writeln("</TD></TR>");
      }
    }
    writeln("</TABLE>");
  }
}
function a_do_save(idx) {
  var cols = 0;
  with (r.document) {
    writeln(
      "<TABLE " +
        TBG_P +
        " width='" +
        T_W +
        "' border='" +
        TB_P +
        "' cellpadding='" +
        TP_P +
        "'>",
    );
    writeln("<TR>");
    if (artikel[idx]["image"]) {
      writeln("<TD width=30% rowspan=3 align=middle>");
      cols += 1;
      if (artikel[idx]["url"])
        writeln("<artikel HREF='" + unescape(artikel[idx]["url"]) + "'>");
      write(
        "<IMG src='" +
          unescape(artikel[idx]["image"]) +
          "' width=150 align=textop border=0>",
      );
      if (artikel[idx]["url"]) writeln("</artikel>");
      writeln("</TD>");
      writeln("<TD width=10% height=10%>" + FONT);
    } else writeln("<TD width=5% rowspan=3>" + FONT);
    cols += 1;
    e_print_summen(idx);
    writeln("</FONT></TD>");
    if (artikel[idx]["menge"]) {
      writeln("<TD width=10%>" + FONT);
      cols += 1;
      writeln(
        E_PRINT_HTML_MENGE +
          " &nbsp;<INPUT name='menge" +
          idx +
          "' type=text size=4 maxlength=5 onChange='parent.a_choose_font(this," +
          idx +
          " );' ",
      );
      if (I[idx]) writeln("value='" + D[idx]["menge"] + "'>");
      else writeln(">");
      writeln("</FONT></TD>");
    }
    writeln("<TD width=15%>" + FONT);
    cols += 1;
    writeln("<features>" + unescape(artikel[idx]["name"]) + "</features>");
    writeln("</FONT></TD>");
    writeln("<TD width=15% align=right>" + FONT);
    if (artikel[idx]["gpreis"])
      writeln(
        E_PRINT_HTML_GPREIS +
          a_pment_data(a_htm(artikel[idx]["gpreis"], artikel[idx]["mwst"])) +
          "<BR>" +
          E_PRINT_HTML_PREIS,
      );
    write(a_pment_data(a_htm(artikel[idx]["preis"], artikel[idx]["mwst"])));
    writeln("</FONT></TD>");
    if (artikel[idx]["preisa"]) {
      writeln("<TD width=10%>" + FONT);
      cols += 1;
      write(
        E_PRINT_HTML_PREISA +
          " &nbsp;<INPUT type=text name='preisa" +
          idx +
          "' size=8 maxlength=20 onChange='parent.a_page_vs(\"" +
          idx +
          "\");'>",
      );
      writeln("</FONT></TD>");
    }
    writeln("</TR>");
    if (artikel[idx]["titel"]) {
      writeln("<TR><TD colspan=" + cols + " >");
      writeln(FONT + unescape(artikel[idx]["titel"]));
      writeln("&nbsp;</FONT></TD>");
      writeln("</TR>");
    }
    if (artikel[idx]["desc"]) {
      writeln("<TR><TD width=90% colspan=" + cols + " >");
      if (artikel[idx]["desc"]) writeln(FONT + unescape(artikel[idx]["desc"]));
      else writeln("&nbsp;");
      writeln("</FONT></TD>");
      writeln("</TR>");
    }
    if (artikel[idx]["features"]) {
      feat = artikel[idx]["features"];
      if (feat.length > 0) {
        cols++;
        writeln("<TR><TD colspan='" + cols + "'>");
        writeln("<TABLE><TR>");
        e_print_prod(idx, feat);
        writeln("</TR></TABLE>");
        writeln("</TD></TR>");
      }
    }
    writeln("</TABLE><P>");
  }
}
function Xdt(idx) {
  var cols = 0;
  var brtmp = "<BR>";
  var brtmp2 = "&nbsp;";
  with (r.document) {
    writeln(
      "<TABLE " +
        TBG_P +
        " width='" +
        T_W +
        "' border='" +
        TB_P +
        "' cellpadding='" +
        TP_P +
        "'>",
    );
    writeln("<TR>");
    if (artikel[idx]["image"]) {
      brtmp = "<P>";
      brtmp2 = "<BR>";
      writeln("<TD rowspan=6 align=middle>");
      if (artikel[idx]["url"])
        writeln("<artikel HREF='" + unescape(artikel[idx]["url"]) + "'>");
      write(
        "<IMG src='" +
          unescape(artikel[idx]["image"]) +
          "' width='" +
          parseInt(T_W * 0.7) +
          "' align=textop border=0>",
      );
      if (artikel[idx]["url"]) writeln("</artikel>");
      writeln("</TD>");
    }
    writeln("<TD colspan=2>" + FONT + "<features>");
    if (artikel[idx]["url"])
      writeln("<artikel HREF='" + unescape(artikel[idx]["url"]) + "'>");
    write(unescape(artikel[idx]["name"]));
    if (artikel[idx]["url"]) writeln("</artikel>");
    writeln("</features></FONT></TD>");
    writeln("</TR>");
    if (artikel[idx]["titel"]) {
      writeln("<TR><TD colspan=2 >");
      writeln(FONT + unescape(artikel[idx]["titel"]));
      writeln("&nbsp;</FONT></TD>");
      writeln("</TR>");
    }
    if (artikel[idx]["desc"]) {
      writeln("<TR><TD colspan=2 >");
      if (artikel[idx]["desc"]) writeln(FONT + unescape(artikel[idx]["desc"]));
      else writeln("&nbsp;");
      writeln("</FONT></TD>");
      writeln("</TR>");
    }
    writeln("<TR><TD>" + FONT);
    e_print_summen(idx);
    writeln("</FONT></TD>");
    writeln("<TD align=right>" + FONT);
    if (artikel[idx]["gpreis"])
      writeln(
        E_PRINT_HTML_GPREIS +
          brtmp2 +
          a_pment_data(a_htm(artikel[idx]["gpreis"], artikel[idx]["mwst"])) +
          brtmp +
          E_PRINT_HTML_PREIS +
          brtmp2,
      );
    write(a_pment_data(a_htm(artikel[idx]["preis"], artikel[idx]["mwst"])));
    writeln("</FONT></TD>");
    writeln("</TR>");
    if (artikel[idx]["menge"]) {
      if (artikel[idx]["preisa"]) {
        writeln("<TR><TD>");
      } else {
        writeln("<TR><TD colspan=2>");
      }
      writeln(
        FONT +
          E_PRINT_HTML_MENGE +
          "<BR><INPUT name='menge" +
          idx +
          "' type=text size=4 maxlength=5 onChange='parent.a_choose_font(this," +
          idx +
          " );' ",
      );
      if (I[idx]) writeln("value='" + D[idx]["menge"] + "'>");
      else writeln("></TD>");
    }
    if (artikel[idx]["preisa"]) {
      if (artikel[idx]["menge"]) writeln("<TD>");
      else writeln("<TR><TD colspan=2>");
      write(
        FONT +
          E_PRINT_HTML_PREISA +
          "<BR><INPUT type=text name='preisa" +
          idx +
          "' size=8 maxlength=20 onChange='parent.a_page_vs(\"" +
          idx +
          "\");'>",
      );
      writeln("</FONT></TD>");
    }
    writeln("</TR>");
    if (artikel[idx]["features"]) {
      feat = artikel[idx]["features"];
      if (feat.length > 0) {
        cols++;
        writeln("<TR><TD colspan='" + cols + "'>");
        writeln("<TABLE><TR>");
        e_print_prod(idx, feat);
        writeln("</TR></TABLE>");
        writeln("</TD></TR>");
      }
    }
    writeln("</TABLE><P>");
  }
}
function E_al() {
  if (confirm(E_LEAVE_CONFIRM)) document.location.replace(LAST_HREF);
}
function Xdv() {
  with (r.document) {
    for (i in kunde) {
      s_idx = i.substring(3, 4);
      if (system["address"][s_idx]) {
        if (system["address"][s_idx]["validation"] == "url") {
          writeln("<TR><TD>" + FONT_CS);
          writeln(
            "<INPUT type=hidden name='" +
              unescape(system["address"][s_idx]["name"]) +
              "' value='" +
              unescape(kunde[i]) +
              "'>",
          );
          write(
            unescape(system["address"][s_idx]["name"]) +
              "</FONT></TD><TD>" +
              FONT_CS,
          );
          writeln(
            "<artikel HREF='http://" +
              unescape(kunde[i]) +
              "' target='_new'>" +
              unescape(kunde[i]) +
              "</artikel></FONT></TD></TR>",
          );
        } else if (system["address"][s_idx]["validation"] == "email") {
          writeln("<TR><TD>" + FONT_CS);
          writeln(
            "<INPUT type=hidden name='" +
              unescape(system["address"][s_idx]["name"]) +
              "' value='" +
              unescape(kunde[i]) +
              "'>",
          );
          write(
            unescape(system["address"][s_idx]["name"]) +
              "</FONT></TD><TD>" +
              FONT_CS,
          );
          writeln(
            "<artikel HREF='mailto:" +
              unescape(kunde[i]) +
              "'>" +
              unescape(kunde[i]) +
              "</artikel></TD></TR>",
          );
        } else {
          writeln("<TR><TD>" + FONT_CS);
          writeln(
            "<INPUT type=hidden name='" +
              unescape(system["address"][s_idx]["name"]) +
              "' value='" +
              unescape(kunde[i]) +
              "'>",
          );
          writeln(
            unescape(system["address"][s_idx]["name"]) +
              "</FONT></TD><TD>" +
              FONT_CS,
          );
          writeln(unescape(kunde[i]) + "</FONT></TD></TR>");
        }
      }
    }
    if (PAYMENT) {
      if (system["payment"][e_x]["msg"]) {
        writeln("<TR><TD colspan=2>" + FONT_CS);
        writeln(unescape(system["payment"][e_x]["msg"]) + "</TD></TR>");
      }
      strpay_tmp = unescape(system["payment"][e_x]["name"]);
      writeln("<INPUT type=hidden name='Pay: " + strpay_tmp + "'>");
      for (pm in paym) {
        p_idx = pm.substring(3, 4);
        writeln("<TR><TD>" + FONT_CS);
        writeln(
          "<INPUT type=hidden name='Pay: " +
            unescape(system["payment"][e_x][p_idx]) +
            "' value='" +
            unescape(paym[pm]) +
            "'>",
        );
        writeln(
          strpay_tmp +
            ": &nbsp;" +
            unescape(system["payment"][e_x][p_idx]) +
            "</FONT></TD><TD>" +
            FONT_CS,
        );
        writeln(unescape(paym[pm]) + "</FONT></TD></TR>");
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
  var price = a_send();
  with (r.document) {
    writeln(
      "<TR " +
        TBG_BN +
        "><TD colspan=2 align=middle>" +
        FONT_CS +
        "<FONT size=+1>" +
        E_PRINT_SUMMEN_HEAD,
    );
    writeln(
      "<INPUT type=hidden name='----' value='---------------------------------'>",
    );
    writeln("</FONT></FONT></TD></TR>");
    if (PAYMENT) {
      if (price < parseInt(system["payment"][e_x]["limit"])) {
        xtmp = parseInt(system["payment"][e_x]["value"]);
        price += xtmp;
      }
      mwst[system["un"]] += xtmp;
      ntmp_sum += xtmp;
      ptp = a_pment_data(xtmp);
      writeln("<TR " + TBG_BN + "><TD>" + FONT_CS);
      writeln(
        "<INPUT type=hidden name='Name_Zahlungs' value='" +
          unescape(system["payment"][e_x]["name"]) +
          "'>",
      );
      writeln(
        "<INPUT type=hidden name='Zuschlag_Zahlung' value='" + ptp + "'>",
      );
      writeln(
        "+ Zahlungsweise " +
          unescape(system["payment"][e_x]["name"]) +
          "</FONT></TD><TD align=right>",
      );
      writeln(FONT_CS);
      writeln(ptp + "</FONT></TD></TR>");
    }
    if (AREAS) {
      if (price < parseInt(system["areas"][e_v]["limit"])) {
        vtmp = parseInt(system["areas"][e_v]["value"]);
        price += vtmp;
      }
      mwst[system["un"]] += vtmp;
      ntmp_sum += vtmp;
      atp = a_pment_data(vtmp);
      writeln("<TR " + TBG_BN + "><TD>" + FONT_CS);
      writeln(
        "<INPUT type=hidden name='Name_Gebiet' value='" +
          unescape(system["areas"][e_v]["name"]) +
          "'>",
      );
      writeln("<INPUT type=hidden name='Zuschlag_Gebiet' value='" + atp + "'>");
      writeln(
        "+ Lieferung nach " +
          unescape(system["areas"][e_v]["name"]) +
          "</FONT></TD><TD align=right>",
      );
      writeln(FONT_CS);
      writeln(atp + "</FONT></TD></TR>");
    }
    if (FREIGHT) {
      if (price < parseInt(system["freight"][e_u]["limit"])) {
        utmp = parseInt(system["freight"][e_u]["value"]);
        price += utmp;
      }
      mwst[system["un"]] += utmp;
      ntmp_sum += utmp;
      ftp = a_pment_data(utmp);
      writeln("<TR " + TBG_BN + "><TD>" + FONT_CS);
      writeln(
        "<INPUT type=hidden name='Name_Fracht' value='" +
          unescape(system["freight"][e_u]["name"]) +
          "'>",
      );
      writeln("<INPUT type=hidden name='Zuschlag_Fracht' value='" + ftp + "'>");
      writeln(
        "+ Lieferung durch " +
          unescape(system["freight"][e_u]["name"]) +
          "</FONT></TD><TD align=right>",
      );
      writeln(FONT_CS);
      writeln(ftp + "</FONT></TD></TR>");
    }
    if (nshow == "netto" || system["nbase"] == "netto") {
      if (n_liefer) {
        mtp = a_pment_data(a_payment(ntmp_sum, system["un"]));
        writeln("<TR " + TBG_BR + "><TD>" + FONT_CS);
        writeln("<INPUT type=hidden name='Zuschlag_MwSt' value='" + mtp + "'>");
        writeln(
          E_TAX_S +
            unescape(system["mwst"][system["un"]]) +
            " % </FONT></TD><TD align=right>",
        );
        writeln(FONT_CS);
        writeln(mtp + "</FONT></TD></TR>");
      }
      if (system["nbase"] == "brutto") {
        for (m_ix in system["mwst"]) {
          netto_sum += a_payment(mwst[m_ix], m_ix);
        }
        netto_sum = price - netto_sum;
      } else netto_sum = price;
      netto_s = a_pment_data(netto_sum);
      writeln("<TR " + TBG_BR + "><TD>" + FONT_CS);
      writeln(
        "<INPUT type=hidden name='Gesamt_Netto' value='" + netto_s + "'>",
      );
      writeln(
        "<FONT size=+1>Gesamt Netto Preis</FONT></FONT></TD><TD align=right>",
      );
      writeln(FONT_CS);
      writeln(netto_s + "</FONT></TD></TR>");
    }
    if (n_liefer) {
      for (m_idx in system["mwst"]) {
        ntmp = a_payment(mwst[m_idx], m_idx);
        if (system["nbase"] == "netto") price += ntmp;
        n_s = a_pment_data(ntmp);
        if (nshow == "netto" || system["nbase"] == "netto") {
          writeln("<TR " + TBG_BR + "><TD>" + FONT_CS);
          writeln(
            "<INPUT type=hidden name='MwSt_" +
              system["mwst"][m_idx] +
              "' value='" +
              n_s +
              "'>",
          );
          writeln(
            E_TAX_S + system["mwst"][m_idx] + " % </FONT></TD><TD align=right>",
          );
          writeln(FONT_CS);
          writeln(n_s + "</FONT></TD></TR>");
        }
      }
      price_s = a_pment_data(price);
      writeln("<TR " + TBG_BN + "><TD>" + FONT_CS);
      writeln(
        "<INPUT type=hidden name='Gesamt_Brutto' value='" + price_s + "'>",
      );
      writeln(
        "<FONT size=+1>Gesamt Brutto Preis</FONT></FONT></TD><TD align=right>",
      );
      writeln(FONT_CS);
      writeln(price_s + "</FONT></TD></TR>");
    }
    if (PAYMENT) {
      if (system["payment"][e_x]["eva"]) {
        if (system["payment"][e_x]["eva"].length)
          eval(unescape(system["payment"][e_x]["eva"]));
      }
    }
    if (has_price == 0) {
      writeln("<TR><TD colspan=2>" + FONT_CS);
      writeln(E_PRINT_SUMMEN + "</FONT></TD></TR>");
    }
  } // end with
}
function Xdy(art_hash) {
  var art = "";
  for (p in page) {
    art = page[p]["artikel"];
    if (art.length != 0) {
      while ((i = art.substring(0, art.indexOf(","))) != "") {
        if (art_hash == i) {
          E_go(p);
          return;
        }
        art = art.substring(art.indexOf(",") + 1, art.length);
      }
    }
  }
}
function Xdz() {
  var pcount = 1;
  mwst = new Array();
  var mid;
  for (mid in system["mwst"]) {
    mwst[mid] = 0;
  }
  with (r.document) {
    writeln(
      "<TR " +
        TBG_BN +
        "><TH colspan=2>" +
        FONT_CS +
        "<FONT size=+1><CENTER>" +
        E_PRINT_PROD_ORDER +
        "</CENTER></FONT></FONT></TR>",
    );
    for (Z in I) {
      if (I[Z] && artikel[Z] != null) {
        writeln(
          "<INPUT type=hidden name='---------------' value='Position Nr." +
            pcount++ +
            "'>",
        );
        writeln("<TR " + TBG_BN + "><TD width=70%>");
        writeln(FONT_CS + "<FONT size=+1>");
        if (artikel[Z]["name"]) {
          writeln(
            "<INPUT type=hidden name='Name' value='" +
              unescape(artikel[Z]["name"]) +
              "'>",
          );
          if (artikel[Z]["url"]) {
            writeln("<artikel HREF='" + unescape(artikel[Z]["url"]) + "'>");
            writeln(unescape(artikel[Z]["name"]) + "</artikel>");
          } else {
            writeln(unescape(artikel[Z]["name"]));
          }
        } else {
          writeln("<INPUT type=hidden name='Name' value='Unbenannt'>");
          writeln("Unbennant");
        }
        writeln("</FONT></FONT></TD><TD>" + FONT_CS);
        if (D[Z]["page"] == "search")
          writeln("<artikel HREF='javascript:parent.Xdy(" + Z + ");'>");
        else
          writeln(
            "<artikel HREF='javascript:parent.E_go(" + D[Z]["page"] + ");'>",
          );
        writeln(E_PRINT_PROD_GOART + "</artikel>&nbsp;&nbsp;&nbsp;");
        writeln(
          "<artikel HREF='javascript:parent.a_more_features(" + Z + ");'>",
        );
        writeln(B_DEL + "</artikel>");
        writeln("</FONT></TD></TR>");
        if (system["com"] == "on") {
          writeln("<TR><TD colspan=2>" + FONT_CS);
          writeln(
            E_PRINT_PROD_COM +
              "&nbsp;&nbsp;&nbsp;<INPUT type=text name='com" +
              Z +
              "' size=50 ",
          );
          if (D[Z]["com"]) writeln("value='" + unescape(D[Z]["com"]) + "' ");
          writeln(" onChange='parent.a_mwst(" + Z + ",this.value);'>");
          writeln("</FONT></TD></TR>");
        }
        if (artikel[Z]["gpreis"]) {
          gpt = a_pment_data(artikel[Z]["gpreis"]);
          writeln("<TR><TD>" + FONT_CS);
          writeln(
            "<INPUT type=hidden name='" +
              E_PRINT_PROD_GPREIS +
              "' value='" +
              gpt +
              "'>",
          );
          writeln(E_PRINT_PROD_GPREIS + "</FONT></TD><TD align=right>");
          writeln(FONT_CS);
          writeln(gpt + "</FONT></TD></TR>");
        }
        pda_tmp = 0;
        if (artikel[Z]["download"]) {
          writeln(
            "<INPUT type=hidden name=download value='" +
              artikel[Z]["download"] +
              "'>",
          );
        }
        pf = "";
        has_feature = false;
        if (artikel[Z]["p_feature"])
          if (artikel[Z]["p_feature"] >= 0) {
            pf = artikel[Z]["p_feature"];
            for (di in D[Z]) {
              if (!D[Z][di] || di == "menge" || di == "com" || di == "page")
                continue;
              fix = di.substring(0, di.indexOf("-", 0));
              if (fix != pf) continue;
              pos1 = di.indexOf("-", 0);
              ha = di.substring(di.indexOf("-", pos1) + 1, di.length);
              f_ar = e_print_typ(Z, fix);
              if (f_ar[ha]) {
                has_feature = true;
                pda_tmp = parseInt(f_ar[ha]);
                writeln("<TR><TD>" + FONT_CS);
                writeln(
                  "<INPUT type=hidden name='" +
                    E_PRINT_PROD_FPREIS +
                    " " +
                    unescape(f_ar["name"]) +
                    " " +
                    unescape(D[Z][di]) +
                    "' value='" +
                    a_pment_data(f_ar[ha]) +
                    "'>",
                );
                writeln(
                  E_PRINT_PROD_FPREIS +
                    " " +
                    unescape(f_ar["name"]) +
                    " " +
                    unescape(D[Z][di]) +
                    "</FONT></TD><TD align=right>",
                );
                writeln(FONT_CS);
                writeln(a_pment_data(f_ar[ha]) + "</FONT></TD></TR>");
              } else {
                writeln("<TR><TD>" + FONT_CS);
                writeln(
                  "<INPUT type=hidden name='" +
                    unescape(f_ar["name"]) +
                    "' value='" +
                    unescape(ha) +
                    "'>",
                );
                writeln(
                  unescape(f_ar["name"]) +
                    " " +
                    unescape(D[Z][di]) +
                    "</FONT></TD><TD>",
                );
                writeln(FONT_CS);
                writeln("&nbsp;</FONT></TD></TR>");
              }
            }
          }
        if (artikel[Z]["preis"] && !has_feature) {
          pda_tmp = parseInt(artikel[Z]["preis"]);
          pt = a_pment_data(artikel[Z]["preis"]);
          writeln("<TR><TD>" + FONT_CS);
          writeln(
            "<INPUT type=hidden name='" +
              E_PRINT_PROD_SPREIS +
              "' value='" +
              pt +
              "'>",
          );
          writeln(E_PRINT_PROD_SPREIS + "</FONT></TD><TD align=right>");
          writeln(FONT_CS);
          writeln(pt + "</FONT></TD></TR>");
        }
        has_feature = false;
        for (di in D[Z]) {
          if (!D[Z][di] || di == "menge" || di == "com" || di == "page")
            continue;
          fix = di.substring(0, di.indexOf("-", 0));
          if (fix == pf) continue;
          pos1 = di.indexOf("-", 0);
          ha = di.substring(di.indexOf("-", pos1) + 1, di.length);
          f_ar = e_print_typ(Z, fix);
          if (f_ar[ha]) {
            pda_tmp += parseInt(f_ar[ha]);
            fpr = " " + a_pment_data(f_ar[ha]);
            fpt = E_PRINT_PROD_ADD;
          } else {
            fpr = "&nbsp;";
            fpt = "&nbsp;&nbsp;";
          }
          if (D[Z][di] == ha) str = unescape(ha);
          else str = unescape(ha) + " " + unescape(D[Z][di]);
          writeln("<TR><TD>" + FONT_CS);
          write(
            "<INPUT type=hidden name='" +
              unescape(f_ar["name"]) +
              " " +
              str +
              "' ",
          );
          writeln("value='" + fpr + "'>");
          writeln(
            fpt +
              unescape(f_ar["name"]) +
              " " +
              str +
              "</FONT></TD><TD align=right>",
          );
          writeln(FONT_CS);
          writeln(fpr + "</FONT></TD></TR>");
          has_feature = true;
        }
        if (has_feature && pda_tmp > 0) {
          writeln("<TR><TD>" + FONT_CS);
          writeln(
            "<INPUT type=hidden name='" +
              E_PRINT_PROD_SPREIS +
              "' value='" +
              a_pment_data(pda_tmp) +
              "'>",
          );
          writeln(
            E_PRINT_PROD_SPREIS + " incl. Features</FONT></TD><TD align=right>",
          );
          writeln(FONT_CS);
          writeln(a_pment_data(pda_tmp) + "</FONT></TD></TR>");
        }
        if (D[Z]["menge"] > 1) {
          writeln("<TR><TD>" + FONT_CS);
          writeln(
            "<INPUT type=hidden name='" +
              E_PRINT_PROD_AMOUNT +
              "' value='" +
              unescape(D[Z]["menge"]) +
              "'>",
          );
          writeln(E_PRINT_PROD_AMOUNT + "</FONT></TD><TD>");
          writeln(FONT_CS);
          writeln(unescape(D[Z]["menge"]) + "</FONT></TD></TR>");
        } else {
          writeln(
            "<INPUT type=hidden name='" + E_PRINT_PROD_AMOUNT + "' value='1'>",
          );
        }
        ppa_tmp = a_change_mwst(Z);
        if (D[Z]["menge"] > 1 || artikel[Z]["gpreis"]) {
          priceprodtmp = a_pment_data(ppa_tmp);
          writeln("<TR><TD>" + FONT_CS);
          writeln(
            "<INPUT type=hidden name='" +
              E_PRINT_PROD_PREIS +
              "' value='" +
              priceprodtmp +
              "'>",
          );
          writeln(E_PRINT_PROD_PREIS + "</FONT></TD><TD align=right>");
          writeln(FONT_CS);
          writeln(priceprodtmp + "</FONT></TD></TR>");
        }
        mwst[artikel[Z]["mwst"]] += ppa_tmp;
        if (n_liefer) {
          if (nshow == "netto" || system["nbase"] == "netto") {
            n_tmp = a_payment(ppa_tmp, artikel[Z]["mwst"]);
            writeln("<TR " + TBG_BR + "><TD>" + FONT_CS);
            writeln(
              "<INPUT type=hidden name='MwSt_" +
                system["mwst"][artikel[Z]["mwst"]] +
                "' value='" +
                a_pment_data(n_tmp) +
                "'>",
            );
            writeln(
              E_TAX_S +
                system["mwst"][artikel[Z]["mwst"]] +
                "%</FONT></TD><TD align=right>",
            );
            writeln(FONT_CS);
            writeln(a_pment_data(n_tmp) + "</FONT></TD></TR>");
          }
        }
        if (artikel[Z]["image"] && !MOZZ3 && e_C_state == "basket") {
          writeln("<TR><TD>" + FONT_CS);
          writeln(
            "<INPUT type=hidden name='Image' value='" +
              unescape(artikel[Z]["image"]) +
              "'>",
          );
          writeln(E_PRINT_PROD_IMAGE + "</FONT></TD><TD>");
          if (artikel[Z]["url"]) {
            writeln(
              "<INPUT type=hidden name='URL' value='" +
                artikel[Z]["url"] +
                "'>",
            );
            writeln("<artikel HREF='" + unescape(artikel[Z]["url"]) + "'>");
            writeln(
              "<IMG src='" +
                unescape(artikel[Z]["image"]) +
                "' border=0 width=150></artikel>",
            );
          } else
            writeln(
              "<IMG src='" + unescape(artikel[Z]["image"]) + "' width=150>",
            );
          writeln("</TD></TR>");
        } else if (artikel[Z]["image"]) {
          writeln(
            "<INPUT type=hidden name='Image' value='" +
              unescape(artikel[Z]["image"]) +
              "'>",
          );
        }
      }
    }
  }
  print_f();
}
function E_main() {
  a_doSetEuroland();
  LEFT = false;
  E_go("start");
}
