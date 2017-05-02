var initialCats = [
        {
        name: 'Poplinre',
        imgSrc: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
        clicks: 0,
        nicknames: ['wire eater', 'slippers theft']
        },
        {
        name: 'Tiger',
        imgSrc: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
        clicks: 0,
        nicknames: ['Shmiger', 'besider']
        },
        {
        name: "Chewie",
        imgSrc: "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
        clicks: 0,
        nicknames: ['Tewie', 'Bewie']
    }];

var Cat = function (catData) {
    this.nicknames = ko.observableArray(catData.nicknames);
    this.clickCount = ko.observable(catData.clicks);
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
    // in order not to be confused about binding content
    var self = this;
    // create observable array from initial data
    this.catList = ko.observableArray([]);
    initialCats.forEach(function (catItem) {
        self.catList.push( new Cat(catItem) );
    });

    // define default current cat
    this.currentCat = ko.observable(this.catList()[0]);
    // set a current cat on click
    this.catClick = function () {
        // 'this' here is a cat that was clicked
        self.currentCat(this);
    };
    // iCounter is in the currentCat() binding context !!!
    this.iCounter = function() {
        // 'this' here is a currentCat()!
        this.clickCount(this.clickCount() + 1);
    };

}
ko.applyBindings(new ViewModel());
