<?php
class Item {
	public $itemId;
	public $itemBeschrijving;
	public $itemPrijs;
	public $itemTitel;
	public $itemCategorieId;

	public function __construct($itemId = '', $itemBeschrijving = '', $itemPrijs = '', $itemTitel = '', $itemCategorieId = '') {
		$this->itemId = $itemId;
		$this->itemBeschrijving = $itemBeschrijving;
		$this->itemPrijs = $itemPrijs;
		$this->itemTitel = $itemTitel;
		$this->itemCategorieId = $itemCategorieId;
	}
}