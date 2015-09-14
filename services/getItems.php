<?php
require '../classes/itemRepository.php';

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
$items = ItemRepository::getItems();
echo json_encode($items);