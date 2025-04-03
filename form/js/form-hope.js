const testbody = document.getElementById('test_body');
testbody.innerHTML = `
<div class="form-box" id="fm-box">
<div class="inner">
    <h1 class="form-top-title" style="text-align:-webkit-center;">빚과 이자의 부담에서 즉시 벗어나세요!<br>개인회생/파산 무료 상담</h1>
    <div class="form-box-inner">
        <form action="" id="form_e11" method="POST" target="hidden_iframe11"  onsubmit="dll();submitted=true;">
           <input type="hidden" name="entry.1187665206"  value="네이버 파워링크">
            <input type="hidden" name="entry.1275557685"  value="모바일 플로팅 메뉴 신청">
            <div class="form-box-tb-out">
            <br>
                <table class="form-box-tb">
                    <tbody>
                
                        
                    <tr>
                        <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->이름</th>
                        <td>
                            <input type='text' name='entry.1050124842' id='name' class="form-control" placeholder="성함" maxlength="4" style="font-size:15px;">
                        </td>
                    </tr>
                    <tr>
                        <th><!--<i class="fa fa-phone" aria-hidden="true"></i>-->연락처</th>
                        <td>
                            <input type='text' name='entry.754157585' id='phone' class="form-control" placeholder="휴대폰번호" maxlength="11" style="font-size:15px;">
                        </td>
                    </tr>
                    <tr>
                        <th>신청유형</th>
                        <td>
                       
                            <select name="entry.1242013704" id='id-number' class="form-control" placeholder="신청 유형" style="font-size:15px;">

                                <option value="신청종류" selected disabled>신청유형
                                    <option value="개인회생">개인회생</option>
                                    <option value="개인파산">개인파산</option>
                                   
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <th>채무액 선택</th>
                        <td>
                       
                            <select name="entry.542778365" id='loan_value' class="form-control" placeholder="채무액 선택" style="font-size:15px;">

                                <option value="채무액 선택" selected disabled>채무액 선택
                                <option value="1천만원 미만" disabled>1천만원 미만(신청 불가)</option>
                                <option value="1천만-5천만원">1천만-5천만원</option>
                                <option value="5천만-1억원">5천만-1억원</option>
                                <option value="1-3억원">1-3억원</option>
                                <option value="3-5억원">3-5억원</option>
                                <option value="5억원 이상">5억원 이상</option>
                                   
                            </select>
                        </td>
                    </tr>

                     <tr>
                        <th>직업 선택</th>
                        <td>
                       
                            <select name="entry.859239181" id='job' class="form-control" placeholder="직업 선택" style="font-size:15px;">

                                <option value="직업 선택" selected disabled>직업 선택
                                    <option value="직장인">직장인</option>
                                    <option value="사업자">사업자</option>
                                    <option value="프리랜서">프리랜서</option>
                                    <option value="무직">무직 (개인회생 불가. 개인파산 가능)</option>
                                   
                            </select>
                        </td>
                    </tr>

                     <tr>
                        <th>월소득 선택</th>
                        <td>
                       
                            <select name="entry.1889054973" id='salary' class="form-control" placeholder="월소득 선택" style="font-size:15px;">

                                <option value="월소득 선택" selected disabled>월소득 선택
                                <option value="100만원 미만">100만원 미만</option>
                                <option value="100-200만원">100-200만원</option>
                                <option value="200-500만원">200-500만원</option>
                                <option value="500-700만원">500-700만원</option>
                                <option value="700-1,000만원">700-1,000만원</option>
                                <option value="1,000만원 이상">1,000만원 이상</option>
                                   
                            </select>
                        </td>
                    </tr>

                    

                    <tr>
                        <th>통화가능시간</th>
                        <td>
                            <select name="entry.1286210897" id='time' class="form-control" placeholder="통화가능시간" style="font-size:15px;">

                                <option value="통화가능시간" selected disabled>통화가능시간
                                    <option value="언제나 통화 가능">언제나 통화 가능</option>
                                    <option value="오전 09:00~10:00">오전 09:00 ~ 10:00</option>
                                    <option value="오전 10:00~11:00">오전 10:00 ~ 11:00</option>
                                    <option value="오전 11:00~12:00">오전 11:00 ~ 12:00</option>
                                    <option value="점심 12:00~01:00">점심 12:00 ~ 01:00</option>
                                    <option value="오후 01:00~02:00">오후 01:00 ~ 02:00</option>
                                    <option value="오후 02:00~03:00">오후 02:00 ~ 03:00</option>
                                    <option value="오후 03:00~04:00">오후 03:00 ~ 04:00</option>
                                    <option value="오후 04:00~05:00">오후 04:00 ~ 05:00</option>
                                    <option value="오후 05:00~06:00">오후 05:00 ~ 06:00</option>
                                    <option value="오후 06:00~07:00">오후 06:00 ~ 07:00</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>문의사항</th>
                        <td>
                            <textarea name='entry.2137035124' id='message' class="form-control" placeholder="문의사항을 적어주세요.(선택)" style="min-height:100px;font-size:15px;"></textarea>
                        </td>
                    </tr>
                  
                    <tr>
                        <td colspan="2" style="border-bottom: none"> 
                          
                        
                            <input class="submit-btn" type='submit' id='send_message' value='무료 상담 신청하기' disabled style="background-color: #595858;">
                            <input class="submit-btn"  id='send_message1' value='잠시만 기다려주세요.' disabled style="background-color:black;display:none;">
                            <div class="form-agree-box">
                                <p class="form-info-agree">
                                    <span>
                                       
                                        <input type="checkbox" name="agree11" id="agree11" value="개인정보보호정책 동의" checked style="display:inline;">
                                        <label style="color:black; font-weight:300;font-size:13px;margin-top:-3px;" for="agree11">개인정보보호정책</label>
                    
                    
                                        <span class="privacyBtn" style="color:black;font-weight:400; font-size: 13px;margin-top:-3px; " onclick="privacyPopUp()">
                                            [자세히 보기]
                                        </span>
                                    </span>
                                </p>

                                <script type="text/javascript">var submitted = false;</script>

                                <iframe name="hidden_iframe11" id="hidden_iframe11" style="display:none;" onload=""></iframe>
                   
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </form>
    </div>
</div>
</div><!----form-end------>
</div><!-- contentsWrap end -->



`;

document.body.appendChild(testbody.content);