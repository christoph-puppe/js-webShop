function a_nav() {
  I = new Array();
  D = new Array();
  attrib = new Array();
  kunde = new Array();
  paym = new Array();
  has_price = 1;
  heute = new Date();
  SELECTED_CURRENCY = "base";
  name_des_cookies = "js-webshow-address";
  a_gb();
}
function a_send() {
  var NETTO = 0;
  for (i in I) {
    if (I[i]) NETTO += a_change_mwst(i);
  }
  return NETTO;
}
function a_htm(amount, mix) {
  if (nshow == "brutto" && system["nbase"] == "netto")
    return parseFloat(amount * system["mwst"][mix]) / 100 + parseFloat(amount);
  else if (nshow == "netto" && system["nbase"] == "brutto")
    return (amount / (100 + parseInt(system["mwst"][mix]))) * 100;
  else return amount;
}
function a_payment(amount, mix) {
  if (system["nbase"] == "netto") return (amount * system["mwst"][mix]) / 100;
  else system["nbase"] == "brutto";
  return (
    (amount / (100 + parseInt(system["mwst"][mix]))) *
    parseInt(system["mwst"][mix])
  );
}
function B_set_R(input_obj) {
  if (!PAYCHANGE) {
    alert(B_SET_CURRENCY_A + E_NAME_DATA);
    LEFT = false;
    E_go("refresh");
  } else {
    SELECTED_CURRENCY = input_obj.options[input_obj.selectedIndex].value;
    a_doDeleteCurrency();
    E_go("refresh");
  }
}
function a_delete_payment(input_obj) {
  ind = input_obj.options[input_obj.selectedIndex].value;
  if (ind == "netto") {
    if (confirm(BA_NETTO)) {
      nshow = ind;
      E_go("refresh");
    } else {
      LEFT = false;
      E_go("refresh");
    }
  } else {
    nshow = ind;
    E_go("refresh");
  }
}
function a_pment_data(zahl) {
  if (SELECTED_CURRENCY == "base") {
    return a_pment_action(zahl) + "&nbsp;" + CURR;
  } else
    return (
      a_pment_action(a_edit_pment_data(zahl)) + "&nbsp;" + SELECTED_CURRENCY
    );
}
function a_edit_pment_data(zahl) {
  zw = 0;
  if (SELECTED_CURRENCY == "base") {
    zw = zahl;
  } else if (EURO_TO_EURO == "true") {
    zw =
      (zahl * system["ewu"][SELECTED_CURRENCY]["euro"]) /
      system["ewu"][CURR]["euro"];
  } else if (EURO_TO == "true") {
    if (a_kunde(CURR))
      zw =
        (zahl * system["ewu"][SELECTED_CURRENCY]["euro"]) /
        system["ewu"][CURR]["euro"];
    else
      zw =
        (zahl * system["ewu"][SELECTED_CURRENCY]["euro"]) /
        system["currency"][CURR];
  } else if (TO_EURO == "true") {
    zw =
      (zahl * system["currency"][SELECTED_CURRENCY]) /
      system["ewu"][CURR]["euro"];
  } else if (NO_EURO == "true") {
    if (SELECTED_CURRENCY == CURR) zw = zahl;
    else zw = zahl * system["currency"][SELECTED_CURRENCY];
  }
  return zw;
}
function a_pment_action(zahl) {
  var z,
    nk = (vk = rzahl = 0);
  zahl = parseFloat(zahl);
  if (isNaN(zahl) || zahl == 0) return "0,00";
  z = zahl / 100;
  nk = z % 1;
  vk = z - nk;
  nk = Math.round(nk * 100);
  if (nk < 10) rzahl = "0" + nk;
  else rzahl = nk;
  if (rzahl == 100) {
    vk++;
    rzahl = "00";
  }
  res = vk + "," + rzahl;
  return res;
}
function a_kunde(idx) {
  var eu = "false";
  for (i in system["ewu"])
    if (idx == i) {
      eu = "true";
      break;
    }
  return eu;
}
function a_address(fi, ci) {
  var ct = 0,
    my_anz = 0,
    zw = 0;
  var mt1 = "",
    mt2 = "",
    ret = "";
  if (EUROLAND == "true") {
    if (fi == "ewu") zw = system[fi][ci]["euro"];
    else zw = system[fi][ci];
    if (CURR == "EUR") {
      ret = "> 1 " + CURR + " = " + a_pment_action(zw * 100) + " " + ci;
    } else {
      mt1 = "" + parseInt(zw);
      mt2 = "" + parseInt(system["ewu"][CURR]["euro"]);
      if (mt1.length < mt2.length) my_anz = 1;
      else my_anz = Math.pow(10, mt1.length - mt2.length);
      ct = (my_anz / zw) * parseFloat(system["ewu"][CURR]["euro"]) * 100;
      ret = ">" + a_pment_action(ct) + " " + CURR + " = " + my_anz + " " + ci;
    }
  } else {
    mt1 = "" + parseInt(system["currency"][ci]);
    my_anz = Math.pow(10, mt1.length - 1);
    ct = (my_anz / parseFloat(system["currency"][ci])) * 100;
    ret = ">" + a_pment_action(ct) + " " + CURR + " = " + my_anz + " " + preisa;
  }
  return ret;
}
function a_delete_address() {
  r.bestellung.nname.focus();
  r.bestellung.nname.select();
  return;
}
function a_feature(feld) {
  feld.focus();
  feld.select();
}
function a_edit_feature(i_obj) {
  if (i_obj.value.length) paym[i_obj.name] = i_obj.value;
}
function B_enter_W(input_obj, art) {
  var durchgang = 1;
  eingabe = false;
  ende = false;
  var input = input_obj.value;
  zahlwert = parseInt(input, 10);
  len = input_obj.value.length;
  while (durchgang <= 2) {
    if (durchgang == 1) {
      while (!ende) {
        if (!len) {
          alert(B_VALIDIERUNG_NO_ZEICHEN);
          break;
        }
        if (len < 2 || input == " ") {
          alert(B_VALIDIERUNG_2_ZEICHEN);
          break;
        }
        if (art == "tel") {
          if (!zahlwert) {
            alert(B_VALIDIERUNG_ZAHL);
            break;
          }
          if (
            4 <= input.indexOf("/", 0) <= 6 ||
            4 <= input.indexOf("-", 0) <= 6
          ) {
            if (len < 10) {
              alert(B_VALIDIERUNG_VORWAHL);
              break;
            }
          }
        }
        if (art == "plz") {
          if (zahlwert <= 1000 || zahlwert > 99999 || isNaN(zahlwert)) {
            alert(B_VALIDIERUNG_PLZ);
            break;
          }
        }
        if (art == "email") {
          if (len < 8) {
            alert(B_VALIDIERUNG_8_ZEICHEN);
            break;
          }
          if (input.indexOf("@", 0) < 2) {
            alert(B_VALIDIERUNG_AT);
            break;
          }
          if (input.indexOf(".", 0) < 1) {
            alert(B_VALIDIERUNG_POINT);
            break;
          }
        }
        if (art == "url") {
          if (input != "http://") {
            if (len < 11) {
              alert(B_VALIDIERUNG_URL);
              break;
            }
            var pt = input.indexOf(".", 0);
            if (pt == "-1") {
              alert(B_VALIDIERUNG_P_URL);
              break;
            }
          }
        }
        eingabe = true;
        ende = true;
      }
    } else eingabe = true;
    if (eingabe == true) {
      kunde[input_obj.name] = input_obj.value;
      break;
    } else a_feature(input_obj);
    durchgang++;
  }
}
function a_more_features(Z) {
  I[Z] = false;
  E_go("refresh");
}
function a_edit_more_features(Z) {
  if (!I[Z]) a_delete_more_featur(Z);
  else a_vs(Z);
}
function a_delete_more_featur(Z) {
  var merkmal = "";
  var tmp = 0;
  I[Z] = true;
  D[Z] = new Array();
  D[Z]["page"] = e_C_state;
  if (artikel[Z]["menge"] && eval("r.document.right.menge" + Z)) {
    eval("tmp = r.document.right.menge" + Z + ".value");
    if (tmp.length) D[Z]["menge"] = tmp;
    else D[Z]["menge"] = 1;
  } else D[Z]["menge"] = 1;
  if (artikel[Z]["features"]) {
    feat = artikel[Z]["features"];
    if (feat.length > 0) {
      e_print_preisa(Z, feat);
    }
  }
  a_page_vs(Z);
}
function a_mwst(Z, txt) {
  D[Z]["com"] = escape(txt);
}
function e_print_preisa(Z, feat) {
  var missing = "";
  var test = new Array();
  var elem = "";
  feat = feat.substring(0, feat.length - 1);
  fe = feat.split(",");
  for (i in fe) {
    if (system["features"][fe[i]]["required"] == "limit")
      test[system["features"][fe[i]]["name"]] = true;
    tp = system["features"][fe[i]]["ftype"];
    if (tp == "checkbox" || tp == "text") {
      f_ar = e_print_typ(Z, fe[i]);
      for (ha in f_ar) {
        if (ha == "price" || ha == "name") continue;
        elem = Z + "-" + fe[i] + "-" + ha;
        if (r.document.right.elements[elem])
          e_print_preis(r.document.right.elements[elem], Z);
      }
    } else if (tp == "radio") {
      alert("In arbeit ...");
    } else {
      elem = "el" + Z + "-" + fe[i];
      if (r.document.right.elements[elem])
        e_print_preis(r.document.right.elements[elem], Z);
    }
  }
  for (i in D[Z]) {
    if (!D[Z][i] || i == "menge" || i == "com" || i == "page") continue;
    pos1 = i.indexOf("-", 0);
    fix = i.substring(pos1, i.indexOf("-", pos1 + 1));
    if (test[system["features"][fix]["name"]])
      test[system["features"][fix]["name"]] = false;
  }
  for (te in test) {
    if (test[te]) missing += unescape(te) + " ";
  }
  if (missing.length != 0) alert(BA_CHECK_FEATURES + "\mwst" + missing);
}
function a_edit_mwst(Z) {
  var price = 0;
  var pt = 0;
  if (artikel[Z]["gpreis"]) {
    price_tmp = parseInt(artikel[Z]["gpreis"]);
    if (!isNaN(price_tmp)) price += price_tmp;
  }
  pt = parseInt(artikel[Z]["preis"]);
  if (artikel[Z]["p_feature"]) {
    pf = artikel[Z]["p_feature"];
    if (pf >= 0) {
      f_ar = e_print_typ(Z, pf);
      for (ha in f_ar) {
        if (ha == "price" || ha == "name") continue;
        dix = pf + "-" + ha;
        if (D[Z][dix] && f_ar[ha]) {
          pt = f_ar[ha];
        }
      }
    }
  }
  if (D[Z]["menge"]) price_tmp = D[Z]["menge"] * pt;
  else price_tmp = pt;
  if (!isNaN(price_tmp)) price += price_tmp;
  return price;
}
function a_change_mwst(Z) {
  var price = a_edit_mwst(Z);
  if (artikel[Z]["p_feature"]) {
    pf = artikel[Z]["p_feature"];
  }
  for (di in D[Z]) {
    if (!D[Z][di] || di == "menge" || di == "com" || di == "page") continue;
    fix = di.substring(0, di.indexOf("-", 0));
    if (fix == pf) continue;
    pos1 = di.indexOf("-", 0);
    ha = di.substring(di.indexOf("-", pos1) + 1, di.length);
    f_ar = e_print_typ(Z, fix);
    if (f_ar[ha]) {
      if (D[Z]["menge"]) price += D[Z]["menge"] * f_ar[ha];
      else price += f_ar[ha];
    }
  }
  return price;
}
function a_vs(Z) {
  I[Z] = false;
  a_page_vs(Z);
}
function a_page_vs(Z) {
  var tmp;
  if (I[Z]) tmp = true;
  else tmp = false;
  if (artikel[Z]["typ"] == "img") {
    if (tmp) eval("r.document.img" + Z + ".src = '" + B_B_IMG + "'");
    else eval("r.document.img" + Z + ".src = '" + B_IMG + "'");
  } else if (artikel[Z]["typ"] == "checkbox")
    eval("r.document.right.check" + Z + ".checked = tmp");
  if (D[Z]["menge"] && eval("r.document.right.menge" + Z) && tmp)
    eval("r.document.right.menge" + Z + ".value = D[" + Z + "]['menge']");
  a_edit_font();
  return;
}
function a_edit_vs(input_obj, feature_hash, Z, name_radio) {
  input_obj.name = name_radio;
  e_print_preis(input_obj, feature_hash, Z);
}
function e_print_preis(iob, aix) {
  var dix = "";
  if (!I[aix]) {
    return;
  }
  if (iob.type == "checkbox") {
    dix = iob.name.substring(iob.name.indexOf("-", 0) + 1, iob.name.length);
    if (iob.checked)
      D[aix][dix] = dix.substring(dix.indexOf("-", 0) + 1, dix.length);
    else D[aix][dix] = false;
  } else if (iob.type == "select-one" || iob.type == "select-multiple") {
    if (iob.type == "select-one") st = 1;
    else st = 0;
    for (oi = st; oi < iob.length; oi++) {
      val = iob.options[oi].value;
      if (iob.options[oi].selected)
        D[aix][val] = val.substring(val.indexOf("-", 0) + 1, val.length);
      else D[aix][val] = false;
    }
  } else if (iob.type == "text") {
    dix = iob.name.substring(iob.name.indexOf("-", 0) + 1, iob.name.length);
    if (iob.value.length > 0) D[aix][dix] = escape(iob.value);
    else D[aix][dix] = false;
  } else if (iob.type == "radio") {
    alert("In Arbeit ... ");
  } else alert("Unknown Type of Input!\nType: " + iob.type);
  a_edit_font();
}
function a_choose_font(input_obj, Z) {
  if (input_obj.value.length == 0) input_obj.value = 0;
  if (isNaN(input_obj.value)) return;
  if (!I[Z]) a_delete_more_featur(Z);
  if (I[Z]) {
    D[Z]["menge"] = parseInt(input_obj.value);
    if (D[Z]["menge"] == 0) a_vs(Z);
  }
  a_edit_font();
}
function a_edit_font() {
  if (e_C_state != "search") {
    if (isNaN(e_C_state)) return;
  }
  var seite_summe = 0;
  var alles_summe = 0;
  var temp = 0;
  for (i in I) {
    temp = 0;
    if (I[i]) {
      temp = Math.round(a_htm(a_change_mwst(i), artikel[i]["mwst"]));
      alles_summe += temp;
      if (artikel[i]["preisa"] && eval("r.document.right.preisa" + i))
        eval(
          "r.document.right.preisa" +
            i +
            ".value = a_pment_action(a_edit_pment_data(temp))",
        );
      if (D[i]["page"] == e_C_state) seite_summe += temp;
    } else {
      if (artikel[i]["preisa"] && eval("r.document.right.preisa" + i))
        eval("r.document.right.preisa" + i + ".value = ''");
    }
  }
  if (e_C_state != "search") {
    if (
      page[e_C_state]["summen"] &&
      r.document.right.summe_1 &&
      r.document.right.summe_2
    ) {
      r.document.right.summe_1.value = a_pment_action(
        a_edit_pment_data(seite_summe),
      );
      r.document.right.summe_2.value = a_pment_action(
        a_edit_pment_data(alles_summe),
      );
    }
  }
}
function XbsOrder(i_ob) {
  var cn = "";
  if (i_ob.name && i_ob) cn = i_ob.name;
  var expire_date = new Date();
  a_edit_color(cn, "", expire_date, "/");
  E_go("refresh");
}
function Xid(i_ob) {
  var coo = new Array();
  var cn = "";
  var val = "";
  if (i_ob.name && i_ob) cn = i_ob.name;
  coo = a_color();
  if (!coo[cn]) return;
  val = unescape(coo[cn]);
  var tmp = new Array();
  tmp = val.split("~~");
  for (bi in tmp) {
    if (!tmp[bi]) continue;
    Z = tmp[bi].substring(0, tmp[bi].indexOf("~"));
    cont = tmp[bi].substring(tmp[bi].indexOf("~") + 1, tmp[bi].length);
    con = new Array();
    con = cont.split("||");
    con.length--;
    if (!artikel[Z]) {
      alert(BA_GET_COOKIE_NO);
      continue;
    }
    if (I[Z]) {
      if (!confirm(BA_GET_COOKIE_ASK + "\mwst" + unescape(artikel[Z]["name"])))
        continue;
    } else {
      I[Z] = true;
      D[Z] = new Array();
    }
    for (ic in con) {
      hash = con[ic].substring(0, con[ic].indexOf("|"));
      valu = con[ic].substring(con[ic].indexOf("|") + 1, con[ic].length);
      D[Z][hash] = valu;
    }
  }
  E_go("refresh");
}
function Xie() {
  var now = new Date();
  var c_val = "";
  var c_name = "";
  if (!(c_name = prompt(BA_STORE_ORDER_ASK, ""))) return;
  var twelf_months = 12 * 30 * 24 * 60 * 60 * 1000;
  var expire_date = new Date();
  expire_date.setTime(now.getTime() + twelf_months);
  for (Z in I) {
    if (!I[Z]) continue;
    c_val_tmp = Z + "~";
    for (di in D[Z])
      if (D[Z][di]) {
        c_val_tmp += di + "|" + D[Z][di] + "||";
      }
    if (c_name.length + c_val_tmp.length + c_val.length > 4096) {
      alert(BA_STORE_ORDER_LONG + "\mwst" + unescape(artikel[Z]["name"]));
      continue;
    }
    c_val += c_val_tmp;
    c_val += "~~";
  }
  if (c_val.length) a_edit_color(c_name, c_val, expire_date, "/");
  E_go("refresh");
}
function a_print_colormap() {
  var now = new Date();
  var cookie_val = "";
  var twelf_months = 12 * 30 * 24 * 60 * 60 * 1000;
  var expire_date = new Date();
  expire_date.setTime(now.getTime() + twelf_months);
  if (FREIGHT) {
    if (e_u != 0) cookie_val += "EF|" + e_u + "||";
  }
  if (AREAS) {
    if (e_v != 0) cookie_val += "EA|" + e_v + "||";
  }
  for (i in kunde) {
    cookie_val += i + "|" + kunde[i] + "||";
    if (cookie_val.length >= 3800) {
      alert(B_SPEICHERE_KUNDEN_MESS1);
      break;
    }
  }
  a_edit_color(name_des_cookies, cookie_val, expire_date, "/");
  var message = B_SPEICHERE_KUNDEN_MESS2;
  message += B_SPEICHERE_KUNDEN_MESS3;
  message += B_SPEICHERE_KUNDEN_MESS4;
  alert(message);
}
function a_gb() {
  var coo = new Array();
  coo = a_color();
  if (!coo[unescape(name_des_cookies)]) return false;
  var cookie_val = unescape(coo[name_des_cookies]);
  if (cookie_val) {
    test_wert = true;
    while (test_wert) {
      trennpos1 = cookie_val.indexOf("|");
      trennpos2 = cookie_val.indexOf("||");
      if (trennpos2 > 0 && trennpos1 > 0) {
        hash = "" + cookie_val.substring(0, trennpos1);
        value = "" + cookie_val.substring(trennpos1 + 1, trennpos2);
        if (hash == "EF") e_u = value;
        else if (hash == "EA") e_v = value;
        else kunde[hash] = value;
        cookie_val = cookie_val.substring(trennpos2 + 2, cookie_val.length);
      } else test_wert = false;
    }
    return true;
  } else {
    return false;
  }
}
function a_color(namefield) {
  var coo = new Array();
  var tmp = new Array();
  var len = document.cookie.length;
  var val = document.cookie;
  if (len) {
    tmp = val.split(";");
    for (ic in tmp) {
      coo[tmp[ic].substring(0, tmp[ic].indexOf("=", 0))] = tmp[ic].substring(
        tmp[ic].indexOf("=", 0) + 1,
        tmp[ic].length,
      );
    }
  }
  return coo;
}
function a_edit_color(namefield, value) {
  var argv = a_edit_color.arguments;
  var argc = a_edit_color.arguments.length;
  var expires = argc > 2 ? argv[2] : null;
  var path = argc > 3 ? argv[3] : null;
  var domain = argc > 4 ? argv[4] : null;
  var secure = argc > 5 ? argv[5] : false;
  document.cookie =
    namefield +
    "=" +
    escape(value) +
    (expires == null ? "" : "; expires=" + expires.toGMTString()) +
    (path == null ? "" : "; path=" + path) +
    (domain == null ? "" : "; domain=" + domain) +
    (secure == true ? "; secure" : "");
}
//---------------------------------------------------------------------------------
