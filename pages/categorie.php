<?php require_once("header.php"); ?>

<input id="hiddenCat" type="hidden" value="<?php echo $_GET["catId"]; ?>" />
<p>
	CategorieId is <span data-bind="text:categorieId"></span>.
  CurrentItem is <span data-bind="if:currentItem()"><span data-bind="text:currentItem().itemTitel"></span></span>.
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
            <a href="" class="btn btn-default" data-bind="click:$parent.currentItem, attr: {'data-target': '#itemModal', 'data-toggle':'modal'}">Meer info</a>
          </div>
        </div>
        <div class="jm-item-title" data-bind="text:itemLabel"></div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" tabindex="-1" role="dialog" data-bind="with:currentItem" id="itemModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title" data-bind="text:itemLabel"></h4>
      </div>
      <div class="modal-body">
        <p>
          <img data-bind="attr: {src: itemImg}" class="itemImage align-right" />
          <span data-bind="html: itemBeschrijving"></span>
        </p>

        <div class="form-group buyerType">
          <label class="radio-inline">
            <input type="radio" name="typeKoper" value="Leerling" data-bind="checked: $parent.typeKoper" /> 
            Leerling
          </label>
          <label class="radio-inline">
            <input type="radio" name="typeKoper" value="Leerkracht" data-bind="checked: $parent.typeKoper" /> 
            Leerkracht
          </label>
          <label class="radio-inline">
            <input type="radio" name="typeKoper" value="Andere" data-bind="checked: $parent.typeKoper" /> 
            Andere
          </label>
        </div>

        <p>Type koper is: <span data-bind="text:$parent.typeKoper"></span></p>

        <form data-bind="foreach:$parent.formFields">



          <div class="form-group" data-bind="css: {'has-error': valueHolder.hasError}">
            <label class="control-label" data-bind="text:label"></label>
            <div>
              <input type="text" class="form-control" data-bind="value:valueHolder">
              <span data-bind="visible: valueHolder.hasError, text: valueHolder.validationMessage"></span>
            </div>
          </div>




        </form>

        <p>The form is <span data-bind="text:formComplete"></span>.</p>

      </div>
    </div>
  </div>
</div>

<?php require_once("footer.php"); ?>

<script src="../js/libraries/require.min.js" data-main="../js/categorie.main.client.js"></script>
