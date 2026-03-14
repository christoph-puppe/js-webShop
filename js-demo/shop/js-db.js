//- -- Copyright 1998 / 1999 iConnect.de --
//- -- Contact pluto@iconnect.de --
//- -- coAuthor kdoberstein@js-webShop.de --
var artikel = new Array();
var features = new Array();
var page = new Array();
page[0] = new Array();
page[0]["name"] = "js-webShop";
page[0]["top_text"] =
  "Sie%20d%26uuml%3Brfen%20diesen%20Shop%20frei%20und%20ohne%20Lizenzgeb%26uuml%3Bhr%20benutzen%21%3Cbr%3EDie%20einzige%20Einschr%26auml%3Bnkung%20%3Cu%3Edieser%3C/freight%3E%20Version%20besteht%20in%20der%20Limitierung%20auf%2010%20Artikel.%3Cbr%3E%0D%0ASie%20d%26uuml%3Brfen%20mit%20diesem%20Shop%20auch%20Geld%20verdienen%21%20%20%3B-%29%20%3Cbr%3EWerden%20Sie%20einfach%20Wiederverk%26auml%3Bufer%20des%20%3Cimg%20src%3D%22logo1.gif%22%20align%3D%22absmiddle%22%3E%21%3Cbr%3E%0D%0AMehr%20dazu%20erfahren%20Sie%20beim%20Klick%20auf%20%3Ca%20href%3D%22jsff.htm%22%3E%3Cb%3E%3Cu%3Ejs-webShop%3C/b%3E%3C/freight%3E%3C/a%3E.%20";
page[0]["summen"] = "true";
page[0]["artikel"] = "2,";
page[1] = new Array();
page[1]["name"] = "Zum%20Lesen";
page[1]["top_text"] =
  "Die%20Autoren%20Ingrid%20E.%20Endesfelder%20und%20Dr.%20Klaus%20H.Meier%20bereichern%20seit%0D%0A%20%20%201995%20den%20Buchmarkt%20nicht%20nur%20f%26uuml%3Br%20Sammler%20und%20Liebhaber%20von%20Teddies%2C%0D%0A%20%20%20Puppen%20und%20anderem%20sch%26ouml%3Bnen%20Spielzeug%2C%20sondern%20tragen%20mit%20Ihren%20Arbeiten%0D%0A%20%20%20zur%20Vergr%26ouml%3B%26szlig%3Berung%20der%20Gemeinde%20derselben%20bei%3A%20Ihre%20au%26szlig%3Berordentlich%0D%0A%20%20%20gr%26uuml%3Bndlich%20recherchierten%20B%26uuml%3Bcher%20mit%20vielen%20Beitr%26auml%3Bgen%20%26uuml%3Bber%20die%20Sch%26ouml%3Bpfer%20der%0D%0A%20%20%20sch%26ouml%3Bnsten%20und%20wertvollsten%20Modelle%2C%20%26uuml%3Bber%20die%20Geschichte%20des%20Genres%2C%20mit%0D%0A%20%20%20vielen%20Literaturverweisen%20und%20nicht%20zuletzt%20mit%20Ihrer%20liebevollen%20Erz%26auml%3Bhlweise%0D%0A%20%20%20sind%20bereits%20ein%20Begriff%20in%20der%20Szene%20der%20Kenner%20geworden.%20Da%20erfreut%20es%0D%0A%20%20%20das%20Sammlerherz%20um%20so%20mehr%2C%20da%26szlig%3B%20sie%20nun%20die%20Reihe%20Spielzeugland%202000%0D%0A%20%20%20auflegen%20konnten.%20Mit%20Freude%20bieten%20wir%20Ihnen%20hier%20die%20M%26ouml%3Bglichkeit%2C%20alle%20ihre%0D%0A%20%20%20B%26uuml%3Bcher%20online%20zu%20bestellen.%20Klicken%20Sie%20auf%20das%20Bild%21";
page[1]["summen"] = "true";
page[1]["navgif"] = "pferd.gif";
page[1]["navgifs"] = "pferdr.gif";
page[1]["artikel"] = "0,1,4,";
page[2] = new Array();
page[2]["name"] = "Zum%20Anfassen";
page[2]["top_text"] =
  "Holz%20und%20Pl%FCsch%20sind%20zwei%20Materialien%2C%20die%20in%20unserer%20urbanisierten%20Welt%20noch%20elementare%20sinnliche%20Erfahrungen%20f%FCr%20Gro%DF%20und%20Klein%20erlebbar%20machen.%3Cbr%3E";
