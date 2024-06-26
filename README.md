# 스파르타 코딩클럽 데브캠프 1일차 과제
## 로그인 UI 구성

- **한줄소개**: 다양한 라이브러리를 이용하여 로그인 UI 구성

- **사용기술**: Next.js (app), yarn berry (yarn 4.1.1), shadcn/ui, zod, react-hook-form

- **주요내용**:
	- 컴포넌트 기반의 shadcn/ui를 이용한 간편한 ui 구성
	- 유효성 라이브러리 zod와 react-hook-form을 이용한 간편한 form 이벤트 구성

- **트러블슈팅**:
	1. **yarn berry git ignore 지정 문제**
		- **문제**: yarn berry의 pnp 방식으로 프로젝트를 진행하면서, 의존성이 .yarn 내부의 캐시로 저장되는데 이 폴더를 .gitignore 파일에 등록하지 않아서 프로젝트 크기가 커지고, 깃허브 원격 레파지토리와 프로젝트가 연결되지 않는 문제
		- **해결**: 문제가 되는 큰 파일이 포함된 커밋내역을 찾아서 rebase로 해당 파일 변경
		- **결과**: 원격 레파지토리와 연결 성공

	2. **캐러쉘 버튼에 유효성 검사 로직 추가 방식 개선**
		- **문제**: shadcn/ui를 통해 내려받은 carousel 컴포넌트를 사용하면서, 캐러쉘의 Next 버튼에 유효성 검사 로직을 추가해야하는 소요발생. 이를 구현하기 위해서 불필요한 소스파일 수정 발생
		- **해결**: 내부에서 Next버튼의 동작 (다음 슬라이드로 이동)을 지원하는 커스텀훅을 확인. 해당 커스텀 훅은 Context 기반으로 구성되어있으며, Provider 내부에서 모두 사용가능. 따라서 해당 커스텀 훅을 모듈화하여 필요한 부분에서 사용. form의 유효성 검사가 성공할 시에만 다음장으로 넘길 수 있도록 구현해야했으며, 이를 위해 버튼 상위의 form에서 next 버튼의 클릭이벤트를 감지(이벤트 버블링, 버튼의 name 태그로 구분) 후 폼 유효성 검사 및 다음 슬라이스로 이동 이벤트를 실행
		- **결과**: 불필요한 기본 소스코드 변경 없이 원하는 유효성검사가 포함된 슬라이스 이동 구현

	3. **캐러쉘 내부 form에 따른 탭 이벤트 시 슬라이드 변경 제제**
		- **문제**: 캐러쉘 내부에 form이 하나로 이루어져있지만 두단계로 나누어져있기 때문에, 앞선 단계의 유효성이 통과되지 않을 경우 다음 슬라이드(단계)로 넘어가면 안된다. 버튼을 통한 해당 과정은 막을 수 있었지만, 탭을 통해 슬라이스 이동이 가능했음
		- **해결**: 페이지 정보를 가져올 수 있는 carousel의 api 속성을 통해서 페이지정보를 상태로 관리, 1페이지 일 경우 2페이지의 tabIndex를 -1로 설정하여 탭이벤트 방지, 반대로 2페이지일 경우 1페이지의 tabIndex를 -1로 설정하여 tab이벤트 방지
		- **결과**: tab을 통한 1페이지와 2페이지의 슬라이드 이동을 막았음
