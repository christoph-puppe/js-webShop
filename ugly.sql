/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19  Distrib 10.5.29-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: jswebshopugly
-- ------------------------------------------------------
-- Server version       10.5.29-MariaDB-ubu2004

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `realnames2uglynames`
--

DROP TABLE IF EXISTS `realnames2uglynames`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `realnames2uglynames` (
  `RealName` char(16) NOT NULL DEFAULT '',
  `UglyName` char(16) NOT NULL DEFAULT '',
  `comment` char(32) NOT NULL DEFAULT ''
) ENGINE=MyISAM AUTO_INCREMENT=212 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabelle zum Uglyfizieren von js-webShop';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `realnames2uglynames`
--

LOCK TABLES `realnames2uglynames` WRITE;
/*!40000 ALTER TABLE `realnames2uglynames` DISABLE KEYS */;
INSERT INTO `realnames2uglynames` VALUES ('blind','Xda','do nothing'),('A_main','Xgo','function'),('a_update','Xaa','function'),('a_init','Xab','function'),('a_initTr','Xac','function'),('a_ln','Xad','function'),('a_check_ln','Xae','function'),('a_print_frame','Xaf','function'),('a_selected','Xag','function'),('a_do_selected','Xah','function'),('a_config','Xai','function'),('a_edit_config','Xaj','function'),('a_set_config','Xak','function'),('a_delete_sys','Xal','function'),('a_page','Xam','function'),('a_edit_start','Xan','function'),('a_edit_page','Xao','function'),('a_move_page','Xap','function'),('a_delete_page','Xaq','function'),('a_product','Xar','function'),('a_click_feature','Xas','function'),('a_edit_product','Xat','function'),('a_choose_prod','Xau','function'),('a_delete_product','Xav','function'),('a_move_product','Xaw','function'),('a_product_feature','Xax','function'),('a_reset_product_feat','Xay','function'),('a_delete_product_fea','Xaz','function'),('a_edit_product_featu','Xba','function'),('a_save_product_featu','Xbb','function'),('a_shop_data','Xbc','function'),('a_nav','Xbd','function'),('a_send','Xbe','function'),('a_htm','Xbf','function'),('a_payment','Xbg','function'),('a_edit_payment','Xbh','function'),('a_delete_payment','Xbi','function'),('a_pment_data','Xbj','function'),('a_edit_pment_data','Xbk','function'),('a_pment_action','Xbl','function'),('a_kunde','Xbm','function'),('a_address','Xbn','function'),('a_delete_address','Xbo','function'),('a_feature','Xbp','function'),('a_edit_feature','Xbq','function'),('a_delete_feature','Xbr','function'),('a_more_features','Xbs','function'),('a_edit_more_features','Xbt','function'),('a_delete_more_featur','Xbu','function'),('a_mwst','Xbv','function'),('a_base_mwst','Xbw','function'),('a_edit_mwst','Xbx','function'),('a_change_mwst','Xby','function'),('a_vs','Xbz','function'),('a_page_vs','Xca','function'),('a_edit_vs','Xcb','function'),('a_font','Xcc','function'),('a_choose_font','Xcd','function'),('a_edit_font','Xce','function'),('a_print_colormap','Xcf','function'),('a_gb','Xcg','function'),('a_color','Xch','function'),('a_edit_color','Xci','function'),('a_border','Xcj','function'),('a_edit_border','Xck','function'),('a_get_path','Xcl','function'),('a_myEscape','Xcm','function'),('A_doConfigSystem','Xcn','function'),('a_2pf','Xco','function'),('a_curr','Xcp','function'),('a_doSetEuroland','Xcq','function'),('a_doEditBase','Xcr','function'),('a_editEuroCurrency','Xcs','function'),('a_doDeleteCurrency','Xct','function'),('a_doEditEuroCurrency','Xcu','function'),('a_doEditCurrency','Xdn','function'),('A_doSetConfigHtml','Xcw','function'),('a_del_s','Xcx','function'),('A_save','Xcy','function'),('a_save_all','Xcz','function'),('a_do_save','Xds','function'),('a_save_header','Xgr','function'),('a_template_page','Xdc','function'),('a_edit_template','Xdd','function'),('a_eximp','Xde','function'),('a_get_val','Xdf','function'),('a_do_import','Xdg','function'),('a_import_first','Xdh','function'),('a_import_pages','Xdi','function'),('a_import_headline','Xdj','function'),('a_export','Xdk','function'),('a_do_export','Xdl','function'),('a_write_csv','Xdm','function'),('B_init','Xfh','function'),('B_lade_kunden','Xeb','function'),('B_get_cookie','Xec','function'),('B_speichere_kunden','Xed','function'),('b_set_cookie','Xee','function'),('b_product_price','Xef','function'),('B_toMWST','Xeh','function'),('B_getMWST','Xei','function'),('B_set_currency','Xej','function'),('B_set_mwstshow','Xek','function'),('toDM','Xel','function'),('toDMhidden','Xem','function'),('toCurr','Xen','function'),('b_nzahl','Xeo','function'),('B_isEu','Xep','function'),('B_retOpt','Xeq','function'),('B_enter_payment','Xer','function'),('B_enter_address','Xes','function'),('B_del','Xet','function'),('B_auswertung','Xeu','function'),('b_add_record','Xev','function'),('B_setCom','Xew','function'),('b_checkFeatures','Xex','function'),('b_markieren','Xez','function'),('set_value','Xfa','function'),('B_setFeature','Xfb','function'),('B_setAmount','Xfc','function'),('B_sumPage','Xfd','function'),('B_delOrder','Xfe','function'),('B_getOrder','Xff','function'),('B_storeOrder','Xfg','function'),('b_getPageToShow','Xfi','function'),('E_main','Xea','function'),('E_init','Xga','function'),('e_init_gif','Xgb','function'),('e_init_strings','Xgc','function'),('e_init_mwst','Xgd','function'),('E_init_font','Xge','function'),('E_init_page','Xgf','function'),('E_init_shipping','Xgg','function'),('E_init_curr','Xgh','function'),('e_check_browser','Xgi','function'),('errorHandler','Xgj','function'),('E_go','Xcv','function'),('E_print_left_frame','Xgl','function'),('e_print_navigation','Xgm','function'),('e_insert_navgif','Xgn','function'),('E_print_right_frame','Xgp','function'),('e_print_right_top','Xgu','function'),('e_print_right_bot','Xdb','function'),('e_thanks','Xgw','function'),('e_print_header','Xgx','function'),('e_print_prod','Xgz','function'),('e_print_summen','Xha','function'),('e_print_products','Xhb','function'),('e_printHTML1','Xhc','function'),('e_printHTML2','Xhd','function'),('e_printHTML3','Xhe','function'),('e_print_image','Xhf','function'),('e_print_menge','Xhg','function'),('e_print_name','Xhh','function'),('e_print_preis','Xhi','function'),('e_print_preisa','Xhj','function'),('e_print_typ','Xhk','function'),('e_print_features','Xgy','function'),('E_get_feature','Xhl','function'),('e_printFeaturesCheck','Xhm','function'),('e_printFeaturesRadio','Xhn','function'),('e_printFeaturesSelec','Xho','function'),('e_printFeaturesMsele','Xhp','function'),('e_printFeaturesText','Xhq','function'),('e_search','Xhr','function'),('e_doSearch','Xhs','function'),('e_myEscape','Xht','function'),('e_go_left','Xhu','function'),('e_go_right','Xhv','function'),('e_set_payment','Xhw','function'),('e_set_areas','Xhx','function'),('e_set_freight','Xhy','function'),('e_print_logo','Xhz','function'),('e_showDesc','Xia','function'),('e_leave','Xib','function'),('artikel','A','array'),('system','Q','array'),('features','B','hash db'),('category','Xmr','hash db'),('top_text','e','hash db'),('summen','f','hash db'),('htmltyp','h','hash db'),('menge','j','hash db'),('preisa','k','hash db'),('titel','l','hash db'),('preis','m','hash db'),('mwst','n','hash db'),('desc','o','hash db'),('gpreis','gm','hash db'),('currency','R','hash sys'),('ewu','T','hash sys'),('freight','u','hash sys'),('limit','y','hash sys'),('areas','v','hash sys'),('address','W','hash sys'),('email','ad','hash sys'),('payment','x','hash sys'),('betreiber','ac','hash sys'),('city','ae','hash sys'),('country','af','hash sys'),('sonstiges','ag','hash sys'),('startmsg','ah','hash sys'),('logo','ak','hash sys'),('leave','al','hash sys'),('search','an','hash sys'),('goleft','ao','hash sys'),('goright','ap','hash sys'),('start','aq','hash sys'),('font_navigation','au','hash sys'),('font_right_head','aw','hash sys'),('font_send','ay','hash sys'),('bestellt','Xmd','array'),('best_nr','Xme','hash array'),('B_a_daten','Xmf','array'),('e_page_state','Xmg','variable'),('feature','Xmh','variable'),('FREIGHT','Xmi','variable'),('hash','Xmj','variable'),('B_a_kunde','Xmk','array'),('LEFT','Xml','variable'),('LOCK','Xmm','variable'),('nshow','Xmo','variable'),('n_liefer','Xmp','variable'),('paym','Xmu','array'),('PAYMENT','Xmw','variable'),('SELECTED_CURRENCY','Xmy','variable'),('show_basket_images','Xmz','variable'),('pname','xxx','hash db'),('sname','xxx','hash sys'),('page','C','array');
/*!40000 ALTER TABLE `realnames2uglynames` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-03-14 15:15:10
