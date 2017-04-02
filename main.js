$(document).ready(function() {
  $(function() {
    $("#tabs").tabs();
  });

  $(function() {
    var icons = {
      header: "ui-icon-circle-arrow-e",
      activeHeader: "ui-icon-circle-arrow-s"
    };
    $("#accordion").accordion({
      icons: icons,
      heightStyle: "fill",
      collapsible: true
    });
  });

  $(function() {
    $("#slider-range-min").slider({
      range: "min",
      value: 0,
      min: 0,
      max: 500000,
      slide: function(event, ui) {
        $("#amount").val(ui.value + "km");
      }
    });
    $("#amount").val($("#slider-range-min").slider("value") + "km");
  });

  $(function() {
    var availableBrands = [
      "Alfa Romeo",
      "Audi",
      "Bentley",
      "BMW",
      "Citroën",
      "Dacia",
      "Ferrari",
      "Fiat",
      "Ford",
      "Hyundai",
      "Jeep",
      "Kia",
      "Lamborghini",
      "Land Rover",
      "Mazda",
      "Nissan",
      "Opel",
      "Peugeot",
      "Renault",
      "SEAT",
      "Toyota",
      "Volkswagen"
    ];
    $("#brand").autocomplete({
      source: availableBrands
    });
  });

  $(function() {
    $("#selectable").selectable();
  });

  $(function() {
    $(document).tooltip();
  });

  $(function() {
    $("#datepicker").datepicker();
  });

  $(function() {
    $("#dialog").dialog({
      autoOpen: false,
    });
  });

  $("#contratar").on("click", function() {
    $("#dialog").dialog("open");
  });
});
