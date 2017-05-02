var Cat = function () {
    this.nicknames = ko.observableArray(['wire eater', 'slippers theft']);
    this.clickCount = ko.observable(0);
    // this.catLevel = ko.observable('Newborn');
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496');

    this.catLevel = ko.computed(function() {
        if (this.clickCount() > 20) {
            return 'Youngster';
        } else if (this.clickCount() > 10) {
            return 'Infant';
        } else {
            return 'Newborn';
        };
    }, this);
}

var ViewModel = function() {
    this.currentCat = ko.observable( new Cat() );

    this.iCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

}
ko.applyBindings(new ViewModel());
