//- -- Copyright 1998 pluto@iconnect.de --
//-
//- Coauthor kdoberstein@js-webShop.com
function errorHandler(msg, url, lno) {
  if (lno) alert("Message: " + msg + "\nURL: " + url + "\nLine: " + lno);
  return true;
}
function E_init_font() {
  FONT = unescape(system["font"]);
  FONT_NAV = unescape(system["font_navigation"]);
  FONT_NAV_H = unescape(system["font_navigation_h"]);
  FONT_RH = unescape(system["font_right_head"]);
  FONT_TT = unescape(system["font_top_text"]);
  FONT_CS = unescape(system["font_send"]);
}
function E_init_page() {
  PAGE_TOP = unescape(system["page_top"]);
  PAGE_SUM = unescape(system["page_summen"]);
  PAGE_BOT = unescape(system["page_bottom"]);
  NAV_P_TOP = unescape(system["nav_page_top"]);
  NAV_P_BOT = unescape(system["nav_page_bottom"]);
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
function E_init_shipping() {
  var CUR = 0;
  for (i in system["areas"]) {
    CUR++;
  }
  if (CUR >= 1) {
    AREAS = true;
    e_areas = 0;
  } else AREAS = false;
  CUR = 0;
  for (i in system["freight"]) {
    CUR++;
  }
  if (CUR >= 1) {
    FREIGHT = true;
    e_freight = 0;
  } else FREIGHT = false;
  CUR = 0;
  for (i in system["payment"]) {
    if (system["payment"][i]["activ"] == "limit") CUR++;
  }
  if (CUR >= 1) {
    PAYMENT = true;
    for (i in system["payment"]) {
      if (system["payment"][i]["activ"] == "limit") {
        e_payment = i;
        break;
      }
    }
    PAYCHANGE = true;
    if (system["payment"][i]["curr"]) {
      if (system["payment"][i]["curr"] == "null") PAYCHANGE = true;
      else {
        PAYCHANGE = false;
        SELECTED_CURRENCY = unescape(system["payment"][e_payment]["curr"]);
      }
    }
  } else PAYMENT = false;
}
function E_init_strings() {
  for (lang in r.language) {
    eval(lang + " = r.language[lang]");
  }
}
function e_init_gif() {
  B_IMG = unescape(system["b_img"]);
  B_A_IMG = unescape(system["b_a_img"]);
  B_B_IMG = unescape(system["b_b_img"]);
  GIF_SEL = unescape(system["gif_sel"]);
  GIF_NSEL = unescape(system["gif_nsel"]);
  GO_RIGHT = unescape(system["goright"]);
  GO_LEFT = unescape(system["goleft"]);
}
function e_init_mwst() {
  nshow = "brutto";
  n_liefer = true;
  if (system["nbase"] == "netto") E_TAX_S = E_TAX_N;
  else E_TAX_S = E_TAX_B;
}
function E_init() {
  B_init();
  LAST_HREF = "";
  if (system["leave_url"]) {
    if (system["leave_url"].length != 0)
      LAST_HREF = unescape(system["leave_url"]);
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
  e_page_state = "start";
  version = "1.6";
  auto_bestell = true;
  besch_dir = "/beschreibungen/";
  SELECTED_CURRENCY = "base";
  e_init_gif();
  E_init_font();
  E_init_shipping();
  E_init_page();
  E_init_strings();
  if (system["version"] != version) alert(EA_W_VERSION);
  e_init_mwst();
  E_init_curr();
  e_check_browser();
}
function e_doSearch(hash, term) {
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
function E_search() {
  var such = "";
  if ((such = prompt(E_SEARCH_PROMPT, "")) == null) return;
  if (such == "") return;
  e_search_page_before = e_page_state;
  e_page_state = "search";
  LOCK = true;
  with (r.document) {
    open();
    e_print_right_body();
    e_print_right_top(E_SEARCH_NAME);
    writeln(E_SEARCH_ERG1 + such + E_SEARCH_ERG2 + "\t</FONT>\t<HR></TABLE>");
    for (a in artikel) {
      if (e_doSearch(a, such.toLowerCase())) {
        if (artikel[a]["htmltyp"] == "1") e_printHTML1(a);
        else if (artikel[a]["htmltyp"] == "2") e_printHTML2(a);
        else if (artikel[a]["htmltyp"] == "3") e_printHTML3(a);
        else if (artikel[a]["htmltyp"] == "4") e_printHTML4(a);
        else alert("Unknown HTMLTYP!!");
      }
    }
    e_print_right_bot();
    close();
  }
  B_sumPage();
  LOCK = false;
}
function E_init_curr() {
  EURO_TO_EURO = EURO_TO = TO_EURO = NO_EURO = "false";
  CURR = system["currency"]["base"];
  if (EUROLAND == "true") {
    if (B_isEu(SELECTED_CURRENCY) == "true") EURO_TO_EURO = "true";
    else TO_EURO = "true";
  } else {
    if (B_isEu(SELECTED_CURRENCY) == "true") {
      EURO_TO = "true";
      SELECTED_CURRENCY = CURR;
    } else NO_EURO = "true";
  }
}
function e_check_browser() {
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
    window.onError = errorHandler;
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
  if (C_hash != "refresh") e_page_state = C_hash;
  E_print_left_frame();
  E_print_right_frame();
  LOCK = false;
}
function E_go_left() {
  if (LOCK) {
    return;
  }
  LOCK = true;
  prev_page = "";
  if (e_page_state == "start") prev_page = "data";
  else if (e_page_state == "data") prev_page = "basket";
  else if (e_page_state == "send") prev_page = "data";
  else if (e_page_state == "basket") prev_page = page.length - 1;
  else if (e_page_state == "search") {
    e_page_state = e_search_page_before;
    LOCK = false;
    E_go_left();
    return;
  } else if (e_page_state == 0) prev_page = "start";
  else prev_page = e_page_state - 1;
  LOCK = false;
  E_go(prev_page);
}
function E_go_right() {
  if (LOCK) {
    return;
  }
  LOCK = true;
  next_page = "";
  if (e_page_state == "start") next_page = 0;
  else if (e_page_state == "basket") next_page = "data";
  else if (e_page_state == "data") next_page = "send";
  else if (e_page_state == "send") next_page = "start";
  else if (e_page_state == "search") {
    e_page_state = e_search_page_before;
    LOCK = false;
    E_go_right();
    return;
  } else if (e_page_state == page.length - 1) next_page = "basket";
  else next_page = e_page_state + 1;
  LOCK = false;
  E_go(next_page);
}
function E_print_left_frame() {
  if (!LEFT) {
    if (system["left"]) {
      this.l.document.location.replace(system["left"]);
    } else {
      this.l.document.open();
      E_print_navigation();
      l.document.close();
    }
    LEFT = true;
  }
  e_insert_navgif();
}
function e_insert_navgif() {
  for (i in l.document.images) {
    nm = escape(l.document.images[i].name);
    if (nm == "nav_" + e_page_state) l.document.images[i].src = GIF_SEL;
    else if (nm.indexOf("nav_") != -1) l.document.images[i].src = GIF_NSEL;
    if (nm.indexOf("gif_") != -1) {
      na = nm.substring(4, nm.length);
      if (na == e_page_state) {
        if (isNaN(na)) {
          if (eval("system['navgifs_" + na + "']"))
            eval(
              "l.document.images[i].src = unescape(system['navgifs_" +
                na +
                "'])",
            );
        } else {
          if (page[na]["navgifs"])
            l.document.images[i].src = unescape(page[na]["navgifs"]);
        }
      } else {
        if (isNaN(na)) {
          if (eval("system['navgif_" + na + "']"))
            eval(
              "l.document.images[i].src = unescape(system['navgif_" +
                na +
                "'])",
            );
        } else {
          if (page[na]["navgif"])
            l.document.images[i].src = unescape(page[na]["navgif"]);
        }
      }
    }
  }
}
function e_print_right_body() {
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
    if (!isNaN(e_page_state)) {
      if (page[e_page_state]["bg"]) write(unescape(page[e_page_state]["bg"]));
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
          "<INPUT type=text name=summe_1 size=8 onChange='parent.B_sumPage();'>",
      );
      writeln(
        E_PRINT_LEFT_PAGE_BOT_SUM2 +
          "<INPUT type=text name=summe_2 size=8 onChange='parent.B_sumPage();'></TD>",
      );
      writeln("</TR>");
    }
    writeln(
      "<TR><TD align=left><A href='javascript:parent.E_go_left();'><IMG src='" +
        GO_LEFT +
        "' border=0></TD>",
    );
    writeln(
      "<TD align=middle><A href='javascript:parent.e_print_owner();'>" +
        FONT_TT +
        TXT_PN +
        "</A></TD>",
    );
    writeln(
      "<TD align=right><A href='javascript:parent.E_go_right();'><IMG src='" +
        GO_RIGHT +
        "' border=0></TD></TR>",
    );
    writeln("</TABLE></FORM>");
    write(PAGE_BOT);
  }
}
function blind() {
  with (r.document) {
  }
}
function E_print_navigation() {
  with (l.document) {
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
      "<TR><TD colspan=2 align=middle><A href='javascript:parent.e_print_owner();'>",
    );
    writeln(
      "<IMG SRC='" + unescape(system["logo"]) + "' BORDER=0></A></TD></TR>",
    );
    writeln("<TR><TD width=25% align='middle' colspan=2>");
    writeln(
      "<A HREF='javascript:parent.E_leave();'><IMG SRC='" +
        unescape(system["leave"]) +
        "' border=0></A></TD></TR>",
    );
    writeln(
      "<TR><TD width=25% align='middle' colspan=2><A HREF='javascript:parent.E_go_left();'",
    );
    writeln("><IMG SRC='" + GO_LEFT + "' border=0></A>");
    writeln(
      "<A HREF='javascript:parent.E_search();'><IMG SRC='" +
        unescape(system["search"]) +
        "' border=0 ALT='Suchen'></A>",
    );
    writeln("<A HREF='javascript:parent.E_go_right();'>");
    writeln(
      "<IMG SRC='" +
        GO_RIGHT +
        "' border=0 ALT='The Road Ahead ;-)'></A></TD></TR>",
    );
    writeln("<TR><TD colspan=2><HR></TD></TR>");
    if (system["navgif_start"]) {
      writeln(
        "<TR " +
          TBG_NP +
          "><TD colspan=2><A href=\"javascript:parent.E_go('start');\">",
      );
      writeln(
        "<IMG src='" +
          unescape(system["navgif_start"]) +
          "' name='gif_start' border=0></A></TD></TR>",
      );
    } else {
      writeln(
        "<TR " +
          TBG_NP +
          "><TD width=20><A href=\"javascript:parent.E_go('start');\">",
      );
      writeln("<IMG src='" + GIF_SEL + "' name=nav_start border=0></A></TD>");
      writeln("<TD><A href=\"javascript:parent.E_go('start');\">");
      writeln(FONT_NAV_H);
      writeln(E_NAME_STARTSEITE + "</FONT></A></TD></TR>");
    }
    for (i in page) {
      if (page[i]["navgif"]) {
        writeln(
          "<TR " +
            TBG_NP +
            '><TD colspan=2><A href="javascript:parent.E_go(' +
            i +
            ');">',
        );
        writeln(
          "<IMG src='" +
            unescape(page[i]["navgif"]) +
            "' name='gif_" +
            i +
            "' border=0></A></TD></TR>",
        );
      } else {
        writeln(
          "<TR " +
            TBG_NP +
            '><TD width=20><A href="javascript:parent.E_go(' +
            i +
            ');">',
        );
        writeln(
          "<IMG src='" + GIF_NSEL + "' name='nav_" + i + "' border=0></A></TD>",
        );
        writeln('<TD><A href="javascript:parent.E_go(' + i + ');">');
        writeln(FONT_NAV);
        writeln(unescape(page[i]["name"]) + "</FONT>");
        writeln("</A></TD></TR>");
      }
    }
    writeln("<TR " + TBG_NP + "><TD colspan=2><HR></TD></TR>");
    if (system["navgif_basket"]) {
      writeln(
        "<TR " +
          TBG_NP +
          "><TD colspan=2><A href=\"javascript:parent.E_go('basket');\">",
      );
      writeln(
        "<IMG src='" +
          unescape(system["navgif_basket"]) +
          "' name='gif_basket' border=0></A></TD></TR>",
      );
    } else {
      writeln(
        "<TR " + TBG_NP + "><TD><A href=\"javascript:parent.E_go('basket');\">",
      );
      writeln("<IMG src='" + GIF_NSEL + "' name=nav_basket border=0></A></TD>");
      writeln("<TD><A href=\"javascript:parent.E_go('basket');\">");
      writeln(FONT_NAV_H);
      writeln(E_NAME_BASKET + "</FONT></A></TD></TR>");
    }
    if (system["navgif_data"]) {
      writeln(
        "<TR " +
          TBG_NP +
          "><TD colspan=2><A href=\"javascript:parent.E_go('data');\">",
      );
      writeln(
        "<IMG src='" +
          unescape(system["navgif_data"]) +
          "' name='gif_data' border=0></A></TD></TR>",
      );
    } else {
      writeln(
        "<TR " + TBG_NP + "><TD><A href=\"javascript:parent.E_go('data');\">",
      );
      writeln("<IMG src='" + GIF_NSEL + "' name=nav_data border=0></A></TD>");
      writeln("<TD><A href=\"javascript:parent.E_go('data');\">");
      writeln(FONT_NAV_H);
      writeln(E_NAME_DATA + "</FONT></FONT></A></TD></TR>");
    }
    if (system["navgif_send"]) {
      writeln(
        "<TR " +
          TBG_NP +
          "><TD colspan=2><A href=\"javascript:parent.E_go('send');\">",
      );
      writeln(
        "<IMG src='" +
          unescape(system["navgif_send"]) +
          "' name='gif_send' border=0></A></TD></TR>",
      );
    } else {
      writeln(
        "<TR " + TBG_NP + "><TD><A href=\"javascript:parent.E_go('send');\">",
      );
      writeln("<IMG src='" + GIF_NSEL + "' name=nav_send border=0></A></TD>");
      writeln("<TD><A href=\"javascript:parent.E_go('send');\">");
      writeln(FONT_NAV_H);
      writeln(E_NAME_SEND + "</FONT></FONT></A></TD></TR>");
    }
    writeln("<TR " + TBG_NP + "><TD colspan=2 align=middle>");
    writeln(FONT_NAV + "<FONT size=-1>");
    writeln(
      '<FORM name=confign><SELECT name=nshow onChange="parent.B_set_mwstshow(this)">',
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
        '<FORM name=config><SELECT name=R onChange="parent.B_set_currency(this)">',
      );
      writeln("<OPTION value='base'>" + CURR);
      if (EUROLAND == "true") {
        for (j in system["ewu"]) {
          if (system["ewu"][j]["use"] == "mwst" || j == CURR) continue;
          write("<OPTION value='" + j + "'");
          if (j == SELECTED_CURRENCY) write("selected");
          writeln(B_retOpt("ewu", j));
        }
      }
      for (k in system["currency"]) {
        if (k == CURR || k == "base") continue;
        write("<OPTION value='" + k + "'");
        if (k == SELECTED_CURRENCY) write("selected");
        writeln(B_retOpt("currency", k));
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
    e_print_right_body();
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
    coo = B_get_cookie();
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
          "' onClick='parent.B_getOrder(this);'>",
      );
      writeln(
        "<INPUT type=button name='" +
          coi +
          "' value='" +
          E_PRINT_BASKET_ORDER_DEL +
          "' onClick='parent.B_delOrder(this);'></TD></TR>",
      );
    }
    if (B_a_daten.length) {
      writeln(
        "<TR><TD colspan=2 align=middle>" +
          FONT_CS +
          "<INPUT type=button value='" +
          E_PRINT_BASKET_ORDER_ADD +
          "' onClick='parent.B_storeOrder();'></TD></TR>",
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
    e_print_order();
    writeln("</TABLE>");
    e_print_right_bot();
    close();
  }
}
function e_thanks() {
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
function e_print_data() {
  with (r.document) {
    open();
    e_print_right_body();
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
      "<TR><TD valign=top colspan=2> \n" +
        FONT_CS +
        E_PRINT_DATA_MESS1 +
        "<BR>",
    );
    writeln(E_PRINT_DATA_MESS2 + "</FONT></TD></TR>\n");
    for (i in system["address"]) {
      if (system["address"][i]["required"] == "yes")
        writeln("<TR " + TBG_BR + "><TD valign=top width=30%>");
      else writeln("<TR>\n<TD valign=top width=30%>");
      writeln(FONT_CS + unescape(system["address"][i]["name"]));
      writeln("</FONT> \n</TD> \n<TD valign=top width=70%>");
      write(FONT_CS + '<INPUT type=text name="num');
      writeln(i + '" size=30 maxlength=40');
      if (eval("kunde['num" + i + "']"))
        write("value='" + eval("kunde['num" + i + "']") + "'");
      else if (system["address"][i]["default"])
        write("value='" + unescape(system["address"][i]["default"]) + "'");
      writeln(
        "onChange=\"parent.B_enter_address(this,'" +
          system["address"][i]["validation"] +
          "')\"><BR></TD></TR>\n",
      );
    }
    if (PAYMENT) {
      writeln("<TR " + TBG_BR + ">\n<TD valign=top width=30%>");
      writeln(FONT_CS + E_PRINT_DATA_PAY);
      writeln("</FONT> \n</TD> \n<TD valign=top width=70%>");
      writeln(
        FONT_CS + "<SELECT name=\"x\" onChange='parent.e_set_payment(this);'>",
      );
      for (p in system["payment"]) {
        if (system["payment"][p]["activ"] == "limit") {
          write("<OPTION value='" + p + "'");
          if (e_payment == p) writeln("selected>");
          else writeln(">");
          writeln(
            unescape(system["payment"][p]["name"]) +
              "&nbsp;&nbsp;(" +
              toDM(system["payment"][p]["value"]) +
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
      if (system["payment"][e_payment]["msg"]) {
        writeln("<TR>\n<TD valign=top colspan=2>");
        writeln(
          FONT_CS +
            unescape(system["payment"][e_payment]["msg"]) +
            "</TD></TR>",
        );
      }
      for (idx in system["payment"][e_payment]) {
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
          writeln("<TR " + TBG_BR + ">\n<TD valign=top width=30%>");
          writeln(FONT_CS + unescape(system["payment"][e_payment][idx]));
          writeln("</FONT> \n</TD> \n<TD valign=top width=70%>");
          write(FONT_CS + '<INPUT type=text name="pay');
          writeln(idx + '" size=30 maxlength=40');
          if (eval("paym['pay" + idx + "']"))
            write(" value='" + eval("paym['pay" + idx + "']") + "'");
          writeln(' onChange="parent.B_enter_payment(this)"><BR></TD></TR>\n');
        }
      }
    }
    if (AREAS) {
      writeln("<TR " + TBG_BR + ">\n<TD valign=top width=30%>");
      writeln(FONT_CS + E_PRINT_DATA_AREAS);
      writeln("</FONT> \n</TD> \n<TD valign=top width=70%>");
      writeln(
        FONT_CS + "<SELECT name=\"v\" onChange='parent.e_set_areas(this);'>",
      );
      for (i in system["areas"]) {
        write("<OPTION value='" + i + "'");
        if (e_areas == i) writeln("selected>");
        else writeln(">");
        writeln(
          unescape(system["areas"][i]["name"]) +
            "&nbsp;&nbsp;(" +
            toDM(system["areas"][i]["value"]) +
            ")",
        );
      }
      writeln("</SELECT></TD></TR>");
    }
    if (FREIGHT) {
      writeln("<TR " + TBG_BR + ">\n<TD valign=top width=30%>");
      writeln(FONT_CS + E_PRINT_DATA_FREIGHT);
      writeln("</FONT> \n</TD> \n<TD valign=top width=70%>");
      writeln(
        FONT_CS + "<SELECT name=\"u\" onChange='parent.e_set_freight(this);'>",
      );
      for (i in system["freight"]) {
        write("<OPTION value='" + i + "'");
        if (e_freight == i) writeln("selected>");
        else writeln(">");
        writeln(
          unescape(system["freight"][i]["name"]) +
            "&nbsp;&nbsp;(" +
            toDM(system["freight"][i]["value"]) +
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
    write('<A HREF="javascript:parent.B_speichere_kunden()">');
    writeln(
      '<img src="' + unescape(system["cookie"]) + '" border=0></A></TD></TR>',
    );
    writeln("</TABLE>");
    e_print_right_bot();
    close();
  } // end of with
}
function e_print_send() {
  var not_here = "";
  var k_idx = "";
  var b;
  var b_tmp = 0;
  for (t in system["address"]) {
    k_idx = "num" + t;
    if (system["address"][t]["required"] == "yes" && !kunde[k_idx])
      not_here += system["address"][t]["name"] + "\n";
  }
  if (PAYMENT) {
    for (idx in system["payment"][e_payment]) {
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
          not_here += unescape(system["payment"][e_payment][idx]) + "\n";
      }
    }
  }
  if (not_here != "") {
    alert(E_THANKS_MISSING + unescape(not_here));
    setTimeout("E_go('data')", 100);
    return;
  }
  for (b in bestellt) {
    if (bestellt[b]) b_tmp += 1;
  }
  if (!b_tmp) {
    alert(E_THANKS_ORDER);
    setTimeout("E_go('basket')", 100);
    return;
  }
  var action = "" + unescape(system["action"]);
  var enctype = "" + unescape(system["enctype"]);
  if (PAYMENT) {
    if (system["payment"][e_payment]["action"]) {
      if (system["payment"][e_payment]["action"].length != 0)
        action = unescape(system["payment"][e_payment]["action"]);
    }
    if (system["payment"][e_payment]["action"]) {
      if (system["payment"][e_payment]["action"].length)
        enctype = unescape(system["payment"][e_payment]["enctype"]);
    }
  }
  if (action.indexOf("mailto:", 0) != -1)
    var ons = "onSubmit='setTimeout(\"parent.e_thanks();\",2000);'";
  else var ons = "";
  with (r.document) {
    open();
    e_print_right_body();
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
        system["payment"][e_payment]["zit"] &&
        system["payment"][e_payment]["zin"] &&
        system["payment"][e_payment]["ziv"]
      )
        writeln(
          "<INPUT type='" +
            unescape(system["payment"][e_payment]["zit"]) +
            "' name='" +
            unescape(system["payment"][e_payment]["zin"]) +
            "' value='" +
            unescape(system["payment"][e_payment]["ziv"]) +
            "'>",
        );
    }
    e_print_right_top(E_NAME_OWNER);
    writeln("<CENTER>" + unescape(system["betreiber"]) + "<BR>");
    writeln(
      "<A href='mailto:" +
        unescape(system["email"]) +
        "'>" +
        unescape(system["email"]) +
        "</A><BR>",
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
    e_print_kunde();
    writeln("<TR><TH colspan=2><CENTER>");
    writeln(FONT_CS + '<INPUT type=submit value="' + E_PRINT_DATA_OK + '" >');
    if (MOZZ4)
      writeln(
        '<INPUT type=button value="' +
          E_PRINT_DATA_PRINT +
          '" onClick="print();"></FONT>',
      );
    writeln("</FONT></CENTER></TR>");
    e_print_order();
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
function e_set_areas(s_obj) {
  e_areas = s_obj.options[s_obj.selectedIndex].value;
  if (system["areas"][e_areas]["mwst"] == "no" && nshow == "brutto") {
    alert(EA_LIEFER_NETTO);
    nshow = "netto";
    LEFT = false;
    E_print_left_frame();
    e_insert_navgif();
  }
  if (system["areas"][e_areas]["mwst"] == "yes" && nshow == "netto") {
    alert(EA_LIEFER_BRUTTO);
    nshow = "brutto";
    LEFT = false;
    E_print_left_frame();
    e_insert_navgif();
  }
  if (system["areas"][e_areas]["mwst"] == "no") {
    n_liefer = false;
  }
}
function e_set_payment(s_obj) {
  paym = new Array();
  e_payment = s_obj.options[s_obj.selectedIndex].value;
  if (system["payment"][e_payment]["curr"]) {
    if (system["payment"][e_payment]["curr"] != "null") {
      PAYCHANGE = false;
      SELECTED_CURRENCY = unescape(system["payment"][e_payment]["curr"]);
      E_init_curr();
      LEFT = false;
    } else {
      PAYCHANGE = true;
    }
  } else PAYCHANGE = true;
  E_go("refresh");
}
function e_set_freight(s_obj) {
  e_freight = s_obj.options[s_obj.selectedIndex].value;
}
function e_print_owner() {
  with (r.document) {
    open();
    e_print_right_body();
    e_print_right_top(E_NAME_OWNER);
    writeln("<CENTER>" + unescape(system["betreiber"]) + "<BR>");
    writeln(
      "<A href='mailto:" +
        unescape(system["email"]) +
        "'>" +
        unescape(system["email"]) +
        "</A><BR>",
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
      "<TR><TD align=left><A href='javascript:parent.E_go_left();'><IMG src='" +
        GO_LEFT +
        "' border=0></TD>",
    );
    if (proto == "http" && path.indexOf(".") != -1) {
      writeln(
        '<TD align=middle bgcolor=white><A href="http://www.js-webShop.com" target=_new>',
      );
      writeln(
        '<img src="http://www.js-webShop.com/banner/js-webshop.gif" border=0></A></TD>',
      );
    } else if (proto == "https" && path.indexOf(".") != -1) {
      writeln(
        '<TD align=middle bgcolor=white><A href="http://www.js-webShop.com" target=_new>',
      );
      writeln(
        '<img src="https://secure.js-webShop.com/banner/js-webshop.gif" border=0></A></TD>',
      );
    } else
      writeln(
        "<TD align=middle><A href='javascript:parent.e_print_owner();'>" +
          FONT_TT +
          TXT_PN +
          "</A></TD>",
      );
    writeln(
      "<TD align=right><A href='javascript:parent.E_go_right();'><IMG src='" +
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
      "<TR><TD valign=top>\n\t" +
        FONT_RH +
        unescape(system["name"]) +
        " &nbsp;&nbsp; <I>",
    );
    writeln(txt + "</I></FONT>\n\t<HR>");
    writeln(FONT_TT);
  }
}
function e_print_start() {
  with (r.document) {
    open();
    e_print_right_body();
    e_print_right_top(E_NAME_STARTSEITE);
    writeln(unescape(system["startmsg"]) + "\t</FONT></TABLE>");
    e_print_right_bot();
    close();
  }
}
function E_print_right_frame() {
  if (e_page_state == "start") {
    if (system["start"].length != 0)
      r.document.location.replace(unescape(system["start"]));
    else e_print_start();
  } else if (e_page_state == "basket") E_print_basket();
  else if (e_page_state == "data") e_print_data();
  else if (e_page_state == "send") e_print_send();
  else if (!isNaN(e_page_state)) {
    if (page[e_page_state]["url"]) {
      this.r.document.location.replace(unescape(page[e_page_state]["url"]));
    } else {
      r.document.open();
      e_print_right_body();
      e_print_products();
      if (page[e_page_state]["summen"]) e_print_right_bot("summen");
      else e_print_right_bot();
      r.document.close();
    }
  }
  B_sumPage();
}
function e_mouseover_bestell(was, Z) {
  if (was) {
    eval("r.document.img" + Z + ".src = '" + B_A_IMG + "'");
    if (bestellt[Z]) window.status = E_MOB_N_BEST;
    else window.status = E_MOB_BEST;
  } else {
    if (bestellt[Z]) eval("r.document.img" + Z + ".src = '" + B_B_IMG + "'");
    else eval("r.document.img" + Z + ".src = '" + B_IMG + "'");
  }
}
function e_showDesc(idx) {
  with (r.document) {
    open();
    e_print_right_body();
    e_print_right_top(unescape(artikel[idx]["name"]));
    writeln(unescape(artikel[idx]["desc"]) + "</FONT>");
    if (artikel[idx]["url"])
      writeln(
        "<P><center><A href='" +
          unescape(artikel[idx]["url"]) +
          "'>" +
          FONT_TT +
          E_SHOWDESC_MORE +
          "</FONT></A>",
      );
    writeln(
      "<P><center><A href=\"javascript:parent.E_go('refresh');\">" +
        FONT_TT +
        E_SHOWDESC_BACK +
        "</FONT></A></center></TD></TR></TABLE>",
    );
    e_print_right_bot();
    close();
  }
}
function e_print_products() {
  var art = "";
  if (e_page_state == "start") {
    return;
  }
  if (e_page_state == "basket") {
    return;
  }
  if (e_page_state == "data") {
    return;
  }
  if (e_page_state == "send") {
    return;
  }
  with (r.document) {
    if (page[e_page_state]["top_text"]) {
      e_print_right_top(unescape(page[e_page_state]["name"]));
      writeln(
        unescape(page[e_page_state]["top_text"]) + "\t</FONT>\t<HR></TABLE>",
      );
    }
    art = page[e_page_state]["artikel"];
    if (art.length == 0) return;
    while ((i = art.substring(0, art.indexOf(","))) != "") {
      if (i > 10) return;
      if (artikel[i]["htmltyp"] == "1") e_printHTML1(i);
      else if (artikel[i]["htmltyp"] == "2") e_printHTML2(i);
      else if (artikel[i]["htmltyp"] == "3") e_printHTML3(i);
      else if (artikel[i]["htmltyp"] == "4") e_printHTML4(i);
      else alert("Unknown HTMLTYP!!");
      art = art.substring(art.indexOf(",") + 1, art.length);
    }
  }
}
function e_print_bestell(idx) {
  with (r.document) {
    if (artikel[idx]["typ"] == "checkbox") {
      writeln(FONT + E_PRINT_HTML_ORD + "<BR>");
      writeln(
        "<INPUT type=checkbox name='check" +
          idx +
          "' onClick='parent.b_toggle_record(" +
          idx +
          ");'",
      );
      if (bestellt[idx]) write(" CHECKED>");
      else write(">");
    } else if (artikel[idx]["typ"] == "img") {
      writeln("<A");
      writeln(" HREF='javascript:parent.b_toggle_record(" + idx + ");'");
      writeln(" onMouseOver='parent.e_mouseover_bestell(true," + idx + ");' ");
      writeln(" onMouseOut='parent.e_mouseover_bestell(false," + idx + ");'>");
      if (bestellt[idx])
        write("<IMG name='img" + idx + "' src='" + B_B_IMG + "' border=0></A>");
      else
        write("<IMG name='img" + idx + "' src='" + B_IMG + "' border=0></A>");
    } else if (artikel[idx]["typ"] == "txt") {
      writeln(
        E_PRINT_HTML_MENGE +
          " <INPUT type=text onChange='parent.B_setAmount(this," +
          idx +
          " );'",
      );
      if (bestellt[idx])
        write(" size=4 maxlength=5 value='" + B_a_daten[idx]["menge"] + "'>");
      else write(" size=4 maxlength=5 value=''>");
    } else writeln("<INPUT>");
  }
}
function e_print_prodCheckbox(f_ar, aix, fix) {
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
          "' type=checkbox onClick='parent.B_setFeature(this, " +
          aix +
          ");' ",
      );
      if (bestellt[aix]) if (B_a_daten[aix][fix + "-" + ix]) write("checked");
      writeln(" >" + unescape(ix));
      if (parseInt(f_ar[ix]) > 0 && f_ar["price"] == "limit")
        writeln(" (" + toDM(f_ar[ix]) + ")");
      if (parseInt(f_ar[ix]) > 0 && f_ar["price"] == "mwst")
        writeln(" (" + E_PRINT_FEATURES_ADD + toDM(f_ar[ix]) + ")");
      writeln("<BR>");
    }
    writeln("</TD>");
  }
}
function e_print_prodRadio(f_ar, aix, fix) {
  with (r.document) {
    writeln("<TD valign=top>");
    writeln(FONT + f_ar["name"] + "<HR>");
    for (ix in f_ar) {
      if (ix == "name" || ix == "price") continue;
      write(
        "<INPUT type=radio name='el" + aix + "-" + fix + "' value='" + ix + "'",
      );
      if (bestellt[aix]) if (B_a_daten[aix][fix + "-" + ix]) write(" checked ");
      write(
        " onClick='parent.B_setFeature(this, " + aix + ");'>" + unescape(ix),
      );
      if (parseInt(f_ar[ix]) > 0 && f_ar["price"] == "limit")
        writeln(" (" + toDM(f_ar[ix]) + ")");
      if (parseInt(f_ar[ix]) > 0 && f_ar["price"] == "mwst")
        writeln(" (" + E_PRINT_FEATURES_ADD + toDM(f_ar[ix]) + ")");
      writeln("<BR>");
    }
    writeln("</TD>");
  }
}
function e_print_prodSelect(f_ar, aix, fix) {
  with (r.document) {
    writeln("<TD valign=top>");
    writeln(
      FONT +
        "<SELECT name='el" +
        aix +
        "-" +
        fix +
        "' onChange='parent.B_setFeature(this, " +
        aix +
        ");'><OPTION value=head>" +
        f_ar["name"] +
        "</OPTION>",
    );
    for (ix in f_ar) {
      if (ix == "name" || ix == "price") continue;
      write("<OPTION value='" + fix + "-" + ix + "'");
      if (bestellt[aix])
        if (B_a_daten[aix][fix + "-" + ix]) write(" selected ");
      write(">" + unescape(ix));
      if (parseInt(f_ar[ix]) > 0 && f_ar["price"] == "limit")
        writeln(" (" + toDM(f_ar[ix]) + ")");
      if (parseInt(f_ar[ix]) > 0 && f_ar["price"] == "mwst")
        writeln(" (" + E_PRINT_FEATURES_ADD + toDM(f_ar[ix]) + ")");
      writeln("</OPTION>");
    }
    writeln("</SELECT></TD>");
  }
}
function e_print_prodMselect(f_ar, aix, fix) {
  with (r.document) {
    writeln("<TD valign=top>");
    writeln(
      FONT +
        f_ar["name"] +
        "<HR><SELECT multiple name='el" +
        aix +
        "-" +
        fix +
        "' onChange='parent.B_setFeature(this, " +
        aix +
        ");'>",
    );
    for (ix in f_ar) {
      if (ix == "name" || ix == "price") continue;
      write("<OPTION value='" + fix + "-" + ix + "'");
      if (bestellt[aix])
        if (B_a_daten[aix][fix + "-" + ix]) write(" selected ");
      write(">" + unescape(ix));
      if (parseInt(f_ar[ix]) > 0 && f_ar["price"] == "limit")
        writeln(" (" + toDM(f_ar[ix]) + ")");
      if (parseInt(f_ar[ix]) > 0 && f_ar["price"] == "mwst")
        writeln(" (" + E_PRINT_FEATURES_ADD + toDM(f_ar[ix]) + ")");
      writeln("</OPTION>");
    }
    writeln("</SELECT></TD>");
  }
}
function e_print_prodText(f_ar, aix, fix) {
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
      if (bestellt[aix])
        if (B_a_daten[aix][fix + "-" + ix])
          write(" value='" + unescape(B_a_daten[aix][fix + "-" + ix]) + "'");
      write(" onChange='parent.B_setFeature(this, " + aix + ");'>");
      if (parseInt(f_ar[ix]) > 0 && f_ar["price"] == "limit")
        writeln(" (" + toDM(f_ar[ix]) + ")");
      if (parseInt(f_ar[ix]) > 0 && f_ar["price"] == "mwst")
        writeln(" (" + E_PRINT_FEATURES_ADD + toDM(f_ar[ix]) + ")");
      writeln("<BR>");
    }
    writeln("</TD>");
  }
}
function E_get_feature(aix, fix) {
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
    f_ar = E_get_feature(aix, i);
    if (system["features"][i]["ftype"] == "checkbox")
      e_print_prodCheckbox(f_ar, aix, i);
    else if (system["features"][i]["ftype"] == "select")
      e_print_prodSelect(f_ar, aix, i);
    else if (system["features"][i]["ftype"] == "multiple-select")
      e_print_prodMselect(f_ar, aix, i);
    else if (system["features"][i]["ftype"] == "radio")
      e_print_prodRadio(f_ar, aix, i);
    else if (system["features"][i]["ftype"] == "text")
      e_print_prodText(f_ar, aix, i);
    else alert("Unknown feature typ!!" + system["features"][i]["ftype"]);
    feat = feat.substring(feat.indexOf(",") + 1, feat.length);
  }
}
function e_printHTML1(idx) {
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
    e_print_bestell(idx);
    writeln("</FONT></TD>");
    if (artikel[idx]["menge"]) {
      writeln("<TD width=10%>" + FONT);
      cols++;
      writeln(
        E_PRINT_HTML_MENGE +
          " &nbsp;<INPUT type=text size=4 name='j" +
          idx +
          "' maxlength=5 onChange='parent.B_setAmount(this," +
          idx +
          " );' ",
      );
      if (bestellt[idx]) writeln("value='" + B_a_daten[idx]["menge"] + "'>");
      else writeln(">");
      writeln("</FONT></TD>");
    }
    writeln("<TD width=15%>" + FONT + "<B>");
    cols++;
    if (artikel[idx]["desc"])
      writeln("<A HREF='javascript:parent.e_showDesc(" + idx + ");'>");
    else if (artikel[idx]["url"])
      writeln("<A HREF='" + unescape(artikel[idx]["url"]) + "'>");
    write(unescape(artikel[idx]["name"]));
    if (artikel[idx]["desc"] || artikel[idx]["url"]) writeln("</A>");
    writeln("</B></FONT></TD>");
    if (artikel[idx]["image"]) {
      writeln("<TD width=15%>");
      cols++;
      if (artikel[idx]["url"])
        writeln("<A HREF='" + unescape(artikel[idx]["url"]) + "'>");
      write(
        "<IMG src='" +
          unescape(artikel[idx]["image"]) +
          "' width=60 align=textop border=0>",
      );
      if (artikel[idx]["url"]) writeln("</A>");
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
          toDM(B_toMWST(artikel[idx]["gpreis"], artikel[idx]["mwst"])) +
          "<BR>" +
          E_PRINT_HTML_PREIS,
      );
    write(toDM(B_toMWST(artikel[idx]["preis"], artikel[idx]["mwst"])));
    writeln("</FONT></TD>");
    if (artikel[idx]["preisa"]) {
      writeln("<TD width=15%>" + FONT);
      cols++;
      write(
        E_PRINT_HTML_PREISA +
          " &nbsp;<INPUT type=text name='k" +
          idx +
          "' size=8 maxlength=20 onChange='parent.b_markieren(\"" +
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
function e_printHTML2(idx) {
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
        writeln("<A HREF='" + unescape(artikel[idx]["url"]) + "'>");
      write(
        "<IMG src='" +
          unescape(artikel[idx]["image"]) +
          "' width=150 align=textop border=0>",
      );
      if (artikel[idx]["url"]) writeln("</A>");
      writeln("</TD>");
      writeln("<TD width=10% height=10%>" + FONT);
    } else writeln("<TD width=5% rowspan=3>" + FONT);
    cols += 1;
    e_print_bestell(idx);
    writeln("</FONT></TD>");
    if (artikel[idx]["menge"]) {
      writeln("<TD width=10%>" + FONT);
      cols += 1;
      writeln(
        E_PRINT_HTML_MENGE +
          " &nbsp;<INPUT name='j" +
          idx +
          "' type=text size=4 maxlength=5 onChange='parent.B_setAmount(this," +
          idx +
          " );' ",
      );
      if (bestellt[idx]) writeln("value='" + B_a_daten[idx]["menge"] + "'>");
      else writeln(">");
      writeln("</FONT></TD>");
    }
    writeln("<TD width=15%>" + FONT);
    cols += 1;
    writeln("<B>" + unescape(artikel[idx]["name"]) + "</B>");
    writeln("</FONT></TD>");
    writeln("<TD width=15% align=right>" + FONT);
    if (artikel[idx]["gpreis"])
      writeln(
        E_PRINT_HTML_GPREIS +
          toDM(B_toMWST(artikel[idx]["gpreis"], artikel[idx]["mwst"])) +
          "<BR>" +
          E_PRINT_HTML_PREIS,
      );
    write(toDM(B_toMWST(artikel[idx]["preis"], artikel[idx]["mwst"])));
    writeln("</FONT></TD>");
    if (artikel[idx]["preisa"]) {
      writeln("<TD width=10%>" + FONT);
      cols += 1;
      write(
        E_PRINT_HTML_PREISA +
          " &nbsp;<INPUT type=text name='k" +
          idx +
          "' size=8 maxlength=20 onChange='parent.b_markieren(\"" +
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
function e_printHTML3(idx) {
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
        writeln("<A HREF='" + unescape(artikel[idx]["url"]) + "'>");
      write(
        "<IMG src='" +
          unescape(artikel[idx]["image"]) +
          "' width='" +
          parseInt(T_W * 0.7) +
          "' align=textop border=0>",
      );
      if (artikel[idx]["url"]) writeln("</A>");
      writeln("</TD>");
    }
    writeln("<TD colspan=2>" + FONT + "<B>");
    if (artikel[idx]["url"])
      writeln("<A HREF='" + unescape(artikel[idx]["url"]) + "'>");
    write(unescape(artikel[idx]["name"]));
    if (artikel[idx]["url"]) writeln("</A>");
    writeln("</B></FONT></TD>");
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
    e_print_bestell(idx);
    writeln("</FONT></TD>");
    writeln("<TD align=right>" + FONT);
    if (artikel[idx]["gpreis"])
      writeln(
        E_PRINT_HTML_GPREIS +
          brtmp2 +
          toDM(B_toMWST(artikel[idx]["gpreis"], artikel[idx]["mwst"])) +
          brtmp +
          E_PRINT_HTML_PREIS +
          brtmp2,
      );
    write(toDM(B_toMWST(artikel[idx]["preis"], artikel[idx]["mwst"])));
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
          "<BR><INPUT name='j" +
          idx +
          "' type=text size=4 maxlength=5 onChange='parent.B_setAmount(this," +
          idx +
          " );' ",
      );
      if (bestellt[idx]) writeln("value='" + B_a_daten[idx]["menge"] + "'>");
      else writeln("></TD>");
    }
    if (artikel[idx]["preisa"]) {
      if (artikel[idx]["menge"]) writeln("<TD>");
      else writeln("<TR><TD colspan=2>");
      write(
        FONT +
          E_PRINT_HTML_PREISA +
          "<BR><INPUT type=text name='k" +
          idx +
          "' size=8 maxlength=20 onChange='parent.b_markieren(\"" +
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
function E_leave() {
  if (confirm(E_LEAVE_CONFIRM)) document.location.replace(LAST_HREF);
}
function e_print_kunde() {
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
            "<A HREF='http://" +
              unescape(kunde[i]) +
              "' target='_new'>" +
              unescape(kunde[i]) +
              "</A></FONT></TD></TR>",
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
            "<A HREF='mailto:" +
              unescape(kunde[i]) +
              "'>" +
              unescape(kunde[i]) +
              "</A></TD></TR>",
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
      if (system["payment"][e_payment]["msg"]) {
        writeln("<TR><TD colspan=2>" + FONT_CS);
        writeln(unescape(system["payment"][e_payment]["msg"]) + "</TD></TR>");
      }
      strpay_tmp = unescape(system["payment"][e_payment]["name"]);
      writeln("<INPUT type=hidden name='Pay: " + strpay_tmp + "'>");
      for (pm in paym) {
        p_idx = pm.substring(3, 4);
        writeln("<TR><TD>" + FONT_CS);
        writeln(
          "<INPUT type=hidden name='Pay: " +
            unescape(system["payment"][e_payment][p_idx]) +
            "' value='" +
            unescape(paym[pm]) +
            "'>",
        );
        writeln(
          strpay_tmp +
            ": &nbsp;" +
            unescape(system["payment"][e_payment][p_idx]) +
            "</FONT></TD><TD>" +
            FONT_CS,
        );
        writeln(unescape(paym[pm]) + "</FONT></TD></TR>");
      }
    }
  }
}
function print_summen() {
  var vtmp = 0;
  var utmp = 0;
  var xtmp = 0;
  var ntmp_sum = 0;
  var netto_sum = 0;
  var price = B_auswertung();
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
      if (price < parseInt(system["payment"][e_payment]["limit"])) {
        xtmp = parseInt(system["payment"][e_payment]["value"]);
        price += xtmp;
      }
      n[system["un"]] += xtmp;
      ntmp_sum += xtmp;
      ptp = toDM(xtmp);
      writeln("<TR " + TBG_BN + "><TD>" + FONT_CS);
      writeln(
        "<INPUT type=hidden name='Name_Zahlungs' value='" +
          unescape(system["payment"][e_payment]["name"]) +
          "'>",
      );
      writeln(
        "<INPUT type=hidden name='Zuschlag_Zahlung' value='" + ptp + "'>",
      );
      writeln(
        "+ Zahlungsweise " +
          unescape(system["payment"][e_payment]["name"]) +
          "</FONT></TD><TD align=right>",
      );
      writeln(FONT_CS);
      writeln(ptp + "</FONT></TD></TR>");
    }
    if (AREAS) {
      if (price < parseInt(system["areas"][e_areas]["limit"])) {
        vtmp = parseInt(system["areas"][e_areas]["value"]);
        price += vtmp;
      }
      n[system["un"]] += vtmp;
      ntmp_sum += vtmp;
      atp = toDM(vtmp);
      writeln("<TR " + TBG_BN + "><TD>" + FONT_CS);
      writeln(
        "<INPUT type=hidden name='Name_Gebiet' value='" +
          unescape(system["areas"][e_areas]["name"]) +
          "'>",
      );
      writeln("<INPUT type=hidden name='Zuschlag_Gebiet' value='" + atp + "'>");
      writeln(
        "+ Lieferung nach " +
          unescape(system["areas"][e_areas]["name"]) +
          "</FONT></TD><TD align=right>",
      );
      writeln(FONT_CS);
      writeln(atp + "</FONT></TD></TR>");
    }
    if (FREIGHT) {
      if (price < parseInt(system["freight"][e_freight]["limit"])) {
        utmp = parseInt(system["freight"][e_freight]["value"]);
        price += utmp;
      }
      n[system["un"]] += utmp;
      ntmp_sum += utmp;
      ftp = toDM(utmp);
      writeln("<TR " + TBG_BN + "><TD>" + FONT_CS);
      writeln(
        "<INPUT type=hidden name='Name_Fracht' value='" +
          unescape(system["freight"][e_freight]["name"]) +
          "'>",
      );
      writeln("<INPUT type=hidden name='Zuschlag_Fracht' value='" + ftp + "'>");
      writeln(
        "+ Lieferung durch " +
          unescape(system["freight"][e_freight]["name"]) +
          "</FONT></TD><TD align=right>",
      );
      writeln(FONT_CS);
      writeln(ftp + "</FONT></TD></TR>");
    }
    if (nshow == "netto" || system["nbase"] == "netto") {
      if (n_liefer) {
        mtp = toDM(B_getMWST(ntmp_sum, system["un"]));
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
          netto_sum += B_getMWST(n[m_ix], m_ix);
        }
        netto_sum = price - netto_sum;
      } else netto_sum = price;
      netto_s = toDM(netto_sum);
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
        ntmp = B_getMWST(n[m_idx], m_idx);
        if (system["nbase"] == "netto") price += ntmp;
        n_s = toDM(ntmp);
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
      price_s = toDM(price);
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
      if (system["payment"][e_payment]["eva"]) {
        if (system["payment"][e_payment]["eva"].length)
          eval(unescape(system["payment"][e_payment]["eva"]));
      }
    }
    if (has_price == 0) {
      writeln("<TR><TD colspan=2>" + FONT_CS);
      writeln(E_PRINT_SUMMEN + "</FONT></TD></TR>");
    }
  } // end with
}
function e_goto_artikel(art_hash) {
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
function e_print_order() {
  var pcount = 1;
  n = new Array();
  var mid;
  for (mid in system["mwst"]) {
    n[mid] = 0;
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
    for (Z in bestellt) {
      if (bestellt[Z] && artikel[Z] != null) {
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
            writeln("<A HREF='" + unescape(artikel[Z]["url"]) + "'>");
            writeln(unescape(artikel[Z]["name"]) + "</A>");
          } else {
            writeln(unescape(artikel[Z]["name"]));
          }
        } else {
          writeln("<INPUT type=hidden name='Name' value='Unbenannt'>");
          writeln("Unbennant");
        }
        writeln("</FONT></FONT></TD><TD>" + FONT_CS);
        if (B_a_daten[Z]["page"] == "search")
          writeln("<A HREF='javascript:parent.e_goto_artikel(" + Z + ");'>");
        else
          writeln(
            "<A HREF='javascript:parent.E_go(" + B_a_daten[Z]["page"] + ");'>",
          );
        writeln(E_PRINT_PROD_GOART + "</A>&nbsp;&nbsp;&nbsp;");
        writeln("<A HREF='javascript:parent.B_del(" + Z + ");'>");
        writeln(B_DEL + "</A>");
        writeln("</FONT></TD></TR>");
        if (system["com"] == "on") {
          writeln("<TR><TD colspan=2>" + FONT_CS);
          writeln(
            E_PRINT_PROD_COM +
              "&nbsp;&nbsp;&nbsp;<INPUT type=text name='com" +
              Z +
              "' size=50 ",
          );
          if (B_a_daten[Z]["com"])
            writeln("value='" + unescape(B_a_daten[Z]["com"]) + "' ");
          writeln(" onChange='parent.B_setCom(" + Z + ",this.value);'>");
          writeln("</FONT></TD></TR>");
        }
        if (artikel[Z]["gpreis"]) {
          gpt = toDM(artikel[Z]["gpreis"]);
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
            for (di in B_a_daten[Z]) {
              if (
                !B_a_daten[Z][di] ||
                di == "menge" ||
                di == "com" ||
                di == "page"
              )
                continue;
              fix = di.substring(0, di.indexOf("-", 0));
              if (fix != pf) continue;
              pos1 = di.indexOf("-", 0);
              ha = di.substring(di.indexOf("-", pos1) + 1, di.length);
              f_ar = E_get_feature(Z, fix);
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
                    unescape(B_a_daten[Z][di]) +
                    "' value='" +
                    toDM(f_ar[ha]) +
                    "'>",
                );
                writeln(
                  E_PRINT_PROD_FPREIS +
                    " " +
                    unescape(f_ar["name"]) +
                    " " +
                    unescape(B_a_daten[Z][di]) +
                    "</FONT></TD><TD align=right>",
                );
                writeln(FONT_CS);
                writeln(toDM(f_ar[ha]) + "</FONT></TD></TR>");
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
                    unescape(B_a_daten[Z][di]) +
                    "</FONT></TD><TD>",
                );
                writeln(FONT_CS);
                writeln("&nbsp;</FONT></TD></TR>");
              }
            }
          }
        if (artikel[Z]["preis"] && !has_feature) {
          pda_tmp = parseInt(artikel[Z]["preis"]);
          pt = toDM(artikel[Z]["preis"]);
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
        for (di in B_a_daten[Z]) {
          if (!B_a_daten[Z][di] || di == "menge" || di == "com" || di == "page")
            continue;
          fix = di.substring(0, di.indexOf("-", 0));
          if (fix == pf) continue;
          pos1 = di.indexOf("-", 0);
          ha = di.substring(di.indexOf("-", pos1) + 1, di.length);
          f_ar = E_get_feature(Z, fix);
          if (f_ar[ha]) {
            pda_tmp += parseInt(f_ar[ha]);
            fpr = " " + toDM(f_ar[ha]);
            fpt = E_PRINT_PROD_ADD;
          } else {
            fpr = "&nbsp;";
            fpt = "&nbsp;&nbsp;";
          }
          if (B_a_daten[Z][di] == ha) str = unescape(ha);
          else str = unescape(ha) + " " + unescape(B_a_daten[Z][di]);
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
              toDM(pda_tmp) +
              "'>",
          );
          writeln(
            E_PRINT_PROD_SPREIS + " incl. Features</FONT></TD><TD align=right>",
          );
          writeln(FONT_CS);
          writeln(toDM(pda_tmp) + "</FONT></TD></TR>");
        }
        if (B_a_daten[Z]["menge"] > 1) {
          writeln("<TR><TD>" + FONT_CS);
          writeln(
            "<INPUT type=hidden name='" +
              E_PRINT_PROD_AMOUNT +
              "' value='" +
              unescape(B_a_daten[Z]["menge"]) +
              "'>",
          );
          writeln(E_PRINT_PROD_AMOUNT + "</FONT></TD><TD>");
          writeln(FONT_CS);
          writeln(unescape(B_a_daten[Z]["menge"]) + "</FONT></TD></TR>");
        } else {
          writeln(
            "<INPUT type=hidden name='" + E_PRINT_PROD_AMOUNT + "' value='1'>",
          );
        }
        ppa_tmp = b_product_price(Z);
        if (B_a_daten[Z]["menge"] > 1 || artikel[Z]["gpreis"]) {
          priceprodtmp = toDM(ppa_tmp);
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
        n[artikel[Z]["mwst"]] += ppa_tmp;
        if (n_liefer) {
          if (nshow == "netto" || system["nbase"] == "netto") {
            n_tmp = B_getMWST(ppa_tmp, artikel[Z]["mwst"]);
            writeln("<TR " + TBG_BR + "><TD>" + FONT_CS);
            writeln(
              "<INPUT type=hidden name='MwSt_" +
                system["mwst"][artikel[Z]["mwst"]] +
                "' value='" +
                toDM(n_tmp) +
                "'>",
            );
            writeln(
              E_TAX_S +
                system["mwst"][artikel[Z]["mwst"]] +
                "%</FONT></TD><TD align=right>",
            );
            writeln(FONT_CS);
            writeln(toDM(n_tmp) + "</FONT></TD></TR>");
          }
        }
        if (artikel[Z]["image"] && !MOZZ3 && e_page_state == "basket") {
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
            writeln("<A HREF='" + unescape(artikel[Z]["url"]) + "'>");
            writeln(
              "<IMG src='" +
                unescape(artikel[Z]["image"]) +
                "' border=0 width=150></A>",
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
  print_summen();
}
function E_main() {
  E_init();
  LEFT = false;
  E_go("start");
}
