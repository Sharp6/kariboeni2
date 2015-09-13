<?php

require 'bod.php';

class bodRepository {
	private static $boden = array();

	protected static function init() {
		$boden = array();

		// TODO: read from DB

		self::$boden = $boden;
	}

	public static function getBoden() {
		if(count(self::$boden) === 0) {
			self::init();
		}
		return self::$boden;
	}
}