page[2]["summen"] = "true";
page[2]["artikel"] = "5,7,8,";
page[3] = new Array();
page[3]["name"] = "PC";
page[3]["top_text"] =
  "Diese%20Seite%20ist%20mehr%20als%20DEMO-Seite%20gedacht.%20Preise%20und%20Verf%26uuml%3Bgbarkeit%20%26auml%3Bndern%20sich%20so%20schnell%2C%20da%26szlig%3B%20ein%20Offline-Shop%20sehr%20schnell%20veraltet.%20Aber%20wir%20wollen%20ja%20zeigen%2C%20was%20dieser%20Shop%20so%20alles%20kann.";
page[3]["summen"] = "true";
page[3]["artikel"] = "3,";
page[4] = new Array();
page[4]["name"] = "Mode";
page[4]["top_text"] =
  "Diese%20Seite%20zeigt%20die%20Einbindung%20von%20Produktmerkmalen.";
page[4]["summen"] = "true";
page[4]["artikel"] = "6,";
page[5] = new Array();
page[5]["name"] = "Internet-%3Cbr%3Edomains";
page[5]["top_text"] =
  "Die%20Welt%20wurde%20zum%20globalen%20Dorf.%20Das%20Internet%20ist%20keine%20Angelegenheit%20der%20Zukunft%2C%20sondern%20existiert%20seit%20zwei%20Dutzend%20Jahren.%20In%20Deutschland%20wurde%20viel%20verschlafen%2C%20aber%20jetzt%20wird%20mit%20Nachdruck%20aufgeholt%3A%20Wer%20keinen%20Zugang%20hat%2C%20dieses%20Mittel%20nicht%20nutzt%2C%20entbehrt%20zunehmend%20Informationen%2C%20kulturelle%20Werte%20und%20Chancen%20f%26uuml%3Br%20sein%20Einkommen.%20F%26uuml%3Br%20Unternehmer%20gilt%3A%3Cbr%3E%3Cb%3E%0D%0AIhre%20Ums%26auml%3Btze%20finden%20zunehmend%20im%20Internet%20statt.%20Mit%20Ihnen%20oder%20ohne%20Sie.%3C/b%3E%3Cp%3E%0D%0APreiswerte%20und%20leistungsf%26auml%3Bhige%20Angebote%20f%26uuml%3Br%20Zugang%20und%20aktive%20Teilnahme%20sind%20notwendig%20und%20vorhanden.%20Zahlungsweise%20f%26uuml%3Br%20PowerWeb%20ist%20halbj%26auml%3Bhrlich%2C%20f%26uuml%3Br%20Premium%20quartalsweise.%20Klicken%20Sie%20auf%20das%20blaue%20%3Cb%3EIhre%20Internet--Domain%3C/b%3E%20f%26uuml%3Br%20mehr%20Informationen.%20Hier%20ein%20Teil%20meiner%20besten%20Angebote%3A";
page[5]["summen"] = "true";
page[5]["artikel"] = "9,";
artikel[1] = new Array();
artikel[1]["htmltyp"] = "2";
artikel[1]["typ"] = "txt";
artikel[1]["preisa"] = "true";
artikel[1]["name"] = "Lieblinge%20f%26uuml%3Brs%20Leben";
artikel[1]["titel"] = "Teddys%2C%20Puppen%2C%20Sammlertr%26auml%3Bume";
artikel[1]["image"] = "thnlfl.jpg";
artikel[1]["desc"] =
  "von%20Ingrid%20E.%20Endesfelder%20und%20Dr.%20Klaus%20H.Meier%3Cbr%3E%0D%0AVerlag%20R%26uuml%3Btten%20und%20Loening%2C%20Berlin%201996%3Cbr%3E%0D%0AISBN%203-352-00607-5%20";
