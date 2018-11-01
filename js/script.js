$(function(){
	$('.hide').on('click',function(){
		if($(this).is(':checked')){
			$(this).next().find('.fa').removeClass().addClass('fa fa-plus-circle');
		} else{
			$(this).next().find('.fa').removeClass().addClass('fa fa-minus-circle');
		}
	});
	$('.form-sel').select2({
		minimumResultsForSearch: Infinity
	});
	
});

function validateName() {
	var userName=document.getElementById('name-form');
	userName.style.backgroundColor ='#fff';

	if(!userName.value){
		userName.style.border ='2px solid #a94442';
		document.getElementById('name-i').classList.remove('fa-check-circle');
		document.getElementById('name-i').classList.add('fa-exclamation-triangle');
		
	}else{
		userName.style.border ='2px solid #95e3e0';
		document.getElementById('name-i').classList.add('fa-check-circle');
		document.getElementById('name-i').classList.remove('fa-exclamation-triangle');
		
	}
}
function validateEmail() {
	var userEmail=document.getElementById('email-form')
	var pattern = new RegExp(/^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i);
	userEmail.style.backgroundColor ='#fff';
	if(!pattern.test(userEmail.value)){
		userEmail.style.border ='2px solid #a94442';
		document.getElementById('name-e').classList.remove('fa-check-circle');
		document.getElementById('name-e').classList.add('fa-exclamation-triangle');
	}else{
		userEmail.style.border ='2px solid #95e3e0';
		document.getElementById('name-e').classList.add('fa-check-circle');
		document.getElementById('name-e').classList.remove('fa-exclamation-triangle');
	}
	
}
function validate() {
	var userName=document.getElementById('name-form');
	var userEmail=document.getElementById('email-form');
	var pattern = new RegExp(/^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i);
	validateName();
	validateEmail();
	if(!userName.value || !pattern.test(userEmail.value)) return false;
	return true;

}

