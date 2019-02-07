$(document).ready(function(){
	//code
	/*$('.dropdown').click(function(){
		$(this).toggleClass('show');
		$(this).children('.dropdown-menu').toggleClass('show');

	});
	$('body').click(function(e) {
	    if ($(e.target).closest('.dropdown').length === 0) {
	    	$('.dropdown').removeClass('show');
			$('.dropdown').children('.dropdown-menu').removeClass('show');
	    }
	});*/
	$(window).click(function() {
	//Hide the menus if visible
	if($('.dropdown-menu').css('display') == 'block')
		$('.dropdown').removeClass('show');
		$('.dropdown').children('.dropdown-menu').removeClass('show');
	});

	$('.dropdown').click(function(event){
	    event.stopPropagation();
	    $(this).toggleClass('show');
		$(this).children('.dropdown-menu').toggleClass('show');
	});
	$('.navbar-toggler').click(function(){
	$(this).next().toggleClass('show');

	});

	$('.OptionForm').attr('DataShow',false); // update forms states when start program

	class activityForm
	{
		constructor(selector){
			this.op_f = '.OptionForm';
			this.selector = '#'.concat(selector);
			this.show = $(this.selector).attr('DataShow');
		}
		get getShow(){
			return this.show;
		}
		view_form(){
			this.getUpdateShow(); //imprtant to update states of form
			
			if(!(this.show)){
				this.HideForm();
				$(this.selector).fadeIn(500);
				this.show =! this.show;
				this.setUpdateShow();
				console.log('If work!');
			}else{
				this.HideForm();
				console.log('Else work!');
			}
			
		}

		HideForm(){
			$(this.op_f).hide();
			$(this.op_f).attr('DataShow',false); //important update states & solve some problems
			this.show =false;
			this.setUpdateShow();
		}

		FadeForm(){
			$(this.selector).fadeOut(1000);
			this.show = false;
			this.setUpdateShow();
		}

		setUpdateShow(){
			//use it to save the states of all form in Datashow attribute
			//it solve some problems
			$(this.selector).attr('DataShow',this.show)
		}

		getUpdateShow(){
			//Use this method to update the vaule of show variable 
			//becaude it does't updated in some cases
			//the attr method return string so i comparse it with another string "true" to
			//return boolean
			this.show = ($(this.selector).attr('DataShow') == 'true' );
		}
	};
	
	//Student Object
	var student = new activityForm('studentForm');

	$('#student').click(function(){
		student.view_form();
	});


	//Detail Object
	var detail = new activityForm('detailForm');

	$('#detail').click(function(){
		detail.view_form();
	});

	//Attendance Object
	var attendance = new activityForm('attendanceForm');
	$('#attendance').click(function(){
		attendance.view_form();
	});

	//Center treatment Object
	var center = new activityForm('centerForm');
	$('#center').click(function(){
		center.view_form();
	});	

	//Cancel Btutton Event For All
	$('.container').on("click",'#cancel',function(){
		if(student.getShow){	student.FadeForm(); }
		if(detail.getShow){		detail.FadeForm(); }
		if(attendance.getShow){		attendance.FadeForm(); }
		if(center.getShow){	center.FadeForm(); }
		//$(this).parents('#studentForm').fadeOut(1000);
	});

});


//button functionality
	/*var element = '<div class="col-12 col-lg-9 col-md-12 col-s-12 bg-blue rounded mb-4" id="studentForm">\
				<form class="was-validated pt-2">\
				<label class="d-flex">\
					<span>Student Form</span>\
					<i id="cancel" class="ml-auto fas fa-times"></i>\
				</label>\
				  <div class="row form-group">\
				    <div class="col">\
				      <input type="<tex></tex>t" class="form-control" placeholder="First name" required>\
				    </div>\
				    <div class="col">\
				      <input type="text" class="form-control" placeholder="Last name" required>\
				    </div>\
				  </div>\
				  <div class="form-group">\
				    <input type="text" class="form-control" placeholder="Phone Number" required>\
				  </div>\
				  <div class="form-group">\
				    <input type="text" class="form-control" placeholder="Parent Number" required>\
				  </div>\
				  <div class="form-group raw">\
				  	<select class="custom-select col" required>\
					  <option value="" class="respon-font">Study year</option>\
					  <option value="1">One</option>\
					  <option value="2">Two</option>\
					  <option value="3">Three</option>\
					</select>\
				  </div>\
				  <div class="form-group raw">\
				  	<select class="custom-select col" required>\
					  <option value="" class="respon-font">select Group</option>\
					  <option value="1">One</option>\
					  <option value="2">Two</option>\
					  <option value="3">Three</option>\
					</select>\
				  </div>\
				  <div class="w-25 mx-auto form-group">\
					<input type="submit" id="add-btn" class="btn" name="submit" value="Add">\
				</div>\
				</form>\
			</div>';*/
	//$('#studentForm').hide();