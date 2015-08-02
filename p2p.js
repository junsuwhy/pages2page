$(function(){
	chrome.windows.getCurrent(getWin);
});


function getWin(win){

	console.log(win);

	chrome.tabs.getAllInWindow(win.id, getTabs);
}

function getTabs(tabs){
	console.log(tabs);
	for (var i = 0; i < tabs.length-1; i++) {
		jq=$('<div></div>');
		jqa=$('<a></a>').attr('href',tabs[i].url).html(tabs[i].title);
		jq.append(jqa);
		jqbr=$('<br>');
		$('#output').append(jq).append(jqbr);
	};
	
}