<?php
class Bod {
	public $bodId;
	public $itemId;
	public $naamBieder;
	public $klas;
	public $email;
	public $telefoon;
	public $contactLeerling;
	public $typeKoper;
	public $status;
	public $betaald;
	public $opmerking;

	public function __construct($bodId = '', $itemId='', $naamBieder='',$klas='',$email='',$telefoon='',$contactLeerling='',$typeKoper='',$status='',$betaald='',$opmerking='') {
		$this->bodId = $bodId;
		$this->itemId = $itemId;
		$this->naamBieder = $naamBieder;
		$this->klas = $klas;
		$this->email = $email;
		$this->telefoon = $telefoon;
		$this->contactLeerling = $contactLeerling;
		$this->typeKoper = $typeKoper;
		$this->status = $status;
		$this->betaald = $betaald;
		$this->opmerking = $opmerking;
	}
}