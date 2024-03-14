$(document).ready(function() {
    const pickr = Pickr.create({
      el: '#colorPicker',
      theme: 'nano',
      default: '#1ea54c',
      components: {
        preview: true,
        opacity: true,
        hue: true,
        interaction: {
          hex: true,
          rgba: true,
          hsla: true,
          input: true,
          save: true
        }
      }
    });

    pickr.on('change', (color, instance) => {
      $("#hexInput").val(color.toHEXA().toString());
      $("#rgbInput").val(color.toRGBA().map(Math.round));
      $("#hslInput").val(color.toHSLA().map(Math.round));
    });
});

function copyToClipboard(id) {
    var copyText = document.getElementById(id);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}