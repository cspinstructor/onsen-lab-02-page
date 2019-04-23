function showAlert() {
  ons.notification.alert('This is an alert');
}

var showConfirm = function() {
  ons.notification.confirm('Please confirm:').then(function(input) {
    ons.notification.alert('You clicked: ' + input);
  });
};

var showPrompt = function() {
  ons.notification.prompt('Prompt!').then(function(input) {
    var message = input ? 'Entered: ' + input : 'Entered nothing!';
    ons.notification.alert(message);
  });
};

function showToast() {
  ons.notification.toast('Toast!', { timeout: 2000 });
}
