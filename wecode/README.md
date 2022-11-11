##오늘 시험에서 사용했던 git 명령어 최소 3개 이상 정리

### git remote add origin

git remote add origin: 레포 주소에 오리진이라는 별명을 붙여주는 명령어.
Git remote를 쳤을떄 origin이라고 나오면 잘 연결한것. 혹은 git remote --v를 입력했을때 orgin https://주소주소 가 나오면 잘 연결된것.

### git branch

독립된 공간 만들기. 독립적인 개발공간을 만드는 명령어
예) git branch [브랜치 이름] -> 브랜치 이름은 내가 만들면 됨. 마스터나 메인 브렌치에서 작업하지 않는게 일반적.

### git add

git add: 이력을 남길 준비를 하는 명령어. 두가지 방법이 있다
git add . : .(닷)은 전체 파일에 적용. 더 많이 사용
git add [파일이름]: 일부 파일에 적용
