<?php

require 'mysql.da.php';
require 'item.php';

class itemRepository {
	private static $items = array();

	protected static function init() {
		$myDb = new mysqlDA();
		$itemsResult = $myDb->query("SELECT items.itemId, items.beschrijving, items.prijs, items.titel, items.categoryId, biedingen.biedingId FROM items LEFT JOIN biedingen ON items.itemId = biedingen.itemId");
		$itemsResult->setFetchMode(PDO::FETCH_ASSOC);
		$itemsResult->bindColumn(1, $itemId);
		$itemsResult->bindColumn(2, $itemDescription);
		$itemsResult->bindColumn(3, $itemPrice);
		$itemsResult->bindColumn(4, $itemTitle);
		$itemsResult->bindColumn(5, $categoryId);
		$itemsResult->bindColumn(6, $bodId);

		$items = array();

		while($itemsResult->fetch()) {
			array_push($items,
				new Item($itemId, $itemDescription, $itemPrice, $itemTitle, $categoryId, $bodId));
		}

		self::$items = $items;
	}

	public static function getItems() {
		if(count(self::$items) === 0) {
			self::init();
		}
		return self::$items;
	}
}