javascript:(function() {

	var item = function(desc) {
		$('input.new-task-text').val(desc);
		$('input.js-add-checklist-item').click();
	};

	$('a.js-add-checklist-menu').click();
	$('input.js-add-checklist').click();

	setTimeout(function() {
		item('Coding');
		item('Automated tests');
		item('Migration and rollback planning');
		item('Code review');
		item('Cross-browser testing');
		item('Crash testing');
		item('Exploratory testing');
		item('QA environment deployment');
		item('Acceptance testing');
	}, 500);

})();

