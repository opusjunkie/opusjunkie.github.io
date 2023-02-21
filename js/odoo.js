$(document).ready(function () {
//  // Define the Odoo server URL and database name
//  var serverUrl = 'http://mashood.odoo.com';
//  var dbName = 'mashood';
//
//  // Define the Odoo username and password
//  var username = 'mashoodwyd@gmail.com';
//  var password = 'Mash.227';
//
//  // Define the XML-RPC method and parameters
//  var method = 'execute_kw';
//  var model = 'res.partner';
//  var args = [[['is_company', '=', true]], ['name', 'country_id', 'comment']];
//  var kwargs = {context: {}};
//
//  // Define the XML-RPC client options
//  var options = {
//    url: serverUrl + '/xmlrpc/2/common',
//    headers: {"Content-Type": "application/xml"},
//  };
//
//  // Attach a click event handler to the button
//  $('#sendMessageButton').click(function () {
//    // Authenticate with the Odoo server and get the user ID
//    console.log('kereeeeeeeeeeeeeeeeeee')
//    $.xmlrpc({
//      url: options.url,
//      methodName: 'authenticate',
//      params: [dbName, username, password, {}],
//      success: function (response, status, jqXHR) {
//        // Create an XML-RPC client for the model methods
//        var uid = response[0];
//        var models = $.xmlrpc({
//          url: serverUrl + '/xmlrpc/2/object',
//          headers: {"Content-Type": "application/xml"},
//        });
//
//        // Call the model method and log the result
//        models.call(method, [dbName, uid, password, model, 'search_read', args, kwargs], function (err, value) {
//          if (err) {
//            console.error(err);
//          } else {
//            console.log(value);
//          }
//        });
//      },
//      error: function (jqXHR, status, error) {
//        console.error(error);
//      },
//    });
//  });




$.get('https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-418462b7-1fb0-463e-8b57-a91d710d3bfe/default/connect-odoo', {}, function(response) {
    // Handle the response from the target server
    console.log(response);
});
});
