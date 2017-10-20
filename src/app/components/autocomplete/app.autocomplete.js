"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var MyAutocomplete = (function () {
    function MyAutocomplete() {
        this.randomWordBucket = ["Traumatize", "patternless", "lentando", "subsynodical", "fibrinogen", "Archerfish", "mercurifying", "unshavable", "cerebrational", "acidophilus", "Imputer", "uniface", "preveniently", "misreform", "inappreciable", "Unpocket", "photovolto", "fatso", "sapphira", "infundibulate", "Stearine", "unchokable", "jeweling", "dishtowel", "erica", "Nonsurrender", "springbok", "appose", "antibaryon", "scrutable", "Arms", "nonperceptibility", "adhered", "kidding", "yekaterinoslav", "Coercionary", "edhessa", "zephyrus", "laoag", "practitioner", "Ampule", "nonusage", "precancelling", "hoyle", "lister", "Domiciling", "undetected", "etym", "banderilla", "kesselring", "Zoospore"];
        this.filteredSuggestionList = new Array();
        this.inputString = "";
        this.selectedIndex = -1;
    }
    MyAutocomplete.prototype.onKey = function (inputString) {
        var suggestionList = new Array();
        var totalWords = inputString.split(' ');
        this.randomWordBucket.forEach(function (randomWord) {
            if (randomWord.toLowerCase().startsWith(totalWords[totalWords.length - 1].toLowerCase(), 0)) {
                suggestionList.push(randomWord);
            }
        });
        this.filteredSuggestionList = suggestionList;
    };
    MyAutocomplete.prototype.fillTextArea = function (suggestion) {
        this.inputString = this.inputString.substring(0, this.inputString.lastIndexOf(" ")) + " " + suggestion + " ";
        this.filteredSuggestionList = [];
        this.selectedIndex = -1;
        this.selectedItem = "";
    };
    MyAutocomplete.prototype.scrollItems = function (eventCode) {
        switch (eventCode) {
            case "ArrowDown":
                this.selectedIndex = (this.selectedIndex == this.filteredSuggestionList.length - 1) ? 0 : ++this.selectedIndex;
                this.selectedItem = this.filteredSuggestionList[this.selectedIndex];
                break;
            case "ArrowUp":
                this.selectedIndex = (this.selectedIndex <= 0) ? this.filteredSuggestionList.length - 1 : --this.selectedIndex;
                this.selectedItem = this.filteredSuggestionList[this.selectedIndex];
                break;
            case "Enter":
                this.fillTextArea(this.selectedItem);
                event.preventDefault();
                break;
            case "Tab":
                this.fillTextArea(this.selectedItem);
                event.preventDefault();
                break;
        }
    };
    return MyAutocomplete;
}());
MyAutocomplete = __decorate([
    core_1.Component({
        selector: 'my-autocomplete',
        template: "\n\t<div class=\"container\" style=\"width: 600px;\">\n\t\t<label> Search: </label>\n\t\t<textarea [(ngModel)]=\"inputString\" name=\"autocomplete\" id=\"\" cols=\"80\" rows=\"4\" (keyup)=onKey(inputString) (keydown)=scrollItems($event.code) ></textarea>\n\t\t<ul class=\"list-group\" *ngIf=\"filteredSuggestionList.length > 0\">\n\t\t\t<li class=\"list-group-item\" *ngFor=\"let suggestion of filteredSuggestionList\" [ngClass]=\"{'active': selectedItem === suggestion}\" (click)=fillTextArea(suggestion)> {{ suggestion }} </li>\n\t\t</ul>\n\t</div>\n\t"
    }),
    __metadata("design:paramtypes", [])
], MyAutocomplete);
exports.MyAutocomplete = MyAutocomplete;
//# sourceMappingURL=app.autocomplete.js.map