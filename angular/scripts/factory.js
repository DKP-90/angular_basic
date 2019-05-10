angular.module('ngcribs')
.factory('cribfactory',function(){
	
	var json=[{"userappid":"rbkapp_580f2f2e4a3f6","name":"ajay cs","photo_url":"\/assets\/img\/user-avtr.png","onesignal_id":"a3b29519-bee9-4b38-a294-5fa27f16d264","emailid":"ajaycs74@gmail.com"}
	,{"userappid":"rbkapp_5821815953f90","name":"ajay kumar","photo_url":"https:\/\/lh3.googleusercontent.com\/-VOV4G5tWo5c\/AAAAAAAAAAI\/AAAAAAAAAAA\/AKTaeK-hYN0IAA-6rNPKa7fgLLCBC7gMHw\/s96-c\/photo.jpg","onesignal_id":"","emailid":"ajay.kumar9573@gmail.com"}
	,{"userappid":"rbkapp_5842aed7ebc51","name":"Indrajaya Putra","photo_url":"https:\/\/lh3.googleusercontent.com\/-1s41U2g79cA\/AAAAAAAAAAI\/AAAAAAAAAAA\/AEMOYSCF9wKr1ql1EIdbYIh-m2k_XV_LyA\/s96-c\/photo.jpg","onesignal_id":"","emailid":"chandrakusuma321@gmail.com"}
	,{"userappid":"rbkapp_584b9365e19a0","name":"Ajay Kumar","photo_url":"https:\/\/lh4.googleusercontent.com\/-eUPfQMi8Zgk\/AAAAAAAAAAI\/AAAAAAAAATo\/XhITzzXGeZ4\/s96-c\/photo.jpg","onesignal_id":"APA91bF5bVx0TZnQYmUewcVCsQyE74gCuaVHFgdy6rPN9aaN-PXgm-bZvWLv6pSJ0q6jiXPt9DJpueWYjeJQrblr5tykVHGMT-6T7bMLdWAMOeMrjfiIWTNPwZGoNX5w8W4E3U28QMLm","emailid":"akajaykumar267@gmail.com"}
	,{"userappid":"rbkapp_584e8ae06078a","name":"Ajay Raj","photo_url":"https:\/\/lh5.googleusercontent.com\/-ShDgaYT9vNU\/AAAAAAAAAAI\/AAAAAAAAABM\/1acBf2nFk0s\/s96-c\/photo.jpg","onesignal_id":"APA91bEkFuXywFmvzW4Ncgedgz4-WcYC3grdQhdm3fu3R6uqdE_9wzH7_kGsNCCVZEoYcrvrt9zUW4XX218Jr0BhnWY8WzfVMXyboMZGKQdeoMGi_MB0owx27lcaaETyDVUEQiuH7P7y","emailid":"1920ajayraj@gmail.com"}
	,{"userappid":"rbkapp_585d544fbd34b","name":"ajay pal","photo_url":"https:\/\/lh3.googleusercontent.com\/--eteA_j8m5w\/AAAAAAAAAAI\/AAAAAAAAAGY\/7rdqJf2X6bc\/s96-c\/photo.jpg","onesignal_id":"63b11a00-afbf-49ec-9a50-13b6cfaf4a34","emailid":"ajaypal021995@gmail.com"}
	]
	function get_data()
	{
		return json;
	}
	return {
		get_data: get_data
	}
}