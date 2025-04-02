
$(function(){
    // 30초 자가진단
    $("#calculationBtn").on("click",function(){

        let pay1 = $("#pay1");
        let pay2 = $("#pay2");

        // 빈값 체크
        if(pay1.val() === ""){
            alert("총 대출금액을 입력해주세요.");
            pay1.focus();
            return false;
        }

        // 숫자만 허용
        if(chkType(pay1.val(), 0) === false) {
            alert("숫자만 입력 가능합니다.");
            return false;
        }

        // 계산 로직 (소수점 제거)
        let loan= pay1.val();
        let month= pay2.val();
        let rawValue = pay1.val() * 0.1;          
        let result1 = parseInt(rawValue, 10);     
        let result2 = parseInt(result1 / 36, 10); 

        // 화면 전환
        $("#step1").hide();
        $("#step1Result").show().css({'opacity':'100'});

        // 결과를 3자리마다 콤마 찍어 표시하기
        // 방법1) 정규식 replace
        function addCommas(num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        // 방법2) toLocaleString() (한국어/영어 환경 등에 따라 다를 수 있음)
        // let formatted1 = result1.toLocaleString();
        // let formatted2 = result2.toLocaleString();

        // 결과 반영 (정규식 버전 예시)
        $("#step1Result .result").text(addCommas(loan));
        $("#step1Result .result1").text(addCommas(result1));
        $("#step1Result .month").text(addCommas(month));
        $("#step1Result .result2").text(addCommas(result2));

        return false;
    });
});

function chkType(str,type)
{
	switch (type)
	{
		case 0://�レ옄留�
			var filter = /^[0-9][0-9]+$/;
			break;
		case 1://�곷Ц,�レ옄留�
			var filter = /^[0-9a-zA-Z]+$/;
			break;
		case 2://�곷Ц,�レ옄留�(泥レ옄�� �곷Ц)
			var filter = /^[a-zA-Z][0-9a-zA-Z]+$/;
			break;
		case 3://�곷Ц,�レ옄,_
			var filter = /^\w+$/;
			break;
		case 4://�곷Ц留�
			var filter = /^[a-zA-Z]+$/;
			break;
		case 5://�レ옄留� + -
			var filter = /^[1-9][0-9]+$/;
			break;
		case 6://��-�곷Ц留�
			var filter = /^[a-z]+$/;
			break;
		case 7://��-�곷Ц,�レ옄留�
			var filter = /^[0-9a-z]+$/;
			break;
		case 8://硫붿씪
			var filter =/^[a-zA-Z0-9\-\.\_]+\@[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,4})$/;
			break;
		case 9://�쒓��レ옄�곷Ц
			//var filter = /^[a-zA-Z0-9��-�� ]+$/;
			var filter = /^[0-9|a-zA-Z|��-��|��-��|媛�-��]+$/;
			break;
		case 10://Null(�ъ슜湲덉�)
			var filter =/^[a-zA-Z0-9\-\.\_]+\@[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,4})$/;
			break;
	}
	if(!filter.test(str)) {
		return false;
	} else {
		return true;
	}
}


function numberCheck(obj) {
	$(obj).val($(obj).val().replace(/[^0-9]/g,""));
}