artikel[1]["url"] = "lfl.htm";
artikel[1]["preis"] = "4990";
artikel[1]["mwst"] = "0";
artikel[1]["p_feature"] = "-1";
artikel[4] = new Array();
artikel[4]["htmltyp"] = "2";
artikel[4]["typ"] = "txt";
artikel[4]["preisa"] = "true";
artikel[4]["name"] = "Puppen-Teddys-Fantasy";
artikel[4]["titel"] = "Spielzeugland%202000%20%20%20Band%201";
artikel[4]["image"] = "thsl2000.jpg";
artikel[4]["desc"] =
  "Ingrid%20E.%20Endesfelder%20und%20Dr.%20Klaus%20H.%20Meier%3Cbr%3E%0D%0ADietz%20Verlag%20Berlin%20GmbH%2C%201998%3Cbr%3E%0D%0AISBN%20%203-320-01989-9";
artikel[4]["url"] = "sl2000.htm";
artikel[4]["preis"] = "3990";
artikel[4]["mwst"] = "0";
artikel[4]["p_feature"] = "-1";
artikel[2] = new Array();
artikel[2]["htmltyp"] = "1";
artikel[2]["typ"] = "checkbox";
artikel[2]["preisa"] = "true";
artikel[2]["name"] = "js-webShop";
artikel[2]["titel"] = "Die%20eCommerce-L%26ouml%3Bsung%21";
artikel[2]["desc"] =
  "%3CH2%3Ejs-webShop%3C/H2%3E%0D%0A%3Cul%3E%0D%0A%3Cli%3EDieses%20Online%20Shopping%20System%20ist%20%3Cb%3Einternetional%3C/b%3E.%20Sie%20legen%20W%26auml%3Bhrungen%2C%20Zahlungsweisen%2C%20Versandarten%20und%20Liefergebiete%20sowie%20Zuschl%26auml%3Bge%20und%20zuschlagsbefreiende%20Umsatzlimits%20fest.%20%3Cbr%3EIhre%20Kunden%20w%26auml%3Bhlen.%3C/li%3E%0D%0A%3Cli%3E%20Legen%20Sie%20die%20Umrechnungskurse%20f%26uuml%3Br%20NonEG%20fest%2C%20aktivieren%20Sie%20die%20%3Cb%3EEURO-Automatik%3C/b%3E%2C%20die%20alle%20Preise%20gem%26auml%3B%26szlig%3B%20den%20gesetzlichen%20Anforderungen%20in%20der%20EWU%20umrechnet.%3C/li%3E%0D%0A%3Cli%3EDie%20n%26auml%3Bchste%20Mehrwertsteuer-Senkung%20%3B-%29%20kann%20kommen%3A%20Sie%20brauchen%20kein%20update%20zu%20kaufen.%20Wenn%20Sie%20wollen%2C%20k%26ouml%3Bnnen%20Ihre%20Kunden%20zwischen%20Brutto%20und%20Netto%20umschalten.%3C/li%3E%0D%0A%3Cli%3ESie%20bestimmen%2C%20welche%20Kundendaten%20Sie%20erfragen.%3C/li%3E%0D%0A%3C/ul%3E";
artikel[2]["url"] = "jsff.htm";
artikel[2]["preis"] = "45148";
artikel[2]["mwst"] = "0";
artikel[2]["features"] = "1,";
artikel[2]["p_feature"] = "-1";
artikel[2]["1"] =
  "%20%201%20Lizenz%20%28Endkunde%29%2C0%7C%20%205%20Lizenzen%20%28Reseller%29%2C112870%7C10%20Lizenzen%20%28Reseller%29%2C248314%7C";
artikel[3] = new Array();
artikel[3]["htmltyp"] = "2";
artikel[3]["typ"] = "txt";
artikel[3]["preisa"] = "true";
artikel[3]["name"] = "Ihr%20Wunsch-PC";
artikel[3]["titel"] =
  "AMD-K6-2%20450MHz%2C%2064%20MB%20RAM%2C%208%20GB%20HDD%2C%20";
artikel[3]["image"] = "pc.gif";
artikel[3]["desc"] =
  "%3Cul%3E%3Cli%3E%2040xCDROM%2C%20%3Cli%3E1%2C44%20MB%20Floppy%2C%3Cli%3E%208%20MB%20Hercules%20Terminator%20Grafikkarte%2C%20%3Cli%3ESoundblaster%2064%20Value%20PCI%2C%3Cli%3E%20Miditower%2C%20%3Cli%3ETastatur%2C%3Cli%3E%20Maus";
