var Cat = function (catData) {
    this.nicknames = ko.observableArray(catData.nicknames);
    this.clickCount = ko.observable(catData.clicks);
    // this.catLevel = ko.observable('Newborn');
    this.name = ko.observable(catData.name);
    this.imgSrc = ko.observable(catData.imgSrc);

    this.catLevel = ko.computed(function() {
        if (this.clickCount() < 10) {
            return 'Newborn';
        } else if (this.clickCount() < 20) {
            return 'Infant';
        } else {
            return 'Youngster';
        };
    }, this);
}

var ViewModel = function() {
    this.currentCat = ko.observable( new Cat({
        nicknames: ['wire eater', 'slippers theft'],
        clicks: 0,
        name: 'Tabby',
        imgSrc: 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496'
    }) );

    this.iCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

}
ko.applyBindings(new ViewModel());
