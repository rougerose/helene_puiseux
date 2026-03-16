<?php

/**
 * Suppression des retours à la ligne et tabulations
 * générés par les boucles de SPIP.
 *
 * @filtre
 * @link      http://seenthis.net/messages/391910#message392025
 * @link      http://www.paris-beyrouth.org/tutoriaux-spip/article/objectif-pagespeed-100-100-avec
 * @author    Arno
 * @return    string
 **/
function mini_html($texte) {
	$texte = preg_replace(",\n[\t\ ]*,", '', $texte);
	$texte = preg_replace(",\n+,", '', $texte);
	return $texte;
}
