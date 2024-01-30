# GitHub Project 사용 방법

GitHub Project는 프로젝트의 작업 항목을 조직하고 우선순위를 정하는 데 도움을 줍니다. 다음은 GitHub Project를 사용하는 기본적인 방법입니다:

1. 프로젝트 보드에 접근하여 새로운 카드를 생성하거나 기존 이슈를 카드로 추가합니다.

2. 카드를 '할 일(To Do)', '진행 중(In Progress)', '완료(Done)' 등의 칼럼에 드래그하여 작업의 상태를 업데이트합니다.

## 커밋 메시지 템플릿 사용

.gitmessage.txt 파일을 커밋 메시지 템플릿으로 사용하여 일관된 커밋 메시지를 유지할 수 있습니다. 템플릿을 사용하려면 다음 단계를 따릅니다:

1. .gitmessage.txt 파일을 프로젝트 디렉토리에 생성합니다.
   파일 내에 커밋 메시지의 기본 구조를 정의합니다.

2. 터미널에 다음과 같은 명령어를 입력하여 Git 템플릿을 전역으로 설정합니다:

```sh
git config --global commit.template ~/.gitmessage.txt
```

3. 커밋을 진행할 때 Git은 .gitmessage.txt 파일의 내용을 커밋 메시지 편집기에 자동으로 로드합니다.
   필요에 따라 주석을 해제하고 커밋 메시지를 작성합니다.

.gitmessage.txt 파일:

```
# <타입>: <제목> 형식으로 작성하며 제목은 최대 50글자 정도로만 입력
# 제목을 아랫줄에 작성, 제목 끝에 마침표 금지, 무엇을 했는지 명확하게 작성

################
# [✨feat]: 새로운 기능 추가
# [🐛fix]: 버그 수정
# [📝docs]: 문서 수정
# [♻️refactor]: 코드 리팩토링 (기능에 영향을 주지 않을 때)
# [🎨style]: css 스타일링
# [🔨chore]: 빌드 부분 혹은 패키지 매니저 수정사항
################
# ------------------
```
