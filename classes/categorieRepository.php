<?php

require 'mysql.da.php';
require 'categorie.php';

class categorieRepository {
	private static $categories = array();

	protected static function init() {
		$myDb = new mysqlDA();
		$catResult = $myDb->query("SELECT categoryId, categoryName, beschrijving FROM categories");
		$catResult->setFetchMode(PDO::FETCH_ASSOC);
		$catResult->bindColumn(1, $catId);
		$catResult->bindColumn(2, $catName);
		$catResult->bindColumn(3, $catBeschrijving);
		
		$categories = array();

		while($catResult->fetch()){
			array_push($categories,
				new Categorie($catId, $catName, $catBeschrijving));
		}
		
		self::$categories = $categories;
	}
 
	public static function getCategories() {
		if(count(self::$categories) === 0) {
			self::init();
		}
		return self::$categories;
	}
}