<?php
require '../classes/bodRepository.php';

header('Content-type: application/json');
$boden = BodRepository::getBoden();
echo json_encode($boden);