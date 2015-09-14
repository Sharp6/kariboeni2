<?php require_once("header.php"); ?>

<div data-bind="foreach:categories" class="categories" id="categorieDiv">
	<div class="thumbnail">
		<img data-bind="attr: {src: categorieImg}" class="catImg" />
		<div class="caption">
			<h3 data-bind="text:categorieNaam"></h3>
			<p data-bind="html:categorieBeschrijving" class="categorieBeschrijving"></p>
			<a data-bind="attr: {href: categorieUrl}" class="btn btn-default">Bekijk <span data-bind="text:categorieNaam"></span></a>
		</div>
	</div>
</div>

<?php require_once("footer.php"); ?>

<script src="../js/libraries/require.min.js" data-main="../js/popup.main.client.js"></script>
