<?php

if (!defined('_ECRIRE_INC_VERSION')) return;

if (!isset($GLOBALS['z_blocs'])) {
    $GLOBALS['z_blocs'] = array('content','head','head_js','header','footer','breadcrumb');
}

// intertitres
$GLOBALS['debut_intertitre'] = "\n<h2 class='spip'>";
$GLOBALS['fin_intertitre'] = "</h2>\n";



// Poser une limite avec les Bot qui scannent les url avec des mots-clés.
if (_IS_BOT) {
	if (
		($p1 = strpos($_SERVER['QUERY_STRING'], 'mots%5B%5D=')) !== false
		and strpos($_SERVER['QUERY_STRING'], 'mots%5B%5D=', $p1 + 5) !== false
	) {
		$ecran_securite_raison = 'trop de mots';
	}

	if (
		($p1 = strpos($_SERVER['QUERY_STRING'], 'mots[]=')) !== false
		and strpos($_SERVER['QUERY_STRING'], 'mots[]=', $p1 + 5) !== false
	) {
		$ecran_securite_raison = 'trop de mots';
	}
	/*
	* S'il y a une raison de mourir, mourons
	*/
	if (isset($ecran_securite_raison)) {
		header('HTTP/1.0 403 Forbidden');
		header('Expires: Wed, 11 Jan 1984 05:00:00 GMT');
		header('Cache-Control: no-cache, must-revalidate');
		header('Pragma: no-cache');
		header('Content-Type: text/html');
		die("<html><title>Error 403: Forbidden</title><body><h1>Error 403</h1><p>You are not authorized to view this page ($ecran_securite_raison)</p></body></html>");
	}
}
