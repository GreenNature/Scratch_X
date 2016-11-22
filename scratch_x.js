(function(ext) {
    // Cleanup function when the extension is unloaded
    
    
    var net = new WebTCP('localhost', 9999)

    //Now you can create sockets like this
    var socket = net.createSocket("127.0.0.1", 1337)

    // To send data to socket 
    socket.write("hi")

    // On connection callback
    socket.on('connect', function(){
      console.log('connected');
    })

    // This gets called every time new data for this socket is received
    socket.on('data', function(data) {
      console.log("received: " + data);
    });

    socket.on('end', function(data) {
      console.log("socket is closed ");
    });
    
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.power = function(base, exponent) {
        return Math.pow(base, exponent);
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name, param1 default value, param2 default value
            ['r', '%n ^ %n', 'power', 2, 3],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Green extension', descriptor, ext);
})({});
