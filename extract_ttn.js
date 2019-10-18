module.exports = function(RED) {
    function Extract_TTNNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
			var obj = JSON.parse(msg.payload);
			msg.time = obj.metadata.time;
			msg.deviceID = obj.dev_id;
            msg.port = obj.port;
            var data = new Buffer(obj.payload_raw, 'base64');
			msg.payload = data.toString("hex");   
			node.send(msg);
        });
    }
    RED.nodes.registerType("extract_ttn",Extract_TTNNode);
}
