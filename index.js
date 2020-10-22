
$('.container-fluid').each(function () {
  $('body').on("click", ".wrapper", function () {
    $(this).siblings("input").click();
  });

  $('body').on("change", "#input-image", function () {
    let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
    
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      input = $(this);
      reader.onload = function () {
        const result = reader.result;
        input.siblings(".wrapper").find('img').attr("src",result);
        input.siblings(".wrapper").addClass("active");
      };
      reader.readAsDataURL(file);
    }

    if (this.value) {
      let valueStore = this.value.match(regExp);
      input.siblings(".wrapper").find('.file-name').text(valueStore);
    }
  });

  $('body').on("click", "#cancel-btn", function () {
    $(this).parents(".wrapper").find("img").attr("src", "");
    $(this).parents(".wrapper").removeClass("active");
  });
});