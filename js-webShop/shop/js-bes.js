function B_init() {
  bestellt = new Array();
  B_a_daten = new Array();
  attrib = new Array();
  kunde = new Array();
  paym = new Array();
  has_price = 1;
  heute = new Date();
  SELECTED_CURRENCY = "base";
  name_des_cookies = "js-webshow-address";
  B_lade_kunden();
}
function B_auswertung() {
  var NETTO = 0;
  for (i in bestellt) {
    if (bestellt[i]) NETTO += b_product_price(i);
  }
  return NETTO;
}
function B_toMWST(amount, mix) {
  if (nshow == "brutto" && system["nbase"] == "netto")
    return parseFloat(amount * system["mwst"][mix]) / 100 + parseFloat(amount);
  else if (nshow == "netto" && system["nbase"] == "brutto")
    return (amount / (100 + parseInt(system["mwst"][mix]))) * 100;
  else return amount;
}
function B_getMWST(amount, mix) {
  if (system["nbase"] == "netto") return (amount * system["mwst"][mix]) / 100;
  else system["nbase"] == "brutto";
  return (
    (amount / (100 + parseInt(system["mwst"][mix]))) *
    parseInt(system["mwst"][mix])
  );
}
function B_set_currency(input_obj) {
  if (!PAYCHANGE) {
    alert(B_SET_CURRENCY_A + E_NAME_DATA);
    LEFT = false;
    E_go("refresh");
  } else {
    SELECTED_CURRENCY = input_obj.options[input_obj.selectedIndex].value;
    E_init_curr();
    E_go("refresh");
  }
}
function B_set_mwstshow(input_obj) {
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
function toDM(zahl) {
  if (SELECTED_CURRENCY == "base") {
    return b_nzahl(zahl) + "&nbsp;" + CURR;
  } else return b_nzahl(toCurr(zahl)) + "&nbsp;" + SELECTED_CURRENCY;
}
function toCurr(zahl) {
  zw = 0;
  if (SELECTED_CURRENCY == "base") {
    zw = zahl;
  } else if (EURO_TO_EURO == "true") {
    zw =
      (zahl * system["ewu"][SELECTED_CURRENCY]["euro"]) /
      system["ewu"][CURR]["euro"];
  } else if (EURO_TO == "true") {
    if (B_isEu(CURR))
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
function b_nzahl(zahl) {
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
function B_isEu(idx) {
  var eu = "false";
  for (i in system["ewu"])
    if (idx == i) {
      eu = "true";
      break;
    }
  return eu;
}
function B_retOpt(fi, ci) {
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
      ret = "> 1 " + CURR + " = " + b_nzahl(zw * 100) + " " + ci;
    } else {
      mt1 = "" + parseInt(zw);
      mt2 = "" + parseInt(system["ewu"][CURR]["euro"]);
      if (mt1.length < mt2.length) my_anz = 1;
      else my_anz = Math.pow(10, mt1.length - mt2.length);
      ct = (my_anz / zw) * parseFloat(system["ewu"][CURR]["euro"]) * 100;
      ret = ">" + b_nzahl(ct) + " " + CURR + " = " + my_anz + " " + ci;
    }
  } else {
    mt1 = "" + parseInt(system["currency"][ci]);
    my_anz = Math.pow(10, mt1.length - 1);
    ct = (my_anz / parseFloat(system["currency"][ci])) * 100;
    ret = ">" + b_nzahl(ct) + " " + CURR + " = " + my_anz + " " + k;
  }
  return ret;
}
function b_focus_name() {
  r.bestellung.nname.focus();
  r.bestellung.nname.select();
  return;
}
function b_focus_field(feld) {
  feld.focus();
  feld.select();
}
function B_enter_payment(i_obj) {
  if (i_obj.value.length) paym[i_obj.name] = i_obj.value;
}
function B_enter_address(input_obj, art) {
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
    } else b_focus_field(input_obj);
    durchgang++;
  }
}
function B_del(Z) {
  bestellt[Z] = false;
  E_go("refresh");
}
function b_toggle_record(Z) {
  if (!bestellt[Z]) b_add_record(Z);
  else b_del_record(Z);
}
function b_add_record(Z) {
  var merkmal = "";
  var tmp = 0;
  bestellt[Z] = true;
  B_a_daten[Z] = new Array();
  B_a_daten[Z]["page"] = e_page_state;
  if (artikel[Z]["menge"] && eval("r.document.right.j" + Z)) {
    eval("tmp = r.document.right.j" + Z + ".value");
    if (tmp.length) B_a_daten[Z]["menge"] = tmp;
    else B_a_daten[Z]["menge"] = 1;
  } else B_a_daten[Z]["menge"] = 1;
  if (artikel[Z]["features"]) {
    feat = artikel[Z]["features"];
    if (feat.length > 0) {
      b_checkFeatures(Z, feat);
    }
  }
  b_markieren(Z);
}
function B_setCom(Z, txt) {
  B_a_daten[Z]["com"] = escape(txt);
}
function b_checkFeatures(Z, feat) {
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
      f_ar = E_get_feature(Z, fe[i]);
      for (ha in f_ar) {
        if (ha == "price" || ha == "name") continue;
        elem = Z + "-" + fe[i] + "-" + ha;
        if (r.document.right.elements[elem])
          B_setFeature(r.document.right.elements[elem], Z);
      }
    } else if (tp == "radio") {
      alert("In arbeit ...");
    } else {
      elem = "el" + Z + "-" + fe[i];
      if (r.document.right.elements[elem])
        B_setFeature(r.document.right.elements[elem], Z);
    }
  }
  for (i in B_a_daten[Z]) {
    if (!B_a_daten[Z][i] || i == "menge" || i == "com" || i == "page") continue;
    pos1 = i.indexOf("-", 0);
    fix = i.substring(pos1, i.indexOf("-", pos1 + 1));
    if (test[system["features"][fix]["name"]])
      test[system["features"][fix]["name"]] = false;
  }
  for (te in test) {
    if (test[te]) missing += unescape(te) + " ";
  }
  if (missing.length != 0) alert(BA_CHECK_FEATURES + "\n" + missing);
}
function b_base_price(Z) {
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
      f_ar = E_get_feature(Z, pf);
      for (ha in f_ar) {
        if (ha == "price" || ha == "name") continue;
        dix = pf + "-" + ha;
        if (B_a_daten[Z][dix] && f_ar[ha]) {
          pt = f_ar[ha];
        }
      }
    }
  }
  if (B_a_daten[Z]["menge"]) price_tmp = B_a_daten[Z]["menge"] * pt;
  else price_tmp = pt;
  if (!isNaN(price_tmp)) price += price_tmp;
  return price;
}
function b_product_price(Z) {
  var price = b_base_price(Z);
  if (artikel[Z]["p_feature"]) {
    pf = artikel[Z]["p_feature"];
  }
  for (di in B_a_daten[Z]) {
    if (!B_a_daten[Z][di] || di == "menge" || di == "com" || di == "page")
      continue;
    fix = di.substring(0, di.indexOf("-", 0));
    if (fix == pf) continue;
    pos1 = di.indexOf("-", 0);
    ha = di.substring(di.indexOf("-", pos1) + 1, di.length);
    f_ar = E_get_feature(Z, fix);
    if (f_ar[ha]) {
      if (B_a_daten[Z]["menge"]) price += B_a_daten[Z]["menge"] * f_ar[ha];
      else price += f_ar[ha];
    }
  }
  return price;
}
function b_del_record(Z) {
  bestellt[Z] = false;
  b_markieren(Z);
}
function b_markieren(Z) {
  var tmp;
  if (bestellt[Z]) tmp = true;
  else tmp = false;
  if (artikel[Z]["typ"] == "img") {
    if (tmp) eval("r.document.img" + Z + ".src = '" + B_B_IMG + "'");
    else eval("r.document.img" + Z + ".src = '" + B_IMG + "'");
  } else if (artikel[Z]["typ"] == "checkbox")
    eval("r.document.right.check" + Z + ".checked = tmp");
  if (B_a_daten[Z]["menge"] && eval("r.document.right.j" + Z) && tmp)
    eval("r.document.right.j" + Z + ".value = B_a_daten[" + Z + "]['menge']");
  B_sumPage();
  return;
}
function B_setFeatureRadio(input_obj, feature_hash, Z, name_radio) {
  input_obj.name = name_radio;
  B_setFeature(input_obj, feature_hash, Z);
}
function B_setFeature(iob, aix) {
  var dix = "";
  if (!bestellt[aix]) {
    return;
  }
  if (iob.type == "checkbox") {
    dix = iob.name.substring(iob.name.indexOf("-", 0) + 1, iob.name.length);
    if (iob.checked)
      B_a_daten[aix][dix] = dix.substring(dix.indexOf("-", 0) + 1, dix.length);
    else B_a_daten[aix][dix] = false;
  } else if (iob.type == "select-one" || iob.type == "select-multiple") {
    if (iob.type == "select-one") st = 1;
    else st = 0;
    for (oi = st; oi < iob.length; oi++) {
      val = iob.options[oi].value;
      if (iob.options[oi].selected)
        B_a_daten[aix][val] = val.substring(
          val.indexOf("-", 0) + 1,
          val.length,
        );
      else B_a_daten[aix][val] = false;
    }
  } else if (iob.type == "text") {
    dix = iob.name.substring(iob.name.indexOf("-", 0) + 1, iob.name.length);
    if (iob.value.length > 0) B_a_daten[aix][dix] = escape(iob.value);
    else B_a_daten[aix][dix] = false;
  } else if (iob.type == "radio") {
    alert("In Arbeit ... ");
  } else alert("Unknown Type of Input!\nType: " + iob.type);
  B_sumPage();
}
function B_setAmount(input_obj, Z) {
  if (input_obj.value.length == 0) input_obj.value = 0;
  if (isNaN(input_obj.value)) return;
  if (!bestellt[Z]) b_add_record(Z);
  if (bestellt[Z]) {
    B_a_daten[Z]["menge"] = parseInt(input_obj.value);
    if (B_a_daten[Z]["menge"] == 0) b_del_record(Z);
  }
  B_sumPage();
}
function B_sumPage() {
  if (e_page_state != "search") {
    if (isNaN(e_page_state)) return;
  }
  var seite_summe = 0;
  var alles_summe = 0;
  var temp = 0;
  for (i in bestellt) {
    temp = 0;
    if (bestellt[i]) {
      temp = Math.round(B_toMWST(b_product_price(i), artikel[i]["mwst"]));
      alles_summe += temp;
      if (artikel[i]["preisa"] && eval("r.document.right.k" + i))
        eval("r.document.right.k" + i + ".value = b_nzahl(toCurr(temp))");
      if (B_a_daten[i]["page"] == e_page_state) seite_summe += temp;
    } else {
      if (artikel[i]["preisa"] && eval("r.document.right.k" + i))
        eval("r.document.right.k" + i + ".value = ''");
    }
  }
  if (e_page_state != "search") {
    if (
      page[e_page_state]["summen"] &&
      r.document.right.summe_1 &&
      r.document.right.summe_2
    ) {
      r.document.right.summe_1.value = b_nzahl(toCurr(seite_summe));
      r.document.right.summe_2.value = b_nzahl(toCurr(alles_summe));
    }
  }
}
function B_delOrder(i_ob) {
  var cn = "";
  if (i_ob.name && i_ob) cn = i_ob.name;
  var expire_date = new Date();
  b_set_cookie(cn, "", expire_date, "/");
  E_go("refresh");
}
function B_getOrder(i_ob) {
  var coo = new Array();
  var cn = "";
  var val = "";
  if (i_ob.name && i_ob) cn = i_ob.name;
  coo = B_get_cookie();
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
    if (bestellt[Z]) {
      if (!confirm(BA_GET_COOKIE_ASK + "\n" + unescape(artikel[Z]["name"])))
        continue;
    } else {
      bestellt[Z] = true;
      B_a_daten[Z] = new Array();
    }
    for (ic in con) {
      hash = con[ic].substring(0, con[ic].indexOf("|"));
      valu = con[ic].substring(con[ic].indexOf("|") + 1, con[ic].length);
      B_a_daten[Z][hash] = valu;
    }
  }
  E_go("refresh");
}
function B_storeOrder() {
  var now = new Date();
  var c_val = "";
  var c_name = "";
  if (!(c_name = prompt(BA_STORE_ORDER_ASK, ""))) return;
  var twelf_months = 12 * 30 * 24 * 60 * 60 * 1000;
  var expire_date = new Date();
  expire_date.setTime(now.getTime() + twelf_months);
  for (Z in bestellt) {
    if (!bestellt[Z]) continue;
    c_val_tmp = Z + "~";
    for (di in B_a_daten[Z])
      if (B_a_daten[Z][di]) {
        c_val_tmp += di + "|" + B_a_daten[Z][di] + "||";
      }
    if (c_name.length + c_val_tmp.length + c_val.length > 4096) {
      alert(BA_STORE_ORDER_LONG + "\n" + unescape(artikel[Z]["name"]));
      continue;
    }
    c_val += c_val_tmp;
    c_val += "~~";
  }
  if (c_val.length) b_set_cookie(c_name, c_val, expire_date, "/");
  E_go("refresh");
}
function B_speichere_kunden() {
  var now = new Date();
  var cookie_val = "";
  var twelf_months = 12 * 30 * 24 * 60 * 60 * 1000;
  var expire_date = new Date();
  expire_date.setTime(now.getTime() + twelf_months);
  if (FREIGHT) {
    if (e_freight != 0) cookie_val += "EF|" + e_freight + "||";
  }
  if (AREAS) {
    if (e_areas != 0) cookie_val += "EA|" + e_areas + "||";
  }
  for (i in kunde) {
    cookie_val += i + "|" + kunde[i] + "||";
    if (cookie_val.length >= 3800) {
      alert(B_SPEICHERE_KUNDEN_MESS1);
      break;
    }
  }
  b_set_cookie(name_des_cookies, cookie_val, expire_date, "/");
  var message = B_SPEICHERE_KUNDEN_MESS2;
  message += B_SPEICHERE_KUNDEN_MESS3;
  message += B_SPEICHERE_KUNDEN_MESS4;
  alert(message);
}
function B_lade_kunden() {
  var coo = new Array();
  coo = B_get_cookie();
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
        if (hash == "EF") e_freight = value;
        else if (hash == "EA") e_areas = value;
        else kunde[hash] = value;
        cookie_val = cookie_val.substring(trennpos2 + 2, cookie_val.length);
      } else test_wert = false;
    }
    return true;
  } else {
    return false;
  }
}
function B_get_cookie(namefield) {
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
function b_set_cookie(namefield, value) {
  var argv = b_set_cookie.arguments;
  var argc = b_set_cookie.arguments.length;
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
