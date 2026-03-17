<?php

if (!defined('_ECRIRE_INC_VERSION')) {
	return;
}

function formulaires_filtrer_articles_charger($articles = []) {
	$valeurs = [
		'articles' => $articles,
		'mots' => _request('mots'),
	];
	return $valeurs;
}

function formulaires_filtrer_articles_verifier($articles = []) {
	$erreurs = [];
	return $erreurs;
}

function formulaires_filtrer_articles_traiter($articles = []) {
	$retour = [];
	refuser_traiter_formulaire_ajax();
	$mots = _request('mots');
	$self = self();
	// Si l'url est de la forme spip.php?rubriqueX,
	// self devient spip.php?rubriqueX&id_rubrique=X.
	// Dans ce contexte, supprimer le paramètre inutile.
	if (strpos($self, 'rubrique') !== false) {
		$self = parametre_url($self, 'id_rubrique', '');
	}

	if ($mots) {
		$redirection = parametre_url($self, 'mots', '');
		$mots = array_unique($mots);
		$retour['redirect'] = parametre_url($redirection, 'mots', $mots);
	} else {
		$retour['redirect'] = $self;
	}

	return $retour;
}
