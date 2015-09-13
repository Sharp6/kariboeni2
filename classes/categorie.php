<?php
class Categorie {
	public $categorieId;
	public $categorieNaam;
	public $categorieBeschrijving;

	public function __construct($categorieId ='', $categorieNaam = '', $categorieBeschrijving = '') {
		$this->categorieId = $categorieId;
		$this->categorieNaam = $categorieNaam;
		$this->categorieBeschrijving = $categorieBeschrijving;
	}
}