artikel[3]["preis"] = "139900";
artikel[3]["mwst"] = "0";
artikel[3]["features"] = "2,3,";
artikel[3]["p_feature"] = "-1";
artikel[3]["2"] = "6000%7E12000%7E";
artikel[3]["3"] = "14000%7E35000%7E48900%7E";
artikel[3]["4"] = "10000%7E15000%7E25000%7E";
artikel[0] = new Array();
artikel[0]["htmltyp"] = "2";
artikel[0]["typ"] = "txt";
artikel[0]["preisa"] = "true";
artikel[0]["name"] = "Puppen%2C%20Pl%26uuml%3Bsch%20und%20Teddyb%26auml%3Bren";
artikel[0]["titel"] = "Die%20Kuscheltiere%20der%20Erwachsenen%20";
artikel[0]["image"] = "thnppt.jpg";
artikel[0]["desc"] =
  "von%20Ingrid%20E.%20Endesfelder%20und%20Dr.%20Klaus%20H.Meier%3Cbr%3E%0D%0AVerlag%20R%26uuml%3Btten%20und%20Loening%2C%20Berlin%201995%3Cbr%3E%0D%0AISBN%20%203-352-00604-0";
artikel[0]["url"] = "ppt.htm";
artikel[0]["preis"] = "4800";
artikel[0]["mwst"] = "0";
artikel[0]["p_feature"] = "-1";
artikel[5] = new Array();
artikel[5]["htmltyp"] = "3";
artikel[5]["typ"] = "img";
artikel[5]["menge"] = "true";
artikel[5]["preisa"] = "true";
artikel[5]["name"] = "Schachtisch";
artikel[5]["titel"] = "mit%20gro%26szlig%3Ben%20Figuren";
artikel[5]["image"] = "7700.jpg";
artikel[5]["desc"] =
  "Edles%20Handwerk%3A%20Holztisch%20mit%20gro%26szlig%3Ben%20Figuren%3Cbr%3E%20%0D%0ATischma%26szlig%3Be%3A%3Cbr%3E%20%20%20730*%20730*%20855%20mm%3Cbr%3E%0D%0AK%26ouml%3Bnigsh%26ouml%3Bhe%3A%20170%20mm%20%3Cbr%3E%20Mehr%3A%20%20%3Ca%20href%3D%22http%3A//lanlu-pin.com%22%20target%3D%22_new%22%3Ehttp%3A//lanlu-pin.com%3C/a%3E";
artikel[5]["preis"] = "39900";
artikel[5]["mwst"] = "0";
artikel[5]["p_feature"] = "-1";
artikel[7] = new Array();
artikel[7]["htmltyp"] = "3";
artikel[7]["typ"] = "img";
artikel[7]["menge"] = "true";
artikel[7]["preisa"] = "true";
artikel[7]["name"] = "address%26uuml%3Brfelbrett";
artikel[7]["titel"] = "220%20mm%20Durchmesser%2C%2030%20mm%20hoch";
artikel[7]["image"] = "rund.jpg";
artikel[7]["desc"] =
  "Robust%20und%20sch%26ouml%3Bn%3A%20F%26uuml%3Br%20angenehme%20Geselligkeit.%3Cbr%3E%0D%0AMehr%3A%20%3Ca%20href%3D%22http%3A//spielzeugland.com%22%20target%3D%22_new%22%3Ehttp%3A//spielzeugland.com%3C/a%3E";
artikel[7]["preis"] = "2800";
artikel[7]["mwst"] = "0";
artikel[7]["p_feature"] = "-1";
artikel[8] = new Array();
artikel[8]["htmltyp"] = "3";
artikel[8]["typ"] = "img";
artikel[8]["menge"] = "true";
artikel[8]["preisa"] = "true";
artikel[8]["name"] = "gro%26szlig%3Ber%20Frischling";
artikel[8]["titel"] =
  "Studiotier%2C%20lebensgro%26szlig%3B%2C%20%3Cbr%3Eklicken%20Sie%20auf%20das%20Bild%21";
