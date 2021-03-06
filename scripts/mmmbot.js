module.exports = function(robot) {
    robot.respond(/is it a (weekend|holiday)\s?\?/i, function(msg){
        var today = new Date();

        msg.reply(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");
    });

    robot.hear(/i did it/i, function(msg){
        msg.send("Congratulations! Good job!");
    });

      robot.hear(/i did not do it/i, function(msg){
        msg.send("Try again!");
    });

        robot.hear(/mmmbot/i, function(msg){
        msg.send(href="https://imgflip.com/i/12wou6");
    });

    robot.respond(/are you there?/i, function(msg){
        msg.reply(href="https://imgflip.com/i/12wou6");
    });

    robot.respond(/convert \$(.*) to btc/i, function(res){
        var usd = res.match[1];
        res.reply('That is about ' + usd * 0.0024 + ' in BTC');
    });

}