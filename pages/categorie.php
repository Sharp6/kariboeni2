<?php require_once("header.php"); ?>

<input id="hiddenCat" type="hidden" value="<?php echo $_GET["catId"]; ?>" />
<p>
	CategorieId is <span data-bind="text:categorieId"></span>.
</p>

<div data-bind="foreach:items" class="items">

<div class="veilingItem">
    <div class="jm-item first">
        <div class="jm-item-wrapper">
            <div class="jm-item-image">
            	<img src="../img/verkocht.png" class="sold" data-bind="visible: isSold()" />  
              <img data-bind="attr: {src: itemImg}, css: isSoldClass()" class="itemImage" />
                <span class="jm-item-overlay"> </span>
                <div class="jm-item-button" data-bind="css: isSoldClass">
                	<a href="" class="btn btn-default" data-toggle="modal" data-target="#<?php echo $itemID; ?>Modal">Meer info</a>
                </div>
            </div>
            <div class="jm-item-title" data-bind="text:itemLabel"></div>
        </div>
    </div>
</div>

</div>

<?php require_once("footer.php"); ?>

<script src="../js/libraries/require.min.js" data-main="../js/categorie.main.client.js"></script>