artikel[8]["image"] = "3310.jpg";
artikel[8]["desc"] =
  "Pl%26uuml%3Bschtiere%20der%20K%26ouml%3Bsener%20Spielzeug%20GmbH%20bestechen%20durch%20erstklassiges%20Design%2C%20hochwertige%20Materialien%20und%20aufwendige%20Verarbeitung.%20Eine%20Reihe%20von%20Tieren%20sind%20nur%20in%20limitierten%20Auflagen%20erh%26auml%3Bltlich.%20Ab%20Mitte%20M%26auml%3Brz%20erhalten%20Sie%20das%20gesamte%20Angebot%20der%20K%26ouml%3Bsener%20Pl%26uuml%3Bschtierwelt%20unter%20der%20Adresse%20%3Ca%20href%3D%22http%3A//www.koesen.de%22%20target%3D%22_new%22%3Ehttp%3A//www.koesen.de%3C/a%3E.";
artikel[8]["url"] = "fr.htm";
artikel[8]["preis"] = "15400";
artikel[8]["mwst"] = "0";
artikel[8]["p_feature"] = "-1";
artikel[9] = new Array();
artikel[9]["htmltyp"] = "1";
artikel[9]["typ"] = "checkbox";
artikel[9]["preisa"] = "true";
artikel[9]["name"] = "Ihre%20Internet-Domain";
artikel[9]["titel"] =
  "Klicken%20Sie%20links%20auf%A0%3Cb%3EIhre%20Internet-Domain%3C/b%3E%21";
artikel[9]["desc"] =
  "Diese%20Domains%20bietet%20Ihnen%20alles%2C%20was%20der%20Einsteiger%20braucht%21%3Cbr%3E%0D%0ADie%20Domainnamen%20sind%20vorerst%20auf%20.de-Domains%20beschr%26auml%3Bnkt.%20Die%20Geb%26uuml%3Bhr%20f%26uuml%3Br%20die%20Namensregistrierung%20ist%20bereits%20enthalten%21%20Bei%20den%20Premiumdomains%20sogar%20gleich%20mehrere%3A%3Cbr%3E%0D%0A%3Cul%3E%3Cli%3EPremium%20S%3A%20%A0%20%A0%20%A0%205%20Domainnamen%20%3C/li%3E%0D%0A%3Cli%3EPremium%20M%3A%20%A0%20%A0%20%A0%207%20Domainnamen%20%3C/li%3E%0D%0A%3Cli%3EPremium%20L%3A%20%A0%20%A0%20%A010%20Domainnamen%20%3C/li%3E%3C/ul%3E%0D%0A%20Reicht%20Ihnen%20das%20nicht%2C%20k%26ouml%3Bnnen%20Sie%20die%20gebotenen%20Leistungen%20jederzeit%20problemlos%20erweitern.%20Mehr%20erfahren%20Sie%20online%20unter%20%3Ca%20href%3D%22http%3A//www.vorwahl030.de%22%20target%3D%22_new%22%3E%20http%3A//www.vorwahl030.de%3C/a%3E%20%3Cbr%3Eoder%20hier%3A%20Klicken%20Sie%20auf%0D%0A";
artikel[9]["url"] = "s.htm";
artikel[9]["mwst"] = "0";
artikel[9]["features"] = "0,";
artikel[9]["p_feature"] = "0";
artikel[9]["0"] = "13870%7E16870%7E19870%7E20700%7E30600%7E39600%7E";
artikel[6] = new Array();
artikel[6]["htmltyp"] = "2";
artikel[6]["typ"] = "checkbox";
artikel[6]["preisa"] = "true";
artikel[6]["name"] = "Sommer-Shirt";
artikel[6]["titel"] = "Shirt%20f%26uuml%3Br%20warme%20Tage";
artikel[6]["image"] = "t.jpg";
artikel[6]["desc"] = "erh%26auml%3Bltlich%20auch%20im%20Metallic-Look";
artikel[6]["preis"] = "4900";
artikel[6]["mwst"] = "0";
artikel[6]["features"] = "4,5,";
artikel[6]["p_feature"] = "-1";
artikel[6]["4"] = "%7E%7E900%7E1500%7E1100%7E";
artikel[6]["5"] = "%7E500%7E800%7E";
