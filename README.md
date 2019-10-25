# Final_Project
Bixby Programming  & AI chatBot
### Project__척추요정
<img src="https://lab.ssafy.com/jupang/final_project/raw/develop/images/logo.png" alt="image-20191025162159210" style="zoom:50%;" />

### Team__ThinkBix
"안녕하십니까! 사용자의 건강을 책임지는 개발자 ThinkBix 입니다."
## 목차
1. Bixby Project
- 서버구조(#menu1)
- 데이터 구조(#menu2)
- Backend Page
- 캡슐구조
- 주요기능
- 발화

---

### Bixby Project
##### 서버구조<a id="#menu1"></a>
![image-20191025165524228](https://lab.ssafy.com/jupang/final_project/raw/develop/images/server_architecture.png)

##### 데이터 구조
![image-20191025165759600](https://lab.ssafy.com/jupang/final_project/raw/develop/images/database.png)

###### Backend Page
* 데이터를 관리하기 위한 Backend Page

![image-20191025160611797](https://lab.ssafy.com/jupang/final_project/raw/develop/images/backendpage_login.png)
* Admin으로 로그인 이후 필요한 데이터 추가 가능

![image-20191025160551931](https://lab.ssafy.com/jupang/final_project/raw/develop/images/backendpage.png)

##### 캡슐구조
assets,code,models,resources 구성 되어 있습니다.
assets: 정적으로 사용되는 파일 저장
code: 
models
- actions: 각 기능에 필요한 액션들과 concepts 폴더에는 액션에서 사용될 모델 타입들로 구성

- concepts: structure라는 다수의 model을 포함하는 타입이 존재합니다. 전체적인 스트레칭정보를 관리하는 StretchingSel 과 각 스트레칭 스텝에 관한 정보를 저장하는 StretchingStep 은 structure로 구성되어 있고 structure에 포함되어 있는 model들이 정의되어있습니다. 또한, action의 주요 input인 part, place, situation, searchkeyword로 구성되어 있습니다.
resources

- base/endpoints.bxb : action의 input을 연결하고 action과 code를 연결 

- ko-KR/dialogs: 페이지 아래 쪽에 random으로 나타나는 부위/장소/상황별 dialog 의 정보를 저장

- ko-KR/layouts,views: 특정 발화에 대한 결과 허면을 구성하는 파일

- ko-KR/voca : 동의어 처리, 특정단어를 빅스비에게 학습시키기 위한 단어 파일

##### 주요 기능
- 부위별 장소별 상황별 맞춤형 스트레칭 검색
- 스트레칭 영상 연결
- Bixby 실행화면
  * 스트레칭 검색 시
  
  <img src="https://lab.ssafy.com/jupang/final_project/raw/develop/images/apppage.png" alt="image-20191025160922003" style="zoom:50%; align-items:left" />
  
  * 리스트에서 클릭 시 DetailPage
  
    - <img src="https://lab.ssafy.com/jupang/final_project/raw/develop/images/appdetail.png" alt="image-20191025161023730" style="zoom:50%;" />
    
  * 운동 시작 시
  
    - <img src="https://lab.ssafy.com/jupang/final_project/raw/develop/images/appstep.png" alt="image-20191025161115304" style="zoom:50%;" />

  
##### 발화(Training)
  
