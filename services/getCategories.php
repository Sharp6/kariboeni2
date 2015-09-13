<?php
require '../classes/categorieRepository.php';

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
$categories = CategorieRepository::getCategories();
echo json_encode($categories);