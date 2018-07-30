var userHelp = {
	time: 0,
 	AllySupport: ri(250 + 100 * (10 - difficulty), 750 + 100 * (10 - difficulty)),   
	update:function(){
	this.time += 0.1;
if (this.AllySupport--,
        0 >= this.AllySupport) {
            var l = ri(100 * difficulty + Math.round(this.time), 200 * difficulty + Math.round(this.time));
            money += l,
            moneyEarned += l,
            this.AllySupport = ri(250 + 100 * (10 - difficulty), 750 + 100 * (10 - difficulty))
        }
                     }
}
window.setInterval(function(){
	userHelp.update();
}, 64)
