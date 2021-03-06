define(['knockout',
    'viewmodels/common/command'], function(ko,Command){
    var homeType = function (options) {
        var self = this;
        self.wallet = options.parent || {};

        self.statusMessage = ko.observable("");

        self.profileComplete = ko.observable(false);
        self.role = ko.observable("");
        self.first_name = ko.observable("");
        self.last_name = ko.observable("");
    };

    homeType.prototype.refresh = function(timerRefresh){
        var self = this;
        if (self.wallet.account() !== ""){
            self.ready(true);
        }
        if (timerRefresh && !self.wallet.profileComplete()){
            window.location = self.wallet.settings().chRoot + '/#profile';
        } else {
            self.statusMessage("You have " + self.wallet.walletStatus.totalFmt() + " " + self.wallet.settings().coinName + " in your wallet!");
        }
    };

    return homeType;
});
