import { Component, NgModule } from '@angular/core';

@Component({

	selector: 'my-autocomplete',
	template: `
	<div class="container" style="width: 600px;">
		<label> Search: </label>
		<textarea [(ngModel)]="inputString" name="autocomplete" id="" cols="80" rows="4" (keyup)=onKey(inputString) (keydown)=scrollItems($event.code) ></textarea>
		<ul class="list-group" *ngIf="filteredSuggestionList.length > 0">
			<li class="list-group-item" *ngFor="let suggestion of filteredSuggestionList" [ngClass]="{'active': selectedItem === suggestion}" (click)=fillTextArea(suggestion)> {{ suggestion }} </li>
		</ul>
	</div>
	`
})

export class MyAutocomplete {

	randomWordBucket: String[];
	filteredSuggestionList: String[];
	inputString: String;
	selectedItem: String;
	selectedIndex: number;
	
	constructor() {
		this.randomWordBucket = ["Traumatize", "patternless", "lentando", "subsynodical", "fibrinogen", "Archerfish", "mercurifying", "unshavable", "cerebrational", "acidophilus", "Imputer", "uniface", "preveniently", "misreform", "inappreciable", "Unpocket", "photovolto", "fatso", "sapphira", "infundibulate", "Stearine", "unchokable", "jeweling", "dishtowel", "erica", "Nonsurrender", "springbok", "appose", "antibaryon", "scrutable", "Arms", "nonperceptibility", "adhered", "kidding", "yekaterinoslav", "Coercionary", "edhessa", "zephyrus", "laoag", "practitioner", "Ampule", "nonusage", "precancelling", "hoyle", "lister", "Domiciling", "undetected", "etym", "banderilla", "kesselring", "Zoospore" ];
		this.filteredSuggestionList = new Array();
		this.inputString = "";
		this.selectedIndex = -1;
	}

	onKey(inputString : String) {

		let suggestionList = new Array();
		let totalWords = inputString.split(' ');

		this.randomWordBucket.forEach((randomWord) => {
			if(randomWord.toLowerCase().startsWith(totalWords[totalWords.length - 1].toLowerCase(), 0)) {
				suggestionList.push(randomWord);
			}
		});
		this.filteredSuggestionList = suggestionList;
	}

	fillTextArea(suggestion : String) {
		this.inputString = this.inputString.substring(0, this.inputString.lastIndexOf(" ")) + " " + suggestion + " ";
		this.filteredSuggestionList = [];
		this.selectedIndex = -1;
		this.selectedItem = "";
	}

	scrollItems(eventCode: String) {

		switch (eventCode) {
			case "ArrowDown":
				this.selectedIndex = (this.selectedIndex == this.filteredSuggestionList.length -1 ) ? 0 : ++this.selectedIndex;
				this.selectedItem = this.filteredSuggestionList[this.selectedIndex];
				break;
			case "ArrowUp":
				this.selectedIndex = (this.selectedIndex <=0 ) ? this.filteredSuggestionList.length - 1 : --this.selectedIndex;
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
		
	}
}