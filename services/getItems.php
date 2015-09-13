<?php
require '../classes/itemRepository.php';

header('Content-type: application/json');
$items = ItemRepository::getItems();
echo json_encode($items);