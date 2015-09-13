<?php

require 'item.php';

class itemRepository {
	private static $items = array();

	protected static function init() {
		$items = array();

		// TODO: read from DB

		self::$items = $items;
	}

	public static function getItems() {
		if(count(self::$items) === 0) {
			self::init();
		}
		return self::$items;
	}
}